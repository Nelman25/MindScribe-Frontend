import { FEATURES } from "../constants/constants";
import FeatureCard from "../components/FeatureCard";

export default function FeaturesSection() {
  return (
    <section
      id="Feature"
      className="w-full h-[800px] max-md:h-auto bg-gradient-to-b from-primary/20 to-white px-16 py-20 flex flex-col justify-center items-center relative max-lg:py-4 max-lg:h-auto max-md:px-12"
    >
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
  );
}
