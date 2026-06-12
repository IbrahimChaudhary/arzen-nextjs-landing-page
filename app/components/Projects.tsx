import SDG from "./ui/SDG";
import FadeIn from "@/app/components/aminations/FadeIn";
import ProjectCard from "./ProjectCard";
import Project from "../types/project";

const PROJECTS: Project[] = [
  {
    title: "kanba — Project Management SaaS",
    category: "Web Development · SaaS Platform",
    logo: "kanba",
    bg: "bg-[#03160B]",
    text: "text-[#56D364]",
    size: "large",
  },
  {
    title: "Ideaa Landing Page",
    category: "UI/UX Design · Landing Page",
    logo: "Ideaa.",
    bg: "bg-[#181736]",
    text: "text-[#818CF8]",
    size: "small",
  },
  {
    title: "Circle App Dashboard",
    category: "Web Application · Dashboard",
    logo: "circle",
    bg: "bg-[#250A18]",
    text: "text-[#EC4899]",
    size: "small",
  },
];

export default function Projects() {
  return (
    <section id="work" className="bg-[#0D0D0D] text-white py-20 md:py-[104px] px-6 md:px-16 lg:px-[244px]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-6">

        {/* Header */}
        <FadeIn direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4 md:mb-[38px]">
            <div className="flex flex-col gap-4">
              <SDG title="Our Work" />
              <h2 className="font-display text-[38px] md:text-[53px] leading-none tracking-[-0.04em]">
                Selected Projects
              </h2>
            </div>
            <button className="hidden sm:flex items-center justify-center h-11 px-5 rounded-full border border-border text-sm text-white/60 hover:text-white hover:border-white/40 transition-all duration-300 shrink-0">
              View All Work
            </button>
          </div>
        </FadeIn>

        {/* Cards */}
        <FadeIn direction="up" delay={0.1}>
          <ProjectCard project={PROJECTS[0]} />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PROJECTS.slice(1).map((p, i) => (
            <FadeIn key={p.title} direction="up" delay={0.1 + i * 0.08}>
              <ProjectCard project={p} />
            </FadeIn>
          ))}
        </div>

        {/* CTA banner */}
        <FadeIn direction="up" delay={0.15}>
          <div className="relative overflow-hidden rounded-[28px] border border-border gradient-bg px-7 md:px-10 py-10 md:py-14">
            <div className="flex flex-col gap-5 relative z-10">
              <SDG title="Let's Work Together" className="bg-[#0E1911] border-none" />

              <div className="font-display leading-[0.95] tracking-[-0.04em]">
                <h3 className="text-[32px] md:text-[52px] text-white">Let's Build Something</h3>
                <span className="text-btn-gradient text-[32px] md:text-[52px]">Powerful Together</span>
              </div>

              <p className="max-w-[480px] text-sm leading-[24px] text-white/50">
                High-performance websites and web applications that are fast,
                secure and scalable. Built with modern tech stacks.
              </p>

              <button className="btn-primary w-fit h-11 px-6 rounded-full bg-btn-gradient text-black text-sm font-semibold hover:scale-[1.02] transition-transform">
                Start Your Project
              </button>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}