import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { collections } from '@/config/brand';

const featured = collections.filter((c) => c.featured);

export default function CollectionsGrid() {
  return (
    <section id="collections" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-ms-gold mb-3">Jelajah</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-ms-charcoal">
            Koleksi Kami
          </h2>
        </motion.div>

        {/* Desktop bento grid */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-4 h-[560px]">
          {featured.map((col, i) => (
            <motion.a
              key={col.id}
              href={`#${col.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden bg-ms-champagne ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-ms-grey-muted/30 font-heading text-6xl font-bold select-none">{col.name[0]}</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-20">
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-1">{col.name}</h3>
                <div className="flex items-center gap-1 text-white/70 group-hover:text-ms-gold-light transition-colors text-sm">
                  <span>Terokai</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="lg:hidden flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 snap-x snap-mandatory">
          {featured.map((col, i) => (
            <motion.a
              key={col.id}
              href={`#${col.id}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex-shrink-0 w-[260px] h-[340px] snap-start group relative rounded-2xl overflow-hidden bg-ms-champagne"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-ms-grey-muted/30 font-heading text-6xl font-bold select-none">{col.name[0]}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <h3 className="font-heading text-xl font-semibold text-white mb-1">{col.name}</h3>
                <div className="flex items-center gap-1 text-white/70 text-sm">
                  <span>Terokai</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
