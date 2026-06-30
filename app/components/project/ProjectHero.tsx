import SDG from "../ui/SDG";

/**
 * Page hero: eyebrow badge, display heading, and supporting subline.
 */
export default function ProjectHero() {
  return (
    <header className="mb-12">
      <div className="mb-8">
        <SDG title="All Projects" />
      </div>

      <h1 className="section-title">
        Every project tells a story.
      </h1>

      <p className="mt-5 text-text-white text-base">
        From MVPs to enterprise platforms — here&apos;s everything we&apos;ve
        shipped.
      </p>
    </header>
  );
}