'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function BeachLuxuryHotelEscortsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="bg-white text-black font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/m15.jpg" 
            alt="Escorts in Beach Luxury Hotel Karachi - VIP Companions"
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
            Escorts in Beach Luxury Hotel Karachi
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
          <h2 className="text-4xl font-bold text-center mb-8">Escorts in Beach Luxury Hotel Karachi</h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-black/80 leading-relaxed space-y-6">
            <p>
              Looking for Escorts in Beach Luxury Hotel Karachi? You’re at the right place. 
              At Pakistan Models Hub, we specialize in providing premium, professional, and discreet escort services 
              for guests staying at Beach Luxury Hotel and nearby areas.
            </p>
            <p>
              Beach Luxury Hotel is one of Karachi’s most prestigious hotels. Our Beach Luxury Hotel Escorts provide 
              top-notch companionship to ensure your stay is enjoyable, exciting, and discreet.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Escorts in Beach Luxury Hotel Karachi?</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-xl mb-2">Professional & Experienced Girls</h3>
                <p className="text-black/70">Our escorts are trained, attractive, and ready to provide a memorable experience.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">VIP & Affordable Options</h3>
                <p className="text-black/70">From luxurious VIP escorts to more budget-friendly companions.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Discreet & Safe Services</h3>
                <p className="text-black/70">Your privacy is our top priority. All interactions are fully confidential.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-xl mb-2">Flexible & Customizable Services</h3>
                <p className="text-black/70">Hotel visits, home visits, or special event companionship as per your needs.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">24/7 Availability</h3>
                <p className="text-black/70">Call or WhatsApp 0310-444-1188 to book your preferred escort anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Escorts + Image */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <h2 className="text-4xl font-bold mb-10">Types of Escorts at Beach Luxury Hotel Karachi</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-xl mb-3">VIP Escorts</h3>
                  <p className="text-black/70">Elegant and high-class companions for a luxurious experience.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Hotel Escorts</h3>
                  <p className="text-black/70">Discreet and professional escorts available for your hotel room.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Hot Call Girls</h3>
                  <p className="text-black/70">Young, attractive, and charming girls ready to make your stay unforgettable.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Celebrity Look-Alike Escorts</h3>
                  <p className="text-black/70">Girls resembling famous models, actresses, or influencers.</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <Image src="/m20.jpg" alt="VIP Escorts Beach Luxury Hotel Karachi" width={600} height={800} className="rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Areas We Cover Near Beach Luxury Hotel</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {["Clifton Block 1 & 2", "Clifton Phase 6 & 7", "Karachi Sea View", "Saddar", "Karachi Cantt", "PECHS"].map((area) => (
              <div key={area} className="bg-white py-5 rounded-2xl shadow-sm font-medium">{area}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Pricing for Escorts in Beach Luxury Hotel Karachi</h2>
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
            {[21,22,23,24,25,26,27,28].map((n) => (
              <div key={n} className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
                <Image 
                  src={`/m${n}.jpg`} 
                  alt="Beach Luxury Hotel Escorts Karachi" 
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
          <h2 className="text-5xl font-bold tracking-tighter mb-6">Ready to Book Escorts in Beach Luxury Hotel Karachi?</h2>
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
