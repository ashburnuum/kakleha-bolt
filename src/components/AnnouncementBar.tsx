import { motion } from 'framer-motion';
import { Truck, CreditCard, Clock } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-kakleha-red text-white text-xs sm:text-sm py-2.5 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 sm:gap-8 whitespace-nowrap">
        <span className="flex items-center gap-1.5">
          <Truck size={14} className="text-kakleha-sand flex-shrink-0" />
          <span>Pos Seluruh Malaysia</span>
        </span>
        <span className="hidden sm:flex items-center gap-1.5">
          <CreditCard size={14} className="text-kakleha-sand flex-shrink-0" />
          <span>COD Tersedia</span>
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={14} className="text-kakleha-sand flex-shrink-0" />
          <span>Stok Terhad!</span>
        </span>
      </div>
    </motion.div>
  );
}
