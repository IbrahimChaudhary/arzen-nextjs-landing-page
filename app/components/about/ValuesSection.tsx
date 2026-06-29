import { values } from "@/app/data/values";
import SectionLabel from "./SectionLabel";
import FadeIn from "@/app/components/animations/FadeIn";

/**
 * "Our Values" section: heading plus a bordered grid of value columns.
 */
export default function ValuesSection() {
  return (
    <section>
      <FadeIn direction="up" className="mb-10">
        <SectionLabel>Our Values</SectionLabel>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <h2 className="section-title mb-8">
          What we stand for.
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 divide-y divide-[#1f1f1f] overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0d0d0d] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 [&>*:not(:last-child)]:sm:border-r [&>*:not(:last-child)]:sm:border-[#1f1f1f]">
        {values.map((value, i) => (
          <FadeIn
            key={value.title}
            direction="up"
            delay={i * 0.08}
            className="px-6 py-10 transition-colors duration-300 hover:bg-[#111]"
          >
            <h3 className="font-display text-xl font-bold text-white">
              {value.title}
            </h3>
            <p className="mt-3 text-sm leading-[1.6] text-[#8a8a8a]">
              {value.description}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}