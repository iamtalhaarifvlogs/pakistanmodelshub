'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="bg-white text-black font-sans overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-2xl">P</div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Pakistan Models Hub</h1>
              <p className="text-[10px] text-black/60 -mt-1">Premium Escorts Karachi</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <Link href="/" className="hover:text-yellow-500 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-yellow-500 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
          </div>

          <a 
            href="tel:03051271111"
            className="hidden md:block bg-red-600 hover:bg-black text-white px-8 py-3 rounded-full font-semibold transition-all text-sm tracking-wider"
          >
            CALL 0305-127-1111
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
          <div className="p-8 flex flex-col h-full">
            <div className="flex justify-end mb-12">
              <button onClick={toggleMenu} className="text-4xl text-black/70 hover:text-black">✕</button>
            </div>
            <div className="flex flex-col gap-8 text-2xl font-medium">
              <Link href="/" onClick={closeMenu}>Home</Link>
              <Link href="/about" onClick={closeMenu}>About</Link>
              <Link href="/contact" onClick={closeMenu}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Clean & Elegant */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/m21.jpg" 
            alt="Karachi Escorts in DHA Clifton - High Class Call Girls Karachi"
            fill 
            className="object-cover brightness-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-[58px] font-bold text-white leading-none tracking-tighter mb-10">
            KARACHI ESCORTS<br />
            <span className="text-yellow-400">0305-127-1111</span>
          </h1>

          <a 
            href="tel:03051271111"
            className="inline-block bg-yellow-400 hover:bg-white hover:text-black text-black font-bold text-lg px-14 py-5 rounded-full transition-all duration-300 shadow-xl"
          >
            CALL NOW
          </a>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 text-sm flex flex-col items-center">
          <span>SCROLL TO EXPLORE</span>
          <div className="w-px h-12 bg-white/30 mt-3" />
        </div>
      </section>

      {/* Services Coverage */}
      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-yellow-400 font-medium mb-3">SERVING ALL MAJOR AREAS OF KARACHI</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-lg opacity-90">
            <p>Karachi Escorts in DHA</p>
            <p>Escorts in Clifton</p>
            <p>Escorts in PECHS</p>
            <p>Escorts in Nazimabad</p>
            <p>Escorts in Tariq Road</p>
            <p>Galaxy Hotel Escorts</p>
            <p>Pearl Continental Escorts</p>
            <p>Marriott Hotel Escorts</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Premium Karachi Escorts Service</h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              We provide the most beautiful, discreet and professional escorts across DHA, Clifton, PECHS, Nazimabad and major hotels in Karachi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[22,23,24].map((num) => (
              <div key={num} className="group">
                <div className="relative h-80 mb-8 overflow-hidden rounded-3xl">
                  <Image 
                    src={`/m${num}.jpg`} 
                    alt="High class Karachi escort service"
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Discreet &amp; Professional</h3>
                <p className="text-black/70 leading-relaxed">
                  100% verified escorts offering VIP service in DHA, Clifton, PECHS, Nazimabad, Tariq Road and luxury hotels.
                </p>
                <a href="tel:03051271111" className="mt-6 inline-block text-red-600 font-semibold hover:text-black transition-colors">Call 0305-127-1111 →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight">Our Exclusive Karachi Escorts</h2>
            <p className="text-yellow-400 mt-3">DHA • Clifton • PECHS • Nazimabad • Tariq Road</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[25,26,27,28,29,30,31,21].map((num, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[4/5]">
                <Image 
                  src={`/m${num}.jpg`} 
                  alt="Premium escort Karachi"
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent h-2/3" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-semibold text-lg">Karachi Escorts</p>
                  <p className="text-sm text-white/70">DHA • Clifton • PECHS</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="space-y-10 text-lg">
            <div>
              <h3 className="font-semibold mb-3">Do you provide Karachi escorts in DHA and Clifton?</h3>
              <p className="text-black/70">Yes, we offer premium high-class escorts in DHA, Clifton, PECHS, Nazimabad, Tariq Road, Galaxy Hotel, Pearl Continental and Marriott Hotel.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Are your services discreet?</h3>
              <p className="text-black/70">Complete privacy and discretion is guaranteed for all our clients across Karachi.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Is 0305-127-1111 available 24/7?</h3>
              <p className="text-black/70">Yes, our Karachi escorts service is available 24 hours for incall and outcall bookings.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Which areas do you cover in Karachi?</h3>
              <p className="text-black/70">We provide escorts in DHA, Clifton, PECHS, Nazimabad, Tariq Road, and major 5-star hotels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-gradient-to-br from-red-700 to-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-6xl font-bold tracking-tighter mb-8">
            Ready to Meet Beautiful Karachi Escorts?
          </h2>
          <a 
            href="tel:03051271111"
            className="inline-block bg-white text-black font-bold text-4xl px-20 py-8 rounded-full hover:bg-yellow-400 transition-all"
          >
            0305 - 127 - 1111
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white/70 py-16 text-center">
        <p>© 2026 Pakistan Models Hub • Karachi Escorts Service</p>
        <p className="mt-2">DHA • Clifton • PECHS • Nazimabad • Galaxy Hotel • Pearl Continental</p>
      </footer>
    </main>
  );
}