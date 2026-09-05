import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function EditorialBanner() {
  return (
    <section className="relative overflow-hidden min-h-[400px] lg:min-h-[520px]">
      <img
        src="https://images.pexels.com/photos/4622205/pexels-photo-4622205.jpeg?auto=compress&cs=tinysrgb&w=1400"
        alt="Craftsmanship — hands working with premium fabric"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative h-full min-h-[400px] lg:min-h-[520px] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg py-16"
        >
          <p className="text-ms-gold-light text-xs tracking-[0.2em] uppercase mb-4">Our Story</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Crafted With Purpose
          </h2>
          <p className="text-white/70 leading-relaxed mb-8 text-base sm:text-lg">
            Every Mardina Safiyya piece is crafted with meticulous attention — from selecting premium fabrics to creating cuts that celebrate modest elegance without compromising on comfort.
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-ms-gold text-white font-medium text-sm tracking-wide uppercase hover:bg-ms-gold-dark transition-all group"
          >
            Our Story
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
