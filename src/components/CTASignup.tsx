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
    <section className="py-20 sm:py-24 lg:py-28 bg-ms-ivory">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ms-charcoal mb-5 leading-tight">
              Join the Mardina Safiyya Family
            </h2>
            <p className="text-base text-ms-grey max-w-md mb-8">
              Get early access to new collections, exclusive offers, and style inspiration delivered straight to your inbox.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-ms-success/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} className="text-ms-success" />
                </div>
                <div>
                  <p className="text-ms-charcoal font-medium">Thank you! You have been subscribed.</p>
                  <p className="text-sm text-ms-grey">Look out for our first email soon.</p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-lg"
              >
                <div className="relative flex-1">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ms-grey-muted" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full pl-11 pr-4 py-4 bg-white border border-ms-champagne text-ms-charcoal placeholder:text-ms-grey-muted text-sm focus:outline-none focus:ring-2 focus:ring-ms-gold/30 focus:border-ms-gold/50 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-ms-gold text-white text-sm font-medium tracking-wide uppercase hover:bg-ms-gold-dark transition-colors flex items-center justify-center gap-2 flex-shrink-0"
                >
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </motion.form>
            )}

            <p className="text-xs text-ms-grey-light mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block aspect-[4/5] rounded-md overflow-hidden"
          >
            <img
              src="https://images.pexels.com/photos/8995898/pexels-photo-8995898.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Elegant modest fashion"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
