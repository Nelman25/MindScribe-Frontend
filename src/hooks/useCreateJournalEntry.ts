import { useState } from "react";
import { AIInsight, Mood, Tag } from "../types";

export function useCreateJournalEntry() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [contentHTML, setContentHTML] = useState<string>("");
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [tags, setTags] = useState<Tag[]>([]);
  const [insightsState, setInsightsState] = useState<AIInsight[] | null>(null);

  return {
    title,
    setTitle,
    content,
    setContent,
    contentHTML,
    setContentHTML,
    selectedMood,
    setSelectedMood,
    tags,
    insightsState,
    setInsightsState,
    addTag: (tag: Tag) => setTags([...tags, tag]),
    removeTag: (tagToRemove: Tag) =>
      setTags(tags.filter((tag) => tag !== tagToRemove)),
  };
}
