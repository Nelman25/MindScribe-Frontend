import { FaRobot } from "react-icons/fa";
import { IoReload } from "react-icons/io5";

import MessageBubble from "../components/MessageBubble";
import InsightFocus from "./InsightFocus";

export default function AIInsight() {
  return (
    <div className="w-1/3 border border-slate-200 h-full min-h-[800px] max-h-[600px] overflow-hidden rounded-xl shadow flex flex-col">
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
        <button className="ml-auto">
          <IoReload className="size-5" />
        </button>
      </div>

      {/* Chat body */}
      <div className="p-6 overflow-scroll max-h-[600px]">
        <MessageBubble
          title="Welcome to your journal"
          content="As you write, I'll analyze your entries and provide insights about your mood, patterns, and suggestions that might help you reflect more deeply."
        />
        <MessageBubble
          title="Pattern Observed"
          content="I notice you've mentioned feeling 'productive' frequently in your recent entries. Productivity seems to be a key value for you right now. Consider reflecting: What does being productive mean to you, and how does it relate to your overall sense of purpose?"
        />
        <button className="block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-4 rounded-xl mx-auto my-4">
          Generate Insights
        </button>
      </div>

      <InsightFocus />
    </div>
  );
}
