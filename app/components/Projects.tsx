import SDG from "./ui/SDG";

const Projects = () => {
  return (
    <div className="bg-[#0d0d0d] text-white p-20 flex flex-col gap-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <SDG title="Our Work" />
          <h2 className="font-heading text-[53px]">Selected Projects</h2>
        </div>
        <button className="border border-white/20 rounded-full px-4 py-2 text-xs text-white/60 hover:text-white hover:border-white/50 transition-all">
          View Our Work
        </button>
      </div>

      {/* Kanba — full width */}
      <div className="rounded-2xl border border-white/10 overflow-hidden">
        <div
          className="h-44 flex items-center justify-center bg-[#0E1911]"
        >
          <span className="text-4xl font-heading">
            <span className="text-btn-gradient">kanba</span>
          </span>
        </div>
        <div className="px-5 py-4 bg-[#141414]">
          <p className="text-xs text-white/40 mb-1">Web Development · SaaS Platform</p>
          <p className="text-sm font-semibold">kanba — Project Management SaaS</p>
        </div>
      </div>

      {/* Ideaa + Circle — two columns */}
      <div className="grid grid-cols-2 gap-4">
        {/* Ideaa */}
        <div className="rounded-2xl border border-white/10 overflow-hidden">
          <div
            className="h-36 flex items-center justify-center bg-[#181736]"
          >
            <span className="text-3xl font-heading text-[#818cf8]">Ideaa.</span>
          </div>
          <div className="px-5 py-4 bg-[#141414]">
            <p className="text-xs text-white/40 mb-1">UI/UX Design · Landing Page</p>
            <p className="text-sm font-semibold">Ideaa Landing Page</p>
          </div>
        </div>

        {/* Circle */}
        <div className="rounded-2xl border border-white/10 overflow-hidden">
          <div
            className="h-36 flex items-center justify-center bg-[#250A18]"
          >
            <span className="text-3xl font-heading text-[#ec4899]">circle</span>
          </div>
          <div className="px-5 py-4 bg-[#141414]">
            <p className="text-xs text-white/40 mb-1">Web Application · Dashboard</p>
            <p className="text-sm font-semibold">Circle App Dashboard</p>
          </div>
        </div>
      </div>

      {/* CTA banner */}
      <div
        className="rounded-2xl gradient-bg border border-white/10 px-8 py-10 flex flex-col gap-4">
        <SDG title="Let's Work Together" />
        <div className="font-heading text-[40px]">
          <h3 className="">Let's Build Something</h3>
          <span className="text-btn-gradient">Powerful Together</span>
        </div>
        <p className="text-xs text-white/50 max-w-[260px] leading-relaxed">
          High-performance websites and web applications that are fast, secure and scalable. Built with modern tech stacks.
        </p>
        <button className="bg-btn-gradient text-black text-xs font-semibold px-5 py-2.5 rounded-full w-fit hover:bg-[#7ed44e] transition-all">
          Start Your Project
        </button>
      </div>
    </div>
  );
};

export default Projects;