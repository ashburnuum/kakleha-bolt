import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

export default function CTASignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  }

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-ms-charcoal relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-ms-gold/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-ms-gold/5 blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-ms-gold-light mb-4">Komuniti Kami</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-5 leading-tight">
            Sertai Keluarga{' '}
            <span className="italic text-ms-gold-light">Mardina Safiyya</span>
          </h2>
          <p className="text-base text-white/60 max-w-md mx-auto mb-10">
            Dapatkan akses awal ke koleksi baru, tawaran eksklusif, dan inspirasi gaya terus ke inbox anda.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-14 h-14 rounded-full bg-ms-success/20 flex items-center justify-center">
              <CheckCircle size={28} className="text-ms-success" />
            </div>
            <p className="text-white font-medium">Terima kasih! Anda telah berjaya mendaftar.</p>
            <p className="text-sm text-white/50">Nantikan email pertama dari kami.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <div className="relative flex-1">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Alamat email anda"
                className="w-full pl-11 pr-4 py-4 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-ms-gold/30 focus:border-ms-gold/50 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 rounded-full bg-ms-gold text-white text-sm font-medium tracking-wide uppercase hover:bg-ms-gold-light transition-colors flex items-center justify-center gap-2 flex-shrink-0"
            >
              Langgan
              <ArrowRight size={16} />
            </button>
          </motion.form>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-xs text-white/30 mt-5"
        >
          Kami menghormati privasi anda. Nyahlanggan bila-bila masa.
        </motion.p>
      </div>
    </section>
  );
}
