import { ReactNode } from "react";

type ButtonType = {
  children: string | ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: "outline" | "default";
  className?: string;
};

export default function Button({
  children,
  onClick,
  type,
  className,
}: ButtonType) {
  return (
    <button
      className={`py-2 px-5 my-8 text-lg rounded-md max-sm:text-base border border-transparent transition-all duration-100 flex justify-center ${
        type === "default"
          ? "text-white bg-primary hover:bg-white hover:text-primary hover:border-primary"
          : "text-primary bg-white border border-primary hover:bg-primary hover:text-white"
      } ${className}`}
      onClick={onClick}
      type="submit"
    >
      {children}
    </button>
  );
}
