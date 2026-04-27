'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <main className="bg-white text-black font-sans overflow-hidden">
      {/* Navbar */}
      

{/* Navbar - Updated with Solid White Background */}
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

    {/* Desktop Navigation */}
    <div className="hidden md:flex items-center gap-10 text-sm font-medium">
      <Link href="/" className="hover:text-yellow-500 transition-colors">Home</Link>
      <Link href="/models" className="hover:text-yellow-500 transition-colors">Models</Link>
      <Link href="/about" className="hover:text-yellow-500 transition-colors">About</Link>
      <Link href="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
    </div>

    {/* Book Now Button - Desktop */}
    <Link 
      href="/contact" 
      className="hidden md:block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 text-sm tracking-wider"
    >
      BOOK NOW
    </Link>

    {/* Hamburger Button */}
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

  {/* Mobile Slide-in Menu - No Change Needed */}
  <div 
    className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-500 ease-in-out z-[60] flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
  >
    <div className="p-8 flex flex-col h-full">
      <div className="flex justify-end mb-12">
        <button 
          onClick={toggleMenu}
          className="text-4xl text-black/70 hover:text-black"
        >
          ✕
        </button>
      </div>

      <div className="flex flex-col gap-8 text-2xl font-medium">
        <Link href="/" onClick={closeMenu} className="hover:text-yellow-500 transition-colors">Home</Link>
        <Link href="/models" onClick={closeMenu} className="hover:text-yellow-500 transition-colors">Models</Link>
        <Link href="/about" onClick={closeMenu} className="hover:text-yellow-500 transition-colors">About</Link>
        <Link href="/contact" onClick={closeMenu} className="hover:text-yellow-500 transition-colors">Contact</Link>
      </div>

      <div className="mt-auto pt-12">
        <Link 
          href="/contact" 
          onClick={closeMenu}
          className="block w-full bg-black text-white text-center py-4 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition-all text-lg"
        >
          BOOK A MODEL NOW
        </Link>
        <p className="text-center text-xs text-black/50 mt-6">Karachi • Lahore • Islamabad</p>
      </div>
    </div>
  </div>
</nav>
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/m1.jpg" 
            alt="Elite Karachi Models - Professional Fashion Model"
            fill 
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-block bg-yellow-400 text-black px-6 py-1.5 text-sm font-bold tracking-[3px] mb-6 rounded-full">
            KARACHI • PAKISTAN
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-none tracking-tighter mb-6">
            ELITE KARACHI<br />MODELS
          </h1>
          
          <p className="text-xl text-white/90 max-w-lg mx-auto mb-10">
            Premium fashion and commercial models for your next campaign, shoot, or event in Karachi
          </p>

          <Link 
            href="/contact"
            className="inline-block bg-yellow-400 hover:bg-white hover:text-black text-black font-bold text-lg px-14 py-5 rounded-full transition-all duration-300 tracking-wider shadow-xl"
          >
            BOOK NOW
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-sm flex flex-col items-center">
          <span>SCROLL TO EXPLORE</span>
          <div className="w-px h-12 bg-white/30 mt-3" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Why Top Brands Choose Pakistan Models Hub</h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Professional models with stunning looks, versatility, and experience for fashion, commercial, and editorial work across Pakistan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="group">
              <div className="relative h-80 mb-8 overflow-hidden rounded-3xl">
                <Image 
                  src="/m2.jpg" 
                  alt="Professional female model posing for fashion shoot in Karachi"
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Diverse &amp; Talented Pool</h3>
              <p className="text-black/70 leading-relaxed">
                From classic beauty to bold editorial looks, our 20+ professional models represent the best talent in Karachi and across Pakistan. Perfect for high-end fashion campaigns and commercial ads.
              </p>
              <Link href="/contact" className="mt-6 inline-block text-yellow-500 font-semibold hover:text-black transition-colors">Book Now →</Link>
            </div>

            <div className="group">
              <div className="relative h-80 mb-8 overflow-hidden rounded-3xl">
                <Image 
                  src="/m3.jpg" 
                  alt="Male model in Karachi for commercial photoshoot"
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Experienced Professionals</h3>
              <p className="text-black/70 leading-relaxed">
                All models are professionally trained with runway, print, and digital media experience. Reliable, punctual, and ready to deliver stunning results for your brand.
              </p>
              <Link href="/contact" className="mt-6 inline-block text-yellow-500 font-semibold hover:text-black transition-colors">Book Now →</Link>
            </div>

            <div className="group">
              <div className="relative h-80 mb-8 overflow-hidden rounded-3xl">
                <Image 
                  src="/m4.jpg" 
                  alt="Fashion model portfolio Karachi Pakistan"
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Fast Booking &amp; Reliable Service</h3>
              <p className="text-black/70 leading-relaxed">
                Quick response time, transparent pricing, and full support from casting to final delivery. Serving Karachi, Lahore, and Islamabad with premium modeling services.
              </p>
              <Link href="/contact" className="mt-6 inline-block text-yellow-500 font-semibold hover:text-black transition-colors">Book Now →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Models Showcase */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <div className="inline-block bg-yellow-400 text-black px-5 py-1 text-sm font-bold mb-4">DISCOVER TALENT</div>
              <h2 className="text-5xl font-bold tracking-tight">Featured Karachi Models</h2>
            </div>
            <Link href="/models" className="text-yellow-400 hover:text-white flex items-center gap-2 font-medium mt-6 md:mt-0">
              View All 20 Models →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[4/5]">
                <Image 
                  src={`/m${i + 5}.jpg`} 
                  alt={`Professional model ${i + 5} from Pakistan Models Hub Karachi`}
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent h-1/2" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm text-white/70">Model {i + 5}</p>
                  <p className="font-semibold text-lg">Karachi, Pakistan</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Premium Modeling Services in Karachi</h2>
            <p className="text-xl text-black/70">We provide top-tier models for every type of project</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="w-20 h-20 bg-yellow-400 text-black rounded-2xl flex-shrink-0 flex items-center justify-center text-4xl font-bold">01</div>
                <div>
                  <h3 className="text-3xl font-semibold mb-4">Fashion &amp; Runway</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    Stunning models perfect for fashion weeks, designer collections, and high-fashion editorials in Karachi. 
                    Expert in posing, movement, and bringing clothing to life.
                  </p>
                  <Link href="/contact" className="mt-6 text-red-600 font-semibold hover:text-black inline-block">Book Fashion Models →</Link>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-20 h-20 bg-yellow-400 text-black rounded-2xl flex-shrink-0 flex items-center justify-center text-4xl font-bold">02</div>
                <div>
                  <h3 className="text-3xl font-semibold mb-4">Commercial &amp; Advertising</h3>
                  <p className="text-black/70 text-lg leading-relaxed">
                    Versatile models for TV commercials, print ads, digital campaigns, billboards, and social media content. 
                    Natural, approachable, and camera-friendly.
                  </p>
                  <Link href="/contact" className="mt-6 text-red-600 font-semibold hover:text-black inline-block">Book Commercial Models →</Link>
                </div>
              </div>
            </div>

            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <Image 
                src="/m9.jpg" 
                alt="Professional modeling services in Karachi - Fashion and commercial shoots"
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent" />
              <div className="absolute bottom-12 left-12 text-white">
                <div className="uppercase tracking-widest text-yellow-400 text-sm mb-3">KARACHI&apos;S BEST</div>
                <h4 className="text-4xl font-bold leading-none">MODELS FOR YOUR BRAND</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold tracking-tight mb-16">Trusted by Leading Brands in Pakistan</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sana Safinaz", desc: "Fashion Campaign 2025" },
              { name: "Khaadi", desc: "Digital & Print Shoot" },
              { name: "Nishat Linen", desc: "Runway & Lookbook" }
            ].map((brand, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm">
                <div className="text-6xl text-yellow-400 mb-8">“</div>
                <p className="text-xl leading-relaxed mb-8">
                  Working with Pakistan Models Hub was seamless. Their models are professional, talented, and delivered exactly what our brand needed.
                </p>
                <div>
                  <p className="font-semibold">{brand.name}</p>
                  <p className="text-sm text-black/60">{brand.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <div className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-3 rounded-full font-bold mb-8">
            LIMITED SLOTS AVAILABLE
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
            Ready to book the perfect model<br />for your project?
          </h2>
          
          <p className="text-2xl text-white/70 max-w-xl mx-auto mb-12">
            Connect with Karachi&apos;s most talented professional models today.
          </p>

          <Link 
            href="/contact"
            className="inline-block bg-yellow-400 text-black font-bold text-2xl px-16 py-7 rounded-full hover:bg-white transition-all active:scale-95"
          >
            BOOK YOUR MODEL NOW
          </Link>

          <p className="mt-10 text-sm text-white/50">Fast response • Professional service • Karachi based</p>
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
            <p className="text-sm leading-relaxed">
              Elite modeling agency based in Karachi, Pakistan.<br />
              Connecting brands with the best professional models.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <div className="space-y-3 text-sm">
              <Link href="/" className="block hover:text-white">Home</Link>
              <Link href="/models" className="block hover:text-white">Our Models</Link>
              <Link href="/about" className="block hover:text-white">About Us</Link>
              <Link href="/contact" className="block hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Services</h4>
            <div className="space-y-3 text-sm">
              <p>Fashion Modeling</p>
              <p>Commercial Shoots</p>
              <p>Runway Shows</p>
              <p>Brand Campaigns</p>
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

        <div className="text-center text-xs text-white/40 mt-20 border-t border-white/10 pt-8">
          © 2026 Pakistan Models Hub. All Rights Reserved. | Professional Modeling Agency Karachi
        </div>
      </footer>
    </main>
  );
}