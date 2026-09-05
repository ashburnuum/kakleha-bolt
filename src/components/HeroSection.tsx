import { motion } from 'framer-motion';
import { Truck, RefreshCw, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-ms-charcoal"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white/[0.03] font-heading text-[200px] sm:text-[300px] font-bold select-none">MS</span>
        </div>
      </motion.div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ms-gold/40 bg-ms-gold/10 text-ms-gold-light text-xs font-medium tracking-widest uppercase mb-6"
          >
            Koleksi Baru 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.1] mb-6"
          >
            Keanggunan Dalam{' '}
            <span className="italic text-ms-gold-light">Setiap</span>{' '}
            Jahitan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-base sm:text-lg text-white/70 leading-relaxed max-w-lg mb-8"
          >
            Pakaian muslimah premium yang menggabungkan keanggunan moden dengan kesopanan. Direka khas untuk wanita yang menghargai kualiti.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#new-arrivals"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-ms-gold text-white font-medium text-sm tracking-wide uppercase hover:bg-ms-gold-light transition-all hover:shadow-lg hover:shadow-ms-gold/20"
            >
              Terokai Koleksi
            </a>
            <a
              href="#best-sellers"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white font-medium text-sm tracking-wide uppercase hover:bg-white/10 transition-all"
            >
              Pilihan Terlaris
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 mt-10"
          >
            <TrustPill icon={<Truck size={14} />} text="Penghantaran Percuma" />
            <TrustPill icon={<RefreshCw size={14} />} text="Pemulangan Mudah" />
            <TrustPill icon={<ShieldCheck size={14} />} text="Checkout Selamat" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function TrustPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="flex items-center gap-2 text-white/50 text-xs sm:text-sm">
      <span className="text-ms-gold-light">{icon}</span>
      {text}
    </span>
  );
}
