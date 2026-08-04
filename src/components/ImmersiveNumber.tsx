import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

function AnimatedValue({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (target - start) * eased);
      setValue(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span>
      {value}{suffix}
    </span>
  );
}

export default function ImmersiveNumber() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <section ref={ref} className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center bg-kakleha-charcoal overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-kakleha-red/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-kakleha-burgundy/10 blur-3xl" />
      </div>

      <div className="relative text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-kakleha-red/10 border border-kakleha-red/20 text-kakleha-red text-xs sm:text-sm font-medium tracking-wide uppercase">
            Anjal Maksimum
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-heading font-black text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] text-white leading-none tracking-tighter"
        >
          <AnimatedValue target={105} suffix=" cm" inView={isInView} />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-4 sm:mt-6"
        >
          <p className="text-white/60 text-base sm:text-lg font-medium">
            Pinggul anjal sampai maksimum
          </p>
          <p className="text-white/40 text-sm mt-2 max-w-sm mx-auto">
            Dari 70 cm sampai 105 cm — dia ikut badan you, bukan paksa badan ikut kain
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center gap-8 sm:gap-12 mt-10 sm:mt-14"
        >
          <div className="text-center">
            <p className="font-heading font-bold text-2xl sm:text-3xl text-white">
              <AnimatedValue target={95} suffix="%" inView={isInView} />
            </p>
            <p className="text-white/40 text-xs sm:text-sm mt-1">Nylon</p>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <p className="font-heading font-bold text-2xl sm:text-3xl text-white">
              <AnimatedValue target={5} suffix="%" inView={isInView} />
            </p>
            <p className="text-white/40 text-xs sm:text-sm mt-1">Spandex</p>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <p className="font-heading font-bold text-2xl sm:text-3xl text-white">
              <AnimatedValue target={60} suffix="" inView={isInView} />
            </p>
            <p className="text-white/40 text-xs sm:text-sm mt-1">cm paling kecil</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
