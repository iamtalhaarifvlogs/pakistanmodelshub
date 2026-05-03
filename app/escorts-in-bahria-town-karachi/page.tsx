'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function BahriaTownEscortsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="bg-white text-black font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/m18.jpg" 
            alt="Escorts in Bahria Town Karachi - Premium VIP Companions"
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
            Escorts in Bahria Town Karachi
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
          <h2 className="text-4xl font-bold text-center mb-8">Escorts in Bahria Town Karachi</h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-black/80 leading-relaxed space-y-6">
            <p>
              Looking for Escorts in Bahria Town Karachi? You are at the right place. 
              At Pakistan Models Hub, we provide premium, professional, and discreet escort services 
              in Bahria Town Karachi and surrounding areas.
            </p>
            <p>
              Whether you are seeking VIP call girls, hotel-based escorts, home visit companions, 
              or celebrity look-alike models, our agency guarantees a luxurious and unforgettable experience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <h2 className="text-4xl font-bold mb-12">Why Choose Escorts in Bahria Town Karachi?</h2>
              <div className="space-y-10">
                <div>
                  <h3 className="font-semibold text-2xl mb-3">Experienced & Professional Girls</h3>
                  <p className="text-black/70">Our escorts are trained, attractive, and know how to make your experience memorable.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-3">VIP & Affordable Options</h3>
                  <p className="text-black/70">From budget-friendly companions to luxury VIP models.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-3">Discreet & Safe Services</h3>
                  <p className="text-black/70">Your privacy is fully guaranteed.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-3">24/7 Availability</h3>
                  <p className="text-black/70">Call 0310-444-1188 anytime for immediate booking.</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <Image src="/m19.jpg" alt="VIP Escorts Bahria Town Karachi" width={600} height={800} className="rounded-3xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Escorts */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Types of Escorts in Bahria Town Karachi</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <Image src="/m20.jpg" alt="VIP Escorts Bahria Town" width={600} height={400} className="rounded-3xl" />
            <div className="space-y-8 pt-8">
              <div>
                <h3 className="font-semibold text-xl mb-3">VIP Escorts in Bahria Town Karachi</h3>
                <p className="text-black/70">Elegant, high-class companions for luxury experiences.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-3">Hotel Escorts</h3>
                <p className="text-black/70">Discreet services for guests in nearby hotels.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-3">House Visit Escorts</h3>
                <p className="text-black/70">Private home-based services for maximum discretion.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-3">Celebrity Look-Alike Escorts</h3>
                <p className="text-black/70">Girls who resemble famous models and influencers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas & Pricing */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">Areas We Cover in Bahria Town</h2>
            <div className="grid grid-cols-2 gap-4">
              {["Bahria Town Phase 1", "Bahria Town Phase 2", "Bahria Town Phase 3", "Bahria Town Phase 4", "Bahria Town Golf City", "Clifton & DHA"].map((area) => (
                <div key={area} className="bg-white p-5 rounded-2xl shadow-sm text-center font-medium">{area}</div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">Pricing</h2>
            <div className="space-y-6">
              <div className="flex justify-between border-b pb-4">
                <div>Short Time (1 Hour)</div>
                <div className="font-medium">35,000 – 65,000 PKR</div>
              </div>
              <div className="flex justify-between border-b pb-4">
                <div>Extended (2-3 Hours)</div>
                <div className="font-medium">60,000 – 90,000 PKR</div>
              </div>
              <div className="flex justify-between border-b pb-4">
                <div>Full Night (8-10 Hours)</div>
                <div className="font-medium">80,000 – 120,000 PKR</div>
              </div>
              <div className="flex justify-between">
                <div>VIP / Celebrity Level</div>
                <div className="font-medium">120,000 – 150,000+ PKR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery / Visual Break */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[21,22,23,24,25,26,27,28].map((n) => (
            <div key={n} className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image src={`/m${n}.jpg`} alt={`Bahria Town Escorts`} fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tighter mb-6">Ready to Book Escorts in Bahria Town Karachi?</h2>
          <p className="text-xl text-white/80 mb-12">Fast Response • Complete Discretion • 24/7 Availability</p>
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
