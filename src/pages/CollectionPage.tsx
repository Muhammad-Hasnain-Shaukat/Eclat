import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ArrowUpDown, RotateCcw, Check } from 'lucide-react';
import { fragrances, SCENT_FAMILIES, Product } from '../data/products';
import { PlinthBottle } from '../components/gallery/PlinthBottle';

export const CollectionPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL state persistence
  const initialFamily = searchParams.get('family') || 'All Families';
  const initialSort = searchParams.get('sort') || 'featured';
  const initialMaxPrice = Number(searchParams.get('maxPrice')) || 40000;

  const [selectedFamily, setSelectedFamily] = useState<string>(initialFamily);
  const [sortBy, setSortBy] = useState<string>(initialSort);
  const [maxPrice, setMaxPrice] = useState<number>(initialMaxPrice);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Draft filter state for mobile drawer explicit apply
  const [draftFamily, setDraftFamily] = useState<string>(selectedFamily);
  const [draftMaxPrice, setDraftMaxPrice] = useState<number>(maxPrice);

  // Sync state with URL params
  const updateUrlParams = (family: string, sort: string, price: number) => {
    const params = new URLSearchParams();
    if (family !== 'All Families') params.set('family', family);
    if (sort !== 'featured') params.set('sort', sort);
    if (price < 40000) params.set('maxPrice', price.toString());
    setSearchParams(params);
  };

  const handleFamilyChange = (fam: string) => {
    setSelectedFamily(fam);
    updateUrlParams(fam, sortBy, maxPrice);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    updateUrlParams(selectedFamily, sort, maxPrice);
  };

  const handleResetFilters = () => {
    setSelectedFamily('All Families');
    setSortBy('featured');
    setMaxPrice(40000);
    setDraftFamily('All Families');
    setDraftMaxPrice(40000);
    setSearchParams(new URLSearchParams());
  };

  // Open mobile drawer
  const openMobileFilter = () => {
    setDraftFamily(selectedFamily);
    setDraftMaxPrice(maxPrice);
    setIsMobileFilterOpen(true);
  };

  // Explicit apply in mobile drawer
  const applyMobileFilter = () => {
    setSelectedFamily(draftFamily);
    setMaxPrice(draftMaxPrice);
    updateUrlParams(draftFamily, sortBy, draftMaxPrice);
    setIsMobileFilterOpen(false);
  };

  // Filter & sort logic
  const filteredFragrances = useMemo(() => {
    return fragrances.filter(item => {
      const matchFamily = selectedFamily === 'All Families' || item.scentFamily === selectedFamily;
      const minProductPrice = Math.min(...item.sizes.map(s => s.price));
      const matchPrice = minProductPrice <= maxPrice;
      return matchFamily && matchPrice;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') {
        return Math.min(...a.sizes.map(s => s.price)) - Math.min(...b.sizes.map(s => s.price));
      }
      if (sortBy === 'price-desc') {
        return Math.min(...b.sizes.map(s => s.price)) - Math.min(...a.sizes.map(s => s.price));
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      // 'featured'
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedFamily, sortBy, maxPrice]);

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-eclat-ivory min-h-screen text-eclat-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Collection Header */}
        <div className="border-b border-eclat-champagne/50 pb-8 mb-10">
          <span className="text-[11px] uppercase tracking-super-wide text-eclat-gold font-medium block mb-2">
            Haute Parfumerie Catalog
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide text-eclat-espresso">
            The Collection
          </h1>
          <p className="text-xs sm:text-sm text-eclat-slate font-sans max-w-xl mt-3 leading-relaxed">
            Six architectural creations bottled in heavyweight mineral glass. Formulated in Extrait and Eau de Parfum concentrations with rare botanical absolutes.
          </p>
        </div>

        {/* DESKTOP HORIZONTAL FILTER & SORT TOOLBAR */}
        <div className="hidden md:flex items-center justify-between py-4 border-b border-eclat-champagne/40 mb-12">
          {/* Scent Family Filters */}
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
            {SCENT_FAMILIES.map(fam => (
              <button
                key={fam}
                type="button"
                onClick={() => handleFamilyChange(fam)}
                className={`px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 whitespace-nowrap ${
                  selectedFamily === fam
                    ? 'bg-eclat-espresso text-eclat-ivory font-medium shadow-sm'
                    : 'bg-eclat-limestone/60 text-eclat-espresso hover:bg-eclat-champagne/60'
                }`}
              >
                {fam}
              </button>
            ))}
          </div>

          {/* Sort & Result Counter */}
          <div className="flex items-center space-x-6 flex-shrink-0">
            <span className="text-xs text-eclat-slate">
              {filteredFragrances.length} of {fragrances.length} Flacons
            </span>

            <div className="flex items-center space-x-2 border-l border-eclat-champagne/50 pl-6">
              <ArrowUpDown className="w-3.5 h-3.5 text-eclat-gold" />
              <select
                value={sortBy}
                onChange={e => handleSortChange(e.target.value)}
                className="bg-transparent text-xs text-eclat-espresso uppercase tracking-wider font-medium focus:outline-none cursor-pointer py-1"
                aria-label="Sort fragrances"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>

            {(selectedFamily !== 'All Families' || sortBy !== 'featured' || maxPrice < 40000) && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center space-x-1 text-xs text-eclat-amber hover:underline"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* MOBILE FILTER TRIGGER & RESULT BAR */}
        <div className="md:hidden flex items-center justify-between py-3 border-b border-eclat-champagne/40 mb-8">
          <button
            type="button"
            onClick={openMobileFilter}
            className="inline-flex items-center space-x-2 bg-eclat-limestone px-4 py-2 rounded-sm text-xs uppercase tracking-wider font-medium text-eclat-espresso border border-eclat-champagne/60"
            aria-label="Open filter options"
          >
            <Filter className="w-3.5 h-3.5" />
            <span>Filter {selectedFamily !== 'All Families' ? `(${selectedFamily})` : ''}</span>
          </button>

          <div className="flex items-center space-x-3">
            <span className="text-xs text-eclat-slate">
              {filteredFragrances.length} Flacons
            </span>
            <select
              value={sortBy}
              onChange={e => handleSortChange(e.target.value)}
              className="bg-transparent text-xs text-eclat-espresso uppercase tracking-wider font-medium focus:outline-none"
              aria-label="Sort fragrances"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price &uarr;</option>
              <option value="price-desc">Price &darr;</option>
              <option value="name">A &ndash; Z</option>
            </select>
          </div>
        </div>

        {/* PRODUCT GRID: Open staggered 3-col on desktop, staggered 2-col on suitable phones, 1-col on narrow */}
        {filteredFragrances.length === 0 ? (
          <div className="py-20 text-center max-w-md mx-auto space-y-4">
            <p className="font-serif text-2xl text-eclat-espresso">No flacons match your selection</p>
            <p className="text-xs text-eclat-slate leading-relaxed">
              We could not find fragrances matching &ldquo;{selectedFamily}&rdquo;. Try clearing filters to view all six extrait formulations.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center space-x-2 bg-eclat-espresso text-eclat-ivory px-6 py-3 text-xs uppercase tracking-ultra-wide font-medium hover:bg-eclat-espresso-light transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear All Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredFragrances.map((product) => (
              <div key={product.id} className="relative h-full">
                <PlinthBottle
                  product={product}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MOBILE ACCESSIBLE FILTER DRAWER */}
      {isMobileFilterOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Filter Collection"
        >
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileFilterOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-eclat-ivory shadow-2xl flex flex-col justify-between p-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-eclat-champagne/40">
                <h3 className="font-serif text-xl text-eclat-espresso">Filters</h3>
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1 text-eclat-espresso/60 hover:text-eclat-espresso"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scent Family Options */}
              <div className="mt-6 space-y-4">
                <p className="text-xs uppercase tracking-ultra-wide text-eclat-gold font-medium">
                  Scent Family
                </p>
                <div className="space-y-2">
                  {SCENT_FAMILIES.map(fam => (
                    <button
                      key={fam}
                      type="button"
                      onClick={() => setDraftFamily(fam)}
                      className={`w-full text-left py-2 px-3 text-xs rounded transition-colors flex items-center justify-between ${
                        draftFamily === fam
                          ? 'bg-eclat-limestone font-medium text-eclat-espresso'
                          : 'text-eclat-slate hover:bg-white'
                      }`}
                    >
                      <span>{fam}</span>
                      {draftFamily === fam && <Check className="w-3.5 h-3.5 text-eclat-amber" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Drawer Bottom Actions */}
            <div className="pt-6 border-t border-eclat-champagne/40 space-y-2">
              <button
                type="button"
                onClick={applyMobileFilter}
                className="w-full bg-eclat-espresso text-eclat-ivory py-3 text-xs uppercase tracking-ultra-wide font-medium text-center"
              >
                Apply Filters
              </button>
              <button
                type="button"
                onClick={() => {
                  setDraftFamily('All Families');
                  setDraftMaxPrice(40000);
                }}
                className="w-full py-2 text-xs text-eclat-slate hover:text-eclat-espresso uppercase tracking-wider text-center"
              >
                Reset Selection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
