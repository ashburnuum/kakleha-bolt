import { Banknote, CreditCard, Check } from 'lucide-react';
import { type PaymentMethod, ONLINE_DISCOUNT_RATE } from '@/config/product';

interface Props {
  selected: PaymentMethod;
  onSelect: (m: PaymentMethod) => void;
}

export default function PaymentMethodSelector({ selected, onSelect }: Props) {
  return (
    <div className="space-y-3" role="radiogroup" aria-label="Cara Pembayaran">
      <h3 className="font-heading font-semibold text-base text-kakleha-charcoal">Cara Pembayaran</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* COD */}
        <button
          type="button"
          role="radio"
          aria-checked={selected === 'cod'}
          onClick={() => onSelect('cod')}
          className={`relative text-left rounded-2xl border-2 p-4 sm:p-5 transition-all min-h-[110px] flex flex-col justify-between ${
            selected === 'cod'
              ? 'border-kakleha-red bg-kakleha-blush/40'
              : 'border-kakleha-blush/80 bg-white hover:border-kakleha-red/30'
          }`}
        >
          {selected === 'cod' && (
            <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-kakleha-red flex items-center justify-center">
              <Check size={12} className="text-white" />
            </span>
          )}
          <div className="flex items-center gap-2.5 mb-2">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${selected === 'cod' ? 'bg-kakleha-red/10' : 'bg-kakleha-blush'}`}>
              <Banknote size={18} className="text-kakleha-red" />
            </div>
            <div>
              <p className="font-heading font-semibold text-sm text-kakleha-charcoal">Bayar Bila Barang Sampai</p>
              <p className="text-[10px] text-kakleha-grey">(COD)</p>
            </div>
          </div>
          <p className="text-xs text-kakleha-grey leading-relaxed">Bayar tunai kepada kurier bila barang sampai.</p>
          <span className="mt-2 inline-block text-[10px] px-2 py-0.5 rounded-full bg-kakleha-success/10 text-kakleha-success font-medium">
            100% Tanpa Risiko
          </span>
        </button>

        {/* Online */}
        <button
          type="button"
          role="radio"
          aria-checked={selected === 'online'}
          onClick={() => onSelect('online')}
          className={`relative text-left rounded-2xl border-2 p-4 sm:p-5 transition-all min-h-[110px] flex flex-col justify-between ${
            selected === 'online'
              ? 'border-kakleha-red bg-kakleha-blush/40'
              : 'border-kakleha-blush/80 bg-white hover:border-kakleha-red/30'
          }`}
        >
          {selected === 'online' && (
            <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-kakleha-red flex items-center justify-center">
              <Check size={12} className="text-white" />
            </span>
          )}
          <div className="flex items-center gap-2.5 mb-2">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${selected === 'online' ? 'bg-kakleha-red/10' : 'bg-kakleha-blush'}`}>
              <CreditCard size={18} className="text-kakleha-red" />
            </div>
            <div>
              <p className="font-heading font-semibold text-sm text-kakleha-charcoal">Bayar Online</p>
              <p className="text-[10px] text-kakleha-grey">FPX · Perbankan Internet</p>
            </div>
          </div>
          <p className="text-xs text-kakleha-grey leading-relaxed">Bayaran selamat melalui perbankan internet.</p>
          <span className="mt-2 inline-block text-[10px] px-2 py-0.5 rounded-full bg-kakleha-red/10 text-kakleha-red font-medium">
            Diskaun Extra {Math.round(ONLINE_DISCOUNT_RATE * 100)}%
          </span>
        </button>
      </div>
    </div>
  );
}
