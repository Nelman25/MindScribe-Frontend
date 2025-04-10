import { useCreateJournalEntry } from "../hooks/useCreateJournalEntry";
import { useJournalStore } from "../stores/useJournalStore";

import AIInsightChatbox from "../components/AIInsightChatbox";
import JournalHeader from "../components/JournalHeader";
import MoodSelector from "../components/MoodSelector";
import RichTextEditor from "../components/RichTextEditor";
import { JOURNAL_TAGS } from "../constants/constants";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

import { JournalEntry, Tag } from "../types";

export default function WriteJournalEntry() {
  const {
    title,
    setTitle,
    content,
    setContent,
    contentHTML,
    setContentHTML,
    selectedMood,
    setSelectedMood,
    insightsState,
    setInsightsState,
    addTag,
    removeTag,
    tags,
  } = useCreateJournalEntry();
  const [tagsChoices, setTagsChoices] = useState<Tag[]>(JOURNAL_TAGS);
  const [error, setError] = useState<string | null>(null);

  // effect for displaying error popup
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  const setEntry = useJournalStore((state) => state.setEntry);
  const navigate = useNavigate();
  const date = new Date();
  const formattedDate = date?.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleTagSelect = (tag: Tag) => {
    addTag(tag);
    setTagsChoices((prevTags) => prevTags.filter((t) => t.name !== tag.name));
  };

  const handleRemoveTag = (tag: Tag) => {
    removeTag(tag);
    setTagsChoices([...tagsChoices, tag]);
  };

  const handleSaveToStore = () => {
    if (!title) {
      setError("Your journal needs a title. Please add one before saving");
      return;
    } else if (!selectedMood) {
      setError("How are you feeling? Pick an emoji that reflects your mood.");
      return;
    } else if (!content) {
      setError(
        "Looks like your journal is empty. Write something meaningful to save it."
      );
      return;
    } else if (!tags) {
      setError("Add at least one tag to help categorize your entry.");
      return;
    }

    const entry: JournalEntry = {
      title,
      id: crypto.randomUUID(),
      date: formattedDate,
      content,
      contentInHTML: contentHTML,
      mood: selectedMood,
      tags,
      aiInsight: insightsState,
    };

    setEntry(entry);
    navigate("/dashboard");
  };

  return (
    <>
      <JournalHeader />

      <main className="px-16 py-12 max-w-[1440px] mx-auto flex gap-6">
        {/* Write journal section */}
        <div className="w-2/3 flex flex-col h-[850px] max-h-[850px] rounded-xl">
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <input
                type="text"
                placeholder="What's on your mind today?"
                className="text-2xl font-medium border-none focus:outline-none focus:ring-0 w-full text-gray-800 placeholder-gray-400"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className="text-sm font-medium text-gray-400 bg-gray-100 px-3 py-1.5 text-center rounded-lg min-w-[130px]">
                {formattedDate}
              </div>
            </div>

            <MoodSelector
              selectedMood={selectedMood}
              setSelectedMood={setSelectedMood}
            />
            {/* SELECTED TAGS */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                <span>Tags:</span>
                {tags.map((tag) => (
                  <button
                    key={tag.name}
                    className="px-3 py-1 rounded-full text-sm font-medium flex items-center"
                    style={{ color: tag.fontColor, backgroundColor: tag.color }}
                    onClick={() => handleRemoveTag(tag)}
                  >
                    {tag.name}
                  </button>
                ))}
              </div>
            )}

            {/* TAGS CHOICES */}
            {tagsChoices.length !== 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                <span>Select tags that best describe your journal entry:</span>
                {tagsChoices.map((tag) => (
                  <button
                    key={tag.name}
                    className="px-3 py-1 rounded-full text-sm font-medium flex items-center"
                    style={{ color: tag.fontColor, backgroundColor: tag.color }}
                    onClick={() => handleTagSelect(tag)}
                  >
                    {tag.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Actual canvas */}
          <RichTextEditor
            content={content}
            onUpdateContent={(newContent) => setContent(newContent)}
            onUpdateHTMLContent={(newContent) => setContentHTML(newContent)}
          />
          <div className="flex justify-end gap-4 my-2">
            <Link to="/dashboard">
              <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-xl shadow">
                Cancel
              </button>
            </Link>
            <button
              onClick={handleSaveToStore}
              className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow"
            >
              Save
            </button>
          </div>
        </div>

        {/* AI Insights */}
        <AIInsightChatbox
          AIInsights={insightsState}
          setInsights={setInsightsState}
          // unsure pa sa implementation, will check later
          // onUpdateAIInsights={(insightsState) =>
          //   setInsightsState((prev) => [...(prev ?? []), insightsState])
          // }
        />
      </main>

      {error && (
        <div className="absolute bottom-10 left-10">
          <Alert
            sx={{
              width: "auto",
              height: "80px",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
            }}
            severity="error"
          >
            {error}
          </Alert>
        </div>
      )}
    </>
  );
}
