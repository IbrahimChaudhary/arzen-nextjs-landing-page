interface SkeletonProps {
  /** Tailwind sizing / radius overrides, e.g. "h-8 w-40 rounded-full". */
  className?: string;
}

/**
 * Base shimmer block. Compose with Tailwind sizing classes to build the
 * loading silhouette of any piece of UI. The shimmer + reduced-motion
 * handling lives in `.skeleton` (see globals.css).
 */
export default function Skeleton({ className = "" }: SkeletonProps) {
  return <div aria-hidden="true" className={`skeleton ${className}`} />;
}

interface SkeletonTextProps {
  /** Number of lines to render. */
  lines?: number;
  className?: string;
  /** Tailwind class applied to the last (usually shorter) line. */
  lastLineClassName?: string;
}

/** A stack of text-line placeholders with a shorter trailing line. */
export function SkeletonText({
  lines = 3,
  className = "",
  lastLineClassName = "w-2/3",
}: SkeletonTextProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={`h-4 ${i === lines - 1 ? lastLineClassName : "w-full"}`}
        />
      ))}
    </div>
  );
}
