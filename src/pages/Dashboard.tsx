import Button from "../components/Button";

import FilterButton from "../components/FilterButton";
import JournalEntryCard from "../components/JournalEntryCard";
import { JOURNAL_ENTRIES } from "../constants/constants";
import DashboardAnalytics from "../sections/DashboardAnalytics";
import MonthlyMoodAnalysisCard from "../sections/MonthlyMoodAnalysisCard";

export default function Dashboard() {
  return (
    <div className="bg-background h-full">
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

        {/* Profile pic ng user */}
        <div className="flex items-center gap-4">
          <Button type="default" className="max-lg:text-base">
            + New Entry
          </Button>
          <div className="size-12 max-lg:size-10 rounded-full bg-pl border border-primary"></div>
        </div>
      </header>

      <main className="py-4 max-w-[1440px] mx-auto max-2xl:max-w-5xl max-lg:px-20">
        <h1 className="text-3xl font-bold">My Journal</h1>
        <MonthlyMoodAnalysisCard />
        <DashboardAnalytics />

        <div className="flex gap-6 py-4 mt-12 overflow-x-scroll w-full max-lg:max-w-[790px]">
          <FilterButton>All</FilterButton>
          <FilterButton>This week</FilterButton>
          <FilterButton>Happy</FilterButton>
          <FilterButton>Neutral</FilterButton>
          <FilterButton>Sad</FilterButton>
          <FilterButton>With AI Insights</FilterButton>
        </div>

        {/* Journal entries card */}
        <div className="grid grid-cols-3 max-2xl:grid-cols-2 max-lg:grid-cols-1 gap-4">
          {JOURNAL_ENTRIES.map(({ title, date, mood, tags, text }) => (
            <JournalEntryCard
              key={text}
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
