import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';
import { reviews } from '@/config/brand';

function getInitials(name: string) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2);
}

function ReviewCard({ review }: { review: typeof reviews[number] }) {
  return (
    <div className="bg-white rounded-md border border-ms-champagne p-5 space-y-3 break-inside-avoid mb-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-ms-gold/10 flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-heading font-bold text-ms-gold">{getInitials(review.name)}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-ms-charcoal">{review.name}</p>
          <p className="text-[11px] text-ms-grey-light">{review.city}</p>
        </div>
        {review.verified && (
          <div className="flex items-center gap-1 text-ms-success flex-shrink-0">
            <CheckCircle size={12} />
            <span className="text-[10px] font-medium">Verified</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={11} className={i < review.rating ? 'text-ms-gold fill-ms-gold' : 'text-ms-grey-muted'} />
        ))}
      </div>
      <p className="text-sm text-ms-charcoal leading-relaxed">"{review.text}"</p>
      <p className="text-[11px] text-ms-grey-light">{review.product}</p>
    </div>
  );
}

export default function ReviewsWaterfall() {
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animId: number;
    function step() {
      [col1Ref, col2Ref].forEach((ref, i) => {
        if (!ref.current) return;
        const speed = i === 0 ? 0.3 : -0.3;
        ref.current.scrollTop += speed;
        if (speed > 0 && ref.current.scrollTop >= ref.current.scrollHeight / 2) {
          ref.current.scrollTop = 0;
        }
        if (speed < 0 && ref.current.scrollTop <= 0) {
          ref.current.scrollTop = ref.current.scrollHeight / 2;
        }
      });
      animId = requestAnimationFrame(step);
    }
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  const half = Math.ceil(reviews.length / 2);
  const col1Data = reviews.slice(0, half);
  const col2Data = reviews.slice(half);

  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-ms-cream overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-heading text-5xl sm:text-6xl font-bold text-ms-charcoal">4.9</span>
            <div className="text-left">
              <div className="flex items-center gap-0.5 mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-ms-gold fill-ms-gold" />
                ))}
              </div>
              <span className="text-sm text-ms-grey">from 2,400+ reviews</span>
            </div>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ms-charcoal">
            Loved by Thousands
          </h2>
        </motion.div>

        <div className="relative h-[500px] sm:h-[560px]">
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ms-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ms-cream to-transparent z-10 pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 h-full">
            <div ref={col1Ref} className="overflow-hidden scrollbar-hide">
              <div>
                {[...col1Data, ...col1Data].map((r, i) => (
                  <ReviewCard key={`a-${i}`} review={r} />
                ))}
              </div>
            </div>
            <div ref={col2Ref} className="overflow-hidden scrollbar-hide">
              <div>
                {[...col2Data, ...col2Data].map((r, i) => (
                  <ReviewCard key={`b-${i}`} review={r} />
                ))}
              </div>
            </div>
            <div className="hidden lg:block overflow-hidden scrollbar-hide">
              <div>
                {[...reviews, ...reviews].map((r, i) => (
                  <ReviewCard key={`c-${i}`} review={r} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
