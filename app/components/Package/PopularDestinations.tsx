"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Goa",
    slug: "goa",
    description: "Beach Holidays • Water Sports • Nightlife",
    icon: MapPin,
  },
  {
    id: 2,
    name: "Kashmir",
    slug: "kashmir",
    description: "Snow Mountains • Houseboats • Valleys",
    icon: MapPin,
  },
  {
    id: 3,
    name: "Kerala",
    slug: "kerala",
    description: "Backwaters • Tea Gardens • Nature",
    icon: MapPin,
  },
  {
    id: 4,
    name: "Rajasthan",
    slug: "rajasthan",
    description: "Palaces • Desert Safari • Heritage",
    icon: MapPin,
  },
  {
    id: 5,
    name: "Himachal Pradesh",
    slug: "himachal",
    description: "Shimla • Manali • Adventure",
    icon: MapPin,
  },
  {
    id: 6,
    name: "Ladakh",
    slug: "ladakh",
    description: "Road Trips • Pangong Lake • Mountains",
    icon: MapPin,
  },

  {
    id: 8,
    name: "North East",
    slug: "north-east",
    description: "Shillong • Gangtok • Waterfalls",
    icon: MapPin,
  },
  {
    id: 9,
    name: "Uttarakhand",
    slug: "uttarakhand",
    description: "Rishikesh • Mussoorie • Char Dham",
    icon: MapPin,
  },
  {
    id: 10,
    name: "Tamil Nadu",
    slug: "tamil-nadu",
    description: "Temple Tours • Ooty • Heritage",
    icon: MapPin,
  },
  {
    id: 11,
    name: "Gujarat",
    slug: "gujarat",
    description: "Rann of Kutch • Gir Safari • Somnath",
    icon: MapPin,
  },
  {
    id: 12,
    name: "Sikkim",
    slug: "sikkim",
    description: "Gangtok • Monasteries • Nature",
    icon: MapPin,
  },
  {
    id: 13,
    name: "Odisha",
    slug: "odisha",
    description: "Puri • Konark • Chilika Lake",
    icon: MapPin,
  },
  {
    id: 14,
    name: "Punjab",
    slug: "punjab",
    description: "Golden Temple • Wagah Border",
    icon: MapPin,
  },
  {
    id: 15,
    name: "Madhya Pradesh",
    slug: "madhya-pradesh",
    description: "Wildlife • Khajuraho • Heritage",
    icon: MapPin,
  },
];

export default function PopularDestinations() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
            Explore India
          </span>

          <h2 className="mt-3 text-3xl font-bold text-stone-900 md:text-5xl">
            Popular Cities
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/packages/destination/${destination.slug}`}
              className="group flex items-start gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-stone-50"
            >
              {/* Icon */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-stone-200 bg-stone-50 shadow-sm transition-all duration-300 group-hover:border-gold group-hover:bg-gold/10">
                <destination.icon
                  size={30}
                  className="text-stone-600 transition-all duration-300 group-hover:scale-110 group-hover:text-gold"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-stone-900 transition-colors group-hover:text-gold">
                  {destination.name}
                </h3>

                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {destination.description}
                </p>

                <span className="mt-3 inline-block text-sm font-semibold text-gold">
                  Explore Packages →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
