import FadeIn from "@/app/components/animations/FadeIn";
import CountUp from "@/app/components/animations/CountUp";

const STATS = [
  { target: 120, suffix: "+", label: "Projects Delivered" },
  { target: 60,  suffix: "+", label: "Happy Clients"      },
  { target: 5,   suffix: "+", label: "Years of Experience" },
  { target: 25,  suffix: "+", label: "Team Members"        },
];

export default function Stats() {
  return (
    <section className="bg-[#111111] px-6 md:px-16 lg:px-20 py-12 md:py-20">
      <FadeIn direction="up">
        <div className="rounded-2xl bg-[#141414] border border-white/10 overflow-hidden">
          {/* Decorative side bars visible on md+ */}
          <div className="flex">
            <div className="hidden md:block w-10 lg:w-14 shrink-0 bg-[#2F2F2F]" />

            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center justify-center gap-1 py-8 md:py-10 ${
                    // add bottom border on mobile between rows
                    i < 2 ? "border-b md:border-b-0 border-white/10" : ""
                  }`}
                >
                  <span className="font-display text-btn-gradient text-[32px] md:text-[40px] tabular-nums">
                    <CountUp target={s.target} suffix={s.suffix} />
                  </span>
                  <span className="text-xs text-white/50 text-center px-2">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="hidden md:block w-10 lg:w-14 shrink-0 bg-[#2F2F2F]" />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}