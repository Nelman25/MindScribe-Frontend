import { Feature } from "../types";

export default function FeatureCard({ title, description, icon }: Feature) {
  return (
    <div className="p-6 bg-white rounded-md border-gray-50 shadow hover:shadow-xl hover:translate-y-[-3px] transition-all duration-200">
      <div className="flex items-center size-16 rounded-full justify-center p-2 bg-pl mx-auto my-2">
        {icon}
      </div>
      <h3 className="text-center text-primary text-xl py-2 font-medium">{title}</h3>
      <p className="text-center text-text">{description}</p>
    </div>
  );
}
