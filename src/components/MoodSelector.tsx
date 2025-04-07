import { useState } from "react";
import { Mood } from "../types";

const MOOD: Mood[] = [
  { emoji: "😊", label: "Happy", value: "happy" },
  { emoji: "😁", label: "Excited", value: "excited" },
  { emoji: "😐", label: "Neutral", value: "neutral" },
  { emoji: "😔", label: "Sad", value: "sad" },
  { emoji: "😤", label: "Frustrated", value: "frustrated" },
];

export default function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);

  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <span className="text-xl font-medium text-gray-700">Mood:</span>
      <div className="flex space-x-3">
        {MOOD.map((mood) => (
          <button
            key={mood.label}
            className={`p-2 rounded-full hover:bg-gray-50 transition-colors duration-200 ${
              mood.label === selectedMood?.label ? "bg-primary/80" : ""
            }`}
            onClick={() => setSelectedMood(mood)}
          >
            <span className="text-2xl">{mood.emoji}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
