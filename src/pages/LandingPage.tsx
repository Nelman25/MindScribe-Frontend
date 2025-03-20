import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import FeaturesSection from "../sections/FeaturesSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import LandingCTA from "../sections/LandingCTA";
import Button from "../components/Button";

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
          <Button type="default">Login</Button>
          <Button type="outline">Sign up for free</Button>
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
