import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const problems = [
  { title: 'Asyik bergulung bila duduk', desc: 'Baru je duduk, waistband dah mula turun. Kena tarik balik setiap kali.' },
  { title: 'Elastik tinggalkan kesan', desc: 'Bila buka, nampak kesan merah meliling pinggang. Tak selesa langsung.' },
  { title: 'Kain rasa panas & tebal', desc: 'Material yang buat rasa sesak, apatah lagi cuaca panas Malaysia ni.' },
  { title: 'Potongan terlalu rendah', desc: 'Perut tak tercover, rasa tak selamat terutama bila pakai baju kurung.' },
  { title: 'Lama-lama jadi tak selesa', desc: 'Pagi okay, tengahari dah rasa nak tukar. Macam makin ketat.' },
  { title: 'Saiz tak pernah betul-betul muat', desc: 'S terlalu ketat, M terlalu longgar. Susah nak cari yang betul-betul kena.' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ProblemSection() {
  return (
    <section className="py-16 sm:py-20 bg-kakleha-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-kakleha-charcoal mb-3">
            Biasa Tak Rasa Macam Ni?
          </h2>
          <p className="text-kakleha-grey max-w-lg mx-auto">
            Kalau ya, you memang tak sorang. Ramai dah lalui benda yang sama setiap hari.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.title}
              variants={itemVariants}
              className="bg-white rounded-2xl p-5 border border-kakleha-blush/60 hover:border-kakleha-red/20 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-kakleha-blush flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertCircle size={16} className="text-kakleha-red" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm text-kakleha-charcoal mb-1">
                    {problem.title}
                  </h3>
                  <p className="text-xs text-kakleha-grey leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10 text-kakleha-grey text-sm sm:text-base max-w-2xl mx-auto"
        >
          KakLeha™ dibuat sebab nak selesaikan semua ni — seluar dalam yang cover lebih, anjal ikut badan, dan kekal selesa seharian.
        </motion.p>
      </div>
    </section>
  );
}
