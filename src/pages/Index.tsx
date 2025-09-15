import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import CommunitySection from "@/components/CommunitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <div className="space-y-20 rounded-t-[200px] overflow-hidden bg-white">
        <TestimonialsSection />
        <ComparisonSection />
        <HowItWorksSection />
        {/* <AdvantagesSection /> */}
        {/* <CommunitySection /> */}

        <CtaSection />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
