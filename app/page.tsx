// app/page.tsx
import Image from 'next/image';

// ==================== PREMIUM STYLES (extracted to avoid Turbopack parse error) ====================
const premiumStyles = `
  @keyframes liquidGlow {
    0%, 100% { 
      transform: scale(1); 
      box-shadow: 0 0 20px rgba(250, 204, 21, 0.5), 0 0 40px rgba(250, 204, 21, 0.25), 0 0 60px rgba(250, 204, 21, 0.1); 
    }
    50% { 
      transform: scale(1.04); 
      box-shadow: 0 0 30px rgba(250, 204, 21, 0.8), 0 0 55px rgba(250, 204, 21, 0.45), 0 0 80px rgba(250, 204, 21, 0.2); 
    }
  }
  @keyframes neonPulseRed {
    0%, 100% { 
      box-shadow: 0 0 12px rgba(220, 38, 38, 0.15), inset 0 0 8px rgba(220, 38, 38, 0.08); 
      border-color: rgba(220, 38, 38, 0.25); 
    }
    50% { 
      box-shadow: 0 0 22px rgba(220, 38, 38, 0.45), inset 0 0 12px rgba(220, 38, 38, 0.2); 
      border-color: rgba(220, 38, 38, 0.55); 
    }
  }
  @keyframes neonPulseGold {
    0%, 100% { box-shadow: 0 0 12px rgba(250, 204, 21, 0.08); border-color: rgba(250, 204, 21, 0.18); }
    50% { box-shadow: 0 0 22px rgba(250, 204, 21, 0.28); border-color: rgba(250, 204, 21, 0.4); }
  }
  @keyframes softFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-liquid-glow { animation: liquidGlow 2.8s infinite ease-in-out; }
  .animate-neon-card-red { animation: neonPulseRed 3.2s infinite ease-in-out; }
  .animate-neon-card-gold { animation: neonPulseGold 3.8s infinite ease-in-out; }
  .animate-float { animation: softFloat 5s ease-in-out infinite; }
  .scroll-fade {
    opacity: 0;
    transform: translateY(40px);
    animation: fadeInUp 0.9s ease-out forwards;
    animation-timeline: view();
    animation-range: entry 5% cover 35%;
  }
`;

// ==================== SEO METADATA ====================
export const metadata = {
  title: "Karachi Escorts | Premium Escorts in DHA, Clifton & Bahria Town | VIP Call Girls 2026 | Pakistan Models Hub",
  description: "Book verified Karachi escorts & celebrity call girls with Pakistan Models Hub. Premium escorts in DHA, Clifton, Bahria Town + outcall to PC Hotel, Marriott, Avari Towers & 17 luxury hotels. Discreet 24/7 VIP service.",
  keywords: [
    "Karachi escorts", "escorts in Karachi", "premium Karachi escorts", "celebrity escorts in Karachi",
    "escorts in DHA", "escorts in Clifton", "escorts in Bahria Town", "call girls Karachi",
    "VIP escorts Karachi", "high class call girls Karachi", "verified call girls Karachi",
    "escorts in PC Hotel", "escorts in Marriott Hotel", "Avari Towers escorts",
    "Regent Plaza escorts", "Nishat Hotel escorts", "Ramada Creek DHA escorts",
    "luxury outcall escorts Karachi", "independent escorts Karachi", "overnight escorts Karachi",
    "best escorts service Karachi 2026", "Pakistan Models Hub", "elite escorts Pakistan"
  ],
  openGraph: {
    title: "Karachi Escorts | Premium Escorts in DHA, Clifton & Bahria Town | Pakistan Models Hub",
    description: "Verified celebrity escorts in Karachi. Luxury outcall to PC Hotel, Marriott, Avari Towers and 17 elite hotels. Discreet 24/7 service across DHA, Clifton & Bahria Town.",
    images: [{ url: "/m1.jpg" }],
  },
};

export default function Home() {
  return (
    <main className="bg-zinc-950 text-gray-100 font-sans overflow-x-hidden">
      
      {/* ==================== PREMIUM KEYFRAME ANIMATIONS ==================== */}
      <style dangerouslySetInnerHTML={{ __html: premiumStyles }} />

      {/* ==================== FLOATING WHATSAPP CTA ==================== */}
      <a 
        href="https://wa.me/923104441188"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 animate-liquid-glow flex items-center justify-center w-16 h-16 bg-yellow-400 hover:bg-yellow-300 text-black rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:scale-110 transition-all duration-300"
        aria-label="Book Karachi escorts on WhatsApp"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.447 5.358 1.448 5.494 0 9.961-4.471 9.964-9.97 0-2.664-1.04-5.166-2.928-7.056C17.154 1.685 14.654.646 12.002.646c-5.498 0-9.966 4.47-9.969 9.971-.001 2.124.568 4.198 1.648 5.924l-.999 3.65 3.733-.979zm13.434-7.614c-.29-.145-1.716-.847-1.978-.942-.262-.096-.453-.145-.642.145-.19.29-.734.942-.899 1.134-.166.19-.332.214-.622.069-.29-.145-1.22-.448-1.09-2.008-1.346-2.504-2.111a4.9 4.9 0 0 1-.35-.78c-.165-.338-.083-.518.06-.662.128-.13.29-.338.434-.507.144-.169.193-.29.29-.483.096-.194.048-.362-.024-.507-.072-.145-.642-1.547-.88-2.119-.23-.556-.465-.482-.642-.49-.166-.008-.356-.01-.546-.01-.19 0-.5.072-.76.362-.26.29-1.012.99-1.012 2.415 0 1.424 1.034 2.802 1.178 2.995.145.193 2.036 3.111 4.931 4.363.688.298 1.226.476 1.643.608.693.22 1.326.19 1.825.114.557-.085 1.716-.7 1.958-1.376.242-.677.242-1.256.17-1.376-.073-.12-.26-.193-.55-.338z"/>
        </svg>
      </a>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/m1.jpg" 
            alt="Karachi Escorts - Premium verified call girls and celebrity escorts in DHA Clifton Bahria Town Pakistan Models Hub"
            fill 
            className="object-cover brightness-[1.00]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/75 to-zinc-950" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-yellow-400 font-semibold tracking-[0.3em] text-xs md:text-sm mb-4 uppercase animate-float">
            Pakistan Models Hub
          </p>
          
          {/* Single primary H1 */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-yellow-300 leading-none">
            Karachi Escorts
          </h1>
          
          {/* Small H2 with high-ranking tags */}
          <h2 className="text-base sm:text-lg md:text-xl font-medium text-yellow-400/95 tracking-wide mb-8">
            Escorts in DHA • Escorts in Clifton • Bahria Town | VIP Call Girls
          </h2>

          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-10 font-light">
            Verified celebrity escorts & high-class call girls available 24/7 across DHA, Clifton, PECHS and all major luxury hotels.
          </p>

          <div className="inline-block">
            <a 
              href="https://wa.me/923104441188"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-liquid-glow relative overflow-hidden inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 hover:from-yellow-300 hover:via-yellow-200 hover:to-yellow-300 text-black font-bold text-base md:text-lg px-10 py-5 rounded-full transition-all duration-300 tracking-wider uppercase shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:shadow-[0_0_45px_rgba(250,204,21,0.6)] hover:scale-105"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.447 5.358 1.448 5.494 0 9.961-4.471 9.964-9.97 0-2.664-1.04-5.166-2.928-7.056C17.154 1.685 14.654.646 12.002.646c-5.498 0-9.966 4.47-9.969 9.971-.001 2.124.568 4.198 1.648 5.924l-.999 3.65 3.733-.979zm13.434-7.614c-.29-.145-1.716-.847-1.978-.942-.262-.096-.453-.145-.642.145-.19.29-.734.942-.899 1.134-.166.19-.332.214-.622.069-.29-.145-1.22-.448-1.09-2.008-1.346-2.504-2.111a4.9 4.9 0 0 1-.35-.78c-.165-.338-.083-.518.06-.662.128-.13.29-.338.434-.507.144-.169.193-.29.29-.483.096-.194.048-.362-.024-.507-.072-.145-.642-1.547-.88-2.119-.23-.556-.465-.482-.642-.49-.166-.008-.356-.01-.546-.01-.19 0-.5.072-.76.362-.26.29-1.012.99-1.012 2.415 0 1.424 1.034 2.802 1.178 2.995.145.193 2.036 3.111 4.931 4.363.688.298 1.226.476 1.643.608.693.22 1.326.19 1.825.114.557-.085 1.716-.7 1.958-1.376.242-.677.242-1.256.17-1.376-.073-.12-.26-.193-.55-.338z"/>
              </svg>
              <span>Book Now on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.3em] flex flex-col items-center">
          <span>SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-yellow-400/40 to-transparent mt-3" />
        </div>
      </section>

      {/* ==================== TRUST BAR ==================== */}
      <section className="py-8 bg-zinc-900/90 border-y border-zinc-800 text-center scroll-fade">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-yellow-400 font-bold text-xs md:text-sm tracking-[0.25em] mb-2 uppercase">
            PREMIUM KARACHI ESCORTS • VERIFIED • DISCREET • 24/7
          </p>
          <p className="text-sm text-gray-400 font-light">
            Escorts in DHA • Escorts in Clifton • Escorts in Bahria Town • PC Hotel • Marriott • Avari Towers
          </p>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="py-24 md:py-28 bg-zinc-950 scroll-fade">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-5">
              Why Gentlemen Choose Pakistan Models Hub for Karachi Escorts
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Experience the finest verified premium Karachi escorts and celebrity companions. 
              Specializing in escorts in DHA, escorts in Clifton, escorts in Bahria Town and discreet luxury delivery to every elite hotel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-neon-card-gold group bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/80 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/40">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Verified Celebrity Profiles</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Every premium Karachi escort and celebrity escort in Karachi is personally verified. Elegant, educated and trained in refined companionship with absolute discretion.
              </p>
            </div>

            <div className="animate-neon-card-gold group bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/80 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/40">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Absolute Discretion</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Whether you seek escorts in DHA, escorts in Clifton or private arrangements in Bahria Town, complete confidentiality is guaranteed at the highest professional standard.
              </p>
            </div>

            <div className="animate-neon-card-gold group bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/80 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/40">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Luxury Hotel Outcall</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Instant outcall of high-class call girls to PC Hotel, Marriott Hotel, Mövenpick, Avari Towers, Regent Plaza, Nishat and all top properties. Premium escorts in Karachi hotels 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURED MODELS GALLERY (m19–m40) ==================== */}
      <section className="py-20 bg-zinc-900/50 border-y border-zinc-800 scroll-fade">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-3">
              Featured Premium Karachi Escorts
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-light">
              Verified models available for escorts in DHA, Clifton, Bahria Town and all luxury hotels
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {[19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40].map((num) => (
              <div key={num} className="relative aspect-[3/4] rounded-xl overflow-hidden group border border-zinc-800/60">
                <Image
                  src={`/m${num}.jpg`}
                  alt={`Premium Karachi escorts model ${num} - verified call girls DHA Clifton Bahria Town Pakistan Models Hub`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICE AREAS ==================== */}
      <section className="py-16 bg-zinc-950 scroll-fade">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-6">
            Service Areas: Escorts in DHA, Clifton, Bahria Town & Beyond
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8 font-light text-sm md:text-base">
            Pakistan Models Hub provides verified Karachi escorts and celebrity companions across the city’s most exclusive neighbourhoods and all major luxury hotels.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {["Escorts in DHA", "Escorts in Clifton", "Escorts in Bahria Town", "PECHS", "Sea View", "Gulshan", "Defence Phase", "KDA Scheme"].map((area) => (
              <span key={area} className="px-5 py-2.5 rounded-full bg-zinc-800/80 border border-zinc-700 text-gray-300 hover:border-yellow-500/50 hover:text-yellow-400 transition-all duration-300">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ESCORTS IN KARACHI HOTELS (m2–m18) ==================== */}
      <section className="py-24 md:py-28 bg-zinc-900/40 border-t border-zinc-800 scroll-fade" id="hotels">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-5">
              Escorts in Karachi Hotels
            </h2>
            <p className="text-base md:text-lg text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Book verified premium Karachi escorts and high-class call girls for immediate outcall to PC Hotel, Marriott Hotel, Mövenpick, Avari Towers, Regent Plaza, Nishat Hotel, Ramada Creek DHA, Beach Luxury, Galaxy Hotel and more. 
              Available 24/7 in DHA, Clifton and Bahria Town.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

            {/* Hotel cards m2 → m18 */}
            {[
              { img: 2, title: "Regent Plaza Hotel", desc: "Escorts at Regent Plaza Hotel Karachi. Pakistan Models Hub delivers premium verified call girls and celebrity escorts for discreet short visits, overnight stays and VIP arrangements. Perfect for business travelers seeking elite companionship with absolute privacy." },
              { img: 3, title: "Nishat Hotel Karachi", desc: "Luxury escorts service at Nishat Hotel Karachi. Pakistan Models Hub provides elegant, verified high-class call girls for discreet meetings and overnight stays. Ideal for gentlemen who value privacy and professional hospitality." },
              { img: 4, title: "Ramada Creek DHA", desc: "High-end escorts in Ramada Creek DHA. Pakistan Models Hub offers professional partners well-versed in executive etiquette. Secure bookings for short visits and full-night arrangements inside Defence Housing Authority." },
              { img: 5, title: "Beach View Hotel", desc: "Exclusive beachside arrangements at Beach View Hotel. Pakistan Models Hub offers premium verified companions with complete privacy. Designed for elite clients seeking refined evening company near the coast." },
              { img: 6, title: "Sea View Karachi", desc: "Discreet luxury escorts available at Sea View locations. Pakistan Models Hub specializes in high-class companions for private residences and hotel suites along the famous Sea View strip. 24/7 verified service." },
              { img: 7, title: "Private Airbnb & Residences", desc: "Premium outcall service to private Airbnb apartments and luxury residences across DHA, Clifton, Bahria Town and PECHS. Pakistan Models Hub ensures absolute discretion for non-hotel environments." },
              { img: 8, title: "Seashell Hotel", desc: "Elegant companion arrangements at Seashell Hotel. Pakistan Models Hub delivers verified high-profile escorts for short visits and overnight stays. Ideal for clients seeking a quieter private luxury experience." },
              { img: 9, title: "Mehran Hotel", desc: "Reliable luxury escorts at Mehran Hotel Karachi. Pakistan Models Hub provides verified professional companions for corporate travelers and private clients. Complete confidentiality and prompt outcall delivery." },
              { img: 10, title: "Holiday Inn Karachi", desc: "Premium companion services at Holiday Inn Karachi. Pakistan Models Hub offers discreet, high-class escorts for business meetings and overnight stays. Verified profiles and absolute privacy guaranteed." },
              { img: 11, title: "Farhan Hotel", desc: "Comfortable and entirely confidential hosting at Farhan Hotel. Pakistan Models Hub provides verified companions for relaxing short visits and extended stays with maximum privacy." },
              { img: 12, title: "Marriott Hotel Karachi", desc: "Enjoy high-class companionship at the Marriott Hotel. Pakistan Models Hub delivers refined, professional partners offering discreet luxury tailored for high-profile business gentlemen and VIP clients." },
              { img: 13, title: "PC Hotel Karachi", desc: "Premium hosting services within PC Hotel Karachi with complete discretion and luxury care. Pakistan Models Hub verified companions available for short tours, overnight corporate stays and exclusive VIP arrangements." },
              { img: 14, title: "Ramada Plaza Hotel", desc: "Luxury companion services at Ramada Plaza available 24/7 with immediate dispatch. Pakistan Models Hub specializes in exceptional quality partners for secure locations and refined overnight company." },
              { img: 15, title: "Avari Towers Karachi", desc: "Elite service structures tailored for premium rooms at Avari Towers. Pakistan Models Hub professional hosts guarantee total personal security, privacy and world-class companionship for high-profile gentlemen." },
              { img: 16, title: "Beach Luxury Hotel", desc: "Exclusive arrangements at Beach Luxury Hotel featuring absolute privacy. Pakistan Models Hub designs thoughtful experiences for elite individuals seeking premier evening companions by the waterfront." },
              { img: 17, title: "Sunset Hotel DHA", desc: "Premium arrangements within Sunset Hotel DHA Karachi. Experience top-tier local hosting inside the secure central limits of the Defence Housing Authority with verified companions available 24/7." },
              { img: 18, title: "Galaxy Hotel Karachi", desc: "Reliable companionship options inside Galaxy Hotel for comfortable, completely private bookings. Pakistan Models Hub verified escorts available for both brief calls and extended overnight stays with full discretion." },
            ].map((hotel) => (
              <div key={hotel.img} className="group relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/80 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(220,38,38,0.25)] animate-neon-card-red">
                <div className="relative h-72 overflow-hidden">
                  <Image 
                    src={`/m${hotel.img}.jpg`} 
                    alt={`${hotel.title} - Karachi escorts premium call girls Pakistan Models Hub`}
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/70 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <h3 className="text-xl font-bold tracking-tight text-white">{hotel.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
                    {hotel.desc}
                  </p>
                  <a href="https://wa.me/923104441188" target="_blank" rel="noopener noreferrer"
                    className="block w-full bg-zinc-800/90 hover:bg-red-600 text-white text-center py-3.5 rounded-xl font-bold text-sm tracking-wide uppercase transition-all duration-300 border border-zinc-700/80 hover:border-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                    Request Booking
                  </a>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ==================== RATES SECTION ==================== */}
      <section className="py-24 md:py-28 bg-zinc-950 scroll-fade" id="rates">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              Karachi Escorts Rates 2026
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-light">
              Transparent rate structures for verified premium Karachi escorts, VIP celebrity companions and high-class call girls across DHA, Clifton, Bahria Town and all 17 luxury hotels.
            </p>
          </div>

          <div className="max-w-3xl mx-auto overflow-x-auto bg-zinc-900/60 border border-yellow-500/20 shadow-[0_0_40px_rgba(250,204,21,0.08)] rounded-2xl p-1 animate-neon-card-gold">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-900 text-yellow-400 uppercase text-xs tracking-wider">
                <tr>
                  <th className="p-5 font-bold">Service Type</th>
                  <th className="p-5 font-bold">Duration</th>
                  <th className="p-5 font-bold text-center">Rates (PKR)</th>
                </tr>
              </thead>
              <tbody className="text-gray-300 font-light">
                <tr className="border-b border-zinc-800/60 hover:bg-zinc-900/40 transition-colors">
                  <td className="p-5 font-medium text-white">Short Visit</td>
                  <td className="p-5">1-2 Hours</td>
                  <td className="p-5 text-center font-bold text-white">40,000 – 60,000</td>
                </tr>
                <tr className="border-b border-zinc-800/60 hover:bg-zinc-900/40 transition-colors">
                  <td className="p-5 font-medium text-white">Extended Tour</td>
                  <td className="p-5">3-4 Hours</td>
                  <td className="p-5 text-center font-bold text-white">70,000 – 90,000</td>
                </tr>
                <tr className="border-b border-zinc-800/60 hover:bg-zinc-900/40 transition-colors">
                  <td className="p-5 font-medium text-white">Full Night Routine</td>
                  <td className="p-5">6-8 Hours</td>
                  <td className="p-5 text-center font-bold text-white">80,000 – 120,000</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="p-5 font-medium text-white">VIP Elite Overnight</td>
                  <td className="p-5">Weekend Special</td>
                  <td className="p-5 text-center font-bold text-yellow-400">1,20,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==================== POPULAR SEARCHES ==================== */}
      <section className="py-16 bg-zinc-900/50 border-t border-zinc-900 scroll-fade">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold tracking-wider mb-8 text-center text-gray-400 uppercase">
            Popular Searches for Karachi Escorts
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3.5 text-sm text-gray-500">
            <a href="#hotels" className="hover:text-yellow-400 transition-colors">Karachi escorts</a>
            <a href="#hotels" className="hover:text-yellow-400 transition-colors">Escorts in DHA</a>
            <a href="#hotels" className="hover:text-yellow-400 transition-colors">Escorts in Clifton</a>
            <a href="#hotels" className="hover:text-yellow-400 transition-colors">Escorts in Bahria Town</a>
            <a href="#hotels" className="hover:text-yellow-400 transition-colors">Escorts in PC Hotel</a>
            <a href="#hotels" className="hover:text-yellow-400 transition-colors">Escorts in Marriott Hotel</a>
            <a href="#hotels" className="hover:text-yellow-400 transition-colors">Celebrity escorts in Karachi</a>
            <a href="#hotels" className="hover:text-yellow-400 transition-colors">VIP call girls Karachi</a>
            <a href="#hotels" className="hover:text-yellow-400 transition-colors">High class escorts DHA</a>
            <a href="#hotels" className="hover:text-yellow-400 transition-colors">Verified escorts Clifton</a>
            <a href="#hotels" className="hover:text-yellow-400 transition-colors">Luxury outcall escorts</a>
            <a href="#hotels" className="hover:text-yellow-400 transition-colors">Independent escorts Bahria Town</a>
            <a href="#hotels" className="hover:text-yellow-400 transition-colors">Best escorts service Karachi 2026</a>
            <a href="#hotels" className="hover:text-yellow-400 transition-colors">Avari Towers escorts</a>
            <a href="#hotels" className="hover:text-yellow-400 transition-colors">Overnight escorts Karachi</a>
            <a href="#hotels" className="hover:text-yellow-400 transition-colors">Private companions PECHS</a>
            <a href="#hotels" className="hover:text-yellow-400 transition-colors">Ramada Creek DHA escorts</a>
            <a href="#hotels" className="hover:text-yellow-400 transition-colors">Nishat Hotel call girls</a>
            <a href="#hotels" className="hover:text-yellow-400 transition-colors">Galaxy Hotel escorts</a>
            <a href="#hotels" className="hover:text-yellow-400 transition-colors">Beach Luxury Hotel companions</a>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black text-white text-center border-t border-zinc-900 scroll-fade">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
            Book Karachi Escorts Instantly
          </h2>
          <p className="text-gray-400 mb-8 text-sm md:text-base font-light">
            Pakistan Models Hub • Discreet • Professional • 24/7 across DHA, Clifton, Bahria Town & 17 Luxury Hotels
          </p>
          <div className="inline-block">
            <a 
              href="https://wa.me/923104441188"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-liquid-glow inline-block bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 hover:from-yellow-300 hover:via-yellow-200 hover:to-yellow-300 text-black font-bold text-lg px-12 py-5 rounded-full transition-all tracking-wider uppercase shadow-[0_0_35px_rgba(250,204,21,0.45)] hover:shadow-[0_0_50px_rgba(250,204,21,0.65)] hover:scale-105"
            >
              Contact Agent on WhatsApp
            </a>
          </div>
          <p className="mt-8 text-gray-500 text-xs tracking-[0.25em] uppercase">
            DISCREET • PROFESSIONAL • 24/7 VIP SERVICE
          </p>
        </div>
      </section>
    </main>
  );
}