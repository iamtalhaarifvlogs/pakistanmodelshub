'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function KarachiEscortsCliftonPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <main className="bg-white text-black font-sans overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-2xl">P</div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Pakistan Models Hub</h1>
              <p className="text-[10px] text-black/60 -mt-1">Premium Escorts Clifton Karachi</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
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
      </nav>

      {/* Hero Section - More Attractive & Visible Background */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/m20.jpg" 
            alt="Karachi Escorts in Clifton - High Class Call Girls Clifton Karachi"
            fill 
            className="object-cover brightness-[0.65] contrast-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-block bg-red-600 text-white px-8 py-2 text-sm font-bold tracking-[4px] mb-6 rounded-full">
            CLIFTON • KARACHI
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-none tracking-tighter mb-6">
            KARACHI ESCORTS IN CLIFTON
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
            Experience the most beautiful, seductive and high-class escorts in Clifton Karachi. 
            VIP call girls available for incall &amp; outcall services.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a 
              href="tel:03051271111"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-2xl px-12 py-6 rounded-full transition-all shadow-2xl"
            >
              📞 0305-127-1111
            </a>
            <a 
              href="#booking-form"
              className="inline-block bg-yellow-400 hover:bg-white hover:text-black text-black font-bold text-xl px-14 py-6 rounded-full transition-all"
            >
              BOOK YOUR ESCORT NOW
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-black text-white text-center">
        <p className="text-yellow-400 font-medium tracking-widest">PREMIUM ESCORT SERVICE CLIFTON KARACHI</p>
      </section>

      {/* Content + Images Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold tracking-tight mb-8 text-black">
                High Class Karachi Escorts in Clifton
              </h2>
              <div className="space-y-6 text-lg text-black/80">
                <p>
                  Looking for <strong>Karachi escorts in Clifton</strong>? Pakistan Models Hub brings you the most attractive, sophisticated, and discreet call girls in Clifton Karachi.
                </p>
                <p>
                  Whether you desire a romantic dinner date, a passionate night, or a luxurious companionship experience in Clifton Block 2, 5, 7, 8 or Sea View — our elite escorts are ready to fulfill your fantasies with complete privacy.
                </p>
              </div>
            </div>
            <div className="relative h-[560px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/m21.jpg" 
                alt="Seductive Karachi escort in Clifton luxury apartment" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-center text-yellow-400 font-medium mb-4">OUR EXCLUSIVE CLIFTON ESCORTS</h3>
          <h2 className="text-4xl font-bold text-center mb-12">Beautiful Call Girls in Clifton Karachi</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[22,23,24,25,26,27,28,20].map((num, index) => (
              <div key={index} className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
                <Image 
                  src={`/m${num}.jpg`} 
                  alt={`High class escort Clifton Karachi ${num}`}
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 p-4">
                  <p className="text-sm text-white/90">Clifton Karachi</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Book Your Dream Escort in Clifton</h2>
            <p className="text-xl text-black/70">Fast Response • Complete Privacy • 24/7 Availability</p>
          </div>

          <div className="bg-zinc-50 p-10 md:p-14 rounded-3xl">
            {formSubmitted ? (
              <div className="text-center py-20">
                <div className="text-7xl mb-6">💋</div>
                <h3 className="text-4xl font-bold mb-4">Request Received</h3>
                <p className="text-lg text-black/70">Our team will contact you shortly via WhatsApp or Call.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input type="text" required className="w-full px-6 py-4 rounded-2xl border border-black/20 focus:border-red-500 outline-none" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone / WhatsApp</label>
                    <input type="tel" required className="w-full px-6 py-4 rounded-2xl border border-black/20 focus:border-red-500 outline-none" placeholder="0300 XXXXXXX" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Location in Clifton</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl border border-black/20 focus:border-red-500 outline-none" placeholder="e.g. Clifton Block 5, Sea View, or Hotel" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message / Requirements</label>
                  <textarea 
                    rows={6}
                    required
                    className="w-full px-6 py-4 rounded-3xl border border-black/20 focus:border-red-500 outline-none resize-y"
                    placeholder="Date, time, duration, and any special requests..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-black text-white font-bold text-xl py-7 rounded-2xl transition-all duration-300"
                >
                  SEND BOOKING REQUEST - CALL 0305-127-1111
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Are Karachi escorts in Clifton available 24 hours?</h3>
              <p className="text-black/70">Yes, our premium Clifton escorts are available round the clock for incall and outcall services across Clifton.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Is the service in Clifton completely discreet?</h3>
              <p className="text-black/70">We guarantee full privacy and confidentiality. All our Clifton call girls maintain the highest level of discretion.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Do you provide college girls and VIP models in Clifton Karachi?</h3>
              <p className="text-black/70">Yes, we have a wide selection including young college girls, air hostesses, and high-class independent escorts in Clifton.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">How can I book Karachi escorts in Clifton?</h3>
              <p className="text-black/70">Simply call or WhatsApp us at 0305-127-1111. We respond quickly and arrange everything professionally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Sexy CTA */}
      <section className="py-28 bg-gradient-to-br from-red-700 via-black to-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8">
            Ready for an Unforgettable Night<br />with Clifton Escorts?
          </h2>
          <p className="text-2xl mb-12 text-white/80">Call or WhatsApp Now — 24/7 Service</p>
          
          <a 
            href="tel:03051271111"
            className="inline-block bg-white text-black font-bold text-4xl px-20 py-8 rounded-full hover:bg-yellow-400 hover:text-black transition-all shadow-2xl"
          >
            0305-127-1111
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white/70 py-16 text-center text-sm">
        © 2026 Pakistan Models Hub • Karachi Escorts in Clifton • All Rights Reserved<br />
        <a href="tel:03051271111" className="text-yellow-400 hover:text-white">0305-127-1111</a>
      </footer>
    </main>
  );
}