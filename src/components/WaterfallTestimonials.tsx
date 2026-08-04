import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

interface ReviewCard {
  id: string;
  name: string;
  state: string;
  rating: number;
  text: string;
  package: string;
}

const reviews: ReviewCard[] = [
  { id: '1', name: 'Siti Aminah', state: 'Selangor', rating: 5, text: 'Memang selesa gila! Pakai dari pagi sampai malam tak rasa nak betulkan langsung.', package: 'Paling Laris' },
  { id: '2', name: 'Nor Fazilah', state: 'Johor', rating: 5, text: 'Kain dia lembut sangat, stretch tapi tak longgar. First time jumpa seluar dalam macam ni.', package: 'Jimat Maksimum' },
  { id: '3', name: 'Hanis Zahra', state: 'Perak', rating: 5, text: 'High waist dia betul-betul cover perut. Rasa secure je pakai bawah baju kurung.', package: 'Cuba Dulu' },
  { id: '4', name: 'Raihana', state: 'KL', rating: 5, text: 'Dah order 3 kali. Tiap kali habis mesti reorder. Family pun dah mula pakai sama.', package: 'Jimat Maksimum' },
  { id: '5', name: 'Kartini Wati', state: 'Pahang', rating: 5, text: 'Lepas beranak memang susah nak cari yang muat dan selesa. Ni perfect!', package: 'Paling Laris' },
  { id: '6', name: 'Aida Suraya', state: 'Kedah', rating: 4, text: 'Tak sangka boleh stretch sampai macam tu. Badan besar pun muat dengan baik.', package: 'Cuba Dulu' },
  { id: '7', name: 'Zulaikha', state: 'Melaka', rating: 5, text: 'Husband pun puji sebab nampak kemas. Tak macam yang biasa beli kat kedai.', package: 'Paling Laris' },
  { id: '8', name: 'Farah Nadia', state: 'Penang', rating: 5, text: 'Washing machine friendly. Dah basuh banyak kali masih maintain shape dia.', package: 'Jimat Maksimum' },
  { id: '9', name: 'Maisarah', state: 'Terengganu', rating: 5, text: 'Selalu rasa tak confident pakai outfit fitted. Dengan ni, line tak nampak langsung.', package: 'Paling Laris' },
  { id: '10', name: 'Umi Kalsom', state: 'Sabah', rating: 5, text: 'Pos sampai cepat. Packaging pun cantik, boleh hadiah kan kat kawan.', package: 'Cuba Dulu' },
  { id: '11', name: 'Nurul Ain', state: 'Negeri Sembilan', rating: 5, text: 'Dulu pakai jenama mahal tapi tak selesa. Ni affordable dan lagi best.', package: 'Jimat Maksimum' },
  { id: '12', name: 'Balkis', state: 'Kelantan', rating: 4, text: 'Elastic dia tak ketat, tapi hold dengan baik. Tak tinggal kesan kat kulit.', package: 'Paling Laris' },
];

function ReviewCardComponent({ review }: { review: ReviewCard }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-kakleha-blush/60 shadow-sm mb-4">
      <div className="flex items-center gap-0.5 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={12}
            className={i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}
          />
        ))}
      </div>
      <p className="text-sm text-kakleha-charcoal leading-relaxed mb-3">
        "{review.text}"
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <CheckCircle size={12} className="text-kakleha-success" />
          <span className="text-xs font-medium text-kakleha-charcoal">{review.name}</span>
          <span className="text-xs text-kakleha-grey">· {review.state}</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-kakleha-blush text-kakleha-burgundy font-medium">
          {review.package}
        </span>
      </div>
    </div>
  );
}

function ScrollColumn({ items, direction, speed }: { items: ReviewCard[]; direction: 'up' | 'down'; speed: number }) {
  const columnRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const scrollPos = useRef(0);

  useEffect(() => {
    const el = columnRef.current;
    if (!el) return;

    const halfHeight = el.scrollHeight / 2;

    const animate = () => {
      if (direction === 'up') {
        scrollPos.current += speed;
        if (scrollPos.current >= halfHeight) scrollPos.current = 0;
      } else {
        scrollPos.current -= speed;
        if (scrollPos.current <= 0) scrollPos.current = halfHeight;
      }
      el.style.transform = `translateY(-${scrollPos.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [direction, speed]);

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden h-[500px] sm:h-[600px]">
      <div ref={columnRef} className="will-change-transform">
        {doubled.map((review, idx) => (
          <ReviewCardComponent key={`${review.id}-${idx}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export default function WaterfallTestimonials() {
  const col1 = reviews.slice(0, 4);
  const col2 = reviews.slice(4, 8);
  const col3 = reviews.slice(8, 12);

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
          <span className="inline-block px-4 py-1.5 rounded-full bg-kakleha-blush text-kakleha-burgundy text-xs font-semibold tracking-wide uppercase mb-4">
            Ulasan Sebenar
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-kakleha-charcoal mb-3">
            Wall of Love
          </h2>
          <p className="text-kakleha-grey max-w-lg mx-auto">
            Ribuan customer dah rasa bezanya. Ni sebahagian je.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-kakleha-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-kakleha-cream to-transparent z-10 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ScrollColumn items={col1} direction="up" speed={0.3} />
            <div className="hidden sm:block">
              <ScrollColumn items={col2} direction="down" speed={0.4} />
            </div>
            <div className="hidden lg:block">
              <ScrollColumn items={col3} direction="up" speed={0.35} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
