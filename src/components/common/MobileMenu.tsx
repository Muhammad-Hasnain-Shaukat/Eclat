import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Heart, Sparkles, Compass, Layers, ArrowRight, Droplet, Hammer } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { totalWishlistCount } = useWishlist();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on route change
  useEffect(() => {
    if (isOpen) onClose();
  }, [location.pathname]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <div
        ref={menuRef}
        className="fixed inset-y-0 left-0 w-full max-w-xs bg-eclat-ivory text-eclat-espresso shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-left duration-300"
      >
        <div>
          {/* Top Bar: Wordmark with Emblem & Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-eclat-champagne/40">
            <div className="flex items-center space-x-2.5">
              <img
                src="/images/eclat-logo-espresso.png"
                alt="ÉCLAT"
                className="h-6 w-auto object-contain -translate-y-[2px]"
              />
              <span className="font-serif text-xl tracking-super-wide uppercase font-light text-eclat-espresso leading-none">
                ÉCLAT
              </span>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-2 -mr-2 rounded-full text-eclat-espresso/70 hover:text-eclat-espresso focus:outline-none focus-visible:ring-2 focus-visible:ring-eclat-gold"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Primary Nav Links */}
          <nav className="mt-8 space-y-5">
            <div>
              <Link
                to="/collection"
                onClick={onClose}
                className="flex items-center justify-between py-2 text-base font-serif tracking-widest uppercase text-eclat-espresso hover:text-eclat-amber transition-colors"
              >
                <span className="flex items-center space-x-3">
                  <Layers className="w-4 h-4 text-eclat-gold stroke-[1.5]" />
                  <span>The Collection</span>
                </span>
                <ArrowRight className="w-4 h-4 text-eclat-pebble" />
              </Link>
              <p className="text-xs text-eclat-slate pl-7">Six signature flacons in extrait concentration</p>
            </div>

            <div>
              <Link
                to="/ingredients"
                onClick={onClose}
                className="flex items-center justify-between py-2 text-base font-serif tracking-widest uppercase text-eclat-espresso hover:text-eclat-amber transition-colors"
              >
                <span className="flex items-center space-x-3">
                  <Droplet className="w-4 h-4 text-eclat-gold stroke-[1.5]" />
                  <span>Raw Extracts</span>
                </span>
                <ArrowRight className="w-4 h-4 text-eclat-pebble" />
              </Link>
              <p className="text-xs text-eclat-slate pl-7">Ethically harvested generational botanicals</p>
            </div>

            <div>
              <Link
                to="/scent-finder"
                onClick={onClose}
                className="flex items-center justify-between py-2 text-base font-serif tracking-widest uppercase text-eclat-espresso hover:text-eclat-amber transition-colors"
              >
                <span className="flex items-center space-x-3">
                  <Sparkles className="w-4 h-4 text-eclat-gold stroke-[1.5]" />
                  <span>Scent Finder</span>
                </span>
                <ArrowRight className="w-4 h-4 text-eclat-pebble" />
              </Link>
              <p className="text-xs text-eclat-slate pl-7">Interactive 3-step olfactory recommendation</p>
            </div>

            <div>
              <Link
                to="/atelier"
                onClick={onClose}
                className="flex items-center justify-between py-2 text-base font-serif tracking-widest uppercase text-eclat-espresso hover:text-eclat-amber transition-colors"
              >
                <span className="flex items-center space-x-3">
                  <Hammer className="w-4 h-4 text-eclat-gold stroke-[1.5]" />
                  <span>The Atelier</span>
                </span>
                <ArrowRight className="w-4 h-4 text-eclat-pebble" />
              </Link>
              <p className="text-xs text-eclat-slate pl-7">Hand-cast mineral flacons & brass stoppers</p>
            </div>

            <div>
              <Link
                to="/our-world"
                onClick={onClose}
                className="flex items-center justify-between py-2 text-base font-serif tracking-widest uppercase text-eclat-espresso hover:text-eclat-amber transition-colors"
              >
                <span className="flex items-center space-x-3">
                  <Compass className="w-4 h-4 text-eclat-gold stroke-[1.5]" />
                  <span>Our World</span>
                </span>
                <ArrowRight className="w-4 h-4 text-eclat-pebble" />
              </Link>
              <p className="text-xs text-eclat-slate pl-7">Philosophical foundations of the house</p>
            </div>

            <div className="pt-4 border-t border-eclat-champagne/40">
              <Link
                to="/wishlist"
                onClick={onClose}
                className="flex items-center justify-between py-2 text-sm uppercase tracking-wider font-medium text-eclat-espresso hover:text-eclat-amber transition-colors"
              >
                <span className="flex items-center space-x-3">
                  <Heart className="w-4 h-4 text-eclat-amber stroke-[1.5]" />
                  <span>Saved Fragrances</span>
                </span>
                {totalWishlistCount > 0 && (
                  <span className="text-xs bg-eclat-amber/15 text-eclat-amber font-semibold px-2 py-0.5 rounded-full">
                    {totalWishlistCount}
                  </span>
                )}
              </Link>
            </div>
          </nav>
        </div>

        {/* Bottom Atelier Note */}
        <div className="pt-8 border-t border-eclat-champagne/40">
          <div className="bg-eclat-limestone/50 p-4 rounded-sm">
            <p className="text-xs italic font-serif text-eclat-espresso/80 leading-relaxed">
              &ldquo;A presence that lingers.&rdquo;
            </p>
            <p className="text-[11px] text-eclat-slate uppercase tracking-wider mt-1">
              Haute Parfumerie
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
