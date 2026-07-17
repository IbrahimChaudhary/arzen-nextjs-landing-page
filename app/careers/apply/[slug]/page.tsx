import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { jobs, getJobBySlug } from "@/lib/careers-data";
import JobDetailContent from "../_components/JobDetailContent";

// 1. Type params as a Promise
interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [...jobs.map((job) => ({ slug: job.slug })), { slug: "general" }];
}

// 2. Make the function async and await params
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const job = getJobBySlug(resolvedParams.slug);
  
  if (!job) return { title: "Apply | Arzen Inc." };
  
  return {
    title: `Apply — ${job.title} | Arzen Inc.`,
    description: `Apply for the ${job.title} role at Arzen Inc.`,
  };
}

// 3. Make the component async and await params
export default async function ApplyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const job = getJobBySlug(resolvedParams.slug);
  
  if (!job) notFound();

  return <JobDetailContent job={job} />;
}