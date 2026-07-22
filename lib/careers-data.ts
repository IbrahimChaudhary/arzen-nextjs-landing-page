export type JobTagColor = "green" | "pink" | "yellow" | "blue";

export interface Job {
  slug: string;
  title: string;
  type: string; // e.g. "Full time"
  location: string; // e.g. "Remote"
  tag: string; // e.g. "DEVELOPMENT"
  tagColor: JobTagColor;
  salary: string;
  startDate: string;
  about: string[];
  responsibilities: string[];
  mustHave: string[];
  niceToHave: string[];
  department: string;
  reportsTo: string;
}

export const TAG_COLOR_CLASSES: Record<JobTagColor, string> = {
  green: "bg-green-500/15 text-green-400",
  pink: "bg-pink-500/15 text-pink-400",
  yellow: "bg-yellow-500/15 text-yellow-400",
  blue: "bg-blue-500/15 text-blue-400",
};

export const jobs: Job[] = [
  {
    slug: "senior-react-developer",
    title: "Senior React Developer",
    type: "Full time",
    location: "Remote",
    tag: "DEVELOPMENT",
    tagColor: "green",
    salary: "Depends on experience",
    startDate: "Flexible",
    department: "Engineering",
    reportsTo: "Engineering Lead",
    about: [
      "We're looking for a senior React developer to help us ship polished, production-grade interfaces for our clients.",
      "You'll work closely with design and backend to turn real requirements into fast, accessible products.",
    ],
    responsibilities: [
      "Build and maintain React/Next.js applications end to end",
      "Review pull requests and mentor junior engineers",
      "Work directly with designers to get details right",
      "Own performance and accessibility across the apps you ship",
    ],
    mustHave: [
      "4+ years building production React applications",
      "Strong TypeScript and modern CSS skills",
      "Comfort working directly with clients and stakeholders",
    ],
    niceToHave: [
      "Experience with Next.js App Router",
      "Startup or agency background",
    ],
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    type: "Full time",
    location: "Remote",
    tag: "DESIGN",
    tagColor: "pink",
    salary: "Depends on experience",
    startDate: "Flexible",
    department: "Design",
    reportsTo: "Design Lead",
    about: [
      "We're looking for a designer who obsesses over the small details as much as the big picture.",
      "You'll shape product and marketing experiences for our clients from first sketch to shipped screen.",
    ],
    responsibilities: [
      "Design end-to-end product and marketing experiences",
      "Build and maintain design systems in Figma",
      "Collaborate closely with engineering during handoff",
      "Run and synthesize lightweight user research",
    ],
    mustHave: [
      "A portfolio showing real, shipped product work",
      "Strong grasp of typography, layout, and interaction design",
      "Comfort presenting and defending design decisions",
    ],
    niceToHave: ["Front-end coding skills", "Experience with brand/identity work"],
  },
  {
    slug: "mobile-app-developer-flutter",
    title: "Mobile App Developer (Flutter)",
    type: "Full time",
    location: "Remote",
    tag: "DEVELOPMENT",
    tagColor: "green",
    salary: "Depends on experience",
    startDate: "Flexible",
    department: "Engineering",
    reportsTo: "Engineering Lead",
    about: [
      "We're looking for a Flutter developer to build cross-platform apps that feel native on every device.",
    ],
    responsibilities: [
      "Build and ship Flutter apps for iOS and Android",
      "Integrate REST/GraphQL APIs and third-party SDKs",
      "Write clean, testable, maintainable Dart code",
    ],
    mustHave: [
      "2+ years shipping production Flutter apps",
      "Experience publishing to the App Store and Play Store",
    ],
    niceToHave: ["Native iOS or Android experience", "CI/CD experience"],
  },
  {
    slug: "digital-marketing-specialist",
    title: "Digital Marketing Specialist",
    type: "Full time",
    location: "Remote",
    tag: "MARKETING",
    tagColor: "yellow",
    salary: "Depends on experience",
    startDate: "Flexible",
    department: "Marketing",
    reportsTo: "Growth Lead",
    about: [
      "We're looking for a marketer who can plan, run, and measure campaigns that actually move the needle for our clients.",
    ],
    responsibilities: [
      "Plan and run paid and organic campaigns",
      "Own reporting and turn data into next steps",
      "Work with design to produce campaign assets",
    ],
    mustHave: [
      "2+ years in a digital marketing role",
      "Comfort with analytics and reporting tools",
    ],
    niceToHave: ["Agency background", "SEO experience"],
  },
  {
    slug: "qa-engineer",
    title: "QA Engineer",
    type: "Full time",
    location: "Remote",
    tag: "DEVELOPMENT",
    tagColor: "blue",
    salary: "Depends on experience",
    startDate: "Flexible",
    department: "Engineering",
    reportsTo: "Engineering Lead",
    about: [
      "We're looking for a QA engineer to keep quality high as we ship fast for multiple clients at once.",
    ],
    responsibilities: [
      "Write and run manual and automated test plans",
      "Track and triage bugs with engineering",
      "Help build out our automated testing coverage",
    ],
    mustHave: [
      "2+ years in a QA or test engineering role",
      "Experience writing clear, reproducible bug reports",
    ],
    niceToHave: ["Experience with Playwright or Cypress", "Basic scripting ability"],
  },
];

export const generalRole: Job = {
  slug: "general",
  title: "Open Role",
  type: "Open Role",
  location: "Remote",
  tag: "GENERAL",
  tagColor: "green",
  salary: "Depends on role",
  startDate: "Flexible",
  department: "General",
  reportsTo: "Hiring Team",
  about: [
    "Don't see a role that matches exactly? We're always interested in meeting talented people who care about great work.",
    "Tell us about yourself and where you think you'd fit — we'll reach out if there's a match, now or down the line.",
  ],
  responsibilities: [
    "Varies by role and team",
    "We'll match you to the closest opening",
    "Or keep your profile on file for future roles",
  ],
  mustHave: [
    "A portfolio or work history you're proud of",
    "Clear communication skills",
    "A genuine interest in Arzen's work",
  ],
  niceToHave: [
    "Experience in design, development, marketing or QA",
    "Startup or agency background",
  ],
};

export function getJobBySlug(slug: string): Job | undefined {
  if (slug === "general") return generalRole;
  return jobs.find((job) => job.slug === slug);
}