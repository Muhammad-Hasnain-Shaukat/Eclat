import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Plus, Check, ArrowUpRight } from 'lucide-react';
import { Product } from '../../data/products';
import { formatPrice } from '../../utils/currency';
import { useBag } from '../../context/BagContext';
import { useWishlist } from '../../context/WishlistContext';

interface PlinthBottleProps {
  product: Product;
  isFeatured?: boolean;
  priority?: boolean;
}

export const PlinthBottle: React.FC<PlinthBottleProps> = ({
  product,
  isFeatured = false,
}) => {
  const { addItem } = useBag();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [isAdding, setIsAdding] = useState(false);

  const isSaved = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addItem(product, product.sizes[0], 1);
    setTimeout(() => setIsAdding(false), 1200);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div
      className={`group relative h-full flex flex-col justify-between bg-transparent ${
        isFeatured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {/* Freestanding Bottle Stage - Uniform height for all bottles on same plane */}
      <div className="relative w-full h-[340px] sm:h-[390px] flex flex-col items-center justify-end pb-4">
        
        {/* Subtle stone plinth platform underneath */}
        <div className="absolute bottom-4 w-3/4 max-w-[220px] h-5 rounded-[50%] bg-gradient-to-r from-transparent via-eclat-limestone to-transparent opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100" />
        
        {/* Oval drop shadow under the bottle base - exact same offset for every bottle */}
        <div className="absolute bottom-3 w-1/2 max-w-[160px] h-3.5 rounded-[50%] bg-black/15 blur-[5px] transition-all duration-500 group-hover:w-3/5 group-hover:opacity-25" />

        {/* Freestanding Bottle Image with gentle hover lift */}
        <Link
          to={`/product/${product.slug}`}
          className="relative z-10 w-full flex items-end justify-center transform transition-transform duration-500 ease-out group-hover:-translate-y-2.5 focus:outline-none pb-1"
          tabIndex={0}
        >
          <img
            src={product.bottleImage}
            alt={`${product.name} — ${product.scentFamily}`}
            className="w-auto h-auto max-h-[270px] sm:max-h-[310px] max-w-[220px] sm:max-w-[250px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.18)] mx-auto"
            style={{ aspectRatio: '1 / 1' }}
            loading="lazy"
          />
        </Link>

        {/* Wishlist Button (Discreet in corner) */}
        <button
          type="button"
          onClick={handleWishlistToggle}
          className={`absolute top-2 right-2 z-20 p-2 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-eclat-gold ${
            isSaved
              ? 'text-eclat-amber bg-eclat-limestone/80'
              : 'text-eclat-espresso/40 hover:text-eclat-espresso hover:bg-eclat-limestone/50'
          }`}
          aria-label={isSaved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
        >
          <Heart className={`w-4 h-4 stroke-[1.5] ${isSaved ? 'fill-eclat-amber text-eclat-amber' : ''}`} />
        </button>
      </div>

      {/* Captions Beneath Bottle - Flex column with mt-auto ensuring identical Quick Add button alignment */}
      <div className="flex-1 flex flex-col justify-between pt-3 px-1 text-center sm:text-left space-y-2">
        <div className="space-y-1.5">
          <div className="flex items-center justify-center sm:justify-between text-[11px] uppercase tracking-ultra-wide text-eclat-gold font-medium">
            <span>{product.collectionNumber}</span>
            <span className="hidden sm:inline text-eclat-slate font-medium">{product.concentration.split(' ')[0]}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <Link
              to={`/product/${product.slug}`}
              className="font-serif text-xl sm:text-2xl text-eclat-espresso hover:text-eclat-amber transition-colors font-medium tracking-wide whitespace-nowrap overflow-hidden text-ellipsis"
              title={product.name}
            >
              {product.name}
            </Link>
            <span className="font-serif text-base text-eclat-espresso/90 font-bold whitespace-nowrap">
              {formatPrice(product.sizes[0].price)}
            </span>
          </div>

          <p className="text-xs text-eclat-slate tracking-wide font-medium">
            {product.scentFamily} &bull; {product.sizes[0].volume}
          </p>
        </div>

        {/* Discover Scent and Quick-Add Actions - Pinned to bottom at identical horizontal level */}
        <div className="pt-3 mt-3 flex items-center justify-between border-t border-eclat-champagne/40">
          <Link
            to={`/product/${product.slug}`}
            className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-ultra-wide text-eclat-espresso hover:text-eclat-amber transition-colors py-1 font-semibold"
          >
            <span>Discover scent</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <button
            type="button"
            onClick={handleQuickAdd}
            disabled={isAdding}
            className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-sm text-xs tracking-wider uppercase font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-eclat-gold ${
              isAdding
                ? 'bg-eclat-amber text-white'
                : 'bg-eclat-limestone hover:bg-eclat-champagne/70 text-eclat-espresso'
            }`}
            aria-label={`Quick add ${product.name} to shopping bag`}
          >
            {isAdding ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[2]" />
                <span className="text-[10.5px]">Added</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 stroke-[1.5]" />
                <span className="text-[10.5px]">Quick Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
