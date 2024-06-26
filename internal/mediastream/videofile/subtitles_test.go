package videofile

import (
	"fmt"
	"github.com/coding-socks/ebml"
	"github.com/coding-socks/matroska"
	"github.com/davecgh/go-spew/spew"
	"io"
	"os"
	"path/filepath"
	"strings"
	"testing"
)

func TestExtract1(t *testing.T) {

	filep := "E:/ANIME/[Judas] Blue Lock (Season 1) [1080p][HEVC x265 10bit][Dual-Audio][Multi-Subs]/[Judas] Blue Lock - S01E03v2.mkv"
	f, err := os.Open(filep)
	if err != nil {
		t.Fatal(err)
	}

	s, err := matroska.NewScanner(f)
	if err != nil {
		t.Fatal(err)
	}

	tracks := s.Tracks()

	for _, e := range tracks.TrackEntry {
		if e.TrackType == matroska.TrackTypeVideo {
			spew.Dump(e.DefaultDuration)
			spew.Dump(e.Video)
			spew.Dump(e.CodecID)
			t.Log("--------------------")
		}
		if e.TrackType == matroska.TrackTypeAudio {
			spew.Dump(e.DefaultDuration)
			spew.Dump(e.Audio)
			spew.Dump(e.CodecID)
			t.Log("--------------------")
		}
	}

}

func TestExtract2(t *testing.T) {

	filep := "E:/ANIME/[Judas] Blue Lock (Season 1) [1080p][HEVC x265 10bit][Dual-Audio][Multi-Subs]/[Judas] Blue Lock - S01E03v2.mkv"
	f, err := os.Open(filep)
	if err != nil {
		t.Fatal(err)
	}

	d := ebml.NewDecoder(f)

	header, err := d.DecodeHeader()
	if err != nil {
		t.Fatal(err)
	}
	fmt.Printf("%+v\n", header)

	var b matroska.Segment
	if err = d.DecodeBody(&b); err != nil && err != io.EOF {
		t.Errorf("DecodeBody() error = %v", err)
	}
	if b.Attachments != nil {
		for _, a := range b.Attachments.AttachedFile {
			fmt.Printf("%+v\n", a.FileName)
		}
	}

}

func TestExtract(t *testing.T) {

	filep := "E:/ANIME/[Judas] Blue Lock (Season 1) [1080p][HEVC x265 10bit][Dual-Audio][Multi-Subs]/[Judas] Blue Lock - S01E03v2.mkv"
	outputDir := "E:/ANIME_TEST/blue_lock"
	f, err := os.Open(filep)
	if err != nil {
		t.Fatal(err)
	}

	s, err := matroska.NewScanner(f)
	if err != nil {
		t.Fatal(err)
	}

	tracks := s.Tracks()
	options := make([]string, len(tracks.TrackEntry))
	for i, e := range tracks.TrackEntry {
		options[i] = fmt.Sprintf("Track %02d [%s]", e.TrackNumber, e.CodecID)
	}

	// View options
	spew.Dump(options)
	// -> indices := []int{3, 4, 5, 6, 7, 8, 9, 10, 11}

	te := tracks.TrackEntry[3] // english subtitles
	//
	fname := filepath.Base(filep)
	fname = strings.TrimSuffix(fname, filepath.Ext(fname))
	fname = fmt.Sprintf("%s_Track_%02d", fname, te.TrackNumber)
	suffix := ""
	ext := GuessExt(te.CodecID)
	for i := 1; ; i++ {
		_, err := os.Stat(filepath.Join(outputDir, fname+suffix+ext))
		if os.IsNotExist(err) {
			break
		}
		suffix = fmt.Sprintf("_%d", i)
	}
	f, err = os.Create(filepath.Join(outputDir, fname+suffix+ext))
	if err != nil {
		t.Fatalf("Could not create ouput file: %s", err)
	}
	if err := matroska.ExtractTract(f, s, te); err != nil {
		os.Remove(filepath.Join(outputDir, fname)) // Remove the file
		t.Fatalf("Could not extract track: %s", err)
	}

}

func GuessExt(codecID string) string {
	switch codecID {
	// Audio
	case matroska.AudioCodecAAC:
		return ".aac"
	case matroska.AudioCodecAC3:
		return ".ac3"
	case matroska.AudioCodecMP3:
		return ".mp3"
	// Video
	case matroska.VideoCodecMSCOMP:
		return ".avi"
	// Subtitle
	case matroska.SubtitleCodecTEXTASS:
		return ".ass"
	case matroska.SubtitleCodecTEXTSSA:
		return ".ssa"
	case matroska.SubtitleCodecTEXTUTF8, matroska.SubtitleCodecTEXTASCII:
		return ".srt"
	case matroska.SubtitleCodecVOBSUB, matroska.SubtitleCodecVOBSUBZLIB:
		return ".idx"
	case matroska.SubtitleCodecTEXTWEBVTT:
		return ".vtt"
	default:
		return ""
	}
}
