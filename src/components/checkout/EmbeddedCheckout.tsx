import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, HelpCircle } from 'lucide-react';
import CheckoutPackageSelector from '@/components/checkout/CheckoutPackageSelector';
import CustomerForm from '@/components/checkout/CustomerForm';
import ShippingForm from '@/components/checkout/ShippingForm';
import PaymentMethodSelector from '@/components/checkout/PaymentMethodSelector';
import CouponForm from '@/components/checkout/CouponForm';
import OrderSummary from '@/components/checkout/OrderSummary';
import CheckoutTrustCards from '@/components/checkout/CheckoutTrustCards';
import SizeGuideModal from '@/components/checkout/SizeGuideModal';
import HowToOrderModal from '@/components/checkout/HowToOrderModal';
import {
  productConfig,
  calculateCheckoutTotal,
  trackEvent,
  type Package,
  type PaymentMethod,
  type CheckoutPayload,
} from '@/config/product';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let supabaseClient: SupabaseClient | null = null;
function getSupabase(): SupabaseClient {
  if (!supabaseClient) {
    supabaseClient = createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY
    );
  }
  return supabaseClient;
}

interface EmbeddedCheckoutProps {
  selectedPackageId: string;
  onPackageSelect: (id: string) => void;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  addressLine1?: string;
  city?: string;
  postcode?: string;
  state?: string;
  terms?: string;
  [key: string]: string | undefined;
}

export default function EmbeddedCheckout({ selectedPackageId, onPackageSelect }: EmbeddedCheckoutProps) {
  const selectedPkg = productConfig.packages.find((p) => p.id === selectedPackageId) ?? productConfig.packages[1];
  const formRef = useRef<HTMLFormElement>(null);

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cod');
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState('');

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [postcode, setPostcode] = useState('');
  const [state, setState] = useState('');
  const [marketingWhatsapp, setMarketingWhatsapp] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [orderSuccess, setOrderSuccess] = useState<{ orderNumber: string; total: number } | null>(null);

  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [showHowToOrder, setShowHowToOrder] = useState(false);

  const pricing = calculateCheckoutTotal(selectedPkg, paymentMethod, couponDiscount);

  function normalizePhone(raw: string): string {
    const digits = raw.replace(/[\s\-\(\)]/g, '');
    if (digits.startsWith('+60')) return digits.slice(1);
    if (digits.startsWith('60')) return digits;
    if (digits.startsWith('0')) return '6' + digits;
    return '60' + digits;
  }

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!fullName.trim() || fullName.trim().length < 3) e.fullName = 'Sila masukkan nama penuh you.';
    const normalized = normalizePhone(phone);
    if (!normalized || normalized.length < 10 || normalized.length > 12) e.phone = 'Sila masukkan nombor telefon yang betul.';
    if (paymentMethod === 'online' && email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = 'Sila masukkan email yang betul.';
    }
    if (!addressLine1.trim() || addressLine1.trim().length < 5) e.addressLine1 = 'Sila masukkan alamat penghantaran.';
    if (!city.trim()) e.city = 'Sila masukkan bandar.';
    if (!/^\d{5}$/.test(postcode)) e.postcode = 'Poskod mesti 5 digit.';
    if (!state) e.state = 'Sila pilih negeri.';
    if (!termsAccepted) e.terms = 'Sila tandakan untuk bersetuju dengan terma dan syarat.';
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;

    setSubmitError('');
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.querySelector(`[data-field="${firstErrorField}"]`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      (el as HTMLElement)?.focus?.();
      trackEvent('checkout_validation_error', { fields: Object.keys(validationErrors) });
      return;
    }

    setIsSubmitting(true);
    trackEvent('submit_' + paymentMethod + '_order', { packageId: selectedPkg.id });

    const idempotencyKey = crypto.randomUUID();
    const payload: CheckoutPayload = {
      packageId: selectedPkg.id,
      customer: { fullName: fullName.trim(), phone: normalizePhone(phone), email: email || undefined },
      shippingAddress: {
        addressLine1: addressLine1.trim(),
        addressLine2: addressLine2.trim() || undefined,
        city: city.trim(),
        postcode,
        state,
        country: 'Malaysia',
      },
      paymentMethod,
      couponCode: couponCode || undefined,
      consent: { marketingWhatsapp, termsAccepted },
      idempotencyKey,
    };

    try {
      const { data, error } = await getSupabase().from('orders').insert({
        idempotency_key: idempotencyKey,
        package_id: payload.packageId,
        customer_name: payload.customer.fullName,
        customer_phone: payload.customer.phone,
        customer_email: payload.customer.email || null,
        address_line1: payload.shippingAddress.addressLine1,
        address_line2: payload.shippingAddress.addressLine2 || null,
        city: payload.shippingAddress.city,
        postcode: payload.shippingAddress.postcode,
        state: payload.shippingAddress.state,
        country: payload.shippingAddress.country,
        payment_method: payload.paymentMethod,
        coupon_code: payload.couponCode || null,
        subtotal: pricing.subtotal,
        shipping_fee: pricing.shipping,
        online_discount: pricing.onlineDiscount,
        coupon_discount: pricing.couponDiscount,
        total: pricing.total,
        consent_whatsapp: payload.consent.marketingWhatsapp,
        status: paymentMethod === 'cod' ? 'confirmed' : 'pending_payment',
      }).select('order_number').single();

      if (error) throw error;

      trackEvent('order_created', {
        orderNumber: data.order_number,
        value: pricing.total,
        currency: 'MYR',
        payment_method: paymentMethod,
      });

      if (paymentMethod === 'online') {
        trackEvent('redirect_online_payment', { orderNumber: data.order_number });
        setOrderSuccess({ orderNumber: data.order_number, total: pricing.total });
      } else {
        setOrderSuccess({ orderNumber: data.order_number, total: pricing.total });
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : '';
      if (msg.includes('duplicate') || msg.includes('idempotency')) {
        setSubmitError('Pesanan ini dah dihantar. Sila semak status pesanan you.');
      } else {
        setSubmitError('Pesanan belum berjaya dihantar. Maklumat you masih disimpan. Sila cuba sekali lagi.');
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  if (orderSuccess) {
    return (
      <section id="checkout" className="py-12 sm:py-16 lg:py-20 bg-kakleha-blush/30">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl border border-kakleha-blush p-8 sm:p-10 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-kakleha-success/10 flex items-center justify-center">
              <ShieldCheck size={32} className="text-kakleha-success" />
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-kakleha-charcoal mb-3">
              Pesanan Berjaya Diterima!
            </h2>
            <p className="text-kakleha-grey mb-6">
              Nombor pesanan: <span className="font-semibold text-kakleha-charcoal">{orderSuccess.orderNumber}</span>
            </p>
            {paymentMethod === 'cod' && (
              <div className="bg-kakleha-cream rounded-2xl p-5 text-left space-y-2">
                <p className="text-sm text-kakleha-charcoal font-medium">Jumlah bayar kepada kurier:</p>
                <p className="text-2xl font-bold text-kakleha-red">
                  {new Intl.NumberFormat('ms-MY', { style: 'currency', currency: 'MYR' }).format(orderSuccess.total)}
                </p>
                <p className="text-xs text-kakleha-grey">Sediakan jumlah bayaran yang betul-betul semasa penghantaran.</p>
              </div>
            )}
            {paymentMethod === 'online' && (
              <div className="bg-kakleha-cream rounded-2xl p-5 text-left space-y-2">
                <p className="text-sm text-kakleha-charcoal font-medium">Jumlah dibayar:</p>
                <p className="text-2xl font-bold text-kakleha-success">
                  {new Intl.NumberFormat('ms-MY', { style: 'currency', currency: 'MYR' }).format(orderSuccess.total)}
                </p>
                <p className="text-xs text-kakleha-grey">Pembayaran online berjaya.</p>
              </div>
            )}
            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-kakleha-grey">
              <span className="flex items-center gap-1"><Truck size={14} /> Penghantaran seluruh Malaysia</span>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="checkout" className="py-12 sm:py-16 lg:py-20 bg-kakleha-blush/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-kakleha-charcoal mb-2">
            Lengkapkan Pesanan You
          </h2>
          <p className="text-kakleha-grey text-sm sm:text-base max-w-lg mx-auto">
            Pilih pakej, isi maklumat penghantaran dan tentukan cara pembayaran.
          </p>
          <div className="flex items-center justify-center gap-4 mt-3 text-xs text-kakleha-grey">
            <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-kakleha-success" /> Checkout selamat</span>
            <span className="flex items-center gap-1"><Truck size={12} className="text-kakleha-success" /> COD tersedia</span>
            <button
              onClick={() => setShowHowToOrder(true)}
              className="flex items-center gap-1 text-kakleha-red hover:underline"
            >
              <HelpCircle size={12} /> Cara Tempah
            </button>
          </div>
        </motion.div>

        {/* === MOBILE: Clean form, no block backgrounds === */}
        <form ref={formRef} onSubmit={handleSubmit} noValidate className="lg:hidden space-y-4">
          <CheckoutPackageSelector
            packages={productConfig.packages}
            selectedId={selectedPackageId}
            onSelect={onPackageSelect}
          />

          {/* Size row */}
          <div className="flex items-center justify-between px-1">
            <span className="text-sm text-kakleha-charcoal font-medium">Saiz: <span className="text-kakleha-red font-semibold">Free Size</span></span>
            <button
              type="button"
              onClick={() => { setShowSizeGuide(true); trackEvent('open_size_guide'); }}
              className="text-xs text-kakleha-red font-medium hover:underline"
            >
              Semak Saiz
            </button>
          </div>

          <CustomerForm
            fullName={fullName} setFullName={setFullName}
            phone={phone} setPhone={setPhone}
            email={email} setEmail={setEmail}
            paymentMethod={paymentMethod}
            errors={errors}
          />

          <ShippingForm
            addressLine1={addressLine1} setAddressLine1={setAddressLine1}
            addressLine2={addressLine2} setAddressLine2={setAddressLine2}
            city={city} setCity={setCity}
            postcode={postcode} setPostcode={setPostcode}
            state={state} setState={setState}
            errors={errors}
          />

          <PaymentMethodSelector
            selected={paymentMethod}
            onSelect={(m) => { setPaymentMethod(m); trackEvent('select_payment_method', { method: m }); }}
          />

          <CouponForm
            couponCode={couponCode}
            setCouponCode={setCouponCode}
            onApply={(discount) => setCouponDiscount(discount)}
            onRemove={() => { setCouponDiscount(0); setCouponCode(''); }}
            selectedPackageId={selectedPackageId}
          />

          <OrderSummary pkg={selectedPkg} pricing={pricing} paymentMethod={paymentMethod} />

          <CheckoutTrustCards />

          {/* Consent */}
          <div className="space-y-2.5">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={marketingWhatsapp}
                onChange={(e) => setMarketingWhatsapp(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-kakleha-grey/40 text-kakleha-red focus:ring-kakleha-red/20"
              />
              <span className="text-xs text-kakleha-grey">Saya bersetuju menerima promosi melalui WhatsApp.</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer" data-field="terms">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-kakleha-grey/40 text-kakleha-red focus:ring-kakleha-red/20"
              />
              <span className="text-xs text-kakleha-grey">
                Dengan membuat pesanan, saya bersetuju dengan{' '}
                <a href={productConfig.policies.terms} className="text-kakleha-red underline">Terma</a>,{' '}
                <a href={productConfig.policies.privacy} className="text-kakleha-red underline">Polisi Privasi</a> dan{' '}
                <a href={productConfig.policies.shipping} className="text-kakleha-red underline">Polisi Penghantaran</a>.
              </span>
            </label>
            {errors.terms && <p className="text-xs text-red-500 ml-7">{errors.terms}</p>}
          </div>

          <SubmitButton paymentMethod={paymentMethod} total={pricing.total} isSubmitting={isSubmitting} />
          {submitError && <p className="text-sm text-red-600 text-center">{submitError}</p>}
          <div className="flex items-center justify-center gap-3 text-[10px] text-kakleha-grey pb-4">
            <span className="flex items-center gap-1"><ShieldCheck size={10} /> Pembayaran Selamat</span>
            <span className="flex items-center gap-1"><Truck size={10} /> COD Seluruh Malaysia</span>
          </div>
        </form>

        {/* === DESKTOP: Two-column layout === */}
        <form ref={formRef} onSubmit={handleSubmit} noValidate className="hidden lg:grid lg:grid-cols-[1fr_400px] gap-8 items-start">
          {/* Left column */}
          <div className="space-y-6">
            <CheckoutPackageSelector
              packages={productConfig.packages}
              selectedId={selectedPackageId}
              onSelect={onPackageSelect}
            />

            {/* Size row */}
            <div className="bg-white rounded-2xl border border-kakleha-blush/60 px-5 py-4 flex items-center justify-between">
              <span className="text-sm text-kakleha-charcoal font-medium">Saiz: <span className="text-kakleha-red font-semibold">Free Size</span></span>
              <button
                type="button"
                onClick={() => { setShowSizeGuide(true); trackEvent('open_size_guide'); }}
                className="text-xs text-kakleha-red font-medium hover:underline"
              >
                Semak Saiz
              </button>
            </div>

            <CustomerForm
              fullName={fullName} setFullName={setFullName}
              phone={phone} setPhone={setPhone}
              email={email} setEmail={setEmail}
              paymentMethod={paymentMethod}
              errors={errors}
            />

            <ShippingForm
              addressLine1={addressLine1} setAddressLine1={setAddressLine1}
              addressLine2={addressLine2} setAddressLine2={setAddressLine2}
              city={city} setCity={setCity}
              postcode={postcode} setPostcode={setPostcode}
              state={state} setState={setState}
              errors={errors}
            />

            <PaymentMethodSelector
              selected={paymentMethod}
              onSelect={(m) => { setPaymentMethod(m); trackEvent('select_payment_method', { method: m }); }}
            />

            <CouponForm
              couponCode={couponCode}
              setCouponCode={setCouponCode}
              onApply={(discount) => setCouponDiscount(discount)}
              onRemove={() => { setCouponDiscount(0); setCouponCode(''); }}
              selectedPackageId={selectedPackageId}
            />

            {/* Consent */}
            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={marketingWhatsapp}
                  onChange={(e) => setMarketingWhatsapp(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-kakleha-grey/40 text-kakleha-red focus:ring-kakleha-red/20"
                />
                <span className="text-xs text-kakleha-grey">Saya bersetuju menerima promosi melalui WhatsApp.</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer" data-field="terms">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-kakleha-grey/40 text-kakleha-red focus:ring-kakleha-red/20"
                />
                <span className="text-xs text-kakleha-grey">
                  Dengan membuat pesanan, saya bersetuju dengan{' '}
                  <a href={productConfig.policies.terms} className="text-kakleha-red underline">Terma</a>,{' '}
                  <a href={productConfig.policies.privacy} className="text-kakleha-red underline">Polisi Privasi</a> dan{' '}
                  <a href={productConfig.policies.shipping} className="text-kakleha-red underline">Polisi Penghantaran</a>.
                </span>
              </label>
              {errors.terms && <p className="text-xs text-red-500 ml-7">{errors.terms}</p>}
            </div>
          </div>

          {/* Right column (desktop sticky) */}
          <div>
            <div className="sticky top-24 space-y-5">
              <OrderSummary pkg={selectedPkg} pricing={pricing} paymentMethod={paymentMethod} />
              <CheckoutTrustCards />
              <SubmitButton paymentMethod={paymentMethod} total={pricing.total} isSubmitting={isSubmitting} />
              {submitError && <p className="mt-3 text-sm text-red-600 text-center">{submitError}</p>}
              <div className="flex items-center justify-center gap-3 text-[10px] text-kakleha-grey pt-2">
                <span className="flex items-center gap-1"><ShieldCheck size={10} /> Pembayaran Selamat</span>
                <span className="flex items-center gap-1"><Truck size={10} /> COD Seluruh Malaysia</span>
              </div>
            </div>
          </div>
        </form>
      </div>

      <SizeGuideModal open={showSizeGuide} onClose={() => setShowSizeGuide(false)} />
      <HowToOrderModal open={showHowToOrder} onClose={() => setShowHowToOrder(false)} />
    </section>
  );
}

function SubmitButton({ paymentMethod, total, isSubmitting }: { paymentMethod: PaymentMethod; total: number; isSubmitting: boolean }) {
  const label = paymentMethod === 'cod' ? 'Buat Pesanan COD' : 'Bayar Online Sekarang';
  const formatted = new Intl.NumberFormat('ms-MY', { style: 'currency', currency: 'MYR' }).format(total);

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-kakleha-red text-white font-semibold text-base hover:bg-kakleha-burgundy transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-kakleha-red/20 min-h-[56px]"
    >
      <span>{isSubmitting ? 'Memproses…' : label}</span>
      <span className="text-white/90 font-bold">{formatted}</span>
    </button>
  );
}
