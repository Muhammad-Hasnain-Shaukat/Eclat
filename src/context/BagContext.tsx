import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, FragranceSize } from '../data/products';

export interface BagItem {
  product: Product;
  size: FragranceSize;
  quantity: number;
}

interface BagContextType {
  items: BagItem[];
  isOpen: boolean;
  openBag: () => void;
  closeBag: () => void;
  toggleBag: () => void;
  addItem: (product: Product, size: FragranceSize, quantity?: number) => void;
  removeItem: (productId: string, sizeVolume: string) => void;
  updateQuantity: (productId: string, sizeVolume: string, quantity: number) => void;
  clearBag: () => void;
  subtotal: number;
  totalCount: number;
  lastAddedItem: { name: string; size: string } | null;
}

const BagContext = createContext<BagContextType | undefined>(undefined);

const STORAGE_KEY = 'eclat_bag_v1';

export const BagProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<BagItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState<{ name: string; size: string } | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save bag to localStorage', e);
    }
  }, [items]);

  const openBag = () => setIsOpen(true);
  const closeBag = () => setIsOpen(false);
  const toggleBag = () => setIsOpen(prev => !prev);

  const addItem = (product: Product, size: FragranceSize, quantity = 1) => {
    setItems(prevItems => {
      const existingIndex = prevItems.findIndex(
        item => item.product.id === product.id && item.size.volume === size.volume
      );

      if (existingIndex > -1) {
        const next = [...prevItems];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }

      return [...prevItems, { product, size, quantity }];
    });

    setLastAddedItem({ name: product.name, size: size.volume });
    setIsOpen(true);
  };

  const removeItem = (productId: string, sizeVolume: string) => {
    setItems(prev => prev.filter(
      item => !(item.product.id === productId && item.size.volume === sizeVolume)
    ));
  };

  const updateQuantity = (productId: string, sizeVolume: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, sizeVolume);
      return;
    }

    setItems(prev => prev.map(item => {
      if (item.product.id === productId && item.size.volume === sizeVolume) {
        return { ...item, quantity };
      }
      return item;
    }));
  };

  const clearBag = () => setItems([]);

  const subtotal = items.reduce((acc, item) => acc + item.size.price * item.quantity, 0);
  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <BagContext.Provider
      value={{
        items,
        isOpen,
        openBag,
        closeBag,
        toggleBag,
        addItem,
        removeItem,
        updateQuantity,
        clearBag,
        subtotal,
        totalCount,
        lastAddedItem
      }}
    >
      {children}
    </BagContext.Provider>
  );
};

export const useBag = () => {
  const ctx = useContext(BagContext);
  if (!ctx) throw new Error('useBag must be used within a BagProvider');
  return ctx;
};
