import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { productConfig, trackEvent } from '@/config/product';

type Step = 'waist' | 'hip' | 'result';
type FitResult = 'fits' | 'tight' | 'no';

const WAIST_MIN = 60;
const WAIST_MAX = 105;
const HIP_MIN = 70;
const HIP_MAX = 130;

export default function FitGuide() {
  const [step, setStep] = useState<Step>('waist');
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  const [result, setResult] = useState<FitResult | null>(null);

  function handleWaistNext() {
    const val = parseFloat(waist);
    if (!val || val < 30 || val > 200) return;
    trackEvent('fit_quiz_waist', { value: val });
    setStep('hip');
  }

  function handleHipNext() {
    const val = parseFloat(hip);
    if (!val || val < 40 || val > 200) return;
    trackEvent('fit_quiz_hip', { value: val });

    const w = parseFloat(waist);
    const h = val;
    const waistFits = w >= WAIST_MIN && w <= WAIST_MAX;
    const hipFits = h >= HIP_MIN && h <= HIP_MAX;

    if (waistFits && hipFits) {
      setResult('fits');
    } else if ((w >= WAIST_MIN - 5 && w <= WAIST_MAX + 5) && (h >= HIP_MIN - 5 && h <= HIP_MAX + 5)) {
      setResult('tight');
    } else {
      setResult('no');
    }
    setStep('result');
  }

  function reset() {
    setStep('waist');
    setWaist('');
    setHip('');
    setResult(null);
  }

  return (
    <section id="saiz" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-kakleha-charcoal mb-2">
            Muat Tak Untuk Saya?
          </h2>
          <p className="text-kakleha-grey text-sm">
            Jawab 2 soalan je — terus tahu.
          </p>
        </motion.div>

        <div className="bg-kakleha-cream/60 rounded-3xl border border-kakleha-blush p-6 sm:p-8">
          {/* Progress indicator */}
          <div className="flex items-center gap-2 mb-6">
            <div className={`h-1.5 flex-1 rounded-full transition-colors ${step === 'waist' || step === 'hip' || step === 'result' ? 'bg-kakleha-red' : 'bg-kakleha-blush'}`} />
            <div className={`h-1.5 flex-1 rounded-full transition-colors ${step === 'hip' || step === 'result' ? 'bg-kakleha-red' : 'bg-kakleha-blush'}`} />
            <div className={`h-1.5 flex-1 rounded-full transition-colors ${step === 'result' ? 'bg-kakleha-red' : 'bg-kakleha-blush'}`} />
          </div>

          <AnimatePresence mode="wait">
            {step === 'waist' && (
              <motion.div
                key="waist"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-sm font-medium text-kakleha-charcoal mb-1">Soalan 1/2</p>
                <h3 className="font-heading font-bold text-lg text-kakleha-charcoal mb-4">
                  Berapa ukuran pinggang you? (cm)
                </h3>
                <p className="text-xs text-kakleha-grey mb-4">
                  Lilit pita ukur kat bahagian pinggang yang paling kecil (antara rusuk dan pusat).
                </p>
                <div className="flex gap-3">
                  <input
                    type="number"
                    inputMode="decimal"
                    value={waist}
                    onChange={(e) => setWaist(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleWaistNext()}
                    placeholder="cth: 78"
                    className="flex-1 px-4 py-3 rounded-xl border border-kakleha-blush bg-white text-kakleha-charcoal text-base focus:outline-none focus:border-kakleha-red focus:ring-1 focus:ring-kakleha-red/20"
                  />
                  <button
                    onClick={handleWaistNext}
                    disabled={!waist || parseFloat(waist) < 30}
                    className="px-6 py-3 rounded-xl bg-kakleha-red text-white text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-kakleha-burgundy transition-colors active:scale-[0.97]"
                  >
                    Seterusnya
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'hip' && (
              <motion.div
                key="hip"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-sm font-medium text-kakleha-charcoal mb-1">Soalan 2/2</p>
                <h3 className="font-heading font-bold text-lg text-kakleha-charcoal mb-4">
                  Berapa ukuran pinggul you? (cm)
                </h3>
                <p className="text-xs text-kakleha-grey mb-4">
                  Lilit pita ukur kat bahagian pinggul yang paling lebar.
                </p>
                <div className="flex gap-3">
                  <input
                    type="number"
                    inputMode="decimal"
                    value={hip}
                    onChange={(e) => setHip(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleHipNext()}
                    placeholder="cth: 95"
                    className="flex-1 px-4 py-3 rounded-xl border border-kakleha-blush bg-white text-kakleha-charcoal text-base focus:outline-none focus:border-kakleha-red focus:ring-1 focus:ring-kakleha-red/20"
                  />
                  <button
                    onClick={handleHipNext}
                    disabled={!hip || parseFloat(hip) < 40}
                    className="px-6 py-3 rounded-xl bg-kakleha-red text-white text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-kakleha-burgundy transition-colors active:scale-[0.97]"
                  >
                    Check
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'result' && result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center py-2"
              >
                {result === 'fits' && (
                  <>
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-kakleha-success/10 flex items-center justify-center">
                      <CheckCircle size={28} className="text-kakleha-success" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-kakleha-charcoal mb-2">
                      Confirm Muat!
                    </h3>
                    <p className="text-sm text-kakleha-grey mb-5">
                      Pinggang {waist} cm dan pinggul {hip} cm — dalam julat sempurna untuk {productConfig.brandName}. Anjal dia lagi confirm selesa.
                    </p>
                    <a
                      href="#checkout"
                      onClick={() => trackEvent('fit_quiz_to_packages')}
                      className="inline-flex items-center px-6 py-3 rounded-full bg-kakleha-red text-white text-sm font-semibold hover:bg-kakleha-burgundy transition-colors"
                    >
                      Buat Pesanan Sekarang
                    </a>
                  </>
                )}

                {result === 'tight' && (
                  <>
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-amber-50 flex items-center justify-center">
                      <CheckCircle size={28} className="text-amber-500" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-kakleha-charcoal mb-2">
                      Boleh Muat — Tapi Lebih Ketat
                    </h3>
                    <p className="text-sm text-kakleha-grey mb-5">
                      Ukuran you hampir dengan had julat. Fabrik memang anjal, jadi masih boleh pakai tapi fit dia akan lebih ketat.
                    </p>
                    <a
                      href="#checkout"
                      onClick={() => trackEvent('fit_quiz_to_packages_snug')}
                      className="inline-flex items-center px-6 py-3 rounded-full bg-kakleha-red text-white text-sm font-semibold hover:bg-kakleha-burgundy transition-colors"
                    >
                      Tengok Pakej
                    </a>
                  </>
                )}

                {result === 'no' && (
                  <>
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center">
                      <XCircle size={28} className="text-red-400" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-kakleha-charcoal mb-2">
                      Mungkin Tak Sesuai
                    </h3>
                    <p className="text-sm text-kakleha-grey mb-5">
                      Ukuran you di luar julat {productConfig.brandName} (pinggang {productConfig.measurements.waist}, pinggul {productConfig.measurements.hip}). Kami tak nak you beli kalau tak selesa.
                    </p>
                  </>
                )}

                <button
                  onClick={reset}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm text-kakleha-grey hover:text-kakleha-charcoal transition-colors"
                >
                  <RotateCcw size={14} />
                  Cuba lagi
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
