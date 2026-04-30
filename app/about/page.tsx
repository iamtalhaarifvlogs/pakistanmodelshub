'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  const hotels = [
    { id: "seashell-inn", name: "Seashell Inn" },
    { id: "seashell-legacy", name: "Seashell Legacy" },
    { id: "seashell-grand", name: "Seashell Grand" },
    { id: "seashell-forte", name: "Seashell Forte" },
    { id: "pc-hotel", name: "PC Hotel" },
    { id: "ocean-pearl", name: "Ocean Pearl" },
    { id: "avari-hotel", name: "Avari Hotel" },
    { id: "ramada-creek", name: "Ramada Creek" },
    { id: "ramada-airport", name: "Ramada Airport" },
  ];

  return (
    <main className="bg-white text-black font-sans overflow-hidden">
      {/* Navbar - Matching Homepage with Scroll Links */}
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
            
            <button onClick={() => scrollToSection("seashell-inn")} className="hover:text-yellow-500 transition-colors">Seashell Inn</button>
            <button onClick={() => scrollToSection("seashell-legacy")} className="hover:text-yellow-500 transition-colors">Seashell Legacy</button>
            <button onClick={() => scrollToSection("pc-hotel")} className="hover:text-yellow-500 transition-colors">PC Hotel</button>
            <button onClick={() => scrollToSection("avari-hotel")} className="hover:text-yellow-500 transition-colors">Avari Hotel</button>

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
        <div 
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-500 ease-in-out z-[60] flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
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
                    onClick={() => scrollToSection(hotel.id)}
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
                className="block w-full bg-red-600 text-white text-center py-4 rounded-full font-semibold hover:bg-black transition-all"
              >
                CALL 0310-444-1188
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Updated with Strong Keyword */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/m10.jpg" 
            alt="Karachi Escorts - Premium Companions in Karachi"
            fill 
            className="object-cover brightness-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/85" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-none tracking-tighter mb-8">
            KARACHI ESCORTS<br />
            <span className="text-yellow-400">0310-444-1188</span>
          </h1>

          <a 
            href="tel:03104441188"
            className="inline-block bg-yellow-400 hover:bg-white hover:text-black text-black font-bold text-lg px-14 py-5 rounded-full transition-all duration-300 shadow-xl"
          >
            BOOK NOW
          </a>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 text-sm flex flex-col items-center">
          <span>SCROLL TO EXPLORE</span>
          <div className="w-px h-12 bg-white/30 mt-3" />
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold tracking-tight mb-8">
                Redefining Escort Standards in Karachi
              </h2>
              <div className="space-y-6 text-lg text-black/80 leading-relaxed">
                <p>
                  Pakistan Models Hub was established to bring professionalism, luxury, and discretion to the escort industry in Karachi.
                </p>
                <p>
                  We connect elite clients with the most beautiful, sophisticated, and verified <strong>escorts in Karachi</strong> across DHA, Clifton, PECHS, Bahria Town, and major hotels.
                </p>
                <p>
                  Our carefully selected companions are known for their elegance, charm, and ability to provide unforgettable experiences with complete privacy.
                </p>
              </div>
            </div>
            <div className="relative h-[520px] rounded-3xl overflow-hidden">
              <Image 
                src="/m11.jpg" 
                alt="Luxury Escorts in Karachi - Professional Companions"
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Our Mission</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              To provide the highest quality, discreet, and luxurious escort experience in Karachi while maintaining professionalism and safety.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Professional Excellence",
                desc: "We maintain the highest standards of beauty, manners, and reliability for every escort in Karachi.",
                image: "/m12.jpg"
              },
              {
                title: "Complete Discretion",
                desc: "Your privacy is our top priority. All bookings are handled with strict confidentiality.",
                image: "/m13.jpg"
              },
              {
                title: "Client Satisfaction",
                desc: "We focus on delivering memorable and personalized experiences tailored to your preferences.",
                image: "/m14.jpg"
              }
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="relative h-80 mb-8 rounded-3xl overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Why Clients Trust Us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="text-5xl font-bold text-yellow-400">01</div>
                <div>
                  <h3 className="text-3xl font-semibold mb-3">Verified High-Class Escorts</h3>
                  <p className="text-black/70">Every companion is carefully screened for quality, beauty, and professionalism.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-5xl font-bold text-yellow-400">02</div>
                <div>
                  <h3 className="text-3xl font-semibold mb-3">Fast & Discreet Booking</h3>
                  <p className="text-black/70">Quick response time with full confidentiality for all bookings in Karachi.</p>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image 
                src="/m15.jpg" 
                alt="Luxury Escort Experience in Karachi"
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-6xl font-bold tracking-tighter leading-none mb-8">
            Ready to Experience Karachi&apos;s<br />Most Elite Companions?
          </h2>
          <p className="text-2xl text-white/70 mb-12">
            Connect with the finest escorts in Karachi today.
          </p>

          <a 
            href="tel:03104441188"
            className="inline-block bg-yellow-400 text-black font-bold text-2xl px-16 py-7 rounded-full hover:bg-white transition-all"
          >
            CALL 0310-444-1188
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white/80 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">P</div>
              <span className="font-bold text-xl">Pakistan Models Hub</span>
            </div>
            <p className="text-sm">Premium Escort Service • Karachi, Pakistan</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <div className="space-y-3 text-sm">
              <Link href="/" className="block hover:text-white">Home</Link>
              <Link href="/about" className="block hover:text-white">About Us</Link>
              <Link href="/contact" className="block hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Services</h4>
            <div className="space-y-3 text-sm">
              <p>Escorts in DHA</p>
              <p>Escorts in Clifton</p>
              <p>Escorts in PECHS</p>
              <p>Hotel Escort Service</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-3 text-sm">
              <p>Karachi, Pakistan</p>
              <p>0310-444-1188</p>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-white/40 mt-20 pt-8 border-t border-white/10">
          © 2026 Pakistan Models Hub. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}