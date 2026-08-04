import { Package as PkgIcon, Gift, Truck } from 'lucide-react';
import { type Package, type PaymentMethod, getTotalQuantity, formatPrice } from '@/config/product';

interface Props {
  pkg: Package;
  pricing: {
    subtotal: number;
    shipping: number;
    onlineDiscount: number;
    couponDiscount: number;
    total: number;
  };
  paymentMethod: PaymentMethod;
}

export default function OrderSummary({ pkg, pricing, paymentMethod }: Props) {
  const total = getTotalQuantity(pkg);

  return (
    <div className="bg-white rounded-2xl border border-kakleha-blush/60 p-5 sm:p-6" aria-live="polite" aria-atomic="true">
      <h3 className="font-heading font-semibold text-base text-kakleha-charcoal mb-4">Ringkasan Pesanan</h3>

      <div className="space-y-3 text-sm">
        {/* Package */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-kakleha-charcoal">
            <PkgIcon size={14} className="text-kakleha-red" />
            <span>{pkg.name}</span>
          </div>
          <span className="font-medium">{pkg.paidQuantity} helai</span>
        </div>

        {/* Free quantity */}
        {pkg.freeQuantity > 0 && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-kakleha-success">
              <Gift size={14} />
              <span>Hadiah Percuma</span>
            </div>
            <span className="font-medium text-kakleha-success">{pkg.freeQuantity} helai</span>
          </div>
        )}

        {/* Total received */}
        <div className="flex items-center justify-between pb-3 border-b border-kakleha-blush/60">
          <span className="text-kakleha-grey">Jumlah Diterima</span>
          <span className="font-semibold text-kakleha-charcoal">{total} helai</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-kakleha-grey">Harga Pakej</span>
          <span className="text-kakleha-charcoal">{formatPrice(pricing.subtotal)}</span>
        </div>

        {/* Shipping */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-kakleha-grey">
            <Truck size={13} />
            <span>Penghantaran</span>
          </div>
          {pkg.freeShipping ? (
            <span className="text-kakleha-success font-medium">PERCUMA</span>
          ) : (
            <span className="text-kakleha-charcoal">{formatPrice(pricing.shipping)}</span>
          )}
        </div>

        {/* Online discount */}
        {pricing.onlineDiscount > 0 && (
          <div className="flex items-center justify-between text-kakleha-success">
            <span>Diskaun Bayaran Online</span>
            <span className="font-medium">-{formatPrice(pricing.onlineDiscount)}</span>
          </div>
        )}

        {/* Coupon discount */}
        {pricing.couponDiscount > 0 && (
          <div className="flex items-center justify-between text-kakleha-success">
            <span>Diskaun Kupon</span>
            <span className="font-medium">-{formatPrice(pricing.couponDiscount)}</span>
          </div>
        )}

        {/* Total */}
        <div className="pt-3 border-t border-kakleha-blush/60 flex items-center justify-between">
          <span className="font-heading font-semibold text-kakleha-charcoal">
            {paymentMethod === 'cod' ? 'Jumlah Bayar (COD)' : 'Jumlah Bayar Online'}
          </span>
          <span className="font-heading font-bold text-2xl sm:text-3xl text-kakleha-charcoal">
            {formatPrice(pricing.total)}
          </span>
        </div>
      </div>
    </div>
  );
}
