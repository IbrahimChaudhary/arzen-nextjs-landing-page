const GRADIENT_TEXT =
  "bg-gradient-to-r from-[#5fbf5a] via-[#a9d17a] to-[#e89bb0] bg-clip-text text-transparent";

interface StoryStatsProps {
  stats?: Array<{ value: string; label: string }>;
}

/**
 * 2×2 statistics panel with gradient numbers, shown alongside the story copy.
 */
export default function StoryStats({ stats = [] }: StoryStatsProps) {
  const displayStats = stats.length > 0 ? stats : [{ value: "120+", label: "Projects Delivered" }];

  return (
    <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#111111]">
      {displayStats.map((stat, i) => {
        const isLeftCol = i % 2 === 0;
        const isTopRow = i < 2;
        return (
          <div
            key={`${stat.label}-${i}`}
            className={[
              "flex flex-col items-center justify-center px-6 py-14 text-center",
              isLeftCol ? "border-r border-[#2a2a2a]" : "",
              isTopRow ? "border-b border-[#2a2a2a]" : "",
            ].join(" ")}
          >
            <span
              className={`font-sans text-4xl font-extrabold leading-none tracking-[-0.02em] md:text-5xl ${GRADIENT_TEXT}`}
            >
              {stat.value}
            </span>
            <span className="mt-3 text-sm text-[#b4b4b4]">{stat.label}</span>
          </div>
        );
      })}
    </div>
  );
}
