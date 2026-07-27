import { client } from "@/sanity/lib/client"; // Adjust path if needed
import PortfolioClient from "./PortfolioClient";
import { SanityProject } from "./PortfolioClient";

export default async function PortfolioPage() {
  // 1. Fetch exactly the fields the Portfolio card needs
  const query = `*[_type == "caseStudy"]{
    title,
    "slug": slug.current,
    intro,
    status,
    category,
    description,
    tags,
    "image": heroImage.asset->url
  }`;

  const projects: SanityProject[] = await client.fetch(query,{},{ next: { tags: ['caseStudy'] } });

  // 2. Pass the fetched data to your interactive Client Component
  return <PortfolioClient initialProjects={projects} />;
}