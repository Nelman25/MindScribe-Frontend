import { CiFaceSmile } from "react-icons/ci";
import { MdMood } from "react-icons/md";

export default function MonthlyMoodAnalysisCard() {
  return (
    <div className="border-l-4 border-l-primary rounded-lg my-4 mx-auto overflow-hidden shadow">
      <div className="flex justify-between items-center px-4 bg-pl">
        <div className="flex gap-2 items-center py-4">
          <CiFaceSmile className="size-6" />
          <h3>Monthly Mood Analysis</h3>
        </div>
        <span className="text-text font-light">March 2025</span>
      </div>
      <div className="w-full h-auto px-8 py-4 flex items-center gap-4">
        <div className="p-3 bg-pl rounded-full ">
          <MdMood className="text-primary size-6" />
        </div>
        <p className="text-text">
          You've been maintaining a<strong> generally positive outlook</strong>{" "}
          this month despite a few challenges. Your entries show resilience,
          particularly when facing career setbacks. I notice you're finding joy
          in nature and social connections, which are great for mental
          wellbeing. Consider setting aside more time for the outdoor activities
          that energize you, as they seem to significantly boost your mood.
          Remember to acknowledge your productivity wins - they appear
          throughout your journal as consistent sources of satisfaction.
        </p>
      </div>
      <div className="flex justify-end p-4">
        <div className="flex gap-4">
          <button className="text-primary">Get More Insights</button>
          <button className="text-primary">Dismiss</button>
        </div>
      </div>
    </div>
  );
}
