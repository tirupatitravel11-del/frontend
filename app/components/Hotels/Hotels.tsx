import Link from "next/link";
import { ArrowRight } from "lucide-react";

import HotelCard from "../../components/Home/HotelCard";
import { featuredHotels } from "../../constants/hotels";
import HotelsCard from "./HotelsCard";

export default function Hotels() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="font-semibold uppercase tracking-[4px] text-gold">
              Featured Hotels
            </p>

            <h2 className="mt-3 text-3xl font-bold text-stone-900 md:text-5xl">
              Stay in Comfort Anywhere in India
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
              Discover handpicked hotels for a comfortable stay across India's
              top destinations.
            </p>
          </div>

          {/* Mobile */}
          <Link
            href="/hotels"
            className="flex shrink-0 items-center justify-center gap-2 font-semibold text-gold md:hidden"
          >
            View All Hotels
            <ArrowRight size={18} />
          </Link>

          {/* Desktop */}
          <Link
            href="/hotels"
            className="hidden shrink-0 items-center gap-2 font-semibold text-gold md:flex"
          >
            View All Hotels
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Hotels Grid */}
        <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {featuredHotels.map((hotel) => (
            <div key={hotel.id} className="h-full">
              <HotelsCard {...hotel} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
