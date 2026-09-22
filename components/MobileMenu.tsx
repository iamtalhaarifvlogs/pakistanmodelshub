'use client';

import { useState } from 'react';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Hamburger Button - Only shows on mobile */}
      <button 
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-[100] lg:hidden bg-black text-white p-3.5 rounded-full shadow-lg"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <span className="text-2xl">✕</span>
        ) : (
          <span className="text-2xl">☰</span>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-[90] lg:hidden flex flex-col items-center justify-center gap-8 text-white text-2xl">
          <a href="#hotels" onClick={closeMenu} className="hover:text-yellow-400 transition-colors">
            Hotels
          </a>
          <a href="#rates" onClick={closeMenu} className="hover:text-yellow-400 transition-colors">
            Rates
          </a>
          <a 
            href="https://wa.me/923104441188" 
            onClick={closeMenu}
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-white transition-all"
          >
            Book Now on WhatsApp
          </a>
        </div>
      )}
    </>
  );
}