# Mane Society & Co

Premium luxury hair salon in **Corpus Christi, Texas**. Specializing in cuts, color, balayage, keratin treatments, and extensions.

**Location:** 5922 Yorktown Blvd Ste 110, Corpus Christi, TX 78414  
**Live Site:** https://gustosrepo.github.io/manesocietyco/

## Features

- 🎨 **Luxury Design** — Cream, gold, and charcoal color palette
- 📱 **Fully Responsive** — Mobile, tablet, and desktop optimized
- 🎯 **Team Profiles** — 4 stylists with individual booking links
- 🎬 **Image Carousel** — 13-image portfolio with lightbox
- 📝 **Legal Pages** — Privacy Policy & Terms of Service
- ⚡ **Fast Performance** — Next.js 16 with Turbopack
- 🔐 **TypeScript** — Type-safe codebase

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/gustosrepo/manesocietyco.git
cd manesocietyco
npm install

npm run dev
```

**Development:** http://localhost:3000/manesocietyco  
**Note:** Access via `/manesocietyco` path due to GitHub Pages base path configuration.

## Project Structure

```
app/
  ├── layout.tsx          # Root layout with fonts & metadata
  ├── page.tsx            # Home page
  ├── privacy/            # Privacy Policy page
  └── terms/              # Terms of Service page

components/
  ├── layout/             # Header, Footer, Floating button
  └── sections/           # Hero, Services, Team, Gallery, etc.

lib/
  ├── data.ts             # Services, team, testimonials, gallery
  ├── image-loader.ts     # Next.js image optimization
  └── utils.ts            # Utility functions

public/images/            # All site assets
```

## Key Pages

- **Home** (`/`) — Full-page website with all sections
- **Privacy Policy** (`/privacy`) — Data protection & GDPR compliance
- **Terms of Service** (`/terms`) — Cancellation policy, liability waivers
- **Gallery** — 13-image carousel with lightbox
- **Team** — 4 Master Hair Dressers with individual booking links

## Stylists & Booking

Each stylist manages their own bookings:

- **Leigh Anne** → https://modernmanestudio-booking.square.site/
- **Yasany H** → https://www.instagram.com/hair.by.yasanymane_
- **Vero** → https://resilience-hair-suite.square.site/
- **Destiny** → https://destinybuero1.glossgenius.com/

## Contact & Social

- **Phone:** (361) 555-0192
- **Email:** hello@manesociety.co
- **Address:** 5922 Yorktown Blvd Ste 110, Corpus Christi, TX 78414
- **Instagram:** [@manesociety.saloncc](https://www.instagram.com/manesociety.saloncc/)
- **Hours:** Tue–Sat 9AM–6PM | Sun–Mon Closed

## Deployment

The site is configured for GitHub Pages deployment with base path `/manesocietyco`.

```bash
npm run build
```

## Development Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Legal

- ✅ Privacy Policy implemented
- ✅ Terms of Service with cancellation policy
- ✅ Liability waivers included
- ⚠️ **Review with Texas attorney before public launch**

## License

Proprietary to Mane Society & Co. All rights reserved.
