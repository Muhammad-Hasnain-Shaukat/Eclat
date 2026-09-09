import React from 'react';
import { Product, FragranceSize } from '../../data/products';
import { formatPrice } from '../../utils/currency';
import { ShoppingBag, Check } from 'lucide-react';

interface StickyPurchaseBarProps {
  product: Product;
  selectedSize: FragranceSize;
  isVisible: boolean;
  onAddToCart: () => void;
  isAdding: boolean;
}

export const StickyPurchaseBar: React.FC<StickyPurchaseBarProps> = ({
  product,
  selectedSize,
  isVisible,
  onAddToCart,
  isAdding
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-eclat-ivory/95 backdrop-blur-md border-t border-eclat-champagne/60 p-4 pb-safe shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between gap-4">
        {/* Product Snapshot */}
        <div className="flex items-center space-x-3 min-w-0">
          <div className="w-10 h-12 bg-eclat-limestone rounded flex items-center justify-center p-1 flex-shrink-0">
            <img
              src={product.bottleImage}
              alt={product.name}
              className="w-full h-full object-contain drop-shadow"
            />
          </div>
          <div className="min-w-0">
            <h4 className="font-serif text-sm font-medium text-eclat-espresso truncate">
              {product.name}
            </h4>
            <p className="text-xs text-eclat-slate">
              {selectedSize.volume} &bull; {formatPrice(selectedSize.price)}
            </p>
          </div>
        </div>

        {/* Purchase Action Button */}
        <button
          type="button"
          onClick={onAddToCart}
          disabled={isAdding}
          className="flex-shrink-0 bg-eclat-espresso text-eclat-ivory px-5 py-2.5 rounded-sm text-xs uppercase tracking-ultra-wide font-medium hover:bg-eclat-espresso-light active:bg-black transition-colors flex items-center space-x-2"
        >
          {isAdding ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Added</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add to Bag</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
