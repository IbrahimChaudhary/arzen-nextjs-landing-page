/**
 * Closing call-to-action panel.
 * Static display: the button is presentational (no handler) to match the
 * static-page brief. Swap the <button> for a <Link> when wiring it up.
 */
export default function ProjectCTA() {
  return (
    <section className="mt-12 rounded-2xl border border-[#1f1f1f] bg-[#1A1A1A] px-6 py-20 text-center md:py-24">
      <h2 className="font-display font-medium text-[26px]">
        Have a project in mind?
      </h2>
      <p className="mt-4 text-text-white tracking-[3px] text-normal">
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