import { MapPin, Building2, Hash, Map } from 'lucide-react';
import { MALAYSIAN_STATES } from '@/config/product';

interface Props {
  addressLine1: string; setAddressLine1: (v: string) => void;
  addressLine2: string; setAddressLine2: (v: string) => void;
  city: string; setCity: (v: string) => void;
  postcode: string; setPostcode: (v: string) => void;
  state: string; setState: (v: string) => void;
  errors: Record<string, string | undefined>;
}

export default function ShippingForm({ addressLine1, setAddressLine1, addressLine2, setAddressLine2, city, setCity, postcode, setPostcode, state, setState, errors }: Props) {
  return (
    <div className="space-y-3 lg:bg-white lg:rounded-2xl lg:border lg:border-kakleha-blush/60 lg:p-5">
      <h3 className="font-heading font-semibold text-base text-kakleha-charcoal">Alamat Penghantaran</h3>

      <div data-field="addressLine1">
        <div className="relative">
          <MapPin size={16} className="absolute left-4 top-4 text-kakleha-grey/50 pointer-events-none" />
          <textarea
            rows={2}
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            placeholder="No. rumah, nama jalan, taman atau kampung"
            aria-label="Alamat Penghantaran"
            aria-invalid={!!errors.addressLine1}
            aria-describedby={errors.addressLine1 ? 'err-addr' : undefined}
            className={`w-full pl-11 pr-4 py-3.5 rounded-xl border text-[16px] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-kakleha-red/20 focus:border-kakleha-red resize-none ${
              errors.addressLine1 ? 'border-red-400' : 'border-kakleha-blush'
            }`}
          />
        </div>
        {errors.addressLine1 && <p id="err-addr" className="text-xs text-red-500 mt-1">{errors.addressLine1}</p>}
      </div>

      <div>
        <div className="relative">
          <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-kakleha-grey/30 pointer-events-none" />
          <input
            type="text"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
            placeholder="Tingkat, blok, unit (kalau ada)"
            aria-label="Alamat Baris 2"
            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-kakleha-blush text-[16px] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-kakleha-red/20 focus:border-kakleha-red"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <div data-field="city">
          <div className="relative">
            <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-kakleha-grey/50 pointer-events-none" />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Bandar"
              aria-label="Bandar"
              aria-invalid={!!errors.city}
              aria-describedby={errors.city ? 'err-city' : undefined}
              className={`w-full pl-11 pr-3 py-3.5 rounded-xl border text-[16px] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-kakleha-red/20 focus:border-kakleha-red ${
                errors.city ? 'border-red-400' : 'border-kakleha-blush'
              }`}
            />
          </div>
          {errors.city && <p id="err-city" className="text-xs text-red-500 mt-1">{errors.city}</p>}
        </div>
        <div data-field="postcode">
          <div className="relative">
            <Hash size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-kakleha-grey/50 pointer-events-none" />
            <input
              type="text"
              inputMode="numeric"
              maxLength={5}
              value={postcode}
              onChange={(e) => setPostcode(e.target.value.replace(/\D/g, '').slice(0, 5))}
              placeholder="Poskod"
              aria-label="Poskod"
              aria-invalid={!!errors.postcode}
              aria-describedby={errors.postcode ? 'err-postcode' : undefined}
              className={`w-full pl-11 pr-3 py-3.5 rounded-xl border text-[16px] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-kakleha-red/20 focus:border-kakleha-red ${
                errors.postcode ? 'border-red-400' : 'border-kakleha-blush'
              }`}
            />
          </div>
          {errors.postcode && <p id="err-postcode" className="text-xs text-red-500 mt-1">{errors.postcode}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <div data-field="state">
          <div className="relative">
            <Map size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-kakleha-grey/50 pointer-events-none z-10" />
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              aria-label="Negeri"
              aria-invalid={!!errors.state}
              aria-describedby={errors.state ? 'err-state' : undefined}
              className={`w-full pl-11 pr-4 py-3.5 rounded-xl border text-[16px] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-kakleha-red/20 focus:border-kakleha-red appearance-none ${
                errors.state ? 'border-red-400' : 'border-kakleha-blush'
              } ${!state ? 'text-kakleha-grey' : 'text-kakleha-charcoal'}`}
            >
              <option value="" disabled>Negeri</option>
              {MALAYSIAN_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          {errors.state && <p id="err-state" className="text-xs text-red-500 mt-1">{errors.state}</p>}
        </div>
        <div>
          <input
            type="text"
            value="Malaysia"
            readOnly
            aria-label="Negara"
            className="w-full px-4 py-3.5 rounded-xl border border-kakleha-blush text-[16px] bg-kakleha-cream/50 text-kakleha-charcoal cursor-not-allowed"
          />
        </div>
      </div>
    </div>
  );
}
