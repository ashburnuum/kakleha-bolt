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
    <section className="py-20 sm:py-24 lg:py-28 bg-ms-cream relative overflow-hidden">
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
          <p className="text-xs tracking-[0.2em] uppercase text-ms-gold mb-4">Our Community</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ms-charcoal mb-5 leading-tight">
            Join the{' '}
            <span className="text-ms-gold">Mardina Safiyya</span>{' '}
            Family
          </h2>
          <p className="text-base text-ms-grey max-w-md mx-auto mb-10">
            Get early access to new collections, exclusive offers, and style inspiration delivered straight to your inbox.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-14 h-14 rounded-full bg-ms-success/10 flex items-center justify-center">
              <CheckCircle size={28} className="text-ms-success" />
            </div>
            <p className="text-ms-charcoal font-medium">Thank you! You have been subscribed.</p>
            <p className="text-sm text-ms-grey">Look out for our first email soon.</p>
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
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ms-grey-muted" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full pl-11 pr-4 py-4 rounded-full bg-white border border-ms-champagne text-ms-charcoal placeholder:text-ms-grey-muted text-sm focus:outline-none focus:ring-2 focus:ring-ms-gold/30 focus:border-ms-gold/50 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 rounded-full bg-ms-gold text-white text-sm font-medium tracking-wide uppercase hover:bg-ms-gold-dark transition-colors flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </motion.form>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-xs text-ms-grey-light mt-5"
        >
          We respect your privacy. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  );
}
