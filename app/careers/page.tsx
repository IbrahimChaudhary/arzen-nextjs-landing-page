import type { Metadata } from "next";
import CareerHero from "./_components/CareerHero";
import WhyArzen from "./_components/WhyArzen";
import OpenPositions from "./_components/OpenPositions";

export const metadata: Metadata = {
  title: "Careers | Arzen Inc.",
  description: "Join Arzen Inc. We're building a team of designers and engineers crafting products for global clients.",
};

export default function CareersPage() {
  return (
    // Ensure the whole page has the dark background base
    <main className="bg-[#0a0a0a] min-h-screen font-sans">
      <CareerHero />
      <WhyArzen />
      <OpenPositions />
    </main>
  );
}