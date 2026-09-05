import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { collections } from '@/config/brand';

const featured = collections.filter((c) => c.featured);

export default function CollectionsGrid() {
  return (
    <section id="collections" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ms-charcoal">
            Our Collections
          </h2>
        </motion.div>

        <div className="hidden lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-3 h-[600px]">
          {featured.map((col, i) => (
            <motion.a
              key={col.id}
              href={`#${col.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-lg ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={col.image}
                alt={col.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 z-20">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-1">{col.name}</h3>
                <p className="text-white/60 text-sm mb-2 hidden sm:block">{col.description}</p>
                <div className="flex items-center gap-1.5 text-white/70 group-hover:text-ms-gold-light transition-colors text-sm font-medium">
                  <span>Explore</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="lg:hidden space-y-3">
          {featured.map((col, i) => (
            <motion.a
              key={col.id}
              href={`#${col.id}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="block group relative h-[200px] rounded-lg overflow-hidden"
            >
              <img
                src={col.image}
                alt={col.name}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <h3 className="font-heading text-xl font-bold text-white mb-0.5">{col.name}</h3>
                <p className="text-white/60 text-sm">{col.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
