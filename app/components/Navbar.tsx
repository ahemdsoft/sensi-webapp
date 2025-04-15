'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'PHONE CASES', href: '/phone-cases' },
  { name: 'DESIGN COLLECTION', href: '/desgine-collection' },
  { name: 'CUSTOMIZATION', href: '/customization' },
  { name: 'POP HOLDER', href: '/pop-holder' },
  { name: 'ABOUT US', href: '/about-us' },
  { name: 'CONTACT US', href: '/contact-us' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    try {
      setIsSearching(true);
      const response = await axios.get('');
      console.log('Search response:', response.data);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <><div className=' flex flex-col'> <div className=''>
      <div className="bg-[#4372C1] text-white text-center py-1.5">
        <p>ALL MODELS AVAILABLE 🔥 🎉</p>
      </div>

      <nav className="bg-black text-white pt-2 pb-3 relative z-20">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 md:hidden">
              <svg className="w-6 h-6" stroke="currentColor" fill="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="hidden md:flex items-center">
              {searchOpen && (
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKeyPress}
                  className="p-2 border rounded-lg w-full md:w-64 animate-slideIn"
                />
              )}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>

          <Link href="/" className="flex-shrink-0">
            <Image src="/logoo.png" alt="Logo" width={150} height={40} priority />
          </Link>

          <div className="flex items-center space-x-3">
            <button className="p-2">
              <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="p-2">
              <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button onClick={() => setCartOpen(true)} className="p-2 relative">
              <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center  justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div></nav></div><div className=''><nav className='bg-black  sticky z-20'>

        <div className="hidden md:flex justify-center font-sans font-extralight text-white text-base space-x-6 py-4">
          {navItems.map((item) => {
            if (item.name === 'PHONE CASES') {
              return (
                <div key={item.href} className="relative group">
                  <button className="flex items-center gap-1 hover:text-[#4372C1] transition-all duration-700">
                    {item.name}
                    <ChevronDownIcon className="w-4 h-4" />
                  </button>
                  <div className="absolute bg-white text-black rounded shadow-lg mt-2 w-48 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-700">
                    <ul>
                      <li><Link href="/phone-cases/2d" className="block px-4 py-2 hover:bg-gray-100">2D Case</Link></li>
                      <li><Link href="/phone-cases/2d-max" className="block px-4 py-2 hover:bg-gray-100">2D Max Case</Link></li>
                      <li><Link href="/phone-cases/soft" className="block px-4 py-2 hover:bg-gray-100">Soft Case</Link></li>
                      <li><Link href="/phone-cases/3d-hard" className="block px-4 py-2 hover:bg-gray-100">3D Case</Link></li>
                    </ul>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#4372C1] transition-all duration-300"
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-start px-6 py-4 space-y-2 md:hidden">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="w-full py-2 border-b border-gray-700">
                {item.name}
              </Link>
            ))}
          </div>
        )}

        <div
          className={`fixed top-0 right-0 w-1/4 h-full bg-white text-black shadow-xl transform transition-transform duration-300 z-50  ${
            cartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4 ">
            <div className="flex justify-between items-center mb-6 ">
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
                {/* Add your cart items here */}
              </div>
            )}
          </div>
        </div>
      </nav></div></div>
    </>
  );
}