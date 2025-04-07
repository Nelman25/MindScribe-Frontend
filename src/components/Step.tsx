import { Step as StepType } from "../types";

export default function Step({ number, title, description }: StepType) {
  return (
    <div className="p-6 flex flex-col items-center gap-2 relative">
      <div className="p-4 my-2 size-20 bg-primary rounded-full text-white font-bold flex items-center justify-center">
        <span className="text-3xl">{number}</span>
      </div>
      <h4 className="text-primary font-medium text-center text-xl">{title}</h4>
      <p className="text-text text-center max-md:px-16">{description}</p>
      {Number(number) !== 4 && (
        <div className="h-0.5 bg-primary w-[10%] absolute top-16 right-0 max-xl:hidden" />
      )}
    </div>
  );
}
