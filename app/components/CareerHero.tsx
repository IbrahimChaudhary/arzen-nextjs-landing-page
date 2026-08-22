import Link from "next/link";

export default function CareerHero() {
  return (
    <section className="relative overflow-hidden bg-black px-6 pb-24 pt-28 md:px-12 lg:pt-36">
      {/* ambient glow, matches the rest of the site */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-green-500/20 via-red-500/10 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-3xl">
        <span className="inline-flex items-center rounded-full bg-green-500/10 px-4 py-1.5 text-xs font-medium text-green-400">
          We&apos;re Hiring
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          Build Something
          <br />
          That Matters.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400">
          Join a team that codes with purpose and designs with intention.
          We&apos;re a small studio doing work we&apos;re proud of — come do
          it with us.
        </p>

        <Link
          href="#open-positions"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-400 px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
        >
          View Open Positions
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}