import React from 'react';
import { ScentFinderWidget } from '../components/scent-finder/ScentFinderWidget';

export const ScentFinderPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-eclat-ivory min-h-screen text-eclat-espresso">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-[11px] uppercase tracking-super-wide text-eclat-gold font-medium block">
            L&rsquo;Atelier Olfactif
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-eclat-espresso">
            Scent Finder
          </h1>
          <p className="text-xs sm:text-sm text-eclat-slate font-sans leading-relaxed">
            Finding a signature fragrance is an intimate exploration. Progress through three sensory questions to receive a deterministic recommendation calibrated to your presence.
          </p>
        </div>

        <ScentFinderWidget isEmbedded={false} />
      </div>
    </div>
  );
};
