import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Ruler, Star } from 'lucide-react';
import { productConfig, trackEvent } from '@/config/product';

const REVIEW_COUNT = 2400;
const RATING_VALUE = 4.8;

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-kakleha-cream to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-kakleha-blush opacity-60 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-kakleha-sand/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kakleha-blush text-kakleha-burgundy text-xs font-semibold tracking-wide uppercase mb-5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="text-kakleha-red fill-kakleha-red" />
                ))}
              </div>
              <span>{RATING_VALUE} · {REVIEW_COUNT.toLocaleString('en')} ulasan</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[52px] lg:leading-[1.12] text-kakleha-charcoal text-balance mb-5">
              Tak Perlu Lagi Tarik Seluar Dalam Setiap Kali Duduk.
            </h1>

            <p className="text-base sm:text-lg text-kakleha-grey leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Potongan high-waist yang duduk elok, fabrik yang ikut bentuk badan — pakai dari pagi sampai malam tanpa rasa nak betulkan.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 justify-center lg:justify-start">
              <BenefitPill icon={<ShieldCheck size={16} />} text="Cover perut dengan elok" />
              <BenefitPill icon={<Zap size={16} />} text="Lembut & sangat anjal" />
              <BenefitPill icon={<Ruler size={16} />} text="Muat pinggang & pinggul besar" />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mt-8">
              <a
                href="#checkout"
                onClick={() => trackEvent('click_hero_cta')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-kakleha-red text-white font-semibold text-base hover:bg-kakleha-burgundy transition-all hover:shadow-lg hover:shadow-kakleha-red/20"
              >
                Buat Pesanan Sekarang
              </a>
              <a
                href="#reviews"
                className="text-sm font-medium text-kakleha-grey hover:text-kakleha-charcoal transition-colors underline underline-offset-4"
              >
                Lihat Review
              </a>
            </div>

            <p className="mt-5 text-xs text-kakleha-grey text-center lg:text-left">
              COD Tersedia · Checkout Selamat · Pos Seluruh Malaysia
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-kakleha-blush/70 blur-2xl" />

            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-3xl bg-white shadow-xl shadow-kakleha-red/5 border border-kakleha-blush flex items-center justify-center">
              <div className="text-center text-kakleha-grey text-sm p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-kakleha-blush flex items-center justify-center">
                  <span className="text-3xl font-heading font-bold text-kakleha-red">K</span>
                </div>
                <p className="font-medium text-kakleha-charcoal">[Imej Produk Utama]</p>
                <p className="text-xs mt-1">Placeholder untuk imej produk KakLeha™</p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 right-2 sm:right-4 bg-white rounded-2xl shadow-lg px-3 py-2 text-xs font-medium border border-kakleha-blush"
            >
              <span className="text-kakleha-grey">95% Nylon · 5% Spandex</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 left-0 sm:left-4 bg-white rounded-2xl shadow-lg px-3 py-2 text-xs font-medium border border-kakleha-blush"
            >
              <span className="text-kakleha-charcoal">Pinggang {productConfig.measurements.waist}</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-4 right-4 sm:right-8 bg-white rounded-2xl shadow-lg px-3 py-2 text-xs font-medium border border-kakleha-blush"
            >
              <span className="text-kakleha-charcoal">Pinggul {productConfig.measurements.hip}</span>
            </motion.div>

            <div className="absolute top-4 left-2 sm:left-6 bg-kakleha-red text-white rounded-full px-3 py-1 text-xs font-semibold shadow-md">
              Free Size
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BenefitPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/80 border border-kakleha-blush text-xs sm:text-sm text-kakleha-charcoal">
      <span className="text-kakleha-red flex-shrink-0">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
