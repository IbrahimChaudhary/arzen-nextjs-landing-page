import Link from "next/link";

export default function CareerHero() {
  return (
    <section className="relative w-full bg-[#0a0a0a] bg-[url('/upperbg.jpg')] bg-cover bg-top bg-no-repeat pt-32 pb-24 px-6 md:px-12 lg:px-24">
      {/* Optional dark overlay to ensure text readability over the grid */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-5xl flex flex-col items-start">
        
        {/* We're Hiring Badge */}
        <div className="inline-flex items-center rounded-full bg-[#0B2114] border border-[#164124] px-4 py-1.5 text-sm font-semibold text-[#4ADE80]">
          We&apos;re Hiring
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-extrabold leading-[1.1] text-white sm:text-6xl lg:text-[72px]">
          Build Something<br />That Matters.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
          Join a team that codes with purpose and designs with intention. We&apos;re a
          small studio doing work we&apos;re proud of — come do it with us.
        </p>

        {/* Button */}
        <Link
  href="#open-positions"
  className="group/btn relative overflow-hidden mt-10 inline-flex items-center justify-center rounded-full bg-[#4ADE80] px-6 py-3.5 text-sm font-bold text-black transition-transform hover:scale-105"
>
  {/* Smooth Gradient Fade Layer utilizing your global CSS class */}
  <span className="absolute inset-0 bg-btn-gradient opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
  
  {/* Button Content lifted above the background */}
  <span className="relative z-10 flex items-center justify-center gap-2">
    View Open Positions
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </span>
</Link>
      </div>
    </section>
  );
}