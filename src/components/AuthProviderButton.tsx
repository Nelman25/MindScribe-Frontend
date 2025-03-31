import { AuthProviderButtonProps } from "../types";

export default function AuthProviderButton({
  children,
  onClick,
}: AuthProviderButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-3 rounded-xl border bg-white hover:bg-pl hover:border-primary hover:-translate-y-[1px] transition-all duration-200 flex justify-center"
    >
      {children}
    </button>
  );
}
