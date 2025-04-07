import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import FeaturesSection from "../sections/FeaturesSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import LandingCTA from "../sections/LandingCTA";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[800px] min-w-full">
      <header className="h-[70px] flex items-center justify-between px-8 sticky top-0 border backdrop-blur-xl shadow z-20">
        <h2 className="text-3xl max-lg:text-xl text-primary font-bold">
          MindScribe
        </h2>

        <div className="flex gap-4 items-center max-sm:hidden">
          <Button variant="default" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button variant="outline" onClick={() => navigate("/signup")}>
            Sign up for free
          </Button>
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
