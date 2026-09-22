import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white/70 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">P</div>
            <span className="font-bold text-xl">Pakistan Models Hub</span>
          </div>
          <p className="text-sm">Premium Escort Service • Karachi, Pakistan</p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-6">Quick Links</h4>
          <div className="space-y-3 text-sm">
            <Link href="/" className="block hover:text-white">Home</Link>
            <Link href="/about" className="block hover:text-white">About</Link>
            <Link href="/contact" className="block hover:text-white">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-6">Services</h4>
          <div className="space-y-3 text-sm">
            <p>Escorts in DHA</p>
            <p>Escorts in Clifton</p>
            <p>Escorts in PECHS</p>
            <p>Hotel Escort Service</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-6">Contact</h4>
          <div className="space-y-3 text-sm">
            <p>Karachi, Pakistan</p>
            <p>0310-444-1188</p>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-white/40 mt-20 pt-8 border-t border-white/10">
        © 2026 Pakistan Models Hub. All Rights Reserved.
      </div>
    </footer>
  );
}