import { Song } from "@/types";

const songs: Song[] = [
  {
    title: "Zara Zara",
    artist: "Bombay Jayashri",
    movie: "Rehnaa Hai Terre Dil Mein",
    year: "2001",
    capo: 2,
    chords: ["Am", "Em", "Fmaj7", "G", "C", "Dm"],
    sections: [
      {
        name: "Intro",
        lines: [
          { lyric: "", chords: ["Am", "Em", "Fmaj7", "G"] },
          { lyric: "", chords: ["Am", "Em", "Fmaj7", "G"] },
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
          { lyric: "Tujhko sanam", chords: ["Fmaj7"] },
          { lyric: "Duur kahin na jaa", chords: ["Em", "Am"] },
          { lyric: "Yeh duuri", chords: ["G"] },
          { lyric: "kehti hai", chords: ["Fmaj7"] },
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
          { lyric: "Soye rahe ek chaadar mein", chords: ["Fmaj7", "G"] },
          { lyric: "Hum dono tanha ho", chords: ["Am", "Em"] },
          { lyric: "Na koi bhi rahe is ghar mein", chords: ["Dm", "G"] },
        ],
      },
    ],
  },
  {
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    movie: "Aashiqui 2",
    year: "2013",
    chords: ["Am", "F", "C", "G"],
    sections: [
      {
        name: "Verse",
        lines: [
          { lyric: "Hum tere bin ab reh nahi sakte", chords: ["Am", "F"] },
          { lyric: "Tere bina kya wajood mera", chords: ["C", "G"] },
          { lyric: "Tujhse juda gar ho jaayenge", chords: ["Am", "F"] },
          { lyric: "To khud se hi ho jaayenge judaa", chords: ["C", "G"] },
        ],
      },
      {
        name: "Chorus",
        lines: [
          { lyric: "Kyunki tum hi ho", chords: ["Am", "F"] },
          { lyric: "Ab tum hi ho", chords: ["C", "G"] },
          { lyric: "Zindagi ab tum hi ho", chords: ["Am", "F"] },
          { lyric: "Chain bhi, mera dard bhi", chords: ["C", "G"] },
          {
            lyric: "Meri aashiqui ab tum hi ho",
            chords: ["Am", "F", "C", "G"],
          },
        ],
      },
    ],
  },
];

export default songs;
