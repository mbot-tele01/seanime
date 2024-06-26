package core

import (
	"context"
	"errors"
	"github.com/samber/lo"
	"github.com/seanime-app/seanime/internal/api/anilist"
	"github.com/seanime-app/seanime/internal/database/models"
)

func (a *App) IsOffline() bool {
	return a.Config.Server.Offline
}

// GetAnilistCollection returns the user's Anilist collection if it in the cache, otherwise it queries Anilist for the user's collection.
// When bypassCache is true, it will always query Anilist for the user's collection
func (a *App) GetAnilistCollection(bypassCache bool) (*anilist.AnimeCollection, error) {

	// Get Anilist Collection from App if it exists
	if !bypassCache && a.anilistCollection != nil {
		return a.anilistCollection, nil
	}

	return a.RefreshAnilistCollection()

}

// RefreshAnilistCollection queries Anilist for the user's collection
func (a *App) RefreshAnilistCollection() (*anilist.AnimeCollection, error) {

	// If the account is nil, return false
	if a.account == nil {
		return nil, nil
	}

	// Else, get the collection from Anilist
	collection, err := a.AnilistClientWrapper.AnimeCollection(context.Background(), &a.account.Username)
	if err != nil {
		return nil, err
	}

	// Remove lists with no status
	collection.MediaListCollection.Lists = lo.Filter(collection.MediaListCollection.Lists, func(list *anilist.AnimeCollection_MediaListCollection_Lists, _ int) bool {
		return list.Status != nil
	})

	// Save the collection to App
	a.anilistCollection = collection

	// Save the collection to AutoDownloader
	a.AutoDownloader.SetAnilistCollection(collection)

	// Save the collection to PlaybackManager
	a.PlaybackManager.SetAnilistCollection(collection)

	return collection, nil
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

func (a *App) GetAccount() (*models.Account, error) {

	if a.account == nil {
		return nil, nil
	}

	if a.account.Username == "" {
		return nil, errors.New("no username was found")
	}

	if a.account.Token == "" {
		return nil, errors.New("no token was found")
	}

	return a.account, nil

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// GetMangaCollection is the same as GetAnilistCollection but for manga
func (a *App) GetMangaCollection(bypassCache bool) (*anilist.MangaCollection, error) {

	// Get Anilist Collection from App if it exists
	if !bypassCache && a.mangaCollection != nil {
		return a.mangaCollection, nil
	}

	return a.RefreshMangaCollection()

}

// RefreshMangaCollection queries Anilist for the user's manga collection
func (a *App) RefreshMangaCollection() (*anilist.MangaCollection, error) {

	// If the account is nil, return false
	if a.account == nil {
		return nil, nil
	}

	// Else, get the collection from Anilist
	collection, err := a.AnilistClientWrapper.MangaCollection(context.Background(), &a.account.Username)
	if err != nil {
		return nil, err
	}

	// Remove lists with no status
	collection.MediaListCollection.Lists = lo.Filter(collection.MediaListCollection.Lists, func(list *anilist.MangaList, _ int) bool {
		return list.Status != nil
	})

	// Save the collection to App
	a.mangaCollection = collection

	return collection, nil
}
