"use client";

import Link from "next/link";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export interface FeaturedProject {
  title: string;
  slug: string;
  status: "Live" | "Delivered" | "Ongoing";
  category?: string[];
  description?: string;
  tags?: string[];
  image?: string;
}

export default function Project3DCard({ project }: { project: FeaturedProject }) {
  return (
    <CardContainer className="w-full h-full" containerClassName="h-full">
      <CardBody className="bg-[#111] relative group/card border border-white/10 hover:border-white/25 rounded-[12px] w-full h-full overflow-hidden transition-colors duration-300">
        <CardItem
          translateZ="45"
          className="relative w-full h-[200px] overflow-hidden"
        >
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover/card:scale-105"
              unoptimized
            />
          )}
        </CardItem>

        <div className="p-5 flex flex-col gap-2">
          <CardItem
            translateZ="30"
            as="p"
            className="font-body text-[12px] tracking-wide text-white/35"
          >
            {project.category?.join(" • ")}
          </CardItem>

          <CardItem
            translateZ="60"
            as="h3"
            className="text-[14px] font-display tracking-[-0.02em] text-white"
          >
            {project.title}
          </CardItem>

          <CardItem
            translateZ="80"
            as={Link}
            href={`/portfolio/${project.slug}`}
            className="w-fit text-[#3DDB6A] text-[12px] underline hover:text-[#28b351] transition-colors"
          >
            View Case Study
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}