import { CartProvider } from '@/context/CartContext';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import PreHeader from '@/components/PreHeader';
import Header from '@/components/Header';
import CartDrawer from '@/components/CartDrawer';
import HeroSection from '@/components/HeroSection';
import MarqueeTicker from '@/components/MarqueeTicker';
import AsSeenOn from '@/components/AsSeenOn';
import UGCCarousel from '@/components/UGCCarousel';
import CollectionsGrid from '@/components/CollectionsGrid';
import NewArrivals from '@/components/NewArrivals';
import EditorialBanner from '@/components/EditorialBanner';
import BestSellers from '@/components/BestSellers';
import WhySection from '@/components/WhySection';
import InstagramGrid from '@/components/InstagramGrid';
import ReviewsWaterfall from '@/components/ReviewsWaterfall';
import CTASignup from '@/components/CTASignup';
import Footer from '@/components/Footer';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <ScrollProgressBar />
        <PreHeader />
        <Header />
        <main>
          <HeroSection />
          <MarqueeTicker />
          <AsSeenOn />
          <UGCCarousel />
          <CollectionsGrid />
          <NewArrivals />
          <EditorialBanner />
          <BestSellers />
          <WhySection />
          <InstagramGrid />
          <ReviewsWaterfall />
          <CTASignup />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;
