import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gustosrepo.github.io/manesocietyco"),
  title: "Mane Society & Co | Luxury Hair Salon in Corpus Christi, TX",
  description:
    "Premium hair salon in Corpus Christi, Texas. Specializing in cuts, color, balayage, keratin treatments, and extensions. Book your appointment today with our master hair dressers.",
  keywords: [
    "hair salon Corpus Christi",
    "luxury hair salon TX",
    "balayage Corpus Christi",
    "hair color near me",
    "keratin treatment Corpus Christi",
    "hair extensions Texas",
    "best salon Corpus Christi",
    "professional haircut Corpus Christi",
  ],
  alternates: {
    canonical: "https://gustosrepo.github.io/manesocietyco/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  authors: [{ name: "Mane Society & Co" }],
  creator: "Mane Society & Co",
  publisher: "Mane Society & Co",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "Mane Society & Co | Hair Salon Corpus Christi, TX",
    description: "Premium hair services in Corpus Christi. Book your appointment today.",
    images: ["/og-image.jpg"],
    url: "https://gustosrepo.github.io/manesocietyco",
    type: "website",
    locale: "en_US",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mane Society & Co",
  image: "https://gustosrepo.github.io/manesocietyco/og-image.jpg",
  description:
    "Premium hair salon in Corpus Christi, Texas specializing in cuts, color, balayage, keratin treatments, and extensions.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5922 Yorktown Blvd Ste 110",
    addressLocality: "Corpus Christi",
    addressRegion: "TX",
    postalCode: "78414",
    addressCountry: "US",
  },
  telephone: "(361) 555-0192",
  email: "hello@manesociety.co",
  url: "https://gustosrepo.github.io/manesocietyco",
  sameAs: ["https://www.instagram.com/manesociety.saloncc/"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday"],
      opens: "00:00",
      closes: "00:00",
    },
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
