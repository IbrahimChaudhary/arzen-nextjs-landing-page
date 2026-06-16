interface SectionLabelProps {
  children: React.ReactNode;
}

/**
 * Small outlined pill used as a section eyebrow
 * ("Our Story", "The Team", "Our Values").
 */
export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="font-body tracking-[0.21em] font-medium text-[12px] px-[14px] py-[12px] border text-[#B8B8B8] border-[#535353] rounded-full leading-normal text-default">
      {children}
    </span>
  );
}
