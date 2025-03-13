import React from "react";
import { ChordData, Finger } from "@/types";

interface ChordDiagramProps {
  chord: ChordData;
}

const ChordDiagram: React.FC<ChordDiagramProps> = ({ chord }) => {
  return (
    <div className="chord-diagram flex flex-col items-center">
      {/* Guitar neck visualization */}
      <div className="relative w-full max-w-xs bg-amber-100 rounded-lg p-4 pb-10">
        {/* Actual guitar neck visualization */}
        <div className="relative border-2 border-amber-900 rounded bg-amber-50">
          {/* Fret lines */}
          {[...Array(4)].map((_, index) => (
            <div
              key={`fret-${index}`}
              className="w-full h-10 border-b-2 border-gray-400 flex items-center justify-between px-1"
            >
              {/* String lines - vertical */}
              <div className="flex justify-between w-full relative">
                {[...Array(6)].map((_, stringIndex) => (
                  <div
                    key={`string-${stringIndex}`}
                    className="w-px h-10 bg-gray-600 relative"
                  >
                    {/* Finger positions */}
                    {chord.fingers.find(
                      (f: Finger) =>
                        f.string === 6 - stringIndex && f.fret === index + 1
                    ) && (
                      <div
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                     w-8 h-8 rounded-full bg-indigo-600 shadow-lg 
                                     flex items-center justify-center text-white font-bold
                                     ${
                                       chord.fingers.find(
                                         (f: Finger) =>
                                           f.string === 6 - stringIndex &&
                                           f.fret === index + 1
                                       )?.finger === 1
                                         ? "ring-2 ring-yellow-300"
                                         : ""
                                     }`}
                      >
                        {
                          chord.fingers.find(
                            (f: Finger) =>
                              f.string === 6 - stringIndex &&
                              f.fret === index + 1
                          )?.finger
                        }
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Fret number labels */}
          <div className="absolute -left-6 top-0 h-full flex flex-col justify-around text-xs text-gray-600 font-medium">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>

        {/* String labels at top */}
        <div className="flex justify-between w-full px-1 mt-3">
          {["E", "A", "D", "G", "B", "E"].map((string, index) => (
            <div key={`string-label-${index}`} className="text-center w-8">
              <div className="text-xs font-medium text-gray-700">{string}</div>
              {/* Open or muted string indicators */}
              {chord.fingers.find(
                (f: Finger) => f.string === 6 - index && f.fret === 0
              ) ? (
                <div className="mt-1 text-green-600 font-bold text-lg">O</div>
              ) : chord.fingers.find(
                  (f: Finger) => f.string === 6 - index && f.fret > 0
                ) ? (
                <div className="mt-1 opacity-0">X</div>
              ) : (
                <div className="mt-1 text-red-600 font-bold text-lg">X</div>
              )}
            </div>
          ))}
        </div>

        {/* Hand finger reference */}
        <div className="absolute -right-12 top-1/3 text-xs text-gray-600">
          <div className="flex flex-col items-center">
            <div className="bg-indigo-600 w-6 h-6 rounded-full text-white flex items-center justify-center mb-1 ring-2 ring-yellow-300">
              1
            </div>
            <div className="text-xs">Index</div>
            <div className="bg-indigo-600 w-6 h-6 rounded-full text-white flex items-center justify-center mb-1 mt-2">
              2
            </div>
            <div className="text-xs">Middle</div>
            <div className="bg-indigo-600 w-6 h-6 rounded-full text-white flex items-center justify-center mb-1 mt-2">
              3
            </div>
            <div className="text-xs">Ring</div>
            <div className="bg-indigo-600 w-6 h-6 rounded-full text-white flex items-center justify-center mb-1 mt-2">
              4
            </div>
            <div className="text-xs">Pinky</div>
          </div>
        </div>

        {/* Barre chord indicator - only shown for barre chords */}
        {chord.fingers.filter((f) => f.finger === 1).length > 1 && (
          <div className="absolute -left-36 top-1/3 bg-yellow-100 p-2 rounded-lg border border-yellow-300 text-xs w-32 text-center">
            <p className="font-bold text-yellow-700">Barre Chord</p>
            <p className="text-gray-600 mt-1">
              Index finger (1) presses multiple strings at once
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChordDiagram;
