import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Compass, MapPin } from 'lucide-react';
import { ingredientStories } from '../data/ingredients';

export const IngredientsPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-eclat-ivory min-h-screen text-eclat-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="border-b border-eclat-champagne/40 pb-12 mb-16 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] uppercase tracking-super-wide text-eclat-gold font-medium block">
            Matières Premières
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-eclat-espresso tracking-wide">
            Raw Extracts
          </h1>
          <p className="font-serif text-lg sm:text-xl italic text-eclat-slate">
            &ldquo;From soil to skin &mdash; pure botanical origins.&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-eclat-slate font-sans leading-relaxed pt-2">
            We partner exclusively with generational growers and distillers who practice ethical, sustainable harvests across six distinct geographic microclimates.
          </p>
        </div>

        {/* The Botanical Archive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mb-24">
          {ingredientStories.map(story => (
            <div
              key={story.id}
              className="bg-white border border-eclat-champagne/50 p-6 sm:p-8 rounded-sm shadow-sm space-y-5 flex flex-col justify-between"
            >
              <div>
                {/* Visual Image */}
                <div className="relative overflow-hidden rounded-xs mb-6 h-64 bg-eclat-limestone">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-xs text-white text-[10px] uppercase tracking-wider flex items-center space-x-1.5">
                    <MapPin className="w-3 h-3 text-eclat-gold" />
                    <span>{story.origin}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-[10px] uppercase tracking-ultra-wide text-eclat-gold font-medium">
                  <Sparkles className="w-3 h-3" />
                  <span>{story.category}</span>
                </div>

                <h3 className="font-serif text-2xl text-eclat-espresso font-light mt-1">
                  {story.title}
                </h3>

                <p className="text-xs font-serif italic text-eclat-slate mb-3">
                  {story.botanicalName}
                </p>

                <p className="text-xs text-eclat-espresso/80 font-sans leading-relaxed">
                  {story.description}
                </p>
              </div>

              <div className="pt-4 border-t border-eclat-champagne/40 space-y-2 text-xs">
                <div className="flex items-start text-eclat-slate">
                  <span className="font-medium text-eclat-espresso w-24 flex-shrink-0">Sillage:</span>
                  <span>{story.olfactoryCharacter}</span>
                </div>
                <div className="flex items-start text-eclat-amber">
                  <span className="font-medium w-24 flex-shrink-0">In Flacon:</span>
                  <span>{story.accentNote}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout to Scent Finder */}
        <div className="bg-eclat-espresso text-eclat-ivory p-8 sm:p-14 rounded-sm text-center max-w-3xl mx-auto space-y-5">
          <span className="text-[11px] uppercase tracking-super-wide text-eclat-gold font-medium block">
            Discover Your Formula
          </span>
          <h2 className="font-serif text-3xl font-light text-white">
            Which raw accord defines your presence?
          </h2>
          <p className="text-xs sm:text-sm text-eclat-sand/80 max-w-lg mx-auto leading-relaxed">
            Take our 3-step olfactory diagnosis to match your personal mood and daily ritual to the right extrait.
          </p>
          <div className="pt-2">
            <Link
              to="/scent-finder"
              className="inline-flex items-center space-x-2 bg-white text-eclat-espresso px-7 py-3 text-xs uppercase tracking-ultra-wide font-medium hover:bg-eclat-champagne transition-colors"
            >
              <span>Launch Scent Finder</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
