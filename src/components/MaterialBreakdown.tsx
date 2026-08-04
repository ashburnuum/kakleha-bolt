import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { productConfig } from '@/config/product';
import { AnimatedNumber } from '@/components/AnimatedCounter';
import { Droplets, Wind, RotateCw, Sparkles } from 'lucide-react';

const materials = [
  { label: 'Nylon', value: productConfig.material.nylon, desc: 'Permukaan licin dan lembut' },
  { label: 'Spandex', value: productConfig.material.spandex, desc: 'Yang buat dia anjal' },
];

const features = [
  { icon: Droplets, label: 'Sentuhan Halus', desc: 'Lembut kat kulit' },
  { icon: Wind, label: 'Lapang Angin', desc: 'Ringan & tak panas' },
  { icon: RotateCw, label: 'Tahan Lama', desc: 'Cuci kerap pun tak jadi apa' },
  { icon: Sparkles, label: 'Kekal Bentuk', desc: 'Anjal tapi tak hilang bentuk' },
];

export default function MaterialBreakdown() {
  const barRef = useRef(null);
  const isInView = useInView(barRef, { once: true, margin: '-50px' });

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-kakleha-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-kakleha-charcoal mb-3">
            Kenapa Dia Boleh Anjal Macam Tu?
          </h2>
          <p className="text-kakleha-grey max-w-lg mx-auto text-sm sm:text-base">
            Campuran dua jenis fabrik yang buat dia lembut, anjal, dan tahan lama.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 auto-rows-auto lg:auto-rows-[180px]">
          {/* Hero card: Material ratio - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-1 lg:row-span-2 relative rounded-3xl bg-kakleha-charcoal p-6 sm:p-8 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-kakleha-red/10 blur-3xl" />
            <div className="relative h-full flex flex-col justify-between">
              <div>
                <p className="text-kakleha-sand/60 text-xs font-medium tracking-wide uppercase mb-2">
                  Komposisi Material
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white">
                    <AnimatedNumber value={95} duration={2} />
                  </span>
                  <span className="text-lg sm:text-xl font-heading font-bold text-kakleha-sand/50">:</span>
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-kakleha-red">
                    <AnimatedNumber value={5} duration={2} />
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-kakleha-sand/50 mt-2">Nisbah Nylon : Spandex</p>
              </div>

              <div ref={barRef} className="mt-5 sm:mt-8 space-y-3">
                {materials.map((mat, i) => (
                  <div key={mat.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-white/80">{mat.label}</span>
                      <span className="text-sm font-bold text-kakleha-red">
                        <AnimatedNumber value={mat.value} suffix="%" duration={1.5} />
                      </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-kakleha-red to-kakleha-burgundy"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${mat.value}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: i * 0.3, ease: 'easeOut' }}
                      />
                    </div>
                    <p className="text-[11px] text-white/40 mt-1">{mat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Feature cards - bento style */}
          {features.map((feat, i) => (
            <motion.div
              key={feat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="col-span-1 rounded-2xl sm:rounded-3xl bg-white border border-kakleha-blush/60 p-4 sm:p-5 lg:p-6 flex flex-col justify-between group hover:border-kakleha-red/20 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-kakleha-blush flex items-center justify-center group-hover:bg-kakleha-red/10 transition-colors">
                <feat.icon size={18} className="text-kakleha-red" />
              </div>
              <div className="mt-3 sm:mt-auto">
                <span className="text-sm font-semibold text-kakleha-charcoal block">{feat.label}</span>
                <span className="text-xs text-kakleha-grey mt-0.5 block">{feat.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
