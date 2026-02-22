import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";
import FloatingTelegram from "@/components/FloatingTelegram";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <PricingSection />
      <ContactsSection />
      <Footer />
      <FloatingTelegram />
    </div>
  );
};

export default Index;
