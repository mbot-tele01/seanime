package handlers

import (
	"errors"
	"github.com/seanime-app/seanime/internal/library/scanner"
	"github.com/seanime-app/seanime/internal/library/summary"
)

// HandleScanLocalFiles
//
//	@summary scans the user's library.
//	@desc This will scan the user's library.
//	@desc The response is ignored, the client should re-fetch the library after this.
//	@route /api/v1/library/scan [POST]
//	@returns []anime.LocalFile
func HandleScanLocalFiles(c *RouteCtx) error {

	c.AcceptJSON()

	type body struct {
		Enhanced         bool `json:"enhanced"`
		SkipLockedFiles  bool `json:"skipLockedFiles"`
		SkipIgnoredFiles bool `json:"skipIgnoredFiles"`
	}

	var b body

	// Retrieve the user's library path
	libraryPath, err := c.App.Database.GetLibraryPathFromSettings()
	if err != nil {
		return c.RespondWithError(err)
	}

	if err = c.Fiber.BodyParser(&b); err != nil {
		return c.RespondWithError(err)
	}

	// +---------------------+
	// |      Account        |
	// +---------------------+

	// Get the user's account
	// If the account is not defined, return an error
	acc, err := c.App.GetAccount()
	if err != nil {
		return c.RespondWithError(err)
	}

	// Get the latest local files
	existingLfs, _, err := c.App.Database.GetLocalFiles()
	if err != nil {
		return c.RespondWithError(err)
	}

	// +---------------------+
	// |       Scanner       |
	// +---------------------+

	// Create scan summary logger
	scanSummaryLogger := summary.NewScanSummaryLogger()

	// Create a new scan logger
	scanLogger, err := scanner.NewScanLogger(c.App.Config.Logs.Dir)
	if err != nil {
		return c.RespondWithError(err)
	}

	// Create a new scanner
	sc := scanner.Scanner{
		DirPath:              libraryPath,
		Username:             acc.Username,
		Enhanced:             b.Enhanced,
		AnilistClientWrapper: c.App.AnilistClientWrapper,
		Logger:               c.App.Logger,
		WSEventManager:       c.App.WSEventManager,
		ExistingLocalFiles:   existingLfs,
		SkipLockedFiles:      b.SkipLockedFiles,
		SkipIgnoredFiles:     b.SkipIgnoredFiles,
		ScanSummaryLogger:    scanSummaryLogger,
		ScanLogger:           scanLogger,
	}

	// Scan the library
	allLfs, err := sc.Scan()
	if err != nil {
		if errors.Is(err, scanner.ErrNoLocalFiles) {
			return c.RespondWithData([]interface{}{})
		} else {
			return c.RespondWithError(err)
		}
	}

	// Insert the local files
	lfs, err := c.App.Database.InsertLocalFiles(allLfs)
	if err != nil {
		return c.RespondWithError(err)
	}

	// Save the scan summary
	err = c.App.Database.InsertScanSummary(scanSummaryLogger.GenerateSummary())

	go c.App.AutoDownloader.CleanUpDownloadedItems()

	return c.RespondWithData(lfs)

}
