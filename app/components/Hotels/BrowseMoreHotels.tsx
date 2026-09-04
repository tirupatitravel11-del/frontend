"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Star, Wifi, Coffee, Car } from "lucide-react";

// Mock data for "More Hotels" across major Indian cities
const moreHotels = [
  {
    id: 101,
    name: "The Grand Mumbai",
    slug: "the-grand-mumbai",
    city: "mumbai",
    location: "Andheri West, Mumbai",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    rating: 4.8,
    reviews: 1240,
    price: 4500,
    amenities: ["Free WiFi", "Pool", "Spa"],
  },
  {
    id: 102,
    name: "Royal Heritage Haveli",
    slug: "royal-heritage-haveli",
    city: "jaipur",
    location: "Pink City, Jaipur",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop",
    rating: 4.9,
    reviews: 856,
    price: 6200,
    amenities: ["Free Breakfast", "Parking", "Pool"],
  },
  {
    id: 103,
    name: "ITC Gardenia",
    slug: "itc-gardenia",
    city: "bangalore",
    location: "Richmond Town, Bangalore",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
    rating: 4.7,
    reviews: 2100,
    price: 5800,
    amenities: ["Free WiFi", "Gym", "Restaurant"],
  },
  {
    id: 104,
    name: "Taj Exotica",
    slug: "taj-exotica",
    city: "goa",
    location: "Benaulim, Goa",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
    rating: 4.9,
    reviews: 3400,
    price: 12500,
    amenities: ["Beach Access", "Pool", "Spa"],
  },
  {
    id: 105,
    name: "JW Marriott",
    slug: "jw-marriott",
    city: "pune",
    location: "Senapati Bapat Marg, Pune",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop",
    rating: 4.6,
    reviews: 980,
    price: 5200,
    amenities: ["Free WiFi", "Parking", "Gym"],
  },
  {
    id: 106,
    name: "The Leela Palace",
    slug: "the-leela-palace",
    city: "delhi",
    location: "Chanakyapuri, Delhi",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop",
    rating: 4.8,
    reviews: 1560,
    price: 8900,
    amenities: ["Free Breakfast", "Spa", "Pool"],
  },
];

export default function MoreHotels() {
  return (
    <section className="bg-stone-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-semibold uppercase tracking-[4px] text-gold">
              More Options
            </p>
            <h2 className="mt-3 text-3xl font-bold text-stone-900 md:text-5xl">
              Explore More Top Hotels
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
              Handpicked premium and budget-friendly stays across India's most
              vibrant cities for an unforgettable experience.
            </p>
          </div>

          {/* View All Link */}
          <Link
            href="/hotels"
            className="group flex shrink-0 items-center gap-2 font-semibold text-gold transition-colors hover:text-gold/80"
          >
            View All Hotels
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Hotels Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {moreHotels.map((hotel) => (
            <Link
              key={hotel.id}
              href={`/hotel/${hotel.city}/${hotel.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg"
            >
              {/* Image Container */}
              <div className="relative h-56 shrink-0 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 shadow-sm backdrop-blur-sm">
                  <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                  <span className="text-sm font-bold text-stone-900">
                    {hotel.rating}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-5">
                {/* Name & Location */}
                <h3 className="text-xl font-bold text-stone-900 group-hover:text-gold transition-colors">
                  {hotel.name}
                </h3>
                <div className="mt-2 flex items-center gap-1.5 text-sm text-stone-600">
                  <MapPin className="h-4 w-4 text-gold" />
                  {hotel.location}
                </div>

                {/* Amenities */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {hotel.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Footer: Price & Action */}
                <div className="mt-auto flex items-end justify-between border-t border-stone-100 pt-4">
                  <div>
                    <span className="text-xs text-stone-500">
                      Starting from
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-stone-900">
                        ₹{hotel.price.toLocaleString()}
                      </span>
                      <span className="text-xs text-stone-500">/ night</span>
                    </div>
                  </div>

                  <span className="flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-white transition-all group-hover:bg-gold/90">
                    Book Now
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
