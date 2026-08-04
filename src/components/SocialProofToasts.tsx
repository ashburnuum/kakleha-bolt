import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const proofData = [
  { name: 'Ain', state: 'Selangor', qty: 14, pkg: 'Paling Laris' },
  { name: 'Siti', state: 'Johor', qty: 28, pkg: 'Jimat Maksimum' },
  { name: 'Farah', state: 'KL', qty: 5, pkg: 'Cuba Dulu' },
  { name: 'Zarina', state: 'Perak', qty: 14, pkg: 'Paling Laris' },
  { name: 'Khadijah', state: 'Pahang', qty: 28, pkg: 'Jimat Maksimum' },
  { name: 'Noor', state: 'Kedah', qty: 14, pkg: 'Paling Laris' },
  { name: 'Aisyah', state: 'Melaka', qty: 5, pkg: 'Cuba Dulu' },
  { name: 'Hana', state: 'Penang', qty: 28, pkg: 'Jimat Maksimum' },
  { name: 'Balkis', state: 'Kelantan', qty: 14, pkg: 'Paling Laris' },
  { name: 'Ruzanna', state: 'Sabah', qty: 14, pkg: 'Paling Laris' },
];

function getTimeAgo(): string {
  const minutes = Math.floor(Math.random() * 45) + 2;
  return `${minutes} minit lepas`;
}

export default function SocialProofToasts() {
  const [current, setCurrent] = useState<{ name: string; state: string; qty: number; pkg: string; time: string } | null>(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const showNext = useCallback(() => {
    const item = proofData[index % proofData.length];
    setCurrent({ ...item, time: getTimeAgo() });
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 4000);

    setIndex((prev) => prev + 1);
  }, [index]);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      showNext();
    }, 8000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!visible && index > 0) {
      const nextTimeout = setTimeout(() => {
        showNext();
      }, 6000 + Math.random() * 4000);
      return () => clearTimeout(nextTimeout);
    }
  }, [visible, index, showNext]);

  return (
    <div className="fixed bottom-20 left-4 z-[100] pointer-events-none sm:bottom-6 sm:left-6">
      <AnimatePresence>
        {visible && current && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="pointer-events-auto bg-white rounded-2xl shadow-xl border border-kakleha-blush/80 px-4 py-3 max-w-[280px] sm:max-w-[320px]"
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-kakleha-blush flex items-center justify-center flex-shrink-0">
                <ShoppingBag size={16} className="text-kakleha-red" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-kakleha-charcoal font-medium leading-snug">
                  {current.name} dari {current.state}
                </p>
                <p className="text-xs text-kakleha-grey mt-0.5">
                  Baru order {current.qty} helai · {current.pkg}
                </p>
                <p className="text-[10px] text-kakleha-grey/70 mt-1">{current.time}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
