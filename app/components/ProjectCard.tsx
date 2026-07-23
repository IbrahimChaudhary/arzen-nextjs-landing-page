"use client";
import { motion } from "framer-motion";
import { Project } from "@/app/data/projects";
import Link from "next/link";
import Image from "next/image"; // 1. Import Next Image

export default function ProjectCard({
  project,
  caseStudy,
  intro,
}: {
  project: Project;
  caseStudy?: boolean;
  intro?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group overflow-hidden rounded-[10px] border border-border bg-[#111] hover:border-white/20 transition-colors duration-300"
    >
      <div
        className={`${project.bg} h-[200px] md:h-[150px] flex items-center justify-center relative overflow-hidden`}
      >
        {/* 2. Swapped text logo for the Next.js Image component */}
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
        )}
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)]" />
      </div>

      <div className="border-t border-border bg-[#111] p-5">
        <p className="font-body text-[12px] text-gray tracking-wide text-white/35 mb-1">
  {project.category?.join(" • ")}
</p>
        
        <h3 className="text-[14px] font-display font-normal mb-2 tracking-[-0.02em] text-white">
          {project.title}
        </h3>
        
        {intro && (
          <p className="text-[12px] text-[#F4F4F4] tracking-[2px] mb-4 line-clamp-2">
            {intro}
          </p>
        )}
        
        {caseStudy && project.slug && (
          <Link
            href={`/portfolio/${project.slug}`}
            className="text-[#3DDB6A] inline-block text-[12px] underline hover:text-[#28b351] transition-colors"
          >
            View Case Study
          </Link>
        )}
      </div>
    </motion.div>
  );
}