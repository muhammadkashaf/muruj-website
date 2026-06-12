import AiPlannerSection from "./sections/AiPlannerSection";
import BenefitsSection from "./sections/BenefitsSection";
import DownloadAppSection from "./sections/DownloadAppSection";
import ExploreSection from "./sections/ExploreSection";
import Footer from "./sections/Footer";
import GroupTripSection from "./sections/GroupTripSection";
import GuidesSection from "./sections/GuidesSection";
import HeroSection from "./sections/HeroSection";
import HighlightsSection from "./sections/HighlightsSection";
import PackagesSection from "./sections/PackagesSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import WeatherSection from "./sections/WeatherSection";

export default function LandingPage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <PackagesSection />
      <BenefitsSection />
      <ExploreSection />
      <AiPlannerSection />
      <WeatherSection />
      <GroupTripSection />
      <GuidesSection />
      <HighlightsSection />
      <TestimonialsSection />
      <DownloadAppSection />
      <Footer />
    </main>
  );
}
