  import FloatingPills from "./animations/FloatingPills";
  import SDG from "./ui/SDG";
  import FadeIn from "@/app/components/animations/FadeIn";
  import Link from "next/link";

  const PILL_LABELS = [
    "Get Started",
    "Innovation",
    "Collaboration",
    "Adaptability",
    "Efficiency",
  ];

  const AVATARS = ["AK", "MR", "GH"];

  export default function Hero() {
    return (
      <section
        id="hero"
        className="
          relative
          min-h-dvh
          overflow-hidden
          text-white
        "
        style={{
          backgroundImage: "url('/CTA.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-glow" />

        <div
          className="
            relative z-10
            mx-auto
            flex
            min-h-[100dvh]
            max-w-7xl
            items-center
            px-4
            pt-14
            md:px-10
          "
        >
          <div
            className="
              flex
              w-full
              flex-col
              justify-center
              gap-8
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            {/* LEFT */}
            <div className="max-w-[560px]">
              <SDG />

              <div className="h-4 md:h-8" />

              <FadeIn delay={0.1} direction="up">
                <h1
                  className="
                    text-[clamp(2.5rem,8vw,5.25rem)]
                    leading-[0.95]
                    font-display
                    tracking-tight
                  "
                >
                  <span>We Speak Code. We </span>
                  <span className="text-btn-gradient">Deliver Growth.</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <p
                  className="
                    mt-4
                    max-w-md
                    text-sm
                    leading-relaxed
                    text-white/65
                  "
                >
                  Arzen Inc is a software house crafting digital products, brands
                  and experiences that drive real business impact.
                </p>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="btn-primary rounded-full bg-btn-gradient px-5 py-2.5 text-sm font-semibold text-black inline-flex items-center"
                  >
                    Start a Project
                  </Link>

                  <Link
                    href="/portfolio"
                    className="btn-primary rounded-full border border-white/25 px-5 py-2.5 text-sm text-white/80 transition hover:border-white/60 hover:text-white inline-flex items-center"
                  >
                    View Our Work
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.4} direction="up">
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {AVATARS.map((initials) => (
                      <div
                        key={initials}
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-white
                          text-[9px]
                          font-semibold
                          text-black
                          ring-2
                          ring-black
                        "
                      >
                        {initials}
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-white/50">
                    Trusted by{" "}
                    <span className="font-semibold text-white">50+ Clients</span>{" "}
                    around the world
                  </p>
                </div>
              </FadeIn>

              {/* MOBILE PILLS */}
              <div className="mt-6 flex flex-wrap gap-2 md:hidden">
                {PILL_LABELS.map((label) => (
                  <button
                    key={label}
                    className="
                      rounded-full
                      border
                      border-white/20
                      bg-[#1E181C]
                      px-4
                      py-2
                      text-xs
                      text-white/70
                    "
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* DESKTOP PILLS */}
            <div
              className="
                hidden
                shrink-0
                md:flex
                md:flex-col
                md:gap-3
              "
            >
              {PILL_LABELS.map((label, i) => (
                <FadeIn key={label} delay={0.1 + i * 0.07} direction="left">
                  <button
                    className="
                      min-w-[170px]
                      rounded-full
                      border
                      border-white/20
                      bg-[#1E181C]
                      px-6
                      py-3
                      text-center
                      text-sm
                      text-white/70
                      transition
                      hover:border-white/50
                      hover:text-white
                    "
                  >
                    {label}
                  </button>
                </FadeIn>
              ))}
              {/* <FloatingPills /> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
