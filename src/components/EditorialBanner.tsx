import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function EditorialBanner() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[400px] lg:min-h-[520px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden order-2 lg:order-1 min-h-[300px]"
          >
            <img
              src="https://images.pexels.com/photos/8465992/pexels-photo-8465992.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Premium fabric close-up"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-ms-cream flex items-center order-1 lg:order-2"
          >
            <div className="px-8 sm:px-12 lg:px-16 py-12 lg:py-0 max-w-lg">
              <p className="text-xs tracking-[0.2em] uppercase text-ms-gold mb-4">Our Story</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ms-charcoal mb-5 leading-tight">
                Designed For the Modern <span className="text-ms-gold">Muslimah</span>
              </h2>
              <p className="text-ms-grey leading-relaxed mb-8">
                Every Mardina Safiyya piece is crafted with meticulous attention — from selecting premium fabrics to creating cuts that celebrate the elegance of modest fashion without compromising on comfort.
              </p>
              <a
                href="#new-arrivals"
                className="inline-flex items-center gap-2 text-sm font-medium text-ms-charcoal hover:text-ms-gold transition-colors group tracking-wide uppercase"
              >
                Explore Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
