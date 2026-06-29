import Link from "next/link";
import FadeIn from "@/app/components/animations/FadeIn";

const GRADIENT_TEXT =
  "bg-gradient-to-r from-[#5fbf5a] via-[#a9d17a] to-[#e89bb0] bg-clip-text text-transparent";

/**
 * Closing CTA panel: "Ready to work together?" with "together?" in gradient,
 * supporting line, and a white pill button (presentational on a static page).
 */
export default function CTA() {
  return (
    <FadeIn direction="up">
      <section className="rounded-3xl border border-[#1f1f1f] bg-[#0d0d0d] px-6 py-20 text-center md:py-28">
        <h2 className="font-sans text-3xl font-extrabold tracking-[-0.01em] text-white sm:text-4xl md:text-5xl">
          Ready to work <span className={GRADIENT_TEXT}>together?</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl font-mono text-sm tracking-[0.12em] text-[#b4b4b4] sm:text-base">
          Tell us about your project and we&apos;ll get back within 24 hours.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-8 rounded-full bg-[#f4f4f2] px-7 py-3.5 text-sm font-medium text-[#0a0a0a] transition-all hover:opacity-90 hover:scale-[1.03] active:scale-[0.98] md:mt-10"
        >
          Start a Project
        </Link>
      </section>
    </FadeIn>
  );
}