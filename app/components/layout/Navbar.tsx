"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.jpg";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Varanasi", href: "/varanasi" },
  { label: "Allahabad", href: "/allahabad" },
  { label: "Gaya", href: "/gaya" },
  { label: "Ayodhya", href: "/ayodhya" },
  { label: "Vindhyachal", href: "/vindhyachal" },
  { label: "Lucknow", href: "/lucknow" },
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
              className="font-medium hover:text-orange-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="rounded p-2 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="absolute left-0 top-full z-50 w-full border-t bg-white shadow-md lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b px-6 py-4 hover:bg-orange-50"
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
