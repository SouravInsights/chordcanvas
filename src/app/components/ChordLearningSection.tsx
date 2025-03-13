import React from "react";
import { Volume2, ArrowLeft, ArrowRight } from "lucide-react";
import { ChordData } from "@/types";
import ChordDiagram from "./ChordDiagram";

interface ChordLearningSectionProps {
  currentChord: string;
  chord: ChordData;
  prevChord: () => void;
  nextChord: () => void;
}

const ChordLearningSection: React.FC<ChordLearningSectionProps> = ({
  currentChord,
  chord,
  prevChord,
  nextChord,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">Learn the Chords</h2>
        <div className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
          {chord.difficulty}
        </div>
      </div>

      {/* Chord Navigation */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={prevChord}
          className="p-2 bg-indigo-100 text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-200 transition-colors"
          aria-label="Previous chord"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="text-center">
          <div className="text-2xl font-bold text-indigo-600">
            {currentChord}
          </div>
          <div className="text-gray-600 text-sm">{chord.name}</div>
        </div>
        <button
          onClick={nextChord}
          className="p-2 bg-indigo-100 text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-200 transition-colors"
          aria-label="Next chord"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Guitar Chord Diagram */}
      <div className="mb-6">
        <ChordDiagram chord={chord} />

        {/* Helpful tips */}
        <div className="mt-4 text-sm text-gray-700 bg-blue-50 p-3 rounded-lg w-full">
          <h4 className="font-medium text-blue-800">Tips:</h4>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            {chord.tips.map((tip: string, index: number) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        {/* Play chord button */}
        <button className="mt-4 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg flex items-center">
          <Volume2 size={18} className="mr-2" />
          Hear this chord
        </button>
      </div>
    </div>
  );
};

export default ChordLearningSection;
