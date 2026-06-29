import Skeleton, { SkeletonText } from "@/app/components/ui/Skeleton";

/** Contact page loading silhouette: hero + info panel and form. */
export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      {/* Hero */}
      <Skeleton className="h-4 w-28 rounded-full" />
      <Skeleton className="mt-6 h-14 w-9/12 md:h-20" />
      <SkeletonText className="mt-8 max-w-xl" lines={2} />

      {/* Info (left) + Form (right) */}
      <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.6fr] lg:gap-8">
        {/* Info panel */}
        <div className="rounded-2xl border border-white/10 p-7 flex flex-col gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton className="h-11 w-11 rounded-xl shrink-0" />
              <div className="flex-1 flex flex-col gap-2">
                <Skeleton className="h-3.5 w-24" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-white/10 p-7 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3.5 w-20" />
              <Skeleton className="h-12 w-full rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3.5 w-20" />
              <Skeleton className="h-12 w-full rounded-md" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3.5 w-24" />
            <Skeleton className="h-12 w-full rounded-md" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3.5 w-28" />
            <Skeleton className="h-36 w-full rounded-md" />
          </div>
          <Skeleton className="h-12 w-40 rounded-md" />
        </div>
      </div>
    </div>
  );
}
