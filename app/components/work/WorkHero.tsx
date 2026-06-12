/**
 * Services page hero: "What We Do" badge, display heading, intro copy.
 */
export default function WorkHero() {
  return (
    <header className="mb-12 md:mb-16">
      <div className="mb-8">
        <span className="inline-flex items-center rounded-full border border-[#2f6e33] px-5 py-2 text-sm text-[#4caf50] sm:text-base">
          What We Do
        </span>
      </div>

      <h1 className=" text-4xl leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
        End-to-end digital solutions.
      </h1>

      <p className="mt-6 max-w-xl text-base leading-[1.7] text-[#d4d4d4] sm:text-lg md:mt-8">
        We cover the full spectrum — from strategy and design to development and
        growth. One team, everything you need.
      </p>
    </header>
  );
}
