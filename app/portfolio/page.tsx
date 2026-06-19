"use client";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import SDG from "../components/ui/SDG";
import PageShell from "../components/ui/PageShell";
import Project from "../types/project";

const tabs = ["All", "Web Dev", "Design", "SaaS", "Branding"];

const projects: Project[] = [
  {
    title: "kanba — Project Management SaaS",
    category: "Web Development · SaaS Platform",
    description:
      "Full-featured project management for modern teams. Drag-and-drop boards, real-time collaboration, analytics.",
    bg: "bg-[#0E1911]",
    text: "text-btn-gradient ",
    logo: "kanba",
    size: "large",
    tags: ["Web Development", "SaaS Platform"],
    status: "Live",
    caseStudy: {
      title: "kanba — Project Management SaaS",
      intro:
        "A full-featured project management platform built for modern teams. Features drag-and-drop Kanban boards, real-time collaboration via WebSockets, analytics dashboard, and team permission management. Launched in 3 months from brief to production.",
      details:
        "Kanba combines drag-and-drop boards, real-time notifications, advanced analytics, and team permissions into one polished experience. The product launched from concept to production in under 3 months, driving strong adoption with fast performance and refined UI.",
      features: [
        "Real-time board updates with WebSockets",
        "Custom permissions and team management",
        "Built-in analytics dashboard and reporting",
      ],
      tech: ["React", "Node.js", "PostgreSQL", "WebSockets", "Stripe", "SWS"],
      stats: [
        { value: "3x", label: "Team Productivity" },
        { value: "2k+", label: "Active Users" },
        { value: "99.9%", label: "Uptime SLA" },
      ],
    },
  },
  {
    title: "Ideaa Landing Page",
    category: "UI/UX Design · Landing Page",
    description: "High-converting landing page for an AI idea management tool.",
    bg: "bg-[#181736]",
    text: "text-[#7B7EFF]",
    logo: "Idea",
    size: "small",
    tags: ["UI/UX Design", "Landing Page"],
    status: "Live",
    caseStudy: {
      title: "Ideaa — AI Idea Tool Landing Page",
      intro:
        "A high-converting landing page for an AI-powered idea management tool.  Designed in Figma and built in Next.js with Framer Motion animations.  Focused on conversion rate optimization with clear CTAs, social proof,  and animated feature showcases.",
      details:
        "Ideaa’s landing page uses precise typography, motion, and storytelling to highlight the product’s value proposition. The design is optimized for mobile and desktop to increase signups and user trust.",
      features: [
        "High-conversion hero section",
        "Responsive interaction design",
        "Clear product positioning and CTA hierarchy",
      ],
      tech: ["Next.js", "Tailwind CSS", "Figma", "Framer Motion"],
      stats: [
        { value: "4.8%", label: "Conversion Lift" },
        { value: "1.8s", label: "Load Time" },
        { value: "98%", label: "Page Speed Score" },
      ],
    },
  },
  {
    title: "Circle App Dashboard",
    category: "Web Application Dashboard",
    description:
      "Analytics dashboard for a community platform. Clean data visualization.",
    bg: "bg-[#250A18]",
    text: "text-[#F472B5]",
    logo: "Circle",
    size: "small",
    tags: ["Web Application", "Dashboard"],
    caseStudy: {
      title: "Circle App — Analytics Dashboard",
      intro:
        "A clean analytics dashboard for a community platform. Features rea -time data visualizations, member analytics, engagement tracking and revenue  charts. Built with Vue.js and D3.js for smooth, interactive data  exploration.",
      details:
        "Circle App Dashboard presents analytics in a clean, accessible interface that makes complex metrics easy to understand. The UI focuses on clarity and fast data-driven decision-making.",
      features: [
        "Custom chart components",
        "User engagement metrics",
        "Modular card-based layout",
      ],
      tech: ["Vue.js", "D3.js", "REST API", "Charts.js"],
      stats: [
        { value: "5k+", label: "Daily Users" },
        { value: "40%", label: "Faster Reporting" },
        { value: "100ms", label: "Average Load Time" },
      ],
    },
  },
  {
    title: "Nexus Brand Identity",
    category: "Branding · Identity",
    description:
      "Complete visual identity for a fintech startup — logo, typography, color system.",
    bg: "bg-[#180D00]",
    text: "text-[#FF8C42]",
    logo: "NEXUX",
    size: "small",
    tags: ["Branding", "Identity"],
    caseStudy: {
      title: "Nexus — Complete Brand Identity",
      intro:
        "Full visual identity system for a fintech startup. Included logodesign, typography selection, color system, iconography, brand voice guidelines, and a full brand book. Delivered across digital and print applications.",
      details:
        "Nexus Brand Identity includes a flexible logo system, bold typography, and a distinctive color palette. Every visual element was crafted to support a strong, modern fintech narrative.",
      features: [
        "Logo system and mark guidelines",
        "Color palette and typography system",
        "Marketing asset templates",
      ],
      tech: ["Logo Design", "Typography", "Color System", "Iconography"],
      stats: [
        { value: "3wk", label: "Delivery Time" },
        { value: "5", label: "Concepts Explored" },
        { value: "100+", label: "Client Satisfaction" },
      ],
    },
  },
  {
    title: "GrowthOps SEO Strategy",
    category: "Digital Growth · SEO",
    description:
      "300% organic growth in 6 months through technical SEO and content strategy.",
    bg: "bg-[#001810]",
    text: "text-[#00E676]",
    logo: "SEO+",
    size: "small",
    tags: ["Digital Growth", "SEO"],
    status: "Ongoing",
    caseStudy: {
      title: "GrowthOps — SEO & Growth Strategy",
      intro:
        "End-to-end SEO and digital growth engagement for a B2B SaaS company. Technical SEO audit, content strategy, link building and performance  optimization resulted in 300% organic traffic growth in 6 months.",
      details:
        "GrowthOps combined technical optimization, content planning, and keyword research to deliver measurable SEO performance. The strategy focused on fast indexation, better site health, and sustainable rankings.",
      features: [
        "Technical SEO audit",
        "Content gap analysis",
        "Keyword-driven page optimization",
      ],
      tech: ["Techincal SEO", "Content Strategy", "Analytics", "Link Building"],
      stats: [
        { value: "300%", label: "Organic Growth" },
        { value: "#1", label: "Target Keyword" },
        { value: "6mo", label: "To Results" },
      ],
    },
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) =>
          p.category.toLowerCase().includes(activeTab.toLowerCase()),
        );

  return (
    <PageShell className="flex flex-col gap-12">
      {/* Header */}
      <SDG title="Our Work" />
      <div className="flex flex-col gap-5">
        <h1 className="font-display font-semibold text-[53px]">
          Selected Projects
        </h1>

        <p className="font-body font-medium text-base max-w-2xl">
          Every project built with intention, craft, and relentless focus on
          results. Click any project to see the full case study.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs transition-all border border-[#535353] ${
                  isActive
                    ? "bg-[#1A1A1A] border border-[#535353] text-white"
                    : "text-gray hover:text-white"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-6">
        {filteredProjects
          .filter((project) => project.size === "large")
          .map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              caseStudy
              description={project.description}
            />
          ))}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects
            .filter((project) => project.size !== "large")
            .map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                caseStudy
                description={project.description}
              />
            ))}
        </div>
      </div>
    </PageShell>
  );
};

export default Portfolio;
