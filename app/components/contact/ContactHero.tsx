import SDG from "../ui/SDG";
import FadeIn from "@/app/components/animations/FadeIn";

export default function ContactHero() {
  return (
    <header className="mb-12 md:mb-16">
      <FadeIn direction="up" className="mb-10">
        <SDG title="Start a Project" />
      </FadeIn>
      <FadeIn direction="up" delay={0.1}>
        <h1 className="font-display mb-10 text-4xl font-normal text-[53px]">
          Let&apos;s build something great.
        </h1>
      </FadeIn>

      <FadeIn direction="up" delay={0.2}>
        <p className="mt-6 font-body mb-10 font-medium text-base leading-[1.8] text-default max-w-xl">
          Fill in the form and we&apos;ll get back to you within 24 hours with a
          free consultation.
        </p>
      </FadeIn>
    </header>
  );
}
