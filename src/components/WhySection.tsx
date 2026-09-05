import { motion } from 'framer-motion';
import { Gem, Heart, MapPin } from 'lucide-react';

const pillars = [
  {
    icon: Gem,
    title: 'Premium Fabrics',
    description: 'Every fabric is carefully selected for all-day comfort — soft on the skin, breathable, and long-lasting.',
  },
  {
    icon: Heart,
    title: 'Modest by Design',
    description: 'Cuts that celebrate modesty without sacrificing style. Designed for women who want to look elegant and confident.',
  },
  {
    icon: MapPin,
    title: 'Made For Malaysian Women',
    description: 'We understand local body types and lifestyles. Every piece is designed with cultural sensitivity and tropical comfort in mind.',
  },
];

export default function WhySection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-ms-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-3xl overflow-hidden relative order-2 lg:order-1"
          >
            <img
              src="https://images.pexels.com/photos/6700500/pexels-photo-6700500.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Elegant modest fashion"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-ms-gold mb-3">About Us</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ms-charcoal mb-8 leading-tight">
              Why <span className="text-ms-gold">Mardina Safiyya</span>?
            </h2>

            <div className="space-y-8">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-ms-gold/10 flex items-center justify-center flex-shrink-0">
                    <pillar.icon size={20} className="text-ms-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-ms-charcoal mb-1.5">{pillar.title}</h3>
                    <p className="text-sm text-ms-grey leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="inline-block mt-8 text-sm font-medium text-ms-charcoal hover:text-ms-gold transition-colors tracking-wide uppercase underline underline-offset-4"
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
