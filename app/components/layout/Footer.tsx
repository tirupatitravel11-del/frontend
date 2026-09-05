import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Mail, Clock, MessageCircle } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import Logo from "../../../public/logo.jpg";

// const services = [
//   "Cab Booking",
//   "Airport Transfer",
//   "Outstation Cabs",
//   "Local Sightseeing",
//   "Tour Packages",
//   "Hotel Booking",
//   "Boat Ride",
// ];
const services = [
  {
    label: "Cab Booking",
    href: "/cabs",
  },
  {
    label: "Airport Transfer",
    href: "/airport-transfer",
  },
  {
    label: "Outstation Cabs",
    href: "/outstationCabs",
  },
  {
    label: "Local Sightseeing",
    href: "/local-sightseeing",
  },
  {
    label: "Tour Packages",
    href: "/packages",
  },
  {
    label: "Hotel Booking",
    href: "/hotel",
  },
  {
    label: "Boat Ride",
    href: "/boats",
  },
];
const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Packages",
    href: "/packages",
  },
  {
    label: "ContactUs",
    href: "/contact-us",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
];

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <Image
              src={Logo}
              alt="Tirupati Travel"
              width={220}
              height={70}
              className="rounded-lg bg-white p-2"
            />

            <p className="mt-6 leading-8 text-stone-300">
              Experience safe, affordable and comfortable travel with Tirupati
              Travel. We provide Cab Booking, Tour Packages, Hotel Booking and
              Boat Ride services.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 rounded-full border border-stone-500 px-5 py-3 transition hover:bg-gold"
              >
                <Phone size={18} />
                
              </a>

              <a
                href="https://wa.me/919876543210"
                className="flex items-center gap-2 rounded-full border border-stone-500 px-5 py-3 transition hover:bg-green-600"
              >
                <MessageCircle size={18} />
                
              </a>

              {/* Twitter/X */}
              <a
                href="https://x.com/tirupatitravel0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tirupati Travel on Twitter"
                className="flex items-center justify-center rounded-full border border-stone-500 p-3 transition hover:bg-black hover:border-black"
              >
                <FaXTwitter size={18} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/tirupatitravel1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tirupati Travel on Instagram"
                className="flex items-center justify-center rounded-full border border-stone-500 p-3 transition hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-purple-600 hover:border-transparent"
              >
                <FaInstagram size={18} />
              </a>

              {/* Pinterest */}
              <a
                href="https://www.pinterest.com/tirupatitravel/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tirupati Travel on Pinterest"
                className="flex items-center justify-center rounded-full border border-stone-500 p-3 transition hover:bg-red-600 hover:border-red-600"
              >
                <FaPinterestP size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tirupati-travel/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tirupati Travel on LinkedIn"
                className="flex items-center justify-center rounded-full border border-stone-500 p-3 transition hover:bg-blue-700 hover:border-blue-700"
              >
                <FaLinkedinIn size={18} />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@tirupati-travel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tirupati Travel on YouTube"
                className="flex items-center justify-center rounded-full border border-stone-500 p-3 transition hover:bg-red-600 hover:border-red-600"
              >
                <FaYoutube size={18} />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/tirupatitravel1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tirupati Travel on Facebook"
                className="flex items-center justify-center rounded-full border border-stone-500 p-3 transition hover:bg-blue-700 hover:border-blue-700"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>

          {/* Services */}

          <div>
            <h3 className="mb-6 text-xl font-bold uppercase text-gold">
              Our Services
            </h3>

            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-stone-300 transition hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold uppercase text-gold">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-stone-300 transition hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 text-xl font-bold uppercase text-gold">
              Contact Us
            </h3>

            <div className="space-y-5 text-stone-300">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-gold" size={18} />
                <p>
                  Tirupati Travel Office,
                  <br />
                  Varanasi, Uttar Pradesh
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-gold" size={18} />
                <span>+91 9876543210</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-gold" size={18} />
                <span>info@tirupatitravel.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="text-gold" size={18} />
                <span>24×7 Customer Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-stone-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-stone-400 md:flex-row">
            <p>
              © {new Date().getFullYear()} Tirupati Travel. All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <Link href="/privacy-policy" className="hover:text-gold">
                Privacy Policy
              </Link>

              <Link href="/terms-and-conditions" className="hover:text-gold">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
