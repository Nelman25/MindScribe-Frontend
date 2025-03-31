import { IoBulbOutline } from "react-icons/io5";
import { MessageBubbleProps } from "../types";

export default function MessageBubble({ content, title }: MessageBubbleProps) {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <>
      <div className="bg-blue-50 p-5 rounded-xl">
        <div className="flex items-center gap-2 w-full">
          <div className="bg-blue-500 p-2 rounded-xl">
            <IoBulbOutline className="text-white text-xl" />
          </div>
          <span>{title}</span>
        </div>
        <p className="text-text font-light pt-4">{content}</p>
      </div>
      <span className="text-text-light font-light px-2 block mb-4">{time}</span>
    </>
  );
}
