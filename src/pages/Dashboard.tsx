import Button from "../components/Button";
import { CiFaceSmile } from "react-icons/ci";
import { MdMood } from "react-icons/md";
import FilterButton from "../components/FilterButton";
import JournalEntryCard from "../components/JournalEntryCard";
import { JOURNAL_ENTRIES } from "../constants/constants";

export default function Dashboard() {
  return (
    <div className="bg-background h-full">
      <header className="h-[70px] flex items-center justify-between px-8 sticky top-0 border backdrop-blur-xl shadow z-20">
        <h2 className="text-3xl max-lg:text-xl text-primary font-bold">
          MindScribe
        </h2>
        <ul className="flex gap-4 justify-between items-center text-xl max-w-[400px] w-full">
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
        {/* Profile pic ng user */}
        <div className="flex items-center gap-4">
          <Button type="default">+ New Entry</Button>
          <div className="size-12 rounded-full bg-pl border border-primary"></div>
        </div>
      </header>

      <main className="py-4 max-w-[1440px] mx-auto">
        <h1 className="text-3xl font-bold">My Journal</h1>
        <div className="border-l-4 border-l-primary rounded-lg my-4 overflow-hidden shadow">
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
              You've been maintaining a
              <strong> generally positive outlook</strong> this month despite a
              few challenges. Your entries show resilience, particularly when
              facing career setbacks. I notice you're finding joy in nature and
              social connections, which are great for mental wellbeing. Consider
              setting aside more time for the outdoor activities that energize
              you, as they seem to significantly boost your mood. Remember to
              acknowledge your productivity wins - they appear throughout your
              journal as consistent sources of satisfaction.
            </p>
          </div>
          <div className="flex justify-end p-4">
            <div className="flex gap-4">
              <button className="text-primary">Get More Insights</button>
              <button className="text-primary">Dismiss</button>
            </div>
          </div>
        </div>

        {/* Analytics */}
        <div className="grid grid-cols-4 gap-4 p-4 rounded-lg shadow">
          <div className="text-center bg-pl rounded-lg p-3">
            <h1 className="text-primary text-4xl font-medium">12</h1>
            <p className="text-text">Entries this month</p>
          </div>

          <div className="text-center bg-pl rounded-lg p-3">
            <h1 className="text-primary text-4xl font-medium">67%</h1>
            <p className="text-text">Positive mood</p>
          </div>

          <div className="text-center bg-pl rounded-lg p-3">
            <h1 className="text-primary text-4xl font-medium">8</h1>
            <p className="text-text">Days streak</p>
          </div>

          <div className="text-center bg-pl rounded-lg p-3">
            <h1 className="text-primary text-4xl font-medium">5</h1>
            <p className="text-text">AI Insights</p>
          </div>
        </div>

        <div className="flex wrap gap-6 py-4 mt-12">
          <FilterButton>All</FilterButton>
          <FilterButton>This week</FilterButton>
          <FilterButton>Happy</FilterButton>
          <FilterButton>Neutral</FilterButton>
          <FilterButton>Sad</FilterButton>
          <FilterButton>With AI Insights</FilterButton>
        </div>

        {/* Journal entries card */}

        <div className="grid grid-cols-3 gap-4">
          {JOURNAL_ENTRIES.map(({ title, date, mood, tags, text }) => (
            <JournalEntryCard
              title={title}
              date={date}
              mood={mood}
              tags={tags}
              text={text}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
