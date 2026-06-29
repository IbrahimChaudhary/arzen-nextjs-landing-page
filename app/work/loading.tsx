import Skeleton, { SkeletonText } from "@/app/components/ui/Skeleton";

/** Work page loading silhouette: hero, services grid, process, CTA. */
export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      {/* Hero */}
      <Skeleton className="h-4 w-28 rounded-full" />
      <Skeleton className="mt-6 h-14 w-10/12 md:h-20" />
      <Skeleton className="mt-3 h-14 w-1/2 md:h-20" />
      <SkeletonText className="mt-8 max-w-2xl" lines={2} />

      {/* Services grid */}
      <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 p-7 flex flex-col gap-4"
          >
            <Skeleton className="h-12 w-12 rounded-xl" />
            <Skeleton className="h-6 w-1/2" />
            <SkeletonText lines={3} />
          </div>
        ))}
      </div>

      {/* Process */}
      <Skeleton className="mt-24 h-8 w-52" />
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-5 w-2/3" />
            <SkeletonText lines={2} />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-24 rounded-3xl border border-white/10 p-10 flex flex-col items-center gap-5">
        <Skeleton className="h-9 w-2/3 max-w-md" />
        <Skeleton className="h-4 w-full max-w-lg" />
        <Skeleton className="mt-2 h-12 w-44 rounded-md" />
      </div>
    </div>
  );
}
