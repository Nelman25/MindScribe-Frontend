import { JournalEntry } from "../types";

export default function JournalEntryCard({
  title,
  date,
  mood,
  text,
  tags,
}: JournalEntry) {
  return (
    <article className="bg-white rounded-lg shadow border border-gray-50 hover:border-primary transition-all duration-200">
      <header className="border-b py-4 px-3">
        <h1 className="text-xl font-medium">{title}</h1>
        <div className="flex justify-between items-center max-">
          <time
            className="text-gray-600 text-sm"
            dateTime={new Date(date).toISOString()}
          >
            {date}
          </time>
          <span className="bg-pl rounded-2xl px-3 py-1 text-primary text-sm">
            {mood}
          </span>
        </div>
      </header>
      <div className="py-4 px-3 border-b max-h-[150px] overflow-hidden">
        <p className="text-text-light line-clamp-2">{text}</p>
      </div>

      <footer className="py-4 px-2 flex gap-2 overflow-y-scroll max-h-16">
        {tags.map((tag, index) => (
          <span
            key={`${index}-${tag}`}
            className="bg-pl rounded-2xl block px-3 py-1 text-primary text-sm text-nowrap"
          >
            {tag}
          </span>
        ))}
      </footer>
    </article>
  );
}
