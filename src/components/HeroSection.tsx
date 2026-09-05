import { motion } from 'framer-motion';
import { Truck, RefreshCw, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[540px] lg:min-h-[640px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center order-2 lg:order-1 px-6 sm:px-10 lg:px-16 xl:px-20 py-12 lg:py-0 bg-ms-cream"
          >
            <div className="max-w-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ms-gold/30 bg-ms-gold/10 text-ms-gold-dark text-xs font-medium tracking-[0.12em] uppercase mb-6"
              >
                New Collection 2026
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="font-heading text-3xl sm:text-4xl lg:text-[44px] xl:text-5xl font-bold text-ms-charcoal leading-[1.15] mb-5"
              >
                Elegance In{' '}
                <span className="text-ms-gold">Every</span>{' '}
                Stitch
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-base sm:text-[17px] text-ms-grey leading-relaxed max-w-md mb-8"
              >
                Premium modest fashion that blends modern elegance with timeless modesty. Designed for women who value quality in every detail.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex flex-col sm:flex-row gap-3 mb-10"
              >
                <a
                  href="#new-arrivals"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-ms-gold text-white font-medium text-sm tracking-wide uppercase hover:bg-ms-gold-dark transition-all hover:shadow-lg hover:shadow-ms-gold/20"
                >
                  Shop New Arrivals
                </a>
                <a
                  href="#best-sellers"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-ms-charcoal/20 text-ms-charcoal font-medium text-sm tracking-wide uppercase hover:border-ms-gold hover:text-ms-gold transition-all"
                >
                  Best Sellers
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="flex flex-wrap items-center gap-5 sm:gap-6"
              >
                <TrustPill icon={<Truck size={14} />} text="Free Shipping" />
                <TrustPill icon={<RefreshCw size={14} />} text="Easy Returns" />
                <TrustPill icon={<ShieldCheck size={14} />} text="Secure Checkout" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative overflow-hidden order-1 lg:order-2 min-h-[360px] lg:min-h-0"
          >
            <img
              src="https://images.pexels.com/photos/6700347/pexels-photo-6700347.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Elegant woman in modest fashion"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-ms-cream/20 hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="flex items-center gap-2 text-ms-grey text-xs sm:text-sm">
      <span className="text-ms-gold">{icon}</span>
      {text}
    </span>
  );
}
