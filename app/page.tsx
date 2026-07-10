// app/page.tsx
import MobileMenu from './components/MobileMenu'; // We'll create this next

// ✅ This works because this is now a Server Component
export const metadata = {
  title: "Karachi Escorts | Premium Escorts in DHA, Clifton & All Major Hotels | Verified Call Girls",
  description: "Premium Karachi escorts & verified call girls in DHA, Clifton, PECHS & top hotels. Discreet luxury escorts service in PC Hotel, Marriott, Mövenpick, Avari Towers & more. 24/7 bookings.",
  keywords: [
    "Karachi escorts", "Karachi escorts in DHA", "Karachi escorts in Clifton", 
    "premium Karachi escorts", "verified call girls Karachi", "escorts in DHA Karachi",
    "escorts in Clifton Karachi", "Karachi call girls", "luxury escorts Karachi",
    "discreet Karachi escorts", "escorts service in PC Hotel Karachi", 
    "Marriott Hotel Karachi escorts", "Mövenpick Hotel Karachi escorts",
    "Avari Towers Karachi escorts", "best escorts in Karachi", "high class call girls Karachi"
  ],
};

export default function Home() {
  return (
    <main className="bg-white text-black font-sans overflow-hidden">
      
      {/* Pass the MobileMenu as a client component */}
      <MobileMenu />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/m21.jpg" 
            alt="Premium Karachi Escorts - Elite Call Girls in DHA Clifton PECHS Karachi"
            className="absolute inset-0 w-full h-full object-cover brightness-65"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-[58px] font-bold text-white leading-none tracking-tighter mb-8">
            KARACHI ESCORTS
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-10">
            Premium Escorts in Karachi • Escorts in DHA • Escorts in Clifton • Verified Call Girls in Karachi
          </p>

          <a 
            href="https://wa.me/923104441188"
            target="_blank"
            className="inline-block bg-yellow-400 hover:bg-white hover:text-black text-black font-bold text-lg px-14 py-5 rounded-full transition-all duration-300 shadow-xl"
          >
            WHATSAPP 0310 4441188
          </a>
        </div>
      </section>

      {/* ==================== REST OF YOUR PAGE (unchanged) ==================== */}
      {/* Trust Bar */}
      <section className="py-12 bg-black text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-yellow-400 font-medium tracking-widest mb-2">PREMIUM • DISCREET • VERIFIED</p>
          <p className="text-lg">Karachi Escorts • Premium Escorts in DHA • Escorts in Clifton • All Major Hotels in Karachi</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">
              Why Gentlemen Choose Premium Karachi Escorts at Girls Hub Pakistan
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Experience the finest selection of verified and professional Karachi escorts. 
              We specialize in providing premium companions in DHA, Clifton, and all major hotels across Karachi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-zinc-50 p-10 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-4">Verified & Premium Karachi Escorts</h3>
              <p className="text-black/70 leading-relaxed">
                Every companion in our Karachi escorts collection is personally verified. 
                We only work with professional, elegant, and well-mannered call girls in Karachi who understand the importance of discretion and quality service.
              </p>
            </div>

            <div className="bg-zinc-50 p-10 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-4">Discreet Escorts Service in DHA & Clifton</h3>
              <p className="text-black/70 leading-relaxed">
                Whether you need premium escorts in DHA, high-class companions in Clifton, or luxury call girls in PECHS, 
                we guarantee complete privacy and professional service across all prime locations in Karachi.
              </p>
            </div>

            <div className="bg-zinc-50 p-10 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-4">Luxury Hotel Escorts Across Karachi</h3>
              <p className="text-black/70 leading-relaxed">
                From PC Hotel Karachi and Marriott Hotel to Mövenpick, Avari Towers, and Sunset Hotel DHA — 
                we provide discreet and premium Karachi escorts service in all major hotels with fast and confidential delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Section */}
      <section className="py-24 bg-zinc-50" id="hotels">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Escorts Service in Karachi Hotels</h2>
            <p className="text-xl text-black/70">Premium Karachi Escorts • Discreet Hotel Delivery • 24/7 Available in All Major Hotels</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Your hotel cards stay exactly the same */}
            {/* ... paste your existing hotel map here ... */}
          </div>
        </div>
      </section>

      {/* Rates Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Karachi Escorts Price List 2026</h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Transparent and competitive pricing for premium Karachi escorts, verified call girls in DHA, 
              and luxury companions across all major hotels in Karachi. No hidden charges.
            </p>
          </div>

          {/* Your rates table stays the same */}
        </div>
      </section>

      {/* Popular Searches Section */}
      <section className="py-16 bg-zinc-50 border-t">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Popular Karachi Escorts Searches</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3 text-sm">
            {/* Your links here */}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-red-700 to-black text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Ready for the Best Karachi Escorts Experience?
          </h2>
          <a 
            href="https://wa.me/923104441188"
            target="_blank"
            className="inline-block bg-black text-white font-semibold text-2xl px-16 py-6 rounded-full hover:bg-yellow-400 transition-all shadow-lg"
          >
            0310 4441188
          </a>
        </div>
      </section>
    </main>
  );
}