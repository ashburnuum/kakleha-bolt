import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Check } from 'lucide-react';
import { type Product, formatPrice, getDiscountPercent, sizes } from '@/config/brand';
import { useCart } from '@/context/CartContext';
import CartBagIcon from '@/components/CartBagIcon';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart();
  const discount = getDiscountPercent(product);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [showSizes, setShowSizes] = useState(false);

  function handleColorClick(colorName: string) {
    setSelectedColor(colorName);
    setShowSizes(true);
  }

  function handleAddToBag(size: string) {
    const color = selectedColor || product.colors[0]?.name || 'Default';
    addItem(product, size, color);
    setShowSizes(false);
    setSelectedColor(null);
  }

  function handleQuickAdd() {
    if (product.colors.length > 0 && !selectedColor) {
      setSelectedColor(product.colors[0].name);
    }
    setShowSizes(true);
  }

  return (
    <div className="group relative">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-ms-champagne mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />

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

        <div className="absolute bottom-0 left-0 right-0 z-10 hidden lg:block">
          <AnimatePresence>
            {showSizes ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="bg-white/95 backdrop-blur-sm p-3 m-3 rounded-xl"
              >
                {product.colors.length > 0 && (
                  <div className="mb-2">
                    <p className="text-[10px] text-ms-grey mb-1.5 text-center uppercase tracking-wider">
                      {selectedColor || 'Select Colour'}
                    </p>
                    <div className="flex items-center justify-center gap-1.5">
                      {product.colors.map((c) => (
                        <button
                          key={c.name}
                          onClick={() => setSelectedColor(c.name)}
                          className={`w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center ${
                            selectedColor === c.name
                              ? 'border-ms-gold scale-110'
                              : 'border-transparent hover:border-ms-grey-muted'
                          }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        >
                          {selectedColor === c.name && (
                            <Check size={10} className={c.hex === '#1A1A1A' || c.hex === '#2C3E50' || c.hex === '#6B2C3E' ? 'text-white' : 'text-ms-charcoal'} />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <p className="text-[10px] text-ms-grey mb-1.5 text-center uppercase tracking-wider">Select Size</p>
                <div className="grid grid-cols-3 gap-1.5">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleAddToBag(size)}
                      className="py-1.5 rounded-lg border border-ms-champagne text-xs font-medium text-ms-charcoal hover:bg-ms-gold hover:text-white hover:border-ms-gold transition-colors"
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
                onClick={handleQuickAdd}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[calc(100%-24px)] mx-3 mb-3 py-3 rounded-xl bg-white/90 backdrop-blur-sm text-ms-charcoal text-sm font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors"
              >
                <CartBagIcon size={16} />
                Quick Add
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Colour swatches below image */}
      {product.colors.length > 0 && (
        <div className="flex items-center gap-1.5 mb-2">
          {product.colors.map((c) => (
            <button
              key={c.name}
              onClick={() => handleColorClick(c.name)}
              className={`w-4 h-4 rounded-full border transition-all ${
                selectedColor === c.name
                  ? 'border-ms-gold ring-1 ring-ms-gold ring-offset-1'
                  : 'border-ms-grey-muted/50 hover:border-ms-grey'
              }`}
              style={{ backgroundColor: c.hex }}
              title={c.name}
            />
          ))}
        </div>
      )}

      <div className="space-y-1">
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
          <p className="text-[10px] text-ms-grey-light">{product.soldCount.toLocaleString()}+ sold</p>
        )}
      </div>

      {/* Mobile add button */}
      <div className="lg:hidden mt-2.5">
        {showSizes ? (
          <div className="bg-ms-cream p-2.5 rounded-xl">
            {product.colors.length > 0 && (
              <div className="mb-2">
                <p className="text-[10px] text-ms-grey mb-1.5 text-center uppercase tracking-wider">
                  {selectedColor || 'Select Colour'}
                </p>
                <div className="flex items-center justify-center gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center ${
                        selectedColor === c.name
                          ? 'border-ms-gold scale-110'
                          : 'border-transparent hover:border-ms-grey-muted'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {selectedColor === c.name && (
                        <Check size={10} className={c.hex === '#1A1A1A' || c.hex === '#2C3E50' || c.hex === '#6B2C3E' ? 'text-white' : 'text-ms-charcoal'} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <p className="text-[10px] text-ms-grey mb-1.5 text-center uppercase tracking-wider">Select Size</p>
            <div className="grid grid-cols-3 gap-1">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleAddToBag(size)}
                  className="py-1.5 rounded-lg border border-ms-champagne text-xs font-medium text-ms-charcoal hover:bg-ms-gold hover:text-white hover:border-ms-gold transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <button
            onClick={handleQuickAdd}
            className="w-full py-2.5 rounded-xl border border-ms-champagne text-ms-charcoal text-xs font-medium flex items-center justify-center gap-1.5 hover:bg-ms-gold hover:text-white hover:border-ms-gold transition-colors"
          >
            <CartBagIcon size={14} />
            Quick Add
          </button>
        )}
      </div>
    </div>
  );
}
