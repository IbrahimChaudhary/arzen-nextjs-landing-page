import Skeleton, { SkeletonText } from "@/app/components/ui/Skeleton";

/** Projects page loading silhouette: hero, project rows, CTA. */
export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      {/* Hero */}
      <Skeleton className="h-4 w-28 rounded-full" />
      <Skeleton className="mt-6 h-14 w-10/12 md:h-20" />
      <SkeletonText className="mt-8 max-w-2xl" lines={2} />

      {/* Project rows */}
      <div className="mt-16 flex flex-col divide-y divide-white/10">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex flex-col gap-3 md:w-2/3">
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-3.5 w-3/4" />
              <div className="flex gap-2">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-24 rounded-full" />
              </div>
            </div>
            <Skeleton className="h-9 w-28 rounded-full" />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 rounded-3xl border border-white/10 p-10 flex flex-col items-center gap-5">
        <Skeleton className="h-9 w-2/3 max-w-md" />
        <Skeleton className="h-4 w-full max-w-lg" />
        <Skeleton className="mt-2 h-12 w-44 rounded-md" />
      </div>
    </div>
  );
}
