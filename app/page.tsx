// app/page.tsx
import MobileMenu from './components/MobileMenu';
import Image from 'next/image';

// ==================== SEO METADATA ====================
export const metadata = {
  title: "Karachi Escorts | Premium Escorts in DHA, Clifton & All Major Hotels | Verified Call Girls",
  description: "Premium Karachi escorts & verified call girls in DHA, Clifton, PECHS & top hotels. Discreet luxury escorts service in PC Hotel, Marriott, Mövenpick, Avari Towers, Beach Luxury & more. 24/7 bookings available.",
  keywords: [
    "Karachi escorts", "Karachi escorts in DHA", "Karachi escorts in Clifton",
    "premium Karachi escorts", "verified call girls Karachi", "escorts in DHA Karachi",
    "escorts in Clifton Karachi", "Karachi call girls", "luxury escorts Karachi",
    "discreet Karachi escorts", "escorts service in PC Hotel Karachi",
    "Marriott Hotel Karachi escorts", "Mövenpick Hotel Karachi escorts",
    "Avari Towers Karachi escorts", "best escorts in Karachi", "high class call girls Karachi",
    "Karachi escorts price list", "escorts in Sunset Hotel DHA", "Ramada Creek DHA escorts"
  ],
  openGraph: {
    title: "Karachi Escorts | Premium Escorts in DHA, Clifton & Top Hotels",
    description: "Book premium Karachi escorts and verified call girls in DHA, Clifton, and all major hotels. Discreet, luxurious, and available 24/7.",
    images: [{ url: "/m21.jpg" }],
  },
};

export default function Home() {
  return (
    <main className="bg-white text-black font-sans overflow-hidden">
      
      {/* ==================== MOBILE MENU ==================== */}
      <MobileMenu />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/m21.jpg" 
            alt="Premium Karachi Escorts - Elite Call Girls in DHA Clifton PECHS Karachi"
            fill 
            className="object-cover brightness-65"
            priority
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

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 text-sm flex flex-col items-center">
          <span>SCROLL TO EXPLORE</span>
          <div className="w-px h-12 bg-white/30 mt-3" />
        </div>
      </section>

      {/* ==================== TRUST BAR ==================== */}
      <section className="py-12 bg-black text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-yellow-400 font-medium tracking-widest mb-2">PREMIUM • DISCREET • VERIFIED</p>
          <p className="text-lg">Karachi Escorts • Premium Escorts in DHA • Escorts in Clifton • All Major Hotels in Karachi</p>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
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

      {/* ==================== HOTELS SECTION ==================== */}
      <section className="py-24 bg-zinc-50" id="hotels">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Escorts Service in Karachi Hotels</h2>
            <p className="text-xl text-black/70">Premium Karachi Escorts • Discreet Hotel Delivery • 24/7 Available in All Major Hotels</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "PC Hotel Karachi", img: "/m16.jpg", desc: "We provide premium Karachi escorts in PC Hotel Karachi with complete discretion and luxury service. Our verified companions are available for short time and overnight stays in Pakistan's most iconic hotel." },
              { name: "Marriott Hotel Karachi", img: "/m17.jpg", desc: "Enjoy high-class Karachi escorts in Marriott Hotel Karachi. Our verified and professional companions offer discreet luxury service for gentlemen seeking memorable experiences in one of Karachi's top hotels." },
              { name: "Ramada Plaza Hotel", img: "/m23.jpg", desc: "Luxury Karachi escorts in Ramada Plaza Hotel available 24/7 with fast and discreet service. Perfect for clients looking for premium call girls in a central and secure location in Karachi." },
              { name: "Mövenpick Hotel Karachi", img: "/m18.jpg", desc: "Elegant escorts service at Mövenpick Hotel Karachi. We offer sophisticated and premium Karachi escorts for VIP clients who appreciate quality, privacy, and world-class hospitality." },
              { name: "Avari Towers Karachi", img: "/m19.jpg", desc: "Premium Karachi escorts in Avari Towers Karachi. Our professional and discreet companions provide high-class escort service with complete confidentiality in this iconic luxury hotel." },
              { name: "Beach Luxury Hotel", img: "/m20.jpg", desc: "Exclusive Karachi escorts in Beach Luxury Hotel with beautiful sea views and maximum privacy. Ideal for gentlemen seeking a premium and romantic experience with our verified companions." },
              { name: "Galaxy Hotel Karachi", img: "/m21.jpg", desc: "Reliable call girls and premium Karachi escorts in Galaxy Hotel for comfortable and private meetings. Our companions are available for both short visits and extended overnight stays." },
              { name: "Sunset Hotel DHA", img: "/m12.jpg", desc: "Premium escorts in Sunset Hotel DHA Karachi – perfect location for luxury companionship. Enjoy discreet and high-class Karachi escorts service in the heart of Defence Housing Authority." },
              { name: "Ramada Creek DHA", img: "/m23.jpg", desc: "High-class call girls in Ramada Creek DHA. Fast and discreet Karachi escorts service with professional companions who understand the importance of privacy and quality time." },
              { name: "Farhan Hotel Karachi", img: "/m24.jpg", desc: "Comfortable and private escorts service in Farhan Hotel Karachi. Our verified companions provide a relaxing and memorable experience with complete discretion." },
            ].map((hotel) => (
              <div key={hotel.name} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                <div className="relative h-80">
                  <Image 
                    src={hotel.img} 
                    alt={`${hotel.name} - Premium Karachi Escorts & Call Girls`}
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-semibold">{hotel.name}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-black/70 mb-6 leading-relaxed">{hotel.desc}</p>
                  <a 
                    href="https://wa.me/923104441188"
                    target="_blank"
                    className="block w-full bg-red-600 hover:bg-black text-white text-center py-4 rounded-2xl font-semibold transition-all"
                  >
                    Book Now - 0310 4441188
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== RATES SECTION ==================== */}
      <section className="py-24 bg-white" id="rates">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Karachi Escorts Price List 2026</h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Transparent and competitive pricing for premium Karachi escorts, verified call girls in DHA, 
              and luxury companions across all major hotels in Karachi. No hidden charges.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border border-gray-200 text-left">
              <thead className="bg-zinc-100">
                <tr>
                  <th className="p-5 border-b font-semibold">Service Type</th>
                  <th className="p-5 border-b font-semibold">Duration</th>
                  <th className="p-5 border-b font-semibold text-center">Price (PKR)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-5">Short Time</td>
                  <td className="p-5">1-2 Hours</td>
                  <td className="p-5 text-center font-medium">40,000 - 60,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-5">Extended Session</td>
                  <td className="p-5">3-4 Hours</td>
                  <td className="p-5 text-center font-medium">70,000 - 90,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-5">Full Night Experience</td>
                  <td className="p-5">6-8 Hours</td>
                  <td className="p-5 text-center font-medium">80,000 - 120,000</td>
                </tr>
                <tr>
                  <td className="p-5">VIP Overnight</td>
                  <td className="p-5">Overnight / Weekend</td>
                  <td className="p-5 text-center font-medium">1,20,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==================== POPULAR SEARCHES (Internal Linking) ==================== */}
      <section className="py-16 bg-zinc-50 border-t">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Popular Karachi Escorts Searches</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3 text-sm">
            <a href="#hotels" className="hover:text-red-600 transition-colors">Premium Karachi escorts in DHA</a>
            <a href="#hotels" className="hover:text-red-600 transition-colors">Escorts in Clifton Karachi</a>
            <a href="#hotels" className="hover:text-red-600 transition-colors">Karachi escorts in PC Hotel</a>
            <a href="#hotels" className="hover:text-red-600 transition-colors">Marriott Hotel Karachi escorts</a>
            <a href="#hotels" className="hover:text-red-600 transition-colors">Verified call girls in DHA</a>
            <a href="#hotels" className="hover:text-red-600 transition-colors">Luxury escorts in Mövenpick Hotel</a>
            <a href="#hotels" className="hover:text-red-600 transition-colors">Discreet escorts in Avari Towers</a>
            <a href="#hotels" className="hover:text-red-600 transition-colors">High class call girls Karachi</a>
            <a href="#hotels" className="hover:text-red-600 transition-colors">Escorts service in Sunset Hotel DHA</a>
            <a href="#hotels" className="hover:text-red-600 transition-colors">Best escorts in Karachi 2026</a>
            <a href="#hotels" className="hover:text-red-600 transition-colors">Karachi escorts price list</a>
            <a href="#hotels" className="hover:text-red-600 transition-colors">Ramada Creek DHA escorts</a>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
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
          <p className="mt-6 text-white/70 text-sm">Discreet • Professional • Available 24/7</p>
        </div>
      </section>
    </main>
  );
}