import AboutHero from "@/app/components/about/AboutHero";
import OurStory from "@/app/components/about/OurStory";
import TeamSection from "@/app/components/about/TeamSection";
import ValuesSection from "@/app/components/about/ValuesSection";
import PageShell from "@/app/components/ui/PageShell";
import { client } from "@/sanity/lib/client";

export const metadata = {
  title: "About — Arzen Inc",
  description:
    "We build digital products that drive real growth. Meet the team and values behind Arzen Inc.",
};

const aboutPageQuery = `*[_type == "aboutPage" && isActive == true][0]{
  pageTitle,
  heroTitle,
  heroDescription,
  heroPrimaryCtaLabel,
  heroPrimaryCtaHref,
  heroSecondaryCtaLabel,
  heroSecondaryCtaHref,
  storyParagraphs,
  stats[] {
    value,
    label
  },
  team[] {
    name,
    role,
    bio,
    initials,
    accent
  },
  values[] {
    title,
    description
  }
}`;

export default async function AboutPage() {
  const aboutPage = await client.fetch(aboutPageQuery, {}, { next: { revalidate: 60 } });

  return (
    <PageShell>
      <AboutHero
        title={aboutPage?.heroTitle}
        description={aboutPage?.heroDescription}
        primaryCtaLabel={aboutPage?.heroPrimaryCtaLabel}
        primaryCtaHref={aboutPage?.heroPrimaryCtaHref}
        secondaryCtaLabel={aboutPage?.heroSecondaryCtaLabel}
        secondaryCtaHref={aboutPage?.heroSecondaryCtaHref}
      />
      <OurStory paragraphs={aboutPage?.storyParagraphs} stats={aboutPage?.stats} />
      <TeamSection team={aboutPage?.team} />
      <ValuesSection values={aboutPage?.values} />
    </PageShell>
  );
}
