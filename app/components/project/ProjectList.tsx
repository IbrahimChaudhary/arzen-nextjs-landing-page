import { client } from "@/sanity/lib/client";
import ProjectRow from "./ProjectRow";
import { Project } from "@/app/data/projects";
import caseStudy from "@/sanity/schemaTypes/caseStudy";

const query = `*[_type == "caseStudy"] | order(_createdAt desc){
  title,
  "slug": slug.current,
  status,
  category,
  stack,
  tags,
  "image": heroImage.asset->url
}`;

export default async function ProjectList() {
  const projects: Project[] = await client.fetch(query,{},{next : {tags: ['caseStudy']}});

  return (
    <section className="overflow-hidden rounded-2xl border border-1 border-[#535353] bg-[#1A1A1A]">
      <div className="divide-y divide-[#535353]">
        {projects.map((project, i) => (
          <ProjectRow key={project.slug ?? project.title} project={project} index={i + 1} />
        ))}
      </div>
    </section>
  );
}