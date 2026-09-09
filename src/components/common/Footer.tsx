import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-eclat-espresso text-eclat-ivory border-t border-eclat-espresso-soft/40 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Wordmark with Emblem & Sentence */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-2 sm:space-x-2.5">
              <img
                src="/images/eclat-logo-white.png"
                alt="ÉCLAT"
                className="h-5 sm:h-5.5 w-auto object-contain -translate-y-[2px]"
              />
              <span className="font-serif text-lg sm:text-xl tracking-[0.22em] uppercase font-light text-white block leading-none">
                ÉCLAT
              </span>
            </div>
            <p className="text-sm font-serif italic text-eclat-sand max-w-md leading-relaxed">
              &ldquo;A presence that lingers.&rdquo;
            </p>
            <p className="text-xs text-eclat-pebble max-w-md leading-relaxed font-sans">
              Haute Parfumerie distilled with architectural restraint, tactile glass vessels, and rare botanical extracts sourced through generational cultivators.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[11px] uppercase tracking-ultra-wide text-eclat-gold font-medium">
              Navigation
            </p>
            <ul className="space-y-2.5 text-xs text-eclat-sand tracking-wider uppercase font-sans">
              <li>
                <Link to="/collection" className="hover:text-white transition-colors">
                  The Collection
                </Link>
              </li>
              <li>
                <Link to="/ingredients" className="hover:text-white transition-colors">
                  Raw Extracts
                </Link>
              </li>
              <li>
                <Link to="/scent-finder" className="hover:text-white transition-colors">
                  Scent Finder
                </Link>
              </li>
              <li>
                <Link to="/atelier" className="hover:text-white transition-colors">
                  The Atelier
                </Link>
              </li>
              <li>
                <Link to="/our-world" className="hover:text-white transition-colors">
                  Our World
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-white transition-colors">
                  Saved Fragrances
                </Link>
              </li>
            </ul>
          </div>

          {/* Atelier Footnote */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[11px] uppercase tracking-ultra-wide text-eclat-gold font-medium">
              Atelier
            </p>
            <p className="text-xs text-eclat-pebble leading-relaxed">
              Formulation & Private Client Consultations
            </p>
            <p className="text-xs text-eclat-sand">
              Lahore &bull; Paris
            </p>
            <p className="text-[11px] text-eclat-pebble/80 pt-2">
              Flacons hand-poured in small numbered batches.
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-eclat-pebble tracking-wider">
          <p>&copy; {new Date().getFullYear()} ÉCLAT Haute Parfumerie. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-serif italic text-eclat-sand/70">
            Architectural fragrance design
          </p>
        </div>
      </div>
    </footer>
  );
};
