import type { Metadata } from "next";
import ComingSoon from "@/app/components/CommingSoon";

export const metadata: Metadata = {
  title: "Blog | Arzen Inc.",
  description:
    "Insights on web development, design, and digital growth from the Arzen Inc. team.",
};

export default function BlogPage() {
  return (
    <ComingSoon
      title="Blog"
      description="We're writing about development, design, and growth. First posts are coming soon."
    />
  );
}
