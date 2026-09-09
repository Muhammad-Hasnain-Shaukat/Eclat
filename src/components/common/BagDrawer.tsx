import React, { useEffect, useRef } from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBag } from '../../context/BagContext';
import { formatPrice } from '../../utils/currency';

export const BagDrawer: React.FC = () => {
  const { items, isOpen, closeBag, removeItem, updateQuantity, subtotal, totalCount } = useBag();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Focus management and escape key listener
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeBag();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeBag]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Your Shopping Bag"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeBag}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div
          ref={drawerRef}
          className="w-screen max-w-md bg-eclat-ivory text-eclat-espresso shadow-2xl flex flex-col justify-between"
        >
          {/* Header */}
          <div className="p-6 border-b border-eclat-champagne/40 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-eclat-amber stroke-[1.5]" />
              <h2 className="font-serif text-xl tracking-wider uppercase font-normal">
                Shopping Bag
              </h2>
              <span className="text-xs text-eclat-slate font-medium">({totalCount})</span>
            </div>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={closeBag}
              className="p-2 -mr-2 rounded-full text-eclat-espresso/70 hover:text-eclat-espresso focus:outline-none focus-visible:ring-2 focus-visible:ring-eclat-gold"
              aria-label="Close shopping bag"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Bag Items List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-eclat-champagne/30">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-eclat-limestone flex items-center justify-center mb-4">
                  <ShoppingBag className="w-7 h-7 text-eclat-pebble stroke-[1.2]" />
                </div>
                <p className="font-serif text-xl text-eclat-espresso mb-2">Your bag is empty</p>
                <p className="text-sm text-eclat-slate max-w-xs mb-6">
                  Explore our six signature extraits and craft an olfactory sanctuary.
                </p>
                <Link
                  to="/collection"
                  onClick={closeBag}
                  className="inline-flex items-center space-x-2 bg-eclat-espresso text-eclat-ivory px-6 py-3 text-xs uppercase tracking-ultra-wide font-medium hover:bg-eclat-espresso-light transition-colors"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="space-y-6 pt-2">
                {items.map(item => {
                  const lineTotal = item.size.price * item.quantity;
                  return (
                    <div
                      key={`${item.product.id}-${item.size.volume}`}
                      className="pt-6 first:pt-0 flex gap-4 items-center"
                    >
                      {/* Bottle Thumbnail on shallow plinth */}
                      <div className="w-20 h-24 bg-gradient-to-b from-eclat-limestone/40 to-eclat-limestone/80 rounded flex-shrink-0 flex items-center justify-center p-2 relative">
                        <img
                          src={item.product.bottleImage}
                          alt={item.product.name}
                          className="w-full h-full object-contain drop-shadow-md"
                          onError={(e) => {
                            // Graceful fallback if image is still rendering
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                        <div className="absolute -bottom-1 w-12 h-2 rounded-full bg-black/10 blur-[2px]" />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[10px] tracking-wider uppercase text-eclat-gold font-medium">
                              {item.product.collectionNumber}
                            </span>
                            <Link
                              to={`/product/${item.product.slug}`}
                              onClick={closeBag}
                              className="block font-serif text-lg text-eclat-espresso hover:text-eclat-amber transition-colors truncate"
                            >
                              {item.product.name}
                            </Link>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.product.id, item.size.volume)}
                            className="text-eclat-pebble hover:text-eclat-amber p-1 transition-colors"
                            aria-label={`Remove ${item.product.name} (${item.size.volume}) from bag`}
                          >
                            <Trash2 className="w-4 h-4 stroke-[1.5]" />
                          </button>
                        </div>

                        <p className="text-xs text-eclat-slate mt-0.5">{item.size.volume} &middot; {item.product.scentFamily}</p>

                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-eclat-champagne rounded">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.size.volume, item.quantity - 1)}
                              className="px-2 py-1 text-eclat-slate hover:text-eclat-espresso focus:outline-none"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 py-0.5 text-xs font-medium text-eclat-espresso">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.size.volume, item.quantity + 1)}
                              className="px-2 py-1 text-eclat-slate hover:text-eclat-espresso focus:outline-none"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Line Total */}
                          <div className="text-right">
                            <span className="text-sm font-medium text-eclat-espresso">
                              {formatPrice(lineTotal)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer with Subtotal & Preview Notice */}
          {items.length > 0 && (
            <div className="p-6 border-t border-eclat-champagne/40 bg-eclat-ivory-dark/30 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-xs uppercase tracking-ultra-wide text-eclat-slate font-medium">Subtotal</span>
                <span className="font-serif text-2xl text-eclat-espresso font-medium">{formatPrice(subtotal)}</span>
              </div>

              {/* Explicit luxury preview message as mandated */}
              <div className="bg-eclat-limestone/80 border border-eclat-champagne/60 p-3.5 rounded-sm flex items-start space-x-3 text-xs text-eclat-espresso/90">
                <Info className="w-4 h-4 text-eclat-amber flex-shrink-0 mt-0.5 stroke-[1.5]" />
                <p className="leading-relaxed">
                  <span className="font-medium text-eclat-espresso block mb-0.5">Preview Architecture</span>
                  Checkout is not available in this preview. Direct atelier ordering will open upon collection premiere.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={closeBag}
                  className="w-full bg-eclat-espresso text-eclat-ivory py-3.5 px-4 text-xs uppercase tracking-ultra-wide font-medium hover:bg-eclat-espresso-light transition-colors text-center block"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
