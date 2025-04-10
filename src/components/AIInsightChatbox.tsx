import { FaRobot } from "react-icons/fa";
import { IoBulbOutline, IoReload } from "react-icons/io5";

import MessageBubble from "./MessageBubble";
import InsightFocus from "./InsightFocus";

import { AIInsight } from "../types";

interface AIInsightProps {
  isViewing?: boolean;
  AIInsights?: AIInsight[] | null;
  // unsure pa sa implementation, will check later
  onUpdateAIInsights?: (insight: AIInsight) => void;
}

export default function AIInsightChatbox({
  isViewing,
  AIInsights,
}: AIInsightProps) {
  return (
    <div className="w-1/3 border border-slate-200 h-[850px] max-h-[850px] overflow-hidden rounded-xl shadow flex flex-col">
      <div className="p-6 bg-blue-50 flex border-b border-slate-200">
        <div className="flex gap-3">
          <div className="bg-blue-500 size-12 flex justify-center items-center rounded-xl">
            <FaRobot className="text-white size-6" />
          </div>
          <div>
            <h3 className="font-medium">AI Insights</h3>
            <span className="text-text-light text-sm">
              Analyzing your journal entry
            </span>
          </div>
        </div>
        {/* remove button if only for viewing entry */}
        {!isViewing && (
          <button className="ml-auto">
            <IoReload className="size-5" />
          </button>
        )}
      </div>

      {/* Chat body */}
      <div className="p-6 overflow-scroll no-scrollbar h-[700px]">
        {/* default message */}
        <MessageBubble
          title="Welcome to your journal"
          content="As you write, I'll analyze your entries and provide insights about your mood, patterns, and suggestions that might help you reflect more deeply."
          icon={<IoBulbOutline className="text-white text-xl" />}
        />

        {AIInsights?.map((insight) => (
          <MessageBubble
            title={insight.title}
            content={insight.message}
            icon={<IoBulbOutline className="text-white text-xl" />}
          />
        ))}

        {/* Disable buttons if user is only viewing */}
        {!isViewing && (
          <button className="block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-4 rounded-xl mx-auto my-4">
            Generate Insights
          </button>
        )}
      </div>

      <InsightFocus isViewing={isViewing} />
    </div>
  );
}
