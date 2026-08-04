import { User, Mail, ChevronDown } from 'lucide-react';
import { type PaymentMethod } from '@/config/product';

interface Props {
  fullName: string; setFullName: (v: string) => void;
  phone: string; setPhone: (v: string) => void;
  email: string; setEmail: (v: string) => void;
  paymentMethod: PaymentMethod;
  errors: Record<string, string | undefined>;
}

export default function CustomerForm({ fullName, setFullName, phone, setPhone, email, setEmail, paymentMethod, errors }: Props) {
  return (
    <div className="space-y-3 lg:bg-white lg:rounded-2xl lg:border lg:border-kakleha-blush/60 lg:p-5">
      <h3 className="font-heading font-semibold text-base text-kakleha-charcoal">Maklumat Diri</h3>

      <div data-field="fullName">
        <div className="relative">
          <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-kakleha-grey/50 pointer-events-none" />
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Nama Penuh You"
            aria-label="Nama Penuh"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'err-fullName' : undefined}
            className={`w-full pl-11 pr-4 py-3.5 rounded-xl border text-[16px] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-kakleha-red/20 focus:border-kakleha-red ${
              errors.fullName ? 'border-red-400' : 'border-kakleha-blush'
            }`}
          />
        </div>
        {errors.fullName && <p id="err-fullName" className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
      </div>

      <div data-field="phone">
        <div className="relative flex items-stretch">
          <div className="flex items-center gap-1.5 pl-4 pr-2 py-3.5 rounded-l-xl border border-r-0 border-kakleha-blush bg-kakleha-cream/50 select-none flex-shrink-0">
            <span className="text-lg leading-none">🇲🇾</span>
            <span className="text-sm font-medium text-kakleha-charcoal">+60</span>
            <ChevronDown size={14} className="text-kakleha-grey/50" />
          </div>
          <input
            type="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Nombor Telefon"
            aria-label="Nombor Telefon"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'err-phone' : undefined}
            className={`flex-1 min-w-0 px-4 py-3.5 rounded-r-xl border text-[16px] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-kakleha-red/20 focus:border-kakleha-red ${
              errors.phone ? 'border-red-400' : 'border-kakleha-blush'
            }`}
          />
        </div>
        {errors.phone && <p id="err-phone" className="text-xs text-red-500 mt-1">{errors.phone}</p>}
      </div>

      <div data-field="email">
        <div className="relative">
          <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-kakleha-grey/50 pointer-events-none" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={paymentMethod === 'online' ? 'Email (wajib)' : 'Email (kalau ada)'}
            aria-label="Email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'err-email' : undefined}
            className={`w-full pl-11 pr-4 py-3.5 rounded-xl border text-[16px] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-kakleha-red/20 focus:border-kakleha-red ${
              errors.email ? 'border-red-400' : 'border-kakleha-blush'
            }`}
          />
        </div>
        {errors.email && <p id="err-email" className="text-xs text-red-500 mt-1">{errors.email}</p>}
      </div>
    </div>
  );
}
