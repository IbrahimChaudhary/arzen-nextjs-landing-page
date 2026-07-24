import { client } from "@/sanity/lib/client"; // adjust to your existing client path

export interface Service {
  _id: string;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  order: number;
}

const SERVICES_QUERY = `*[_type == "service" && active == true] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  description,
  tags,
  order
}`;

export async function getServices(): Promise<Service[]> {
  return client.fetch<Service[]>(SERVICES_QUERY, {}, { next: { revalidate: 60 } });
}

// export interface Service {
//   title: string;
//   description: string;
//   tags: string[];
// }

// export const services: Service[] = [
//   {
//     title: "Web Development",
//     description:
//       "High-performance websites and web applications that are fast, secure, and scalable. Built with modern tech stacks.",
//     tags: ["React", "Next.js", "Node.js", "TypeScript"],
//   },
//   {
//     title: "UI/UX Design",
//     description:
//       "User-centred interfaces that convert visitors into customers. Figma-to-code with pixel-perfect precision. Design systems that scale.",
//     tags: ["Figma", "Design System", "Prototyping"],
//   },
//   {
//     title: "Digital Growth",
//     description:
//       "SEO, performance, and data-driven strategies that compound over time and grow your business.",
//     tags: ["SEO", "Analytics", "Content Strategy", "Performance"],
//   },
//   {
//     title: "Brand Identity",
//     description:
//       "Visual identities that communicate your values and make your brand instantly recognisable. Logo, typography, color, full guidelines.",
//     tags: ["Logo Design", "Typography", "Brand Guidelines"],
//   },
// ];

