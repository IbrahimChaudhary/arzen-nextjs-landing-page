import SDG from "./ui/SDG";
import FadeIn from "@/app/components/animations/FadeIn";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { client } from "@/sanity/lib/client"; // Import Sanity client

// Define the type matching what we fetch for the cards
export interface FeaturedProject {
  title: string;
  slug: string;
  status: "Live" | "Delivered" | "Ongoing";
  category?: string[];
  description?: string;
  tags?: string[];
  image?: string;
}

export default async function Projects() {
  // 1. Fetch only the first 3 projects from Sanity
  const query = `*[_type == "caseStudy"][0...3]{
    title,
    "slug": slug.current,
    status,
    category,
    description,
    tags,
    "image": heroImage.asset->url
  }`;

  const featuredProjects: FeaturedProject[] = await client.fetch(query,{},
  { next: { revalidate: 60 } });

  return (
    <section id="work" className="bg-[#0D0D0D] text-white py-20 md:py-[104px] px-6 md:px-16 lg:px-[244px]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-6">

        {/* Header */}
        <FadeIn direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4 md:mb-[38px]">
            <div className="flex flex-col gap-4">
              <SDG title="Our Work" className="border-none" />
              <h2 className="section-title">
                Selected Projects
              </h2>
            </div>
            <Link href="/portfolio" className="hidden sm:flex items-center justify-center h-11 px-5 rounded-full border border-border text-sm text-white/60 hover:text-white hover:border-white/40 transition-all duration-300 shrink-0">
              View All Work
            </Link>
          </div>
        </FadeIn>

        {/* Cards */}
        {featuredProjects.length > 0 && (
          <FadeIn direction="up" delay={0.1}>
            <ProjectCard project={featuredProjects[0]} caseStudy />
          </FadeIn>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {featuredProjects.slice(1).map((p, i) => (
            <FadeIn key={p.slug || p.title} direction="up" delay={0.1 + i * 0.08}>
              <ProjectCard project={p} caseStudy />
            </FadeIn>
          ))}
        </div>

        {/* CTA banner */}
        <FadeIn direction="up" delay={0.15}>
          <div className="relative overflow-hidden rounded-[12px] border border-border gradient-bg px-7 md:px-10 py-10 md:py-14 mt-10">
            <div className="flex flex-col gap-5 relative z-10">
              <SDG title="Let's Work Together" className="bg-[#0E1911] border-none" />

              <div className="font-display leading-[0.95] tracking-[-0.04em]">
                <h3 className="text-[32px] md:text-[52px] text-white">Let's Build Something</h3>
                <span className="text-gradient-custom text-[32px] md:text-[52px]">Powerful Together</span>
              </div>

              <p className="max-w-[480px] text-sm leading-[24px] text-white/50">
                High-performance websites and web applications that are fast,
                secure and scalable. Built with modern tech stacks.
              </p>

              <a
                href="/contact"
                className="group/btn relative overflow-hidden inline-flex items-center justify-center w-fit h-11 px-6 rounded-full bg-[#4ADE80] text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
              >
                <span className="absolute inset-0 bg-btn-gradient opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Project
                </span>
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}