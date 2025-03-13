export interface Finger {
  string: number;
  fret: number;
  finger: number | null;
}

export interface ChordData {
  name: string;
  fingers: Finger[];
  difficulty: string;
  tips: string[];
}

export interface ChordsLibrary {
  [key: string]: ChordData;
}

export interface ProgressionLine {
  lyric: string;
  chords: string[];
}

export interface SongSection {
  name: string;
  lines: ProgressionLine[];
}

export interface Song {
  title: string;
  artist: string;
  movie?: string;
  year?: string;
  capo?: number;
  chords: string[];
  sections: SongSection[];
}
