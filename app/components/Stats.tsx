const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "60+", label: "Happy Clients" },
  { value: "5+", label: "Years of Experience" },
  { value: "25+", label: "Team Members" },
];

const Stats = () => {
  return (
    <div className="bg-[#111111] p-20 ">
      <div className="border border-white/10 h-[140px] rounded-2xl bg-[#141414] flex items-stretch">
        {/* Left end cap */}
        <div className="w-14 flex-shrink-0 bg-[#2F2F2F] rounded-l-2xl border-r border-white/10" />

        {/* Stats */}
        {stats.map((s, i) => (
          <div
            key={i}
            className={`flex-1 flex flex-col items-center justify-center gap-1 py-6 ${
              i !== stats.length - 1 ? "border-r border-white/10" : ""
            }`}
          >
            <span className="font-heading text-btn-gradient text-[40px]">
              {s.value}
            </span>
            <span className="text-xs text-white/50">{s.label}</span>
          </div>
        ))}

        {/* Right end cap */}
        <div className="w-14 flex-shrink-0 bg-[#2F2F2F] rounded-r-2xl border-l border-white/10" />
      </div>
    </div>
  );
};

export default Stats;
