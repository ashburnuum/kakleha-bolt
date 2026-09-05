export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number | null;
  badge: string | null;
  category: string;
  isNew: boolean;
  isBestSeller: boolean;
  soldCount?: number;
  rating: number;
  reviewCount: number;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  featured: boolean;
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

export interface Review {
  id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
  product: string;
  verified: boolean;
}

export const brandConfig = {
  name: 'Mardina Safiyya',
  tagline: 'Keanggunan Dalam Setiap Jahitan',
  description: 'Koleksi pakaian muslimah premium yang menggabungkan keanggunan moden dengan kesopanan.',
  freeShippingThreshold: 150,
  currency: 'MYR',
  contact: {
    whatsapp: '#',
    email: 'hello@mardinasafiyya.com',
    instagram: '#',
    facebook: '#',
    tiktok: '#',
  },
  policies: {
    shipping: '#',
    privacy: '#',
    terms: '#',
    returns: '#',
  },
};

export const collections: Collection[] = [
  { id: 'abaya', name: 'Abaya', description: 'Koleksi abaya premium untuk setiap majlis', featured: true },
  { id: 'telekung', name: 'Telekung', description: 'Telekung selesa dan anggun untuk ibadah', featured: true },
  { id: 'tudung', name: 'Tudung', description: 'Tudung premium pelbagai gaya dan warna', featured: true },
  { id: 'set-kurung', name: 'Set Kurung', description: 'Set kurung moden dengan sentuhan tradisional', featured: true },
  { id: 'basics', name: 'Basics', description: 'Asas pakaian harian yang versatil', featured: false },
];

export const products: Product[] = [
  { id: 'abaya-nura', name: 'Abaya Nura', price: 189, originalPrice: 249, badge: 'BARU', category: 'abaya', isNew: true, isBestSeller: false, rating: 4.9, reviewCount: 128 },
  { id: 'telekung-safiya', name: 'Telekung Safiya', price: 129, originalPrice: 169, badge: 'BARU', category: 'telekung', isNew: true, isBestSeller: true, soldCount: 1200, rating: 4.9, reviewCount: 342 },
  { id: 'tudung-aliya', name: 'Tudung Aliya', price: 59, originalPrice: 79, badge: 'BARU', category: 'tudung', isNew: true, isBestSeller: false, rating: 4.8, reviewCount: 89 },
  { id: 'set-kurung-hana', name: 'Set Kurung Hana', price: 219, originalPrice: 289, badge: 'BARU', category: 'set-kurung', isNew: true, isBestSeller: false, rating: 4.9, reviewCount: 67 },
  { id: 'abaya-zahra', name: 'Abaya Zahra', price: 209, originalPrice: null, badge: null, category: 'abaya', isNew: false, isBestSeller: true, soldCount: 2100, rating: 4.9, reviewCount: 456 },
  { id: 'telekung-mariam', name: 'Telekung Mariam', price: 149, originalPrice: 189, badge: null, category: 'telekung', isNew: false, isBestSeller: true, soldCount: 890, rating: 4.8, reviewCount: 234 },
  { id: 'tudung-yasmin', name: 'Tudung Yasmin', price: 49, originalPrice: null, badge: null, category: 'tudung', isNew: false, isBestSeller: true, soldCount: 3400, rating: 4.8, reviewCount: 567 },
  { id: 'set-kurung-layla', name: 'Set Kurung Layla', price: 249, originalPrice: 319, badge: null, category: 'set-kurung', isNew: false, isBestSeller: true, soldCount: 780, rating: 4.9, reviewCount: 189 },
];

export const reviews: Review[] = [
  { id: '1', name: 'Nur Aisyah', city: 'Kuala Lumpur', rating: 5, text: 'Kualiti jahitan memang premium. Kain lembut sangat dan jatuh cantik. Tak menyesal beli abaya dari sini.', product: 'Abaya Nura', verified: true },
  { id: '2', name: 'Siti Fatimah', city: 'Shah Alam', rating: 5, text: 'Telekung Safiya ni memang best. Ringan, tak panas, dan cutting dia kemas. Sesuai untuk harian dan travel.', product: 'Telekung Safiya', verified: true },
  { id: '3', name: 'Hajar Aminah', city: 'Johor Bahru', rating: 5, text: 'Dah beli 3 kali dari Mardina Safiyya. Setiap kali memang tak mengecewakan. Packaging pun cantik.', product: 'Abaya Zahra', verified: true },
  { id: '4', name: 'Nabilah Rahman', city: 'Petaling Jaya', rating: 5, text: 'Set Kurung Hana ni sangat selesa. Kain dia breathable dan tak ketat. Perfect untuk ke pejabat.', product: 'Set Kurung Hana', verified: true },
  { id: '5', name: 'Zulaikha Mohd', city: 'Penang', rating: 4, text: 'Tudung Aliya memang versatile. Boleh style macam-macam. Warna cantik dan tak luntur lepas basuh.', product: 'Tudung Aliya', verified: true },
  { id: '6', name: 'Raihana Ismail', city: 'Kuantan', rating: 5, text: 'First time beli online dan sangat puas hati. Delivery cepat, kualiti tip top. Memang berbaloi.', product: 'Telekung Mariam', verified: true },
  { id: '7', name: 'Maisarah Yusof', city: 'Kota Bharu', rating: 5, text: 'Abaya Zahra ni favourite saya. Cutting dia moden tapi still sopan. Dapat banyak pujian bila pakai.', product: 'Abaya Zahra', verified: true },
  { id: '8', name: 'Amira Hassan', city: 'Ipoh', rating: 5, text: 'Customer service pun best. Tanya pasal saiz, terus reply cepat. Product sampai sesuai dengan expectation.', product: 'Set Kurung Layla', verified: true },
  { id: '9', name: 'Farah Nadia', city: 'Melaka', rating: 5, text: 'Beli Tudung Yasmin untuk semua adik beradik. Semua suka! Harga berpatutan untuk kualiti macam ni.', product: 'Tudung Yasmin', verified: true },
  { id: '10', name: 'Balkis Amin', city: 'Alor Setar', rating: 5, text: 'Saya dah jadi pelanggan setia. Setiap koleksi baru mesti grab. Tak pernah kecewa.', product: 'Abaya Nura', verified: true },
  { id: '11', name: 'Kartini Wati', city: 'Kuala Terengganu', rating: 4, text: 'Kain telekung dia memang lembut. Tak rasa berat bila sujud. Highly recommend!', product: 'Telekung Safiya', verified: true },
  { id: '12', name: 'Nurul Huda', city: 'Seremban', rating: 5, text: 'Packaging cantik, ada card ucapan lagi. Rasa macam beli barang luxury. Memang premium.', product: 'Set Kurung Hana', verified: true },
];

export const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('ms-MY', {
    style: 'currency',
    currency: 'MYR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getDiscountPercent(product: Product): number {
  if (!product.originalPrice || product.originalPrice <= product.price) return 0;
  return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
}
