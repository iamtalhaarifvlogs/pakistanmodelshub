'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function SaddarEscortsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="bg-white text-black font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/m35.jpg" 
            alt="Escorts in Saddar Karachi - VIP Companions"
            fill 
            className="object-cover brightness-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/65 to-black/85" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-none tracking-tighter mb-4">
            KARACHI ESCORTS<br />
            <span className="text-yellow-400">0310-444-1188</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-medium text-white/90 mt-3">
            Escorts in Saddar Karachi
          </h2>

          <a 
            href="tel:03104441188"
            className="mt-12 inline-block bg-yellow-400 hover:bg-white hover:text-black text-black font-bold text-lg px-14 py-5 rounded-full transition-all duration-300 shadow-xl"
          >
            BOOK NOW
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Escorts in Saddar Karachi</h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-black/80 leading-relaxed space-y-6">
            <p>
              Looking for Escorts in Saddar Karachi? You are at the right place. 
              At Pakistan Models Hub, we provide premium, professional, and discreet escort services 
              in Saddar and surrounding areas.
            </p>
            <p>
              Saddar is one of the busiest commercial and business hubs of Karachi, known for its vibrant lifestyle, 
              shopping centers, and hotels. Our Saddar Escorts cater to clients looking for professional, safe, 
              and high-class companionship.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Escorts in Saddar Karachi?</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-xl mb-2">Professional & Experienced Girls</h3>
                <p className="text-black/70">Elegant, attractive escorts trained to provide premium experiences.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">VIP & Affordable Options</h3>
                <p className="text-black/70">From high-class VIP escorts to budget-friendly call girls.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Discreet & Safe Services</h3>
                <p className="text-black/70">Your privacy is our priority. All bookings are fully confidential.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-xl mb-2">Flexible & Customizable Services</h3>
                <p className="text-black/70">Hotel visits, home visits, or private companionship tailored to your needs.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">24/7 Availability</h3>
                <p className="text-black/70">Call or WhatsApp 0310-444-1188 anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Escorts */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <h2 className="text-4xl font-bold mb-10">Types of Escorts in Saddar Karachi</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-xl mb-3">VIP Escorts</h3>
                  <p className="text-black/70">Elegant and high-class companions for luxurious experiences.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Hotel Escorts</h3>
                  <p className="text-black/70">Professional and discreet escorts available for hotel guests in Saddar.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">House Visit Escorts</h3>
                  <p className="text-black/70">Private bookings for maximum discretion.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Celebrity Look-Alike Escorts</h3>
                  <p className="text-black/70">Girls resembling famous models, TV actresses, or influencers.</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <Image src="/m36.jpg" alt="VIP Escorts Saddar Karachi" width={600} height={800} className="rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Areas We Cover in Saddar</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {["Saddar Bazaar", "Preedy Street", "Bohri Bazaar", "I.I. Chundrigar", "PECHS", "Clifton"].map((area) => (
              <div key={area} className="bg-white py-5 rounded-2xl shadow-sm font-medium">{area}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Pricing for Escorts in Saddar Karachi</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border border-gray-200 text-left">
              <thead className="bg-zinc-100">
                <tr>
                  <th className="p-5 border-b font-semibold">Service Type</th>
                  <th className="p-5 border-b font-semibold">Duration</th>
                  <th className="p-5 border-b font-semibold text-center">Price Range (PKR)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="p-5">Short Time Session</td>
                  <td className="p-5">1 Hour</td>
                  <td className="p-5 text-center font-medium">35,000 – 65,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-5">Extended Session</td>
                  <td className="p-5">2–3 Hours</td>
                  <td className="p-5 text-center font-medium">60,000 – 90,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-5">Full Night Experience</td>
                  <td className="p-5">8–10 Hours</td>
                  <td className="p-5 text-center font-medium">80,000 – 120,000</td>
                </tr>
                <tr>
                  <td className="p-5">VIP / Celebrity Level</td>
                  <td className="p-5">Custom</td>
                  <td className="p-5 text-center font-medium">120,000 – 150,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Beautiful Companions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[37,38,39,40,41,42,43,44].map((n) => (
              <div key={n} className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
                <Image 
                  src={`/m${n}.jpg`} 
                  alt="Saddar Escorts Karachi" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tighter mb-6">Ready to Book Escorts in Saddar Karachi?</h2>
          <p className="text-xl text-white/80 mb-12">Fast • Discreet • Professional • 24/7</p>
          <a 
            href="tel:03104441188"
            className="inline-block bg-yellow-400 text-black font-bold text-2xl px-16 py-6 rounded-full hover:bg-white transition-all"
          >
            Call 0310-444-1188
          </a>
        </div>
      </section>
    </main>
  );
}