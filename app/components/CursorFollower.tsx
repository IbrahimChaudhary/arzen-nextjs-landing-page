"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Inner dot — snaps instantly to cursor
  const dotX = useSpring(cursorX, { stiffness: 500, damping: 50, mass: 0.1 });
  const dotY = useSpring(cursorY, { stiffness: 500, damping: 50, mass: 0.1 });

  // Outer ring — lags behind for the trailing effect
  const ringX = useSpring(cursorX, { stiffness: 80, damping: 20, mass: 0.5 });
  const ringY = useSpring(cursorY, { stiffness: 80, damping: 20, mass: 0.5 });

  const isVisible = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const show = () => { isVisible.current = true; };
    const hide = () => { isVisible.current = false; };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseenter", show);
    document.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseenter", show);
      document.removeEventListener("mouseleave", hide);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Hide the default cursor site-wide */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* ── Outer ring — lags behind ── */}
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden lg:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className="w-9 h-9 rounded-full border border-green-border opacity-80"
        />
      </motion.div>

      {/* ── Inner dot — snaps to cursor ── */}
      <motion.div
        className="pointer-events-none fixed z-[9999] top-0 left-0 hidden lg:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-green-text shadow-[0_0_8px_2px_rgba(61,219,106,0.6)]" />
      </motion.div>
    </>
  );
}