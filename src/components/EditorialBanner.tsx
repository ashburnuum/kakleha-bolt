import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function EditorialBanner() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[400px] lg:min-h-[520px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-ms-champagne relative overflow-hidden flex items-center justify-center order-2 lg:order-1 min-h-[300px]"
          >
            <span className="text-ms-grey-muted/20 font-heading text-[120px] font-bold select-none">MS</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-ms-cream flex items-center order-1 lg:order-2"
          >
            <div className="px-8 sm:px-12 lg:px-16 py-12 lg:py-0 max-w-lg">
              <p className="text-xs tracking-[0.2em] uppercase text-ms-gold mb-4">Cerita Kami</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-ms-charcoal mb-5 leading-tight">
                Direka Untuk Wanita Muslimah <span className="italic">Moden</span>
              </h2>
              <p className="text-ms-grey leading-relaxed mb-8">
                Setiap helai pakaian Mardina Safiyya direka dengan penuh ketelitian — dari pemilihan fabrik premium hingga potongan yang meraikan keanggunan wanita muslimah tanpa mengorbankan keselesaan.
              </p>
              <a
                href="#new-arrivals"
                className="inline-flex items-center gap-2 text-sm font-medium text-ms-charcoal hover:text-ms-gold transition-colors group tracking-wide uppercase"
              >
                Terokai Sekarang
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
