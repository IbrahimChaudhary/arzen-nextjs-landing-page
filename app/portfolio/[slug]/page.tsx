import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageShell from "@/app/components/ui/PageShell"; // Adjust the import path as needed
import { projects } from "@/app/data/projects"; // Adjust the import path to wherever projects.ts lives

// Next.js 15+ passes `params` as a Promise in the App Router.
// If you're on Next.js 14 or earlier, change the type back to `{ slug: string }`
// and remove the `await` below (params.slug will already be a plain string).
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 1. Find the matching project by slug
  const project = projects.find((p) => p.slug === slug);

  // 2. Guard against a missing project or a project with no case study content
  if (!project || !project.caseStudy) {
    notFound();
  }

  const { caseStudy } = project;

  // Check if stats exist to determine border radius and margins
  const hasStats = caseStudy.stats && caseStudy.stats.length > 0;

  return (
    <PageShell className="flex flex-col pb-24">
      <main className="max-w-4xl mx-auto w-full pt-12 px-6 md:px-0">
        
        {/* 1. Back Navigation & Header */}
        <Link
          href="/portfolio"
          className="text-[#3DDB6A] hover:underline text-[13px] font-medium mb-8 inline-flex items-center gap-2"
        >
          &larr; Back to Portfolio
        </Link>

        <h1 className="text-4xl md:text-5xl font-display text-white mb-4 tracking-tight">
          {caseStudy.title}
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mb-10 leading-relaxed">
          {caseStudy.intro}
        </p>

        {/* 2. Tags & Deliverables */}
        <div className="flex flex-col gap-4 mb-12">
          {/* Main Category Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-[11px] uppercase tracking-widest border border-[#333] bg-[##1A1A1A] text-gray-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {/* Specific Deliverable Tags */}
          {caseStudy.deliverables && caseStudy.deliverables.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {caseStudy.deliverables.map((item) => (
                <span
                  key={item}
                  className="px-4 py-1.5 rounded-full text-[11px] uppercase tracking-widest border border-[#333] bg-transparent text-gray-500"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* 3. Hero Image — Merges dynamically with Stats Grid if stats exist */}
        <div 
          className={`w-full aspect-[16/9] bg-[#111] border border-border overflow-hidden relative ${
            hasStats ? 'rounded-t-[10px] border-b-0' : 'rounded-[10px] mb-6'
          }`}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={caseStudy.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              quality={100}
              unoptimized
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-[#333] font-display text-2xl">
              Hero Image
            </div>
          )}
        </div>

        {/* 4. 3-Column Stats Grid — Pointy top corners, rounded bottom corners */}
        {hasStats && (
          <div className="grid grid-cols-1 md:grid-cols-3 border border-border rounded-b-[10px] overflow-hidden bg-[#111] divide-y md:divide-y-0 md:divide-x divide-border mb-24">
            {caseStudy.stats!.map((stat, i) => (
              <div key={i} className="p-8 text-center flex flex-col justify-center">
                <p className="text-4xl font-display text-gradient-custom mb-2">{stat.value}</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}

       {/* 5. Brand/Project Philosophy Section */}
        {caseStudy.philosophy && caseStudy.images?.philosophy ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
            <div>
              <h2 className="text-2xl font-display text-white mb-6">
                {project.category?.includes("Branding") ? "Brand Philosophy" : "Project Philosophy"}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {caseStudy.philosophy}
              </p>
            </div>

            <div className="w-full aspect-[4/5] bg-[#111] rounded-[10px] border border-border overflow-hidden relative">
              <Image
                src={caseStudy.images.philosophy}
                alt={`${caseStudy.title} — philosophy`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
                quality={100}
                unoptimized
              />
            </div>
          </div>
        ) : null}

        {/* 6 Brand Color Palette Section */}
        {caseStudy.colors && caseStudy.colors.length > 0 && caseStudy.images?.colorPalette ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-24">
            <div className="w-full aspect-[4/5] bg-[#111] rounded-[10px] border border-border overflow-hidden relative">
              <Image
                src={caseStudy.images.colorPalette}
                alt={`${caseStudy.title} — color palette`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
                quality={100}
              />
            </div>

            <div className="flex flex-col gap-8 pt-2">
              <h2 className="text-2xl font-display text-white">Brand color palette</h2>
              <div className="flex flex-col gap-6">
                {caseStudy.colors.map((color) => (
                  <div key={color.hex} className="flex items-start gap-4">
                    <span
                      className="w-8 h-8 rounded-full border border-border shrink-0 mt-0.5"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="text-white text-sm font-medium tracking-wide mb-2">
                        {color.hex} — {color.name}
                      </p>
                      {color.description && (
                        <p className="text-gray-400 text-[13px] leading-relaxed">
                          {color.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

      
       {/* 7. Showcase — Image #4: a single tall/long image */}
        {caseStudy.images?.showcase && (
          <div className="w-full bg-[#111] rounded-[10px] border border-border overflow-hidden mb-24 flex flex-col">
            <Image
              src={caseStudy.images.showcase}
              alt={`${caseStudy.title} — showcase`}
              width={1200}
              height={5000} // High base height to satisfy Next.js sizing requirements
              className="w-full h-auto" // Forces proportional scaling based on width
              sizes="(max-width: 768px) 100vw, 896px"
              quality={100}
            />
          </div>
        )}

        {/* 9. Key Features */}
        {/*caseStudy.features && caseStudy.features.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-display text-white mb-6">Key Features</h2>
            <ul className="flex flex-col gap-3">
              {caseStudy.features.map((feature) => (
                <li key={feature} className="text-gray-400 text-sm leading-relaxed flex gap-3">
                  <span className="text-[#3DDB6A]">—</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )*/}

      </main>
    </PageShell>
  );
} 