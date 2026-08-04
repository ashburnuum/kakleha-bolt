import { useState } from 'react';
import { X, Ruler, Check, AlertCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { productConfig } from '@/config/product';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SizeGuideModal({ open, onClose }: Props) {
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  const [result, setResult] = useState<'fit' | 'tight' | 'none' | null>(null);

  const waistMin = 60;
  const waistMax = 105;
  const hipMin = 70;
  const hipMax = 130;

  function handleCheck() {
    const w = parseInt(waist, 10);
    const h = parseInt(hip, 10);
    if (!w || !h) {
      setResult('none');
      return;
    }
    if (w >= waistMin && w <= waistMax && h >= hipMin && h <= hipMax) {
      setResult('fit');
    } else {
      setResult('tight');
    }
  }

  function handleClose() {
    setResult(null);
    setWaist('');
    setHip('');
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-kakleha-blush flex items-center justify-center hover:bg-kakleha-sand transition-colors"
              aria-label="Tutup"
            >
              <X size={16} className="text-kakleha-charcoal" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-kakleha-blush flex items-center justify-center">
                <Ruler size={20} className="text-kakleha-red" />
              </div>
              <h3 className="font-heading font-bold text-lg text-kakleha-charcoal">Semak Saiz</h3>
            </div>

            {/* Range info */}
            <div className="bg-kakleha-cream rounded-2xl p-4 mb-4">
              <p className="text-xs text-kakleha-grey font-medium uppercase tracking-wide mb-2">Julat Saiz</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-semibold text-kakleha-charcoal">Pinggang</p>
                  <p className="text-lg font-bold text-kakleha-red">{productConfig.measurements.waist}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-kakleha-charcoal">Pinggul</p>
                  <p className="text-lg font-bold text-kakleha-red">{productConfig.measurements.hip}</p>
                </div>
              </div>
            </div>

            {/* Input form */}
            <div className="space-y-3 mb-4">
              <p className="text-sm font-semibold text-kakleha-charcoal">Masukkan ukuran you:</p>
              <div>
                <label className="block text-xs text-kakleha-grey mb-1">Pinggang (cm)</label>
                <input
                  type="number"
                  inputMode="numeric"
                  value={waist}
                  onChange={(e) => setWaist(e.target.value)}
                  placeholder="Contoh: 75"
                  className="w-full px-4 py-3 rounded-xl border border-kakleha-blush text-[16px] bg-white focus:outline-none focus:ring-2 focus:ring-kakleha-red/20 focus:border-kakleha-red"
                />
              </div>
              <div>
                <label className="block text-xs text-kakleha-grey mb-1">Pinggul (cm)</label>
                <input
                  type="number"
                  inputMode="numeric"
                  value={hip}
                  onChange={(e) => setHip(e.target.value)}
                  placeholder="Contoh: 95"
                  className="w-full px-4 py-3 rounded-xl border border-kakleha-blush text-[16px] bg-white focus:outline-none focus:ring-2 focus:ring-kakleha-red/20 focus:border-kakleha-red"
                />
              </div>
              <button
                onClick={handleCheck}
                className="w-full py-3 rounded-xl bg-kakleha-red text-white text-sm font-semibold hover:bg-kakleha-burgundy transition-colors"
              >
                Semak Saiz
              </button>
            </div>

            {/* Result */}
            {result === 'fit' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-kakleha-success/10 rounded-2xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-kakleha-success/20 flex items-center justify-center flex-shrink-0">
                  <Check size={20} className="text-kakleha-success" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-kakleha-success">Saiz Sesuai!</p>
                  <p className="text-xs text-kakleha-grey">Ukuran you dalam julat Free Size. KakLeha™ akan muat dengan selesa.</p>
                </div>
              </motion.div>
            )}
            {result === 'tight' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-kakleha-warning/10 rounded-2xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-kakleha-warning/20 flex items-center justify-center flex-shrink-0">
                  <AlertCircle size={20} className="text-kakleha-warning" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-kakleha-warning">Di Luar Julat</p>
                  <p className="text-xs text-kakleha-grey">Ukuran you di luar julat Free Size. Fabrik masih anjal, tapi sila ambil perhatian.</p>
                </div>
              </motion.div>
            )}
            {result === 'none' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 rounded-2xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <AlertCircle size={20} className="text-red-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-500">Sila Masukkan Ukuran</p>
                  <p className="text-xs text-kakleha-grey">Masukkan pinggang dan pinggul untuk semak saiz.</p>
                </div>
              </motion.div>
            )}

            {/* How to measure */}
            <div className="mt-4 space-y-1.5">
              <p className="text-xs font-semibold text-kakleha-charcoal">Cara Ukur</p>
              <p className="text-[11px] text-kakleha-grey leading-relaxed">
                <strong>Pinggang:</strong> Lilit pita ukur di bahagian paling kecil antara rusuk dan pusat.
              </p>
              <p className="text-[11px] text-kakleha-grey leading-relaxed">
                <strong>Pinggul:</strong> Lilit pita ukur di bahagian pinggul yang paling lebar.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
