import Link from "next/link";
import { TAG_COLOR_CLASSES, type Job } from "../../../../../lib/careers-data";
import ApplicationForm from "./ApplicationForm";

const BENEFITS = [
  "Competitive Pay",
  "Remote Work",
  "Flexible Hours",
  "Growth & Learning",
  "Great Team",
  "Real Impact",
];

export default function JobDetailContent({ job }: { job: Job }) {
  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-12 md:px-12 font-sans">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/careers"
          className="text-sm font-medium text-green-500 underline-offset-4 hover:underline mb-6 inline-block"
        >
          ← Back to Careers
        </Link>

        <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-white">
          {job.title}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Pill className="bg-blue-500/15 text-blue-400">{job.location}</Pill>
          <Pill className="bg-pink-500/15 text-pink-400">
            {job.department}
          </Pill>
          <Pill className={TAG_COLOR_CLASSES[job.tagColor]}>{job.tag}</Pill>
        </div>
        
        <p className="mt-4 text-sm text-gray-400">{job.type}</p>

        <a
  href="#apply"
  className="group/btn relative overflow-hidden mt-6 inline-flex items-center rounded-full bg-[#4ADE80] px-6 py-2.5 text-sm font-bold text-black transition-transform hover:scale-105"
>
  {/* Smooth Gradient Fade Layer utilizing your global CSS class */}
  <span className="absolute inset-0 bg-btn-gradient opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
  
  {/* Button Content lifted above the background */}
  <span className="relative z-10 flex items-center gap-2">
    Apply for this Position
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </span>
</a>

        {/* Info Bar - Updated to match general page grey bg and dividers */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 bg-[#1A1A1A] text-white rounded-xl divide-y md:divide-y-0 md:divide-x divide-gray-700 mb-16">
          <InfoCell label="Job Type" value={job.type} />
          <InfoCell label="Location" value={job.location} />
          <InfoCell label="Salary" value={job.salary} />
          <InfoCell label="Start Date" value={job.startDate} />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            <Section title="About the Role">
              <div className="space-y-4">
                {job.about.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-gray-400">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Section>

            <Section title="Responsibilities">
              <ul className="flex flex-col gap-3">
                {job.responsibilities.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </ul>
            </Section>

            <Section title="Requirements">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-300 mb-4">Must Have</h3>
                  <ul className="flex flex-col gap-3">
                    {job.mustHave.map((item) => (
                      <ListItem key={item}>{item}</ListItem>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-300 mb-4">
                    Nice to Have
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {job.niceToHave.map((item) => (
                      <ListItem key={item}>{item}</ListItem>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>

            <Section title="What We Offer">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BENEFITS.map((benefit) => (
                  <div
                    key={benefit}
                    className="bg-[#242424] text-white p-6 rounded-xl font-bold flex items-center justify-start h-20 text-sm"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Right Sidebar (Sticky Card) - Updated to #1A1A1A matching General page */}
          <div className="lg:col-span-1">
            <aside className="bg-[#1A1A1A] text-white p-8 rounded-3xl h-fit lg:sticky lg:top-16">
              <h3 className="text-2xl font-bold mb-8">
                Ready to make an impact?
              </h3>
              <div className="flex flex-col space-y-4 mb-8">
                <SidebarRow label="Type" value={job.type} />
                <SidebarRow label="Location" value={job.location} />
                <SidebarRow label="Department" value={job.department} />
                <SidebarRow label="Reports To" value={job.reportsTo} />
              </div>
              <a
  href="#apply"
  className="group/btn relative overflow-hidden block w-full rounded-full bg-[#4ADE80] py-3 font-bold text-black transition-transform hover:scale-[1.03] mb-4"
>
  {/* Smooth Gradient Fade Layer utilizing your global CSS class */}
  <span className="absolute inset-0 bg-btn-gradient opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
  
  {/* Button Content lifted above the background */}
  <span className="relative z-10 flex items-center justify-center gap-2">
    Apply for this Position
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </span>
</a>
              <p className="text-center text-xs text-gray-500">
                Takes less than 5 minutes
              </p>
            </aside>
          </div>
        </div>

        <hr className="border-gray-800 mb-16" />

        {/* Form section matching the General page structure */}
        <div id="apply" className="max-w-4xl">
          <ApplicationForm job={job} />
        </div>

      </div>
    </main>
  );
}

function Pill({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <span
      className={`rounded-full px-4 py-1 text-xs font-semibold tracking-wide ${className}`}
    >
      {children}
    </span>
  );
}

function InfoCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-6">
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <p className="font-bold text-lg">{value}</p>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-3xl font-extrabold text-gray-200 mb-6">{title}</h2>
      {children}
    </section>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-gray-400">
      <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4ADE80]" />
      {children}
    </li>
  );
}

function SidebarRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-700 pb-3">
      <dt className="text-gray-400 text-sm">{label}</dt>
      <dd className="font-semibold text-white text-sm text-right">{value}</dd>
    </div>
  );
}