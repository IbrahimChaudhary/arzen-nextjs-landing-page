import Skeleton from "@/app/components/ui/Skeleton";

/** Portfolio page loading silhouette: hero, filter tabs, project card grid. */
export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      {/* Hero */}
      <Skeleton className="h-4 w-28 rounded-full" />
      <Skeleton className="mt-6 h-14 w-9/12 md:h-20" />

      {/* Filter tabs */}
      <div className="mt-10 flex flex-wrap gap-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-24 rounded-full" />
        ))}
      </div>

      {/* Card grid */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton
            key={i}
            className={`w-full rounded-2xl ${i % 3 === 0 ? "h-80" : "h-64"}`}
          />
        ))}
      </div>
    </div>
  );
}
