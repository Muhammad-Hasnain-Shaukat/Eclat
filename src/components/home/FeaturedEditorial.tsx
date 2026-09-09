import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { fragrances } from '../../data/products';
import { formatPrice } from '../../utils/currency';

export const FeaturedEditorial: React.FC = () => {
  // Deep espresso section focusing on Oud Absolu (N° 06)
  const product = fragrances[5]; // Oud Absolu

  return (
    <section className="py-24 sm:py-32 bg-eclat-espresso text-eclat-ivory relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-eclat-amber/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-super-wide text-eclat-gold font-medium border-l border-eclat-gold pl-3">
              <span>Atelier Spotlight &bull; {product.collectionNumber}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
              {product.name}
            </h2>

            <p className="font-serif text-lg sm:text-xl text-eclat-sand/90 italic">
              &ldquo;{product.subtitle}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-eclat-pebble font-sans leading-relaxed">
              Seven-year wild Cambodian agarwood meets dark mountain thyme honey and smoked Somalian myrrh. Cast in deep obsidian glass with an architecture engineered to retain intense Extrait concentration over twenty hours.
            </p>

            <div className="pt-2 grid grid-cols-3 gap-2 sm:gap-4 border-y border-white/10 py-4">
              <div>
                <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-eclat-gold">Concentration</span>
                <span className="font-serif text-sm sm:text-base text-white">30% Extrait</span>
              </div>
              <div>
                <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-eclat-gold">Maceration</span>
                <span className="font-serif text-sm sm:text-base text-white">7 Years</span>
              </div>
              <div>
                <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-eclat-gold">Starting Flacon</span>
                <span className="font-serif text-sm sm:text-base text-white">{formatPrice(product.sizes[0].price)}</span>
              </div>
            </div>

            <div className="pt-4 flex items-center space-x-6">
              <Link
                to={`/product/${product.slug}`}
                className="inline-flex items-center space-x-3 bg-eclat-ivory text-eclat-espresso px-7 py-3.5 text-xs uppercase tracking-ultra-wide font-medium hover:bg-eclat-champagne transition-colors group"
              >
                <span>Discover {product.name}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Freestanding Bottle in Dramatic Espresso Lighting */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-md flex flex-col items-center">
              {/* Subtle ambient oval shadow */}
              <div className="absolute -bottom-4 w-48 h-6 bg-black/60 rounded-[50%] blur-md" />
              
              <Link to={`/product/${product.slug}`} className="group block focus:outline-none">
                <img
                  src={product.bottleImage}
                  alt={product.name}
                  className="w-72 sm:w-80 h-auto max-h-[420px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)] transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
