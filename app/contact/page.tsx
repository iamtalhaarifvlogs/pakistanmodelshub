'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const metadata = {
  title: "Contact Us | Escorts in Karachi - Book Now 0310-444-1188",
  description: "Contact premium escorts in Karachi. Fast response for bookings in DHA, Clifton, PECHS, Bahria Town, and all major hotels. Call or WhatsApp 0310-444-1188.",
  keywords: [
    "contact escorts Karachi",
    "book escorts in Karachi",
    "Karachi escorts contact",
    "escorts in DHA Karachi contact",
    "Clifton escorts booking",
    "PECHS escorts contact number",
    "Bahria Town escorts Karachi",
    "hotel escorts Karachi booking",
    "0310-444-1188",
    "VIP escorts Karachi contact"
  ],
};

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  // Smooth scroll for hotel links (same as homepage)
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
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
      {/* Navbar - Consistent with Homepage */}
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

      {/* Bold Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/m16.jpg" 
            alt="Contact Escorts in Karachi - Book VIP Companions"
            fill 
            className="object-cover brightness-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-block bg-red-600 text-white px-6 py-1.5 text-sm font-bold tracking-[3px] mb-6 rounded-full">
            24/7 • KARACHI
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-none tracking-tighter mb-6">
            BOOK ESCORTS IN KARACHI<br />
            <span className="text-yellow-400">0310-444-1188</span>
          </h1>
          
          <p className="text-2xl text-white/90 max-w-2xl mx-auto mb-10">
            Fast response • Discreet service • All areas &amp; hotels covered
          </p>

          <a 
            href="#contact-form"
            className="inline-block bg-yellow-400 hover:bg-white hover:text-black text-black font-bold text-lg px-14 py-5 rounded-full transition-all duration-300 tracking-wider shadow-xl"
          >
            CONTACT US NOW
          </a>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Side - Contact Info */}
            <div>
              <h2 className="text-5xl font-bold tracking-tight mb-8">
                Book Escorts in Karachi Today
              </h2>
              <p className="text-xl text-black/70 mb-12">
                Fast response for bookings in DHA, Clifton, PECHS, Bahria Town, Nazimabad, Tariq Road and all major hotels.
              </p>

              <div className="space-y-10">
                <div>
                  <p className="uppercase text-sm tracking-widest text-black/60 mb-2">Call / WhatsApp</p>
                  <a href="tel:03104441188" className="text-3xl font-semibold hover:text-yellow-500 transition-colors">
                    0310-444-1188
                  </a>
                </div>

                <div>
                  <p className="uppercase text-sm tracking-widest text-black/60 mb-2">Location</p>
                  <p className="text-2xl font-medium">Karachi, Pakistan</p>
                  <p className="text-black/70">Service available across all areas &amp; hotels</p>
                </div>
              </div>

              <div className="mt-16">
                <Image 
                  src="/m17.jpg" 
                  alt="Luxury Escort Service in Karachi"
                  width={500}
                  height={600}
                  className="rounded-3xl shadow-xl"
                />
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-zinc-50 p-10 rounded-3xl">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="text-6xl mb-6">✅</div>
                  <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
                  <p className="text-lg text-black/70">We have received your request. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-black/20 focus:border-yellow-500 outline-none text-lg"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone / WhatsApp</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-black/20 focus:border-yellow-500 outline-none text-lg"
                      placeholder="0310-XXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Area / Hotel</label>
                    <input 
                      type="text" 
                      className="w-full px-5 py-4 rounded-2xl border border-black/20 focus:border-yellow-500 outline-none text-lg"
                      placeholder="e.g. DHA Phase 6, PC Hotel, Clifton, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message / Requirements</label>
                    <textarea 
                      rows={6}
                      required
                      className="w-full px-5 py-4 rounded-3xl border border-black/20 focus:border-yellow-500 outline-none resize-y text-lg"
                      placeholder="Date, time, duration, and any special requests..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-black hover:bg-yellow-500 hover:text-black text-white font-bold text-xl py-6 rounded-2xl transition-all duration-300 tracking-wider"
                  >
                    SEND REQUEST - WE REPLY FAST
                  </button>

                  <p className="text-center text-xs text-black/50">
                    Expect a reply within 30 minutes during working hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-yellow-400 font-medium mb-4">TRUSTED BY CLIENTS ACROSS KARACHI</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-xl opacity-75">
            <p>DHA • Clifton • PECHS • Bahria Town</p>
            <p>PC Hotel • Avari • Ramada • Seashell</p>
          </div>
        </div>
      </section>

      {/* Final Bold CTA */}
      <section className="py-32 bg-gradient-to-br from-black to-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-6xl font-bold tracking-tighter leading-none mb-8">
            Ready to Book Your Escort in Karachi?
          </h2>
          <p className="text-2xl text-white/70 mb-12">
            Fast &amp; discreet service available 24/7
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
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-sm">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">P</div>
              <span className="font-bold text-xl">Pakistan Models Hub</span>
            </div>
            <p>Premium Escort Service • Karachi, Pakistan</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <div className="space-y-3 text-sm">
              <Link href="/" className="block hover:text-white">Home</Link>
              <Link href="/about" className="block hover:text-white">About</Link>
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