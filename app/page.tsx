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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/m21.jpg" 
            alt="Karachi Escorts - Premium Call Girls DHA Clifton PECHS"
            fill 
            className="object-cover brightness-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-[58px] font-bold text-white leading-none tracking-tighter mb-8">
            KARACHI ESCORTS
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-10">
            Premium Escorts in Karachi • Escorts in DHA • Escorts in Clifton • Verified Call Girls
          </p>

          <a 
            href="https://wa.me/92310 4441188"
            target="_blank"
            className="inline-block bg-yellow-400 hover:bg-white hover:text-black text-black font-bold text-lg px-14 py-5 rounded-full transition-all duration-300 shadow-xl"
          >
            WHATSAPP 0310 4441188
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
          <p className="text-lg">Karachi Escorts • Escorts in DHA • Escorts in Clifton • All Major Hotels</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Why Gentlemen Choose Karachi Escorts at Girls Hub Pakistan</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* You can keep or expand this section as needed */}
          </div>
        </div>
      </section>

      {/* Hotels Section - Detailed with all requested hotels */}
      <section className="py-24 bg-zinc-50" id="hotels">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Escorts Service in Karachi Hotels</h2>
            <p className="text-xl text-black/70">Premium Karachi Escorts • Discreet Hotel Delivery • 24/7</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "PC Hotel Karachi", img: "/m16.jpg", desc: "We provide premium Karachi Escorts in PC Hotel with complete discretion and luxury service." },
              { name: "Marriott Hotel Karachi", img: "/m17.jpg", desc: "Enjoy high-class Karachi Escorts in Marriott Hotel. Verified companions for a memorable experience." },
              { name: "Ramada Plaza Hotel", img: "/m23.jpg", desc: "Luxury Karachi Escorts in Ramada Plaza Hotel available 24/7 with fast and discreet service." },
              { name: "Mövenpick Hotel Karachi", img: "/m18.jpg", desc: "Elegant escorts service at Mövenpick Hotel Karachi. Perfect for VIP clients seeking sophistication." },
              { name: "Avari Towers Karachi", img: "/m19.jpg", desc: "Premium Karachi Escorts in Avari Towers. Professional and discreet hotel escort service." },
              { name: "Beach Luxury Hotel", img: "/m20.jpg", desc: "Exclusive Karachi Escorts in Beach Luxury Hotel with beautiful sea views and privacy." },
              { name: "Galaxy Hotel Karachi", img: "/m21.jpg", desc: "Reliable call girls and Karachi Escorts in Galax Hotel for comfortable private meetings." },
              { name: "Sunset Hotel DHA", img: "/m12.jpg", desc: "Premium escorts in Sunset Hotel DHA Karachi – perfect location for luxury companionship." },
              { name: "Ramada Creek DHA", img: "/m23.jpg", desc: "High-class call girls in Ramada Creek DHA. Fast and discreet Karachi Escorts service." },
              { name: "Farhan Hotel Karachi", img: "/m24.jpg", desc: "Comfortable and private escorts service in Farhan Hotel Karachi." },
            ].map((hotel) => (
              <div key={hotel.name} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                <div className="relative h-80">
                  <Image 
                    src={hotel.img} 
                    alt={`${hotel.name} - Karachi Escorts`}
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-semibold">{hotel.name}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-black/70 mb-6 leading-relaxed">
                    {hotel.desc}
                  </p>
                  <a 
                    href="https://wa.me/923104441188"
                    target="_blank"
                    className="block w-full bg-red-600 hover:bg-black text-white text-center py-4 rounded-2xl font-semibold transition-all"
                  >
                    Book Now - 0310 4441188
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates List Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Karachi Escorts Price List</h2>
            <p className="text-xl text-black/70">Transparent Pricing for Premium Escorts in Karachi</p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border border-gray-200 text-left">
              <thead className="bg-zinc-100">
                <tr>
                  <th className="p-5 border-b font-semibold">Service Type</th>
                  <th className="p-5 border-b font-semibold">Duration</th>
                  <th className="p-5 border-b font-semibold text-center">Price (PKR)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-5">Short Time</td>
                  <td className="p-5">1-2 Hours</td>
                  <td className="p-5 text-center font-medium">40,000 - 60,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-5">Extended Session</td>
                  <td className="p-5">3-4 Hours</td>
                  <td className="p-5 text-center font-medium">70,000 - 90,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-5">Full Night Experience</td>
                  <td className="p-5">6-8 Hours</td>
                  <td className="p-5 text-center font-medium">80,000 - 120,000</td>
                </tr>
                <tr>
                  <td className="p-5">VIP Overnight</td>
                  <td className="p-5">Overnight / Weekend</td>
                  <td className="p-5 text-center font-medium">1,20,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-red-700 to-black text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Ready for the Best Karachi Escorts?
          </h2>
          <a 
            href="https://wa.me/03051271111"
            target="_blank"
            className="inline-block bg-black text-white font-semibold text-2xl px-16 py-6 rounded-full hover:bg-yellow-400 transition-all shadow-lg"
          >
            03104441188
          </a>
        </div>
      </section>
    </main>
  );
}