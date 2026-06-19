"use client";
import { motion } from "framer-motion";
import Project from "../types/project";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({
  project,
  caseStudy,
  description,
}: {
  project: Project;
  caseStudy?: boolean;
  description?: string;
}) {
  const [preview, setPreview] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group overflow-hidden rounded-[18px] border border-border bg-[#111] hover:border-white/20 transition-colors duration-300"
      >
        <div
          className={`${project.bg} h-[200px] md:h-[258px] flex items-center justify-center relative overflow-hidden`}
        >
          <span
            className={`
              ${project.text} font-display font-normal tracking-[-0.05em]
              transition-transform duration-500 group-hover:scale-105
              ${project.size === "large" ? "md:text-[64px]" : "text-[38px] md:text-[52px]"}
            `}
          >
            {project.logo}
          </span>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)]" />
        </div>

        <div className="border-t border-border bg-[#111] p-[33px]">
          <p className="font-body text-[12px] text-gray tracking-wide text-white/35 mb-1">
            {project.category}
          </p>
          <h3 className="text-[16px] font-display font-normal mb-[20px] tracking-[-0.02em]">
            {project.title}
          </h3>
          {description && (
            <p className="text-[12px] text-[#F4F4F4] tracking-[2px] mb-[30px]">
              {description}
            </p>
          )}
          {caseStudy && (
            <button
              type="button"
              onClick={() => setPreview(true)}
              className="text-[#3DDB6A] inline-block text-[12px] underline"
            >
              View Case Study
            </button>
          )}
        </div>
      </motion.div>

      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setPreview(false)}
        >
          <div className="absolute inset-0 bg-black/80" />
          <div className="relative z-10 w-full">
            <ProjectModal
              project={project}
              onClose={() => setPreview(false)}
              onStartSimilar={() => {
                setPreview(false);
                // Placeholder: navigate or trigger contact flow
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
