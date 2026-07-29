import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { jobsQuery } from "@/sanity/lib/queries";
import { TAG_COLOR_CLASSES, type Job } from "@/app/lib/careers-data";

export default async function OpenPositions() {
  const jobs = await client.fetch<Job[]>(jobsQuery);

  return (
    <section id="open-positions" className="bg-[#0a0a0a] px-6 pb-32 pt-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <span className="text-sm font-bold text-[#4ADE80]">
          Open Positions
        </span>
        <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
          Find your next role.
        </h2>
        <p className="mt-4 text-base text-gray-400">
          {jobs.length} role{jobs.length === 1 ? "" : "s"} open right now, all fully remote. See something that fits?
        </p>

        <div className="mt-12 flex flex-col gap-4">
          {jobs.map((job) => (
            <div
              key={job.slug}
              className="group flex flex-col items-start justify-between gap-6 rounded-2xl border border-gray-800 bg-[#1A1A1A] p-6 sm:flex-row sm:items-center hover:border-[#4ADE80] transition-colors duration-300"
            >
              <div>
                <h3 className="text-xl font-bold text-white">
                  {job.title}
                </h3>
                <div className="mt-2 flex items-center gap-3 text-sm text-gray-500 tracking-wide">
                  <span>
                    {job.type} - {job.location}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] uppercase font-bold tracking-wider ${
                      TAG_COLOR_CLASSES?.[job.tagColor] || "bg-[#0B2114] text-[#4ADE80]"
                    }`}
                  >
                    {job.tag}
                  </span>
                </div>
              </div>

              <Link
                href={`/careers/apply/${job.slug}`}
                className="group/btn relative overflow-hidden inline-flex shrink-0 items-center gap-2 rounded-full bg-[#4ADE80] px-6 py-2.5 text-sm font-bold text-black transition-transform hover:scale-105"
              >
                <span className="absolute inset-0 bg-btn-gradient opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
                <span className="relative z-10 flex items-center gap-2">
                  Apply Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-gray-800 bg-gradient-to-br from-[#18261E] via-[#121212] to-[#0A0A0A] p-16 text-center">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Don&apos;t see your role?
          </h3>
          <p className="mx-auto mt-4 max-w-md text-base text-gray-400">
            Apply anyway — we&apos;re always looking for talented people who
            care about great work.
          </p>
          <Link
            href="/careers/apply/general"
            className="group/btn relative overflow-hidden mt-8 inline-flex items-center gap-2 rounded-full bg-[#4ADE80] px-8 py-3.5 text-sm font-bold text-black transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 bg-btn-gradient opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
            <span className="relative z-10 flex items-center gap-2">
              Send Open Application
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}