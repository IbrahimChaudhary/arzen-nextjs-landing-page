"use client";
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard"; // Adjust path if needed
import SDG from "../../components/ui/SDG"; // Adjust path if needed
import PageShell from "../../components/ui/PageShell"; // Adjust path if needed


// 1. Import or define your exact ProjectStatus type
export type ProjectStatus = "Live" | "Delivered" | "Ongoing";

// 2. Update SanityProject to use ProjectStatus instead of generic string
export interface SanityProject {
  title: string;
  slug: string;
  status: ProjectStatus; // <-- Updated from string to ProjectStatus
  category?: string[];
  intro?: string;
  tags?: string[];
  image?: string;
}

const tabs = ["All", "Web Dev", "Design", "SaaS", "Branding"];

export default function PortfolioClient({ initialProjects }: { initialProjects: SanityProject[] }) {
  const [activeTab, setActiveTab] = useState("All");
const filteredProjects =
    activeTab === "All"
      ? initialProjects
      : initialProjects.filter((p) =>
          // Check if ANY of the categories in the array match the active tab
          p.category?.some((cat) => cat.toLowerCase().includes(activeTab.toLowerCase()))
        );

  return (
    <PageShell className="flex flex-col gap-12">
      {/* Centered Header Layout */}
      <div className="flex flex-col items-left gap-5 text-center">
        <SDG title="Our Work" />
        <h1 className="section-title text-left">Our Portfolio</h1>

        <p className="font-body font-medium text-base max-w-2xl text-left text-gray-400">
          A showcase of digital products and brand experiences we've built for our clients
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap items-left gap-2 mt-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs transition-all border ${
                  isActive
                    ? "bg-[#1A1A1A] border-[#535353] text-white"
                    : "border-[#535353] text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Uniform Project Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects
          .filter((project) => project.slug)
          .map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              caseStudy
              intro={project.intro}
            />
          ))}
      </div>
    </PageShell>
  );
}