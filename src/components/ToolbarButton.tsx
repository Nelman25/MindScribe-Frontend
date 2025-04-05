import { ToolbarButtonProps } from "../types";

export default function ToolbarButton({
  onClick,
  isActive,
  className = "",
  children,
}: ToolbarButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg size-8 hover:bg-gray-200 flex justify-center items-center ${
        isActive ? "bg-blue-100" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}
