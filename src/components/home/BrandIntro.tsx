import React from 'react';

export const BrandIntro: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-eclat-ivory border-b border-eclat-champagne/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-[11px] uppercase tracking-super-wide text-eclat-gold font-medium block">
          L&rsquo;Architecture Olfactive
        </span>

        {/* Strong single sentence */}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-eclat-espresso leading-relaxed text-balance">
          We formulate fragrances not to announce an entrance, but to leave an indelible architectural silhouette in memory.
        </h2>

        {/* Restrained supporting paragraph */}
        <p className="text-xs sm:text-sm text-eclat-slate font-sans max-w-2xl mx-auto leading-relaxed tracking-wide">
          Each flacon is cast in heavyweight mineral glass, balanced with a cold brass stopper, and filled with concentrated pure extraits distilled from wild-harvested botanicals and aged resins.
        </p>

        <div className="pt-4 flex justify-center items-center space-x-3 text-eclat-gold">
          <div className="w-8 h-[1px] bg-eclat-gold/40" />
          <span className="text-[10px] tracking-widest uppercase font-serif">&Eacute;CLAT</span>
          <div className="w-8 h-[1px] bg-eclat-gold/40" />
        </div>
      </div>
    </section>
  );
};
