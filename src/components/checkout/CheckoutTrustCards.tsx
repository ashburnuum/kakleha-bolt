import { Truck, ShieldCheck } from 'lucide-react';
import { policyConfig } from '@/config/product';

export default function CheckoutTrustCards() {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
      <div className="bg-white/80 rounded-2xl border border-kakleha-blush/50 p-3 sm:p-4 text-center">
        <div className="w-8 h-8 sm:w-9 sm:h-9 mx-auto mb-1.5 sm:mb-2 rounded-xl bg-kakleha-blush flex items-center justify-center">
          <Truck size={15} className="text-kakleha-red" />
        </div>
        <p className="text-xs font-semibold text-kakleha-charcoal">Jaminan COD</p>
        <p className="text-[10px] text-kakleha-grey mt-0.5 leading-tight">Bayar tunai apabila barang sampai.</p>
      </div>
      <div className="bg-white/80 rounded-2xl border border-kakleha-blush/50 p-3 sm:p-4 text-center">
        <div className="w-8 h-8 sm:w-9 sm:h-9 mx-auto mb-1.5 sm:mb-2 rounded-xl bg-kakleha-blush flex items-center justify-center">
          <ShieldCheck size={15} className="text-kakleha-red" />
        </div>
        <p className="text-xs font-semibold text-kakleha-charcoal">Bantuan Selepas Beli</p>
        <p className="text-[10px] text-kakleha-grey mt-0.5 leading-tight">
          {policyConfig.exchangeWindowDays} hari bantuan selepas pembelian.
        </p>
      </div>
    </div>
  );
}
