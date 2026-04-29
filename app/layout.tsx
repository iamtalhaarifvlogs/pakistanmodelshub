import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Pakistan Models Hub | Elite Karachi Models",
  description: "Premium professional fashion, commercial & runway models in Karachi, Pakistan. Book top talent for your next campaign or event.",
  keywords: [
    "Karachi models", 
    "Pakistan models", 
    "fashion models Karachi", 
    "professional models Pakistan", 
    "model agency Karachi", 
    "elite models Karachi"
  ],
  openGraph: {
    title: "Pakistan Models Hub | Elite Karachi Models",
    description: "Book the best professional models in Karachi for fashion, commercial shoots & events.",
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
        {children}
      </body>
    </html>
  );
}