import { motion } from 'framer-motion';
import { ArrowUpFromLine, Waves, Maximize2, Shirt } from 'lucide-react';
import { productConfig } from '@/config/product';

const attributes = [
  { icon: ArrowUpFromLine, label: 'Liputan High-Waist', desc: 'Cover perut sampai atas pusat — rasa selamat' },
  { icon: Waves, label: 'Waistband Lembut', desc: 'Tak ketat, tak tinggal kesan. Macam tak pakai apa-apa.' },
  { icon: Maximize2, label: 'Sangat Anjal', desc: 'Ikut bentuk badan, tak halang pergerakan' },
  { icon: Shirt, label: 'Selesa Seharian', desc: 'Pagi sampai malam, still okay' },
];

export default function ProductOverview() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-kakleha-charcoal mb-3">
            Ini Dia, {productConfig.brandName}
          </h2>
          <p className="text-kakleha-grey max-w-lg mx-auto">
            Seluar dalam high-waist yang betul-betul ikut badan you — bukan sekadar "free size" nama je.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-kakleha-blush/50 border border-kakleha-blush flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-kakleha-red">K</span>
                </div>
                <p className="font-medium text-kakleha-charcoal text-sm">[Imej Produk — Pandangan Hadapan]</p>
                <p className="text-xs text-kakleha-grey mt-1">Placeholder untuk imej produk</p>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 bg-white rounded-2xl shadow-lg px-4 py-2.5 border border-kakleha-blush">
              <p className="text-xs text-kakleha-grey">Material</p>
              <p className="text-sm font-semibold text-kakleha-charcoal">
                {productConfig.material.nylon}% Nylon · {productConfig.material.spandex}% Spandex
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="mb-6">
              <p className="text-kakleha-grey leading-relaxed">
                Campuran nylon-spandex yang lembut dan sangat anjal. Muat pinggang {productConfig.measurements.waist} dan pinggul {productConfig.measurements.hip} — so kebanyakan bentuk badan boleh pakai dengan selesa.
              </p>
            </div>

            <div className="grid gap-4">
              {attributes.map((attr) => (
                <div
                  key={attr.label}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-kakleha-cream/50 border border-kakleha-blush/40"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <attr.icon size={20} className="text-kakleha-red" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm text-kakleha-charcoal">{attr.label}</h3>
                    <p className="text-xs text-kakleha-grey mt-0.5">{attr.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-full bg-kakleha-blush text-xs font-medium text-kakleha-burgundy">
                Free Size
              </span>
              <span className="px-3 py-1.5 rounded-full bg-kakleha-blush text-xs font-medium text-kakleha-burgundy">
                Pinggang: {productConfig.measurements.waist}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-kakleha-blush text-xs font-medium text-kakleha-burgundy">
                Pinggul: {productConfig.measurements.hip}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
