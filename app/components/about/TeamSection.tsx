import { team } from "@/app/data/team";
import SectionLabel from "./SectionLabel";
import TeamCard from "./TeamCard";

/**
 * "The Team" section: heading plus a bordered grid of member cards,
 * divided by hairline borders (vertical on desktop, horizontal when stacked).
 */
export default function TeamSection() {
  return (
    <section className="mb-24 flex flex-col gap-[32px]">
      <div className="mb-10">
        <SectionLabel>The Team</SectionLabel>
      </div>

      <h2 className="section-title">People behind the pixels.</h2>

      <div className="grid grid-cols-1 divide-y divide-[#1f1f1f] overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0d0d0d] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 [&>*:not(:last-child)]:sm:border-r [&>*:not(:last-child)]:sm:border-[#1f1f1f]">
        {team.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
