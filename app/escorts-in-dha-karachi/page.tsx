import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escorts in DHA Karachi | Call Girls in DHA | Premium DHA Escorts 2026",
  description:
    "Book verified escorts in DHA Karachi and call girls in DHA. Premium companions available across all DHA phases. Discreet 24/7 home visit and hotel outcall by Pakistan Models Hub.",
  keywords: [
    "escorts in dha",
    "call girls in dha",
    "dha escorts karachi",
    "escorts in dha karachi",
    "call girls dha karachi",
    "dha call girls",
    "karachi call girls",
    "escorts in karachi",
    "Pakistan Models Hub",
  ],
  alternates: {
    canonical: "https://pakistanmodelshub.com/escorts-in-dha-karachi",
  },
  openGraph: {
    title: "Escorts in DHA Karachi | Call Girls in DHA | Pakistan Models Hub",
    description: "Verified escorts and call girls in DHA Karachi. Premium outcall and home visit service.",
    images: [{ url: "/Karachi Escorts.jpg" }],
  },
};

const WA_LINK = "https://wa.me/923104441188";

const models = [
  { src: "/Karachi Escorts.jpg", name: "Mehwish", area: "DHA" },
  { src: "/Premium escorts in Karachi.jpg", name: "Hira", area: "VIP" },
  { src: "/sexy call girls in Karachi.jpg", name: "Anaya", area: "Premium" },
  { src: "/DHA Karachi girls.jpg", name: "Sobia", area: "Elite" },
  { src: "/Hire elite call girls in Karachi.jpg", name: "Zoya", area: "Celebrity" },
  { src: "/Call girl in Avari Towers Karachi.jpg", name: "Rania", area: "High Class" },
];

const faqs = [
  {
    q: "DHA me call girls milti hain?",
    a: "Haan. Pakistan Models Hub DHA Karachi ke tamam phases me verified escorts aur call girls provide karta hai real photos ke sath.",
  },
  {
    q: "DHA me home visit aur hotel outcall available hai?",
    a: "Haan. Hum DHA Phase 1 se 8 tak home visit aur nearby hotels me discreet outcall arrange karte hain.",
  },
  {
    q: "DHA escorts ka booking kitni jaldi hota hai?",
    a: "Zyadatar bookings WhatsApp pe message karne ke 45–90 minutes ke andar confirm ho jati hain.",
  },
  {
    q: "DHA Karachi me escorts ke rates kya hain?",
    a: "Short visit 40,000–60,000 PKR se start hota hai. Full night packages usually 80,000–120,000 PKR tak hote hain.",
  },
  {
    q: "DHA me service private hai?",
    a: "Bilkul private. Companion normal guest ki tarah aate hain. Full confidentiality guarantee hai.",
  },
];

export default function DhaEscortsPage() {
  return (
    <div className="bg-zinc-950 text-gray-100 font-sans min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Karachi Escorts.jpg"
            alt="Escorts in DHA Karachi - Call Girls in DHA | Pakistan Models Hub"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 md:pb-24 pt-32">
          <p className="text-yellow-400 font-semibold tracking-[0.25em] text-xs uppercase mb-4">
            Pakistan Models Hub
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Escorts in DHA Karachi
          </h1>
          <h2 className="text-lg md:text-xl text-yellow-300/90 font-medium mb-6">
            Call Girls in DHA • Premium Escorts • Verified Profiles
          </h2>
          <p className="text-gray-200 max-w-2xl mb-8 font-light leading-relaxed">
            Book verified escorts in DHA Karachi and high-class call girls available across all DHA phases.
            Discreet 24/7 home visit and hotel outcall service.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 hover:from-yellow-300 text-black font-bold text-sm md:text-base px-8 py-4 rounded-full transition-all tracking-wider uppercase shadow-[0_0_30px_rgba(250,204,21,0.35)] hover:scale-105"
          >
            Book DHA Escorts on WhatsApp
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Premium Escorts & Call Girls in DHA Karachi
          </h2>
          <p className="text-gray-300 leading-relaxed font-light mb-6">
            Looking for reliable <strong>escorts in DHA Karachi</strong>? Pakistan Models Hub provides
            verified and discreet <strong>call girls in DHA</strong>. Perfect for short visits,
            overnight stays and VIP arrangements across all DHA phases.
          </p>
          <p className="text-gray-400 leading-relaxed font-light">
            DHA is one of Karachi’s most exclusive areas. Our companions understand the importance of
            elegance, punctuality and absolute privacy.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-zinc-900/40 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">
            Why Choose Escorts in DHA Karachi?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Verified DHA Call Girls",
                desc: "Real photos wali verified profiles. Fake photos nahi.",
              },
              {
                title: "Home Visit + Hotel Outcall",
                desc: "DHA Phase 1–8 me home visit aur nearby hotels dono options available.",
              },
              {
                title: "24/7 Fast Booking",
                desc: "WhatsApp pe message karte hi shortlist mil jati hai.",
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

      {/* Models Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-3">
            Featured Escorts in DHA Karachi
          </h2>
          <p className="text-center text-gray-400 text-sm mb-10 font-light">
            Verified call girls available for DHA bookings
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {models.map((model, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500/40 transition-all">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={model.src}
                    alt={`${model.name} - Escorts in DHA Karachi | Call Girls in DHA`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-semibold text-sm">{model.name}</p>
                    <p className="text-yellow-400/90 text-xs">{model.area}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-14 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-8">Areas We Cover in DHA Karachi</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["DHA Phase 1", "DHA Phase 2", "DHA Phase 3", "DHA Phase 4", "DHA Phase 5", "DHA Phase 6", "DHA Phase 7", "DHA Phase 8"].map((area) => (
              <span key={area} className="px-5 py-2.5 rounded-full bg-zinc-800 border border-zinc-700 text-gray-300 text-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center text-white mb-10">
            Escorts in DHA Karachi – Rates
          </h2>
          <div className="bg-zinc-900/60 border border-yellow-500/20 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-900 text-yellow-400">
                <tr>
                  <th className="p-4 text-left font-bold">Service</th>
                  <th className="p-4 text-left font-bold">Duration</th>
                  <th className="p-4 text-center font-bold">Rates (PKR)</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-zinc-800">
                  <td className="p-4">Short Visit</td>
                  <td className="p-4">1–2 Hours</td>
                  <td className="p-4 text-center font-medium text-white">40,000 – 60,000</td>
                </tr>
                <tr className="border-t border-zinc-800">
                  <td className="p-4">Extended</td>
                  <td className="p-4">3–4 Hours</td>
                  <td className="p-4 text-center font-medium text-white">70,000 – 90,000</td>
                </tr>
                <tr className="border-t border-zinc-800">
                  <td className="p-4">Full Night</td>
                  <td className="p-4">6–8 Hours</td>
                  <td className="p-4 text-center font-medium text-white">80,000 – 120,000</td>
                </tr>
                <tr className="border-t border-zinc-800">
                  <td className="p-4">VIP Elite</td>
                  <td className="p-4">Overnight</td>
                  <td className="p-4 text-center font-medium text-yellow-400">120,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-zinc-900/40 border-y border-zinc-800">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center text-white mb-10">
            Escorts in DHA Karachi – FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-yellow-500/30">
                <summary className="cursor-pointer list-none font-semibold text-white flex justify-between gap-4">
                  <span>{item.q}</span>
                  <span className="text-yellow-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-400 font-light leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* More Like This */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold text-white mb-2">More Like This</h2>
          <p className="text-gray-400 text-sm mb-6 font-light">Other popular areas</p>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Karachi Escorts in DHA", href: "/karachi-escorts-in-dha" },
              { name: "Escorts in Clifton", href: "/karachi-escorts-in-clifton" },
              { name: "Bahria Town Escorts", href: "/escorts-in-bahria-town-karachi" },
              { name: "PECHS Escorts", href: "/escorts-in-pechs-karachi" },
              { name: "Sea View Escorts", href: "/escorts-in-sea-view-karachi" },
              { name: "All Models", href: "/models" },
            ].map((item) => (
              <Link key={item.name} href={item.href} className="px-5 py-2.5 rounded-full bg-zinc-800 border border-zinc-700 text-gray-300 hover:border-yellow-500/50 hover:text-yellow-400 text-sm transition-all">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-zinc-900/50 border-t border-zinc-800 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Book Escorts in DHA Karachi Now
          </h2>
          <p className="text-gray-400 mb-8 font-light">Fast response • Verified profiles • Complete discretion</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 text-black font-bold px-10 py-4 rounded-full tracking-wider uppercase hover:scale-105 transition-all">
            WhatsApp 0310-444-1188
          </a>
        </div>
      </section>
    </div>
  );
}