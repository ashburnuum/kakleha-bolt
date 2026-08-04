import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { productConfig, trackEvent } from '@/config/product';

const navLinks = [
  { label: 'Kelebihan', href: '#kelebihan' },
  { label: 'Saiz', href: '#saiz' },
  { label: 'Pakej', href: '#pakej' },
  { label: 'Ulasan', href: '#ulasan' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-kakleha-blush'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-heading font-bold text-xl text-kakleha-charcoal">
            {productConfig.brandName}
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-kakleha-grey hover:text-kakleha-charcoal transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#checkout"
              onClick={() => trackEvent('click_header_cta')}
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-kakleha-red text-white text-sm font-semibold hover:bg-kakleha-burgundy transition-colors"
            >
              Buat Pesanan
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-kakleha-charcoal"
              aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-kakleha-blush px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-3 text-sm font-medium text-kakleha-charcoal hover:bg-kakleha-blush rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#checkout"
              onClick={() => { setMenuOpen(false); trackEvent('click_header_cta'); }}
              className="mt-2 text-center py-3 rounded-full bg-kakleha-red text-white text-sm font-semibold"
            >
              Buat Pesanan
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
