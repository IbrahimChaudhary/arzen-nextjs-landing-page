/**
 * Contact page hero: badge, display heading, supporting copy.
 */
export default function ContactHero() {
  return (
    <header className="mb-12 md:mb-16">
      <div className="mb-8">
        <span className="inline-flex items-center rounded-pill border border-accent-border px-5 py-2 text-sm text-accent sm:text-base">
          Start a Project
        </span>
      </div>

      <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] text-default sm:text-5xl md:text-6xl lg:text-7xl">
        Let&apos;s build something great.
      </h1>

      <p className="mt-6 max-w-xl text-base leading-[1.7] text-secondary sm:text-lg md:mt-8">
        Fill in the form and we&apos;ll get back to you within 24 hours with a
        free consultation.
      </p>
    </header>
  );
}