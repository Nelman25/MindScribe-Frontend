export default function FilterButton({ children }: { children: string }) {
  return (
    <button className="px-[16px] py-[6px] min-w-44 bg-white border rounded-2xl hover:text-primary hover:bg-pl hover:border-primary transition-all duration-200">
      {children}
    </button>
  );
}
