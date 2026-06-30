import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingBookButton from "@/components/layout/FloatingBookButton";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Services from "@/components/sections/Services";
import StatementSection from "@/components/sections/StatementSection";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingBookButton />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <StatementSection />
        <Gallery />
        <About />
        <Team />
        <Contact />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
