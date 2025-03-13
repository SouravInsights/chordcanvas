import { Song } from "@/types";

const songs: Song[] = [
  {
    title: "Zara Zara",
    artist: "Bombay Jayashri",
    movie: "Rehnaa Hai Terre Dil Mein",
    year: "2001",
    capo: 2,
    chords: ["Am", "Em", "F", "G", "C", "Dm"],
    sections: [
      {
        name: "Intro",
        lines: [
          { lyric: "", chords: ["Am", "Em", "F", "G"] },
          { lyric: "", chords: ["Am", "Em", "F", "G"] },
          { lyric: "", chords: ["Am", "Em", "C", "F", "G"] },
          { lyric: "", chords: ["Am", "Em", "Dm", "G"] },
        ],
      },
      {
        name: "Verse",
        lines: [
          { lyric: "Zara zara behekta hai", chords: ["Am", "C"] },
          { lyric: "Mehekta hai", chords: ["Am"] },
          { lyric: "Aaj toh mera", chords: ["G"] },
          { lyric: "Tan badan main pyasi hoon", chords: ["Am", "C"] },
          { lyric: "Mujhe bhar le", chords: ["Am"] },
          { lyric: "Apni bahon mein", chords: ["G"] },
        ],
      },
      {
        name: "Chorus",
        lines: [
          { lyric: "Haan meri kasam", chords: ["Am", "G"] },
          { lyric: "Tujhko sanam", chords: ["F"] },
          { lyric: "Duur kahin na jaa", chords: ["Em", "Am"] },
          { lyric: "Yeh duuri", chords: ["G"] },
          { lyric: "kehti hai", chords: ["F"] },
          { lyric: "Paas mere aaja re", chords: ["Em", "Am"] },
        ],
      },
      {
        name: "Verse 1",
        lines: [
          { lyric: "Yunhi baras baras kaali ghata barse", chords: ["Am"] },
          { lyric: "Hum yaar bheeg jayen", chords: ["Em"] },
          { lyric: "is Chaahat ki baarish mein", chords: ["Dm", "C", "Em"] },
          { lyric: "Meri khuli khuli laton ko suljhaye", chords: ["Am"] },
          { lyric: "Tu apni ungliyon se", chords: ["Em"] },
          {
            lyric: "Mein toh hoon isi khwahish mein",
            chords: ["Dm", "C", "Em"],
          },
        ],
      },
      {
        name: "Bridge",
        lines: [
          { lyric: "Sardi ki raaton mein hum", chords: ["Am", "Em"] },
          { lyric: "Soye rahe ek chaadar mein", chords: ["F", "G"] },
          { lyric: "Hum dono tanha ho", chords: ["Am", "Em"] },
          { lyric: "Na koi bhi rahe is ghar mein", chords: ["Dm", "G"] },
        ],
      },
    ],
  },
];

export default songs;
