import Link from "next/link";

const GRADIENT_TEXT =
  "bg-gradient-to-r from-[#5fbf5a] via-[#a9d17a] to-[#e89bb0] bg-clip-text text-transparent";

/**
 * Closing CTA panel: "Ready to work together?" with "together?" in gradient,
 * supporting line, and a white pill button (presentational on a static page).
 */
export default function CTA() {
  return (
    <section className="rounded-3xl border border-[#1f1f1f] bg-[#0d0d0d] px-6 py-20 text-center md:py-28">
      <h2 className="font-sans text-3xl font-extrabold tracking-[-0.01em] text-white sm:text-4xl md:text-5xl">
        Ready to work <span className={GRADIENT_TEXT}>together?</span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl font-mono text-sm tracking-[0.12em] text-[#b4b4b4] sm:text-base">
        Tell us about your project and we&apos;ll get back within 24 hours.
      </p>

      <Link
  href="/contact"
  className="group/btn relative overflow-hidden inline-flex items-center justify-center mt-8 md:mt-10 rounded-full bg-[#4ADE80] px-7 py-3.5 text-sm font-bold text-[#0a0a0a] transition-transform hover:scale-[1.02] active:scale-[0.98]"
>
  {/* Smooth Gradient Fade Layer utilizing your global CSS class */}
  <span className="absolute inset-0 bg-btn-gradient opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
  
  {/* Button Content lifted above the background */}
  <span className="relative z-10 flex items-center justify-center gap-2">
    Start a Project
  </span>
</Link>
    </section>
  );
}