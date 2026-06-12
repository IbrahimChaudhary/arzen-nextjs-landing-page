import type { Service } from "@/app/data/services";

interface ServiceCardProps {
  service: Service;
  /** 1-based position; rendered as a zero-padded number (01, 02, …). */
  index: number;
}

/**
 * One large service card: number, title, description, and tech-stack pills.
 */
export default function ServiceCard({ service, index }: ServiceCardProps) {
  const number = String(index).padStart(2, "0");

  return (
    <div className="rounded-3xl border border-[#1f1f1f] bg-[#121212] p-8 md:p-10 lg:p-12">
      <span className="font-mono text-sm tracking-[0.15em] text-[#7a7a7a]">
        {number}
      </span>

      <h3 className="mt-6 font-sans text-2xl font-bold text-white md:mt-8 md:text-3xl">
        {service.title}
      </h3>

      <p className="mt-4 max-w-md text-base leading-[1.6] text-[#9a9a9a] md:mt-5">
        {service.description}
      </p>

      <div className="mt-7 flex flex-wrap gap-3 md:mt-9">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="whitespace-nowrap rounded-full border border-[#2a2a2a] px-4 py-2 text-sm text-[#b4b4b4]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}