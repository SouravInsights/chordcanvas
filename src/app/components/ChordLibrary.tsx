import React, { useState } from "react";
import ChordDiagram from "./ChordDiagram";
import chordData from "@/data/chords";
import { Volume2 } from "lucide-react";
import { ChordsLibrary } from "@/types";

const ChordLibrary: React.FC = () => {
  const [selectedChord, setSelectedChord] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Group chords by difficulty
  const categories = {
    all: "All Chords",
    beginner: "Beginner Chords",
    intermediate: "Intermediate Chords",
  };

  // Filter chords by search term and category
  const filteredChords = Object.keys(chordData).filter((chord) => {
    const matchesCategory =
      activeCategory === "all" ||
      chordData[chord as keyof ChordsLibrary].difficulty.toLowerCase() ===
        activeCategory;
    const matchesSearch =
      chord.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chordData[chord as keyof ChordsLibrary].name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Chord Library</h2>

      {/* Search input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search chords..."
          className="w-full p-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            className={`px-3 py-1 text-sm rounded-full ${
              activeCategory === key
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveCategory(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Chord selection grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-6">
        {filteredChords.map((chordName) => (
          <button
            key={chordName}
            className={`p-3 rounded-lg text-center ${
              selectedChord === chordName
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-indigo-100"
            }`}
            onClick={() => setSelectedChord(chordName)}
          >
            <div className="font-bold">{chordName}</div>
            <div className="text-xs">
              {chordData[chordName as keyof ChordsLibrary].name}
            </div>
          </button>
        ))}
      </div>

      {/* Selected chord diagram */}
      {selectedChord && (
        <div className="max-w-md mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold text-indigo-600">
              {selectedChord}
            </h3>
            <p className="text-gray-600">
              {chordData[selectedChord as keyof ChordsLibrary].name}
            </p>
            <span className="inline-block mt-1 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
              {chordData[selectedChord as keyof ChordsLibrary].difficulty}
            </span>
          </div>

          <div className="mt-4">
            <ChordDiagram
              chord={chordData[selectedChord as keyof ChordsLibrary]}
            />
          </div>

          {/* Play chord button */}
          <div className="mt-4 flex justify-center">
            <button className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg flex items-center">
              <Volume2 size={18} className="mr-2" />
              Hear this chord
            </button>
          </div>
        </div>
      )}

      {!selectedChord && filteredChords.length > 0 && (
        <div className="text-center text-gray-500 py-8">
          <p>Select a chord to view its diagram</p>
        </div>
      )}

      {filteredChords.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          <p>No chords found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default ChordLibrary;
