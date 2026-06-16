"use client";

import { motion } from "framer-motion";
import { Scissors, Brush, Palette, Sparkles, Zap, Layers } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  scissors: <Scissors size={22} />,
  brush: <Brush size={22} />,
  palette: <Palette size={22} />,
  sparkles: <Sparkles size={22} />,
  zap: <Zap size={22} />,
  layers: <Layers size={22} />,
};

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[var(--cream)]">
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
            What We Offer
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-light text-[var(--charcoal)]">
            Our Services
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white p-8 border border-[var(--border)] hover:border-[var(--gold)] hover:shadow-md transition-all duration-300"
            >
              <div className="text-[var(--gold)] mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium text-[var(--charcoal)] mb-3">
                {service.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {service.description}
              </p>
              <p className="text-xs tracking-widest uppercase text-[var(--gold)]">
                Starting at ${service.startingPrice}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
