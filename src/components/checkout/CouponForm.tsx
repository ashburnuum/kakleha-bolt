import { useState } from 'react';
import { Tag, X, Loader2 } from 'lucide-react';

interface Props {
  couponCode: string;
  setCouponCode: (v: string) => void;
  onApply: (discount: number) => void;
  onRemove: () => void;
  selectedPackageId: string;
}

export default function CouponForm({ couponCode, setCouponCode, onApply, onRemove, selectedPackageId }: Props) {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [applied, setApplied] = useState(false);

  async function handleApply() {
    if (!inputValue.trim()) return;
    setIsLoading(true);
    setError('');

    // Simulated coupon validation - replace with actual API call
    await new Promise((r) => setTimeout(r, 800));

    // For now, no valid coupons - this would hit the backend
    setError('Kod kupon tak sah atau dah tamat.');
    setIsLoading(false);
  }

  function handleRemove() {
    setApplied(false);
    setInputValue('');
    setCouponCode('');
    onRemove();
    setError('');
  }

  if (applied && couponCode) {
    return (
      <div className="bg-white rounded-2xl border border-kakleha-success/30 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Tag size={14} className="text-kakleha-success" />
          <span className="text-sm text-kakleha-charcoal font-medium">{couponCode}</span>
          <span className="text-xs text-kakleha-success">Kupon berjaya diguna!</span>
        </div>
        <button type="button" onClick={handleRemove} className="p-1 rounded-full hover:bg-kakleha-blush">
          <X size={14} className="text-kakleha-grey" />
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <h3 className="font-heading font-semibold text-sm text-kakleha-charcoal">Kod Kupon</h3>
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value.toUpperCase())}
          placeholder="Masukkan kod kupon"
          className="flex-1 px-4 py-3 rounded-xl border border-kakleha-blush text-sm bg-white focus:outline-none focus:ring-2 focus:ring-kakleha-red/20 focus:border-kakleha-red"
        />
        <button
          type="button"
          onClick={handleApply}
          disabled={isLoading || !inputValue.trim()}
          className="px-5 py-3 rounded-xl bg-kakleha-charcoal text-white text-sm font-medium hover:bg-kakleha-charcoal/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-w-[72px] flex items-center justify-center"
        >
          {isLoading ? <Loader2 size={16} className="animate-spin" /> : 'Guna'}
        </button>
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
