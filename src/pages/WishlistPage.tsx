import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Trash2, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useBag } from '../context/BagContext';
import { formatPrice } from '../utils/currency';

export const WishlistPage: React.FC = () => {
  const { wishlistProducts, toggleWishlist, clearWishlist, totalWishlistCount } = useWishlist();
  const { addItem } = useBag();

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-eclat-ivory min-h-screen text-eclat-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-eclat-champagne/40 pb-6 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-super-wide text-eclat-gold font-medium block mb-1">
              Personal Sanctuary
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-eclat-espresso">
              Saved Fragrances
            </h1>
          </div>

          {totalWishlistCount > 0 && (
            <button
              type="button"
              onClick={clearWishlist}
              className="inline-flex items-center space-x-1.5 text-xs text-eclat-slate hover:text-eclat-amber uppercase tracking-wider transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Wishlist ({totalWishlistCount})</span>
            </button>
          )}
        </div>

        {/* Content */}
        {totalWishlistCount === 0 ? (
          <div className="py-24 text-center max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-eclat-limestone flex items-center justify-center mx-auto mb-4">
              <Heart className="w-7 h-7 text-eclat-pebble stroke-[1.2]" />
            </div>
            <h3 className="font-serif text-2xl text-eclat-espresso">Your wishlist is empty</h3>
            <p className="text-xs sm:text-sm text-eclat-slate leading-relaxed font-sans">
              Save your favorite flacons while browsing our six extrait compositions.
            </p>
            <div className="pt-2">
              <Link
                to="/collection"
                className="inline-flex items-center space-x-2 bg-eclat-espresso text-eclat-ivory px-6 py-3 text-xs uppercase tracking-ultra-wide font-medium hover:bg-eclat-espresso-light transition-colors"
              >
                <span>Explore The Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistProducts.map(product => (
              <div
                key={product.id}
                className="bg-white border border-eclat-champagne/50 p-6 rounded-sm shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Image on Plinth */}
                  <div className="relative bg-gradient-to-b from-eclat-limestone/40 to-eclat-limestone/80 p-6 rounded flex items-center justify-center min-h-[220px] mb-4">
                    <img
                      src={product.bottleImage}
                      alt={product.name}
                      className="h-44 object-contain drop-shadow"
                    />
                    <button
                      type="button"
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-3 right-3 p-1.5 rounded-full text-eclat-amber hover:bg-white transition-colors"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <span className="text-[10px] tracking-wider uppercase text-eclat-gold font-medium block">
                    {product.collectionNumber} &bull; {product.scentFamily}
                  </span>
                  <Link
                    to={`/product/${product.slug}`}
                    className="font-serif text-xl text-eclat-espresso hover:text-eclat-amber transition-colors block mt-0.5"
                  >
                    {product.name}
                  </Link>
                  <p className="text-xs text-eclat-slate mt-1 line-clamp-2">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="pt-6 border-t border-eclat-champagne/30 mt-6 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-serif text-eclat-espresso font-medium block">
                      {formatPrice(product.sizes[0].price)}
                    </span>
                    <span className="text-[10px] text-eclat-slate">{product.sizes[0].volume}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => addItem(product, product.sizes[0], 1)}
                    className="inline-flex items-center space-x-1.5 bg-eclat-espresso text-eclat-ivory px-3.5 py-2 text-xs uppercase tracking-wider font-medium hover:bg-eclat-espresso-light transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
