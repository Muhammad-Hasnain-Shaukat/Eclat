import React from 'react';
import { Product } from '../../data/products';

interface OlfactoryPyramidProps {
  product: Product;
}

export const OlfactoryPyramid: React.FC<OlfactoryPyramidProps> = ({ product }) => {
  return (
    <div className="bg-eclat-limestone/40 border border-eclat-champagne/50 p-6 sm:p-8 rounded-sm space-y-6">
      <div className="border-b border-eclat-champagne/40 pb-4">
        <span className="text-[11px] uppercase tracking-ultra-wide text-eclat-gold font-medium block mb-1">
          Olfactory Architecture
        </span>
        <h3 className="font-serif text-2xl text-eclat-espresso font-light">
          The Scent Architecture
        </h3>
      </div>

      <div className="space-y-6">
        {/* Top Notes */}
        <div className="relative pl-6 border-l-2 border-eclat-gold/40 space-y-1">
          <div className="flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-ultra-wide text-eclat-amber font-semibold">
              Top Notes
            </span>
            <span className="text-[10px] text-eclat-slate">0 &ndash; 30 Minutes</span>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {product.topNotes.map(note => (
              <span
                key={note}
                className="bg-white/80 border border-eclat-champagne/60 px-3 py-1 text-xs text-eclat-espresso rounded-sm font-sans"
              >
                {note}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-eclat-slate font-sans pt-0.5">
            Volatile opening accord &bull; First impression upon skin contact
          </p>
        </div>

        {/* Heart Notes */}
        <div className="relative pl-6 border-l-2 border-eclat-gold space-y-1">
          <div className="flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-ultra-wide text-eclat-amber font-semibold">
              Heart Notes
            </span>
            <span className="text-[10px] text-eclat-slate">30 Mins &ndash; 4 Hours</span>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {product.heartNotes.map(note => (
              <span
                key={note}
                className="bg-white/80 border border-eclat-champagne/60 px-3 py-1 text-xs text-eclat-espresso rounded-sm font-sans"
              >
                {note}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-eclat-slate font-sans pt-0.5">
            The core character and signature projection
          </p>
        </div>

        {/* Base Notes */}
        <div className="relative pl-6 border-l-2 border-eclat-espresso space-y-1">
          <div className="flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-ultra-wide text-eclat-espresso font-semibold">
              Base Notes
            </span>
            <span className="text-[10px] text-eclat-slate">4 &ndash; 14+ Hours</span>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {product.baseNotes.map(note => (
              <span
                key={note}
                className="bg-white/80 border border-eclat-champagne/60 px-3 py-1 text-xs text-eclat-espresso rounded-sm font-sans"
              >
                {note}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-eclat-slate font-sans pt-0.5">
            Deep resinous fixation that clings to fabric and skin through midnight
          </p>
        </div>
      </div>
    </div>
  );
};
