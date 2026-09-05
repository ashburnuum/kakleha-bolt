import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products } from '@/config/brand';
import ProductCard from '@/components/ProductCard';

const bestSellers = products.filter((p) => p.isBestSeller);

export default function BestSellers() {
  return (
    <section id="best-sellers" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10 sm:mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ms-charcoal">Best Sellers</h2>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-ms-grey hover:text-ms-gold transition-colors group"
          >
            View All
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bestSellers.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ms-grey hover:text-ms-gold transition-colors"
          >
            View All
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
