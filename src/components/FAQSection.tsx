import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { trackEvent } from '@/config/product';

const faqs = [
  { q: 'Muat saiz apa?', a: 'Free size — pinggang 60–105 cm, pinggul 70–130 cm. Kebanyakan bentuk badan boleh pakai.' },
  { q: 'Macam mana nak ukur?', a: 'Pinggang: lilit pita ukur kat bahagian paling kecil antara rusuk dan pusat. Pinggul: lilit kat bahagian paling lebar. Then compare dengan julat tu.' },
  { q: 'Betul ke free size?', a: 'Betul. Fabrik nylon-spandex dia memang boleh anjal lebar. Tapi tahap selesa mungkin berbeza — so semak ukuran dulu.' },
  { q: 'Material dia panas tak?', a: 'Tak. Ringan dan lapang angin. Bukan jenis kapas tebal yang memerangkap haba. Sesuai dengan cuaca Malaysia.' },
  { q: 'Mudah bergulung tak?', a: 'Kurang berkemungkinan sebab potongan high-waist bagi cengkaman extra. Tapi memang bergantung pada bentuk badan jugak.' },
  { q: 'Okay ke pakai lepas bersalin?', a: 'Ramai ibu pilih high-waist sebab liputan dia. Tapi keselesaan bergantung pada pemulihan masing-masing.' },
  { q: 'Boleh pakai setiap hari?', a: 'Boleh! Memang direka untuk pakai harian. Fabrik pun tahan lama kalau jaga betul.' },
  { q: 'Cara cuci macam mana?', a: 'Paling bagus cuci tangan atau mesin cuci suhu rendah. Jangan peluntur, jangan pengering panas — fabrik kekal lagi lama.' },
  { q: 'Ada COD?', a: 'Ada! Cash on Delivery untuk seluruh Malaysia. Bayar bila barang sampai.' },
  { q: 'Berapa lama nak sampai?', a: '[MASUKKAN TEMPOH PENGHANTARAN]' },
  { q: 'Boleh pilih warna?', a: '[MASUKKAN MAKLUMAT WARNA YANG TERSEDIA]' },
  { q: 'Dalam pakej ada apa?', a: 'You dapat bilangan helai ikut pakej yang dipilih. Semua KakLeha™ High Waist Panties.' },
  { q: 'Nak contact macam mana?', a: '[MASUKKAN MAKLUMAT HUBUNGAN]' },
  { q: 'Polisi tukar/pulang?', a: '[MASUKKAN POLISI PERTUKARAN / PEMULANGAN]' },
];

export default function FAQSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const INITIAL_VISIBLE = 6;
  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, INITIAL_VISIBLE);

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-kakleha-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-kakleha-charcoal mb-2">
            Soalan Lazim
          </h2>
          <p className="text-kakleha-grey text-sm sm:text-base max-w-lg mx-auto">
            Jawapan ringkas untuk soalan yang selalu ditanya.
          </p>
        </motion.div>

        <div className="space-y-2.5 sm:space-y-3">
          {visibleFaqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-kakleha-blush/40 overflow-hidden">
              <button
                onClick={() => { setOpenFaqIndex(openFaqIndex === i ? null : i); trackEvent('open_faq', { index: i }); }}
                className="w-full flex items-center justify-between px-4 sm:px-5 py-4 text-left min-h-[52px] active:bg-kakleha-blush/30 transition-colors"
                aria-expanded={openFaqIndex === i}
              >
                <span className="text-sm font-medium text-kakleha-charcoal pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-kakleha-grey flex-shrink-0 transition-transform duration-200 ${openFaqIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openFaqIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 sm:px-5 pb-4 text-sm text-kakleha-grey leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {!showAllFaqs && faqs.length > INITIAL_VISIBLE && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAllFaqs(true)}
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white text-sm font-medium text-kakleha-charcoal hover:bg-kakleha-sand transition-colors active:scale-[0.97] border border-kakleha-blush/60"
            >
              Lihat Semua ({faqs.length - INITIAL_VISIBLE} lagi)
              <ChevronDown size={14} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
