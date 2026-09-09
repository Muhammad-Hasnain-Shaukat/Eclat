import React from 'react';
import { ResponsiveHero } from '../components/hero/ResponsiveHero';
import { BrandIntro } from '../components/home/BrandIntro';
import { FragranceGallery } from '../components/gallery/FragranceGallery';
import { IngredientStorySection } from '../components/home/IngredientStory';
import { ScentFinderWidget } from '../components/scent-finder/ScentFinderWidget';
import { FeaturedEditorial } from '../components/home/FeaturedEditorial';
import { Sparkles } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* 1. Cinematic Hero */}
      <ResponsiveHero />

      {/* 2. Brand Introduction */}
      <BrandIntro />

      {/* 3. The Fragrance Gallery (Freestanding open presentation) */}
      <FragranceGallery />

      {/* 4. Ingredient and Scent-Notes Story */}
      <IngredientStorySection />

      {/* 5. Interactive Scent Finder */}
      <section className="py-24 sm:py-32 bg-eclat-limestone/30 border-b border-eclat-champagne/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[11px] uppercase tracking-super-wide text-eclat-gold font-medium block mb-2">
              Scent Diagnosis
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-eclat-espresso font-light">
              Discover Your Signature Note
            </h2>
            <p className="text-xs sm:text-sm text-eclat-slate mt-2">
              Answer three questions to calibrate your personal olfactory profile.
            </p>
          </div>

          <ScentFinderWidget isEmbedded={true} />
        </div>
      </section>

      {/* 6. Featured Fragrance Editorial (Deep Espresso Contrast) */}
      <FeaturedEditorial />
    </div>
  );
};
