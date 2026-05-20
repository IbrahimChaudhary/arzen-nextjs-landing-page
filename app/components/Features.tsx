import SDG from "./ui/SDG";

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "High-performance websites and web applications that are fast, secure and scalable. Built with modern tech stacks.",
  },
  {
    num: "02",
    title: "Web UI/UX Design",
    desc: "High-performance websites and web applications that are fast, secure and scalable. Built with modern tech stacks.",
  },
  {
    num: "03",
    title: "Branding",
    desc: "High-performance websites and web applications that are fast, secure and scalable. Built with modern tech stacks.",
  },
  {
    num: "04",
    title: "Digital Growth",
    desc: "High-performance websites and web applications that are fast, secure and scalable. Built with modern tech stacks.",
  },
];

const Services = () => {
  return (
    <div className="bg-[#0d0d0d] text-white p-20 flex flex-col gap-10">
      {/* Top */}
      <div>
        <SDG />
        <div className="flex items-end justify-between gap-10">
          <h2 className="font-archivo-black text-[53px] leading-tight max-w-[500px]">
            End-to-end
            <br />
            Digital Solutions
          </h2>
          <p className="text-sm text-white/50 max-w-[370px] leading-relaxed">
            We help startups and businesses build, scale and grow with modern
            technology and creative solutions.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-4">
        {services.map((s, idx) => (
          <div
            key={s.num}
            className={`border border-white/10 p-5 flex flex-col gap-4 bg-[#141414] ${idx === 0 ? "rounded-l-xl" : idx === services.length - 1 ? "rounded-r-xl" : ""}`}
          >
            <div className="flex items-start justify-between">
              <div className="w-6 h-6 border border-white/20 rounded" />
              <span className="text-xs text-white/30">{s.num}</span>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-archivo-black text-[16px]">{s.title}</p>
              <p className="text-xs text-white/50 leading-relaxed">{s.desc}</p>
            </div>
            <button className="text-xs text-[#6abf3f] text-left mt-auto">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
