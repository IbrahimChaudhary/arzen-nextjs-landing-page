import { contactInfo } from "@/app/data/contact";

/**
 * Left column: stacked contact-info cards (Email, Call Us, Location, Response).
 */
export default function ContactInfoPanel() {
  return (
    <div className="flex flex-col gap-[5px]">
      {contactInfo.map((item) => (
        <div
          key={item.label}
          className="flex flex-col justify-center rounded-[15px] bg-[#1A1A1A] p-[28px]"
        >
          <span className="text-xs text-gray-text">{item.label}</span>
          <span className="mt-2 font-display text-xs font-normal">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}