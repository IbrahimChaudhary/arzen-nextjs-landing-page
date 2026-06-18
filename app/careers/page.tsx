import type { Metadata } from "next";
import ComingSoon from "@/app/components/CommingSoon";

export const metadata: Metadata = {
  title: "Careers | Arzen Inc.",
  description:
    "Join Arzen Inc. We're building a team of designers and engineers crafting products for global clients.",
};

export default function CareersPage() {
  return (
    <ComingSoon
      title="Careers"
      description="We're growing. Open roles are on the way, so check back soon or reach out if you'd like to work with us."
    />
  );
}
