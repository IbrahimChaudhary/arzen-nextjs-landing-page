"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const LIGHTS = [
  "bg-[#FEF08A]",
  "bg-[#FDE047] ",
  "bg-[#FACC15]",
  "bg-[#EAB308]",
  "bg-[#CA8A04]",
  "bg-[#A16207]",
  "bg-[#854D0E]",
  "bg-[#713F12]",
  "bg-[#422006]",
];

interface MacbookScrollProps {
  src?: string;
  showGradient?: boolean;
  title?: React.ReactNode;
  badge?: React.ReactNode;
  children?: React.ReactNode;
}

export const MacbookScroll = ({
  src,
  showGradient = true,
  title,
  badge,
  children,
}: MacbookScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.35], [25, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [0.85, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.35], [0, 150]);
  const translateX = useTransform(scrollYProgress, [0, 0.35], [0, -150]);

  const rotateXObject = useTransform(scrollYProgress, [0, 0.35], [25, 0]);
  const scaleObject = useTransform(scrollYProgress, [0, 0.35], [0.85, 1]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden bg-[#0B0B0F]">
      <div
        className="pointer-events-none absolute inset-0 h-[400px]"
        style={{ maskImage: "linear-gradient(to bottom, white, transparent)" }}
      />

      <motion.div
        style={{
          rotateX,
          scale,
          translateY,
          translateX,
          transformPerspective: 1000,
          transformStyle: "preserve-3d",
        }}
        className="relative mx-auto w-fit"
      >
        {title && (
          <div className="absolute left-1/2 top-0 z-30 -translate-x-1/2">{title}</div>
        )}
        {badge && (
          <div className="absolute left-1/2 top-6 z-40 -translate-x-1/2">{badge}</div>
        )}

        <motion.div
          style={{
            rotateX: rotateXObject,
            scale: scaleObject,
            transformPerspective: 1000,
            transformStyle: "preserve-3d",
          }}
          className="relative mx-auto mt-24 w-[90%] max-w-3xl"
        >
          <div className="relative z-20 w-full overflow-hidden rounded-2xl bg-gray-100 p-1.5 dark:bg-[#0b0b0f] sm:p-2">
            <div className="relative overflow-hidden">
              {src ? (
                <Image
                  src={src}
                  alt=""
                  width={1600}
                  height={1000}
                  className="h-auto w-full object-cover"
                  unoptimized
                />
              ) : null}
              {children}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Macbook base */}
      <div className="relative z-30 mt-8 flex flex-col items-center overflow-hidden px-4">
        <div className="flex w-full max-w-3xl flex-col items-center">
          <div className="flex h-4 w-full items-center justify-center gap-3 rounded-t-xl border-x border-t border-white/10 bg-[#151515] px-3 sm:justify-between sm:px-6">
            <div className="hidden items-center gap-1.5 sm:flex">
              {LIGHTS.map((light) => (
                <div key={light} className={`h-1.5 w-1.5 rounded-full ${light}`} />
              ))}
            </div>
            <div className="h-1 w-24 rounded-full bg-white/10" />
            <div className="flex items-center gap-1.5 sm:opacity-0">
              {LIGHTS.slice(0, 4).map((light) => (
                <div key={light} className={`h-1.5 w-1.5 rounded-full ${light}`} />
              ))}
            </div>
          </div>
          <div className="h-24 w-full rounded-b-2xl border-x border-b border-white/10 bg-gradient-to-b from-[#151515] to-[#0e0e0e]" />
        </div>
      </div>

      {showGradient && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-[#0B0B0F]" />
      )}
    </div>
  );
};