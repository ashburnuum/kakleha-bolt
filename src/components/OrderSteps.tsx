import { motion } from 'framer-motion';
import { ShoppingBag, MapPin, Banknote } from 'lucide-react';

const steps = [
  { icon: ShoppingBag, title: 'Pilih Pakej', desc: 'Pilih bundel yang sesuai — 6, 16 atau 30 helai.' },
  { icon: MapPin, title: 'Isi Alamat', desc: 'Masukkan alamat penghantaran. Dalam 2 minit je siap.' },
  { icon: Banknote, title: 'Bayar', desc: 'COD atau online — ikut mana yang senang untuk you.' },
];

export default function OrderSteps() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-kakleha-charcoal mb-3">
            3 Langkah Je
          </h2>
          <p className="text-kakleha-grey max-w-lg mx-auto">
            Senang je — tak sampai 3 minit pun dah siap order.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto relative">
          <div className="hidden sm:block absolute top-10 left-1/6 right-1/6 h-[2px] bg-kakleha-blush" />
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-center relative"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-kakleha-blush flex items-center justify-center relative">
                <step.icon size={22} className="text-kakleha-red" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-kakleha-red text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-base text-kakleha-charcoal mb-1">{step.title}</h3>
              <p className="text-xs text-kakleha-grey leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
