

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
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
  metadataBase: new URL("https://pakistanmodelshub.com"),
  title: {
    default: "Karachi Escorts | Call Girls in Karachi | Premium Escorts DHA Clifton | Pakistan Models Hub",
    template: "%s | Pakistan Models Hub",
  },
  description:
    "Book verified Karachi call girls and premium escorts in DHA, Clifton & Bahria Town. Discreet 24/7 outcall service to PC Hotel, Marriott, Avari Towers and 17 luxury hotels. High-class call girls Karachi available now.",
  keywords: [
    "karachi call girls",
    "call girls in karachi",
    "escorts in karachi",
    "karachi escorts",
    "call girl karachi",
    "escort service in karachi",
    "vip call girls karachi",
    "cheap call girls in karachi",
    "escorts in dha",
    "escorts in clifton",
    "bahria town escorts",
    "karachi girls number",
    "online karachi girl booking",
    "sex workers in karachi",
    "Pakistan Models Hub",
  ],
  authors: [{ name: "Pakistan Models Hub" }],
  creator: "Pakistan Models Hub",
  publisher: "Pakistan Models Hub",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://pakistanmodelshub.com",
    siteName: "Pakistan Models Hub",
    title: "Karachi Call Girls & Escorts | DHA, Clifton, Bahria Town | Pakistan Models Hub",
    description:
      "Verified Karachi call girls and premium escorts available 24/7. Book discreet outcall to DHA, Clifton, Bahria Town and top luxury hotels.",
    images: [
      {
        url: "/Premium escorts in Karachi.jpg",
        width: 1200,
        height: 630,
        alt: "Karachi Call Girls and Premium Escorts - Pakistan Models Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karachi Call Girls | Escorts in DHA & Clifton | Pakistan Models Hub",
    description:
      "Verified VIP call girls and luxury hotel outcall across Karachi. Discreet 24/7 bookings.",
    images: ["/Premium escorts in Karachi.jpg"],
  },
  alternates: {
    canonical: "https://pakistanmodelshub.com",
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
      <body className="min-h-full flex flex-col bg-zinc-950 text-gray-100">
        <WhatsAppButton />
        <Header />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}