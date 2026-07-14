import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutBook from "@/components/AboutBook";
import WhyRead from "@/components/WhyRead";
import QuoteSection from "@/components/QuoteSection";
import Timeline from "@/components/Timeline";
import Author from "@/components/Author";
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
        <AboutBook />
        <WhyRead />
        <QuoteSection />
        <Timeline />
        <Author />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
