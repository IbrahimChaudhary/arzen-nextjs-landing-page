"use client";

import { motion } from "framer-motion";

const PILLS = [
  { label: "Authenticity", icon: "✦" },
  { label: "Innovation",   icon: "⚡" },
  { label: "Collaboration",icon: "🤝" },
  { label: "Adaptability", icon: "🎯" },
  { label: "Efficiency",   icon: "⚙️" },
];

// Each pill gets unique animation params so they're out of phase
// — this is what creates the elastic/rubber spacing effect between them
const VARIANTS = [
  { y: [-6, 6],   duration: 2.4, delay: 0    },
  { y: [-9, 5],   duration: 2.1, delay: 0.3  },
  { y: [-4, 10],  duration: 2.7, delay: 0.15 },
  { y: [-8, 4],   duration: 2.2, delay: 0.5  },
  { y: [-5, 9],   duration: 2.5, delay: 0.1  },
];

export default function FloatingPills() {
  return (
    <div className="flex flex-col gap-3 items-start">
      {PILLS.map((pill, i) => {
        const v = VARIANTS[i];
        return (
          <motion.div
            key={pill.label}
            animate={{ y: v.y }}
            transition={{
              duration: v.duration,
              delay: v.delay,
              repeat: Infinity,
              repeatType: "mirror",  // smooth back-and-forth, no jump
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#1a1a1a] border border-white/15 whitespace-nowrap select-none">
              <span className="text-sm">{pill.icon}</span>
              <span className="text-sm text-white/80 font-medium">{pill.label}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}