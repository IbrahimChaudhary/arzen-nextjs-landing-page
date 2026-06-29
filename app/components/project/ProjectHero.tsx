import SDG from "../ui/SDG";
import FadeIn from "@/app/components/animations/FadeIn";

/**
 * Page hero: eyebrow badge, display heading, and supporting subline.
 */
export default function ProjectHero() {
  return (
    <header className="mb-12">
      <FadeIn direction="up" className="mb-8">
        <SDG title="All Projects" />
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <h1 className="font-display text-[53px] font-normal leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl">
          Every project tells a story.
        </h1>
      </FadeIn>

      <FadeIn direction="up" delay={0.2}>
        <p className="mt-5 text-text-white text-base">
          From MVPs to enterprise platforms — here&apos;s everything we&apos;ve
          shipped.
        </p>
      </FadeIn>
    </header>
  );
}