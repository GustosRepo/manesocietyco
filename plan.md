# Mane Society & Co — Hair Salon Website Plan

## Project Overview
A premium, single-page website for a hair salon. Built with **Next.js 16 (App Router)**. No database or backend integrations required at launch — architecture will be kept clean for future additions (booking system, CMS, etc.).

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 16 (App Router) | SSG-friendly, great SEO, easy to scale |
| Styling | Tailwind CSS + shadcn/ui | Utility-first, consistent design tokens |
| Animations | Framer Motion | Smooth scroll reveals, hero animations |
| Icons | Lucide React | Clean, lightweight icon set |
| Fonts | Google Fonts (e.g. Cormorant Garamond + Inter) | Elegant luxury pairing |
| Images | next/image | Optimized lazy-loading out of the box |
| Forms | React Hook Form | Lightweight, no backend needed yet |
| Deployment | Vercel | Zero-config, perfect for Next.js |

---

## Site Sections (Single Page)

The page will be divided into clearly anchored sections for smooth scrolling.

### 1. Navigation (Sticky Header)
- Logo / salon name
- Smooth-scroll nav links: Services · Gallery · About · Team · Contact
- CTA button: "Book Now" (links to contact/booking section)
- Mobile hamburger menu

### 2. Hero Section
- Full-viewport cinematic background (image or video)
- Headline + tagline
- Two CTAs: "Book an Appointment" and "View Services"
- Subtle scroll indicator animation

### 3. Services Section
- Grid of service cards (Haircut, Color, Balayage, Treatments, Extensions, etc.)
- Each card: icon/image, service name, short description, starting price
- Hover animations

### 4. Gallery / Portfolio Section
- Masonry or grid layout of before/after or styled shots
- Lightbox preview on click (no external service needed)
- Category filter tabs (All · Color · Cuts · Treatments)

### 5. About the Salon Section
- Brand story / philosophy
- High-quality interior/atmosphere image
- Key differentiators (luxury products, experienced stylists, welcoming vibe)

### 6. Meet the Team Section
- Stylist cards: photo, name, title, specialties
- Instagram handle (optional link)

### 7. Testimonials / Reviews Section
- Auto-scrolling or static testimonial cards
- Star ratings
- Client name + service received

### 8. Contact / Book Section
- Simple contact form (Name, Email, Phone, Service, Message)
- Salon address, hours of operation
- Embedded Google Maps iframe (no API key needed for basic embed)
- Social media links (Instagram, Facebook, TikTok)

### 9. Footer
- Logo + tagline
- Quick nav links
- Privacy Policy / Terms placeholder links
- Copyright

---

## Project File Structure

```
manesocietyco/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Single page — composes all sections
│   └── globals.css         # Global styles + Tailwind directives
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Gallery.tsx
│       ├── About.tsx
│       ├── Team.tsx
│       ├── Testimonials.tsx
│       └── Contact.tsx
├── lib/
│   └── data.ts             # Static content (services, team, testimonials)
├── public/
│   └── images/             # All salon photos
├── plan.md
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## Design Direction

- **Color Palette**: Warm neutrals — cream, soft gold, deep charcoal, off-white
- **Typography**: Serif display font (Cormorant Garamond) for headings + clean sans-serif (Inter) for body
- **Vibe**: Luxury spa meets approachable neighborhood salon — elegant but not cold
- **Imagery**: High-contrast, warm-toned photography

---

## Future-Proofing (Not Built Yet)

The architecture is kept clean so these can be added later with minimal refactoring:

- [ ] Online booking integration (Acuity, Square, Booksy, or custom)
- [ ] CMS for gallery/team/services (Sanity.io or Contentful)
- [ ] Email collection / newsletter (Mailchimp or Resend)
- [ ] Authentication for a client portal
- [ ] Database (Supabase / Postgres) for appointment history

---

## Build Phases

### Phase 1 — Setup & Foundation
- [ ] Scaffold Next.js 16 project with TypeScript
- [ ] Install and configure Tailwind CSS
- [ ] Install shadcn/ui, Framer Motion, Lucide
- [ ] Set up fonts and global design tokens
- [ ] Create layout (Navbar + Footer)

### Phase 2 — Core Sections
- [ ] Hero section
- [ ] Services section
- [ ] About section
- [ ] Contact form + map

### Phase 3 — Premium Touches
- [ ] Gallery with lightbox
- [ ] Team section
- [ ] Testimonials carousel
- [ ] Scroll animations (Framer Motion)

### Phase 4 — Polish & Deploy
- [ ] SEO metadata (title, description, OG image)
- [ ] Mobile responsiveness audit
- [ ] Performance audit (Lighthouse)
- [ ] Deploy to Vercel

---

## SEO Metadata Plan

```ts
// app/layout.tsx
export const metadata = {
  title: "Mane Society & Co | Premium Hair Salon",
  description: "Luxury hair salon specializing in cuts, color, balayage, and treatments.",
  openGraph: {
    title: "Mane Society & Co",
    description: "Book your appointment today.",
    images: ["/og-image.jpg"],
  },
}
```

---

*Plan created: 2026-06-16*
