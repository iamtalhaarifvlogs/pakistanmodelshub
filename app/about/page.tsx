'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="bg-white text-black font-sans overflow-hidden">
      {/* Navbar - Same as homepage */}
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

            <div className="mt-auto pt-12">
              <Link 
                href="/contact" 
                onClick={closeMenu}
                className="block w-full bg-black text-white text-center py-4 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition-all"
              >
                BOOK A MODEL NOW
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - About Page */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/m10.jpg" 
            alt="About Pakistan Models Hub - Elite Professional Modeling Agency in Karachi"
            fill 
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-block bg-yellow-400 text-black px-6 py-1.5 text-sm font-bold tracking-[3px] mb-6 rounded-full">
            SINCE 2023 • KARACHI
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-none tracking-tighter mb-6">
            PREMIUM MODELING AGENCY<br />IN KARACHI PAKISTAN
          </h1>
          
          <p className="text-2xl text-white/90 max-w-3xl mx-auto mb-10">
            Connecting world-class brands with Karachi&apos;s most talented, professional, and diverse models since 2023.
          </p>

          <Link 
            href="#our-story"
            className="inline-block bg-yellow-400 hover:bg-white hover:text-black text-black font-bold text-lg px-14 py-5 rounded-full transition-all duration-300 tracking-wider shadow-xl"
          >
            LEARN MORE ABOUT US
          </Link>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold tracking-tight mb-8">
                Redefining Modeling Standards in Pakistan
              </h2>
              <div className="space-y-6 text-lg text-black/80 leading-relaxed">
                <p>
                  Pakistan Models Hub was founded with a clear vision — to bring professional excellence and international standards to the modeling industry in Karachi and across Pakistan.
                </p>
                <p>
                  We discovered that while Pakistan has incredible talent, there was a lack of a reliable, professional platform that could connect top-tier models with prestigious brands, fashion houses, and advertising agencies.
                </p>
                <p>
                  Today, we proudly represent 20+ carefully selected elite models who have worked with leading Pakistani fashion brands including Sana Safinaz, Khaadi, Nishat Linen, and many more.
                </p>
              </div>
            </div>
            <div className="relative h-[520px] rounded-3xl overflow-hidden">
              <Image 
                src="/m11.jpg" 
                alt="Behind the scenes at Pakistan Models Hub Karachi"
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
              To empower talented individuals and elevate the modeling industry in Pakistan through professionalism, diversity, and opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Professional Excellence",
                desc: "We maintain the highest standards of professionalism, reliability, and work ethics in every collaboration.",
                image: "/m12.jpg"
              },
              {
                title: "Diversity & Inclusion",
                desc: "We celebrate different looks, backgrounds, and talents — representing the true beauty and diversity of Pakistan.",
                image: "/m13.jpg"
              },
              {
                title: "Talent Development",
                desc: "We don&apos;t just book models — we nurture and develop raw talent into confident, industry-ready professionals.",
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
            <h2 className="text-5xl font-bold tracking-tight mb-4">Why Brands Trust Us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="text-5xl font-bold text-yellow-400">01</div>
                <div>
                  <h3 className="text-3xl font-semibold mb-3">Vetted Professional Models</h3>
                  <p className="text-black/70">Every model in our portfolio goes through strict screening for experience, professionalism, and portfolio quality.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-5xl font-bold text-yellow-400">02</div>
                <div>
                  <h3 className="text-3xl font-semibold mb-3">Fast &amp; Reliable Booking</h3>
                  <p className="text-black/70">From inquiry to shoot day, we ensure a smooth, transparent, and professional experience for both models and clients.</p>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image 
                src="/m15.jpg" 
                alt="Professional model photoshoot in Karachi studio"
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
            Ready to work with Karachi&apos;s<br />most elite modeling agency?
          </h2>
          <p className="text-2xl text-white/70 mb-12">
            Whether you&apos;re a brand, designer, or production house — we have the perfect talent for your vision.
          </p>

          <Link 
            href="/contact"
            className="inline-block bg-yellow-400 text-black font-bold text-2xl px-16 py-7 rounded-full hover:bg-white transition-all"
          >
            GET IN TOUCH TODAY
          </Link>
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
            <p className="text-sm">Elite Modeling Agency • Karachi, Pakistan</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <div className="space-y-3 text-sm">
              <Link href="/about" className="block hover:text-white">About Us</Link>
              <Link href="/models" className="block hover:text-white">Our Models</Link>
              <Link href="/contact" className="block hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Services</h4>
            <div className="space-y-3 text-sm">
              <p>Fashion Modeling</p>
              <p>Commercial Campaigns</p>
              <p>Runway &amp; Events</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-3 text-sm">
              <p>Karachi, Pakistan</p>
              <p>+92 300 1234567</p>
              <p>info@pakistanmodelshub.com</p>
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
