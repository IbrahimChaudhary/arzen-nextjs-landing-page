import WorkHero from "@/app/components/work/WorkHero";
import WorkGrid from "@/app/components/work/WorkGrid";
import ProcessSection from "@/app/components/work/ProcessSection";
import CTASection from "@/app/components/work/Cta";
import PageShell from "@/app/components/ui/PageShell";

export const metadata = {
  title: "Work — Arzen Inc",
  description:
    "End-to-end digital solutions: web development, UI/UX design, digital growth, and brand identity.",
};

export default function WorkPage() {
  return (
    <PageShell>
      <WorkHero />
      <WorkGrid />
      <ProcessSection />
      <CTASection />
    </PageShell>
  );
}
