"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-4">
              Our Story
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-light text-[var(--charcoal)] mb-6 leading-tight">
              More Than a Salon.
              <br />
              <em>A Sanctuary.</em>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Mane Society & Co was built on one belief: that every person
                deserves to feel extraordinary. We&apos;re not just here to style
                your hair — we&apos;re here to help you walk out the door feeling
                like the best version of yourself.
              </p>
              <p>
                Our team of dedicated artists brings years of training and a
                genuine passion for the craft to every single appointment.
                Whether you&apos;re coming in for a simple trim or a full
                transformation, you&apos;ll receive the same level of attention,
                care, and artistry.
              </p>
              <p>
                We work exclusively with luxury professional products that
                protect and elevate the integrity of your hair — because great
                results start with great ingredients.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--border)] pt-8">
              {[
                { value: "10+", label: "Years of Experience" },
                { value: "2,000+", label: "Happy Clients" },
                { value: "4", label: "Expert Stylists" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-[family-name:var(--font-heading)] text-3xl font-light text-[var(--gold)]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] w-full"
          >
            <Image
              src="/images/bothowners.jpg"
              alt="Mane Society & Co owners"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gold accent block */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--gold)]/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
