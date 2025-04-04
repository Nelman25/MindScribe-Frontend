import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Menubar from "./Menubar";
import Underline from "@tiptap/extension-underline";

interface RichTextEditorProps {
  content?: string;
  onChange: (content: string) => void;
}

export default function RichTextEditor({
  content = "",
  onChange,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Underline,
      Placeholder.configure({
        placeholder: "Write something beautiful...",
      }),
      Link.configure({
        openOnClick: false,
      }),
      Image,
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
      console.log(editor.getHTML());
    },
  });

  if (!editor) {
    return <div>Loading editor...</div>;
  }

  return (
    <div>
      {editor && <Menubar editor={editor} />}

      <div className="">
        <EditorContent
          className="bg-white shadow rounded-xl p-4 h-[500px] max-h-[500px] overflow-y-scroll border border-slate-100"
          editor={editor}
        />
      </div>
    </div>
  );
}
