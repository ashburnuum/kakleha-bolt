import { motion } from 'framer-motion';
import { Heart, Instagram } from 'lucide-react';

const posts = [
  { likes: 342 },
  { likes: 891 },
  { likes: 567 },
  { likes: 234 },
  { likes: 1205 },
  { likes: 456 },
];

export default function InstagramGrid() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Instagram size={16} className="text-ms-gold" />
            <p className="text-xs tracking-[0.2em] uppercase text-ms-gold">Instagram</p>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-ms-charcoal">
            Tag Kami <span className="italic text-ms-gold">@MardinaSafiyya</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-ms-champagne"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-ms-grey-muted/20 text-xs">IG</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="flex items-center gap-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart size={16} className="fill-white" />
                  <span className="text-sm font-medium">{post.likes.toLocaleString()}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
