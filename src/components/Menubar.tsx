import { Editor } from "@tiptap/react";
import { GoListUnordered } from "react-icons/go";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";

import ToolbarButton from "./ToolbarButton";
import { HEADINGS } from "../constants/constants";
import { HeadingProps } from "../types";

export default function Menubar({ editor }: { editor: Editor | null }) {
  if (!editor) {
    return null;
  }

  return (
    <div className="w-full px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl my-4 shadow flex gap-2">
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
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive("blockquote")}
      >
        <FaQuoteLeft className="size-3" />
      </ToolbarButton>
    </div>
  );
}
