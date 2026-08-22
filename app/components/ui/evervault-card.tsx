"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { MotionValue, motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// Monospace char metrics for the noise layer at text-[5px] leading-[1.3].
// Measured empirically: ~0.6em wide per glyph, 1.3em tall per line.
const NOISE_FONT_SIZE = 5;
const CHAR_WIDTH = NOISE_FONT_SIZE * 0.6; // ~3px
const LINE_HEIGHT = NOISE_FONT_SIZE * 1.3; // ~6.5px
// Extra rows/cols so reflow rounding never leaves a gap at the edges.
const BUFFER_CELLS = 4;

const charsNeededFor = (width: number, height: number) => {
  if (!width || !height) return 0;
  const cols = Math.ceil(width / CHAR_WIDTH) + BUFFER_CELLS;
  const rows = Math.ceil(height / LINE_HEIGHT) + BUFFER_CELLS;
  return cols * rows;
};

export const EvervaultCard = ({
  text,
  textImgSrc,
  className,
  textClassName,
}: {
  text?: string;
  textImgSrc?: string;
  className?: string;
  textClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Start empty so server and first client render match exactly (no hydration
  // mismatch); fill in the real, correctly-sized noise after mount.
  const [noise, setNoise] = useState<string>("");
  const [charCount, setCharCount] = useState(0);

  // Tracks whether a real user hover/move is currently driving the glow, so
  // the idle animation can pause and hand control back cleanly.
  const isHovering = useRef(false);
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleAngle = useRef(0);
  const rafId = useRef<number | null>(null);

  const regenerate = useCallback((count: number) => {
    if (count > 0) setNoise(generateRandomString(count));
  }, []);

  // Measure the card and keep noise sized to fully cover it, even on resize.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      const needed = charsNeededFor(width, height);
      setCharCount(needed);
      regenerate(needed);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [regenerate]);

  // Idle animation: drifts the glow around the card in a slow circular path
  // whenever the user isn't actively hovering. This is what makes the card
  // "look alive" without any real interaction.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const loop = (time: number) => {
      if (!isHovering.current) {
        const { width, height } = el.getBoundingClientRect();
        if (width && height) {
          const cx = width / 2;
          const cy = height / 2;
          const radiusX = width * 0.35;
          const radiusY = height * 0.35;

          // Slow rotation ~ one full loop every ~14 seconds.
          idleAngle.current = (time / 14000) * Math.PI * 2;

          const x = cx + Math.cos(idleAngle.current) * radiusX;
          const y = cy + Math.sin(idleAngle.current * 1.3) * radiusY; // Lissajous-ish wobble

          mouseX.set(x);
          mouseY.set(y);

          // Occasionally refresh the noise glyphs so it feels "alive" too.
          if (Math.floor(time / 900) !== Math.floor((time - 16) / 900)) {
            regenerate(charCount);
          }
        }
      }
      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [mouseX, mouseY, charCount, regenerate]);

  const onMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent<HTMLDivElement>) => {
    isHovering.current = true;
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);

    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    regenerate(charCount);
  };

  const onMouseLeave = () => {
    // Small delay before idle animation takes back over, so it doesn't
    // jump abruptly the instant the cursor leaves.
    resumeTimeout.current = setTimeout(() => {
      isHovering.current = false;
    }, 300);
  };

  return (
    <div
      ref={containerRef}
      className={`p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-full relative ${className ?? ""}`}
    >
      <div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern mouseX={mouseX} mouseY={mouseY} />
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative flex h-44 w-44 items-center justify-center rounded-full text-4xl font-bold">
            <div className="absolute h-full w-full rounded-full bg-white/[0.8] blur-sm dark:bg-black/[0.8]" />
            {textImgSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={textImgSrc} alt="" className={`z-20  ${textClassName ?? ""}`} />
            ) : (
              <span className={`z-20 ${textClassName ?? "text-black dark:text-white"}`}>{text}</span>
            )}
          </div>
        </div>
        {noise && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 block h-full w-full overflow-hidden break-all font-mono text-[5px] leading-[1.3] text-white/15"
          >
            {noise}
          </span>
        )}
      </div>
    </div>
  );
};

export function CardPattern({
  mouseX,
  mouseY,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] opacity-50" />
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#318f43] via-[#6cc74e] to-[#da909d] opacity-70 backdrop-blur-xl transition-opacity duration-700 group-hover/card:opacity-100"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl bg-white/10 opacity-70 backdrop-blur-xl transition-opacity duration-700 group-hover/card:opacity-100"
        style={style}
      />
    </div>
  );
}

export const Icon = ({
  className,
  ...rest
}: {
  className?: string;
  [key: string]: unknown;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};