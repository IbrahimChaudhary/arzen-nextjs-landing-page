import Link from "next/link";

export default function ProjectCTA() {
  return (
    <section className="mt-12 rounded-2xl border border-[#fdf2f2] bg-[#1A1A1A] px-6 py-20 text-center md:py-24">
      <h2 className="font-display font-medium text-[26px]">
        Have a project in mind?
      </h2>
      <p className="mt-4 text-text-white tracking-[3px] text-normal">
        Let&apos;s turn your idea into a product people love.
      </p>

      <Link
        href="/contact"
        className="inline-block mt-8 rounded-full bg-white px-7 py-3 text-sm font-medium text-text-black transition-opacity hover:opacity-90 active:scale-[0.98]"
      >
        Start a Project
      </Link>
    </section>
  );
}