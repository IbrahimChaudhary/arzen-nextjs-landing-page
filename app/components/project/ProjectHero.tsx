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

      <h1 className="font-sans text-5xl font-extrabold leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl md:text-7xl">
        Every project tells a story.
      </h1>

      <p className="mt-5 text-base text-[#9a9a9a] md:text-lg">
        From MVPs to enterprise platforms — here&apos;s everything we&apos;ve
        shipped.
      </p>
    </header>
  );
}