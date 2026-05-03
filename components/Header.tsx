'use client';

import Link from 'next/link';
import { useState } from 'react';

const hotels = [
  { id: "seashell-inn", name: "Seashell Inn" },
  { id: "seashell-legacy", name: "Seashell Legacy" },
  { id: "seashell-grand", name: "Seashell Grand" },
  { id: "seashell-forte", name: "Seashell Forte" },
  { id: "pc-hotel", name: "PC Hotel" },
  { id: "marriott-hotel", name: "Marriott Hotel" },
  { id: "movenpick", name: "Mövenpick Hotel" },
  { id: "avari-towers", name: "Avari Towers" },
  { id: "beach-luxury", name: "Beach Luxury" },
  { id: "galaxy-hotel", name: "Galaxy Hotel" },
  { id: "ocean-pearl", name: "Ocean Pearl" },
  { id: "ramada-creek", name: "Ramada Creek" },
  { id: "ramada-airport", name: "Ramada Airport" },
  { id: "guest-houses", name: "Guest Houses Karachi" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
            <h1 className="text-2xl font-bold tracking-tight">Pakistan Models Hub</h1>
            <p className="text-[10px] text-black/60 -mt-1">Premium Escorts Karachi</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-yellow-500 transition-colors">Home</Link>
          <button onClick={() => scrollToHotel("seashell-inn")} className="hover:text-yellow-500 transition-colors">Seashell Inn</button>
          <button onClick={() => scrollToHotel("pc-hotel")} className="hover:text-yellow-500 transition-colors">PC Hotel</button>
          <button onClick={() => scrollToHotel("marriott-hotel")} className="hover:text-yellow-500 transition-colors">Marriott</button>
          <button onClick={() => scrollToHotel("avari-towers")} className="hover:text-yellow-500 transition-colors">Avari Towers</button>
          <Link href="/about" className="hover:text-yellow-500 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
        </div>

        <a 
          href="tel:03104441188"
          className="hidden md:block bg-red-600 hover:bg-black text-white px-8 py-3 rounded-full font-semibold transition-all text-sm tracking-wider"
        >
          CALL 0310-444-1188
        </a>

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
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-500 ease-in-out z-[60] flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col h-full overflow-y-auto">
          <div className="flex justify-end mb-12">
            <button onClick={toggleMenu} className="text-4xl text-black/70 hover:text-black">✕</button>
          </div>

          <div className="flex flex-col gap-6 text-2xl font-medium">
            <Link href="/" onClick={closeMenu}>Home</Link>
            
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4 font-medium">HOTELS</p>
              {hotels.map((hotel) => (
                <button 
                  key={hotel.id}
                  onClick={() => scrollToHotel(hotel.id)}
                  className="block w-full text-left py-3 hover:text-yellow-500 transition-colors"
                >
                  {hotel.name}
                </button>
              ))}
            </div>

            <Link href="/about" onClick={closeMenu} className="pt-8 py-2">About</Link>
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
