import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Heart, ShoppingBag, Check } from 'lucide-react';
import { fragrances, Product } from '../../data/products';
import { formatPrice } from '../../utils/currency';
import { useBag } from '../../context/BagContext';
import { useWishlist } from '../../context/WishlistContext';

export const FragranceGallery: React.FC = () => {
  const { addItem } = useBag();
  const { isInWishlist, toggleWishlist } = useWishlist();

  // Top 3 featured fragrances for "The Scent Exhibition" (matching user's reference)
  const exhibitionFragrances = [
    fragrances[0], // 01 Vetiver Sauvage (p-9.png, green flacon)
    fragrances[1], // 02 Ambre Velours (p-8.png, amber flacon)
    fragrances[2], // 03 Fleur de Soie (p-1.png, pink flacon)
  ];

  // Remaining fragrances for "The Perfumer's Index"
  const indexFragrances = fragrances.slice(3);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeFragrance = indexFragrances[activeIndex] || indexFragrances[0];

  const [addingId, setAddingId] = useState<string | null>(null);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAddingId(product.id);
    addItem(product, product.sizes[0], 1);
    setTimeout(() => setAddingId(null), 1200);
  };

  return (
    <section className="bg-[#F7F4EE] text-[#171413] border-b border-[#DCD5C9] font-sans selection:bg-[#E5DDCF] overflow-x-hidden max-w-full">
      
      {/* ========================================================================= */}
      {/* 1. TOP SECTION: THE SCENT EXHIBITION                                      */}
      {/* ========================================================================= */}
      <div className="py-12 sm:py-24 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Top Eyebrow Row */}
        <div className="flex items-start justify-between pb-5 sm:pb-6 border-b border-[#D8D0C3] text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#241E19] font-semibold">
          <span>01 &mdash; The Collection</span>
          
          {/* Top-Right Stacked Editorial Annotation */}
          <div className="text-right text-[8.5px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#241E19] font-bold leading-relaxed">
            <span>SCENTS</span><br />
            <span>A MORE</span><br />
            <span>BEAUTIFUL</span><br />
            <span>TOMORROW</span>
          </div>
        </div>

        {/* Main Exhibition Grid: Full 12 columns utilized (3 for editorial, 9 for products) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 sm:pt-12 items-end">
          
          {/* Left Column: Exhibition Titles & Poetic Annotations (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-6 sm:space-y-10 lg:min-h-[520px]">
            <div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-[#171413]">
                The Scent<br />Exhibition
              </h2>
              <p className="font-serif text-lg sm:text-2xl italic font-normal text-[#2A221B] mt-2 sm:mt-3">
                Find your signature.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8 pt-2 sm:pt-4">
              <div className="w-10 h-[1.5px] bg-[#9C8F80]" />
              
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#241E19] leading-relaxed font-sans font-semibold max-w-[220px]">
                Exceptional fragrances for a more beautiful tomorrow.
              </p>

              <div>
                <div className="w-10 h-[1.5px] bg-[#9C8F80] mb-2 sm:mb-3" />
                <p className="font-serif italic text-sm sm:text-lg font-medium text-[#241E19] leading-[1.45]">
                  A kinder<br />
                  world smells<br />
                  brighter.
                </p>
              </div>
            </div>
          </div>

          {/* Right Area: All 3 Products Utilizing the Entire Available Space (lg:col-span-9) */}
          {/* Unified Product Cards: Bottle -> Divider -> Content for perfect mobile and desktop ordering */}
          <div className="lg:col-span-9 w-full max-w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-10 items-start">
              {exhibitionFragrances.map((product) => {
                const isSaved = isInWishlist(product.id);
                const isAdding = addingId === product.id;

                return (
                  <div key={product.id} className="group flex flex-col justify-between">
                    {/* Bottle Stage - exact identical height and baseline on desktop and mobile */}
                    <div className="relative flex flex-col items-center justify-end h-[280px] sm:h-[410px]">
                      {/* Atmospheric ingredient glow behind bottle */}
                      <div className="absolute bottom-6 rounded-full blur-2xl pointer-events-none transition-opacity duration-500 opacity-20 group-hover:opacity-40 w-40 sm:w-48 h-40 sm:h-48 bg-[#B87834]/30" />

                      {/* Shared Ground Contact Shadow at identical vertical offset */}
                      <div className="absolute bottom-2 w-32 sm:w-44 h-3.5 sm:h-4 rounded-[50%] bg-[#171413]/22 blur-[5px] sm:blur-[6px] transition-transform duration-500 group-hover:scale-105" />

                      {/* Freestanding Bottle resting on horizontal ground line */}
                      <Link
                        to={`/product/${product.slug}`}
                        className="relative z-10 w-full flex items-end justify-center focus:outline-none transition-transform duration-500 ease-out group-hover:-translate-y-2.5 pb-2"
                      >
                        <img
                          src={product.bottleImage}
                          alt={`${product.name} — ${product.scentFamily}`}
                          className="h-[220px] sm:h-[330px] max-w-[200px] sm:max-w-[270px] w-auto object-contain mx-auto drop-shadow-[0_20px_32px_rgba(23,20,19,0.22)]"
                          style={{ aspectRatio: '1 / 1' }}
                        />
                      </Link>

                      {/* Wishlist toggle button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleWishlist(product.id);
                        }}
                        className="absolute top-2 right-2 p-2 rounded-full text-[#382E25] hover:text-eclat-amber transition-colors focus:outline-none"
                        aria-label="Save to wishlist"
                      >
                        <Heart className={`w-4 h-4 ${isSaved ? 'fill-eclat-amber text-eclat-amber' : ''}`} />
                      </button>
                    </div>

                    {/* Divider line under this specific bottle */}
                    <div className="w-full border-t border-[#D8D0C3] mt-3 mb-4" />

                    {/* Content / Metadata for this exact product */}
                    <div className="text-left space-y-1.5">
                      <span className="text-xs font-sans tracking-widest text-[#241E19] font-bold block">
                        {product.collectionNumber}
                      </span>

                      <Link
                        to={`/product/${product.slug}`}
                        className="font-serif text-xl sm:text-2xl text-[#171413] hover:text-eclat-amber transition-colors font-medium tracking-wide uppercase block whitespace-nowrap overflow-hidden text-ellipsis"
                        title={product.name}
                      >
                        {product.name}
                      </Link>

                      <p className="text-xs uppercase tracking-wider text-[#3D332A] font-sans font-semibold">
                        {product.scentFamily}
                      </p>

                      <p className="font-serif text-lg sm:text-xl text-[#171413] font-bold pt-1">
                        {formatPrice(product.sizes[0].price)}
                      </p>

                      {/* Discover Scent link with delicate, non-bold underline */}
                      <div className="pt-2 flex items-center justify-between">
                        <Link
                          to={`/product/${product.slug}`}
                          className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.22em] font-semibold text-[#171413] hover:text-eclat-amber transition-colors border-b border-[#171413]/35 hover:border-eclat-amber pb-0.5"
                        >
                          <span>Discover scent</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>

                        <button
                          type="button"
                          onClick={(e) => handleQuickAdd(product, e)}
                          disabled={isAdding}
                          className="p-1.5 text-[#171413] hover:text-white hover:bg-[#171413] rounded-sm transition-colors"
                          aria-label={`Quick add ${product.name} to bag`}
                        >
                          {isAdding ? <Check className="w-4 h-4 text-eclat-amber" /> : <ShoppingBag className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>


      {/* ========================================================================= */}
      {/* 2. BOTTOM SECTION: THE PERFUMER'S INDEX                                   */}
      {/* ========================================================================= */}
      <div className="border-t border-[#D8D0C3] bg-[#F7F4EE] py-12 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Subtitle */}
            <div className="lg:col-span-3 space-y-4 sm:space-y-6">
              <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#171413] leading-[1.08]">
                The Perfumer&rsquo;s<br />Index
              </h3>
              <div className="w-10 h-[1.5px] bg-[#9C8F80]" />
              <p className="text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#241E19] font-sans font-bold leading-relaxed">
                THREE STORIES.<br />A THOUSAND EMOTIONS.
              </p>
            </div>

            {/* Middle Column: Interactive Numbered Index List */}
            <div className="lg:col-span-5 divide-y divide-[#D8D0C3] border-t border-b border-[#D8D0C3] max-w-full">
              {indexFragrances.map((item, idx) => {
                const isActive = activeIndex === idx;
                const displayNum = (idx + 1).toString().padStart(2, '0');

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => setActiveIndex(idx)}
                    className={`group py-3.5 sm:py-4 px-2.5 sm:px-3 flex items-center justify-between cursor-pointer transition-all duration-200 max-w-full ${
                      isActive
                        ? 'bg-[#EAE3D6] text-[#171413] pl-3.5 sm:pl-4 font-semibold'
                        : 'hover:bg-[#EFE9DF] text-[#171413]'
                    }`}
                  >
                    <div className="flex items-center space-x-4 sm:space-x-8 min-w-0 flex-1 mr-2">
                      <span className="text-xs sm:text-sm font-sans text-[#241E19] font-bold w-5 sm:w-6 flex-shrink-0">
                        {displayNum}
                      </span>
                      <span className="font-serif text-base sm:text-2xl truncate group-hover:text-eclat-amber transition-colors font-medium">
                        {item.name}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 sm:space-x-6 flex-shrink-0">
                      <span className="text-[9.5px] sm:text-xs uppercase tracking-wider text-[#3D332A] font-sans font-semibold">
                        {item.scentFamily}
                      </span>
                      <ArrowRight className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 ${
                        isActive ? 'text-[#171413] translate-x-1.5' : 'text-[#382E25] group-hover:translate-x-1.5'
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Live Showcase of Selected Fragrance Bottle & Vignette */}
            {/* Responsively stacks on mobile to guarantee zero overflow */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row items-center justify-center p-5 sm:p-6 lg:p-8 bg-[#FAF8F5] border border-[#D8D0C3] rounded-none relative gap-4 sm:gap-6 max-w-full">
              
              {/* Bottle Stage: strictly preserves 1:1 aspect ratio with flex-shrink-0 */}
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 flex-shrink-0 flex items-center justify-center">
                <Link
                  to={`/product/${activeFragrance.slug}`}
                  className="relative z-10 w-full h-full flex items-center justify-center"
                >
                  <img
                    key={activeFragrance.id}
                    src={activeFragrance.bottleImage}
                    alt={activeFragrance.name}
                    className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-[0_18px_28px_rgba(23,20,19,0.22)] transition-transform duration-300 hover:scale-105"
                    style={{ aspectRatio: '1 / 1' }}
                  />
                </Link>
                
                {/* Oval ground shadow */}
                <div className="absolute bottom-1 w-28 sm:w-32 h-3 rounded-[50%] bg-[#171413]/20 blur-[5px] pointer-events-none" />
              </div>

              {/* Side Note & Tagline mirroring reference image */}
              <div className="flex flex-col justify-center space-y-2 sm:space-y-3 pl-0 sm:pl-6 border-t sm:border-t-0 sm:border-l border-[#D8D0C3] pt-3 sm:pt-0 w-full sm:w-auto text-center sm:text-left items-center sm:items-start min-w-0">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#241E19] font-sans font-bold">
                  {activeFragrance.scentFamily}
                </span>
                
                <div className="w-8 h-[1.5px] bg-[#9C8F80] hidden sm:block" />
                
                <p className="font-serif italic text-sm sm:text-lg font-medium text-[#241E19] leading-[1.45]">
                  Depth<br className="hidden sm:inline" /> in every<br className="hidden sm:inline" /> detail.
                </p>
                
                <p className="font-serif text-base sm:text-lg text-[#171413] font-bold pt-0.5 sm:pt-1">
                  {formatPrice(activeFragrance.sizes[0].price)}
                </p>
                
                {/* Discover link without bold underline */}
                <Link
                  to={`/product/${activeFragrance.slug}`}
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.22em] font-semibold text-[#171413] hover:text-eclat-amber pt-1 border-b border-[#171413]/35 hover:border-eclat-amber pb-0.5 w-fit"
                >
                  <span>Discover</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Editorial Sub-footer Bar */}
          <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-[#D8D0C3] flex flex-col sm:flex-row items-center justify-between text-[9px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.28em] text-[#241E19] font-bold gap-3 text-center sm:text-left">
            <span>PEOPLE &nbsp;/&nbsp; PLACES &nbsp;/&nbsp; PERFUMES &nbsp;/&nbsp; A BRIGHTER TOMORROW</span>
            <span className="font-serif tracking-[0.3em] sm:tracking-[0.35em] text-[#171413] font-bold text-xs sm:text-sm">
              ECLAT &nbsp;&nbsp; PARIS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
