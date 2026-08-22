"use client";

import Image from "next/image";
import { useState } from "react";
import { DraggableCardBody, DraggableCardContainer } from "../ui/draggable-card";

const CARDS = [
  { title: "AuroTry", image: "/autotry.png", className: "absolute top-4 left-[2%] rotate-[-5deg] z-10" },
  { title: "Blake/Ui", image: "/blakeui.png", className: "absolute top-32 left-[-4%] rotate-[-7deg] z-20" },
  { title: "Cost Savvy", image: "/costsavy.png", className: "absolute top-0 left-[38%] rotate-[8deg] z-0" },
  { title: "D360", image: "/d360.png", className: "absolute top-40 left-[34%] rotate-[10deg] z-30" },
  { title: "Flyfim", image: "/flyfim.png", className: "absolute top-8 right-[-2%] rotate-[2deg] z-10" },
  { title: "Meter", image: "/meter.png", className: "absolute top-44 right-[14%] rotate-[-7deg] z-20" },
];

export default function HeroDraggableCards() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <DraggableCardContainer className="relative h-[440px] w-[280px] shrink-0 sm:w-[340px]">
      {CARDS.map((card) => {
        const isHovered = hovered === card.title;
        return (
          <DraggableCardBody key={card.title} className={card.className}>
            <div
              onMouseEnter={() => setHovered(card.title)}
              onMouseLeave={() => setHovered(null)}
              className={`flex flex-col items-center gap-2 rounded-xl border p-2.5 backdrop-blur-md transition-all duration-300 ${
                isHovered
                  ? "border-[#6abf3f]/70 shadow-[0_0_20px_rgba(106,191,63,0.4),0_0_60px_rgba(106,191,63,0.2)]"
                  : "border-white/15 bg-[#1a1a1a]/90 shadow-[0_8px_30px_rgba(0,0,0,0.55)]"
              }`}
            >
              <div className="relative h-28 w-40 overflow-hidden rounded-lg sm:h-32 sm:w-44">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 160px, 176px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xs font-medium text-white/85 sm:text-sm">{card.title}</h3>
            </div>
          </DraggableCardBody>
        );
      })}
    </DraggableCardContainer>
  );
}