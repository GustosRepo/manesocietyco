"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-start justify-center overflow-hidden pt-32">
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="Mane Society & Co"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-6"
        >
          Luxury Hair Salon
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-none tracking-wide mb-6"
        >
          Where Style
          <br />
          <em>Meets Artistry</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-white/75 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Premium hair services delivered with intention, precision, and care.
          Your transformation begins here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#contact"
            className="px-10 py-3.5 bg-transparent text-white text-xs tracking-[0.3em] uppercase border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-all duration-400"
          >
            Book an Appointment
          </Link>
          <Link
            href="#team"
            className="px-10 py-3.5 bg-transparent text-white text-xs tracking-[0.3em] uppercase border border-white/40 hover:border-white transition-colors duration-300"
          >
            Meet the Team
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
