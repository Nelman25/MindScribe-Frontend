import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";

import JournalHeader from "../components/JournalHeader";
import AIInsight from "../components/AIInsightChatbox";

import { useCreateJournalEntry } from "../hooks/useCreateJournalEntry";
import { useJournalStore } from "../stores/useJournalStore";
import { JournalEntry } from "../types";

import { useEditor, EditorContent } from "@tiptap/react";
import { Link } from "react-router-dom";

export default function ViewJournalEntry() {
  const { setInsightsState } = useCreateJournalEntry(); // kinuha ko to para lang mawala yung error kasi required yung setInsights props ni <AIInsight />. Fix ko later
  const selectedEntry = useJournalStore<JournalEntry>(
    (state) => state.selectedEntry
  );

  const viewEditor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Paragraph,
      Text,
      Heading,
      BulletList,
      OrderedList,
      ListItem,
      Bold,
      Italic,
    ],
    content: selectedEntry?.contentInHTML || "",
    editable: false,
  });

  return (
    <div>
      <JournalHeader />

      <main className="px-16 py-12 max-w-[1440px] max-h-[850px] mx-auto flex gap-6">
        <div className="w-2/3 h-[850px] flex flex-col">
          <div className="w-full flex-1 bg-white/80 border border-gray-50 rounded-xl shadow mb-4 p-6">
            <div className="flex justify-between items-center text-text mb-4">
              <h2 className="text-2xl font-bold">{selectedEntry?.title}</h2>
              <span>{selectedEntry?.date}</span>
            </div>
            <p className="text-text mb-4">Mood: {selectedEntry?.mood?.emoji}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span>Tags:</span>
              {selectedEntry?.tags?.map((tag) => (
                <button
                  key={tag.name}
                  className="px-3 py-1 rounded-full text-sm font-medium flex items-center"
                  style={{ color: tag.fontColor, backgroundColor: tag.color }}
                >
                  {tag.name}
                </button>
              ))}
            </div>
            <hr />

            <div className="my-6 max-h-[490px] overflow-scroll no-scrollbar">
              <EditorContent editor={viewEditor} />
            </div>
          </div>

          {/* TODO: implement button actions */}
          <div className="flex justify-end gap-4">
            <Link to="/dashboard">
              <button className="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-xl shadow">
                Back
              </button>
            </Link>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow">
              Edit Entry
            </button>
          </div>
        </div>

        <AIInsight
          isViewing={true}
          AIInsights={selectedEntry.aiInsight}
          setInsights={setInsightsState}
        />
      </main>
    </div>
  );
}
