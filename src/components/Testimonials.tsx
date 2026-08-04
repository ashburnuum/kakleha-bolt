import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { productConfig } from '@/config/product';

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let scrollPos = 0;
    const speed = 0.5;

    const animate = () => {
      if (!isPaused.current && el) {
        scrollPos += speed;
        if (scrollPos >= el.scrollWidth / 2) {
          scrollPos = 0;
        }
        el.scrollLeft = scrollPos;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const testimonials = [...productConfig.testimonials, ...productConfig.testimonials];

  return (
    <section id="ulasan" className="py-16 sm:py-20 bg-kakleha-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-kakleha-charcoal mb-3">
            Apa Kata Customer?
          </h2>
          <p className="text-kakleha-grey max-w-lg mx-auto">
            Real feedback dari yang dah pakai sendiri.
          </p>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => { isPaused.current = true; }}
        onMouseLeave={() => { isPaused.current = false; }}
        onTouchStart={() => { isPaused.current = true; }}
        onTouchEnd={() => { isPaused.current = false; }}
        className="flex gap-5 overflow-x-hidden px-4 sm:px-6"
      >
        {testimonials.map((t, idx) => (
          <div
            key={`${t.id}-${idx}`}
            className="flex-shrink-0 w-[300px] sm:w-[340px] bg-white rounded-2xl p-6 border border-kakleha-blush/60 relative"
          >
            <Quote size={24} className="text-kakleha-blush absolute top-4 right-4" />

            <div className="flex items-center gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, si) => (
                <Star
                  key={si}
                  size={14}
                  className={si < t.rating ? 'text-amber-400 fill-amber-400' : 'text-kakleha-blush'}
                />
              ))}
            </div>

            <p className="text-sm text-kakleha-charcoal leading-relaxed mb-4 italic min-h-[60px]">
              "{t.text}"
            </p>

            <div className="flex items-center justify-between border-t border-kakleha-blush/40 pt-3">
              <div>
                <p className="text-sm font-semibold text-kakleha-charcoal">{t.name}</p>
                <p className="text-xs text-kakleha-grey">{t.state}</p>
              </div>
              <span className="text-[10px] px-2 py-1 rounded-full bg-kakleha-blush text-kakleha-burgundy font-medium">
                {t.package}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
