import { useState, useEffect } from 'react';
import { Menu, X, Search, User } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { brandConfig } from '@/config/brand';
import { useCart } from '@/context/CartContext';
import CartBagIcon from '@/components/CartBagIcon';

const navLinks = [
  { label: 'Shop', href: '#collections' },
  { label: 'Collections', href: '#collections' },
  { label: 'New In', href: '#new-arrivals' },
  { label: 'About', href: '#about' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openCart, itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-ms-champagne'
          : 'bg-white border-b border-ms-champagne/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-ms-charcoal hover:text-ms-gold transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-[13px] font-medium tracking-[0.08em] uppercase text-ms-charcoal-light hover:text-ms-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#"
            className="font-heading text-xl sm:text-2xl lg:text-[26px] font-bold tracking-wide text-ms-charcoal"
          >
            {brandConfig.name}
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.slice(2).map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-[13px] font-medium tracking-[0.08em] uppercase text-ms-charcoal-light hover:text-ms-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-3">
            <button
              className="p-2 text-ms-charcoal hover:text-ms-gold transition-colors hidden sm:block"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              className="p-2 text-ms-charcoal hover:text-ms-gold transition-colors hidden sm:block"
              aria-label="Account"
            >
              <User size={20} />
            </button>
            <button
              onClick={openCart}
              className="p-2 text-ms-charcoal hover:text-ms-gold transition-colors relative"
              aria-label="Shopping bag"
            >
              <CartBagIcon size={22} />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-ms-gold text-white text-[10px] font-bold flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 bg-white lg:hidden"
          >
            <div className="flex items-center justify-between h-16 px-4 border-b border-ms-champagne">
              <span className="font-heading text-xl font-bold text-ms-charcoal">
                {brandConfig.name}
              </span>
              <button onClick={() => setMenuOpen(false)} className="p-2 text-ms-charcoal" aria-label="Close">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-8 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-4 text-lg font-heading font-medium text-ms-charcoal hover:text-ms-gold transition-colors border-b border-ms-champagne/50"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="absolute bottom-8 left-6 right-6 flex items-center justify-center gap-6">
              <a href={brandConfig.contact.instagram} className="text-sm text-ms-grey hover:text-ms-gold transition-colors">Instagram</a>
              <a href={brandConfig.contact.facebook} className="text-sm text-ms-grey hover:text-ms-gold transition-colors">Facebook</a>
              <a href={brandConfig.contact.tiktok} className="text-sm text-ms-grey hover:text-ms-gold transition-colors">TikTok</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
