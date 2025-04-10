import { create } from "zustand";
import { JournalEntry } from "../types";
import { persist } from "zustand/middleware";

interface JournalStoreState {
  entries: JournalEntry[];
  currentEntry: JournalEntry;
  monthlyMoodAnalysis: string | null;
  setEntry: (entry: JournalEntry) => void;
  setMonthlyMoodAnalysis: (text: string) => void;
}

export const useJournalStore = create<JournalStoreState>()(
  persist(
    (set, get) => ({
      entries: [],
      monthlyMoodAnalysis: null,
      currentEntry: {
        title: null,
        id: null,
        date: null,
        mood: null,
        content: null,
        contentInHTML: null,
        tags: null,
        aiInsight: null,
      },

      // function actions
      setEntry: (entry) =>
        set((state) => ({
          currentEntry: entry,
          entries: [...state.entries, entry],
        })),

      setMonthlyMoodAnalysis: (analysis) =>
        set(() => ({ monthlyMoodAnalysis: analysis })),
    }),
    {
      name: "journal-storage",
    }
  )
);
