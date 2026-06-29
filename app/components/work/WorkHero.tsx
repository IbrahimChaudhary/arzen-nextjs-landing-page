import SDG from "../ui/SDG";
import FadeIn from "@/app/components/animations/FadeIn";

/**
 * Services page hero: "What We Do" badge, display heading, intro copy.
 */
export default function WorkHero() {
  return (
    <header className="mb-12 md:mb-16">
      <FadeIn direction="up" className="mb-8">
        <SDG title="What We Do" />
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <h1 className="font-display text-[53px] font-normal">
          End-to-end digital solutions.
        </h1>
      </FadeIn>

      <FadeIn direction="up" delay={0.2}>
        <p className="mt-6 max-w-xl text-base leading-[1.7] text-text-white sm:text-lg md:mt-8">
          We cover the full spectrum — from strategy and design to development and
          growth. One team, everything you need.
        </p>
      </FadeIn>
    </header>
  );
}
