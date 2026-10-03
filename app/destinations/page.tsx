"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Star, ArrowRight, Compass } from "lucide-react";
import PopularDestinations from "../components/Package/PopularDestinations";
import PopularPackages from "../components/Package/PopularPackages";
import WhyBookWithUs from "../components/Cab/Cabhub/WhyTrustUs";
import TravelByVibe from "@/_components/NavbarComponents/TravelByVibe";

const DESTINATIONS = [
  {
    id: 1,
    name: "Ooty",
    location: "Tamil Nadu, India",
    region: "South India",
    category: "Hill Station",
    rating: 4.8,
    reviews: 1240,
    startingPrice: 4999,
    image: "/destinations/ooty.jpg",
    description: "The Queen of Hill Stations with misty mountains and tea gardens.",
    highlights: ["Tea Gardens", "Boat House", "Toy Train"],
  },
  {
    id: 2,
    name: "Munnar",
    location: "Kerala, India",
    region: "South India",
    category: "Hill Station",
    rating: 4.9,
    reviews: 1580,
    startingPrice: 5499,
    image: "/destinations/munnar.jpg",
    description: "Endless tea plantations, spice gardens, and misty valleys.",
    highlights: ["Tea Plantations", "Eravikulam", "Waterfalls"],
  },
  {
    id: 3,
    name: "Goa",
    location: "Goa, India",
    region: "South India",
    category: "Beach",
    rating: 4.7,
    reviews: 2100,
    startingPrice: 6999,
    image: "/destinations/goa.jpg",
    description: "Sun-kissed beaches, vibrant nightlife, and Portuguese heritage.",
    highlights: ["Beaches", "Nightlife", "Heritage"],
  },
  {
    id: 4,
    name: "Manali",
    location: "Himachal Pradesh, India",
    region: "North India",
    category: "Hill Station",
    rating: 4.8,
    reviews: 1890,
    startingPrice: 7499,
    image: "/destinations/manali.jpg",
    description: "Snow-capped peaks, adventure sports, and ancient temples.",
    highlights: ["Solang Valley", "Rohtang Pass", "Old Manali"],
  },
  {
    id: 5,
    name: "Shimla",
    location: "Himachal Pradesh, India",
    region: "North India",
    category: "Hill Station",
    rating: 4.6,
    reviews: 1320,
    startingPrice: 5999,
    image: "/destinations/shimla.jpg",
    description: "The colonial charm of the Queen of Hills with scenic vistas.",
    highlights: ["Mall Road", "The Ridge", "Kufri"],
  },
  {
    id: 6,
    name: "Tirupati",
    location: "Andhra Pradesh, India",
    region: "South India",
    category: "Pilgrimage",
    rating: 4.9,
    reviews: 3200,
    startingPrice: 3499,
    image: "/destinations/tirupati.jpg",
    description: "Sacred hills home to the famous Sri Venkateswara Temple.",
    highlights: ["Temple", "Tirumala", "Pilgrimage"],
  },
  {
    id: 7,
    name: "Varanasi",
    location: "Uttar Pradesh, India",
    region: "North India",
    category: "Pilgrimage",
    rating: 4.7,
    reviews: 2450,
    startingPrice: 4999,
    image: "/destinations/varanasi.jpg",
    description: "The spiritual capital with ancient ghats and timeless rituals.",
    highlights: ["Ghats", "Ganga Aarti", "Temples"],
  },
  {
    id: 8,
    name: "Pondicherry",
    location: "Puducherry, India",
    region: "South India",
    category: "Beach",
    rating: 4.6,
    reviews: 980,
    startingPrice: 4499,
    image: "/destinations/pondicherry.jpg",
    description: "French colonial charm meets serene beaches and Auroville.",
    highlights: ["Promenade", "Auroville", "French Quarter"],
  },
  {
    id: 9,
    name: "Darjeeling",
    location: "West Bengal, India",
    region: "North India",
    category: "Hill Station",
    rating: 4.7,
    reviews: 1150,
    startingPrice: 6499,
    image: "/destinations/darjeeling.jpg",
    description: "Famous for its tea, toy train, and views of Kanchenjunga.",
    highlights: ["Tiger Hill", "Tea Gardens", "Toy Train"],
  },
];

const REGIONS = ["All", "South India", "North India"];
const CATEGORIES = ["All", "Hill Station", "Beach", "Pilgrimage"];

export default function DestinationsPage() {
  const [activeRegion, setActiveRegion] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDestinations = DESTINATIONS.filter((dest) => {
    const matchesRegion = activeRegion === "All" || dest.region === activeRegion;
    const matchesCategory = activeCategory === "All" || dest.category === activeCategory;
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen">
      {/* Premium Hero Section */}
   <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-amber-400/80 via-white/90 to-amber-400/80 py-12 md:py-12">
  {/* Soft Background Glow */}
  <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

  <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />

  {/* Subtle Center Glow */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />

  {/* Elegant Top Line */}
  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

  <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">

    {/* Premium Badge */}
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-gold shadow-sm backdrop-blur-sm">
      <Compass className="h-4 w-4" />
      Discover & Explore
    </div>

    {/* Refined Typography */}
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl md:leading-tight">
  Explore
  <span className="bg-gradient-to-r from-amber-500 to-gold bg-clip-text text-transparent">
    {" "}Amazing Destinations
  </span>
</h1>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-800">
  Discover beautiful destinations, spiritual places, and memorable getaways
  with thoughtfully planned travel experiences for families, couples, groups,
  and solo travelers.
</p>
  </div>
</section>

      {/* Destinations Section */}
    
      <PopularPackages/>
       <TravelByVibe/>
       <PopularDestinations/>
       <WhyBookWithUs/>

       {/* 5. Final CTA */}
      <section className="bg-stone-800 px-4 py-12 sm:px-6 lg:py-12 border-b border-white/10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-gold">
            Start Your Journey
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Ready to Explore Your Next Destination?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Choose your destination, select a travel package, and plan a
            comfortable journey with Tirupati Travels.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
           <a
  href="https://wa.me/918726124680?text=Hello%20Tirupati%20Travels%2C%20I%20want%20to%20plan%20a%20trip."
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-gold px-7 py-3 text-sm font-bold text-white transition hover:bg-gold/90"
>
  Plan Your Trip
</a>

<a
  href="tel:+918726124680"
  className="rounded-full border border-white/20 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10"
>
  Call Us
</a>
          </div>
        </div>
      </section>
    </main>
  );
}