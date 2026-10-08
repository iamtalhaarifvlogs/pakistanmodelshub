
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Pakistan Models Hub | Trusted Karachi Call Girls & Escorts Agency 2026",
  description:
    "Pakistan Models Hub is Karachi’s most trusted agency for verified call girls in Karachi, escorts in DHA, Clifton, Bahria Town, PECHS, Saddar, Gulshan, Nazimabad and all major hotels. Complete privacy, security and 24/7 satisfaction guaranteed.",
  keywords: [
    "karachi call girls",
    "call girls in karachi",
    "escorts in karachi",
    "karachi escorts",
    "vip call girls karachi",
    "escorts in dha",
    "escorts in clifton",
    "bahria town escorts",
    "pechs escorts",
    "hotel escorts karachi",
    "pakistan models hub",
    "trusted escort agency karachi",
  ],
  alternates: {
    canonical: "https://pakistanmodelshub.com/about",
  },
  openGraph: {
    title: "About Pakistan Models Hub | Trusted Karachi Call Girls & Escorts Agency",
    description: "Verified call girls and escorts across DHA, Clifton, Bahria Town and all major hotels. Complete privacy and professional service.",
    images: [{ url: "/Premium escorts in Karachi.jpg" }],
  },
};

const WA_LINK = "https://wa.me/923104441188";

export default function AboutPage() {
  return (
    <div className="bg-zinc-950 text-gray-100 font-sans min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Premium escorts in Karachi.jpg"
            alt="About Pakistan Models Hub - Trusted Karachi Call Girls and Escorts Agency"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 md:pb-24 pt-32">
          <p className="text-yellow-400 font-semibold tracking-[0.25em] text-xs uppercase mb-4">
            Pakistan Models Hub
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-tight">
            About Pakistan Models Hub
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl font-light leading-relaxed">
            Karachi’s most trusted agency for verified <strong>call girls in Karachi</strong>, 
            <strong> escorts in DHA</strong>, <strong>escorts in Clifton</strong>, Bahria Town, 
            PECHS and all major luxury hotels. Privacy, security and satisfaction guaranteed.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center">
            The Most Trusted Escort Agency in Karachi
          </h2>
          
          <div className="space-y-6 text-gray-300 leading-relaxed font-light text-base md:text-lg">
            <p>
              <strong>Pakistan Models Hub</strong> is not just another listing site. We are a professional 
              agency built for clients who want real profiles, complete discretion and reliable service. 
              Whether you are searching for <strong>call girls in Karachi</strong>, 
              <strong> escorts in DHA</strong>, <strong>escorts in Clifton</strong> or VIP companions 
              for hotels, we deliver verified options only.
            </p>
            
            <p>
              Our companions are available across every major area of Karachi including DHA Phase 1 to 8, 
              Clifton Blocks, Bahria Town, PECHS, Sea View, Saddar, Gulshan-e-Iqbal, Gulistan-e-Johar, 
              Nazimabad, North Nazimabad, Bahadurabad, Malir, Korangi, Liaquatabad, Defense View and 
              Shahrah-e-Faisal.
            </p>
            
            <p>
              We also specialize in hotel outcall service for PC Hotel, Marriott Hotel, Avari Towers, 
              Mövenpick Hotel, Ramada Plaza, Regent Plaza, Sea Shell Inn, Beach Luxury Hotel, 
              Carlton Hotel, Days Inn, Hotel Crown Inn, Hotel One, Mehran Hotel and Guest Houses.
            </p>
            
            <p>
              Every profile is personally verified. When you contact us for <strong>Karachi call girls</strong> 
              or <strong>escorts in Karachi</strong>, you receive real recent photos and available companions only. 
              No fake listings, no time waste.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-zinc-900/40 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">
            Why Clients Choose Pakistan Models Hub
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "100% Verified Profiles",
                desc: "Every call girl and escort is personally checked. Real photos, real availability. No fake profiles ever.",
              },
              {
                title: "Complete Privacy & Security",
                desc: "Your identity, location and conversation stay completely private. Companions arrive as normal guests.",
              },
              {
                title: "Full Satisfaction Focus",
                desc: "We only send companions who match your preference. Your comfort and satisfaction is our first priority.",
              },
              {
                title: "24/7 Fast Response",
                desc: "Day or night, message us on WhatsApp and get shortlist within minutes. No long waiting.",
              },
              {
                title: "All Areas & Hotels Covered",
                desc: "DHA, Clifton, Bahria Town, PECHS, Saddar, Gulshan, Nazimabad and every major hotel in Karachi.",
              },
              {
                title: "Easy & Discreet Booking",
                desc: "Just tell us your area or hotel. We handle the rest professionally and privately.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-500/30 transition-all">
                <h3 className="text-yellow-400 font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Coverage */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Complete Coverage Across Karachi
          </h2>
          <p className="text-gray-400 mb-10 font-light">
            Our verified call girls and escorts are available in every important area and hotel:
          </p>

          <div className="mb-10">
            <h3 className="text-yellow-400 font-semibold mb-4 text-sm uppercase tracking-wider">Popular Areas</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "DHA Phase 1-8", "Clifton", "Bahria Town", "PECHS", "Sea View", "Saddar",
                "Gulshan-e-Iqbal", "Gulistan-e-Johar", "Nazimabad", "North Nazimabad",
                "Bahadurabad", "Malir", "Korangi", "Liaquatabad", "Defense View", "Shahrah-e-Faisal"
              ].map((item) => (
                <span key={item} className="px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-gray-300 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-yellow-400 font-semibold mb-4 text-sm uppercase tracking-wider">Major Hotels</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "PC Hotel", "Marriott Hotel", "Avari Towers", "Mövenpick Hotel",
                "Ramada Plaza", "Regent Plaza", "Sea Shell Inn", "Beach Luxury Hotel",
                "Carlton Hotel", "Days Inn", "Hotel Crown Inn", "Hotel One", "Mehran Hotel"
              ].map((item) => (
                <span key={item} className="px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-gray-300 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-zinc-900/40 border-y border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Security, Privacy & Satisfaction Guarantee
          </h2>
          <p className="text-gray-300 leading-relaxed font-light mb-8">
            We understand what Karachi clients actually need — complete privacy, safe arrangements, 
            verified companions and no nonsense. That is exactly what Pakistan Models Hub delivers. 
            From the first WhatsApp message to the end of your meeting, everything is handled 
            professionally and discreetly.
          </p>
          <p className="text-gray-400 font-light">
            If you are tired of fake profiles and unreliable services, you have finally reached 
            the right place. This is the end-level professional standard for 
            <strong> call girls in Karachi</strong> and <strong>escorts in Karachi</strong>.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-zinc-900/50 border-t border-zinc-800 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Experience the Difference Yourself
          </h2>
          <p className="text-gray-400 mb-8 font-light">
            Message us now for verified profiles. Fast response, real companions, complete privacy.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 text-black font-bold px-10 py-4 rounded-full tracking-wider uppercase hover:scale-105 transition-all"
          >
            WhatsApp 0310-444-1188
          </a>
        </div>
      </section>
    </div>
  );
}