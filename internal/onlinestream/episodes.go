package onlinestream

import (
	"errors"
	"fmt"
	"github.com/seanime-app/seanime/internal/onlinestream/providers"
	"github.com/seanime-app/seanime/internal/onlinestream/sources"
	"github.com/seanime-app/seanime/internal/util/comparison"
	"github.com/seanime-app/seanime/internal/util/result"
	"sync"
	"time"
)

const (
	ProviderGogoanime Provider = "gogoanime"
	ProviderZoro      Provider = "zoro"
)

var (
	Providers = []Provider{
		ProviderGogoanime,
		ProviderZoro,
	}

	ErrNoAnimeFound         = errors.New("no anime found")
	ErrNoEpisodes           = errors.New("no episodes found")
	errNoEpisodeSourceFound = errors.New("no source found for episode")
)

type (
	Provider string

	AnimeEpisodes struct {
		ProviderEpisodes []*ProviderEpisodes `json:"providerEpisodes"`
	}

	ProviderEpisodes struct {
		Provider Provider   `json:"provider"`
		Episodes []*Episode `json:"episodes"`
	}

	Episode struct {
		Provider      Provider                `json:"provider"`
		ID            string                  `json:"id"`
		Number        int                     `json:"number"`
		URL           string                  `json:"url"`
		Title         string                  `json:"title"`
		ServerSources []*EpisodeServerSources `json:"serverSources"`
	}

	EpisodeServerSources struct {
		Server  onlinestream_providers.Server `json:"server"`
		Headers map[string]string             `json:"headers"`
		*onlinestream_sources.VideoSource
	}

	AnimeEpisodesCache struct {
		*result.Cache[int, *AnimeEpisodes]
	}

	// EpisodeCache stores individual episodes.
	EpisodeCache struct {
		*result.Cache[string, *Episode] // key: mediaId + provider + episodeNumber + dubbed
	}

	// ProviderEpisodesCache stores the results of the search
	ProviderEpisodesCache struct {
		*result.Cache[int, []*onlinestream_providers.ProviderEpisode] // key: mediaId
	}
)

func (os *OnlineStream) GetEpisodes(mId int, titles []*string, from int, to int, dubbed bool) (*AnimeEpisodes, bool) {
	wg := sync.WaitGroup{}

	ae := &AnimeEpisodes{
		ProviderEpisodes: make([]*ProviderEpisodes, 0, len(Providers)),
	}

	for _, _provider := range Providers {
		wg.Add(1)
		go func(provider Provider) {
			defer wg.Done()

			episodes := make([]*Episode, 0)
			var providerEpisodes []*onlinestream_providers.ProviderEpisode

			if cached, found := os.providerEpisodesCache.Get(mId); found {
				providerEpisodes = cached
			} else {
				var err error
				providerEpisodes, err = os.getProviderEpisodes(provider, titles, dubbed)
				if err != nil {
					os.logger.Error().Err(err).Msg("failed to get provider episodes")
					return
				}
				os.providerEpisodesCache.SetT(mId, providerEpisodes, 10*time.Minute)
			}

			for _, providerEpisode := range providerEpisodes {
				if providerEpisode.Number >= from && providerEpisode.Number <= to {
					// Check if the episode is cached to avoid fetching the sources again.
					key := fmt.Sprintf("%d$%s$%d$%v", mId, provider, providerEpisode.Number, dubbed)

					if cached, found := os.episodeCache.Get(key); found {
						episodes = append(episodes, cached)
						continue
					}

					// Fetch episode sources
					episodeSource, err := os.getEpisodeSources(provider, providerEpisode)
					if err != nil {
						continue
					}

					episode := &Episode{
						Provider:      provider,
						ID:            providerEpisode.ID,
						Number:        providerEpisode.Number,
						URL:           providerEpisode.URL,
						Title:         providerEpisode.Title,
						ServerSources: episodeSource,
					}
					episodes = append(episodes, episode)

					os.episodeCache.SetT(key, episode, 10*time.Minute)

				}
			}

			if len(episodes) > 0 {
				ae.ProviderEpisodes = append(ae.ProviderEpisodes, &ProviderEpisodes{
					Provider: provider,
					Episodes: episodes,
				})
			}

		}(_provider)
	}

	wg.Wait()

	if len(ae.ProviderEpisodes) == 0 {
		return nil, false
	}

	return ae, true
}

//
//func (os *OnlineStream) GetAllEpisodes(mId int, titles []*string, bypassCache bool) (*AnimeEpisodes, error) {
//	// Check if the episodes are cached.
//	if !bypassCache {
//		if cached, found := os.cache.Get(mId); found {
//			return cached, nil
//		}
//	}
//	wg := sync.WaitGroup{}
//
//	episodes := make([]*Episode, 0, len(Providers))
//	for _, _provider := range Providers {
//		wg.Add(1)
//		go func(provider Provider) {
//			defer wg.Done()
//
//			providerEpisodes, err := os.getProviderEpisodes(provider, titles, false)
//			if err != nil {
//				return
//			}
//
//			for _, providerEpisode := range providerEpisodes {
//				episodeSource, err := os.getEpisodeSources(provider, providerEpisode)
//				if err != nil {
//					continue
//				}
//				episode := &Episode{
//					Provider:      provider,
//					ID:            providerEpisode.ID,
//					Number:        providerEpisode.Number,
//					URL:           providerEpisode.URL,
//					Title:         providerEpisode.Title,
//					ServerSources: episodeSource,
//				}
//				episodes = append(episodes, episode)
//			}
//
//		}(_provider)
//	}
//	wg.Wait()
//
//	if len(episodes) == 0 {
//		return nil, ErrNoEpisodes
//	}
//
//	animeEpisodes := &AnimeEpisodes{
//		ProviderEpisodes: make([]*ProviderEpisodes, 0, len(Providers)),
//	}
//
//	os.cache.SetT(mId, animeEpisodes, 10*time.Minute)
//
//	return animeEpisodes, nil
//}

// getEpisodeSources gets the onlinestream_providers.ProviderEpisode server sources from the provider.
// It returns errNoEpisodeSourceFound if no sources are found.
func (os *OnlineStream) getEpisodeSources(provider Provider, providerEpisode *onlinestream_providers.ProviderEpisode) ([]*EpisodeServerSources, error) {
	var providerServers []*onlinestream_providers.ProviderServerSources
	switch provider {
	case ProviderGogoanime:
		res, err := os.gogo.FindEpisodeServerSources(providerEpisode, onlinestream_providers.VidstreamingServer)
		if err == nil {
			providerServers = append(providerServers, res)
		}
		res, err = os.gogo.FindEpisodeServerSources(providerEpisode, onlinestream_providers.GogocdnServer)
		if err == nil {
			providerServers = append(providerServers, res)
		}
		//res, err = os.gogo.FindEpisodeServerSources(providerEpisode, onlinestream_providers.StreamSBServer)
		//if err == nil {
		//	providerServers = append(providerServers, res)
		//}
	case ProviderZoro:
		res, err := os.zoro.FindEpisodeServerSources(providerEpisode, onlinestream_providers.VidcloudServer)
		if err == nil {
			providerServers = append(providerServers, res)
		}
		res, err = os.zoro.FindEpisodeServerSources(providerEpisode, onlinestream_providers.VidstreamingServer)
		if err == nil {
			providerServers = append(providerServers, res)
		}
		//res, err = os.zoro.FindEpisodeServerSources(providerEpisode, onlinestream_providers.StreamtapeServer)
		//if err == nil {
		//	providerServers = append(providerServers, res)
		//}
		//res, err = os.zoro.FindEpisodeServerSources(providerEpisode, onlinestream_providers.StreamSBServer)
		//if err == nil {
		//	providerServers = append(providerServers, res)
		//}
	}

	if len(providerServers) == 0 {
		return nil, errNoEpisodeSourceFound
	}

	ret := make([]*EpisodeServerSources, 0, len(providerServers))

	for _, server := range providerServers {
		for _, source := range server.Sources {
			ret = append(ret, &EpisodeServerSources{
				Server:      server.Server,
				Headers:     server.Headers,
				VideoSource: source,
			})
		}
	}

	return ret, nil
}

// getProviderEpisodes gets the anime episodes from provider based of the titles.
// It returns ErrNoAnimeFound if the anime is not found or ErrNoEpisodes if no episodes are found.
func (os *OnlineStream) getProviderEpisodes(provider Provider, titles []*string, dubbed bool) ([]*onlinestream_providers.ProviderEpisode, error) {
	var ret []*onlinestream_providers.ProviderEpisode
	romajiTitle := titles[0]

	// Get search results.
	var searchResults []*onlinestream_providers.SearchResult
	switch provider {
	case ProviderGogoanime:
		res, err := os.gogo.Search(*romajiTitle, dubbed)
		if err == nil {
			searchResults = res
		}
	case ProviderZoro:
		res, err := os.zoro.Search(*romajiTitle, dubbed)
		if err == nil {
			searchResults = res
		}
	}
	if len(searchResults) == 0 {
		return nil, ErrNoAnimeFound
	}

	// Filter results to get the best match.

	compBestResults := make([]*comparison.SorensenDiceResult, 0, len(searchResults))
	for _, r := range searchResults {
		// Compare search result title with all titles.
		compBestResult, found := comparison.FindBestMatchWithSorensenDice(&r.Title, titles)
		if found {
			compBestResults = append(compBestResults, compBestResult)
		}
	}
	compBestResult := compBestResults[0]
	for _, r := range compBestResults {
		if r.Rating > compBestResult.Rating {
			compBestResult = r
		}
	}

	// Get most accurate search result.
	var bestResult *onlinestream_providers.SearchResult
	for _, r := range searchResults {
		if r.Title == *compBestResult.OriginalValue {
			bestResult = r
			break
		}
	}

	// Fetch episodes.

	switch provider {
	case ProviderGogoanime:
		res, err := os.gogo.FindEpisodes(bestResult.ID)
		if err != nil {
			return nil, err
		}
		ret = res
	case ProviderZoro:
		res, err := os.zoro.FindEpisodes(bestResult.ID)
		if err != nil {
			return nil, err
		}
		ret = res
	}

	if len(ret) == 0 {
		return nil, ErrNoEpisodes
	}

	return ret, nil
}