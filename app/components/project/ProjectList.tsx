import { projects } from "@/app/data/projects"
import ProjectRow from "./ProjectRow";

/**
 * Bordered card containing the full project list.
 * Rows are divided by hairline borders; numbering is derived from order.
 */
export default function ProjectList() {
  return (
    <section className="overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0d0d0d]">
      <div className="divide-y divide-[#1f1f1f]">
        {projects.map((project, i) => (
          <ProjectRow key={project.title} project={project} index={i + 1} />
        ))}
      </div>
    </section>
  );
}