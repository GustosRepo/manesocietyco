"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const items = [
  "CUTS",
  "COLOR",
  "BALAYAGE",
  "EXTENSIONS",
  "TREATMENTS",
  "HIGHLIGHTS",
  "KERATIN",
  "BLOWOUTS",
];

export default function Marquee() {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="bg-[var(--charcoal)] overflow-hidden py-4 border-y border-white/10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-6 text-xs tracking-[0.35em] text-white/60"
          >
            {item}
            <span className="text-[var(--gold)] text-base leading-none">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
