import { JournalEntry } from "../types";

export default function JournalEntryCard({
  title,
  date,
  mood,
  text,
  tags,
}: JournalEntry) {
  return (
    <div className="bg-white rounded-lg shadow border border-gray-50 hover:border-primary transition-all duration-200">
      <div className="border-b py-4 px-3">
        <h1 className="text-xl font-medium">{title}</h1>
        <div className="flex justify-between items-center">
          <span className="text-text text-sm">{date}</span>
          <span className="bg-pl rounded-2xl px-3 py-1 text-primary text-sm">
            {mood}
          </span>
        </div>
      </div>
      <div className="py-4 px-3 border-b max-h-[150px] overflow-hidden">
        <p className="text-text-light line-clamp-2">{text}</p>
      </div>

      <div className="py-4 px-2 flex gap-2 overflow-y-scroll max-h-16">
        {tags.map((tag) => (
          <span className="bg-pl rounded-2xl block px-3 py-1 text-primary text-sm ">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
