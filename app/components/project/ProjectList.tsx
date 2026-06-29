import { projects } from "@/app/data/projects"
import ProjectRow from "./ProjectRow";
import FadeIn from "@/app/components/animations/FadeIn";

/**
 * Bordered card containing the full project list.
 * Rows are divided by hairline borders; numbering is derived from order.
 */
export default function ProjectList() {
  return (
    <section className="overflow-hidden rounded-2xl border border-1 border-[#535353] bg-[#1A1A1A]">
      <div className="divide-y divide-[#535353]">
        {projects.map((project, i) => (
          <FadeIn key={project.title} direction="up" delay={i * 0.06}>
            <ProjectRow project={project} index={i + 1} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}