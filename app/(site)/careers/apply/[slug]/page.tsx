import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { jobsQuery, jobBySlugQuery } from "@/sanity/lib/queries";
import { generalRole, type Job } from "@/app/lib/careers-data";
import JobDetailContent from "../_components/JobDetailContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getJob(slug: string): Promise<Job | undefined> {
  if (slug === "general") return generalRole;
  return client.fetch<Job | null>(jobBySlugQuery, { slug }).then((job) => job ?? undefined);
}

export async function generateStaticParams() {
  const jobs = await client.fetch<Job[]>(jobsQuery);
  return [...jobs.map((job) => ({ slug: job.slug })), { slug: "general" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJob(slug);

  if (!job) return { title: "Apply | Arzen Inc." };

  return {
    title: `Apply — ${job.title} | Arzen Inc.`,
    description: `Apply for the ${job.title} role at Arzen Inc.`,
  };
}

export default async function ApplyPage({ params }: PageProps) {
  const { slug } = await params;
  const job = await getJob(slug);

  if (!job) notFound();

  return <JobDetailContent job={job} />;
}