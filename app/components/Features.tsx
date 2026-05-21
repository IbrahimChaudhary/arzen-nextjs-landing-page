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
    <div className="bg-[#0d0d0d] text-white py-[104px] px-[200px] flex flex-col gap-[38px]">
      {/* Top */}
        <SDG />
        <div className="flex items-end justify-between gap-">
          <h2 className="font-archivo-black text-[53px] leading-tight max-w-[500px]">
            End-to-end
            <br />
            Digital Solutions
          </h2>
          <p className="text-sm text-white max-w-[370px] leading-relaxed">
            We help startups and businesses build, scale and grow with modern
            technology and creative solutions.
          </p>
        </div>

      {/* Cards */}
      <div className="grid grid-cols-4 border border-border divide-x divide-white/10 rounded-xl overflow-hidden">
        {services.map((s, idx) => (
          <div
            key={s.num}
            className="p-5 flex flex-col gap-4 bg-[#141414]"
          >
            <div className="flex items-start justify-between">
              <div className="w-6 h-6 border border-border rounded" />
              <span className="text-xs text-white/30">{s.num}</span>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-archivo-black text-[16px]">{s.title}</p>
              <p className="text-xs text-white/50 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
