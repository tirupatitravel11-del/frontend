"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";

const popularDestinations = [
  {
    id: 1,
    city: "Mumbai",
    slug: "mumbai",
    categories:
      "Hotels, Budget Hotels, Resorts, Best Hotels, Near Airport, Marine Drive",
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    city: "Delhi",
    slug: "delhi",
    categories:
      "Hotels, Budget Hotels, Resorts, Best Hotels, Near IGI Airport, Connaught Place",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    city: "Bangalore",
    slug: "bangalore",
    categories:
      "Hotels, Budget Hotels, Resorts, Near Airport, MG Road, Indiranagar",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    city: "Goa",
    slug: "goa",
    categories:
      "Hotels, Budget Hotels, Resorts, Best Hotels, North Goa, South Goa, Beach Resorts",
    image: "/Packages_goa.jpg",
  },
  {
    id: 5,
    city: "Pune",
    slug: "pune",
    categories:
      "Hotels, Budget Hotels, Resorts, Near Airport, Hinjewadi, Kothrud, Viman Nagar",
    image:
      "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=200&h=200&fit=crop",
  },
  {
    id: 6,
    city: "Hyderabad",
    slug: "hyderabad",
    categories:
      "Hotels, Budget Hotels, Resorts, Best Hotels, HITEC City, Gachibowli, Banjara Hills",
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=200&h=200&fit=crop",
  },
  {
    id: 7,
    city: "Chennai",
    slug: "chennai",
    categories:
      "Hotels, Budget Hotels, Resorts, Near Airport, T Nagar, Anna Nagar, OMR",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=200&h=200&fit=crop",
  },
  {
    id: 8,
    city: "Kolkata",
    slug: "kolkata",
    categories:
      "Hotels, Budget Hotels, Best Hotels, Resorts, Park Street, Salt Lake, New Town",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=200&h=200&fit=crop",
  },
  {
    id: 9,
    city: "Jaipur",
    slug: "jaipur",
    categories:
      "Hotels, Resorts, Budget Hotels, Best Hotels, Near Railway Station, Pink City",
    image:
      "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=200&h=200&fit=crop",
  },
  {
    id: 10,
    city: "Ahmedabad",
    slug: "ahmedabad",
    categories:
      "Hotels, Budget Hotels, Resorts, Best Hotels, SG Highway, Prahlad Nagar, Satellite",
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=200&h=200&fit=crop",
  },
  {
    id: 11,
    city: "Lucknow",
    slug: "lucknow",
    categories:
      "Hotels, Budget Hotels, Best Hotels, Resorts, Gomti Nagar, Hazratganj, Alambagh",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=200&h=200&fit=crop",
  },
  {
    id: 12,
    city: "Chandigarh",
    slug: "chandigarh",
    categories:
      "Hotels, Budget Hotels, Resorts, Best Hotels, Sector 17, Industrial Area, Mohali",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=200&h=200&fit=crop",
  },
  {
    id: 13,
    city: "Kochi",
    slug: "kochi",
    categories:
      "Hotels, Resorts, Budget Hotels, Best Hotels, Marine Drive, MG Road, Ernakulam",
    image:
      "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=200&h=200&fit=crop",
  },
  {
    id: 14,
    city: "Indore",
    slug: "indore",
    categories:
      "Hotels, Budget Hotels, Resorts, Best Hotels, Vijay Nagar, South Tukoganj, Airport Road",
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=200&h=200&fit=crop",
  },
  {
    id: 15,
    city: "Surat",
    slug: "surat",
    categories:
      "Hotels, Budget Hotels, Resorts, Best Hotels, Adajan, Vesu, City Light Road",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=200&h=200&fit=crop",
  },
];

export default function PopularDestinations() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div>
          <p className="font-semibold uppercase tracking-[4px] text-gold">
            Top Locations
          </p>

          <h2 className="mt-3 text-3xl font-bold text-stone-900 md:text-5xl">
            Popular Hotel Destinations
          </h2>

          <p className="mt-5 max-w-3xl text-base text-stone-600 md:text-lg">
            Explore our most booked hotel destinations for comfortable stays and
            unforgettable experiences.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {popularDestinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/hotels/${destination.slug}`}
              className="group flex items-start gap-4 rounded-lg p-3 transition-all duration-300 hover:bg-stone-50"
            >
              {/* Circular Image */}
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-stone-200 shadow-sm transition-all duration-300 group-hover:border-gold/40 group-hover:shadow-md">
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-stone-900 transition-colors duration-300 group-hover:text-gold">
                  {destination.city}
                </h3>

                <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                  {destination.categories}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
