import Link from "next/link";
import SDG from "../ui/SDG";


export default function AboutHero() {
  return (
    <header className="mb-20 flex flex-col gap-[40px]">
      <div className="mb-10">
        <SDG title="Who We Are" />
      </div>

      <h1 className="section-title max-w-3xl">
        We build digital products that drive real growth.
      </h1>

      <p className="mt-10 max-w-2xl text-lg leading-[1.7] text-text-white md:text-xl">
        Arzen Inc is a software house founded on the belief that great
        technology and great design are inseparable. We partner with startups to
        craft digital products that perform and endure.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/work">
          <button
            type="button"
            className="rounded-full bg-[#f4f4f2] px-7 py-3.5 text-base text-[#0a0a0a] transition-opacity hover:opacity-90 active:scale-[0.98]"
          >
            Our Services
          </button>
        </Link>
        <Link href="/portfolio">
          <button
            type="button"
            className="rounded-full border border-[#3a3a3a] px-7 py-3.5 text-base text-white transition-colors hover:bg-[#141414] active:scale-[0.98]"
          >
            View Portfolio
          </button>
        </Link>
      </div>
    </header>
  );
}
