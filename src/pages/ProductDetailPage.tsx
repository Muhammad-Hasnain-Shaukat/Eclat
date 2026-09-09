import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, Plus, Minus, Check, ArrowRight, ShieldCheck, Sparkles, ChevronLeft } from 'lucide-react';
import { fragrances, Product, FragranceSize } from '../data/products';
import { formatPrice } from '../utils/currency';
import { useBag } from '../context/BagContext';
import { useWishlist } from '../context/WishlistContext';
import { OlfactoryPyramid } from '../components/product/OlfactoryPyramid';
import { StickyPurchaseBar } from '../components/product/StickyPurchaseBar';
import { PlinthBottle } from '../components/gallery/PlinthBottle';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const product = fragrances.find(f => f.slug === slug);

  // Fallback if not found
  useEffect(() => {
    if (!product) {
      navigate('/collection', { replace: true });
    }
  }, [product, navigate]);

  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<FragranceSize>(product.sizes[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [activeImage, setActiveImage] = useState<'bottle' | 'detail'>('bottle');

  const { addItem } = useBag();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isSaved = isInWishlist(product.id);

  // IntersectionObserver to trigger mobile sticky purchase bar
  const primaryBuySectionRef = useRef<HTMLDivElement>(null);
  const [showStickyBar, setShowStickyBar] = useState<boolean>(false);

  useEffect(() => {
    // Reset selected size when product changes
    setSelectedSize(product.sizes[0]);
    setQuantity(1);
    setActiveImage('bottle');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product.id]);

  useEffect(() => {
    const target = primaryBuySectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Sticky bar shows when the primary buy section has scrolled out of view upwards
        setShowStickyBar(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0.1 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [product.id]);

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(product, selectedSize, quantity);
    setTimeout(() => setIsAdding(false), 1200);
  };

  // 2 related fragrances (excluding current)
  const relatedFragrances = fragrances
    .filter(f => f.id !== product.id)
    .slice(0, 2);

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-eclat-ivory min-h-screen text-eclat-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            to="/collection"
            className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-ultra-wide text-eclat-slate hover:text-eclat-espresso transition-colors font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Return to Collection</span>
          </Link>
        </div>

        {/* Spacious Two-Column Composition (Desktop) / Imagery First (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-eclat-champagne/40">
          
          {/* COLUMN 1: Large Bottle & Detail Photography (Col-span 7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Stage */}
            <div className="relative bg-gradient-to-b from-eclat-limestone/30 to-eclat-limestone/70 border border-eclat-champagne/40 rounded-sm p-8 sm:p-14 flex items-center justify-center min-h-[400px] sm:min-h-[520px] overflow-hidden">
              {/* Shallow Stone Plinth Base & Oval Shadow */}
              <div className="absolute bottom-10 w-3/4 max-w-[320px] h-8 rounded-[50%] bg-gradient-to-r from-transparent via-eclat-champagne/40 to-transparent" />
              <div className="absolute bottom-10 w-1/2 max-w-[220px] h-5 rounded-[50%] bg-black/15 blur-md" />

              <img
                src={activeImage === 'bottle' ? product.bottleImage : product.detailImage}
                alt={`${product.name} luxury flacon`}
                className="relative z-10 max-h-[380px] sm:max-h-[460px] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.2)] transition-all duration-500"
              />

              {/* Wishlist Button on Image */}
              <button
                type="button"
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-6 right-6 z-20 p-3 rounded-full transition-colors ${
                  isSaved
                    ? 'text-eclat-amber bg-white shadow-md'
                    : 'text-eclat-espresso/60 hover:text-eclat-espresso bg-white/70 hover:bg-white shadow-sm'
                }`}
                aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
              >
                <Heart className={`w-5 h-5 stroke-[1.5] ${isSaved ? 'fill-eclat-amber' : ''}`} />
              </button>
            </div>

            {/* Thumbnail Switcher (Bottle vs Detail Close-up) */}
            <div className="flex space-x-4 justify-center sm:justify-start">
              <button
                type="button"
                onClick={() => setActiveImage('bottle')}
                className={`w-20 h-24 bg-eclat-limestone/50 border rounded-sm p-2 transition-all flex items-center justify-center ${
                  activeImage === 'bottle'
                    ? 'border-eclat-espresso ring-1 ring-eclat-espresso'
                    : 'border-eclat-champagne/60 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={product.bottleImage} alt="Flacon view" className="h-full object-contain" />
              </button>

              <button
                type="button"
                onClick={() => setActiveImage('detail')}
                className={`w-20 h-24 bg-eclat-limestone/50 border rounded-sm p-2 transition-all flex items-center justify-center ${
                  activeImage === 'detail'
                    ? 'border-eclat-espresso ring-1 ring-eclat-espresso'
                    : 'border-eclat-champagne/60 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={product.detailImage} alt="Stopper detail view" className="h-full object-cover rounded-xs" />
              </button>
            </div>
          </div>

          {/* COLUMN 2: Fragrance Narrative & Commerce Controls (Col-span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[11px] uppercase tracking-ultra-wide text-eclat-gold font-medium">
                <span>{product.collectionNumber}</span>
                <span>&bull;</span>
                <span>{product.concentration}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-eclat-espresso tracking-wide">
                {product.name}
              </h1>

              <p className="font-serif text-base sm:text-lg text-eclat-slate italic">
                {product.subtitle}
              </p>
            </div>

            {/* Price for Selected Variant */}
            <div className="pt-2 pb-4 border-b border-eclat-champagne/40">
              <span className="font-serif text-3xl text-eclat-espresso font-normal">
                {formatPrice(selectedSize.price)}
              </span>
              <span className="text-xs text-eclat-slate block mt-1 font-sans">
                {selectedSize.description} &bull; Taxes included
              </span>
            </div>

            {/* Editorial Description */}
            <p className="text-xs sm:text-sm text-eclat-espresso/80 font-sans leading-relaxed">
              {product.longDescription}
            </p>

            {/* SIZE SELECTOR */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between text-xs text-eclat-slate uppercase tracking-ultra-wide font-medium">
                <span>Select Flacon Volume</span>
                <span className="text-eclat-espresso font-semibold">{selectedSize.volume}</span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {product.sizes.map(sz => (
                  <button
                    key={sz.volume}
                    type="button"
                    onClick={() => setSelectedSize(sz)}
                    className={`py-3 px-2 border rounded-sm text-center transition-all ${
                      selectedSize.volume === sz.volume
                        ? 'border-eclat-espresso bg-eclat-espresso text-eclat-ivory shadow-sm'
                        : 'border-eclat-champagne/70 bg-white hover:border-eclat-pebble text-eclat-espresso'
                    }`}
                  >
                    <span className="block text-xs font-serif font-medium">{sz.volume}</span>
                    <span className={`block text-[10px] mt-0.5 ${selectedSize.volume === sz.volume ? 'text-eclat-champagne' : 'text-eclat-slate'}`}>
                      {formatPrice(sz.price)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* PRIMARY BUY CONTROLS (Observed by IntersectionObserver for mobile sticky bar) */}
            <div ref={primaryBuySectionRef} className="pt-4 space-y-4">
              <div className="flex items-center gap-4">
                {/* Quantity Control */}
                <div className="flex items-center border border-eclat-champagne rounded-sm bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-eclat-slate hover:text-eclat-espresso focus:outline-none"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-semibold text-eclat-espresso">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-eclat-slate hover:text-eclat-espresso focus:outline-none"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Shopping Bag Button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className="flex-1 bg-eclat-espresso text-eclat-ivory py-3.5 px-6 rounded-sm text-xs uppercase tracking-ultra-wide font-medium hover:bg-eclat-espresso-light active:bg-black transition-colors flex items-center justify-center space-x-2"
                >
                  {isAdding ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <span>Add to Bag &bull; {formatPrice(selectedSize.price * quantity)}</span>
                  )}
                </button>
              </div>

              {/* Atelier Note */}
              <div className="pt-2 text-[11px] text-eclat-slate/90 flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-eclat-gold flex-shrink-0" />
                <span>Individually poured &bull; Sealed with bespoke wax stamp &bull; Flacon numbered</span>
              </div>
            </div>

            {/* Olfactory Pyramid Component */}
            <div className="pt-6">
              <OlfactoryPyramid product={product} />
            </div>
          </div>
        </div>

        {/* RELATED FRAGRANCES SECTION */}
        <div className="pt-20">
          <div className="border-b border-eclat-champagne/40 pb-4 mb-12 flex items-baseline justify-between">
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-eclat-espresso">
              Related Atelier Compositions
            </h3>
            <Link
              to="/collection"
              className="text-xs uppercase tracking-ultra-wide text-eclat-espresso hover:text-eclat-amber transition-colors font-medium"
            >
              View All Flacons
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {relatedFragrances.map(rel => (
              <div key={rel.id} className="bg-eclat-limestone/20 p-6 rounded-sm">
                <PlinthBottle product={rel} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE STICKY PURCHASE BAR (Appears when primary purchase controls scroll out of view) */}
      <StickyPurchaseBar
        product={product}
        selectedSize={selectedSize}
        isVisible={showStickyBar}
        onAddToCart={handleAddToCart}
        isAdding={isAdding}
      />
    </div>
  );
};
