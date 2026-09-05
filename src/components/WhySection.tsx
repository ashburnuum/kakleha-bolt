import { motion } from 'framer-motion';

const pillars = [
  {
    number: '01',
    title: 'Premium Fabrics',
    description: 'Every fabric is carefully selected for all-day comfort — soft on the skin, breathable, and long-lasting.',
  },
  {
    number: '02',
    title: 'Modest by Design',
    description: 'Cuts that celebrate modesty without sacrificing style. Designed for women who want to look elegant and confident.',
  },
  {
    number: '03',
    title: 'Made For Malaysian Women',
    description: 'We understand local body types and lifestyles. Every piece is designed with cultural sensitivity and tropical comfort in mind.',
  },
];

export default function WhySection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-md overflow-hidden relative order-2 lg:order-1"
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
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ms-charcoal mb-4 leading-tight">
              Why Mardina Safiyya?
            </h2>
            <p className="text-ms-grey leading-relaxed mb-10 max-w-md">
              We believe modest fashion should never mean compromising on quality, comfort, or elegance.
            </p>

            <div className="space-y-8">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-5"
                >
                  <span className="font-heading text-3xl sm:text-4xl font-bold text-ms-gold/30 leading-none flex-shrink-0 w-12">
                    {pillar.number}
                  </span>
                  <div className="border-l border-ms-champagne pl-5">
                    <h3 className="font-heading text-lg font-semibold text-ms-charcoal mb-1.5">{pillar.title}</h3>
                    <p className="text-sm text-ms-grey leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
