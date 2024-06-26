package handlers

import "github.com/seanime-app/seanime/internal/discordrpc/presence"

// HandleSetDiscordMangaActivity
//
//	@summary sets manga activity for discord rich presence.
//	@route /api/v1/discord/presence/manga [POST]
//	@returns boolean
func HandleSetDiscordMangaActivity(c *RouteCtx) error {

	type body struct {
		Title   string `json:"title"`
		Image   string `json:"image"`
		Chapter string `json:"chapter"`
	}

	var b body
	if err := c.Fiber.BodyParser(&b); err != nil {
		c.App.Logger.Error().Err(err).Msg("discord rpc handler: failed to parse request body")
		return c.RespondWithData(false)
	}

	c.App.DiscordPresence.SetMangaActivity(&discordrpc_presence.MangaActivity{
		Title:   b.Title,
		Image:   b.Image,
		Chapter: b.Chapter,
	})

	return c.RespondWithData(true)
}

// HandleCancelDiscordActivity
//
//	@summary cancels the current discord rich presence activity.
//	@route /api/v1/discord/presence/cancel [POST]
//	@returns boolean
func HandleCancelDiscordActivity(c *RouteCtx) error {
	c.App.DiscordPresence.Close()
	return c.RespondWithData(true)
}
