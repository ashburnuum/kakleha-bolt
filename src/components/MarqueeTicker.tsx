const items = [
  '5,000+ Happy Customers',
  '100% Secure Checkout',
  'COD Available Nationwide',
  'Trending on Instagram',
  'Premium Quality Guaranteed',
  'Free Shipping RM150+',
];

export default function MarqueeTicker() {
  const repeated = [...items, ...items];

  return (
    <div className="bg-ms-cream border-y border-ms-champagne py-3.5 overflow-hidden">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap w-max">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-xs sm:text-sm tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-ms-gold flex-shrink-0" />
            <span className="text-ms-charcoal-light font-medium">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
