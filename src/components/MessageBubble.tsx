import { MessageBubbleProps } from "../types";

export default function MessageBubble({
  content,
  title,
  timestamp = new Date(),
  icon,
}: MessageBubbleProps) {
  const formattedTime = timestamp.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <>
      <div className="bg-blue-50 p-5 rounded-xl">
        <div className="flex items-center gap-2 w-full">
          <div className="bg-blue-500 p-2 rounded-xl">{icon}</div>
          <span>{title}</span>
        </div>
        <p className="text-text font-light pt-4">{content}</p>
      </div>
      <footer className="flex justify-end p-2">
        <time
          className="text-gray-500 font-light text-sm block"
          dateTime={timestamp.toISOString()}
        >
          {formattedTime}
        </time>
      </footer>
    </>
  );
}
