"use client";

import { motion } from "framer-motion";
import Image from "next/image";
function InstagramIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import { team } from "@/lib/data";

type TeamMember = {
  id: number;
  name: string;
  title: string;
  specialties: string[];
  instagram: string;
  bookingUrl: string;
  image: string;
};

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-white">
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
            The Artists
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-light text-[var(--charcoal)]">
            Meet the Team
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member: TeamMember, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group text-center"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] w-full mb-5 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium text-[var(--charcoal)]">
                {member.name}
              </h3>
              <p className="text-xs tracking-widest uppercase text-[var(--gold)] mt-1 mb-3">
                {member.title}
              </p>
              <ul className="flex flex-wrap justify-center gap-1 mb-4">
                {member.specialties.map((s) => (
                  <li
                    key={s}
                    className="text-xs px-2 py-1 bg-[var(--cream)] text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <a
                  href={member.instagram.startsWith("@") ? `https://instagram.com/${member.instagram.slice(1)}` : member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-[var(--gold)] transition-colors"
                >
                  <InstagramIcon size={13} />
                  {member.instagram}
                </a>
                <a
                  href={member.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[var(--gold)] text-[var(--charcoal)] text-xs font-medium rounded hover:bg-[var(--gold)]/90 transition-colors"
                >
                  Book with {member.name.split(" ")[0]}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
