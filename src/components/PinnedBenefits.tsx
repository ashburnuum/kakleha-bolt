import { motion } from 'framer-motion';
import { trackEvent } from '@/config/product';

const benefits = [
  {
    image: 'https://images.pexels.com/photos/11255290/pexels-photo-11255290.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    number: '01',
    headline: 'Liputan Atas Pusat',
    description: 'Potongan high-waist yang cover perut — selamat bawah baju kurung, dress, dan outfit harian.',
  },
  {
    image: 'https://images.pexels.com/photos/35987/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=400&w=400',
    number: '02',
    headline: 'Anjal Ikut Badan',
    description: 'Pinggang 60–105 cm, pinggul 70–130 cm — muat pelbagai bentuk badan tanpa rasa tersepit.',
  },
  {
    image: 'https://images.pexels.com/photos/30550128/pexels-photo-30550128.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    number: '03',
    headline: 'Ringan Seharian',
    description: 'Nylon-spandex yang halus dan lapang angin — tak panas walau cuaca Malaysia yang terik.',
  },
  {
    image: 'https://images.pexels.com/photos/31293814/pexels-photo-31293814.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    number: '04',
    headline: 'Tak Bergulung',
    description: 'Waistband yang cengkam dengan lembut — duduk, berdiri, atau berlari, dia kekal di tempat.',
  },
];

export default function PinnedBenefits() {
  return (
    <section id="kelebihan" className="py-14 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-kakleha-blush/30 blur-[100px]" />
      <div className="absolute bottom-20 -left-40 w-[400px] h-[400px] rounded-full bg-kakleha-cream blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="text-kakleha-red text-xs font-semibold tracking-[0.15em] uppercase mb-3">
            Kenapa Dia Istimewa
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-5xl text-kakleha-charcoal leading-tight">
            4 Sebab Untuk
            <br className="hidden sm:block" />
            <span className="text-kakleha-red"> Tukar Sekarang</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-kakleha-blush/60 bg-white overflow-hidden hover:border-kakleha-red/20 hover:shadow-xl hover:shadow-kakleha-red/5 transition-all duration-300"
            >
              <div className="flex">
                {/* Image */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.headline}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-4 sm:p-5 lg:p-6 relative">
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <span className="font-heading font-bold text-2xl sm:text-3xl text-kakleha-blush group-hover:text-kakleha-red/10 transition-colors">
                      {benefit.number}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-kakleha-charcoal mb-2 pr-8">
                    {benefit.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-kakleha-grey leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-10 sm:mt-12"
        >
          <a
            href="#checkout"
            onClick={() => trackEvent('click_benefit_cta')}
            className="inline-flex items-center px-7 py-3.5 rounded-full bg-kakleha-red text-white text-sm font-semibold hover:bg-kakleha-burgundy transition-colors hover:shadow-lg hover:shadow-kakleha-red/20 active:scale-[0.97]"
          >
            Dapatkan KakLeha™
          </a>
        </motion.div>
      </div>
    </section>
  );
}
