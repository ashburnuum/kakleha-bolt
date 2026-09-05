import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';
import { type Product, formatPrice, getDiscountPercent, sizes } from '@/config/brand';
import { useCart } from '@/context/CartContext';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart();
  const discount = getDiscountPercent(product);
  const [showSizes, setShowSizes] = useState(false);

  function handleAddToBag(size: string) {
    addItem(product, size);
    setShowSizes(false);
  }

  return (
    <div className="group relative">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-ms-champagne mb-3">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-ms-grey-muted/20 font-heading text-5xl font-bold select-none">
            {product.name.split(' ').map(w => w[0]).join('')}
          </span>
        </div>

        {product.badge && (
          <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-ms-gold text-white text-[10px] font-semibold tracking-wider uppercase">
            {product.badge}
          </span>
        )}
        {product.isBestSeller && !product.badge && (
          <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-ms-charcoal text-white text-[10px] font-semibold tracking-wider uppercase">
            Best Seller
          </span>
        )}
        {discount > 0 && (
          <span className="absolute top-3 right-3 z-10 px-2 py-1 rounded-full bg-ms-error/90 text-white text-[10px] font-bold">
            -{discount}%
          </span>
        )}

        {/* Desktop hover add button */}
        <div className="absolute bottom-0 left-0 right-0 z-10 hidden lg:block">
          <AnimatePresence>
            {showSizes ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="bg-white/95 backdrop-blur-sm p-3 m-3 rounded-xl"
              >
                <p className="text-xs text-ms-grey mb-2 text-center">Pilih Saiz</p>
                <div className="grid grid-cols-3 gap-1.5">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleAddToBag(size)}
                      className="py-1.5 rounded-lg border border-ms-champagne text-xs font-medium text-ms-charcoal hover:bg-ms-charcoal hover:text-white hover:border-ms-charcoal transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: showSizes ? 0 : 1, y: showSizes ? 10 : 0 }}
                onClick={() => setShowSizes(true)}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[calc(100%-24px)] mx-3 mb-3 py-3 rounded-xl bg-ms-charcoal/90 backdrop-blur-sm text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-ms-charcoal transition-colors"
              >
                <ShoppingBag size={16} />
                Tambah ke Beg
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="space-y-1.5">
        {product.rating > 0 && (
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={11}
                  className={i < Math.round(product.rating) ? 'text-ms-gold fill-ms-gold' : 'text-ms-grey-muted'}
                />
              ))}
            </div>
            <span className="text-[10px] text-ms-grey-light">({product.reviewCount})</span>
          </div>
        )}

        <h3 className="text-sm font-medium text-ms-charcoal group-hover:text-ms-gold transition-colors leading-tight">
          {product.name}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-ms-charcoal">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-xs text-ms-grey-muted line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        {product.soldCount && (
          <p className="text-[10px] text-ms-grey-light">Terjual {product.soldCount.toLocaleString()}+</p>
        )}
      </div>

      {/* Mobile add button */}
      <div className="lg:hidden mt-2.5">
        {showSizes ? (
          <div className="bg-ms-cream p-2.5 rounded-xl">
            <p className="text-xs text-ms-grey mb-1.5 text-center">Pilih Saiz</p>
            <div className="grid grid-cols-3 gap-1">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleAddToBag(size)}
                  className="py-1.5 rounded-lg border border-ms-champagne text-xs font-medium text-ms-charcoal hover:bg-ms-charcoal hover:text-white transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowSizes(true)}
            className="w-full py-2.5 rounded-xl border border-ms-champagne text-ms-charcoal text-xs font-medium flex items-center justify-center gap-1.5 hover:bg-ms-charcoal hover:text-white hover:border-ms-charcoal transition-colors"
          >
            <ShoppingBag size={14} />
            Tambah ke Beg
          </button>
        )}
      </div>
    </div>
  );
}
