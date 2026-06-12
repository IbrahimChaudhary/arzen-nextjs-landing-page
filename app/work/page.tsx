import WorkHero from "@/app/components/work/WorkHero";
import WorkGrid from "@/app/components/work/WorkGrid";
import ProcessSection from "@/app/components/work/ProcessSection";
import CTASection from "@/app/components/work/Cta";

export const metadata = {
  title: "Work — Arzen Inc",
  description:
    "End-to-end digital solutions: web development, UI/UX design, digital growth, and brand identity.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <WorkHero />
        <WorkGrid />
        <ProcessSection />
        <CTASection />
      </div>
    </main>
  );
}
