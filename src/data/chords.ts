import { ChordsLibrary } from "@/types";

const chordData: ChordsLibrary = {
  // Major chords
  A: {
    name: "A major",
    fingers: [
      { string: 6, fret: -1, finger: null }, // muted
      { string: 5, fret: 0, finger: null },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 2, finger: 3 },
      { string: 2, fret: 2, finger: 4 },
      { string: 1, fret: 0, finger: null },
    ],
    difficulty: "Beginner",
    tips: [],
  },
  B: {
    name: "B major",
    fingers: [
      { string: 6, fret: -1, finger: null }, // muted
      { string: 5, fret: 2, finger: 1 }, // barre
      { string: 4, fret: 4, finger: 3 },
      { string: 3, fret: 4, finger: 4 },
      { string: 2, fret: 4, finger: 4 },
      { string: 1, fret: 2, finger: 1 }, // barre
    ],
    difficulty: "Intermediate",
    tips: [],
  },
  C: {
    name: "C major",
    fingers: [
      { string: 6, fret: -1, finger: null }, // muted
      { string: 5, fret: 3, finger: 3 },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 0, finger: null },
      { string: 2, fret: 1, finger: 1 },
      { string: 1, fret: 0, finger: null },
    ],
    difficulty: "Beginner",
    tips: [],
  },
  D: {
    name: "D major",
    fingers: [
      { string: 6, fret: -1, finger: null }, // muted
      { string: 5, fret: -1, finger: null }, // muted
      { string: 4, fret: 0, finger: null },
      { string: 3, fret: 2, finger: 1 },
      { string: 2, fret: 3, finger: 3 },
      { string: 1, fret: 2, finger: 2 },
    ],
    difficulty: "Beginner",
    tips: [],
  },
  E: {
    name: "E major",
    fingers: [
      { string: 6, fret: 0, finger: null },
      { string: 5, fret: 2, finger: 2 },
      { string: 4, fret: 2, finger: 3 },
      { string: 3, fret: 1, finger: 1 },
      { string: 2, fret: 0, finger: null },
      { string: 1, fret: 0, finger: null },
    ],
    difficulty: "Beginner",
    tips: [],
  },
  F: {
    name: "F major (barre chord)",
    fingers: [
      { string: 6, fret: 1, finger: 1 }, // barre
      { string: 5, fret: 3, finger: 3 },
      { string: 4, fret: 3, finger: 4 },
      { string: 3, fret: 2, finger: 2 },
      { string: 2, fret: 1, finger: 1 }, // barre
      { string: 1, fret: 1, finger: 1 }, // barre
    ],
    difficulty: "Intermediate",
    tips: [],
  },
  G: {
    name: "G major",
    fingers: [
      { string: 6, fret: 3, finger: 3 },
      { string: 5, fret: 2, finger: 2 },
      { string: 4, fret: 0, finger: null },
      { string: 3, fret: 0, finger: null },
      { string: 2, fret: 0, finger: null },
      { string: 1, fret: 3, finger: 4 },
    ],
    difficulty: "Beginner",
    tips: [],
  },

  // Minor chords
  Am: {
    name: "A minor",
    fingers: [
      { string: 6, fret: -1, finger: null }, // muted
      { string: 5, fret: 0, finger: null },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 2, finger: 3 },
      { string: 2, fret: 1, finger: 1 },
      { string: 1, fret: 0, finger: null },
    ],
    difficulty: "Beginner",
    tips: [],
  },
  Bm: {
    name: "B minor",
    fingers: [
      { string: 6, fret: -1, finger: null }, // muted
      { string: 5, fret: 2, finger: 1 }, // barre
      { string: 4, fret: 4, finger: 3 },
      { string: 3, fret: 4, finger: 4 },
      { string: 2, fret: 3, finger: 2 },
      { string: 1, fret: 2, finger: 1 }, // barre
    ],
    difficulty: "Intermediate",
    tips: [],
  },
  Cm: {
    name: "C minor",
    fingers: [
      { string: 6, fret: -1, finger: null }, // muted
      { string: 5, fret: 3, finger: 1 }, // barre
      { string: 4, fret: 5, finger: 3 },
      { string: 3, fret: 5, finger: 4 },
      { string: 2, fret: 4, finger: 2 },
      { string: 1, fret: 3, finger: 1 }, // barre
    ],
    difficulty: "Intermediate",
    tips: [],
  },
  Dm: {
    name: "D minor",
    fingers: [
      { string: 6, fret: -1, finger: null }, // muted
      { string: 5, fret: -1, finger: null }, // muted
      { string: 4, fret: 0, finger: null },
      { string: 3, fret: 2, finger: 2 },
      { string: 2, fret: 3, finger: 3 },
      { string: 1, fret: 1, finger: 1 },
    ],
    difficulty: "Beginner",
    tips: [],
  },
  Em: {
    name: "E minor",
    fingers: [
      { string: 6, fret: 0, finger: null },
      { string: 5, fret: 2, finger: 2 },
      { string: 4, fret: 2, finger: 3 },
      { string: 3, fret: 0, finger: null },
      { string: 2, fret: 0, finger: null },
      { string: 1, fret: 0, finger: null },
    ],
    difficulty: "Beginner",
    tips: [],
  },

  // 7th chords
  A7: {
    name: "A seventh",
    fingers: [
      { string: 6, fret: -1, finger: null }, // muted
      { string: 5, fret: 0, finger: null },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 0, finger: null },
      { string: 2, fret: 2, finger: 3 },
      { string: 1, fret: 0, finger: null },
    ],
    difficulty: "Beginner",
    tips: [],
  },
  B7: {
    name: "B seventh",
    fingers: [
      { string: 6, fret: -1, finger: null }, // muted
      { string: 5, fret: 2, finger: 1 },
      { string: 4, fret: 1, finger: 0 },
      { string: 3, fret: 2, finger: 2 },
      { string: 2, fret: 0, finger: null },
      { string: 1, fret: 2, finger: 3 },
    ],
    difficulty: "Beginner",
    tips: [],
  },
  C7: {
    name: "C seventh",
    fingers: [
      { string: 6, fret: -1, finger: null }, // muted
      { string: 5, fret: 3, finger: 3 },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 3, finger: 4 },
      { string: 2, fret: 1, finger: 1 },
      { string: 1, fret: 0, finger: null },
    ],
    difficulty: "Beginner",
    tips: [],
  },
  D7: {
    name: "D seventh",
    fingers: [
      { string: 6, fret: -1, finger: null }, // muted
      { string: 5, fret: -1, finger: null }, // muted
      { string: 4, fret: 0, finger: null },
      { string: 3, fret: 2, finger: 2 },
      { string: 2, fret: 1, finger: 1 },
      { string: 1, fret: 2, finger: 3 },
    ],
    difficulty: "Beginner",
    tips: [],
  },
  E7: {
    name: "E seventh",
    fingers: [
      { string: 6, fret: 0, finger: null },
      { string: 5, fret: 2, finger: 2 },
      { string: 4, fret: 0, finger: null },
      { string: 3, fret: 1, finger: 1 },
      { string: 2, fret: 0, finger: null },
      { string: 1, fret: 0, finger: null },
    ],
    difficulty: "Beginner",
    tips: [],
  },
  G7: {
    name: "G seventh",
    fingers: [
      { string: 6, fret: 3, finger: 3 },
      { string: 5, fret: 2, finger: 2 },
      { string: 4, fret: 0, finger: null },
      { string: 3, fret: 0, finger: null },
      { string: 2, fret: 0, finger: null },
      { string: 1, fret: 1, finger: 1 },
    ],
    difficulty: "Beginner",
    tips: [],
  },

  // Major 7th chords
  Amaj7: {
    name: "A major seventh",
    fingers: [
      { string: 6, fret: -1, finger: null }, // muted
      { string: 5, fret: 0, finger: null },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 1, finger: 1 },
      { string: 2, fret: 2, finger: 3 },
      { string: 1, fret: 0, finger: null },
    ],
    difficulty: "Intermediate",
    tips: [],
  },
  Cmaj7: {
    name: "C major seventh",
    fingers: [
      { string: 6, fret: -1, finger: null }, // muted
      { string: 5, fret: 3, finger: 3 },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 0, finger: null },
      { string: 2, fret: 0, finger: null },
      { string: 1, fret: 0, finger: null },
    ],
    difficulty: "Beginner",
    tips: [],
  },
  Dmaj7: {
    name: "D major seventh",
    fingers: [
      { string: 6, fret: -1, finger: null }, // muted
      { string: 5, fret: -1, finger: null }, // muted
      { string: 4, fret: 0, finger: null },
      { string: 3, fret: 2, finger: 2 },
      { string: 2, fret: 2, finger: 3 },
      { string: 1, fret: 2, finger: 4 },
    ],
    difficulty: "Intermediate",
    tips: [],
  },
  Fmaj7: {
    name: "F major seventh (easier F)",
    fingers: [
      { string: 6, fret: -1, finger: null }, // muted
      { string: 5, fret: -1, finger: null }, // muted
      { string: 4, fret: 3, finger: 3 },
      { string: 3, fret: 2, finger: 2 },
      { string: 2, fret: 1, finger: 1 },
      { string: 1, fret: 0, finger: null },
    ],
    difficulty: "Beginner",
    tips: [],
  },

  // Minor 7th chords
  Am7: {
    name: "A minor seventh",
    fingers: [
      { string: 6, fret: -1, finger: null }, // muted
      { string: 5, fret: 0, finger: null },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 0, finger: null },
      { string: 2, fret: 1, finger: 1 },
      { string: 1, fret: 0, finger: null },
    ],
    difficulty: "Beginner",
    tips: [],
  },
  Dm7: {
    name: "D minor seventh",
    fingers: [
      { string: 6, fret: -1, finger: null }, // muted
      { string: 5, fret: -1, finger: null }, // muted
      { string: 4, fret: 0, finger: null },
      { string: 3, fret: 2, finger: 2 },
      { string: 2, fret: 1, finger: 1 },
      { string: 1, fret: 1, finger: 1 },
    ],
    difficulty: "Beginner",
    tips: [],
  },
  Em7: {
    name: "E minor seventh",
    fingers: [
      { string: 6, fret: 0, finger: null },
      { string: 5, fret: 2, finger: 2 },
      { string: 4, fret: 0, finger: null },
      { string: 3, fret: 0, finger: null },
      { string: 2, fret: 0, finger: null },
      { string: 1, fret: 0, finger: null },
    ],
    difficulty: "Beginner",
    tips: [],
  },

  // Suspended chords
  Asus4: {
    name: "A suspended 4th",
    fingers: [
      { string: 6, fret: -1, finger: null }, // muted
      { string: 5, fret: 0, finger: null },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 2, finger: 3 },
      { string: 2, fret: 3, finger: 4 },
      { string: 1, fret: 0, finger: null },
    ],
    difficulty: "Beginner",
    tips: [],
  },
  Dsus2: {
    name: "D suspended 2nd",
    fingers: [
      { string: 6, fret: -1, finger: null }, // muted
      { string: 5, fret: -1, finger: null }, // muted
      { string: 4, fret: 0, finger: null },
      { string: 3, fret: 2, finger: 1 },
      { string: 2, fret: 3, finger: 3 },
      { string: 1, fret: 0, finger: null },
    ],
    difficulty: "Beginner",
    tips: [],
  },
  Esus4: {
    name: "E suspended 4th",
    fingers: [
      { string: 6, fret: 0, finger: null },
      { string: 5, fret: 2, finger: 2 },
      { string: 4, fret: 2, finger: 3 },
      { string: 3, fret: 2, finger: 4 },
      { string: 2, fret: 0, finger: null },
      { string: 1, fret: 0, finger: null },
    ],
    difficulty: "Beginner",
    tips: [],
  },
};

export default chordData;
