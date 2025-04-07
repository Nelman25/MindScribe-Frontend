import { ButtonType } from "../types";

export default function Button({
  children,
  onClick,
  variant,
  htmlType,
  className,
}: ButtonType) {
  return (
    <button
      className={`py-2 px-5 my-8 text-lg rounded-md max-sm:text-base border transition-all duration-100 flex justify-center ${
        variant === "default"
          ? "text-white bg-primary hover:bg-white hover:text-primary hover:border-primary"
          : "text-primary bg-white border border-primary hover:bg-primary hover:text-white"
      } ${className}`}
      onClick={onClick}
      type={htmlType}
    >
      {children}
    </button>
  );
}
