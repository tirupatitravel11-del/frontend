import Link from "next/link";
import { ArrowRight } from "lucide-react";

import HotelCard from "./HotelCard";
import { featuredHotels } from "../../constants/hotels";

export default function HotelsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="text-center md:text-left">
            <p className="font-semibold uppercase tracking-[4px] text-gold">
              Featured Hotels
            </p>

            <h2 className="mt-3 text-3xl font-bold text-stone-900 md:text-5xl">
              Stay in Comfort Anywhere in India
            </h2>

            <p className="mt-5 max-w-2xl text-base text-gray-600 md:text-lg">
              Discover handpicked hotels for a comfortable stay across India's
              top destinations.
            </p>
          </div>

          <Link
            href="/hotel"
            className="flex items-center justify-center gap-2 font-semibold text-gold md:hidden"
          >
            View All Hotels
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/hotel"
            className="hidden items-center gap-2 font-semibold text-gold md:flex"
          >
            View All Hotels
            <ArrowRight />
          </Link>
        </div>

        {/* Hotels Grid */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {featuredHotels.map((hotel) => (
            <HotelCard key={hotel.id} {...hotel} />
          ))}
        </div>
      </div>
    </section>
  );
}
