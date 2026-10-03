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
  // {
  //   label: "Travel Guide",
  //   href: "/travel-guide",
  //   dropdown: true,
  // },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6">
        {/* Logo - Made bigger */}
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Tirupati Travels Logo"
            width={150}
            height={120}
            priority
            className="h-14 w-auto object-cover sm:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-medium hover:text-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        

        {/* Mobile Actions - Made bigger with better spacing */}
       {/* Actions */}
<div className="flex items-center gap-2 sm:gap-3">
  {/* Desktop Call Us */}
  <a
    href="tel:+918726124680"
    aria-label="Call Tirupati Travels at 8726124680"
    className="
      hidden
      items-center
      gap-2
      rounded-lg
      bg-gold
      px-4
      py-2.5
      text-sm
      font-semibold
      text-white
      shadow-sm
      transition-all
      duration-200
      hover:opacity-90
      sm:flex
      lg:px-5
    "
  >
    <Phone size={18} />
    <span>
   <span className="font-bold">8726124680</span>
    </span>
  </a>

  {/* Mobile Call Button */}
  <a
    href="tel:+918726124680"
    aria-label="Call Tirupati Travels"
    className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      bg-gold
      text-white
      shadow-md
      transition-all
      hover:scale-105
      sm:hidden
    "
  >
    <Phone size={21} />
  </a>

  {/* Menu Button */}
  <button
    type="button"
    onClick={() => setOpen(!open)}
    aria-label={open ? "Close menu" : "Open menu"}
    aria-expanded={open}
    className="
      rounded-lg
      p-2.5
      text-stone-700
      transition-colors
      hover:bg-stone-100
      lg:hidden
    "
  >
    {open ? <X size={26} /> : <Menu size={26} />}
  </button>
</div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="absolute left-0 top-full z-50 w-full border-t bg-white shadow-lg lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-stone-100 px-6 py-4 text-base font-medium text-stone-700 transition-colors hover:bg-orange-50 hover:text-gold"
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
