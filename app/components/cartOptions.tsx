'use client';

import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import Link from 'next/link';

interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  type: string;
}

export default function CartOption() {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems, removeFromCart, cartCount } = useCart();

  return (
    <>
      <button onClick={() => setCartOpen(true)} className="p-2 relative">
        <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>

      {/* Slide-out cart panel */}
      <div
        className={`fixed top-0 right-0 w-1/4 h-full bg-white text-black shadow-xl transform transition-transform duration-300 z-50 ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Shopping Cart</h2>
            <button
              onClick={() => setCartOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col p-2 border rounded">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-2 flex justify-end">
                    <Link 
                      href={`/buy?name=${encodeURIComponent(item.name)}&price=${encodeURIComponent(item.price)}&image=${encodeURIComponent(item.image)}`}
                      className="bg-[#3C1630] text-white font-bold px-4 py-1 rounded-full shadow hover:shadow-[0_4px_10px_#BF00FFA3] transition duration-200 text-sm"
                      onClick={() => setCartOpen(false)}
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
