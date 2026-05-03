import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/app/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pakistan Models Hub | Elite Karachi Models & Escorts",
  description: "Premium professional models and elite companions in Karachi. Book top talent for fashion, commercial shoots, events & private experiences.",
  keywords: [
    "Karachi models", "Pakistan models", "fashion models Karachi", "elite models Karachi",
    "Karachi escorts", "escorts in Karachi", "VIP escorts Karachi", "call girls in Karachi",
    "DHA escorts", "Clifton escorts", "PECHS escorts", "Bahria Town escorts",
    "hotel escorts Karachi", "model agency Karachi"
  ],
  openGraph: {
    title: "Pakistan Models Hub | Elite Karachi Models & Escorts",
    description: "Premium models and discreet companionship services in Karachi. DHA, Clifton, PECHS & Major Hotels.",
    images: [{ url: "/m1.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        <WhatsAppButton />
        
        <Header />
        
        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}