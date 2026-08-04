import { motion } from 'framer-motion';
import { Briefcase, Home, Footprints, Sofa, Shirt, Plane, RotateCw } from 'lucide-react';

const useCases = [
  { icon: Briefcase, label: 'Kerja', desc: 'Duduk lama kat pejabat pun tak ada hal', large: true },
  { icon: Home, label: 'Urus Rumah', desc: 'Membongkok, angkat, sapu — semua lancar', large: false },
  { icon: Footprints, label: 'Jalan-jalan', desc: 'Tak perlu tarik-tarik bila jalan jauh', large: false },
  { icon: Sofa, label: 'Lepak', desc: 'Selesa macam tak pakai apa-apa', large: true },
  { icon: Shirt, label: 'Bawah Baju Kurung', desc: 'Tak nampak garisan, kemas je', large: false },
  { icon: Plane, label: 'Bercuti', desc: 'Ringan & senang cuci, kering cepat', large: false },
  { icon: RotateCw, label: 'Harian', desc: 'Memang sesuai untuk pakai setiap hari', large: false },
];

export default function LifestyleSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-kakleha-charcoal mb-3">
            Pakai Ke Mana Pun, Selesa Je
          </h2>
          <p className="text-kakleha-grey max-w-lg mx-auto text-sm sm:text-base">
            Dari pagi sampai malam, apa sahaja aktiviti pun dia ikut.
          </p>
        </motion.div>

        {/* Mobile: compact 2-col grid */}
        <div className="grid grid-cols-2 gap-3 sm:hidden">
          {useCases.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className="bg-kakleha-cream/60 rounded-2xl p-4 border border-kakleha-blush/50 text-center"
            >
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <item.icon size={18} className="text-kakleha-red" />
              </div>
              <span className="text-xs font-semibold text-kakleha-charcoal block">{item.label}</span>
              <span className="text-[11px] text-kakleha-grey mt-0.5 block leading-tight">{item.desc}</span>
            </motion.div>
          ))}
        </div>

        {/* Tablet + Desktop: Bento layout */}
        <div className="hidden sm:grid grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[140px] lg:auto-rows-[160px]">
          {useCases.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`relative group rounded-3xl border border-kakleha-blush/50 p-5 lg:p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-kakleha-red/20 hover:shadow-lg hover:shadow-kakleha-red/5 ${
                item.large ? 'col-span-2 row-span-1' : 'col-span-1 row-span-1'
              } ${i === 0 ? 'bg-kakleha-charcoal' : 'bg-kakleha-cream/40'}`}
            >
              {/* Background accent for large cards */}
              {item.large && (
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-kakleha-red/5 blur-2xl group-hover:bg-kakleha-red/10 transition-colors" />
              )}

              <div className="relative">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${
                  i === 0 ? 'bg-white/10' : 'bg-white shadow-sm'
                }`}>
                  <item.icon size={20} className={i === 0 ? 'text-white' : 'text-kakleha-red'} />
                </div>
              </div>

              <div className="relative">
                <span className={`text-sm font-semibold block ${
                  i === 0 ? 'text-white' : 'text-kakleha-charcoal'
                }`}>
                  {item.label}
                </span>
                <span className={`text-xs mt-1 block leading-relaxed ${
                  i === 0 ? 'text-white/60' : 'text-kakleha-grey'
                }`}>
                  {item.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
