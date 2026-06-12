interface SectionLabelProps {
  children: React.ReactNode;
}

/**
 * Small outlined pill used as a section eyebrow
 * ("Our Story", "The Team", "Our Values").
 */
export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#2a2a2a] px-5 py-2 font-mono text-sm tracking-[0.15em] text-[#9a9a9a]">
      {children}
    </span>
  );
}