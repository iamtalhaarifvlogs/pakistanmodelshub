'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setServicesOpen(false);
  };

  const scrollToHotel = (id: string) => {
    closeMenu();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition - bodyRect - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      } else {
        window.location.href = `/#${id}`;
      }
    }, 300);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-2xl">P</div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-black">Pakistan Models Hub</h1>
            <p className="text-[10px] text-black/70 -mt-1">Premium Escorts Karachi</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black">
          <Link href="/" className="hover:text-yellow-500 transition-colors">Home</Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="hover:text-yellow-500 transition-colors flex items-center gap-1">
              Services
              <span className="text-xs">▼</span>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:block pt-4 w-64">
              <div className="bg-white shadow-xl border border-gray-100 rounded-2xl py-6 px-6 text-sm max-h-[70vh] overflow-y-auto">
                <div className="font-semibold text-yellow-600 mb-3">Popular Areas</div>
                <div className="grid grid-cols-1 gap-y-2.5 mb-6">
                  <Link href="/karachi-escorts-in-dha" className="hover:text-yellow-500">DHA Karachi</Link>
                  <Link href="/karachi-escorts-in-clifton" className="hover:text-yellow-500">Clifton Karachi</Link>
                  <Link href="/escorts-in-saddar-karachi" className="hover:text-yellow-500">Saddar Karachi</Link>
                  <Link href="/escorts-in-pechs-karachi" className="hover:text-yellow-500">PECHS Karachi</Link>
                  <Link href="/escorts-in-sea-view-karachi" className="hover:text-yellow-500">Sea View Karachi</Link>
                  <Link href="/escorts-in-shahrah-e-faisal-karachi" className="hover:text-yellow-500">Shahrah-e-Faisal</Link>
                  <Link href="/escorts-in-nazimabad-karachi" className="hover:text-yellow-500">Nazimabad</Link>
                </div>

                <div className="font-semibold text-yellow-600 mb-3">Celebrity &amp; Premium</div>
                <Link href="/celebrity-escorts-karachi" className="block hover:text-yellow-500 mb-4">Celebrity Escorts Karachi</Link>

                <div className="font-semibold text-yellow-600 mb-3">Hotels</div>
                <div className="grid grid-cols-1 gap-y-2.5 text-sm">
                  <Link href="/escorts-in-pc-hotel-karachi" className="hover:text-yellow-500">PC Hotel</Link>
                  <Link href="/escorts-in-marriott-hotel-karachi" className="hover:text-yellow-500">Marriott Hotel</Link>
                  <Link href="/escorts-in-movenpick-hotel-karachi" className="hover:text-yellow-500">Mövenpick Hotel</Link>
                  <Link href="/escorts-in-ramada-plaza-hotel-karachi" className="hover:text-yellow-500">Ramada Plaza</Link>
                  <Link href="/escorts-in-regent-plaza-hotel-karachi" className="hover:text-yellow-500">Regent Plaza</Link>
                  <Link href="/escorts-in-sea-shell-inn-hotel-karachi" className="hover:text-yellow-500">Sea Shell Inn</Link>
                  <Link href="/escorts-in-avari-towers-hotel" className="hover:text-yellow-500">Avari Towers</Link>
                  <Link href="/escorts-in-beach-luxury-hotel" className="hover:text-yellow-500">Beach Luxury Hotel</Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/about" className="hover:text-yellow-500 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
        </div>

        <a 
          href="tel:03104441188"
          className="hidden md:block bg-red-600 hover:bg-black text-white px-8 py-3 rounded-full font-semibold transition-all text-sm tracking-wider"
        >
          CALL 0310-444-1188
        </a>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden z-50 flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-7 h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-7 h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-7 h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-500 z-[60] flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col h-full overflow-y-auto">
          <div className="flex justify-end mb-12">
            <button onClick={toggleMenu} className="text-4xl text-black/70 hover:text-black">✕</button>
          </div>

          <div className="flex flex-col gap-6 text-2xl font-medium text-black">
            <Link href="/" onClick={closeMenu}>Home</Link>

            {/* Services Section */}
            <div>
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-left py-2"
              >
                Services
                <span>{servicesOpen ? '▲' : '▼'}</span>
              </button>

              {servicesOpen && (
                <div className="pl-6 pt-4 flex flex-col gap-4 text-lg border-l border-gray-200">
                  <Link href="/celebrity-escorts-karachi" onClick={closeMenu} className="hover:text-yellow-500">Celebrity Escorts</Link>
                  <Link href="/karachi-escorts-in-dha" onClick={closeMenu} className="hover:text-yellow-500">DHA Karachi</Link>
                  <Link href="/karachi-escorts-in-clifton" onClick={closeMenu} className="hover:text-yellow-500">Clifton Karachi</Link>
                  <Link href="/escorts-in-saddar-karachi" onClick={closeMenu} className="hover:text-yellow-500">Saddar Karachi</Link>
                  <Link href="/escorts-in-pechs-karachi" onClick={closeMenu} className="hover:text-yellow-500">PECHS Karachi</Link>
                  <Link href="/escorts-in-sea-view-karachi" onClick={closeMenu} className="hover:text-yellow-500">Sea View Karachi</Link>
                  <Link href="/escorts-in-shahrah-e-faisal-karachi" onClick={closeMenu} className="hover:text-yellow-500">Shahrah-e-Faisal</Link>
                  <Link href="/escorts-in-nazimabad-karachi" onClick={closeMenu} className="hover:text-yellow-500">Nazimabad Karachi</Link>
                </div>
              )}
            </div>

            <Link href="/about" onClick={closeMenu} className="pt-6">About</Link>
            <Link href="/contact" onClick={closeMenu}>Contact</Link>
          </div>

          <div className="mt-auto pt-12 pb-8">
            <a 
              href="tel:03104441188"
              className="block w-full bg-red-600 text-white text-center py-4 rounded-full font-semibold hover:bg-black transition-all text-lg"
            >
              CALL 0310-444-1188
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}