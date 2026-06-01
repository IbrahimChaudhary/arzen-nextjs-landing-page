import SDG from "./ui/SDG";
import FadeIn from "@/app/components/aminations/FadeIn";

const PILL_LABELS = ["Get Started", "Innovation", "Collaboration", "Adaptability", "Efficiency"];
const AVATARS = ["AK", "MR", "GH"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full text-white flex flex-col pt-14"
      style={{
        backgroundImage: "url('/CTA.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-glow"></div>
      <div className="flex-1 flex flex-col justify-center px-6 py-16 md:px-[76px] md:py-20 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-6">

          {/* ── Left ── */}
          <div className="flex flex-col max-w-full md:max-w-[520px]">
            <SDG />
            <div className="h-6 md:h-8" />

            <FadeIn delay={0.1} direction="up">
              <h1 className="text-[clamp(52px,10vw,125px)] leading-[1.0] font-archivo-black tracking-tight mb-5">
                <span className="text-white">We Speak Code. We </span>
                <span className="text-btn-gradient">Deliver Growth.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <p className="text-sm text-white/65 leading-relaxed max-w-[360px] mb-8">
                Arzen Inc is a software house crafting digital products, brands and
                experiences that drive real business impact.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <button className="btn-primary px-5 py-2.5 bg-btn-gradient rounded-full text-black text-sm font-semibold">
                  Start a Project
                </button>
                <button className="px-5 py-2.5 rounded-full border border-white/25 text-white/80 text-sm font-medium hover:border-white/60 hover:text-white transition-all duration-200">
                  View Our Work
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {AVATARS.map((initials, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[9px] font-semibold text-black ring-2 ring-black"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/50">
                  Trusted by <span className="text-white font-semibold">50+ Clients</span> around the world
                </p>
              </div>
            </FadeIn>
          </div>

          {/* ── Right: pill buttons (desktop only) ── */}
          <div className="hidden md:flex flex-col justify-end gap-3 pb-1">
            {PILL_LABELS.map((label, i) => (
              <FadeIn key={label} delay={0.1 + i * 0.07} direction="left">
                <button className="btn-primary rounded-full bg-[#1E181C] border border-white/20 px-6 py-3 text-sm text-white/70 hover:border-white/50 hover:text-white transition-all duration-200 whitespace-nowrap min-w-[150px] text-center">
                  {label}
                </button>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}