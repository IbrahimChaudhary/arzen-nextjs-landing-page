export interface ProcessStep {
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: "Discovery",
    description:
      "We learn your business, goals, users and constraints before writing a single line of code.",
  },
  {
    title: "Design",
    description:
      "Wireframes, prototypes, and visual design. Reviewed and refined with your feedback.",
  },
  {
    title: "Build",
    description:
      "Clean, tested, documented code. Weekly updates and transparent progress tracking.",
  },
  {
    title: "Launch & Grow",
    description:
      "Deployment, monitoring, and ongoing support. We don't disappear after launch.",
  },
];