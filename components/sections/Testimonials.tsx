"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--charcoal)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-4">
            Client Love
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-light text-white">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white/5 border border-white/10 p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    className="text-[var(--gold)] fill-[var(--gold)]"
                  />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="text-white text-sm font-medium">{t.name}</p>
                <p className="text-xs tracking-widest uppercase text-[var(--gold)] mt-0.5">
                  {t.service}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
