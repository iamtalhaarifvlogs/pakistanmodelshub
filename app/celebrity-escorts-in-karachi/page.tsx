'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function CelebrityEscortsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="bg-white text-black font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/m50.jpg" 
            alt="Celebrity Escorts in Karachi - Exclusive VIP Companions"
            fill 
            className="object-cover brightness-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-none tracking-tighter mb-4">
            KARACHI CELEBRITY ESCORTS<br />
            <span className="text-yellow-400">0310-444-1188</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-medium text-white/90 mt-3">
            Exclusive VIP Celebrity Escorts in Karachi
          </h2>

          <a 
            href="tel:03104441188"
            className="mt-12 inline-block bg-yellow-400 hover:bg-white hover:text-black text-black font-bold text-lg px-14 py-5 rounded-full transition-all duration-300 shadow-xl"
          >
            BOOK EXCLUSIVE ESCORT
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Celebrity Escorts in Karachi</h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-black/80 leading-relaxed space-y-6">
            <p>
              Looking for Celebrity Escorts in Karachi? You are at the right place. 
              At Pakistan Models Hub, we offer an exclusive selection of high-class celebrity escorts, 
              models, influencers, and VIP companions for the ultimate luxury experience.
            </p>
            <p>
              Whether you need a glamorous partner for a business event, a romantic dinner date, 
              or a private intimate encounter, our celebrity escorts guarantee sophistication, beauty, 
              and complete discretion.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Celebrity Escorts?</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-xl mb-2">Elite & Handpicked Companions</h3>
                <p className="text-black/70">Professional models, actresses, and influencers with charm and sophistication.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">100% Privacy & Discretion</h3>
                <p className="text-black/70">Complete confidentiality guaranteed for every booking.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Customized Luxury Experiences</h3>
                <p className="text-black/70">Tailored for dinner dates, corporate events, travel, and private meetings.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-xl mb-2">Premium & Exclusive Service</h3>
                <p className="text-black/70">Starting from 1 Lakh PKR – True VIP experience.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">24/7 Availability</h3>
                <p className="text-black/70">Call or WhatsApp 0310-444-1188 for immediate booking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types & Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <h2 className="text-4xl font-bold mb-10">Premium Celebrity Escort Services</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-xl mb-3">Private Dinner Dates & Romantic Evenings</h3>
                  <p className="text-black/70">Impress with a stunning, well-mannered celebrity companion.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Corporate & Business Events</h3>
                  <p className="text-black/70">Sophisticated escort for networking and high-profile functions.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Travel Companionship & Getaways</h3>
                  <p className="text-black/70">Luxury travel partner for domestic or international trips.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Private Hotel & VIP Bookings</h3>
                  <p className="text-black/70">Exclusive companionship in Karachi’s finest hotels.</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <Image src="/m51.jpg" alt="Celebrity Escorts Karachi" width={600} height={800} className="rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Celebrity Escorts Pricing</h2>
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
                  <td className="p-5">Standard Celebrity Escort</td>
                  <td className="p-5">2–3 Hours</td>
                  <td className="p-5 text-center font-medium">1,00,000 – 2,50,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-5">VIP Full Night Experience</td>
                  <td className="p-5">Overnight</td>
                  <td className="p-5 text-center font-medium">3,00,000 – 8,00,000</td>
                </tr>
                <tr>
                  <td className="p-5">Premium Celebrity / Influencer</td>
                  <td className="p-5">Custom</td>
                  <td className="p-5 text-center font-medium">10,00,000 – 20,00,000+</td>
                </tr>
              </tbody>
            </table>
            <p className="text-center text-sm text-black/60 mt-6">25,000 PKR Token required to confirm booking and view profiles.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Exclusive Celebrity Companions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[52,53,54,55,56,57,58,59].map((n) => (
              <div key={n} className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
                <Image 
                  src={`/m${n}.jpg`} 
                  alt="Celebrity Escorts Karachi" 
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
          <h2 className="text-5xl font-bold tracking-tighter mb-6">Book Your Celebrity Escort in Karachi Today</h2>
          <p className="text-xl text-white/80 mb-12">Exclusive • Sophisticated • Unforgettable</p>
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
