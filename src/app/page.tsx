import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Convergence from "@/components/Convergence";
import AboutBook from "@/components/AboutBook";
import WhyRead from "@/components/WhyRead";
import Timeline from "@/components/Timeline";
import Author from "@/components/Author";
import QuoteSection from "@/components/QuoteSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Convergence />
      <AboutBook />
      <WhyRead />
      <Timeline />
      <QuoteSection />
      <Author />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
