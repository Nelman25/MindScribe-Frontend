import { FilterButtonProps } from "../types";

export default function FilterButton({
  children,
  onClick,
  className = "",
}: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`px-[16px] py-[6px] min-w-44 bg-white border rounded-2xl hover:text-primary hover:bg-pl hover:border-primary transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
