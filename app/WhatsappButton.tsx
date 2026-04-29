"use client";

import Link from "next/link";

export default function WhatsAppButton() {
  const phoneNumber = "923051271111"; // Pakistan format (no +)

  const message =
    "Hi, I'm reaching out from your website. Can I get more details about the models?";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={whatsappUrl}
        target="_blank"
        className="
          group
          flex items-center
          h-14
          bg-green-500 hover:bg-green-600
          text-white
          rounded-full
          shadow-xl
          transition-all duration-300
          px-4
        "
      >
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-6 h-6 flex-shrink-0"
        >
          <path d="M16.003 3.2c-7.053 0-12.8 5.745-12.8 12.798 0 2.259.59 4.465 1.71 6.413L3.2 28.8l6.563-1.67a12.744 12.744 0 0 0 6.24 1.61h.003c7.053 0 12.8-5.745 12.8-12.797S23.056 3.2 16.003 3.2zm7.456 18.176c-.314.885-1.542 1.684-2.527 1.9-.673.144-1.553.258-4.516-.977-3.786-1.566-6.23-5.406-6.42-5.66-.186-.256-1.54-2.048-1.54-3.91 0-1.862.977-2.78 1.324-3.162.345-.384.754-.48 1.006-.48.256 0 .506.003.728.013.236.01.55-.09.86.656.314.757 1.065 2.61 1.158 2.798.094.19.155.413.03.67-.125.256-.186.414-.374.637-.186.224-.392.5-.56.67-.186.186-.38.387-.164.756.216.37.96 1.584 2.06 2.566 1.416 1.26 2.61 1.65 2.98 1.84.37.186.586.155.803-.094.216-.256.93-1.084 1.18-1.456.247-.37.497-.31.836-.186.345.125 2.17 1.024 2.54 1.21.37.186.617.28.708.435.094.155.094.884-.22 1.77z" />
        </svg>

        {/* Hover Text */}
        <span
          className="
            ml-3
            max-w-0
            group-hover:max-w-[160px]
            overflow-hidden
            whitespace-nowrap
            transition-all duration-300
            text-sm font-medium
          "
        >
          Chat on WhatsApp
        </span>
      </Link>
    </div>
  );
}