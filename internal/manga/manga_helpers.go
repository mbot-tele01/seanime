package manga

import "github.com/seanime-app/seanime/internal/manga/providers"

func (cc *ChapterContainer) GetChapter(id string) (ret *manga_providers.ChapterDetails, found bool) {
	for _, c := range cc.Chapters {
		if c.ID == id {
			return c, true
		}
	}
	return nil, false
}
