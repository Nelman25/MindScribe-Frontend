import Button from "../components/Button";
import { FaRobot } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { IoBulbOutline } from "react-icons/io5";

export default function WriteJournalEntry() {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="">
      <header className="h-[70px] flex items-center justify-between px-8 sticky top-0 border backdrop-blur-xl shadow z-20">
        <h2 className="text-3xl max-lg:text-xl text-primary font-bold">
          MindScribe
        </h2>

        <ul className="flex gap-4 justify-between items-center text-xl max-lg:text-base max-md:hidden max-w-[400px] w-full">
          <li className="hover:text-primary transition-all duration-300">
            Dashboard
          </li>
          <li className="hover:text-primary transition-all duration-300">
            Insights
          </li>
          <li className="hover:text-primary transition-all duration-300">
            Archive
          </li>
          <li className="hover:text-primary transition-all duration-300">
            Settings
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Button type="default" className="max-lg:text-base">
            Save Entry
          </Button>
        </div>
      </header>

      <main className="px-16 py-12 max-w-[1440px] mx-auto flex gap-6">
        {/* Write journal section */}
        <div className="w-2/3 border border-gray-200 h-full min-h-[600px] rounded-xl shadow">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <input
                type="text"
                placeholder="What's on your mind today?"
                className="text-2xl font-medium border-none focus:outline-none focus:ring-0 w-full text-gray-800 placeholder-gray-400"
              />
              <div className="text-sm font-medium text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg min-w-[130px]">
                March 22, 2025
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-sm font-medium text-gray-700">Mood:</span>
              <div className="flex space-x-3">
                <button className="p-2 rounded-full hover:bg-gray-50 transition-colors duration-200">
                  <span className="text-xl">😊</span>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-50 transition-colors duration-200">
                  <span className="text-xl">😐</span>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-50 transition-colors duration-200">
                  <span className="text-xl">😔</span>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-50 transition-colors duration-200">
                  <span className="text-xl">😤</span>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-50 transition-colors duration-200">
                  <span className="text-xl">😁</span>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-2">
              <div className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-sm font-medium flex items-center">
                Work
                <button className="ml-1.5 text-blue-400 hover:text-blue-600">
                  ×
                </button>
              </div>
              <div className="bg-green-50 text-green-600 px-3 py-1.5 rounded-full text-sm font-medium flex items-center">
                Outdoors
                <button className="ml-1.5 text-green-400 hover:text-green-600">
                  ×
                </button>
              </div>
              <button className="text-gray-400 hover:text-gray-600 text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200 hover:border-gray-300 transition-colors duration-200">
                + Add tag
              </button>
            </div>
          </div>

          <div className="">
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>
          </div>

          <div>
            <textarea name="" id=""></textarea>
          </div>
        </div>

        {/* AI Insights */}
        <div className="w-1/3 border border-slate-200 h-full min-h-[600px] max-h-[600px] overflow-hidden rounded-xl shadow flex flex-col">
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
          <div className="p-6 overflow-scroll max-h-[400px]">
            <div className="bg-blue-50 p-5 rounded-xl">
              <div className="flex items-center gap-2 w-full">
                <div className="bg-blue-500 p-2 rounded-xl">
                  <IoBulbOutline className="text-white text-xl" />
                </div>
                <span>Welcome to your journal!</span>
              </div>
              <p className="text-text font-light pt-4">
                As you write, I'll analyze your entries and provide insights
                about your mood, patterns, and suggestions that might help you
                reflect more deeply.
              </p>
            </div>
            <span className="text-text-light font-light px-2">{time}</span>

            <div className="bg-blue-50 p-5 rounded-xl mt-4">
              <div className="flex items-center gap-2 w-full">
                <div className="bg-blue-500 p-2 rounded-xl">
                  <IoBulbOutline className="text-white text-xl" />
                </div>
                <span>Pattern Observed</span>
              </div>
              <p className="text-text font-light pt-4">
                I notice you've mentioned feeling "productive" frequently in
                your recent entries. Productivity seems to be a key value for
                you right now.
              </p>
              <br />
              <p className="text-text font-light">
                Consider reflecting: What does being productive mean to you, and
                how does it relate to your overall sense of purpose?
              </p>
            </div>
            <span className="text-text-light font-light px-2">{time}</span>

            <button className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl mx-auto my-4">
              Generate Insights
            </button>
          </div>

          <div className="bg-background flex-1 p-4">
            <h4 className="text-text text-lg pb-2">Insight Focus</h4>
            <div className="flex gap-2 overflow-x-scroll py-2 no-scrollbar">
              <button className="bg-blue-500 text-white p-2 text-sm min-w-[130px] rounded-xl">
                Patterns
              </button>
              <button className="border border-gray-300 p-2 text-sm min-w-[130px] rounded-xl">
                Emotional Trends
              </button>
              <button className="border border-gray-300 p-2 text-sm min-w-[130px] rounded-xl">
                Suggestions
              </button>
              <button className="border border-gray-300 p-2 text-sm min-w-[130px] rounded-xl">
                Questions
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
