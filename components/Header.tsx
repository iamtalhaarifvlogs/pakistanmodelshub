
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setServicesOpen(false);
  };

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/pakistanmodelshub?igsh=cjBrNW8yNG02Y2c5",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.55 4 20 5.45 20 7.75v8.5c0 2.3-1.45 3.75-3.75 3.75h-8.5C5.45 20 4 18.55 4 16.25v-8.5C4 5.45 5.45 4 7.75 4zm8.75 2a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1MMYc4FNWY/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M22 12a10 10 0 10-11.63 9.87v-6.99H7.9V12h2.47V9.8c0-2.44 1.45-3.8 3.67-3.8 1.06 0 2.17.19 2.17.19v2.39h-1.22c-1.21 0-1.58.75-1.58 1.52V12h2.69l-.43 2.88h-2.26v6.99A10 10 0 0022 12z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-2xl shadow-inner">
              P
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white leading-tight">
                Pakistan Models Hub
              </h1>
              <p className="text-[10px] text-yellow-400/90 font-medium">Premium Escorts Karachi</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-200">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            <Link href="/models" className="hover:text-yellow-400 transition-colors">Models</Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="hover:text-yellow-400 transition-colors flex items-center gap-1 py-2">
                Services
                <span className="text-[10px] transition-transform duration-200 group-hover:rotate-180">▼</span>
              </button>

              <div className="absolute hidden group-hover:block pt-2 w-80 z-50 left-0">
                <div className="bg-zinc-900 shadow-2xl border border-zinc-700 rounded-2xl py-6 px-6 text-sm max-h-[75vh] overflow-y-auto">
                  <div className="font-semibold text-yellow-400 mb-3">Celebrity & Premium</div>
                  <Link href="/celebrity-escorts-karachi" className="block hover:text-yellow-400 mb-5 text-gray-300">
                    Celebrity Escorts Karachi
                  </Link>

                  <div className="font-semibold text-yellow-400 mb-3">Popular Areas</div>
                  <div className="grid grid-cols-1 gap-y-2.5 mb-6 text-[15px] text-gray-300">
                    <Link href="/karachi-escorts-in-dha" className="hover:text-yellow-400">DHA Karachi</Link>
                    <Link href="/escorts-in-dha-karachi" className="hover:text-yellow-400">Escorts in DHA</Link>
                    <Link href="/karachi-escorts-in-clifton" className="hover:text-yellow-400">Clifton Karachi</Link>
                    <Link href="/escorts-in-bahria-town-karachi" className="hover:text-yellow-400">Bahria Town</Link>
                    <Link href="/escorts-in-pechs-karachi" className="hover:text-yellow-400">PECHS Karachi</Link>
                    <Link href="/escorts-in-saddar-karachi" className="hover:text-yellow-400">Saddar Karachi</Link>
                    <Link href="/escorts-in-gulshan-e-iqbal-karachi" className="hover:text-yellow-400">Gulshan-e-Iqbal</Link>
                    <Link href="/escorts-in-sea-view-karachi" className="hover:text-yellow-400">Sea View</Link>
                    <Link href="/escorts-in-nazimabad-karachi" className="hover:text-yellow-400">Nazimabad</Link>
                    <Link href="/escorts-in-bahadurabad-karachi" className="hover:text-yellow-400">Bahadurabad</Link>
                  </div>

                  <div className="font-semibold text-yellow-400 mb-3">Hotels</div>
                  <div className="grid grid-cols-1 gap-y-2.5 text-[15px] text-gray-300">
                    <Link href="/escorts-in-pc-hotel-karachi" className="hover:text-yellow-400">PC Hotel</Link>
                    <Link href="/escorts-in-marriott-hotel-karachi" className="hover:text-yellow-400">Marriott Hotel</Link>
                    <Link href="/escorts-in-movenpick-hotel-karachi" className="hover:text-yellow-400">Mövenpick Hotel</Link>
                    <Link href="/escorts-in-avari-towers-hotel" className="hover:text-yellow-400">Avari Towers</Link>
                    <Link href="/escorts-in-ramada-plaza-hotel-karachi" className="hover:text-yellow-400">Ramada Plaza</Link>
                    <Link href="/escorts-in-regent-plaza-hotel-karachi" className="hover:text-yellow-400">Regent Plaza</Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className="hover:text-yellow-400 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
          </div>

          {/* Desktop WhatsApp CTA */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/923104441188"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 hover:from-yellow-300 text-black px-6 py-2.5 rounded-full font-bold transition-all text-xs tracking-wider shadow-md hover:shadow-lg"
            >
              WhatsApp 0310-444-1188
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Overlay */}
        {isMenuOpen && (
          <div onClick={closeMenu} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden" />
        )}

        {/* Mobile Drawer */}
        <div className={`fixed top-0 right-0 h-full w-80 bg-zinc-950 shadow-2xl transform transition-transform duration-300 ease-in-out z-[60] flex flex-col border-l border-zinc-800 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex flex-col h-full overflow-y-auto">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
              <span className="font-bold text-white text-lg">Menu</span>
              <button onClick={closeMenu} className="text-2xl text-gray-400 hover:text-white p-1">✕</button>
            </div>

            <div className="flex flex-col gap-4 text-lg font-medium text-gray-200">
              <Link href="/" onClick={closeMenu} className="hover:text-yellow-400 transition-colors">Home</Link>
              <Link href="/models" onClick={closeMenu} className="hover:text-yellow-400 transition-colors">Models</Link>

              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-left py-2 hover:text-yellow-400 transition-colors"
                >
                  Services
                  <span className={`text-xs transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>

                {servicesOpen && (
                  <div className="pl-4 pt-3 pb-2 flex flex-col gap-3 text-base border-l-2 border-yellow-400 mt-2 ml-1 text-gray-300">
                    <Link href="/celebrity-escorts-karachi" onClick={closeMenu} className="hover:text-yellow-400 font-semibold text-yellow-400">
                      Celebrity Escorts
                    </Link>

                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-2">Areas</div>
                    <Link href="/karachi-escorts-in-dha" onClick={closeMenu} className="hover:text-yellow-400">DHA Karachi</Link>
                    <Link href="/karachi-escorts-in-clifton" onClick={closeMenu} className="hover:text-yellow-400">Clifton Karachi</Link>
                    <Link href="/escorts-in-bahria-town-karachi" onClick={closeMenu} className="hover:text-yellow-400">Bahria Town</Link>
                    <Link href="/escorts-in-pechs-karachi" onClick={closeMenu} className="hover:text-yellow-400">PECHS</Link>
                    <Link href="/escorts-in-saddar-karachi" onClick={closeMenu} className="hover:text-yellow-400">Saddar</Link>
                    <Link href="/escorts-in-bahadurabad-karachi" onClick={closeMenu} className="hover:text-yellow-400">Bahadurabad</Link>

                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-2">Hotels</div>
                    <Link href="/escorts-in-pc-hotel-karachi" onClick={closeMenu} className="hover:text-yellow-400">PC Hotel</Link>
                    <Link href="/escorts-in-marriott-hotel-karachi" onClick={closeMenu} className="hover:text-yellow-400">Marriott</Link>
                    <Link href="/escorts-in-movenpick-hotel-karachi" onClick={closeMenu} className="hover:text-yellow-400">Mövenpick</Link>
                    <Link href="/escorts-in-avari-towers-hotel" onClick={closeMenu} className="hover:text-yellow-400">Avari Towers</Link>
                  </div>
                )}
              </div>

              <Link href="/about" onClick={closeMenu} className="hover:text-yellow-400 transition-colors">About</Link>
              <Link href="/contact" onClick={closeMenu} className="hover:text-yellow-400 transition-colors">Contact</Link>
            </div>

            <div className="mt-auto pt-8 border-t border-zinc-800">
              <a
                href="https://wa.me/923104441188"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 text-black text-center py-3.5 rounded-full font-bold hover:from-yellow-300 transition-all text-sm tracking-wider"
              >
                WhatsApp 0310-444-1188
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Social Buttons */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            aria-label={social.name}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-zinc-900 text-yellow-400 border border-yellow-500/50 shadow-lg hover:bg-yellow-400 hover:text-black hover:scale-110 active:scale-95 transition-all duration-300"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </>
  );
}