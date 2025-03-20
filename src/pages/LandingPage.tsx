import { FEATURES, STEPS } from "../constants/constants";
import FeatureCard from "../components/FeatureCard";
import Step from "../components/Step";
import Footer from "../sections/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-[800px] min-w-full">
      <header className="h-[70px] flex items-center justify-between px-8 sticky top-0 border backdrop-blur-xl shadow z-20">
        <h2 className="text-3xl max-lg:text-xl text-primary font-bold">
          MindScribe
        </h2>

        <div className="text-xl max-lg:text-base text-text flex justify-around max-w-[300px] w-full max-md:hidden">
          <p>Features</p>
          <p>How it works</p>
          <p>FAQ</p>
        </div>

        <div className="flex gap-4 items-center max-sm:hidden">
          <button className="bg-primary text-white px-4 py-2 max-lg:h-8 max-lg:text-sm rounded-md flex items-center hover:translate-y-[-1px] hover:shadow-lg  transition-all duration-200">
            <p>Login</p>
          </button>
          <button className="bg-white text-primary border border-primary px-4 py-2  max-lg:h-8 rounded-md flex items-center hover:translate-y-[-1px] hover:shadow-lg transition-all duration-200">
            <p>Sign up for free</p>
          </button>
        </div>
      </header>

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

      <section className="w-full h-[800px] max-md:h-auto bg-gradient-to-b from-primary/20 to-white px-16 py-20 flex flex-col justify-center items-center relative max-lg:py-4 max-lg:h-auto max-md:px-12">
        <h2 className="text-5xl text-center font-bold text-primary max-lg:text-4xl py-12">
          Powerful features for your growth
        </h2>

        <div className="grid grid-cols-[repeat(3,400px)] max-xl:grid-cols-[repeat(3,280px)] max-lg:grid-cols-[repeat(2,1fr)] max-md:grid-cols-1 gap-5 my-8">
          {FEATURES.map(({ title, description, icon }) => (
            <FeatureCard
              key={title}
              title={title}
              description={description}
              icon={icon}
            />
          ))}
        </div>
      </section>

      <section className="w-full h-[800px] max-md:h-auto  bg-gradient-to-b from-white to-primary/20 px-40 py-20 flex flex-col justify-center items-center relative max-lg:py-4 max-md:px-0">
        <h2 className="text-5xl font-bold text-primary max-lg:text-3xl py-12">
          How It Works
        </h2>

        <div className="grid grid-cols-[repeat(4,320px)] max-xl:grid-cols-[repeat(2,1fr)] max-md:grid-cols-1">
          {STEPS.map(({ title, number, description }) => (
            <Step
              key={number}
              title={title}
              number={number}
              description={description}
            />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-primary/20 to-white h-[50vh] flex flex-col items-center">
        <h2 className="text-5xl max-sm:text-3xl max-sm:py-8  max-sm:pt-24 text-center font-bold text-primary max-lg:text-4xl py-12">
          Begin Your Journey Today
        </h2>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl w-1/2 text-center font-light text-text">
          Track your emotions, reflect on your experiences, and gain valuable
          insights with our AI-powered journal that helps you understand
          yourself better.
        </p>
        <button className="py-3 px-6 my-8 text-xl text-white bg-primary rounded-md max-sm:text-base">
          Create Your Free Journal
        </button>
      </section>

      <Footer />
    </div>
  );
}
