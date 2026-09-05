import { motion } from 'framer-motion';
import { Gem, Heart, MapPin } from 'lucide-react';

const pillars = [
  {
    icon: Gem,
    title: 'Fabrik Premium',
    description: 'Setiap kain dipilih dengan teliti untuk keselesaan sepanjang hari — lembut di kulit, breathable, dan tahan lama.',
  },
  {
    icon: Heart,
    title: 'Modest by Design',
    description: 'Potongan yang meraikan kesopanan tanpa mengorbankan gaya. Direka untuk wanita yang mahu tampil anggun dan yakin.',
  },
  {
    icon: MapPin,
    title: 'Dibuat Untuk Wanita Malaysia',
    description: 'Kami faham bentuk badan dan gaya hidup wanita tempatan. Setiap helai direka dengan sensitiviti budaya dan keselesaan tropika.',
  },
];

export default function WhySection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-ms-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-3xl bg-ms-champagne overflow-hidden relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-ms-grey-muted/15 font-heading text-[140px] font-bold select-none">MS</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-ms-gold mb-3">Tentang Kami</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-ms-charcoal mb-8 leading-tight">
              Kenapa <span className="italic">Mardina Safiyya</span>?
            </h2>

            <div className="space-y-8">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-ms-gold/10 flex items-center justify-center flex-shrink-0">
                    <pillar.icon size={20} className="text-ms-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-ms-charcoal mb-1.5">{pillar.title}</h3>
                    <p className="text-sm text-ms-grey leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="inline-block mt-8 text-sm font-medium text-ms-charcoal hover:text-ms-gold transition-colors tracking-wide uppercase underline underline-offset-4"
            >
              Ketahui Lebih Lanjut
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
