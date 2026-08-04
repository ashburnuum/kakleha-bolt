import { X, ShoppingBag, MapPin, Banknote, CheckCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  open: boolean;
  onClose: () => void;
}

const steps = [
  { icon: ShoppingBag, text: 'Pilih pakej yang sesuai' },
  { icon: MapPin, text: 'Masukkan maklumat penghantaran' },
  { icon: Banknote, text: 'Pilih COD atau bayar online' },
  { icon: CheckCircle, text: 'Tekan butang pesanan — siap!' },
];

export default function HowToOrderModal({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-kakleha-blush flex items-center justify-center hover:bg-kakleha-sand transition-colors"
              aria-label="Tutup"
            >
              <X size={16} className="text-kakleha-charcoal" />
            </button>

            <h3 className="font-heading font-bold text-lg text-kakleha-charcoal mb-5">Cara Tempah</h3>

            <div className="space-y-4">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-kakleha-blush flex items-center justify-center flex-shrink-0">
                    <step.icon size={16} className="text-kakleha-red" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-kakleha-red">{i + 1}.</span>
                    <span className="text-sm text-kakleha-charcoal">{step.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={onClose}
              className="mt-6 w-full py-3 rounded-xl bg-kakleha-red text-white text-sm font-semibold hover:bg-kakleha-burgundy transition-colors"
            >
              Faham, Teruskan
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
