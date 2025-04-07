import Button from "./Button";

export default function JournalHeader() {
  return (
    <header className="h-[70px] flex items-center justify-between px-8 sticky top-0 border backdrop-blur-xl shadow z-20">
      <h2 className="text-3xl max-lg:text-xl text-primary font-bold">
        MindScribe
      </h2>

      <ul className="flex gap-4 justify-between items-center text-xl max-lg:text-base max-md:hidden max-w-[400px] w-full">
        {["Dashboard", "Insights", "Archive", "Settings"].map((item) => (
          <li
            key={item}
            className="hover:text-primary transition-all duration-300"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <Button variant="default" className="max-lg:text-base">
          Save Entry
        </Button>
      </div>
    </header>
  );
}
