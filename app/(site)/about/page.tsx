import AboutHero from "@/app/components/about/AboutHero";
import OurStory from "@/app/components/about/OurStory";
import TeamSection from "@/app/components/about/TeamSection";
import ValuesSection from "@/app/components/about/ValuesSection";
import PageShell from "@/app/components/ui/PageShell";

export const metadata = {
  title: "About — Arzen Inc",
  description:
    "We build digital products that drive real growth. Meet the team and values behind Arzen Inc.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutHero />
      <OurStory />
      <TeamSection />
      <ValuesSection />
    </PageShell>
  );
}
