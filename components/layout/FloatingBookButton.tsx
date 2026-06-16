"use client";

import Link from "next/link";

export default function FloatingBookButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Link
        href="#contact"
        className="flex items-center gap-2 px-5 py-3 bg-[var(--gold)] text-white text-xs tracking-widest uppercase shadow-lg hover:bg-[oklch(0.65_0.085_75)] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
      >
        Book Now
      </Link>
    </div>
  );
}
