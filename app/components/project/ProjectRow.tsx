import type { Project } from "@/app/data/projects";
import StatusPill from "./StatusPill";

interface ProjectRowProps {
  project: Project;
  /** 1-based position; rendered as a zero-padded index (01, 02, …). */
  index: number;
}

/**
 * A single project row: number · (title + tech stack) · status pill.
 * Static display only.
 */
export default function ProjectRow({ project, index }: ProjectRowProps) {
  const number = String(index).padStart(2, "0");

  return (
    <div className="group flex items-center gap-6 px-6 py-7 transition-colors duration-300 hover:bg-[#222] md:px-8">
      {/* Index */}
      <span className="hidden shrink-0 font-mono text-sm tracking-[0.15em] text-[#6a6a6a] transition-colors duration-300 group-hover:text-[#3DDB6A] sm:block">
        {number}
      </span>

      {/* Title + stack */}
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-normal text-text-white font-medium transition-transform duration-300 group-hover:translate-x-1">
          {project.title}
        </h3>
        <p className="mt-1.5 text-[13px] tracking-[0.1em] text-text-white">
          {project.stack.join("  ·  ")}
        </p>
      </div>

      {/* Status */}
      <div className="shrink-0">
        <StatusPill status={project.status} />
      </div>
    </div>
  );
}