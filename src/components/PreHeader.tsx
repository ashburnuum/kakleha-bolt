import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Gift, Sparkles } from 'lucide-react';

const announcements = [
  { icon: Truck, text: 'Penghantaran Percuma untuk pesanan RM150+' },
  { icon: Gift, text: 'Koleksi Baru Telah Tiba — Terokai Sekarang' },
  { icon: Sparkles, text: 'COD Tersedia Seluruh Malaysia' },
];

export default function PreHeader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = announcements[index];
  const Icon = current.icon;

  return (
    <div className="bg-ms-charcoal text-white text-xs py-2.5 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <Icon size={13} className="text-ms-gold-light flex-shrink-0" />
            <span className="tracking-wide">{current.text}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
