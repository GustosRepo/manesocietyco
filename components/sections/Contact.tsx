"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[var(--cream)]">
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
            Get in Touch
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-light text-[var(--charcoal)]">
            Visit or Contact Us
          </h2>
        </motion.div>

        {/* Info Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Details */}
          <div className="space-y-8">
            {/* Contact details */}
            <div className="space-y-5">
              {[
                {
                  Icon: MapPin,
                  label: "Address",
                  value: "5922 Yorktown Blvd Ste 110, Corpus Christi, TX 78414",
                },
                {
                  Icon: Phone,
                  label: "Phone",
                  value: "(361) 555-0192",
                },
                {
                  Icon: () => (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  ),
                  label: "Instagram",
                  value: "@manesociety.saloncc",
                  href: "https://www.instagram.com/manesociety.saloncc/",
                },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <Icon
                    size={18}
                    className="text-[var(--gold)] shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-xs tracking-widest uppercase text-[var(--charcoal)] mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-[var(--gold)] transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="border-t border-[var(--border)] pt-6">
              <div className="flex gap-4 mb-4">
                <Clock
                  size={18}
                  className="text-[var(--gold)] shrink-0 mt-0.5"
                />
                <p className="text-xs tracking-widest uppercase text-[var(--charcoal)]">
                  Hours
                </p>
              </div>
              <table className="text-sm text-muted-foreground w-full">
                <tbody>
                  {[
                    ["Tuesday – Saturday", "9:00 AM – 6:00 PM"],
                    ["Sunday", "Closed"],
                    ["Monday", "Closed"],
                  ].map(([day, hours]) => (
                    <tr key={day}>
                      <td className="py-1 pr-4">{day}</td>
                      <td className="py-1">{hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-square w-full overflow-hidden border border-[var(--border)]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.4!2d-97.3974!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866803b0e1234567%3A0x9d1234567890abcd!2s5922%20Yorktown%20Blvd%20Ste%20110%2C%20Corpus%20Christi%2C%20TX%2078414!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mane Society & Co location"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
