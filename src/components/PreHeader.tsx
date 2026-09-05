import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Gift, Sparkles } from 'lucide-react';

const announcements = [
  { icon: Truck, text: 'Free Shipping on orders RM150+' },
  { icon: Gift, text: 'New Collection Has Arrived — Shop Now' },
  { icon: Sparkles, text: 'COD Available Nationwide' },
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
    <div className="fixed top-0 left-0 right-0 z-50 bg-ms-charcoal text-white text-xs py-2 px-4 overflow-hidden">
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
            <Icon size={12} className="text-ms-gold-light flex-shrink-0" />
            <span className="tracking-wider font-medium">{current.text}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
