import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import CommunitySection from "@/components/CommunitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import Recommendations from "@/components/Recommendations";
import FeaturedProperties from "@/components/FeaturedProperties";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <div className="max-w-7xl mx-auto bg-white">
        <TestimonialsSection />
        <ComparisonSection />
        <Recommendations />
        <FeaturedProperties />

      </div>

      <HowItWorksSection />

      {/* <AdvantagesSection /> */}
      {/* <CommunitySection /> */}

      <CtaSection />


      <Footer />
    </div>
  );
};

export default Index;
