const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "60+", label: "Happy Clients" },
  { value: "5+", label: "Years of Experience" },
  { value: "25+", label: "Team Members" },
];

const Stats = () => {
  return (
    <div className="bg-[#111111] p-20">
      <div className="h-[140px] rounded-2xl bg-[#141414] border border-white/10 flex overflow-hidden">
        
        {/* Left cap */}
        <div className="w-14 flex-shrink-0 bg-[#2F2F2F]" />

        {/* Stats */}
        <div className="flex flex-1 divide-x divide-white/10">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex-1 flex flex-col items-center justify-center gap-1"
            >
              <span className="font-heading text-btn-gradient text-[40px]">
                {s.value}
              </span>
              <span className="text-xs text-white/50">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Right cap */}
        <div className="w-14 flex-shrink-0 bg-[#2F2F2F]" />
      </div>
    </div>
  );
};

export default Stats;
