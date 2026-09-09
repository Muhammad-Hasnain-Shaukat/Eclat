import React from 'react';
import { ingredientStories } from '../../data/ingredients';
import { Compass, Sparkles } from 'lucide-react';

export const IngredientStorySection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-eclat-limestone-subtle border-t border-b border-eclat-champagne/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[11px] uppercase tracking-super-wide text-eclat-gold font-medium block mb-2">
            Matières Premières
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-eclat-espresso tracking-wide mb-4">
            The Raw Architecture
          </h2>
          <p className="text-xs sm:text-sm text-eclat-slate leading-relaxed">
            Botanical extracts, wild resins, and aged wood absolutes collected through generational relationships across Andalusia, Tuscany, and Calabria.
          </p>
        </div>

        {/* Alternating Compositions */}
        <div className="space-y-20 sm:space-y-28">
          {ingredientStories.map((story, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={story.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center"
              >
                {/* Image Container - On mobile, it appears right above its text; on desktop it alternates */}
                <div
                  className={`md:col-span-6 ${
                    isEven ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  <div className="relative group overflow-hidden bg-eclat-limestone rounded-sm shadow-md">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-72 sm:h-96 md:h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    
                    {/* Origin Badge */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="font-serif italic">{story.origin}</span>
                      <span className="text-[10px] uppercase tracking-widest text-eclat-champagne font-medium">
                        {story.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div
                  className={`md:col-span-6 space-y-4 ${
                    isEven ? 'md:order-1 md:pr-8' : 'md:order-2 md:pl-8'
                  }`}
                >
                  <div className="flex items-center space-x-2 text-[11px] uppercase tracking-ultra-wide text-eclat-gold font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{story.category}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-eclat-espresso font-light">
                    {story.title}
                  </h3>

                  <p className="text-xs font-serif italic text-eclat-slate">
                    {story.botanicalName}
                  </p>

                  <p className="text-xs sm:text-sm text-eclat-espresso/80 leading-relaxed font-sans pt-1">
                    {story.description}
                  </p>

                  <div className="pt-3 border-t border-eclat-champagne/40 space-y-1.5">
                    <div className="flex items-start text-xs text-eclat-slate">
                      <span className="font-medium text-eclat-espresso w-24 flex-shrink-0">Character:</span>
                      <span>{story.olfactoryCharacter}</span>
                    </div>
                    <div className="flex items-start text-xs text-eclat-slate">
                      <span className="font-medium text-eclat-espresso w-24 flex-shrink-0">Harvest:</span>
                      <span>{story.harvestMethod}</span>
                    </div>
                    <div className="flex items-start text-xs text-eclat-amber">
                      <span className="font-medium w-24 flex-shrink-0">In Flacon:</span>
                      <span>{story.accentNote}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
