import { motion } from 'framer-motion';
import { X, Check, Sparkles } from 'lucide-react';

const themFeatures = [
  'Bergulung bila duduk',
  'Kesan elasti pada kulit',
  'Panas & sesak',
  'Liputan rendah',
  'Saiz tak muat',
];

const usFeatures = [
  'Kekal di tempat',
  'Tak ada kesan merah',
  'Lapang angin seharian',
  'Liputan high-waist',
  'Anjal ikut badan',
];

export default function ComparisonTable() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-kakleha-cream/50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-kakleha-charcoal mb-2">
            KakLeha™ vs Yang Lain
          </h2>
          <p className="text-sm text-kakleha-grey max-w-md mx-auto">
            Perbezaan yang you boleh rasa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {/* Yang Lain */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-kakleha-blush/40 bg-white p-5 sm:p-6"
          >
            <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-kakleha-blush/30">
              <div className="w-10 h-10 rounded-xl bg-kakleha-charcoal/5 flex items-center justify-center">
                <X size={18} className="text-kakleha-grey/60" />
              </div>
              <div>
                <p className="font-heading font-bold text-base text-kakleha-grey">Yang Lain</p>
                <p className="text-[10px] text-kakleha-grey/70">Seluar dalam biasa</p>
              </div>
            </div>
            <ul className="space-y-3">
              {themFeatures.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-kakleha-charcoal/5 flex items-center justify-center flex-shrink-0">
                    <X size={12} className="text-kakleha-grey/50" />
                  </span>
                  <span className="text-sm text-kakleha-grey">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* KakLeha */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border-2 border-kakleha-red/30 bg-gradient-to-b from-kakleha-blush/30 to-white p-5 sm:p-6 relative shadow-lg shadow-kakleha-red/5"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-kakleha-red text-white text-[10px] font-semibold flex items-center gap-1 whitespace-nowrap">
              <Sparkles size={10} /> Paling Disyorken
            </div>
            <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-kakleha-red/20">
              <div className="w-10 h-10 rounded-xl bg-kakleha-red/10 flex items-center justify-center">
                <Check size={18} className="text-kakleha-red" />
              </div>
              <div>
                <p className="font-heading font-bold text-base text-kakleha-red">KakLeha™</p>
                <p className="text-[10px] text-kakleha-burgundy">High Waist Panties</p>
              </div>
            </div>
            <ul className="space-y-3">
              {usFeatures.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-kakleha-success/15 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-kakleha-success" />
                  </span>
                  <span className="text-sm text-kakleha-charcoal font-medium">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
