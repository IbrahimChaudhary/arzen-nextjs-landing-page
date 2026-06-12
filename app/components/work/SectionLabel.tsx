interface SectionLabelProps {
  children: React.ReactNode;
}

/**
 * Outlined eyebrow pill used as a section label ("Our Process").
 */
export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#2a2a2a] px-5 py-2 font-mono text-xs tracking-[0.15em] text-[#9a9a9a] sm:text-sm">
      {children}
    </span>
  );
}