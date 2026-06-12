export type ProjectStatus = "Live" | "Delivered";

export interface Project {
  title: string;
  stack: string[];
  status: ProjectStatus;
}

/**
 * Project list shown on /work.
 * Row numbers (01, 02, …) are derived from array order in <ProjectList>,
 * so just reorder or add entries here — numbering stays correct.
 */
export const projects: Project[] = [
  {
    title: "Kanba — Project Management SaaS",
    stack: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    status: "Live",
  },
  {
    title: "Ideaa — AI Idea Tool Landing Page",
    stack: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    status: "Live",
  },
  {
    title: "Circle App Dashboard",
    stack: ["Vue.js", "D3.js", "REST API"],
    status: "Live",
  },
  {
    title: "Nexus Brand Identity System",
    stack: ["Figma", "Adobe Illustrator", "Style Guide"],
    status: "Delivered",
  },
  {
    title: "GrowthOps SEO Strategy",
    stack: ["Technical SEO", "Content", "Analytics"],
    status: "Live",
  },
  {
    title: "PulseHR — HR Management Platform",
    stack: ["Next.js", "Prisma", "Stripe", "AWS"],
    status: "Live",
  },
  {
    title: "Vanta Crypto Dashboard",
    stack: ["React", "Web3.js", "Chart.js"],
    status: "Live",
  },
  {
    title: "Bloom E-Commerce Platform",
    stack: ["Shopify", "Custom Theme", "Node.js"],
    status: "Live",
  },
];