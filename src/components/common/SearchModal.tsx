import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { fragrances, Product } from '../../data/products';
import { formatPrice } from '../../utils/currency';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const results: Product[] = normalizedQuery
    ? fragrances.filter(f => {
        const matchName = f.name.toLowerCase().includes(normalizedQuery);
        const matchFamily = f.scentFamily.toLowerCase().includes(normalizedQuery);
        const matchNotes = [...f.topNotes, ...f.heartNotes, ...f.baseNotes].some(n =>
          n.toLowerCase().includes(normalizedQuery)
        );
        const matchMood = f.mood.toLowerCase().includes(normalizedQuery);
        return matchName || matchFamily || matchNotes || matchMood;
      })
    : [];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Search Fragrances"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-screen px-4 text-center flex items-start justify-center pt-20 pb-12">
        <div
          className="inline-block w-full max-w-2xl text-left align-middle transition-all transform bg-eclat-ivory shadow-2xl overflow-hidden border border-eclat-champagne/60 rounded-sm"
          onClick={e => e.stopPropagation()}
        >
          {/* Search Input Bar */}
          <div className="relative border-b border-eclat-champagne/50 p-4 sm:p-6 flex items-center">
            <Search className="w-5 h-5 text-eclat-pebble mr-3 stroke-[1.5]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search by fragrance, note (e.g. Amber, Bergamot, Orris), or family..."
              className="w-full bg-transparent text-eclat-espresso placeholder-eclat-pebble focus:outline-none text-base sm:text-lg font-serif"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="p-1 text-eclat-pebble hover:text-eclat-espresso text-xs uppercase tracking-wider mr-2"
              >
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-eclat-espresso/60 hover:text-eclat-espresso focus:outline-none focus-visible:ring-2 focus-visible:ring-eclat-gold"
              aria-label="Close search"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Results Area */}
          <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
            {!query ? (
              <div className="py-6">
                <p className="text-xs uppercase tracking-ultra-wide text-eclat-slate font-medium mb-3">
                  Suggested Explorations
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Amber', 'Bergamot', 'Orris', 'Woody', 'Rose', 'Wild Agarwood'].map(tag => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setQuery(tag)}
                      className="text-xs bg-eclat-limestone hover:bg-eclat-champagne/60 text-eclat-espresso px-3 py-1.5 rounded-full transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ) : results.length === 0 ? (
              <div className="py-12 text-center">
                <p className="font-serif text-lg text-eclat-espresso mb-1">No fragrances match &ldquo;{query}&rdquo;</p>
                <p className="text-xs text-eclat-slate">Try searching for notes like Cardamom, Vetiver, Honey, or Rose.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-ultra-wide text-eclat-slate font-medium">
                  {results.length} Fragrance{results.length > 1 ? 's' : ''} Found
                </p>
                <div className="divide-y divide-eclat-champagne/30">
                  {results.map(product => (
                    <Link
                      key={product.id}
                      to={`/product/${product.slug}`}
                      onClick={onClose}
                      className="group py-4 first:pt-0 flex items-center justify-between hover:bg-eclat-limestone/40 p-2 rounded transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-14 bg-eclat-limestone rounded flex items-center justify-center p-1 flex-shrink-0">
                          <img
                            src={product.bottleImage}
                            alt={product.name}
                            className="w-full h-full object-contain drop-shadow"
                          />
                        </div>
                        <div>
                          <span className="text-[10px] tracking-wider uppercase text-eclat-gold font-medium">
                            {product.collectionNumber} &middot; {product.scentFamily}
                          </span>
                          <h4 className="font-serif text-base text-eclat-espresso group-hover:text-eclat-amber transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-xs text-eclat-slate line-clamp-1">
                            Notes: {product.topNotes.slice(0, 2).join(', ')}, {product.heartNotes[0]}
                          </p>
                        </div>
                      </div>

                      <div className="text-right pl-4">
                        <span className="text-sm font-serif text-eclat-espresso block">
                          {formatPrice(product.sizes[0].price)}
                        </span>
                        <span className="text-[10px] text-eclat-slate">{product.sizes[0].volume}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
