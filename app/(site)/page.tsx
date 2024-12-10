import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";
import AIAgent from "@/components/AIAgent";
import RugEscapeGame from "@/components/Game/RugEscapeGame";

export const metadata: Metadata = {
  title: "🚀 PepeGuy - chillest Solana token",
  description: "Pump it up and don't forget to HODL!",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <RugEscapeGame />
      <AIAgent />
      <About />
      <FeaturesTab />
    </main>
  );
}
