"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [enabled, setEnabled] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const dotX = useSpring(cursorX, { stiffness: 500, damping: 50, mass: 0.1 });
  const dotY = useSpring(cursorY, { stiffness: 500, damping: 50, mass: 0.1 });
  const ringX = useSpring(cursorX, { stiffness: 80, damping: 20, mass: 0.5 });
  const ringY = useSpring(cursorY, { stiffness: 80, damping: 20, mass: 0.5 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;

    setEnabled(true);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  // Server render AND mobile both return null → no mismatch, no overlay eating taps
  if (!enabled) return null;

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>

      <motion.div
        className="pointer-events-none fixed z-[9999] hidden lg:block"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="w-9 h-9 rounded-full border border-green-border opacity-80" />
      </motion.div>

      <motion.div
        className="pointer-events-none fixed z-[9999] top-0 left-0 hidden lg:block"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-green-text shadow-[0_0_8px_2px_rgba(61,219,106,0.6)]" />
      </motion.div>
    </>
  );
}