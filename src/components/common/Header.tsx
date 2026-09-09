import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu } from 'lucide-react';
import { useBag } from '../../context/BagContext';
import { useWishlist } from '../../context/WishlistContext';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onOpenMobileMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { toggleBag, totalCount } = useBag();
  const { totalWishlistCount } = useWishlist();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Transparent over hero on home page when at top; otherwise ivory solid header
  const isTransparent = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isTransparent
          ? 'bg-gradient-to-b from-black/60 via-black/25 to-transparent text-white py-5 sm:py-6'
          : 'bg-eclat-ivory/95 backdrop-blur-md text-eclat-espresso border-b border-eclat-champagne/40 py-3.5 sm:py-4 shadow-sm'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between relative">
        {/* Left: Mobile Menu Button + Brand Mark (Logo + ECLAT) aligned towards left */}
        <div className="flex items-center space-x-3 sm:space-x-4 z-10">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="md:hidden p-2 -ml-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-eclat-gold"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5 stroke-[1.5]" />
          </button>

          {/* Brand Mark: Flacon Logo + ECLAT text (lifted slightly to align horizontally with E) */}
          <Link
            to="/"
            className="group flex items-center space-x-2 sm:space-x-2.5 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-eclat-gold rounded"
            aria-label="ÉCLAT Home"
          >
            {/* Pure logo without box, moved a bit up to align horizontally with letter E */}
            <img
              src={isTransparent ? '/images/eclat-logo-white.png' : '/images/eclat-logo-espresso.png'}
              alt="ÉCLAT"
              className="h-5 sm:h-5.5 md:h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-105 -translate-y-[2.5px]"
            />

            {/* ECLAT Wordmark Text */}
            <span className="font-serif text-lg sm:text-xl font-light tracking-[0.22em] uppercase transition-colors duration-200 inline-block drop-shadow-sm leading-none">
              ÉCLAT
            </span>
          </Link>
        </div>

        {/* Center: Navigation sections in the middle equally spaced (Desktop) */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-6 lg:space-x-8 xl:space-x-10 text-xs uppercase tracking-ultra-wide font-medium whitespace-nowrap">
          <Link
            to="/collection"
            className={`transition-colors duration-200 hover:text-eclat-amber ${
              location.pathname === '/collection' ? 'text-eclat-amber font-semibold' : ''
            }`}
          >
            Collection
          </Link>
          <Link
            to="/ingredients"
            className={`transition-colors duration-200 hover:text-eclat-amber ${
              location.pathname === '/ingredients' ? 'text-eclat-amber font-semibold' : ''
            }`}
          >
            Raw Extracts
          </Link>
          <Link
            to="/scent-finder"
            className={`transition-colors duration-200 hover:text-eclat-amber ${
              location.pathname === '/scent-finder' ? 'text-eclat-amber font-semibold' : ''
            }`}
          >
            Scent Finder
          </Link>
          <Link
            to="/atelier"
            className={`transition-colors duration-200 hover:text-eclat-amber ${
              location.pathname === '/atelier' ? 'text-eclat-amber font-semibold' : ''
            }`}
          >
            The Atelier
          </Link>
          <Link
            to="/our-world"
            className={`transition-colors duration-200 hover:text-eclat-amber ${
              location.pathname === '/our-world' ? 'text-eclat-amber font-semibold' : ''
            }`}
          >
            Our World
          </Link>
        </nav>

        {/* Right: Search, Wishlist, Bag Controls */}
        <div className="flex items-center space-x-3 sm:space-x-5 z-10">
          <button
            type="button"
            onClick={onOpenSearch}
            className="p-2 rounded-full transition-colors duration-200 hover:text-eclat-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-eclat-gold"
            aria-label="Search fragrances"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
          </button>

          <Link
            to="/wishlist"
            className="hidden sm:inline-flex relative p-2 rounded-full transition-colors duration-200 hover:text-eclat-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-eclat-gold"
            aria-label={`Wishlist (${totalWishlistCount} items)`}
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
            {totalWishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-eclat-amber text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                {totalWishlistCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={toggleBag}
            className="relative p-2 rounded-full transition-colors duration-200 hover:text-eclat-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-eclat-gold"
            aria-label={`Shopping bag with ${totalCount} items`}
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
            {totalCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-eclat-espresso text-eclat-ivory border border-eclat-gold text-[10px] font-semibold rounded-full flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
