import { useState, useEffect } from 'react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AsSeenOn from '@/components/AsSeenOn';
import ReviewCarousel from '@/components/ReviewCarousel';
import ProblemSection from '@/components/ProblemSection';
import ImmersiveNumber from '@/components/ImmersiveNumber';
import ProductOverview from '@/components/ProductOverview';
import CinematicBand from '@/components/CinematicBand';
import PinnedBenefits from '@/components/PinnedBenefits';
import FabricZoom from '@/components/FabricZoom';
import MaterialBreakdown from '@/components/MaterialBreakdown';
import FitGuide from '@/components/FitGuide';
import ComparisonTable from '@/components/ComparisonTable';
import LifestyleSection from '@/components/LifestyleSection';
import SocialProofTicker from '@/components/SocialProofTicker';
import WaterfallTestimonials from '@/components/WaterfallTestimonials';
import OfferBridge from '@/components/OfferBridge';
import OrderSteps from '@/components/OrderSteps';
import FAQSection from '@/components/FAQSection';
import EmbeddedCheckout from '@/components/checkout/EmbeddedCheckout';
import Footer from '@/components/Footer';
import StickyPurchaseBar from '@/components/StickyPurchaseBar';
import SectionDots from '@/components/SectionDots';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import SocialProofToasts from '@/components/SocialProofToasts';
import { productConfig, trackEvent } from '@/config/product';

function App() {
  const defaultPkg = productConfig.packages.find((p) => p.defaultSelected)?.id ?? productConfig.packages[0].id;
  const [selectedPackage, setSelectedPackage] = useState(defaultPkg);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    trackEvent('view_kakleha_landing_page');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgressBar />
      <AnnouncementBar />
      <Header />
      <main className="pb-20 sm:pb-0">
        <HeroSection />
        <AsSeenOn />
        <ReviewCarousel />
        <ProblemSection />
        <ImmersiveNumber />
        <ProductOverview />
        <CinematicBand />
        <PinnedBenefits />
        <FabricZoom />
        <MaterialBreakdown />
        <FitGuide />
        <ComparisonTable />
        <LifestyleSection />
        <SocialProofTicker />
        <WaterfallTestimonials />
        <OfferBridge />
        <OrderSteps />
        <EmbeddedCheckout selectedPackageId={selectedPackage} onPackageSelect={setSelectedPackage} />
        <FAQSection />
      </main>
      <Footer />
      <StickyPurchaseBar selectedId={selectedPackage} visible={showStickyBar} />
      <SectionDots />
      <SocialProofToasts />
    </div>
  );
}

export default App;
