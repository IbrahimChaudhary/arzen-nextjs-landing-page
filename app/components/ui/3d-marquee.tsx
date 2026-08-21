"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ThreeDMarqueeProps {
  images: React.ReactNode[];
  className?: string;
}

const GridLineHorizontal = ({
  className,
  offset = "20px",
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      className={`pointer-events-none absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/15 ${className ?? ""}`}
      style={{ marginTop: offset }}
    />
  );
};

const GridLineVertical = ({
  className,
  offset = "80px",
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      className={`pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/15 ${className ?? ""}`}
      style={{ marginLeft: offset }}
    />
  );
};

export const ThreeDMarquee = ({ images, className }: ThreeDMarqueeProps) => {
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <div
  className={`mx-auto block w-full h-[600px] overflow-hidden rounded-2xl max-sm:h-[500px] ${className ?? ""}`}
  style={{ perspective: "1200px" }}
>
      <div className="flex size-full items-center justify-center">
        <div className="relative size-[1720px] shrink-0 scale-[0.4] sm:scale-[0.65] lg:scale-100">
          <div
            style={{
              transform: "translate(-50%, -50%) rotateX(55deg) rotateZ(-45deg)",
              transformStyle: "preserve-3d",
            }}
            className="absolute left-1/2 top-1/2 grid w-[1600px] grid-cols-4 gap-8"
          >
        {chunks.map((subarray, colIndex) => (
          <motion.div
            animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
            transition={{
              duration: colIndex % 2 === 0 ? 10 : 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            key={colIndex + "marquee"}
            className="flex flex-col items-start gap-8"
          >
            <GridLineVertical className="-left-4" offset="80px" />
            {subarray.map((item, imageIndex) => (
              <div
                className="relative aspect-[970/700] w-full overflow-hidden rounded-lg ring-1 ring-white/10"
                key={imageIndex}
              >
               
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="h-full w-full"
                >
                  {item}
                </motion.div>
              </div>
            ))}
          </motion.div>
        ))}
          </div>
        </div>
      </div>
    </div>
  );
};