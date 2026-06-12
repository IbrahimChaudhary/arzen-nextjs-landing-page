import AboutHero from "@/app/components/about/AboutHero";
import OurStory from "@/app/components/about/OurStory";
import TeamSection from "@/app/components/about/TeamSection";
import ValuesSection from "@/app/components/about/ValuesSection";

export const metadata = {
  title: "About — Arzen Inc",
  description:
    "We build digital products that drive real growth. Meet the team and values behind Arzen Inc.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <AboutHero />
        <OurStory />
        <TeamSection />
        <ValuesSection />
      </div>
    </main>
  );
}
