import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'Aisyah', state: 'Selangor', rating: 5, text: 'Sangat selesa! Tak bergulung langsung walaupun duduk lama.', package: 'Pilihan Ramai' },
  { name: 'Nurul', state: 'Johor', rating: 5, text: 'Fabrik lembut, tak panas. Sesuai untuk pakai harian.', package: 'Cuba Dulu' },
  { name: 'Fatimah', state: 'KL', rating: 5, text: 'High-waist dia buat saya rasa yakin. Tak ada kesan elasti.', package: 'Paling Jimat' },
  { name: 'Siti', state: 'Pulau Pinang', rating: 5, text: 'COD memang senang. Bayar bila barang sampai. Memang boleh pakai!', package: 'Pilihan Ramai' },
  { name: 'Kak Nadia', state: 'Perak', rating: 5, text: 'Belum pernah jumpa seluar dalam yang anjal macam ni. Suka!', package: 'Paling Jimat' },
  { name: 'Wani', state: 'Sabah', rating: 5, text: 'Penghantaran pantas, kualiti cantik. Confirm nak repeat order.', package: 'Pilihan Ramai' },
  { name: 'Huda', state: 'Kedah', rating: 4, text: 'Ukuran free size memang muat. Walaupun saya plus size, masih selesa.', package: 'Cuba Dulu' },
  { name: 'Mira', state: 'Terengganu', rating: 5, text: 'Lembut pada kulit, tak gatal. Sesuai untuk kulit sensitif.', package: 'Paling Jimat' },
  { name: 'Liza', state: 'Melaka', rating: 5, text: 'Harga berbaloi untuk 16 helai. Anak dara pun suka pakai.', package: 'Pilihan Ramai' },
  { name: 'Yati', state: 'Negeri Sembilan', rating: 5, text: 'Lapang angin betul. Tak rasa lembap macam seluar dalam biasa.', package: 'Cuba Dulu' },
  { name: 'Rina', state: 'Pahang', rating: 5, text: 'Kurier sampai depan pintu, bayar tunai. Memang senang.', package: 'Paling Jimat' },
  { name: 'Amira', state: 'Sarawak', rating: 5, text: 'Kualiti terbaik. Fabrik dia ringan dan anjal. Suka sangat.', package: 'Pilihan Ramai' },
];

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="bg-white rounded-2xl border border-kakleha-blush/50 p-4 sm:p-5 flex flex-col gap-2 min-w-[240px] sm:min-w-[280px] max-w-[300px]">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-kakleha-blush flex items-center justify-center text-sm font-bold text-kakleha-red flex-shrink-0">
          {review.name[0]}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-kakleha-charcoal truncate">{review.name}</p>
          <p className="text-[10px] text-kakleha-grey">{review.state}</p>
        </div>
      </div>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={12}
            className={i < review.rating ? 'text-kakleha-red fill-kakleha-red' : 'text-kakleha-blush'}
          />
        ))}
      </div>
      <p className="text-xs text-kakleha-grey leading-relaxed line-clamp-3">{review.text}</p>
      <span className="text-[10px] text-kakleha-red font-medium mt-auto">{review.package}</span>
    </div>
  );
}

export default function ReviewCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (isPaused) return;
    let lastTime = performance.now();

    function tick(now: number) {
      const el = scrollRef.current;
      if (!el) return;
      const dt = now - lastTime;
      lastTime = now;
      el.scrollLeft += dt * 0.04;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused]);

  return (
    <section id="reviews" className="py-12 sm:py-16 bg-kakleha-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-kakleha-charcoal text-center">
          Apa Kata Mereka
        </h2>
        <p className="text-sm text-kakleha-grey text-center mt-1">
          Ulasan sebenar dari customer KakLeha™
        </p>
      </div>

      {/* Edge fade mask */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 overflow-x-hidden px-4 sm:px-6 pb-2"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          }}
        >
          {[...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
