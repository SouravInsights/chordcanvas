import React from "react";
import { Song } from "@/types";

interface SongProgressionSectionProps {
  currentSong: Song;
  currentChord: string;
  setCurrentChordIndex: (index: number) => void;
}

const SongProgressionSection: React.FC<SongProgressionSectionProps> = ({
  currentSong,
  currentChord,
  setCurrentChordIndex,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        Chord Progression
      </h2>

      {/* Sections */}
      {currentSong.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <h3 className="text-md font-bold text-indigo-700 mb-2">
            {section.name}
          </h3>

          {/* Lyrics with chords */}
          {section.lines.map((line, lineIndex) => (
            <div key={lineIndex} className="mb-4 pb-2 border-b border-gray-100">
              <div className="flex flex-wrap mb-2">
                {line.chords.map((chordName, chordIndex) => (
                  <div
                    key={chordIndex}
                    className={`mr-2 mb-2 px-3 py-1 rounded-lg text-white font-medium cursor-pointer ${
                      chordName === currentChord
                        ? "bg-indigo-600"
                        : "bg-gray-400"
                    }`}
                    onClick={() =>
                      setCurrentChordIndex(
                        currentSong.chords.indexOf(chordName)
                      )
                    }
                  >
                    {chordName}
                  </div>
                ))}
              </div>
              {line.lyric && <p className="text-gray-700">{line.lyric}</p>}
            </div>
          ))}
        </div>
      ))}

      {/* Simple practice guide */}
      <div className="mt-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Practice Tips</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Practice switching between chords slowly at first</li>
          <li>
            Focus on clean sound - make sure no strings are accidentally muted
          </li>
          <li>
            Try strumming pattern: Down, Down-Up, Up-Down-Up (D, D-U, U-D-U)
          </li>
          <li>Practice for short periods (10-15 min) multiple times a day</li>
        </ul>
      </div>
    </div>
  );
};

export default SongProgressionSection;
