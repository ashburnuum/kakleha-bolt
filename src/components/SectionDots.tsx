import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Mula' },
  { id: 'kelebihan', label: 'Kelebihan' },
  { id: 'saiz', label: 'Saiz' },
  { id: 'pakej', label: 'Pakej' },
  { id: 'ulasan', label: 'Ulasan' },
  { id: 'faq', label: 'FAQ' },
  { id: 'checkout', label: 'Checkout' },
];

export default function SectionDots() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);

      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3"
          aria-label="Section navigation"
        >
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group flex items-center gap-2"
                aria-label={section.label}
              >
                <span
                  className={`text-[10px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'opacity-100 text-kakleha-charcoal'
                      : 'opacity-0 group-hover:opacity-100 text-kakleha-grey'
                  }`}
                >
                  {section.label}
                </span>
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-3 h-3 bg-kakleha-red shadow-sm shadow-kakleha-red/30'
                      : 'w-2 h-2 bg-kakleha-grey/30 group-hover:bg-kakleha-grey/60'
                  }`}
                />
              </a>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
