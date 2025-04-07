import { useState } from "react";
import { FocusType } from "../types";

const FOCUS: FocusType[] = [
  "Patterns",
  "Emotional Trends",
  "Suggestions",
  "Questions",
];

export default function InsightFocus() {
  const [isSelected, setSelected] = useState<FocusType>("Patterns");

  const handleSelectInsightFocus = (focus: FocusType) => {
    console.log(focus);
    setSelected(focus);
  };

  return (
    <div className="bg-background border-t border-t-slate-200 flex-1 p-4">
      <h4 className="text-text text-lg pb-2">Insight Focus</h4>
      <div className="flex gap-2 overflow-x-scroll py-2 no-scrollbar">
        {FOCUS.map((item) => (
          <button
            key={item}
            onClick={() => handleSelectInsightFocus(item)}
            className={`transition-all duration-300 p-2 text-sm min-w-[130px] rounded-xl ${
              isSelected === item
                ? "bg-blue-500 text-white"
                : "bg-white border border-gray-300"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
