import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FabricZoom() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 2.5, 4]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 0.85, 1], [0, 1, 1, 0.8, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.75], [0, 1, 1, 0]);
  const labelY = useTransform(scrollYProgress, [0.2, 0.4], [20, 0]);

  return (
    <section ref={ref} className="relative h-[200vh] sm:h-[250vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-kakleha-charcoal">
        {/* Fabric texture zoom visual */}
        <motion.div
          style={{ scale, opacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Simulated woven fabric pattern */}
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full">
            {/* Weave pattern */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div
                className="absolute inset-0 opacity-80"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.06) 2px, rgba(255,255,255,0.06) 4px),
                    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.04) 2px, rgba(255,255,255,0.04) 4px)
                  `,
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(180, 35, 47, 0.08) 6px, rgba(180, 35, 47, 0.08) 7px),
                    repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(180, 35, 47, 0.05) 6px, rgba(180, 35, 47, 0.05) 7px)
                  `,
                }}
              />
              {/* Fiber sheen */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.04]" />
            </div>

            {/* Glow ring */}
            <div className="absolute inset-4 rounded-full border border-white/10" />
            <div className="absolute inset-8 rounded-full border border-kakleha-red/20" />
          </div>
        </motion.div>

        {/* Text labels that appear mid-zoom */}
        <motion.div
          style={{ opacity: textOpacity, y: labelY }}
          className="relative z-10 text-center px-4"
        >
          <p className="text-kakleha-sand/50 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-3 sm:mb-4">
Zum Ke Dalam Fabrik
          </p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-6xl text-white leading-tight">
            95% Nylon
          </h2>
          <p className="font-heading font-bold text-xl sm:text-3xl lg:text-5xl text-kakleha-red/80 mt-1">
            5% Spandex
          </p>
          <p className="mt-4 sm:mt-6 text-kakleha-sand/40 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
Setiap helai fiber direka supaya lembut kat kulit, lapang angin, dan kekal bentuk walaupun selepas banyak kali cuci.
          </p>
        </motion.div>

        {/* Corner labels */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute bottom-8 left-4 sm:bottom-12 sm:left-8 lg:left-12"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-kakleha-red animate-pulse" />
            <span className="text-[10px] sm:text-xs text-white/40 font-medium tracking-wide uppercase">Sentuhan Licin</span>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute bottom-8 right-4 sm:bottom-12 sm:right-8 lg:right-12"
        >
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs text-white/40 font-medium tracking-wide uppercase">Ringan</span>
            <div className="w-2 h-2 rounded-full bg-kakleha-sand/50 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
