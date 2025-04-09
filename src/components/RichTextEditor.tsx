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
        history: {
          depth: 100, // number of step na tinatrack
          newGroupDelay: 100, // Milliseconds before new undo group
        },
        blockquote: {
          HTMLAttributes: {
            class: "border-l-2 border-gray-300 pl-4 my-2",
          },
        },
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
    editorProps: {
      handleKeyDown: (_view, event) => {
        if (event.ctrlKey && event.key === "z") {
          editor?.chain().focus().undo().run();
          return true;
        }
        if (event.ctrlKey && event.key === "y") {
          editor?.chain().focus().redo().run();
          return true;
        }
        return false;
      },
    },
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getText());
    },
  });

  if (!editor) {
    return <div>Loading editor...</div>;
  }

  return (
    <div className="flex flex-col flex-1">
      {editor && <Menubar editor={editor} />}

      <EditorContent
        className="bg-white no-scrollbar shadow rounded-xl p-4 flex-1 overflow-y-scroll border border-slate-100"
        editor={editor}
      />
    </div>
  );
}
