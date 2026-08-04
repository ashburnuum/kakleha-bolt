import { motion } from 'framer-motion';

export default function SensoryTextMoment() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center bg-kakleha-cream overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-kakleha-blush/50 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-kakleha-sand/40 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-kakleha-charcoal leading-[1.1] tracking-tight"
        >
          Rasa macam tak pakai apa.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-kakleha-charcoal leading-[1.1] tracking-tight mt-3 sm:mt-4"
        >
          Tapi{' '}
          <span className="text-kakleha-red">covered</span>{' '}
          everywhere.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-16 h-[3px] bg-kakleha-red mx-auto mt-8 sm:mt-12 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-kakleha-grey text-sm sm:text-base mt-6 max-w-md mx-auto"
        >
          Fabrik yang ikut bentuk badan — bukan paksa badan ikut dia.
        </motion.p>
      </div>
    </section>
  );
}
