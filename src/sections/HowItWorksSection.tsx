import { STEPS } from "../constants/constants";
import Step from "../components/Step";

export default function HowItWorksSection() {
  return (
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
  );
}
