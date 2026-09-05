import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ugcData = [
  { name: 'Aisyah K.', quote: 'The fabric is truly premium, drapes so beautifully.', image: 'https://images.pexels.com/photos/8063385/pexels-photo-8063385.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Nur Fazira', quote: 'Wear it to the office and still look elegant. Love it!', image: 'https://images.pexels.com/photos/6700500/pexels-photo-6700500.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Siti Hajar', quote: 'A loyal customer now. Every collection is a must-buy.', image: 'https://images.pexels.com/photos/33539326/pexels-photo-33539326.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Farah N.', quote: 'Amazing cut — not tight but still so neat and flattering.', image: 'https://images.pexels.com/photos/35150034/pexels-photo-35150034.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Zarina M.', quote: 'Packaging is gorgeous, perfect as a gift on its own.', image: 'https://images.pexels.com/photos/31841220/pexels-photo-31841220.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Amira S.', quote: 'Comfortable all day long, the fabric is so breathable.', image: 'https://images.pexels.com/photos/5991638/pexels-photo-5991638.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Balkis A.', quote: 'Colours stay vibrant even after so many washes.', image: 'https://images.pexels.com/photos/19549268/pexels-photo-19549268.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Hana R.', quote: 'Totally worth the price. Top quality through and through.', image: 'https://images.pexels.com/photos/17349806/pexels-photo-17349806.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export default function UGCCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;
    const speed = 0.5;

    function step() {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    }
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  const doubled = [...ugcData, ...ugcData];

  return (
    <section className="py-16 sm:py-20 bg-ms-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-ms-gold mb-3">Customer Style</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ms-charcoal">
            Their Style, <span className="text-ms-gold">Your</span> Inspiration
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-ms-ivory to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-ms-ivory to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-4 overflow-x-hidden scrollbar-hide px-4"
        >
          {doubled.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[200px] sm:w-[220px] lg:w-[240px] aspect-[3/4] rounded-2xl relative overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm font-medium leading-snug mb-1">"{item.quote}"</p>
                <p className="text-white/60 text-xs">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
