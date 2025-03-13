import { ChordsLibrary } from "@/types";

const chordData: ChordsLibrary = {
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
    tips: [
      "Form a triangle with your fingers",
      "Don't play the 6th string (thickest)",
      "Make sure the 1st string (thinnest) rings clearly",
    ],
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
    tips: [
      "Only need to press down on 2 strings",
      "Keep your fingers curved to avoid touching open strings",
      "One of the easiest chords - great for beginners",
    ],
  },
  F: {
    name: "F major",
    fingers: [
      { string: 6, fret: 1, finger: 1 }, // barre
      { string: 5, fret: 3, finger: 3 },
      { string: 4, fret: 3, finger: 4 },
      { string: 3, fret: 2, finger: 2 },
      { string: 2, fret: 1, finger: 1 }, // barre
      { string: 1, fret: 1, finger: 1 }, // barre
    ],
    difficulty: "Intermediate",
    tips: [
      "This is a barre chord - use your index finger across all strings",
      "Press firmly with your index finger",
      "Beginners can play simplified version: XX3211",
    ],
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
    tips: [
      "Keep your fingers curved to avoid touching adjacent strings",
      "Don't play the 6th string (thickest)",
      "Focus on a clean sound with no buzzing",
    ],
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
    tips: [
      "This chord forms a triangle shape with your fingers",
      "Your pinky might feel weak at first - that's normal!",
      "Make sure all strings ring clearly when you strum",
    ],
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
    tips: [
      "Only strum the thinnest 4 strings",
      "Creates a sad/melancholic sound compared to D major",
      "Keep your wrist relaxed to reach all strings comfortably",
    ],
  },
};

export default chordData;
