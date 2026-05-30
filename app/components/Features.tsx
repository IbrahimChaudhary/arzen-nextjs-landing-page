import { FaPencilAlt, FaCode } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import SDG from "./ui/SDG";
import FadeIn from "@/app/components/aminations/FadeIn";

const SERVICES = [
  {
    num: "01",
    icon: <FaCode size={14} />,
    title: "Web Development",
    desc: "High-performance websites and web applications that are fast, secure and scalable. Built with modern tech stacks.",
  },
  {
    num: "02",
    icon: <FaPencilAlt size={14} />,
    title: "Web UI/UX Design",
    desc: "User-centred interfaces that convert visitors into customers. Figma-to-code with pixel-perfect precision.",
  },
  {
    num: "03",
    icon: <AiOutlineAntDesign size={14} />,
    title: "Branding",
    desc: "Visual identities that communicate your values and make your brand instantly recognisable.",
  },
  {
    num: "04",
    icon: <BsGraphUpArrow size={14} />,
    title: "Digital Growth",
    desc: "SEO, performance and data-driven strategies that compound over time and grow your business.",
  },
];

export default function Features() {
  return (
    <section id="services" className="bg-[#0d0d0d] text-white py-20 md:py-[104px] px-6 md:px-16 lg:px-[200px]">
      <FadeIn direction="up">
        <SDG />
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-6 mb-10 md:mb-[38px]">
          <h2 className="font-archivo-black text-[38px] md:text-[53px] leading-tight">
            End-to-end<br />Digital Solutions
          </h2>
          <p className="text-sm text-white/70 max-w-full md:max-w-[370px] leading-relaxed">
            We help startups and businesses build, scale and grow with modern
            technology and creative solutions.
          </p>
        </div>
      </FadeIn>

      {/* Cards */}
      <FadeIn direction="up" delay={0.2}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden border border-border">
          {SERVICES.map((s, idx) => (
            <div
              key={s.num}
              className={`
                p-5 flex flex-col gap-4
                bg-[#141414] hover:bg-[#0d0d0d]
                transition-colors cursor-pointer
                ${idx < SERVICES.length - 1 ? "border-b lg:border-b-0 lg:border-r border-white/10" : ""}
                ${idx === 1 ? "sm:border-b sm:border-r-0 lg:border-r border-white/10" : ""}
              `}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-center w-6 h-6 border border-border rounded text-white/60">
                  {s.icon}
                </div>
                <span className="text-xs text-white/30">{s.num}</span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-archivo-black text-[16px]">{s.title}</p>
                <p className="text-xs text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}