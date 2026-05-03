'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function BahadurabadEscortsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="bg-white text-black font-sans overflow-hidden">
      {/* Hero Section - Premium & Elegant */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/m18.jpg" 
            alt="Escorts in Bahadurabad Karachi - Premium Call Girls"
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
            Escorts in Bahadurabad Karachi
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
          <h2 className="text-4xl font-bold text-center mb-8">Escorts in Bahadurabad Karachi</h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-black/80 leading-relaxed space-y-6">
            <p>
              Looking for Escorts in Bahadurabad Karachi? You’ve arrived at the perfect destination. 
              At Pakistan Models Hub, we provide premium, professional, and discreet escort services across Bahadurabad and its surrounding areas.
            </p>
            <p>
              Whether you are looking for VIP call girls, hotel-based escorts, home visit companions, 
              or celebrity look-alike models, our agency ensures a luxurious and unforgettable experience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Escorts in Bahadurabad Karachi?</h2>
          <div className="grid md:grid-cols-2 gap-10 text-lg">
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-xl mb-2">Professional & Experienced Escorts</h3>
                <p className="text-black/70">Our girls are trained, attractive, and ready to provide an unforgettable experience with charm and elegance.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">VIP & Affordable Options</h3>
                <p className="text-black/70">Choose from luxury VIP escorts to more budget-friendly companions.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Discreet & Safe Services</h3>
                <p className="text-black/70">Your privacy is guaranteed. All bookings and meetings are fully confidential.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-xl mb-2">Flexible & Customizable Services</h3>
                <p className="text-black/70">Hotel visits, home visits, or companionship for events – tailored to your needs.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">24/7 Availability</h3>
                <p className="text-black/70">Call or WhatsApp 0310-444-1188 anytime to book your preferred escort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Escorts */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Types of Escorts in Bahadurabad Karachi</h2>
          <div className="grid md:grid-cols-2 gap-8 text-lg">
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-xl mb-3">VIP Escorts in Bahadurabad</h3>
                <p className="text-black/70">High-profile, luxurious, and elegant companions for special occasions.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-3">Hotel Escorts</h3>
                <p className="text-black/70">Discreet and professional escorts available for hotel visits.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-3">Hot Call Girls</h3>
                <p className="text-black/70">Young, attractive, and charming girls ready to make your night unforgettable.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-xl mb-3">Celebrity Look-Alike Escorts</h3>
                <p className="text-black/70">Girls resembling famous models, actresses, or influencers.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-3">House Visit Escorts</h3>
                <p className="text-black/70">Private, home-based services for full discretion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Areas We Cover Around Bahadurabad</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg text-center">
            {["Gulshan-e-Iqbal", "Liaquatabad", "Nazimabad", "Saddar", "Karachi Cantt", "Clifton", "PECHS", "Tariq Road"].map((area) => (
              <div key={area} className="bg-white py-4 rounded-2xl shadow-sm">{area} Escorts Karachi</div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Pricing for Escorts in Bahadurabad Karachi</h2>
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

      {/* Final CTA */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tighter mb-6">Ready to Book Escorts in Bahadurabad Karachi?</h2>
          <p className="text-xl text-white/80 mb-10">Fast • Discreet • Professional</p>
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
