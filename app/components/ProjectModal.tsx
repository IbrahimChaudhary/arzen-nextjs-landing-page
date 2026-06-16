"use client";

import Link from "next/link";
import Project from "../types/project";

/**
 * Kanba — Project case study modal (Tailwind CSS)
 * Pixel-faithful recreation of the Figma frame (node 203-708).
 */

interface ProjectModalProps {
  project: Project;
  onClose?: () => void;
  onStartSimilar?: () => void;
}

const GRADIENT_TEXT =
  "bg-gradient-to-r from-[#3fae4a] via-[#cfd183] to-[#e89bb0] bg-clip-text text-transparent";

export default function ProjectModal({
  project,
  onClose,
  onStartSimilar,
}: ProjectModalProps) {
  const tags =
    project.tags ?? project.category.split("·").map((item) => item.trim());
  const status =
    project.status ?? tags.find((tag) => tag.toLowerCase() === "live");
  const stack = project.caseStudy?.tech ?? [];
  const stats = project.caseStudy?.stats ?? [];
  const description = project.caseStudy?.intro ?? "";

  return (
    <div className="w-full max-w-[1046px] mx-auto rounded-[20px] border border-[#232323] bg-[#0a0a0a] font-mono text-white shadow-2xl">
      <div className="max-h-[calc(100vh-48px)] overflow-hidden rounded-[20px] sm:max-h-[calc(100vh-96px)]" onClick={(event) => event.stopPropagation()}>
        <div
          className="overflow-y-auto max-h-[calc(100vh-48px)] scrollbar-thin scrollbar-track-[#0a0a0a] scrollbar-thumb-[#3d3d3d] sm:max-h-[calc(100vh-96px)]"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#3d3d3d #0a0a0a" }}
        >
          <header className="border-b border-[#232323] p-6 sm:p-[47px]">
            <span className="text-[19px] font-bold tracking-[-0.01em]">
              {project.caseStudy?.title ?? project.title}
            </span>
          </header>

          <div className="p-6 sm:p-[47px]">
            <div className="flex items-center justify-center pb-20 pt-24 sm:pb-[110px] sm:pt-[120px]">
              <span
                className={`font-sans text-[70px] sm:text-[96px] font-bold leading-none tracking-[-0.04em] ${GRADIENT_TEXT}`}
              >
                {project.logo}
              </span>
            </div>
            <div className="flex flex-col gap-8 sm:gap-[50px]">
              <div className="mb-8 flex flex-wrap gap-3 sm:gap-9">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="whitespace-nowrap bg-[#1A1A1A] rounded-full border border-border px-3 py-2 text-sm tracking-[0.12em] text-gray-text"
                  >
                    {tag}
                  </span>
                ))}
                {status && (
                  <span className="whitespace-nowrap rounded-full border border-[#3DDB6A] px-3 py-2 text-sm tracking-[0.12em] text-[#3DDB6A]">
                    {status}
                  </span>
                )}
              </div>

              <h2 className="font-display mb-5 text-[22px] font-bold tracking-[-0.01em] sm:text-[23px]">
                {project.title}
              </h2>
              <p className="mb-12 text-[18px] leading-[1.6] tracking-[0.04em] text-white sm:mb-[52px] sm:text-[21px] sm:leading-[1.55]">
                {description}
              </p>
              <div>
                <div className="mb-5 text-base tracking-[0.06em] text-gray-text">
                  TECH STACK
                </div>
                <div className="mb-10 flex flex-wrap gap-[10px]">
                  {stack.map((s) => (
                    <span
                      key={s}
                      className="whitespace-nowrap bg-[#1A1A1A] rounded-full border border-border px-4 py-3 text-sm tracking-[0.1em] text-[#8b8b8b]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-11 grid grid-cols-1 overflow-hidden rounded-[18px] border border-border sm:grid-cols-3">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex bg-[#1A1A1A] flex-col items-center justify-center gap-2.5 p-[37px] ${
                    i < stats.length - 1
                      ? "border-b border-border sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >
                  <span
                    className={`font-display text-[45px] font-extrabold leading-none tracking-[-0.02em] ${GRADIENT_TEXT}`}
                  >
                    {s.value}
                  </span>
                  <span className="text-lg text-gray-text">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact">
                <button
                  type="button"
                  onClick={onStartSimilar}
                  className="rounded-full border border-white bg-white px-5 py-4 text-sm font-sans font-md text-black transition-opacity hover:opacity-90 active:scale-[0.98] sm:px-[21px] sm:py-[19px] sm:text-[20px]"
                >
                  Start Similar Project
                </button>
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-[#2a2a2a] bg-transparent px-5 py-4 text-sm font-md text-white transition-colors hover:bg-[#141414] active:scale-[0.98] sm:px-[21px] sm:py-[19px] sm:text-[20px]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
