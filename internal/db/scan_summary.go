package db

import (
	"github.com/goccy/go-json"
	"github.com/seanime-app/seanime/internal/models"
	"github.com/seanime-app/seanime/internal/summary"
)

func (db *Database) GetLastScanSummary() (*summary.ScanSummary, uint, error) {
	// Get the latest entry
	var res models.ScanSummary
	err := db.gormdb.Last(&res).Error
	if err != nil {
		return nil, 0, err
	}

	// Unmarshal the data
	smBytes := res.Value
	var sm *summary.ScanSummary
	if err := json.Unmarshal(smBytes, &sm); err != nil {
		return nil, 0, err
	}

	return sm, res.ID, nil
}

func (db *Database) GetScanSummaries() ([]*summary.ScanSummary, error) {
	var res []*models.ScanSummary
	err := db.gormdb.Find(&res).Error
	if err != nil {
		return nil, err
	}

	// Unmarshal the data
	var summaries []*summary.ScanSummary
	for _, r := range res {
		smBytes := r.Value
		var sm *summary.ScanSummary
		if err := json.Unmarshal(smBytes, &sm); err != nil {
			return nil, err
		}
		summaries = append(summaries, sm)
	}

	return summaries, nil
}

func (db *Database) InsertScanSummary(sm *summary.ScanSummary) error {
	// Marshal the data
	bytes, err := json.Marshal(sm)
	if err != nil {
		return err
	}

	// Save the data
	return db.gormdb.Create(&models.ScanSummary{
		Value: bytes,
	}).Error
}

func (db *Database) CleanUpScanSummaries() {
	go func() {
		var count int64
		err := db.gormdb.Model(&models.LocalFiles{}).Count(&count).Error
		if err != nil {
			db.logger.Error().Err(err).Msg("Failed to count local file entries")
			return
		}
		if count > 10 {
			// Leave 5 entries
			err = db.gormdb.Delete(&models.LocalFiles{}, "id IN (SELECT id FROM local_files ORDER BY id ASC LIMIT ?)", count-5).Error
			if err != nil {
				db.logger.Error().Err(err).Msg("Failed to delete old local file entries")
				return
			}
		}
	}()
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

func (db *Database) insertScanSummary(sm *summary.ScanSummary) (*summary.ScanSummary, error) {
	err := db.gormdb.Create(sm).Error

	if err != nil {
		return nil, err
	}
	return sm, nil
}