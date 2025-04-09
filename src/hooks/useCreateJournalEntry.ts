import { useState } from "react";
import { Mood, Tag } from "../types";

export function useCreateJournalEntry() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [tags, setTags] = useState<Tag[]>([]);

  return {
    title,
    setTitle,
    content,
    setContent,
    selectedMood,
    setSelectedMood,
    tags,
    addTag: (tag: Tag) => setTags([...tags, tag]),
    removeTag: (tagToRemove: Tag) =>
      setTags(tags.filter((tag) => tag !== tagToRemove)),
  };
}
