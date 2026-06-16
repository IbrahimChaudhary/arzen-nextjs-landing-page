import ProjectsBadge from "./ProjectBadge";

/**
 * Page hero: eyebrow badge, display heading, and supporting subline.
 */
export default function ProjectHero() {
  return (
    <header className="mb-12">
      <div className="mb-8">
        <ProjectsBadge />
      </div>

      <h1 className="font-display text-[53px] font-normal leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl">
        Every project tells a story.
      </h1>

      <p className="mt-5 text-text-white text-base">
        From MVPs to enterprise platforms — here&apos;s everything we&apos;ve
        shipped.
      </p>
    </header>
  );
}