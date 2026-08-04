import { motion } from 'framer-motion';
import { trackEvent } from '@/config/product';

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-kakleha-blush to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-kakleha-red/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-kakleha-sand/40 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-kakleha-charcoal mb-4 text-balance">
              Bagi Diri Sendiri Keselesaan Yang Lebih Baik, Setiap Hari.
            </h2>
            <p className="text-kakleha-grey leading-relaxed mb-8">
              Liputan high-waist, fabrik lembut, anjal ikut badan — semua dalam satu seluar dalam yang you tak nak tukar dah lepas ni.
            </p>
            <a
              href="#checkout"
              onClick={() => trackEvent('click_final_cta')}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-kakleha-red text-white font-semibold text-base hover:bg-kakleha-burgundy transition-all hover:shadow-lg hover:shadow-kakleha-red/20"
            >
              Buat Pesanan Sekarang
            </a>
            <p className="mt-4 text-xs text-kakleha-grey">
              COD Tersedia · Checkout Selamat · Pos Seluruh Malaysia
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-white border border-kakleha-blush shadow-sm flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-kakleha-blush flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-kakleha-red">K</span>
                </div>
                <p className="text-sm text-kakleha-grey font-medium">[Imej Produk]</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
