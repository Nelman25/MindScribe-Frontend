import AIInsight from "../components/AIInsight";
import JournalHeader from "../components/JournalHeader";
import MoodSelector from "../components/MoodSelector";

export default function WriteJournalEntry() {
  return (
    <div className="">
      <JournalHeader />

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

            <MoodSelector />

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

          {/* Dito ilalagay yung mga Tiptap buttons */}
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

          {/* Actual canvas */}
          <div>
            <textarea name="" id=""></textarea>
          </div>
        </div>

        {/* AI Insights */}
        <AIInsight />
      </main>
    </div>
  );
}
