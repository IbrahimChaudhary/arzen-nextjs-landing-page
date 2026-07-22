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
        className="group/btn relative overflow-hidden inline-flex items-center justify-center mt-8 w-fit h-11 px-7 rounded-full bg-green-400 text-sm font-medium text-text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <span className="absolute inset-0 bg-btn-gradient opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
        <span className="relative z-10">Start a Project</span>
      </Link>
    </section>
  );
}