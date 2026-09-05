import { Star } from 'lucide-react';

const items = [
  '5,000+ Pelanggan Gembira',
  'Checkout 100% Selamat',
  'COD Seluruh Malaysia',
  'Trending di Instagram',
  'Kualiti Premium Terjamin',
  'Penghantaran Percuma RM150+',
];

export default function MarqueeTicker() {
  const repeated = [...items, ...items];

  return (
    <div className="bg-ms-charcoal py-3.5 overflow-hidden">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap w-max">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-xs sm:text-sm tracking-wide uppercase">
            <Star size={10} className="text-ms-gold fill-ms-gold flex-shrink-0" />
            <span className="text-white/70">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
