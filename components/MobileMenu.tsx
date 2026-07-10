'use client';

import { useState } from 'react';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Hamburger Button */}
      <button 
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 lg:hidden bg-black text-white p-3 rounded-full"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 lg:hidden flex flex-col items-center justify-center text-white text-2xl gap-8">
          <a href="#hotels" onClick={closeMenu} className="hover:text-yellow-400">Hotels</a>
          <a href="#rates" onClick={closeMenu} className="hover:text-yellow-400">Rates</a>
          <a href="https://wa.me/923104441188" onClick={closeMenu} className="hover:text-yellow-400">Book Now</a>
        </div>
      )}
    </>
  );
}