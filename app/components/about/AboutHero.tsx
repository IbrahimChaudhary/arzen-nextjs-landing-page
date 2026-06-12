/**
 * About page hero: "Who We Are" badge, display heading, intro copy,
 * and the two CTA buttons.
 * Buttons are presentational (static page). Swap for <Link> when wiring up.
 */
export default function AboutHero() {
  return (
    <header className="mb-20">
      <div className="mb-10">
        <span className="inline-flex items-center rounded-full border border-[#2f6e33] px-5 py-2 text-base text-[#4caf50]">
          Who We Are
        </span>
      </div>

      <h1 className="max-w-4xl font-sans text-5xl font-extrabold leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl md:text-7xl">
        We build digital products that drive real growth.
      </h1>

      <p className="mt-10 max-w-2xl text-lg leading-[1.7] text-[#d4d4d4] md:text-xl">
        Arzen Inc is a software house founded on the belief that great
        technology and great design are inseparable. We partner with startups to
        craft digital products that perform and endure.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <button
          type="button"
          className="rounded-full bg-[#f4f4f2] px-7 py-3.5 text-base text-[#0a0a0a] transition-opacity hover:opacity-90 active:scale-[0.98]"
        >
          Our Services
        </button>
        <button
          type="button"
          className="rounded-full border border-[#3a3a3a] px-7 py-3.5 text-base text-white transition-colors hover:bg-[#141414] active:scale-[0.98]"
        >
          View Portfolio
        </button>
      </div>
    </header>
  );
}