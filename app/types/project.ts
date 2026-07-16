export default interface Project {
  slug?: string; // <-- Added this so project.slug works perfectly!
  bg?: string;
  text?: string;
  description?: string;
  size?: "large" | "small";
  image?: string;
  category?: string;
  title: string;
  tags?: string[];
  status?: string;
  caseStudy?: {
    title?: string;
    intro?: string;
    details?: string;
    features?: string[];
    tech?: string[];
    philosophy?: string;     // <-- Added for Figma Case Studies
    deliverables?: string[]; // <-- Added for Figma Case Studies
    stats?: { value: string; label: string }[];
    colors?: {               // <-- Added for Figma Case Studies
      hex: string;
      name: string;
      description?: string;
    }[];
  };
}