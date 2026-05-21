import SDG from "./ui/SDG";

const Hero = () => {
  const CTAButtons = [
    "Get Started",
    "Innovation",
    "Collaboration",
    "Adaptability",
    "Efficiency",
  ];

  const avatars = ["AK", "MR", "GH"];

  return (
    <div
      className="relative h-[1084px] w-full text-white p-[76px] flex flex-col"
      style={{
        backgroundImage: "url('/CTA.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Tag pill */}
      

      {/* Main content row */}
      <div className="flex justify-between">
        {/* Left: headline + description + buttons */}
        <div className="flex flex-col gap-[20px] max-w-[480px]">
          
          <SDG />
          {/* Headline */}
          <h1 className="text-[125px] leading-[1.0] font-archivo-black tracking-tight">
            <span className="text-white">We Speak Code.We </span>
            <span className="text-btn-gradient">Deliver Growth.</span>
          </h1>

          {/* Description */}
          <p className="text-sm text-white/65 leading-relaxed max-w-[360px]">
            Arzen Inc is a software house crafting digital products, brands and
            experiences that drive real business impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 bg-btn-gradient rounded-full border border-[#6abf3f] text-black text-sm font-medium hover:bg-[#6abf3f] hover:text-black transition-all duration-200">
              Start a Project
            </button>
            <button className="px-5 py-2.5 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:border-white/60 hover:text-white transition-all duration-200">
              View Our Work
            </button>
          </div>

          {/* Trust row */}
          <div className="flex items-center gap-3">
            {/* Avatar group */}
            <div className="flex -space-x-2">
              {avatars.map((initials, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[9px] font-semibold text-black"
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-xs text-white/50">
              Trust by{" "}
              <span className="text-white font-semibold">50+ Clients</span>{" "}
              around the world
            </p>
          </div>
        </div>

        {/* Right: floating pill buttons */}
        <div className="flex flex-col justify-end gap-3 pb-1">
          {CTAButtons.map((label, index) => (
            <button
              key={index}
              className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/70 hover:border-white/50 hover:text-white transition-all duration-200 whitespace-nowrap min-w-[140px] text-center"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
