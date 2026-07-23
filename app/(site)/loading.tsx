import Skeleton from "@/app/components/ui/Skeleton";

/** Home page loading silhouette: hero + stacked content sections. */
export default function Loading() {
  return (
    <div className="bg-[#0A0A0A]">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <Skeleton className="h-4 w-40 rounded-full" />
        <div className="mt-6 flex flex-col gap-4">
          <Skeleton className="h-12 w-11/12 md:h-16" />
          <Skeleton className="h-12 w-3/4 md:h-16" />
        </div>
        <div className="mt-8 flex flex-col gap-3 max-w-xl">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="mt-10 flex gap-4">
          <Skeleton className="h-12 w-40 rounded-md" />
          <Skeleton className="h-12 w-40 rounded-md" />
        </div>
      </section>

      {/* Headline band */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <Skeleton className="h-8 w-full max-w-3xl mx-auto" />
        <Skeleton className="mt-4 h-8 w-2/3 max-w-xl mx-auto" />
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <Skeleton className="h-7 w-48" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 p-6 flex flex-col gap-4"
            >
              <Skeleton className="h-12 w-12 rounded-xl" />
              <Skeleton className="h-5 w-2/3" />
              <Skeleton className="h-3.5 w-full" />
              <Skeleton className="h-3.5 w-4/5" />
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-3.5 w-20" />
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <Skeleton className="h-7 w-56" />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-64 w-full rounded-2xl" />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <Skeleton className="h-9 w-2/3 max-w-md" />
        <Skeleton className="mt-4 h-4 w-full max-w-lg" />
        <Skeleton className="mt-8 h-12 w-44 rounded-md" />
      </section>
    </div>
  );
}
