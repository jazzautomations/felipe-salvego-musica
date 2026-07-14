import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutBook from "@/components/AboutBook";
import Topics from "@/components/Topics";
import Timeline from "@/components/Timeline";
import Author from "@/components/Author";
import WhyRead from "@/components/WhyRead";
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
        <AboutBook />
        <Topics />
        <QuoteSection />
        <Timeline />
        <Author />
        <WhyRead />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
