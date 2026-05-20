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
  // Duplicate for seamless loop
  const repeated = [...items, ...items];

  return (
    <div className="w-full text-gray-text bg-[#111] border-y border-white/10 overflow-hidden py-3 select-none">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-track">
        {repeated.map((label, i) => (
          <span key={i} className="flex items-center gap-4 px-4">
            <span className="text-sm font-medium text-white/80 whitespace-nowrap tracking-wide">
              {label}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#6abf3f] flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Headline;