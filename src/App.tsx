import { CartProvider } from '@/context/CartContext';
import PreHeader from '@/components/PreHeader';
import Header from '@/components/Header';
import CartDrawer from '@/components/CartDrawer';
import HeroSection from '@/components/HeroSection';
import MarqueeTicker from '@/components/MarqueeTicker';
import CollectionsGrid from '@/components/CollectionsGrid';
import NewArrivals from '@/components/NewArrivals';
import EditorialBanner from '@/components/EditorialBanner';
import BestSellers from '@/components/BestSellers';
import UGCCarousel from '@/components/UGCCarousel';
import AsSeenOn from '@/components/AsSeenOn';
import WhySection from '@/components/WhySection';
import ReviewsWaterfall from '@/components/ReviewsWaterfall';
import InstagramGrid from '@/components/InstagramGrid';
import CTASignup from '@/components/CTASignup';
import Footer from '@/components/Footer';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <PreHeader />
        <Header />
        <main>
          <HeroSection />
          <MarqueeTicker />
          <CollectionsGrid />
          <NewArrivals />
          <EditorialBanner />
          <BestSellers />
          <UGCCarousel />
          <AsSeenOn />
          <WhySection />
          <ReviewsWaterfall />
          <InstagramGrid />
          <CTASignup />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;
