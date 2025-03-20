import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import FeaturesSection from "../sections/FeaturesSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import LandingCTA from "../sections/LandingCTA";

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

      <Hero />
      <FeaturesSection />
      <HowItWorksSection />
      <LandingCTA />
      <Footer />
    </div>
  );
}
