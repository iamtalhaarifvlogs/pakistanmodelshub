'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function KarachiEscortsDhaPage() {
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
              <p className="text-[10px] text-black/60 -mt-1">Premium Escorts • DHA Karachi</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-yellow-500 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-yellow-500 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
          </div>

          <a href="tel:03051271111" className="hidden md:block bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-black transition-all text-sm tracking-wider">
            CALL 0305-127-1111
          </a>

          <button onClick={toggleMenu} className="md:hidden z-50 flex flex-col gap-1.5">
            <span className={`block w-7 h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-7 h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-7 h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Hero Section with H1 */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/m8.jpg" 
            alt="Karachi Escorts in DHA - High Class Call Girls DHA Karachi"
            fill 
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-none tracking-tighter mb-6">
            KARACHI ESCORTS IN DHA
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8">
            Premium High-Class Call Girls • VIP Escorts DHA Karachi
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Experience the most beautiful, sophisticated and discreet Karachi escorts in DHA. Available 24/7 for incall & outcall services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:03051271111"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-12 py-6 rounded-full transition-all"
            >
              CALL NOW: 0305-127-1111
            </a>
            <a 
              href="#contact-form"
              className="inline-block bg-yellow-400 hover:bg-white hover:text-black text-black font-bold text-xl px-12 py-6 rounded-full transition-all"
            >
              BOOK YOUR ESCORT
            </a>
          </div>
        </div>
      </section>

      {/* Trust & Keywords Section */}
      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-yellow-400 font-semibold mb-3">DHA KARACHI ESCORTS SERVICE</p>
          <h2 className="text-4xl font-bold mb-6">High Class Escorts in DHA Karachi • 0305-127-1111</h2>
          <p className="text-lg text-white/70">
            Independent Call Girls • VIP Models • College Girls • Housewives • Russian Escorts in DHA
          </p>
        </div>
      </section>

      {/* Images Gallery + Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold tracking-tight mb-8">
                Premium Karachi Escorts in DHA Phase 5, 6, 7 & 8
              </h2>
              <div className="prose prose-lg text-black/80 space-y-6">
                <p>
                  Looking for <strong>Karachi escorts in DHA</strong>? Pakistan Models Hub offers the most attractive, well-educated, and professional call girls in DHA Karachi. 
                  Whether you want a companion for dinner, a private massage, or a full night of pleasure — we have the perfect match for you.
                </p>
                <p>
                  Our exclusive collection includes <strong>high class DHA escorts</strong>, independent call girls DHA, college girls, air hostesses, and VIP models ready to serve you in Phase 2, Phase 5, Phase 6, and Phase 8.
                </p>
              </div>
            </div>
            <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/m9.jpg" alt="Beautiful Karachi escort in DHA luxury apartment" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* More Images & Benefits */}
      <section className="py-20 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[10,11,12].map((n) => (
            <div key={n} className="relative h-96 rounded-3xl overflow-hidden group">
              <Image 
                src={`/m${n}.jpg`} 
                alt={`Luxury escort service DHA Karachi - ${n}`} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 p-6">
                <p className="text-white font-medium">Discreet • Professional • 100% Satisfaction</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form + Strong CTA */}
      <section id="contact-form" className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Book Karachi Escorts in DHA Now</h2>
            <p className="text-xl text-white/70">Call or WhatsApp 0305-127-1111 • Fast Response • 24/7 Availability</p>
          </div>

          <div className="bg-zinc-900 p-10 rounded-3xl">
            {formSubmitted ? (
              <div className="text-center py-20">
                <div className="text-7xl mb-6">❤️</div>
                <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
                <p className="text-lg">Our team will contact you shortly on WhatsApp or Call.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <input type="text" required placeholder="Your Name" className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-5 text-white placeholder:text-white/50" />
                <input type="tel" required placeholder="Phone / WhatsApp" className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-5 text-white placeholder:text-white/50" />
                <textarea rows={5} required placeholder="Tell us your requirements (time, location in DHA, duration...)" className="w-full bg-zinc-800 border border-zinc-700 rounded-3xl px-6 py-5 text-white placeholder:text-white/50"></textarea>

                <button type="submit" className="w-full bg-red-600 hover:bg-yellow-400 hover:text-black py-7 text-xl font-bold rounded-2xl transition-all">
                  SEND REQUEST - CALL 0305-127-1111
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Are Karachi escorts in DHA available 24/7?</h3>
              <p className="text-black/70">Yes, our high-class call girls and VIP escorts in DHA Karachi are available round the clock for incall and outcall services.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Is the service discreet and safe in DHA?</h3>
              <p className="text-black/70">Absolutely. We maintain full confidentiality and provide 100% safe and hygienic service in all DHA phases.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Do you provide college girls and housewives in DHA Karachi?</h3>
              <p className="text-black/70">Yes, we have a wide selection including young college girls, hot housewives, and mature independent escorts in DHA.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">What is the booking process for Karachi escorts in DHA?</h3>
              <p className="text-black/70">Simply call or WhatsApp us at 0305-127-1111. We will confirm your requirements and arrange the best escort quickly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-gradient-to-br from-red-700 to-black text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-6xl font-bold tracking-tight mb-6">Want to Meet Beautiful Karachi Escorts in DHA Tonight?</h2>
          <p className="text-3xl mb-10">Call or WhatsApp Now</p>
          <a href="tel:03051271111" className="inline-block bg-white text-black font-bold text-4xl px-16 py-8 rounded-full hover:bg-yellow-400 transition-all">
            0305-127-1111
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white/70 py-16">
        <div className="text-center text-sm">
          © 2026 Pakistan Models Hub • Karachi Escorts in DHA • All Rights Reserved<br />
          Call: <a href="tel:03051271111" className="text-yellow-400">0305-127-1111</a>
        </div>
      </footer>
    </main>
  );
}