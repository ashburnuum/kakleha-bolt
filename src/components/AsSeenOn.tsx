import { motion } from 'framer-motion';

const mediaOutlets = [
  'NONA', 'HIJABISTA', 'SAYS', 'VULCAN POST', 'MASHABLE', 'THE STAR',
];

export default function AsSeenOn() {
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-16 flex-wrap">
          {mediaOutlets.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center justify-center"
            >
              <span className="text-sm sm:text-base font-heading font-semibold text-ms-grey-muted/60 tracking-[0.1em] uppercase select-none">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
