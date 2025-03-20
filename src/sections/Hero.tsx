export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-primary/20 px-4 py-8 md:px-8 lg:px-16 xl:px-40 min-h-[350px] lg:min-h-[600px] xl:min-h-[800px] flex items-center">
      <div className="z-10 w-full md:w-3/4 lg:w-1/2 xl:w-1/2 py-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl max-sm:text-center font-bold text-primary mb-4">
          Your Personal Journey to Mindfulness
        </h1>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl max-sm:text-center font-light text-text">
          Track your emotions, reflect on your experiences, and gain valuable
          insights with our AI-powered journal that helps you understand
          yourself better.
        </p>
      </div>

      <div className="h-full flex items-center w-1/2 md:block max-sm:hidden">
        <img
          src="/undraw_diary_f7r8.png"
          alt="diary hero"
          className="object-contain max-w-full lg:max-w-[80%] xl:max-w-[70%] self-end"
        />
      </div>
    </section>
  );
}
