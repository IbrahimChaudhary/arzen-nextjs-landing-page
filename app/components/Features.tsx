"use client";

import { FaPencilAlt, FaCode } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { ThreeDMarquee } from "./ui/3d-marquee";
import SDG from "./ui/SDG";

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

type Service = (typeof SERVICES)[number];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex h-full w-full flex-col gap-4 rounded-xl border border-white/10 bg-[#141414] p-6">
      <div className="flex items-start justify-between">
        <div className="flex h-6 w-6 items-center justify-center rounded border border-border text-white/60">
          {service.icon}
        </div>
        <span className="text-xs text-white/30">{service.num}</span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-display text-[16px]">{service.title}</p>
        <p className="text-xs leading-relaxed text-white/50">{service.desc}</p>
      </div>
    </div>
  );
}

function HighlightCard() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border border-green-border/50 bg-gradient-to-br from-[#0E1911] to-[#141414] p-6 text-center">
      <SDG title="Our Services" className="border-none" />
      <h3 className="font-display text-xl leading-tight tracking-[-0.04em] text-white">
        End-to-end
        <br />
        <span className="text-btn-gradient">Digital Solutions</span>
      </h3>
      <p className="text-xs leading-relaxed text-white/50">
        We help startups and businesses build, scale and grow with modern
        technology and creative solutions.
      </p>
    </div>
  );
}

const CARDS = [
  <ServiceCard key="s1a" service={SERVICES[0]} />,
  <ServiceCard key="s2a" service={SERVICES[1]} />,
  <ServiceCard key="s3a" service={SERVICES[2]} />,
  <ServiceCard key="s4a" service={SERVICES[3]} />,
  <HighlightCard key="highlight" />,
  <ServiceCard key="s1b" service={SERVICES[0]} />,
  <ServiceCard key="s2b" service={SERVICES[1]} />,
  <ServiceCard key="s3b" service={SERVICES[2]} />,
  <ServiceCard key="s4b" service={SERVICES[3]} />,
  <ServiceCard key="s1c" service={SERVICES[0]} />,
  <ServiceCard key="s2c" service={SERVICES[1]} />,
  <ServiceCard key="s3c" service={SERVICES[2]} />,
];

export default function Features() {
  return (
   
      <ThreeDMarquee
        images={CARDS}
        className="border w-full  border-white/10"
      />
    
  );
}