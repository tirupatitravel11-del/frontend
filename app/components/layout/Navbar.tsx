"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.jpg";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import MobileStickyBar from "../Home/MobileStickyBar";

const navLinks = [
  {
    label: "Destinations",
    href: "/destinations",
    dropdown: true,
  },
  {
    label: "Cab",
    href: "/cabs",
    dropdown: true,
  },
  {
    label: "Hotel",
    href: "/hotel",
    dropdown: true,
  },
  {
    label: "Experiences",
    href: "/experiences",
    dropdown: true,
  },
  {
    label: "Tour Package",
    href: "/packages",
    dropdown: true,
  },
  {
    label: "Blog",
    href: "/blogs",
  },
  {
    label: "Travel Guide",
    href: "/travel-guide",
    dropdown: true,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Chiku Cabs Logo"
            width={120}
            height={100}
            priority
            className="rounded-full object-cover sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-medium hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex">
          <a
            href="tel:+919876543210"
            className="
          flex
          h-10
          w-10
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
          lg:hidden
        "
          >
            <Phone size={20} />
          </a>
          <button
            className="rounded p-2 lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute left-0 top-full z-50 w-full border-t bg-white shadow-md lg:hidden">
          <div className="flex flex-col text ">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className=" border-b px-6 py-4 hover:bg-orange-50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
