"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

type FormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
};

const services = [
  "Signature Haircut",
  "Balayage",
  "Full Color",
  "Highlights",
  "Keratin Treatment",
  "Extensions",
  "Other",
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    // Placeholder — no backend yet
    console.log("Form submitted:", data);
    reset();
  };

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
            Book an Appointment
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form (3/5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            {isSubmitSuccessful ? (
              <div className="h-full flex items-center justify-center text-center p-12 bg-white border border-[var(--border)]">
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-2xl text-[var(--charcoal)] mb-3">
                    Thank you!
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    We&apos;ve received your info.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Each stylist handles their own bookings — visit their booking link from our team page!
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 border border-[var(--border)] space-y-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[var(--charcoal)] mb-2">
                      Name *
                    </label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      type="text"
                      autoComplete="name"
                      className="w-full border border-[var(--border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[var(--charcoal)] mb-2">
                      Email *
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email",
                        },
                      })}
                      type="email"
                      autoComplete="email"
                      className="w-full border border-[var(--border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[var(--charcoal)] mb-2">
                      Phone
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      autoComplete="tel"
                      className="w-full border border-[var(--border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[var(--charcoal)] mb-2">
                      Service
                    </label>
                    <select
                      {...register("service")}
                      className="w-full border border-[var(--border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors appearance-none"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[var(--charcoal)] text-white text-sm tracking-widest uppercase hover:bg-[var(--gold)] transition-colors duration-300 disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Get In Touch"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info (2/5) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
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
                {  Icon: Mail,
                  label: "Email",
                  value: "hello@manesociety.co",
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

            {/* Map embed */}
            <div className="aspect-video w-full overflow-hidden border border-[var(--border)]">
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
            </div>

            {/* Social */}
            <div className="flex gap-4">
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[var(--gold)] transition-colors"
              >
                <InstagramIcon size={16} /> Instagram
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[var(--gold)] transition-colors"
              >
                <FacebookIcon size={16} /> Facebook
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
