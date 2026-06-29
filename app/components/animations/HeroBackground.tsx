"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Animated hero backdrop. Two layers, both decorative and click-through:
 *   1. Drifting gradient blobs in the brand palette (framer-motion).
 *   2. A faint flowing path network with glowing dots that follow each
 *      path (SVG <animateMotion>), giving the "comet on a track" effect.
 *
 * Everything is disabled when the user prefers reduced motion.
 */

// Flowing curves drawn in a 1440x900 space; the SVG slices to cover the hero.
const PATHS = [
  "M-140 230 C 280 70 520 430 900 300 S 1320 230 1620 400",
  "M-140 680 C 240 740 470 500 820 610 S 1280 740 1620 520",
  "M260 -80 C 360 320 720 360 770 670 S 840 1000 1060 1060",
  "M1560 120 C 1200 240 1040 520 720 470 S 240 320 -120 470",
];

// Comets: which path they ride, colour, speed and a stagger offset so they
// never travel in lockstep.
const COMETS = [
  { path: 0, color: "#6cc74e", r: 4, dur: "11s", begin: "0s" },
  { path: 0, color: "#da909d", r: 3, dur: "11s", begin: "5.5s" },
  { path: 1, color: "#3ddb6a", r: 4, dur: "13s", begin: "2s" },
  { path: 2, color: "#b4ba7a", r: 3.5, dur: "15s", begin: "1s" },
  { path: 3, color: "#6cc74e", r: 3, dur: "14s", begin: "7s" },
];

// Soft colour glows that slowly wander behind the network.
const BLOBS = [
  {
    color: "rgba(61,220,106,0.20)",
    size: 560,
    top: "-12%",
    left: "52%",
    move: { x: [0, 50, -20, 0], y: [0, -40, 25, 0] },
    dur: 19,
  },
  {
    color: "rgba(218,144,157,0.16)",
    size: 440,
    top: "38%",
    left: "68%",
    move: { x: [0, -40, 30, 0], y: [0, 30, -25, 0] },
    dur: 23,
  },
  {
    color: "rgba(108,199,78,0.14)",
    size: 400,
    top: "55%",
    left: "-6%",
    move: { x: [0, 35, -15, 0], y: [0, -25, 35, 0] },
    dur: 27,
  },
];

export default function HeroBackground() {
  const reduced = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Layer 1 — drifting gradient blobs */}
      {BLOBS.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
          }}
          animate={reduced ? undefined : b.move}
          transition={{
            duration: b.dur,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Layer 2 — flowing path network with path-following comets */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient
            id="hero-line"
            x1="0"
            y1="0"
            x2="1440"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#318f43" />
            <stop offset="0.5" stopColor="#6cc74e" />
            <stop offset="0.7" stopColor="#b4ba7a" />
            <stop offset="0.9" stopColor="#da909d" />
          </linearGradient>

          <filter
            id="hero-glow"
            x="-200%"
            y="-200%"
            width="500%"
            height="500%"
          >
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Faint track lines */}
        {PATHS.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="url(#hero-line)"
            strokeWidth={1}
            strokeOpacity={0.16}
            strokeLinecap="round"
          />
        ))}

        {/* Comets riding the tracks */}
        {!reduced &&
          COMETS.map((c, i) => (
            <circle key={i} r={c.r} fill={c.color} filter="url(#hero-glow)">
              <animateMotion
                dur={c.dur}
                begin={c.begin}
                repeatCount="indefinite"
                rotate="auto"
                path={PATHS[c.path]}
                calcMode="spline"
                keyPoints="0;1"
                keyTimes="0;1"
                keySplines="0.42 0 0.58 1"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.1;0.9;1"
                dur={c.dur}
                begin={c.begin}
                repeatCount="indefinite"
              />
            </circle>
          ))}
      </svg>
    </div>
  );
}
