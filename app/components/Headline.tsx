const ITEMS = [
  "BRAND IDENTITY",
  "SEO & MARKETING",
  "SaaS PLATFORMS",
  "UI/UX DESIGN",
  "WEB DEVELOPMENT",
  "DIGITAL STRATEGY",
];

// Separator dot between items
const Dot = () => (
  <span className="mx-4 text-white/20 select-none" aria-hidden>•</span>
);

export default function Headline() {
  return (
    <div className="w-full overflow-hidden bg-[#111] border-y border-white/10 py-3 select-none">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      <div className="marquee-track">
        {[0, 1].map((copy) =>
          ITEMS.map((label, i) => (
            <div
              key={`${copy}-${i}`}
              className="flex items-center shrink-0"
              aria-hidden={copy === 1}
            >
              <span className="text-sm font-medium tracking-wide whitespace-nowrap text-white/80 px-3">
                {label}
              </span>
              <Dot />
            </div>
          ))
        )}
      </div>
    </div>
  );
}