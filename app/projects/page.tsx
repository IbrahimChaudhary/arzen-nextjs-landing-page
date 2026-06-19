import WorkHero from "@/app/components/project/ProjectHero";
import ProjectList from "@/app/components/project/ProjectList";
import ProjectCTA from "@/app/components/project/ProjectCTA";
import PageShell from "@/app/components/ui/PageShell";

export const metadata = {
  title: "Our Work",
  description: "From MVPs to enterprise platforms — everything we've shipped.",
};

export default function WorkPage() {
  return (
    <PageShell>
      <WorkHero />
      <ProjectList />
      <ProjectCTA />
    </PageShell>
  );
}