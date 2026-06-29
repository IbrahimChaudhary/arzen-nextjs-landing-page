import Skeleton from "./Skeleton";

/**
 * Loading silhouette for the centered ComingSoon layout used by the
 * blog, careers, privacy-policy and terms routes.
 */
export default function ComingSoonSkeleton() {
  return (
    <div className="min-h-[80vh] bg-[#0D0D0D] flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center gap-5 max-w-md w-full">
        <Skeleton className="h-3 w-28 rounded-full" />
        <Skeleton className="h-10 w-56 md:h-12 md:w-64" />
        <Skeleton className="h-3.5 w-full max-w-xs" />
        <Skeleton className="h-3.5 w-2/3" />
        <Skeleton className="mt-2 h-10 w-36 rounded-md" />
      </div>
    </div>
  );
}
