import { motion, AnimatePresence } from 'framer-motion';
import { productConfig, formatPrice, getTotalQuantity, handleCheckout, trackEvent, type Package } from '@/config/product';

interface StickyPurchaseBarProps {
  selectedId: string;
  visible: boolean;
}

function getDiscountPercent(pkg: Package): number {
  if (!pkg.originalPrice || pkg.originalPrice <= pkg.price) return 0;
  return Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);
}

export default function StickyPurchaseBar({ selectedId, visible }: StickyPurchaseBarProps) {
  const selectedPkg: Package = productConfig.packages.find((p) => p.id === selectedId) ?? productConfig.packages[1];
  const discountPercent = getDiscountPercent(selectedPkg);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-kakleha-blush shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:hidden"
        >
          <div className="px-4 py-3 flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-kakleha-grey truncate">{selectedPkg.name}</p>
              <div className="flex items-center gap-2 flex-wrap">
                {discountPercent > 0 && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full font-bold bg-kakleha-success/15 text-kakleha-success">
                    {discountPercent}% OFF
                  </span>
                )}
                {selectedPkg.originalPrice && selectedPkg.originalPrice > selectedPkg.price && (
                  <span className="text-xs text-kakleha-grey line-through">{formatPrice(selectedPkg.originalPrice)}</span>
                )}
                <span className="text-base font-bold text-kakleha-red">{formatPrice(selectedPkg.price)}</span>
                <span className="text-[10px] text-kakleha-grey">{getTotalQuantity(selectedPkg)} helai</span>
              </div>
            </div>
            <button
              onClick={() => { handleCheckout(selectedPkg); trackEvent('begin_checkout_sticky', { packageId: selectedPkg.id }); }}
              className="px-5 py-3 rounded-full bg-kakleha-red text-white text-sm font-semibold whitespace-nowrap hover:bg-kakleha-burgundy transition-colors"
            >
              Checkout
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
