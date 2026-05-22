interface SDGProps {
  title?: string;
  classes?: string;
}

const SDG = ({ title = "Software · Design · Growth", classes }: SDGProps) => {
  return (
    <span
      className={`inline-block w-fit border border-green-border bg-[#0E1911] rounded-full px-4 py-[6px] text-xs text-green-text btn-shimmer ${classes}`}
    >
      {title}
    </span>
  );
};

export default SDG;
