import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import Features from "@/components/home/Features";
import PricingTeaser from "@/components/home/PricingTeaser";
import PlatformShowcase from "@/components/home/PlatformShowcase";
import TrustSection from "@/components/home/TrustSection";
import Testimonials from "@/components/home/Testimonials";
import AffiliateBanner from "@/components/home/AffiliateBanner";
import FinalCTA from "@/components/home/FinalCTA";
import RiskWarning from "@/components/home/RiskWarning";

// Lazy-load the heavy TradingView widget (below the fold)
const MarketOverview = dynamic(() => import("@/components/home/MarketOverview"));

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Features />
      <PricingTeaser />
      <PlatformShowcase />
      <TrustSection />
      <MarketOverview />
      <Testimonials />
      <AffiliateBanner />
      <FinalCTA />
      <RiskWarning />
    </>
  );
}