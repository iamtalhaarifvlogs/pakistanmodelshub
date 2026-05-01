'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
    { id: "seashell-inn", name: "Seashell Inn", img: "/m14.jpg" },
    { id: "seashell-legacy", name: "Seashell Legacy", img: "/m15.jpg" },
    { id: "seashell-grand", name: "Seashell Grand", img: "/m16.jpg" },
    { id: "seashell-forte", name: "Seashell Forte", img: "/m17.jpg" },
    { id: "pc-hotel", name: "PC Hotel Karachi", img: "/m18.jpg" },
    { id: "ocean-pearl", name: "Ocean Pearl", img: "/m19.jpg" },
    { id: "avari-hotel", name: "Avari Hotel", img: "/m20.jpg" },
    { id: "ramada-creek", name: "Ramada Creek", img: "/m21.jpg" },
    { id: "ramada-airport", name: "Ramada Airport", img: "/m22.jpg" },
  ];

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
                className="block w-full bg-red-600 text-white text-center py-4 rounded-full font-semibold hover:bg-black transition-all text-lg"
              >
                CALL 0310-444-1188
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/m21.jpg" 
            alt="Escorts in Karachi - Premium Call Girls DHA Clifton PECHS Bahria"
            fill 
            className="object-cover brightness-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-[58px] font-bold text-white leading-none tracking-tighter mb-10">
            KARACHI ESCORTS<br />
            <span className="text-yellow-400">0310-444-1188</span>
          </h1>

          <a 
            href="tel:03104441188"
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

      {/* Trust Bar */}
      <section className="py-12 bg-black text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-yellow-400 font-medium tracking-widest mb-2">PREMIUM • DISCREET • VERIFIED</p>
          <p className="text-lg">Serving DHA, Clifton, PECHS, Bahria Town, Nazimabad, Tariq Road & All Major Hotels</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Why Gentlemen Choose Us</h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              We deliver the highest quality, most discreet, and professional escort experience in Karachi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[22,23,24,25,26,27].map((num, index) => {
              const titles = [
                "Verified & Beautiful Escorts",
                "Complete Privacy Guaranteed",
                "Fast Response & Reliable Service",
                "24/7 Availability Across Karachi",
                "Luxury Experience Every Time",
                "Client Satisfaction First"
              ];
              const descs = [
                "Every companion is personally verified for authenticity, beauty, and professionalism.",
                "Your privacy and safety are our top priority. All interactions are strictly confidential.",
                "We respond quickly and arrange your meeting within 30-90 minutes in most areas.",
                "Need companionship at any hour? We are available day and night, 7 days a week.",
                "From elegant dinner dates to passionate private moments — we create unforgettable experiences.",
                "Our goal is simple: every client leaves fully satisfied and wanting to return."
              ];

              return (
                <div key={num} className="group">
                  <div className="relative h-80 mb-8 overflow-hidden rounded-3xl">
                    <Image 
                      src={`/m${num}.jpg`} 
                      alt={titles[index]}
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{titles[index]}</h3>
                  <p className="text-black/70 leading-relaxed">{descs[index]}</p>
                  <a href="tel:03104441188" className="mt-6 inline-block text-red-600 font-semibold hover:text-black transition-colors">
                    Call 0310-444-1188 →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hotels Section */}
      <section className="py-24 bg-zinc-50" id="hotels">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Escort Services in Karachi Hotels</h2>
            <p className="text-xl text-black/70">Discreet & Professional Hotel Escort Service – 24/7 Availability</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { id: "seashell-inn", name: "Seashell Inn", img: "/m14.jpg", desc: "Popular choice for guests seeking luxury and privacy in a serene environment." },
              { id: "seashell-legacy", name: "Seashell Legacy", img: "/m15.jpg", desc: "Modern luxury hotel with excellent service. Our companions are well-familiar with the location." },
              { id: "seashell-grand", name: "Seashell Grand", img: "/m16.jpg", desc: "High-end property perfect for VIP clients looking for exclusive experiences." },
              { id: "seashell-forte", name: "Seashell Forte", img: "/m17.jpg", desc: "Contemporary hotel with great amenities. Fast and discreet service guaranteed." },
              { id: "pc-hotel", name: "PC Hotel Karachi", img: "/m18.jpg", desc: "One of Karachi's most prestigious 5-star hotels. Professional hotel escort service available." },
              { id: "ocean-pearl", name: "Ocean Pearl", img: "/m19.jpg", desc: "Beachfront luxury with stunning views. Ideal for romantic and private encounters." },
              { id: "avari-hotel", name: "Avari Hotel", img: "/m20.jpg", desc: "Iconic 5-star hotel in the heart of Karachi. Trusted by many regular clients." },
              { id: "ramada-creek", name: "Ramada Creek", img: "/m21.jpg", desc: "Convenient location with excellent facilities. Quick response guaranteed." },
              { id: "ramada-airport", name: "Ramada Airport", img: "/m22.jpg", desc: "Perfect for travelers and businessmen. Fast airport-area service." },
            ].map((hotel) => (
              <div key={hotel.id} id={hotel.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                <div className="relative h-80">
                  <Image 
                    src={hotel.img} 
                    alt={`Escorts at ${hotel.name} Karachi`}
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-semibold">{hotel.name}</h3>
                    <p className="text-sm opacity-90">Karachi</p>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-black/70 mb-6 leading-relaxed">
                    {hotel.desc} Our verified VIP companions provide premium and discreet service at {hotel.name}.
                  </p>
                  <a 
                    href="tel:03104441188"
                    className="block w-full bg-red-600 hover:bg-black text-white text-center py-4 rounded-2xl font-semibold transition-all"
                  >
                    Book Now - 0310-444-1188
                  </a>
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
              <h3 className="font-semibold mb-3">Do you provide escorts in all major hotels in Karachi?</h3>
              <p className="text-black/70">Yes, we provide discreet hotel escort service at all Seashell properties, PC Hotel, Avari Hotel, Ramada Creek, Ocean Pearl and many more.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">How fast can you arrange a meeting?</h3>
              <p className="text-black/70">We usually arrange meetings within 30-90 minutes depending on your location and availability.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Is 0310-444-1188 available 24/7?</h3>
              <p className="text-black/70">Yes, our service is available round the clock for incall and outcall bookings.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Are your services completely discreet?</h3>
              <p className="text-black/70">Absolutely. Privacy and confidentiality are our top priorities. All interactions are handled with the utmost discretion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Smaller & Elegant */}
      <section className="py-20 bg-gradient-to-br from-red-700 to-black text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Ready to Meet Beautiful Karachi Escorts?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Fast response • Complete discretion • 24/7 availability
          </p>
          
          <a 
            href="tel:03104441188"
            className="inline-block bg-white text-black font-semibold text-2xl px-16 py-6 rounded-full hover:bg-yellow-400 transition-all shadow-lg"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white/70 py-16 text-center">
        <p>© 2026 Pakistan Models Hub • Karachi Escorts Service</p>
        <p className="mt-2">DHA • Clifton • PECHS • Nazimabad • Tariq Road • Bahria Town • All Major Hotels</p>
      </footer>
    </main>
  );
}