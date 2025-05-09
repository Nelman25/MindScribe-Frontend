import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function LandingCTA() {
  return (
    <section className="bg-gradient-to-b from-primary/20 to-white h-[50vh] flex flex-col items-center">
      <h2 className="text-5xl max-sm:text-3xl max-sm:py-8  max-sm:pt-24 text-center font-bold text-primary max-lg:text-4xl py-12">
        Begin Your Journey Today
      </h2>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl w-1/2 text-center font-light text-text">
        Track your emotions, reflect on your experiences, and gain valuable
        insights with our AI-powered journal that helps you understand yourself
        better.
      </p>
      <Link to="/login">
        <Button variant="default">Create Your Free Journal</Button>
      </Link>
    </section>
  );
}
