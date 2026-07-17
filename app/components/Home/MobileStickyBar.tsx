"use client";

import { Phone } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-5 right-5 z-50 hidden lg:block ">
      <a
        href="tel:+919876543210"
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-gold
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-2xl
        "
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
