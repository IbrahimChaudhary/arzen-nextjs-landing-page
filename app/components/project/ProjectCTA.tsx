/**
 * Closing call-to-action panel.
 * Static display: the button is presentational (no handler) to match the
 * static-page brief. Swap the <button> for a <Link> when wiring it up.
 */
export default function ProjectCTA() {
  return (
    <section className="mt-12 rounded-2xl border border-[#1f1f1f] bg-[#0d0d0d] px-6 py-20 text-center md:py-24">
      <h2 className="font-sans text-3xl font-extrabold text-white md:text-4xl">
        Have a project in mind?
      </h2>
      <p className="mt-4 font-mono text-sm tracking-[0.15em] text-[#9a9a9a] md:text-base">
        Let&apos;s turn your idea into a product people love.
      </p>

      <button
        type="button"
        className="mt-8 rounded-full bg-white px-7 py-3 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-90 active:scale-[0.98]"
      >
        Start a Project
      </button>
    </section>
  );
}