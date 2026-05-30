interface SDGProps {
  title?: string;
  className?: string;
}

const SDG = ({ title = "Software · Design · Growth", className }: SDGProps) => (
  <span
    className={`inline-block w-fit border border-green-border bg-[#0E1911] rounded-full px-4 py-1.5 text-xs text-green-text btn-shimmer ${className ?? ""}`}
  >
    {title}
  </span>
);

export default SDG;