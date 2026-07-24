import Link from "next/link";
import SDG from "../ui/SDG";

interface AboutHeroProps {
  title?: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function AboutHero({
  title,
  description,
  primaryCtaLabel = "Our Services",
  primaryCtaHref = "/work",
  secondaryCtaLabel = "View Portfolio",
  secondaryCtaHref = "/portfolio",
}: AboutHeroProps) {
  return (
    <header className="mb-20 flex flex-col gap-[40px]">
      <div className="mb-10">
        <SDG title="Who We Are" />
      </div>

      <h1 className="section-title max-w-3xl">{title}</h1>

      <p className="mt-10 max-w-2xl text-lg leading-[1.7] text-text-white md:text-xl">
        {description}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href={primaryCtaHref}
          className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#4ADE80] px-7 py-3.5 text-base font-semibold text-[#0a0a0a] transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="absolute inset-0 bg-btn-gradient opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />

          <span className="relative z-10 flex items-center justify-center gap-2">
            {primaryCtaLabel}
          </span>
        </Link>
        <Link href={secondaryCtaHref}>
          <button
            type="button"
            className="rounded-full border border-[#3a3a3a] px-7 py-3.5 text-base text-white transition-colors hover:bg-[#141414] active:scale-[0.98]"
          >
            {secondaryCtaLabel}
          </button>
        </Link>
      </div>
    </header>
  );
}
