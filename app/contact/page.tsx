import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book Karachi Call Girls & Escorts | WhatsApp 0310-444-1188",
  description:
    "Contact Pakistan Models Hub to book verified call girls in Karachi, escorts in DHA, Clifton, Bahria Town and all major hotels. Fast WhatsApp response, complete privacy and 24/7 availability.",
  keywords: [
    "book call girls karachi",
    "karachi call girls number",
    "escorts whatsapp karachi",
    "call girl contact number karachi",
    "book escorts in karachi",
    "call girls in karachi contact",
    "escorts in karachi whatsapp",
    "karachi escorts number",
    "Pakistan Models Hub contact",
  ],
  alternates: {
    canonical: "https://pakistanmodelshub.com/contact",
  },
  openGraph: {
    title: "Contact Us | Book Karachi Call Girls & Escorts in Karachi",
    description: "Fast WhatsApp booking for verified call girls and escorts across Karachi. Complete privacy guaranteed.",
    images: [{ url: "/Premium escorts in Karachi.jpg" }],
  },
};

const WA_LINK = "https://wa.me/923104441188";

export default function ContactPage() {
  return (
    <div className="bg-zinc-950 text-gray-100 font-sans min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Premium escorts in Karachi.jpg"
            alt="Contact Pakistan Models Hub to Book Karachi Call Girls and Escorts"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 md:pb-20 pt-32 text-center">
          <p className="text-yellow-400 font-semibold tracking-[0.25em] text-xs uppercase mb-4">
            24/7 Fast Response
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-tight">
            Contact Us to Book
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Book verified <strong>Karachi call girls</strong>, <strong>escorts in DHA</strong>, 
            <strong> escorts in Clifton</strong> and companions for all major hotels with complete privacy.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 hover:from-yellow-300 text-black font-bold text-base px-10 py-4 rounded-full transition-all tracking-wider uppercase shadow-[0_0_30px_rgba(250,204,21,0.35)] hover:scale-105"
          >
            WhatsApp Now – 0310-444-1188
          </a>
        </div>
      </section>

      {/* Why Contact */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">
            Why Clients Prefer Booking Through Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Complete Privacy",
                desc: "Your identity and conversation stay 100% private. No data is ever shared.",
              },
              {
                title: "Verified Profiles Only",
                desc: "Only real Karachi call girls and escorts with recent photos are shared.",
              },
              {
                title: "Fast WhatsApp Reply",
                desc: "Most clients get a shortlist within minutes of messaging us.",
              },
              {
                title: "Easy Process",
                desc: "Just tell us your area or hotel. We handle everything professionally.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 text-center hover:border-yellow-500/30 transition-all">
                <h3 className="text-yellow-400 font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Box */}
      <section className="py-16 bg-zinc-900/40 border-y border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Direct WhatsApp Booking
          </h2>
          <p className="text-gray-400 mb-10 font-light max-w-2xl mx-auto">
            The fastest and most private way to book <strong>call girls in Karachi</strong> or 
            <strong> escorts in Karachi</strong> is through WhatsApp.
          </p>

          <div className="bg-zinc-900/70 border border-yellow-500/20 rounded-2xl p-8 md:p-10">
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-3">WhatsApp / Call</p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl md:text-4xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              0310-444-1188
            </a>
            <p className="text-gray-500 text-sm mt-4">
              Available 24 hours • Verified companions only
            </p>
          </div>
        </div>
      </section>

      {/* What to Tell */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-10">
            What to Share When You Message Us
          </h2>
          <div className="space-y-5">
            {[
              "Your preferred area (DHA, Clifton, Bahria Town, PECHS, Saddar, Gulshan, Nazimabad, Bahadurabad etc.)",
              "Preferred hotel if any (PC Hotel, Marriott, Avari Towers, Mövenpick, Ramada, Regent Plaza etc.)",
              "Duration needed (short visit, extended or full night)",
              "Any specific preference (look, age range, language, style)",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                <span className="text-yellow-400 font-bold text-lg shrink-0">{i + 1}</span>
                <p className="text-gray-300 font-light">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Coverage */}
      <section className="py-14 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-8">
            We Cover All Major Areas & Hotels
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "DHA Call Girls", "Clifton Escorts", "Bahria Town Escorts", "PECHS Call Girls",
              "Sea View Escorts", "Saddar Escorts", "Gulshan Escorts", "Nazimabad Escorts",
              "Bahadurabad Escorts", "PC Hotel Escorts", "Marriott Call Girls",
              "Avari Towers Escorts", "Mövenpick Call Girls", "Ramada Plaza Escorts"
            ].map((item) => (
              <span key={item} className="px-5 py-2.5 rounded-full bg-zinc-800 border border-zinc-700 text-gray-300 text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-zinc-900/50 border-t border-zinc-800 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
            Ready to Book Verified Companions?
          </h2>
          <p className="text-gray-400 mb-8 font-light text-lg">
            Message us now. Fast response, real profiles, complete privacy and professional service.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 text-black font-bold text-lg px-12 py-5 rounded-full tracking-wider uppercase hover:scale-105 transition-all shadow-[0_0_35px_rgba(250,204,21,0.4)]"
          >
            WhatsApp 0310-444-1188
          </a>
          <p className="text-gray-500 text-xs mt-6">
            Complete privacy guaranteed • No registration required • 24/7 available
          </p>
        </div>
      </section>
    </div>
  );
}