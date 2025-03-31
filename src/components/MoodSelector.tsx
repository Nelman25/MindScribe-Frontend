export default function MoodSelector() {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <span className="text-xl font-medium text-gray-700">Mood:</span>
      <div className="flex space-x-3">
        {["😊", "😐", "😔", "😤", "😁"].map((mood) => (
          <button
            key={mood}
            className="p-2 rounded-full hover:bg-gray-50 transition-colors duration-200"
          >
            <span className="text-2xl">{mood}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
