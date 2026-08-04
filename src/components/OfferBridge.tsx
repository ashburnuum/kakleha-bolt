import { motion } from 'framer-motion';
import { RefreshCw, Sparkles, Users } from 'lucide-react';

const points = [
  { icon: RefreshCw, text: 'Lebih banyak helai = boleh pusing-pusing pakai tanpa perlu cuci tergesa-gesa' },
  { icon: Sparkles, text: 'Bundel besar, harga sehelai jadi lagi murah' },
  { icon: Users, text: 'Simpan untuk diri sendiri atau kongsi dengan mak, adik, kakak' },
];

export default function OfferBridge() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-kakleha-charcoal mb-4">
            Kenapa Ramai Ambil Bundel Besar?
          </h2>
          <p className="text-kakleha-grey max-w-xl mx-auto mb-10">
            Seluar dalam dipakai setiap hari — lagi banyak stok, lagi senang hidup.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-kakleha-cream/50 rounded-2xl p-5 border border-kakleha-blush/40"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <p.icon size={20} className="text-kakleha-red" />
              </div>
              <p className="text-xs sm:text-sm text-kakleha-charcoal leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
