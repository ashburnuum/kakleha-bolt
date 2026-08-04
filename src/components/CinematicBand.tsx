import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function CinematicBand() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.6]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-kakleha-charcoal py-20 sm:py-28 lg:py-36"
    >
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-kakleha-burgundy/20 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-kakleha-red/10 blur-[100px]" />

      <motion.div
        style={{ y: textY, opacity }}
        className="relative text-center px-4 sm:px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-kakleha-sand/60 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4 sm:mb-6"
        >
          Direka untuk setiap bentuk badan
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-7xl xl:text-[5.5rem] text-white tracking-tight leading-[1.05]"
        >
          Anjal
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-kakleha-red to-kakleha-sand">
            Tanpa Had
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 sm:mt-8 text-kakleha-sand/50 text-sm sm:text-base max-w-md mx-auto leading-relaxed"
        >
          Pinggang 60–105 cm. Pinggul 70–130 cm. Satu saiz. Semua selesa.
        </motion.p>
      </motion.div>
    </section>
  );
}
