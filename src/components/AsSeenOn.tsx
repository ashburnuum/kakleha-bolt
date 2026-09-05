import { motion } from 'framer-motion';

const mediaOutlets = [
  'NONA', 'HIJABISTA', 'SAYS', 'VULCAN POST', 'MASHABLE', 'THE STAR',
];

export default function AsSeenOn() {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-ms-champagne/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs tracking-[0.2em] uppercase text-ms-grey-light mb-8"
        >
          As Seen On
        </motion.p>
        <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-16 flex-wrap">
          {mediaOutlets.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center justify-center"
            >
              <span className="text-sm sm:text-base font-heading font-semibold text-ms-grey-muted tracking-wider select-none">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
