import { motion } from 'framer-motion';
import { Check, Gift, Truck } from 'lucide-react';
import { type Package, getTotalQuantity, getPricePerPaidPiece, formatPrice } from '@/config/product';

interface Props {
  packages: Package[];
  selectedId: string;
  onSelect: (id: string) => void;
}

function getDiscountPercent(pkg: Package): number {
  if (!pkg.originalPrice || pkg.originalPrice <= pkg.price) return 0;
  return Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);
}

export default function CheckoutPackageSelector({ packages, selectedId, onSelect }: Props) {
  return (
    <div className="space-y-2.5" role="radiogroup" aria-label="Pilih Pakej">
      <h3 className="font-heading font-semibold text-base text-kakleha-charcoal">Pilih Pakej You</h3>
      {packages.map((pkg) => {
        const isSelected = pkg.id === selectedId;
        const total = getTotalQuantity(pkg);
        const perPiece = getPricePerPaidPiece(pkg);
        const discountPercent = getDiscountPercent(pkg);

        return (
          <motion.button
            key={pkg.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            whileTap={{ scale: 0.99 }}
            onClick={() => onSelect(pkg.id)}
            className={`w-full text-left rounded-2xl border-2 p-3 sm:p-4 transition-all relative ${
              isSelected
                ? 'border-kakleha-red bg-kakleha-blush/40 shadow-sm'
                : 'border-kakleha-blush/60 bg-white hover:border-kakleha-red/30'
            }`}
          >
            <div className="flex items-start gap-2.5 sm:gap-3">
              {/* Radio indicator */}
              <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                isSelected ? 'border-kakleha-red bg-kakleha-red' : 'border-kakleha-grey/30'
              }`}>
                {isSelected && <Check size={12} className="text-white" />}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className={`font-heading font-bold text-sm sm:text-base ${isSelected ? 'text-kakleha-charcoal' : 'text-kakleha-charcoal/80'}`}>
                    {pkg.name}
                  </span>
                  {pkg.badge && (
                    <span className={`text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                      isSelected ? 'bg-kakleha-red text-white' : 'bg-kakleha-blush text-kakleha-burgundy'
                    }`}>
                      {pkg.badge}
                    </span>
                  )}
                  {discountPercent > 0 && (
                    <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-full font-bold bg-kakleha-success/15 text-kakleha-success">
                      {discountPercent}% OFF
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 sm:gap-3 mt-1 text-[11px] sm:text-xs text-kakleha-grey flex-wrap">
                  <span>{pkg.paidQuantity} helai</span>
                  {pkg.freeQuantity > 0 && (
                    <span className="flex items-center gap-0.5 text-kakleha-success font-medium">
                      <Gift size={10} /> +{pkg.freeQuantity} percuma
                    </span>
                  )}
                  <span className="text-kakleha-charcoal font-medium">= {total} helai</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 mt-1">
                  {pkg.freeShipping && (
                    <span className="flex items-center gap-0.5 text-[10px] text-kakleha-success font-medium">
                      <Truck size={10} /> Penghantaran Percuma
                    </span>
                  )}
                  <span className="text-[10px] text-kakleha-grey">
                    ~{formatPrice(perPiece)}/helai
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="text-right flex-shrink-0">
                {pkg.originalPrice && pkg.originalPrice > pkg.price && (
                  <span className="block text-[10px] sm:text-xs text-kakleha-grey line-through">
                    {formatPrice(pkg.originalPrice)}
                  </span>
                )}
                <span className={`font-heading font-bold text-base sm:text-lg ${isSelected ? 'text-kakleha-red' : 'text-kakleha-charcoal'}`}>
                  {formatPrice(pkg.price)}
                </span>
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
