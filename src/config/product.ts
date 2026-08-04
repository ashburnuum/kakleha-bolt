export interface Package {
  id: string;
  name: string;
  paidQuantity: number;
  freeQuantity: number;
  price: number;
  originalPrice: number | null;
  shippingFee: number;
  freeShipping: boolean;
  badge: string | null;
  defaultSelected: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  state: string;
  package: string;
  rating: number;
  text: string;
  verified: boolean;
}

export type PaymentMethod = "cod" | "online";

export interface CheckoutPayload {
  packageId: string;
  customer: {
    fullName: string;
    phone: string;
    email?: string;
  };
  shippingAddress: {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    postcode: string;
    state: string;
    country: string;
  };
  paymentMethod: PaymentMethod;
  couponCode?: string;
  consent: {
    marketingWhatsapp: boolean;
    termsAccepted: boolean;
  };
  idempotencyKey: string;
}

export const MALAYSIAN_STATES = [
  "Johor",
  "Kedah",
  "Kelantan",
  "Melaka",
  "Negeri Sembilan",
  "Pahang",
  "Perak",
  "Perlis",
  "Pulau Pinang",
  "Sabah",
  "Sarawak",
  "Selangor",
  "Terengganu",
  "Kuala Lumpur",
  "Labuan",
  "Putrajaya",
];

export const ONLINE_DISCOUNT_RATE = 0.05;

export const policyConfig = {
  allowReturns: false,
  exchangeWindowDays: 14,
  hygieneRestrictionsApply: true,
  policyUrl: "#",
};

export const productConfig = {
  brandName: "KakLeha™",
  productName: "High Waist Panties",
  tagline: "Selesa Untuk Pakai Harian",
  material: {
    nylon: 95,
    spandex: 5,
  },
  measurements: {
    waist: "60–105 cm",
    hip: "70–130 cm",
  },
  packages: [
    {
      id: "trial-6",
      name: "6 Helai",
      paidQuantity: 6,
      freeQuantity: 0,
      price: 79,
      originalPrice: 99,
      shippingFee: 0,
      freeShipping: true,
      badge: "Cuba Dulu",
      defaultSelected: false,
    },
    {
      id: "popular-10-6",
      name: "Beli 10 + Percuma 6",
      paidQuantity: 10,
      freeQuantity: 6,
      price: 129,
      originalPrice: 199,
      shippingFee: 0,
      freeShipping: true,
      badge: "Pilihan Ramai",
      defaultSelected: true,
    },
    {
      id: "value-20-10",
      name: "Beli 20 + Percuma 10",
      paidQuantity: 20,
      freeQuantity: 10,
      price: 229,
      originalPrice: 349,
      shippingFee: 0,
      freeShipping: true,
      badge: "Paling Jimat",
      defaultSelected: false,
    },
  ] as Package[],
  testimonials: [
    {
      id: "1",
      name: "[MASUKKAN NAMA]",
      state: "[MASUKKAN NEGERI]",
      package: "Pilihan Ramai",
      rating: 5,
      text: "[MASUKKAN TESTIMONI SEBENAR DI SINI]",
      verified: false,
    },
    {
      id: "2",
      name: "[MASUKKAN NAMA]",
      state: "[MASUKKAN NEGERI]",
      package: "Cuba Dulu",
      rating: 5,
      text: "[MASUKKAN TESTIMONI SEBENAR DI SINI]",
      verified: false,
    },
    {
      id: "3",
      name: "[MASUKKAN NAMA]",
      state: "[MASUKKAN NEGERI]",
      package: "Paling Jimat",
      rating: 5,
      text: "[MASUKKAN TESTIMONI SEBENAR DI SINI]",
      verified: false,
    },
  ] as Testimonial[],
  contact: {
    whatsapp: "[INSERT WHATSAPP LINK]",
    email: "[INSERT EMAIL]",
    instagram: "[INSERT INSTAGRAM]",
    facebook: "[INSERT FACEBOOK]",
    tiktok: "[INSERT TIKTOK]",
  },
  policies: {
    shipping: "#",
    privacy: "#",
    terms: "#",
    returns: "#",
  },
};

export function getTotalQuantity(pkg: Package): number {
  return pkg.paidQuantity + pkg.freeQuantity;
}

export function getPricePerPiece(pkg: Package): number {
  const total = getTotalQuantity(pkg);
  if (total === 0 || pkg.price === 0) return 0;
  return pkg.price / total;
}

export function getPricePerPaidPiece(pkg: Package): number {
  if (pkg.paidQuantity === 0 || pkg.price === 0) return 0;
  return pkg.price / pkg.paidQuantity;
}

export function getSavings(pkg: Package): number {
  if (!pkg.originalPrice || pkg.originalPrice <= pkg.price) return 0;
  return pkg.originalPrice - pkg.price;
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("ms-MY", {
    style: "currency",
    currency: "MYR",
  }).format(amount);
}

export function calculateCheckoutTotal(
  pkg: Package,
  paymentMethod: PaymentMethod,
  couponDiscount: number = 0
): {
  subtotal: number;
  shipping: number;
  onlineDiscount: number;
  couponDiscount: number;
  total: number;
} {
  const subtotal = pkg.price;
  const shipping = pkg.shippingFee;
  const onlineDiscount =
    paymentMethod === "online" ? Math.round(subtotal * ONLINE_DISCOUNT_RATE * 100) / 100 : 0;
  const total = subtotal + shipping - couponDiscount - onlineDiscount;
  return { subtotal, shipping, onlineDiscount, couponDiscount, total: Math.max(0, total) };
}

export function handleCheckout(selectedPackage: Package) {
  const el = document.getElementById("checkout");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function trackEvent(eventName: string, data?: Record<string, unknown>) {
  console.log(`[analytics] ${eventName}`, data ?? {});
}
