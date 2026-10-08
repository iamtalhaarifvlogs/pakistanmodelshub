
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-5 right-5 z-[100] lg:hidden bg-zinc-900 border border-zinc-700 text-white p-3 rounded-full shadow-lg"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <span className="text-xl">✕</span>
        ) : (
          <span className="text-xl">☰</span>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-zinc-950/98 z-[90] lg:hidden flex flex-col items-center justify-center gap-6 text-white text-xl">
          <Link href="/" onClick={closeMenu} className="hover:text-yellow-400 transition-colors">
            Home
          </Link>
          <Link href="/models" onClick={closeMenu} className="hover:text-yellow-400 transition-colors">
            Models
          </Link>
          <Link href="/karachi-escorts-in-dha" onClick={closeMenu} className="hover:text-yellow-400 transition-colors">
            Escorts in DHA
          </Link>
          <Link href="/karachi-escorts-in-clifton" onClick={closeMenu} className="hover:text-yellow-400 transition-colors">
            Escorts in Clifton
          </Link>
          <Link href="/about" onClick={closeMenu} className="hover:text-yellow-400 transition-colors">
            About
          </Link>
          <Link href="/contact" onClick={closeMenu} className="hover:text-yellow-400 transition-colors">
            Contact
          </Link>

          <a
            href="https://wa.me/923104441188"
            onClick={closeMenu}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 text-black px-8 py-3.5 rounded-full font-bold hover:from-yellow-300 transition-all"
          >
            Book Now on WhatsApp
          </a>
        </div>
      )}
    </>
  );
}