export interface ProductColor {
  name: string;
  hex: string;
}

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
  image: string;
  colors: ProductColor[];
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  featured: boolean;
  image: string;
}

export interface CartItem {
  product: Product;
  size: string;
  color: string;
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
  tagline: 'Elegance In Every Stitch',
  description: 'Premium modest fashion that blends modern elegance with timeless modesty. Designed for women who value quality.',
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
  { id: 'abaya', name: 'Abaya', description: 'Premium abayas for every occasion', featured: true, image: 'https://images.pexels.com/photos/13838838/pexels-photo-13838838.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'telekung', name: 'Prayer Sets', description: 'Comfortable and elegant prayer garments', featured: true, image: 'https://images.pexels.com/photos/36211967/pexels-photo-36211967.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'tudung', name: 'Headscarves', description: 'Premium headscarves in various styles and colours', featured: true, image: 'https://images.pexels.com/photos/5615951/pexels-photo-5615951.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'set-kurung', name: 'Kurung Sets', description: 'Modern kurung sets with a traditional touch', featured: true, image: 'https://images.pexels.com/photos/3754187/pexels-photo-3754187.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'basics', name: 'Basics', description: 'Versatile everyday essentials', featured: false, image: '' },
];

export const products: Product[] = [
  {
    id: 'abaya-nura', name: 'Abaya Nura', price: 189, originalPrice: 249, badge: 'NEW', category: 'abaya', isNew: true, isBestSeller: false, rating: 4.9, reviewCount: 128,
    image: 'https://images.pexels.com/photos/34884852/pexels-photo-34884852.jpeg?auto=compress&cs=tinysrgb&w=600',
    colors: [{ name: 'Black', hex: '#1A1A1A' }, { name: 'Dusty Rose', hex: '#C9A8A0' }, { name: 'Sage', hex: '#A3B18A' }],
  },
  {
    id: 'telekung-safiya', name: 'Telekung Safiya', price: 129, originalPrice: 169, badge: 'NEW', category: 'telekung', isNew: true, isBestSeller: true, soldCount: 1200, rating: 4.9, reviewCount: 342,
    image: 'https://images.pexels.com/photos/36211967/pexels-photo-36211967.jpeg?auto=compress&cs=tinysrgb&w=600',
    colors: [{ name: 'White', hex: '#F5F5F0' }, { name: 'Cream', hex: '#F0E6D3' }, { name: 'Blush', hex: '#E8C8C0' }],
  },
  {
    id: 'tudung-aliya', name: 'Tudung Aliya', price: 59, originalPrice: 79, badge: 'NEW', category: 'tudung', isNew: true, isBestSeller: false, rating: 4.8, reviewCount: 89,
    image: 'https://images.pexels.com/photos/7929158/pexels-photo-7929158.jpeg?auto=compress&cs=tinysrgb&w=600',
    colors: [{ name: 'Nude', hex: '#D4B5A0' }, { name: 'Olive', hex: '#8B8B6B' }, { name: 'Dusty Blue', hex: '#8FAAB3' }, { name: 'Black', hex: '#1A1A1A' }],
  },
  {
    id: 'set-kurung-hana', name: 'Kurung Hana', price: 219, originalPrice: 289, badge: 'NEW', category: 'set-kurung', isNew: true, isBestSeller: false, rating: 4.9, reviewCount: 67,
    image: 'https://images.pexels.com/photos/3754187/pexels-photo-3754187.jpeg?auto=compress&cs=tinysrgb&w=600',
    colors: [{ name: 'Teal', hex: '#5F8A8B' }, { name: 'Dusty Rose', hex: '#C9A8A0' }, { name: 'Champagne', hex: '#E8D5B8' }],
  },
  {
    id: 'abaya-zahra', name: 'Abaya Zahra', price: 209, originalPrice: null, badge: null, category: 'abaya', isNew: false, isBestSeller: true, soldCount: 2100, rating: 4.9, reviewCount: 456,
    image: 'https://images.pexels.com/photos/13838842/pexels-photo-13838842.jpeg?auto=compress&cs=tinysrgb&w=600',
    colors: [{ name: 'Black', hex: '#1A1A1A' }, { name: 'Navy', hex: '#2C3E50' }, { name: 'Burgundy', hex: '#6B2C3E' }],
  },
  {
    id: 'telekung-mariam', name: 'Telekung Mariam', price: 149, originalPrice: 189, badge: null, category: 'telekung', isNew: false, isBestSeller: true, soldCount: 890, rating: 4.8, reviewCount: 234,
    image: 'https://images.pexels.com/photos/36211952/pexels-photo-36211952.jpeg?auto=compress&cs=tinysrgb&w=600',
    colors: [{ name: 'White', hex: '#F5F5F0' }, { name: 'Ivory', hex: '#FDFAF3' }, { name: 'Sage', hex: '#A3B18A' }],
  },
  {
    id: 'tudung-yasmin', name: 'Tudung Yasmin', price: 49, originalPrice: null, badge: null, category: 'tudung', isNew: false, isBestSeller: true, soldCount: 3400, rating: 4.8, reviewCount: 567,
    image: 'https://images.pexels.com/photos/36061657/pexels-photo-36061657.jpeg?auto=compress&cs=tinysrgb&w=600',
    colors: [{ name: 'Terracotta', hex: '#C47A5A' }, { name: 'Olive', hex: '#8B8B6B' }, { name: 'Mauve', hex: '#B08D9A' }, { name: 'Black', hex: '#1A1A1A' }],
  },
  {
    id: 'set-kurung-layla', name: 'Kurung Layla', price: 249, originalPrice: 319, badge: null, category: 'set-kurung', isNew: false, isBestSeller: true, soldCount: 780, rating: 4.9, reviewCount: 189,
    image: 'https://images.pexels.com/photos/31638763/pexels-photo-31638763.jpeg?auto=compress&cs=tinysrgb&w=600',
    colors: [{ name: 'Cream', hex: '#F0E6D3' }, { name: 'Dusty Rose', hex: '#C9A8A0' }, { name: 'Teal', hex: '#5F8A8B' }],
  },
];

export const reviews: Review[] = [
  { id: '1', name: 'Nur Aisyah', city: 'Kuala Lumpur', rating: 5, text: 'The stitching quality is truly premium. The fabric is incredibly soft and drapes beautifully. No regrets buying this abaya.', product: 'Abaya Nura', verified: true },
  { id: '2', name: 'Siti Fatimah', city: 'Shah Alam', rating: 5, text: 'Telekung Safiya is absolutely the best. Lightweight, cool, and the cut is so neat. Perfect for daily wear and travel.', product: 'Telekung Safiya', verified: true },
  { id: '3', name: 'Hajar Aminah', city: 'Johor Bahru', rating: 5, text: 'Third time ordering from Mardina Safiyya. Never disappointed. Even the packaging feels like luxury.', product: 'Abaya Zahra', verified: true },
  { id: '4', name: 'Nabilah Rahman', city: 'Petaling Jaya', rating: 5, text: 'Kurung Hana is incredibly comfortable. The fabric is breathable and not tight at all. Perfect for office wear.', product: 'Kurung Hana', verified: true },
  { id: '5', name: 'Zulaikha Mohd', city: 'Penang', rating: 4, text: 'Tudung Aliya is so versatile. You can style it in many ways. Colour stays vibrant even after multiple washes.', product: 'Tudung Aliya', verified: true },
  { id: '6', name: 'Raihana Ismail', city: 'Kuantan', rating: 5, text: 'First time buying online and I am very satisfied. Fast delivery, top quality. Totally worth it.', product: 'Telekung Mariam', verified: true },
  { id: '7', name: 'Maisarah Yusof', city: 'Kota Bharu', rating: 5, text: 'Abaya Zahra is my absolute favourite. The cut is modern yet still modest. I get so many compliments when I wear it.', product: 'Abaya Zahra', verified: true },
  { id: '8', name: 'Amira Hassan', city: 'Ipoh', rating: 5, text: 'Customer service is amazing too. Asked about sizing and they replied instantly. Product arrived exactly as expected.', product: 'Kurung Layla', verified: true },
  { id: '9', name: 'Farah Nadia', city: 'Melaka', rating: 5, text: 'Bought Tudung Yasmin for all my sisters. Everyone loved them! Great value for this level of quality.', product: 'Tudung Yasmin', verified: true },
  { id: '10', name: 'Balkis Amin', city: 'Alor Setar', rating: 5, text: 'I have become a loyal customer. Every new collection is a must-have. Never been disappointed.', product: 'Abaya Nura', verified: true },
  { id: '11', name: 'Kartini Wati', city: 'Kuala Terengganu', rating: 4, text: 'The prayer set fabric is so soft. You do not feel any weight during sujud. Highly recommend!', product: 'Telekung Safiya', verified: true },
  { id: '12', name: 'Nurul Huda', city: 'Seremban', rating: 5, text: 'Beautiful packaging with a thank-you card included. Feels like buying from a luxury brand. Truly premium.', product: 'Kurung Hana', verified: true },
];

export const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-MY', {
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
