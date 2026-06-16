"use client";

import { motion } from "framer-motion";

export default function StatementSection() {
  return (
    <section className="bg-[var(--charcoal)] py-24 lg:py-32 text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-8">
          Our Philosophy
        </p>
        <blockquote className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight max-w-4xl mx-auto">
          <em>
            &ldquo;Every strand tells a story.
            <br />
            We make sure yours is beautiful.&rdquo;
          </em>
        </blockquote>
        <div className="mt-10 w-12 h-px bg-[var(--gold)] mx-auto" />
      </motion.div>
    </section>
  );
}
