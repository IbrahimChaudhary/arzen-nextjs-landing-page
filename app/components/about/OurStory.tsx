import SectionLabel from "./SectionLabel";
import StoryStats from "./StoryStats";
import FadeIn from "@/app/components/animations/FadeIn";

/**
 * "Our Story" section: narrative copy on the left, stats panel on the right.
 * Stacks to a single column on smaller screens.
 */
export default function OurStory() {
  return (
    <section className="mb-24">
      <FadeIn direction="up" className="mb-12">
        <SectionLabel>Our Story</SectionLabel>
      </FadeIn>

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[103px]">
        <FadeIn direction="right" className="space-y-8 text-lg leading-[1.7] text-[#d4d4d4] md:text-xl">
          <p>
            Started by a team of developers and designers who were tired of
            choosing between beautiful design and solid engineering. We decided
            to build a studio that refused to compromise on either.
          </p>
          <p>
            Today, Arzen serves 50+ clients worldwide — from early-stage
            startups to scaling businesses — helping them build, launch, and
            grow.
          </p>
        </FadeIn>

        <FadeIn direction="left" delay={0.15}>
          <StoryStats />
        </FadeIn>
      </div>
    </section>
  );
}