import WorkHero from "@/app/components/project/ProjectHero";
import ProjectList from "@/app/components/project/ProjectList";
import ProjectCTA from "@/app/components/project/ProjectCTA";

export const metadata = {
  title: "Our Work",
  description: "From MVPs to enterprise platforms — everything we've shipped.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <WorkHero />
        <ProjectList />
        <ProjectCTA />
      </div>
    </main>
  );
}