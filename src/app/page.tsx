import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Hook from "@/components/Hook";
import Topics from "@/components/Topics";
import Timeline from "@/components/Timeline";
import Structure from "@/components/Structure";
import QuoteSection from "@/components/QuoteSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <RevealOnScroll />
      <Navbar />
      <main>
        <Hero />
        <Hook />
        <Topics />
        <Timeline />
        <Structure />
        <QuoteSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
