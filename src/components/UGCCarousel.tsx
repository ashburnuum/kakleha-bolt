import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ugcData = [
  { name: 'Aisyah K.', quote: 'Kain dia memang premium, jatuh cantik sangat.' },
  { name: 'Nur Fazira', quote: 'Pakai ke office pun nampak elegant. Love it!' },
  { name: 'Siti Hajar', quote: 'Dah jadi customer setia. Setiap koleksi mesti beli.' },
  { name: 'Farah N.', quote: 'Best sangat cutting dia, tak ketat tapi kemas.' },
  { name: 'Zarina M.', quote: 'Packaging cantik, boleh buat hadiah terus.' },
  { name: 'Amira S.', quote: 'Selesa pakai seharian, kain breathable.' },
  { name: 'Balkis A.', quote: 'Warna tak luntur walaupun dah basuh banyak kali.' },
  { name: 'Hana R.', quote: 'Memang berbaloi dengan harganya. Top quality.' },
];

export default function UGCCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;
    let speed = 0.5;

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
          <p className="text-xs tracking-[0.2em] uppercase text-ms-gold mb-3">Gaya Pelanggan</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-ms-charcoal">
            Gaya Mereka, <span className="italic">Inspirasi</span> Anda
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
              className="flex-shrink-0 w-[200px] sm:w-[220px] lg:w-[240px] aspect-[3/4] rounded-2xl bg-ms-champagne relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-ms-grey-muted text-[10px]">UGC</span>
              </div>
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
