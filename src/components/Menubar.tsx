import { Editor } from "@tiptap/react";
import { GoListUnordered } from "react-icons/go";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import ToolbarButton from "./ToolbarButton";
import { HEADINGS } from "../constants/constants";
import { HeadingProps } from "../types";

export default function Menubar({ editor }: { editor: Editor }) {
  if (!editor) {
    return null;
  }

  return (
    <div
      className="w-full px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl my-4 shadow flex gap-2 [&_.ProseMirror_h1]:text-4xl [&_.ProseMirror_h1]:font-bold [&_.ProseMirror_h1]:my-4
  [&_.ProseMirror_h2]:text-3xl [&_.ProseMirror_h2]:font-bold [&_.ProseMirror_h2]:my-4
  [&_.ProseMirror_h3]:text-2xl [&_.ProseMirror_h3]:font-bold [&_.ProseMirror_h3]:my-3
"
    >
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive("bold")}
        className="font-bold"
      >
        B
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive("italic")}
        className="font-noto italic"
      >
        I
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        isActive={editor.isActive("underline")}
      >
        <u>U</u>
      </ToolbarButton>

      {HEADINGS.map(({ level, text }: HeadingProps) => (
        <ToolbarButton
          key={level}
          onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
          isActive={editor.isActive("heading", { level })}
        >
          {text}
        </ToolbarButton>
      ))}

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive("bulletList")}
      >
        <GoListUnordered />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive("orderedList")}
      >
        <MdOutlineFormatListNumbered />
      </ToolbarButton>
    </div>
  );
}
