"use client";
import React, { useState } from "react";
import SongHeader from "./SongHeader";
import ChordLearningSection from "./ChordLearningSection";
import SongProgressionSection from "./SongProgressionSection";
import chordData from "@/data/chords";
import songs from "@/data/songs";

const ChordCanvas: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [currentChordIndex, setCurrentChordIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

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
        {/* Header with song info */}
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
      </div>
    </div>
  );
};

export default ChordCanvas;
