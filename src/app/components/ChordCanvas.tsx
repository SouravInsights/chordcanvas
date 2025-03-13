"use client";
import React, { useState } from "react";
import SongHeader from "./SongHeader";
import ChordLearningSection from "./ChordLearningSection";
import SongProgressionSection from "./SongProgressionSection";
import ChordLibrary from "./ChordLibrary";
import chordData from "@/data/chords";
import songs from "@/data/songs";
import { BookOpen, Music } from "lucide-react";

const ChordCanvas: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [currentChordIndex, setCurrentChordIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeView, setActiveView] = useState<"song" | "library">("song");

  const currentSong = songs[currentSongIndex];
  const currentChord = currentSong.chords[currentChordIndex];
  // Use type assertion to tell TypeScript that currentChord is a valid key
  const chord = chordData[currentChord as keyof typeof chordData];

  const nextChord = (): void => {
    if (currentChordIndex < currentSong.chords.length - 1) {
      setCurrentChordIndex(currentChordIndex + 1);
    } else {
      setCurrentChordIndex(0);
    }
  };

  const prevChord = (): void => {
    if (currentChordIndex > 0) {
      setCurrentChordIndex(currentChordIndex - 1);
    } else {
      setCurrentChordIndex(currentSong.chords.length - 1);
    }
  };

  const togglePlay = (): void => {
    setIsPlaying(!isPlaying);
  };

  // Function to change songs
  const changeSong = (index: number): void => {
    if (index >= 0 && index < songs.length) {
      setCurrentSongIndex(index);
      setCurrentChordIndex(0); // Reset to first chord of new song
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-5xl p-4">
        {/* View toggle */}
        <div className="mb-4 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setActiveView("song")}
              className={`px-4 py-2 text-sm font-medium border ${
                activeView === "song"
                  ? "bg-indigo-600 text-white border-indigo-700"
                  : "bg-white text-gray-700 hover:bg-gray-50 border-gray-200"
              } rounded-l-lg flex items-center`}
              aria-current={activeView === "song" ? "page" : undefined}
            >
              <Music size={18} className="mr-2" /> Song Practice
            </button>
            <button
              onClick={() => setActiveView("library")}
              className={`px-4 py-2 text-sm font-medium border ${
                activeView === "library"
                  ? "bg-indigo-600 text-white border-indigo-700"
                  : "bg-white text-gray-700 hover:bg-gray-50 border-gray-200"
              } rounded-r-lg flex items-center`}
              aria-current={activeView === "library" ? "page" : undefined}
            >
              <BookOpen size={18} className="mr-2" /> Chord Library
            </button>
          </div>
        </div>

        {activeView === "song" && (
          <>
            {/* Song Header */}
            <SongHeader
              currentSong={currentSong}
              currentSongIndex={currentSongIndex}
              isPlaying={isPlaying}
              songs={songs}
              togglePlay={togglePlay}
              changeSong={changeSong}
            />

            {/* Custom layout for fixed chord section on desktop */}
            <div className="block md:hidden">
              {/* Mobile layout - stacked */}
              <div className="mb-4">
                <ChordLearningSection
                  currentChord={currentChord}
                  chord={chord}
                  prevChord={prevChord}
                  nextChord={nextChord}
                />
              </div>
              <div>
                <SongProgressionSection
                  currentSong={currentSong}
                  currentChord={currentChord}
                  setCurrentChordIndex={setCurrentChordIndex}
                />
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-2 md:gap-4">
              {/* Desktop layout - fixed chord section */}
              <div className="relative">
                <div className="sticky top-4">
                  <ChordLearningSection
                    currentChord={currentChord}
                    chord={chord}
                    prevChord={prevChord}
                    nextChord={nextChord}
                  />
                </div>
              </div>

              {/* Song Progression Section */}
              <div>
                <SongProgressionSection
                  currentSong={currentSong}
                  currentChord={currentChord}
                  setCurrentChordIndex={setCurrentChordIndex}
                />
              </div>
            </div>
          </>
        )}

        {activeView === "library" && <ChordLibrary />}
      </div>
    </div>
  );
};

export default ChordCanvas;
