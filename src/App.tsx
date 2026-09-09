import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { BagProvider } from './context/BagContext';
import { WishlistProvider } from './context/WishlistContext';
import { Header } from './components/common/Header';
import { MobileMenu } from './components/common/MobileMenu';
import { SearchModal } from './components/common/SearchModal';
import { BagDrawer } from './components/common/BagDrawer';
import { Footer } from './components/common/Footer';

import { HomePage } from './pages/HomePage';
import { CollectionPage } from './pages/CollectionPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ScentFinderPage } from './pages/ScentFinderPage';
import { OurWorldPage } from './pages/OurWorldPage';
import { AtelierPage } from './pages/AtelierPage';
import { IngredientsPage } from './pages/IngredientsPage';
import { WishlistPage } from './pages/WishlistPage';

// Helper component to scroll to top on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainLayout: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-eclat-ivory text-eclat-espresso antialiased">
      <ScrollToTop />
      
      {/* Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Main Content Pages */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/product/:slug" element={<ProductDetailPage />} />
          <Route path="/ingredients" element={<IngredientsPage />} />
          <Route path="/scent-finder" element={<ScentFinderPage />} />
          <Route path="/atelier" element={<AtelierPage />} />
          <Route path="/our-world" element={<OurWorldPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <BagDrawer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <WishlistProvider>
        <BagProvider>
          <MainLayout />
        </BagProvider>
      </WishlistProvider>
    </BrowserRouter>
  );
};

export default App;
