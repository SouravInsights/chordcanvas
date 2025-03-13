import React from "react";
import { Play, PauseCircle } from "lucide-react";
import { Song } from "@/types";

interface SongHeaderProps {
  currentSong: Song;
  currentSongIndex: number;
  isPlaying: boolean;
  songs: Song[];
  togglePlay: () => void;
  changeSong: (index: number) => void;
}

const SongHeader: React.FC<SongHeaderProps> = ({
  currentSong,
  currentSongIndex,
  isPlaying,
  songs,
  togglePlay,
  changeSong,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
      <h1 className="text-xl font-bold text-gray-800">{currentSong.title}</h1>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-600">{currentSong.artist}</p>
          {currentSong.movie && currentSong.year && (
            <p className="text-gray-500 text-sm">
              {currentSong.movie} ({currentSong.year})
            </p>
          )}
          {currentSong.capo !== undefined && currentSong.capo > 0 && (
            <p className="text-green-600 text-sm font-medium mt-1">
              Capo: {currentSong.capo}
            </p>
          )}
        </div>
        <button
          className={`p-3 rounded-full ${
            isPlaying
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          }`}
          onClick={togglePlay}
        >
          {isPlaying ? <PauseCircle size={24} /> : <Play size={24} />}
        </button>
      </div>

      {/* Song selector - only show if we have multiple songs */}
      {songs.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {songs.map((song, idx) => (
            <button
              key={idx}
              onClick={() => changeSong(idx)}
              className={`px-3 py-1 text-sm rounded-full ${
                idx === currentSongIndex
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {song.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SongHeader;
