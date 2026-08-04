import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Clock, Users, TrendingUp } from 'lucide-react';

const items = [
  { icon: ShieldCheck, text: 'Checkout 100% selamat' },
  { icon: Truck, text: 'COD seluruh Malaysia' },
  { icon: Clock, text: 'Stok promosi terhad' },
  { icon: Users, text: 'Ramai dah repeat order' },
  { icon: TrendingUp, text: 'Trending kalangan wanita' },
  { icon: ShieldCheck, text: 'Checkout 100% selamat' },
  { icon: Truck, text: 'COD seluruh Malaysia' },
  { icon: Clock, text: 'Stok promosi terhad' },
  { icon: Users, text: 'Ramai dah repeat order' },
  { icon: TrendingUp, text: 'Trending kalangan wanita' },
];

export default function SocialProofTicker() {
  return (
    <section className="bg-kakleha-charcoal py-3 overflow-hidden">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex items-center gap-8 whitespace-nowrap"
      >
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 flex-shrink-0">
            <item.icon size={14} className="text-kakleha-sand/60" />
            <span className="text-xs font-medium text-kakleha-sand/80">{item.text}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
