import { create } from "zustand";
import { JournalEntry } from "../types";
import { persist } from "zustand/middleware";

interface JournalStoreState {
  entries: JournalEntry[];
  selectedEntry: JournalEntry;
  setSelectedEntry: (entry: JournalEntry) => void;
  monthlyMoodAnalysis: string | null;
  setEntry: (entry: JournalEntry) => void;
  setMonthlyMoodAnalysis: (text: string) => void;
}

export const useJournalStore = create<JournalStoreState>()(
  persist(
    (set) => ({
      entries: [],
      monthlyMoodAnalysis: null,
      selectedEntry: {
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

      setSelectedEntry: (entry) => set(() => ({ selectedEntry: entry })),
      
      setMonthlyMoodAnalysis: (analysis) =>
        set(() => ({ monthlyMoodAnalysis: analysis })),
    }),

    {
      name: "journal-storage",
    }
  )
);
