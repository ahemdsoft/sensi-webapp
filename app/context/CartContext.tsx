'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  brand: string;
  mobile: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
          setCartCount(parsedCart.length);
        } else {
          console.error('Invalid cart data format');
          localStorage.removeItem('cart');
        }
      }
    } catch (error) {
      console.error('Error loading cart:', error);
      localStorage.removeItem('cart');
    }
  }, []);

  // Update localStorage and count when cart changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cartItems));
      setCartCount(cartItems.length);
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    try {
      if (!item || typeof item.id !== 'number' || typeof item.price !== 'number') {
        console.error('Invalid item format:', item);
        return;
      }
      setCartItems(prevItems => [...prevItems, item]);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = (itemId: number) => {
    try {
      setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const clearCart = () => {
    try {
      setCartItems([]);
      localStorage.removeItem('cart');
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 