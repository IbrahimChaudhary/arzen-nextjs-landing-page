import SectionLabel from "./SectionLabel";
import StoryStats from "./StoryStats";

interface OurStoryProps {
  paragraphs?: string[];
  stats?: Array<{ value: string; label: string }>;
}

/**
 * "Our Story" section: narrative copy on the left, stats panel on the right.
 * Stacks to a single column on smaller screens.
 */
export default function OurStory({ paragraphs, stats }: OurStoryProps) {
  return (
    <section className="mb-24">
      <div className="mb-12">
        <SectionLabel>Our Story</SectionLabel>
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[103px]">
        <div className="space-y-8 text-lg leading-[1.7] text-[#d4d4d4] md:text-xl">
          {(paragraphs && paragraphs.length > 0 ? paragraphs : ["We build with clarity, care, and long-term thinking."]).map((paragraph, index) => (
            <p key={`${paragraph.slice(0, 12)}-${index}`}>{paragraph}</p>
          ))}
        </div>

        <StoryStats stats={stats} />
      </div>
    </section>
  );
}