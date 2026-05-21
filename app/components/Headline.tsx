"use client";

const items = [
  "Brand Identity",
  "SEO & Marketing",
  "SaaS Platforms",
  "UI/UX Design",
  "Web Development",
  "Digital Growth",
];

const Headline = () => {
  return (
    <div className="w-full overflow-hidden bg-[#111] border-y border-white/10 py-3 select-none">
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
          will-change: transform;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-track">
        {/* Original */}
        {items.map((label, i) => (
          <div
            key={`first-${i}`}
            className="flex items-center px-6 shrink-0"
          >
            <span className="text-sm font-medium tracking-wide whitespace-nowrap text-white/80">
              {label}
            </span>
          </div>
        ))}

        {/* Duplicate */}
        {items.map((label, i) => (
          <div
            key={`second-${i}`}
            className="flex items-center px-6 shrink-0"
            aria-hidden="true"
          >
            <span className="text-sm font-medium tracking-wide whitespace-nowrap text-white/80">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Headline;