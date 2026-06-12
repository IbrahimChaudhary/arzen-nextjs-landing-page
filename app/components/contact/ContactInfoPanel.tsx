import { contactInfo } from "@/app/data/contact";

/**
 * Left column: stacked contact-info cards (Email, Call Us, Location, Response).
 */
export default function ContactInfoPanel() {
  return (
    <div className="flex flex-col gap-5">
      {contactInfo.map((item) => (
        <div
          key={item.label}
          className="flex flex-col justify-center rounded-card bg-surface px-8 py-10"
        >
          <span className="text-sm text-faint">{item.label}</span>
          <span className="mt-2 font-display text-lg font-bold text-default">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}