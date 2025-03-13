import React, { useState } from "react";
import ChordDiagram from "./ChordDiagram";
import chordData from "@/data/chords";
import { Volume2, ChevronDown } from "lucide-react";
import { ChordsLibrary } from "@/types";

const ChordLibrary: React.FC = () => {
  const [selectedChord, setSelectedChord] = useState<string | null>("Am"); // Default selected chord
  const [activeCategory, setActiveCategory] = useState<string>("beginner");
  const [activeMobileTab, setActiveMobileTab] = useState<"select" | "view">(
    "view"
  );
  const [expandedChordType, setExpandedChordType] = useState<string | null>(
    "Minor"
  );

  // Group chords by difficulty
  const categories = {
    all: "All Chords",
    beginner: "Beginner",
    intermediate: "Intermediate",
  };

  // Organize chords by type for better categorization
  const chordTypes = [
    { name: "Major", chords: ["A", "B", "C", "D", "E", "F", "G"] },
    { name: "Minor", chords: ["Am", "Bm", "Cm", "Dm", "Em"] },
    { name: "7th", chords: ["A7", "B7", "C7", "D7", "E7", "G7"] },
    { name: "Major 7th", chords: ["Amaj7", "Cmaj7", "Dmaj7", "Fmaj7"] },
    { name: "Minor 7th", chords: ["Am7", "Dm7", "Em7"] },
    { name: "Suspended", chords: ["Asus4", "Dsus2", "Esus4"] },
  ];

  // Filter chords by category
  const getFilteredChords = (chordNames: string[]) => {
    return chordNames.filter(
      (chord) =>
        activeCategory === "all" ||
        chordData[chord as keyof ChordsLibrary].difficulty.toLowerCase() ===
          activeCategory
    );
  };

  // Handle chord selection and automatically switch to view tab on mobile
  const handleChordSelect = (chordName: string) => {
    setSelectedChord(chordName);
    if (window.innerWidth < 768) {
      setActiveMobileTab("view");
    }
  };

  // Toggle chord type expansion (mobile only)
  const toggleChordTypeExpansion = (typeName: string) => {
    if (expandedChordType === typeName) {
      setExpandedChordType(null);
    } else {
      setExpandedChordType(typeName);
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Mobile-only tabs */}
      <div className="md:hidden flex border-b border-gray-200">
        <button
          className={`flex-1 py-3 px-4 text-center font-medium ${
            activeMobileTab === "select"
              ? "text-indigo-600 border-b-2 border-indigo-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveMobileTab("select")}
        >
          Select Chord
        </button>
        <button
          className={`flex-1 py-3 px-4 text-center font-medium ${
            activeMobileTab === "view"
              ? "text-indigo-600 border-b-2 border-indigo-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveMobileTab("view")}
        >
          View Chord
        </button>
      </div>

      <div className="md:flex">
        {/* Left panel - Chord selection - hidden on mobile unless selected */}
        <div
          className={`md:w-1/3 p-4 border-r border-gray-200 bg-gray-50 ${
            activeMobileTab === "select" || window.innerWidth >= 768
              ? "block"
              : "hidden"
          }`}
        >
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            Chord Library
          </h2>

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

          {/* Chord types and chords */}
          <div className="space-y-4 overflow-auto max-h-[calc(100vh-250px)] md:max-h-[calc(100vh-180px)]">
            {chordTypes.map((type) => {
              const filteredChords = getFilteredChords(type.chords);
              if (filteredChords.length === 0) return null;

              const isExpanded =
                expandedChordType === type.name || window.innerWidth >= 768;

              return (
                <div key={type.name} className="pb-2">
                  {/* Mobile-only collapsible section headers */}
                  <div
                    className="flex justify-between items-center md:hidden cursor-pointer"
                    onClick={() => toggleChordTypeExpansion(type.name)}
                  >
                    <h3 className="text-sm font-semibold text-gray-600">
                      {type.name}
                    </h3>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        isExpanded ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Desktop-only static headers */}
                  <h3 className="text-sm font-semibold text-gray-600 mb-2 hidden md:block">
                    {type.name}
                  </h3>

                  {/* Chord buttons - collapsible on mobile */}
                  <div
                    className={`flex flex-wrap gap-2 ${
                      isExpanded ? "block" : "hidden md:block"
                    }`}
                  >
                    {filteredChords.map((chordName) => (
                      <button
                        key={chordName}
                        className={`px-3 py-2 rounded text-sm ${
                          selectedChord === chordName
                            ? "bg-indigo-600 text-white"
                            : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                        }`}
                        onClick={() => handleChordSelect(chordName)}
                      >
                        {chordName}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile-only currently selected chord indicator */}
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <button
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg flex justify-center items-center"
              onClick={() => setActiveMobileTab("view")}
            >
              View {selectedChord}
            </button>
          </div>
        </div>

        {/* Right panel - Chord diagram - hidden on mobile unless selected */}
        <div
          className={`md:w-2/3 p-4 ${
            activeMobileTab === "view" || window.innerWidth >= 768
              ? "block"
              : "hidden"
          }`}
        >
          {selectedChord && (
            <div>
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-indigo-600">
                  {selectedChord}
                </h3>
                <p className="text-gray-600">
                  {chordData[selectedChord as keyof ChordsLibrary].name}
                </p>
                <span className="inline-block mt-1 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                  {chordData[selectedChord as keyof ChordsLibrary].difficulty}
                </span>
              </div>

              <div className="flex justify-center">
                <div className="max-w-sm">
                  <ChordDiagram
                    chord={chordData[selectedChord as keyof ChordsLibrary]}
                  />

                  {/* Play chord button */}
                  <div className="mt-4 flex justify-center">
                    <button className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg flex items-center">
                      <Volume2 size={18} className="mr-2" />
                      Hear this chord
                    </button>
                  </div>

                  {/* Mobile-only back to selection button */}
                  <div className="mt-6 md:hidden">
                    <button
                      className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg flex justify-center items-center"
                      onClick={() => setActiveMobileTab("select")}
                    >
                      Select Different Chord
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!selectedChord && (
            <div className="flex items-center justify-center h-64 text-gray-500">
              <p>Select a chord to view</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChordLibrary;
