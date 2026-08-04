import { useEffect, useRef, useState } from 'react';

const platforms = [
  'Facebook', 'Instagram', 'TikTok', 'Shopee', 'Threads',
];

export default function AsSeenOn() {
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
      el.scrollLeft += dt * 0.03;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused]);

  return (
    <section className="py-8 sm:py-10 bg-white border-y border-kakleha-blush/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <p className="text-center text-xs font-medium text-kakleha-grey uppercase tracking-[0.2em]">
          As Seen On
        </p>
      </div>
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          ref={scrollRef}
          className="flex gap-8 sm:gap-12 overflow-x-hidden px-4 items-center"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          }}
        >
          {[...platforms, ...platforms].map((platform, i) => (
            <span
              key={i}
              className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-kakleha-charcoal/30 whitespace-nowrap select-none"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
