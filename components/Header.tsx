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

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/pakistanmodelshub?igsh=cjBrNW8yNG02Y2c5",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.55 4 20 5.45 20 7.75v8.5c0 2.3-1.45 3.75-3.75 3.75h-8.5C5.45 20 4 18.55 4 16.25v-8.5C4 5.45 5.45 4 7.75 4zm8.75 2a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1MMYc4FNWY/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M22 12a10 10 0 10-11.63 9.87v-6.99H7.9V12h2.47V9.8c0-2.44 1.45-3.8 3.67-3.8 1.06 0 2.17.19 2.17.19v2.39h-1.22c-1.21 0-1.58.75-1.58 1.52V12h2.69l-.43 2.88h-2.26v6.99A10 10 0 0022 12z" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-2xl shadow-inner">
            P
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-black leading-tight">
              Pakistan Models Hub
            </h1>
            <p className="text-[10px] text-black/70 font-medium">Premium Escorts Karachi</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-black">
          <Link href="/" className="hover:text-yellow-600 transition-colors">Home</Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="hover:text-yellow-600 transition-colors flex items-center gap-1 py-2">
              Services
              <span className="text-[10px] transition-transform duration-200 group-hover:rotate-180">▼</span>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:block pt-2 w-72 z-50 left-0">
              <div className="bg-white shadow-2xl border border-gray-100 rounded-2xl py-6 px-6 text-sm max-h-[75vh] overflow-y-auto">
                <div className="font-semibold text-yellow-600 mb-3">Celebrity & Premium</div>
                <Link href="/celebrity-escorts-karachi" className="block hover:text-yellow-500 mb-5">
                  Celebrity Escorts Karachi
                </Link>

                <div className="font-semibold text-yellow-600 mb-3">Popular Areas</div>
                <div className="grid grid-cols-1 gap-y-2.5 mb-6 text-[15px]">
                  <Link href="/karachi-escorts-in-dha" className="hover:text-yellow-500">DHA Karachi</Link>
                  <Link href="/karachi-escorts-in-clifton" className="hover:text-yellow-500">Clifton Karachi</Link>
                  <Link href="/escorts-in-saddar-karachi" className="hover:text-yellow-500">Saddar Karachi</Link>
                  <Link href="/escorts-in-pechs-karachi" className="hover:text-yellow-500">PECHS Karachi</Link>
                  <Link href="/escorts-in-bahria-town-karachi" className="hover:text-yellow-500">Bahria Town</Link>
                  <Link href="/escorts-in-gulshan-e-iqbal-karachi" className="hover:text-yellow-500">Gulshan-e-Iqbal</Link>
                  <Link href="/escorts-in-sea-view-karachi" className="hover:text-yellow-500">Sea View Karachi</Link>
                  <Link href="/escorts-in-shahrah-e-faisal-karachi" className="hover:text-yellow-500">Shahrah-e-Faisal</Link>
                  <Link href="/escorts-in-nazimabad-karachi" className="hover:text-yellow-500">Nazimabad Karachi</Link>
                  <Link href="/escorts-in-north-nazimabad-karachi" className="hover:text-yellow-500">North Nazimabad</Link>
                </div>

                <div className="font-semibold text-yellow-600 mb-3">Hotels</div>
                <div className="grid grid-cols-1 gap-y-2.5 text-[15px]">
                  <Link href="/escorts-in-pc-hotel-karachi" className="hover:text-yellow-500">PC Hotel Karachi</Link>
                  <Link href="/escorts-in-marriott-hotel-karachi" className="hover:text-yellow-500">Marriott Hotel</Link>
                  <Link href="/escorts-in-movenpick-hotel-karachi" className="hover:text-yellow-500">Mövenpick Hotel</Link>
                  <Link href="/escorts-in-ramada-plaza-hotel-karachi" className="hover:text-yellow-500">Ramada Plaza Hotel</Link>
                  <Link href="/escorts-in-regent-plaza-hotel-karachi" className="hover:text-yellow-500">Regent Plaza Hotel</Link>
                  <Link href="/escorts-in-sea-shell-inn-hotel-karachi" className="hover:text-yellow-500">Sea Shell Inn Hotel</Link>
                  <Link href="/escorts-in-avari-towers-hotel" className="hover:text-yellow-500">Avari Towers Hotel</Link>
                  <Link href="/escorts-in-beach-luxury-hotel-karachi" className="hover:text-yellow-500">Beach Luxury Hotel</Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/about" className="hover:text-yellow-600 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-yellow-600 transition-colors">Contact</Link>
        </div>

        {/* Desktop Socials & Call CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 pr-2 border-r border-gray-200">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                aria-label={social.name}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-yellow-500/80 text-yellow-600 hover:bg-yellow-500 hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <a 
            href="tel:03104441188"
            className="bg-red-600 hover:bg-black text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 text-xs tracking-wider shadow-md hover:shadow-lg transform active:scale-95"
          >
            CALL 0310-444-1188
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden z-50 p-2 text-black focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div 
          onClick={closeMenu} 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[55] md:hidden"
        />
      )}

      {/* Mobile Side Drawer */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[60] flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full overflow-y-auto">
          {/* Mobile Header */}
          <div className="flex items-center justify-between border-b pb-4 mb-6">
            <span className="font-bold text-black text-lg">Menu</span>
            <button onClick={toggleMenu} className="text-2xl text-black/70 hover:text-black p-1">✕</button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4 text-lg font-medium text-black">
            <Link href="/" onClick={closeMenu} className="hover:text-yellow-600 transition-colors">Home</Link>

            {/* Services Dropdown (Mobile) */}
            <div>
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-left py-2 hover:text-yellow-600 transition-colors"
              >
                Services
                <span className={`text-xs transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {servicesOpen && (
                <div className="pl-4 pt-3 pb-2 flex flex-col gap-3 text-base border-l-2 border-yellow-400 mt-2 ml-1">
                  <Link href="/celebrity-escorts-karachi" onClick={closeMenu} className="hover:text-yellow-500 font-semibold text-yellow-600">
                    Celebrity Escorts
                  </Link>
                  
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-2">Areas</div>
                  <Link href="/karachi-escorts-in-dha" onClick={closeMenu} className="hover:text-yellow-500">DHA Karachi</Link>
                  <Link href="/karachi-escorts-in-clifton" onClick={closeMenu} className="hover:text-yellow-500">Clifton Karachi</Link>
                  <Link href="/escorts-in-saddar-karachi" onClick={closeMenu} className="hover:text-yellow-500">Saddar Karachi</Link>
                  <Link href="/escorts-in-pechs-karachi" onClick={closeMenu} className="hover:text-yellow-500">PECHS Karachi</Link>
                  <Link href="/escorts-in-bahria-town-karachi" onClick={closeMenu} className="hover:text-yellow-500">Bahria Town</Link>

                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-2">Hotels</div>
                  <Link href="/escorts-in-pc-hotel-karachi" onClick={closeMenu} className="hover:text-yellow-500">PC Hotel</Link>
                  <Link href="/escorts-in-marriott-hotel-karachi" onClick={closeMenu} className="hover:text-yellow-500">Marriott Hotel</Link>
                  <Link href="/escorts-in-movenpick-hotel-karachi" onClick={closeMenu} className="hover:text-yellow-500">Mövenpick Hotel</Link>
                </div>
              )}
            </div>

            <Link href="/about" onClick={closeMenu} className="hover:text-yellow-600 transition-colors">About</Link>
            <Link href="/contact" onClick={closeMenu} className="hover:text-yellow-600 transition-colors">Contact</Link>
          </div>

          {/* Footer Area: Mobile Social Links & Call Button */}
          <div className="mt-auto pt-8 border-t border-gray-100 flex flex-col gap-5">
            <div className="flex items-center justify-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <a 
              href="tel:03104441188"
              className="block w-full bg-red-600 text-white text-center py-3.5 rounded-full font-semibold hover:bg-black transition-all text-sm tracking-wider shadow-md"
            >
              CALL 0310-444-1188
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
