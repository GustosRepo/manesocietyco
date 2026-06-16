"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--cream)]/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Utility bar */}
      <div
        className={`hidden lg:flex items-center justify-between px-12 text-xs tracking-widest transition-all duration-500 overflow-hidden ${
          scrolled
            ? "max-h-0 opacity-0 py-0"
            : "max-h-8 opacity-100 py-1.5 border-b border-white/20"
        }`}
      >
        <span className="text-white/60">
          5922 Yorktown Blvd Ste 110, Corpus Christi, TX 78414
        </span>
        <span className="text-white/60">
          Tue – Sat &nbsp;9AM – 6PM &nbsp;·&nbsp; Sun & Mon Closed
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <Link
          href="#"
          className={`font-[family-name:var(--font-heading)] text-2xl font-light tracking-widest transition-colors duration-300 ${
            scrolled ? "text-[var(--charcoal)]" : "text-white"
          }`}
        >
          MANE SOCIETY & CO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-[var(--gold)] ${
                scrolled ? "text-[var(--charcoal)]" : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center px-6 py-2.5 text-sm tracking-widest uppercase border transition-all duration-300 hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-white"
            style={{
              borderColor: scrolled ? "var(--charcoal)" : "white",
              color: scrolled ? "var(--charcoal)" : "white",
            }}
          >
            Book Now
          </Link>
          <button
            className={`md:hidden transition-colors duration-300 ${
              scrolled ? "text-[var(--charcoal)]" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[var(--cream)] border-t border-[var(--border)] px-6 py-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm tracking-widest uppercase text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center px-6 py-3 text-sm tracking-widest uppercase border border-[var(--charcoal)] text-[var(--charcoal)] hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-white transition-all"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
