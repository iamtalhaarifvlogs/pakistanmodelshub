import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Celebrity Escorts in Karachi | VIP Celebrity Call Girls | Exclusive Models 2026",
  description:
    "Book exclusive celebrity escorts in Karachi and VIP celebrity call girls. High-profile companions for dinner dates, events and private meetings. Discreet luxury service by Pakistan Models Hub.",
  keywords: [
    "celebrity escorts karachi",
    "celebrity call girls karachi",
    "vip celebrity escorts",
    "exclusive escorts karachi",
    "high class escorts karachi",
    "model escorts karachi",
    "karachi call girls",
    "vip escorts karachi",
    "Pakistan Models Hub",
  ],
  alternates: {
    canonical: "https://pakistanmodelshub.com/celebrity-escorts-karachi",
  },
  openGraph: {
    title: "Celebrity Escorts in Karachi | VIP Celebrity Call Girls | Pakistan Models Hub",
    description:
      "Exclusive celebrity escorts and VIP call girls in Karachi. Luxury companionship for high-profile clients.",
    images: [{ url: "/Hire elite call girls in Karachi.jpg" }],
  },
};

const WA_LINK = "https://wa.me/923104441188";

const models = [
  { src: "/Hire elite call girls in Karachi.jpg", name: "Sobia", area: "Celebrity" },
  { src: "/Hire elite call girls in Avari Towers Karachi.jpg", name: "Zoya", area: "VIP Model" },
  { src: "/Elite Escorts in Bahria Town Karachi.jpg", name: "Iqra", area: "Elite" },
  { src: "/Premium escorts in Karachi.jpg", name: "Mehwish", area: "Celebrity Style" },
  { src: "/Call girl in Avari Towers Karachi.jpg", name: "Hira", area: "High Profile" },
  { src: "/DHA Karachi girls.jpg", name: "Anaya", area: "VIP" },
];

const faqs = [
  {
    q: "What makes celebrity escorts in Karachi different?",
    a: "Celebrity escorts are carefully selected high-profile companions known for elegance, sophistication and discretion. They are ideal for dinner dates, corporate events and private luxury experiences.",
  },
  {
    q: "Are the celebrity escorts in Karachi verified?",
    a: "Yes. All celebrity and VIP profiles offered by Pakistan Models Hub are personally verified. We only work with real, available companions.",
  },
  {
    q: "What is the starting price for celebrity escorts in Karachi?",
    a: "Celebrity escort packages generally start from 100,000 PKR for short engagements. Full night and exclusive VIP arrangements are customized based on the companion and duration.",
  },
  {
    q: "Can I book celebrity escorts for hotel or private events?",
    a: "Yes. We provide discreet outcall service to luxury hotels (PC, Marriott, Avari Towers, Mövenpick etc.) and private residences across Karachi.",
  },
  {
    q: "Is complete privacy guaranteed with celebrity escorts?",
    a: "Absolutely. Confidentiality is our highest priority. All bookings and arrangements are handled with maximum discretion.",
  },
];

export default function CelebrityEscortsPage() {
  return (
    <div className="bg-zinc-950 text-gray-100 font-sans min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Hire elite call girls in Karachi.jpg"
            alt="Celebrity Escorts in Karachi - VIP Celebrity Call Girls | Pakistan Models Hub"
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
            Pakistan Models Hub • Exclusive
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Celebrity Escorts in Karachi
          </h1>
          <h2 className="text-lg md:text-xl text-yellow-300/90 font-medium mb-6">
            VIP Celebrity Call Girls • Exclusive Models • High-Profile Companions
          </h2>
          <p className="text-gray-200 max-w-2xl mb-8 font-light leading-relaxed">
            Experience the finest celebrity escorts in Karachi. Elegant, sophisticated and
            discreet companions for dinner dates, events and private luxury meetings.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 hover:from-yellow-300 text-black font-bold text-sm md:text-base px-8 py-4 rounded-full transition-all tracking-wider uppercase shadow-[0_0_30px_rgba(250,204,21,0.35)] hover:scale-105"
          >
            Book Celebrity Escort on WhatsApp
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Exclusive Celebrity Escorts & VIP Call Girls in Karachi
          </h2>
          <p className="text-gray-300 leading-relaxed font-light mb-6">
            Looking for <strong>celebrity escorts in Karachi</strong>? Pakistan Models Hub offers an
            exclusive selection of high-class celebrity call girls, models and VIP companions.
            Perfect for those who demand elegance, sophistication and complete discretion.
          </p>
          <p className="text-gray-400 leading-relaxed font-light">
            Our celebrity escorts are ideal for private dinner dates, corporate events, travel
            companionship and exclusive overnight arrangements across Karachi’s finest hotels and residences.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-zinc-900/40 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">
            Why Choose Our Celebrity Escorts in Karachi?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Handpicked Elite Companions",
                desc: "Carefully selected models and high-profile companions known for beauty, manners and sophistication.",
              },
              {
                title: "Maximum Discretion",
                desc: "Complete confidentiality is guaranteed. All bookings are handled with the highest level of privacy.",
              },
              {
                title: "Luxury Experience",
                desc: "Tailored for dinner dates, business events, travel and private VIP meetings.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-500/30 transition-all"
              >
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
            Featured Celebrity Escorts in Karachi
          </h2>
          <p className="text-center text-gray-400 text-sm mb-10 font-light">
            Exclusive VIP and celebrity-style companions
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {models.map((model, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500/40 transition-all"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={model.src}
                    alt={`${model.name} - Celebrity Escorts in Karachi | VIP Call Girls`}
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

      {/* Services */}
      <section className="py-14 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold text-white text-center mb-10">
            Celebrity Escort Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Private Dinner Dates",
              "Corporate & Business Events",
              "Travel Companionship",
              "Luxury Hotel Bookings",
            ].map((service) => (
              <div
                key={service}
                className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 text-center"
              >
                <p className="text-gray-200 font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center text-white mb-10">
            Celebrity Escorts in Karachi – Rates
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
                  <td className="p-4">Celebrity Short Engagement</td>
                  <td className="p-4">2–3 Hours</td>
                  <td className="p-4 text-center font-medium text-white">1,00,000 – 2,50,000</td>
                </tr>
                <tr className="border-t border-zinc-800">
                  <td className="p-4">VIP Full Night</td>
                  <td className="p-4">Overnight</td>
                  <td className="p-4 text-center font-medium text-white">3,00,000 – 8,00,000</td>
                </tr>
                <tr className="border-t border-zinc-800">
                  <td className="p-4">Premium / Influencer Level</td>
                  <td className="p-4">Custom</td>
                  <td className="p-4 text-center font-medium text-yellow-400">10,00,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-500 mt-4">
            Token amount may be required to confirm exclusive celebrity bookings.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-zinc-900/40 border-y border-zinc-800">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center text-white mb-10">
            Celebrity Escorts in Karachi – FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 open:border-yellow-500/30"
              >
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
          <p className="text-gray-400 text-sm mb-6 font-light">
            Other popular pages for Karachi call girls and escorts
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Escorts in DHA", href: "/karachi-escorts-in-dha" },
              { name: "Escorts in Clifton", href: "/karachi-escorts-in-clifton" },
              { name: "Bahria Town Escorts", href: "/escorts-in-bahria-town-karachi" },
              { name: "PC Hotel Escorts", href: "/escorts-in-pc-hotel-karachi" },
              { name: "Marriott Escorts", href: "/escorts-in-marriott-hotel-karachi" },
              { name: "All Models", href: "/models" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-5 py-2.5 rounded-full bg-zinc-800 border border-zinc-700 text-gray-300 hover:border-yellow-500/50 hover:text-yellow-400 text-sm transition-all"
              >
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
            Book Celebrity Escorts in Karachi Now
          </h2>
          <p className="text-gray-400 mb-8 font-light">
            Exclusive • Sophisticated • Completely Discreet
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