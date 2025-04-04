import { Editor } from "@tiptap/react";
import { GoListUnordered } from "react-icons/go";
import { MdOutlineFormatListNumbered } from "react-icons/md";

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
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`rounded-lg size-8 font-bold hover:bg-gray-200 ${
          editor.isActive("bold") ? "bg-blue-100" : ""
        }`}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`rounded-lg size-8 font-noto italic hover:bg-gray-200 ${
          editor.isActive("italic") ? "bg-blue-100" : ""
        }`}
      >
        I
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`rounded-lg size-8 hover:bg-gray-200 ${
          editor.isActive("underline") ? "bg-blue-100" : ""
        }`}
      >
        <u>U</u>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`rounded-lg size-8 hover:bg-gray-200 ${
          editor.isActive("heading", { level: 1 }) ? "bg-blue-100" : ""
        }`}
      >
        H₁
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`rounded-lg size-8 hover:bg-gray-200 ${
          editor.isActive("heading", { level: 2 }) ? "bg-blue-100" : ""
        }`}
      >
        H₂
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`rounded-lg size-8 hover:bg-gray-200 ${
          editor.isActive("heading", { level: 3 }) ? "bg-blue-100" : ""
        }`}
      >
        H₃
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`rounded-lg size-8 hover:bg-gray-200 ${
          editor.isActive("heading", { level: 4 }) ? "bg-blue-100" : ""
        }`}
      >
        H₄
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={`rounded-lg size-8 hover:bg-gray-200 ${
          editor.isActive("heading", { level: 5 }) ? "bg-blue-100" : ""
        }`}
      >
        H₅
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={`rounded-lg size-8 hover:bg-gray-200 ${
          editor.isActive("heading", { level: 6 }) ? "bg-blue-100" : ""
        }`}
      >
        H₆
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`rounded-lg size-8 hover:bg-gray-200 flex justify-center items-center ${
          editor.isActive("bulletList") ? "bg-blue-100" : ""
        }`}
      >
        <GoListUnordered />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`rounded-lg size-8 hover:bg-gray-200 flex justify-center items-center ${
          editor.isActive("orderedList") ? "bg-blue-100" : ""
        }`}
      >
        <MdOutlineFormatListNumbered />
      </button>
    </div>
  );
}
