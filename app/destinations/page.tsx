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
    <main className="min-h-screen bg-white">
      {/* Premium Hero Section */}
    <section className="relative border-b border-gray-100 bg-white py-20 md:py-28 overflow-hidden">
  {/* Subtle Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white" />

  {/* Decorative Soft Glows */}
  <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
  <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-gray-100 blur-3xl" />

  {/* Elegant Top Gold Glow Line */}
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

  <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
    {/* Modern Premium Badge */}
    <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold mb-8 backdrop-blur-sm">
      <Compass className="h-3.5 w-3.5" />
      Curated Journeys
    </div>

    {/* Refined Typography */}
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl md:leading-tight">
      Explore Curated {" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-gold">
        Destinations
      </span>
    </h1>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
      From misty hill stations to vibrant cities, discover our handpicked holiday 
      packages and top destinations designed for families, couples, groups, and solo travelers.
    </p>
  </div>
</section>

      {/* Destinations Section */}
    
      <PopularPackages/>
       <TravelByVibe/>
       <PopularDestinations/>
       <WhyBookWithUs/>
    </main>
  );
}