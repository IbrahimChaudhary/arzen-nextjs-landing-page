"use client";

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
    <div className="w-[1046px] mx-auto rounded-[20px] border border-[#232323] bg-[#0a0a0a] font-mono text-white shadow-2xl">
      <div className="max-h-[calc(100vh-96px)] overflow-hidden rounded-[20px]">
        <div className="overflow-y-auto max-h-[calc(100vh-96px)]">
          <header className="border-b border-[#232323] p-[47px]">
            <span className="text-[19px] font-bold tracking-[-0.01em]">
              {project.caseStudy?.title ?? project.title}
            </span>
          </header>

          <div className="p-[47px]">
            <div className="flex items-center justify-center pb-[110px] pt-[120px]">
              <span
                className={`font-sans text-[96px] font-bold leading-none tracking-[-0.04em] ${GRADIENT_TEXT}`}
              >
                {project.logo}
              </span>
            </div>
            <div className="flex flex-col gap-[50px]">
              <div className="mb-11 flex flex-wrap gap-9">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="whitespace-nowrap bg-[#1A1A1A] rounded-full border border-border p-[14px] text-[17px] tracking-[0.12em] text-gray-text"
                  >
                    {tag}
                  </span>
                ))}
                {status && (
                  <span className="whitespace-nowrap rounded-full border border-[#3DDB6A] p-[14px] text-base tracking-[0.12em] text-[#3DDB6A]">
                    {status}
                  </span>
                )}
              </div>

              <h2 className="font-display mb-[22px] text-[23px] font-bold tracking-[-0.01em]">
                {project.title}
              </h2>
              <p className="mb-[52px] text-[21px] leading-[1.55] tracking-[0.04em] text-white">
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
                      className="whitespace-nowrap bg-[#1A1A1A] rounded-full border border-border p-[14px] text-base tracking-[0.1em] text-[#8b8b8b]"
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

            <div className="flex flex-wrap items-center gap-[35px]">
              <button
                type="button"
                onClick={onStartSimilar}
                className="rounded-full border border-white bg-white px-[21px] py-[19px] font-sans font-md text-[20px] text-black transition-opacity hover:opacity-90 active:scale-[0.98]"
              >
                Start Similar Project
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-[#2a2a2a] bg-transparent px-[21px] py-[19px] font-md text-[20px] text-white transition-colors hover:bg-[#141414] active:scale-[0.98]"
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
