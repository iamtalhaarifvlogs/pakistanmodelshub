
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Fake form submission handler (you can connect to backend later)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <main className="bg-white text-black font-sans overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-2xl">
              P
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Pakistan Models Hub</h1>
              <p className="text-[10px] text-black/60 -mt-1">Elite Modeling Agency</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <Link href="/" className="hover:text-yellow-500 transition-colors">Home</Link>
            <Link href="/models" className="hover:text-yellow-500 transition-colors">Models</Link>
            <Link href="/about" className="hover:text-yellow-500 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
          </div>

          <Link 
            href="/contact" 
            className="hidden md:block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 text-sm tracking-wider"
          >
            BOOK NOW
          </Link>

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
          <div className="p-8 flex flex-col h-full">
            <div className="flex justify-end mb-12">
              <button onClick={toggleMenu} className="text-4xl text-black/70 hover:text-black">✕</button>
            </div>
            <div className="flex flex-col gap-8 text-2xl font-medium">
              <Link href="/" onClick={closeMenu}>Home</Link>
              <Link href="/models" onClick={closeMenu}>Models</Link>
              <Link href="/about" onClick={closeMenu}>About</Link>
              <Link href="/contact" onClick={closeMenu}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Bold Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/m16.jpg" 
            alt="Contact Pakistan Models Hub - Book Professional Models in Karachi"
            fill 
            className="object-cover brightness-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-block bg-red-600 text-white px-6 py-1.5 text-sm font-bold tracking-[3px] mb-6 rounded-full">
            LET&apos;S WORK TOGETHER
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-none tracking-tighter mb-6">
            BOOK KARACHI&apos;S TOP<br />PROFESSIONAL MODELS
          </h1>
          
          <p className="text-2xl text-white/90 max-w-2xl mx-auto mb-10">
            Get in touch today for fast response and premium modeling talent for your fashion shoots, commercials, campaigns &amp; events in Karachi.
          </p>

          <a 
            href="#contact-form"
            className="inline-block bg-yellow-400 hover:bg-white hover:text-black text-black font-bold text-lg px-14 py-5 rounded-full transition-all duration-300 tracking-wider shadow-2xl"
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
                Ready to Hire Elite Models in Karachi?
              </h2>
              <p className="text-xl text-black/70 mb-12">
                Whether you need models for a fashion campaign, TV commercial, runway show, or brand photoshoot — we respond within 2 hours.
              </p>

              <div className="space-y-10">
                <div>
                  <p className="uppercase text-sm tracking-widest text-black/60 mb-2">Phone / WhatsApp</p>
                  <a href="tel:+923001234567" className="text-3xl font-semibold hover:text-yellow-500 transition-colors">
                    +92 300 1234567
                  </a>
                </div>

                <div>
                  <p className="uppercase text-sm tracking-widest text-black/60 mb-2">Email</p>
                  <a href="mailto:info@pakistanmodelshub.com" className="text-3xl font-semibold hover:text-yellow-500 transition-colors">
                    info@pakistanmodelshub.com
                  </a>
                </div>

                <div>
                  <p className="uppercase text-sm tracking-widest text-black/60 mb-2">Location</p>
                  <p className="text-2xl font-medium">Karachi, Pakistan</p>
                  <p className="text-black/70">Available for bookings across Pakistan</p>
                </div>
              </div>

              <div className="mt-16">
                <Image 
                  src="/m17.jpg" 
                  alt="Professional model posing for commercial shoot Karachi"
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
                  <p className="text-lg text-black/70">We have received your inquiry. Our team will contact you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name / Brand Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-black/20 focus:border-yellow-500 outline-none text-lg"
                      placeholder="e.g. Ahmed Khan or Khaadi"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone / WhatsApp</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-black/20 focus:border-yellow-500 outline-none text-lg"
                      placeholder="+92 300 9876543"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-black/20 focus:border-yellow-500 outline-none text-lg"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">What type of project do you need models for?</label>
                    <select 
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-black/20 focus:border-yellow-500 outline-none text-lg bg-white"
                    >
                      <option value="">Select Project Type</option>
                      <option value="fashion">Fashion Campaign / Lookbook</option>
                      <option value="commercial">TV Commercial / Digital Ad</option>
                      <option value="runway">Runway Show / Event</option>
                      <option value="photoshoot">Studio Photoshoot</option>
                      <option value="brand">Brand Collaboration / Influencer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Project Details / Requirements</label>
                    <textarea 
                      rows={6}
                      required
                      className="w-full px-5 py-4 rounded-3xl border border-black/20 focus:border-yellow-500 outline-none resize-y text-lg"
                      placeholder="Tell us about your shoot date, number of models needed, location, and any specific requirements..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-black hover:bg-yellow-500 hover:text-black text-white font-bold text-xl py-6 rounded-2xl transition-all duration-300 tracking-wider"
                  >
                    SEND INQUIRY - GET RESPONSE IN 2 HOURS
                  </button>

                  <p className="text-center text-xs text-black/50">
                    We respect your time. Expect a reply within 2 business hours.
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
          <p className="text-yellow-400 font-medium mb-4">TRUSTED BY LEADING BRANDS</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-xl opacity-75">
            <p>Sana Safinaz</p>
            <p>Khaadi</p>
            <p>Nishat Linen</p>
            <p>Generation</p>
            <p>Alkaram</p>
          </div>
        </div>
      </section>

      {/* Final Bold CTA */}
      <section className="py-32 bg-gradient-to-br from-black to-zinc-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-6xl font-bold tracking-tighter mb-6">
            Don&apos;t Wait.<br />Book Elite Talent Today.
          </h2>
          <p className="text-2xl text-white/70 mb-12">
            Limited slots available for upcoming shoots and campaigns.
          </p>
          <a 
            href="#contact-form"
            className="inline-block bg-red-600 hover:bg-yellow-400 hover:text-black text-white font-bold text-2xl px-16 py-7 rounded-full transition-all duration-300"
          >
            START YOUR BOOKING NOW
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
            <p>Elite Professional Modeling Agency in Karachi</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/" className="block hover:text-white">Home</Link>
              <Link href="/models" className="block hover:text-white">Our Models</Link>
              <Link href="/about" className="block hover:text-white">About Us</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6">Services</h4>
            <div className="space-y-3">
              <p>Fashion Modeling</p>
              <p>Commercial Shoots</p>
              <p>Runway Shows</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-3">
              <p>Karachi, Pakistan</p>
              <p>+92 300 1234567</p>
              <p>info@pakistanmodelshub.com</p>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-white/40 mt-20 pt-8 border-t border-white/10">
          © 2026 Pakistan Models Hub • Professional Modeling Agency Karachi, Pakistan
        </div>
      </footer>
    </main>
  );
}