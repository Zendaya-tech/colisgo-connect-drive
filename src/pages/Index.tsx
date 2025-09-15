import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import CommunitySection from "@/components/CommunitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ComparisonSection />
      <HowItWorksSection />
      <AdvantagesSection />
      <CommunitySection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
