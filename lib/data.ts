export const services = [
  {
    id: 1,
    name: "Signature Haircut",
    description:
      "A personalized cut tailored to your face shape, lifestyle, and hair texture. Includes consultation, shampoo, and style.",
    startingPrice: 75,
    icon: "scissors",
  },
  {
    id: 2,
    name: "Balayage",
    description:
      "Hand-painted highlights for a sun-kissed, natural look with seamless grow-out. Low maintenance, high impact.",
    startingPrice: 175,
    icon: "brush",
  },
  {
    id: 3,
    name: "Full Color",
    description:
      "Rich, even color from root to tip using premium professional formulas. Perfect for covering grey or a bold new look.",
    startingPrice: 120,
    icon: "palette",
  },
  {
    id: 4,
    name: "Highlights",
    description:
      "Foil or freehand highlights to add dimension and brightness. Partial or full options available.",
    startingPrice: 135,
    icon: "sparkles",
  },
  {
    id: 5,
    name: "Keratin Treatment",
    description:
      "Smooth frizz, reduce styling time, and achieve glass-like shine with our professional keratin treatment.",
    startingPrice: 250,
    icon: "zap",
  },
  {
    id: 6,
    name: "Extensions",
    description:
      "Add length and volume with tape-in or hand-tied extensions. Installed and styled to blend seamlessly.",
    startingPrice: 400,
    icon: "layers",
  },
];

export const team = [
  {
    id: 1,
    name: "Sofia Reyes",
    title: "Creative Director & Color Specialist",
    specialties: ["Balayage", "Color Correction", "Precision Cuts"],
    instagram: "@sofiastyles",
    image: "/images/stylist-chair-front.jpg",
  },
  {
    id: 2,
    name: "Marcus Chen",
    title: "Senior Stylist",
    specialties: ["Textured Hair", "Men's Cuts", "Keratin Treatments"],
    instagram: "@marcuscuts",
    image: "/images/stylist-chair-side.jpg",
  },
  {
    id: 3,
    name: "Isabelle Laurent",
    title: "Extension Specialist",
    specialties: ["Hand-Tied Extensions", "Highlights", "Bridal Styling"],
    instagram: "@isabellelooks",
    image: "/images/owner-salon-sign.jpg",
  },
  {
    id: 4,
    name: "Devon Harlow",
    title: "Color Artist",
    specialties: ["Vivid Color", "Ombré", "Creative Color"],
    instagram: "@devonhair",
    image: "/images/stylist-chair-front.jpg",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Camille Torres",
    service: "Balayage",
    rating: 5,
    text: "I've been to a lot of salons and Mane Society is on another level. Sofia understood exactly what I wanted and the result was even better than the inspiration photos. I get compliments every single day.",
  },
  {
    id: 2,
    name: "Rachel Kim",
    service: "Keratin Treatment",
    rating: 5,
    text: "My hair has never felt this smooth. The keratin treatment was done so carefully — they really took their time. The salon itself is gorgeous and everyone is so welcoming.",
  },
  {
    id: 3,
    name: "Priya Nair",
    service: "Extensions",
    rating: 5,
    text: "Isabelle installed my extensions and they are absolutely undetectable. The length and volume I've always wanted. I walked out feeling like a completely different person — in the best way.",
  },
  {
    id: 4,
    name: "Jordan Ellis",
    service: "Signature Haircut",
    rating: 5,
    text: "Marcus gave me the best cut I've had in years. He really listened to what I wanted and also gave honest advice about what would work with my hair type. Will not go anywhere else.",
  },
  {
    id: 5,
    name: "Natalie Osei",
    service: "Full Color",
    rating: 5,
    text: "I was nervous about going darker but Devon completely put me at ease. The color is rich, glossy, and exactly what I envisioned. The whole experience felt like self-care at its finest.",
  },
  {
    id: 6,
    name: "Maya Patel",
    service: "Highlights",
    rating: 5,
    text: "Such a beautiful salon with an even more talented team. My highlights came out perfectly blended — soft, warm, and so natural looking. The scalp massage during the wash was a bonus!",
  },
];

export const galleryImages = [
  {
    id: 1,
    src: "/images/owner-salon-sign.jpg",
    alt: "Mane Society & Co salon",
    category: "All",
  },
  {
    id: 2,
    src: "/images/stylist-chair-front.jpg",
    alt: "Stylist at Mane Society",
    category: "Cuts",
  },
  {
    id: 3,
    src: "/images/stylist-chair-side.jpg",
    alt: "Stylist editorial shot",
    category: "Cuts",
  },
  {
    id: 4,
    src: "/images/branding-tools-flatlay.png",
    alt: "Mane Society tools and branding",
    category: "All",
  },
  {
    id: 5,
    src: "/images/branding-coffee-flatlay.png",
    alt: "Mane Society branded merch",
    category: "All",
  },
];

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];
