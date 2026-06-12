export default interface Project {
  bg: string;
  text: string;
  description?: string;
  size?: "large" | "small";
  logo: string;
  category: string;
  title: string;
  tags?: string[];
  status?: string;
  caseStudy?: {
    title?: string;
    intro?: string;
    details?: string;
    features?: string[];
    tech?: string[];
    stats?: { value: string; label: string }[];
  };
}