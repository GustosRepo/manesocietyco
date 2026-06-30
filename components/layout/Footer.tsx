import Link from "next/link";
import { navLinks } from "@/lib/data";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-[family-name:var(--font-heading)] text-2xl font-light tracking-widest text-white mb-3">
              MANE SOCIETY
            </p>
            <p className="text-sm leading-relaxed text-white/50">
              Where style meets artistry. A luxury hair salon experience for
              every occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs tracking-widest uppercase text-white mb-4">
              Quick Links
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Legal */}
          <div>
            <p className="text-xs tracking-widest uppercase text-white mb-4">
              Follow Us
            </p>
            <div className="flex gap-4 mb-8">
              <a
                href="https://www.instagram.com/manesociety.saloncc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[var(--gold)] transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[var(--gold)] transition-colors"
              >
                <FacebookIcon size={20} />
              </a>
            </div>
            <div className="flex gap-4 text-xs text-white/40">
              <Link href="/privacy" className="hover:text-white/70 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white/70 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center text-xs text-white/30 mb-4">
            © {new Date().getFullYear()} Mane Society & Co. All rights reserved.
          </div>
          <div className="text-center text-xs text-white/40">
            Made by{" "}
            <a
              href="https://www.code-werx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--gold)] hover:text-white transition-colors"
            >
              codewerx
            </a>
            {" "}<span className="text-[var(--gold)]">&lt;3</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
