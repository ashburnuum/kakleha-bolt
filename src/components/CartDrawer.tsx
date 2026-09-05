import { AnimatePresence, motion } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { brandConfig, formatPrice } from '@/config/brand';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();
  const freeShippingGap = Math.max(0, brandConfig.freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / brandConfig.freeShippingThreshold) * 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
            onClick={closeCart}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[420px] bg-white z-[61] flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-ms-champagne">
              <h2 className="font-heading text-lg font-semibold text-ms-charcoal">
                Beg Belanja
              </h2>
              <button onClick={closeCart} className="p-1 text-ms-grey hover:text-ms-charcoal transition-colors" aria-label="Tutup">
                <X size={20} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                <div className="w-20 h-20 rounded-full bg-ms-champagne flex items-center justify-center mb-5">
                  <ShoppingBag size={32} className="text-ms-gold" />
                </div>
                <p className="font-heading text-lg text-ms-charcoal mb-2">Beg anda kosong</p>
                <p className="text-sm text-ms-grey mb-6">Terokai koleksi kami dan temui pilihan yang sempurna untuk anda.</p>
                <button
                  onClick={closeCart}
                  className="px-8 py-3 rounded-full bg-ms-charcoal text-white text-sm font-medium hover:bg-ms-charcoal-light transition-colors"
                >
                  Teruskan Membeli-belah
                </button>
              </div>
            ) : (
              <>
                {freeShippingGap > 0 && (
                  <div className="px-6 pt-4 pb-2">
                    <p className="text-xs text-ms-grey mb-2">
                      Tambah lagi <span className="font-semibold text-ms-gold">{formatPrice(freeShippingGap)}</span> untuk penghantaran percuma
                    </p>
                    <div className="h-1.5 bg-ms-champagne rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-ms-gold rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${freeShippingProgress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                )}
                {freeShippingGap <= 0 && (
                  <div className="px-6 pt-4 pb-2">
                    <p className="text-xs text-ms-success font-medium">
                      Tahniah! Anda layak untuk penghantaran percuma
                    </p>
                  </div>
                )}

                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.size}`} className="flex gap-4 pb-4 border-b border-ms-champagne/60 last:border-0">
                      <div className="w-20 h-24 rounded-xl bg-ms-champagne flex-shrink-0 flex items-center justify-center">
                        <span className="text-[10px] text-ms-grey-muted">Imej</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-medium text-ms-charcoal leading-tight">{item.product.name}</p>
                            <p className="text-xs text-ms-grey mt-0.5">Saiz: {item.size}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.product.id, item.size)}
                            className="p-1 text-ms-grey-muted hover:text-ms-error transition-colors flex-shrink-0"
                            aria-label="Buang item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-0.5 border border-ms-champagne rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                              className="p-1.5 text-ms-grey hover:text-ms-charcoal transition-colors"
                              aria-label="Kurang"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm font-medium text-ms-charcoal">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                              className="p-1.5 text-ms-grey hover:text-ms-charcoal transition-colors"
                              aria-label="Tambah"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <p className="text-sm font-semibold text-ms-charcoal">{formatPrice(item.product.price * item.quantity)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-ms-champagne px-6 py-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-ms-grey">Jumlah Kecil</span>
                    <span className="text-lg font-heading font-semibold text-ms-charcoal">{formatPrice(subtotal)}</span>
                  </div>
                  <p className="text-xs text-ms-grey-light">Penghantaran dikira semasa checkout</p>
                  <button className="w-full py-4 rounded-full bg-ms-charcoal text-white text-sm font-semibold hover:bg-ms-charcoal-light transition-colors tracking-wide uppercase">
                    Checkout — {formatPrice(subtotal)}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
