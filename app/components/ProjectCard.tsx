"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    bg: string;
    text: string;
    size?: string;
    logo: React.ReactNode;
    category: string;
    title: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        group
        overflow-hidden
        rounded-[18px]
        border border-border
        bg-[#111]
        hover:border-white/20
        transition-all duration-300
        cursor-pointer
      "
    >
      {/* Preview */}
      <div
        className={`
          ${project.bg}
          h-[258px]
          flex items-center justify-center
          relative overflow-hidden
        `}
      >
        <span
          className={`
            ${project.text}
            font-heading
            tracking-[-0.05em]
            transition-transform duration-500
            group-hover:scale-105
            ${project.size === "large" ? "text-[74px]" : "text-[52px]"}
          `}
        >
          {project.logo}
        </span>

        {/* subtle glow */}
        <div
          className="
            absolute inset-0
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)]
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          border-t border-border
          bg-[#111]
          px-5 py-4
        "
      >
        <p className="text-[11px] tracking-wide text-white/35 mb-1">
          {project.category}
        </p>

        <h3 className="text-[15px] font-semibold tracking-[-0.02em]">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
};

export default ProjectCard;