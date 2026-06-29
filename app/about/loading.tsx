import Skeleton, { SkeletonText } from "@/app/components/ui/Skeleton";

/** About page loading silhouette: hero, story, team grid, values. */
export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      {/* Hero */}
      <Skeleton className="h-4 w-32 rounded-full" />
      <Skeleton className="mt-6 h-14 w-11/12 md:h-20" />
      <Skeleton className="mt-3 h-14 w-2/3 md:h-20" />
      <SkeletonText className="mt-8 max-w-2xl" lines={3} />

      {/* Story + stats */}
      <div className="mt-24 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <SkeletonText lines={6} lastLineClassName="w-1/2" />
        <div className="grid grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 p-6 flex flex-col gap-3"
            >
              <Skeleton className="h-9 w-20" />
              <Skeleton className="h-3.5 w-24" />
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <Skeleton className="mt-24 h-8 w-48" />
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 p-5 flex flex-col gap-4"
          >
            <Skeleton className="h-48 w-full rounded-xl" />
            <Skeleton className="h-5 w-1/2" />
            <Skeleton className="h-3.5 w-2/3" />
          </div>
        ))}
      </div>

      {/* Values */}
      <Skeleton className="mt-24 h-8 w-56" />
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 p-6 flex flex-col gap-4"
          >
            <Skeleton className="h-10 w-10 rounded-lg" />
            <Skeleton className="h-5 w-1/2" />
            <SkeletonText lines={3} />
          </div>
        ))}
      </div>
    </div>
  );
}
