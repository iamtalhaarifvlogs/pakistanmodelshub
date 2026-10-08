
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-400 py-16 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">P</div>
            <span className="font-bold text-xl text-white">Pakistan Models Hub</span>
          </div>
          <p className="text-sm leading-relaxed">
            Premium escorts and call girls in Karachi. Discreet 24/7 service across DHA, Clifton, Bahria Town and major hotels.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-6">Quick Links</h4>
          <div className="space-y-3 text-sm">
            <Link href="/" className="block hover:text-yellow-400 transition-colors">Home</Link>
            <Link href="/models" className="block hover:text-yellow-400 transition-colors">Models</Link>
            <Link href="/about" className="block hover:text-yellow-400 transition-colors">About</Link>
            <Link href="/contact" className="block hover:text-yellow-400 transition-colors">Contact</Link>
            <Link href="/celebrity-escorts-karachi" className="block hover:text-yellow-400 transition-colors">Celebrity Escorts</Link>
          </div>
        </div>

        {/* Popular Areas */}
        <div>
          <h4 className="font-semibold text-white mb-6">Popular Areas</h4>
          <div className="space-y-3 text-sm">
            <Link href="/karachi-escorts-in-dha" className="block hover:text-yellow-400 transition-colors">Escorts in DHA</Link>
            <Link href="/karachi-escorts-in-clifton" className="block hover:text-yellow-400 transition-colors">Escorts in Clifton</Link>
            <Link href="/escorts-in-bahria-town-karachi" className="block hover:text-yellow-400 transition-colors">Bahria Town Escorts</Link>
            <Link href="/escorts-in-pechs-karachi" className="block hover:text-yellow-400 transition-colors">PECHS Escorts</Link>
            <Link href="/escorts-in-saddar-karachi" className="block hover:text-yellow-400 transition-colors">Saddar Escorts</Link>
            <Link href="/escorts-in-gulshan-e-iqbal-karachi" className="block hover:text-yellow-400 transition-colors">Gulshan Escorts</Link>
          </div>
        </div>

        {/* Contact + Hotels */}
        <div>
          <h4 className="font-semibold text-white mb-6">Contact & Hotels</h4>
          <div className="space-y-3 text-sm">
            <p>Karachi, Pakistan</p>
            <a href="https://wa.me/923104441188" target="_blank" rel="noopener noreferrer" className="block text-yellow-400 hover:text-yellow-300 font-medium">
              WhatsApp 0310-444-1188
            </a>
            <div className="pt-3 space-y-2">
              <Link href="/escorts-in-pc-hotel-karachi" className="block hover:text-yellow-400 transition-colors">PC Hotel Escorts</Link>
              <Link href="/escorts-in-marriott-hotel-karachi" className="block hover:text-yellow-400 transition-colors">Marriott Escorts</Link>
              <Link href="/escorts-in-avari-towers-hotel" className="block hover:text-yellow-400 transition-colors">Avari Towers Escorts</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-16 pt-8 border-t border-zinc-800">
        © 2026 Pakistan Models Hub. All Rights Reserved. • Premium Escorts & Call Girls in Karachi
      </div>
    </footer>
  );
}