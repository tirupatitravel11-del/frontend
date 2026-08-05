"use client";

import Link from "next/link";
import { Star } from "lucide-react";

interface Hotel {
  cab_page_id: any;
  _id: string;
  name: string;
  slug: string;
  address: string;
  amenities: string[];
  starRating: number;
  priceFrom: number;
  priceTo: number;
  city: string;
  description?: string;
  images?: string[];
}

interface HotelResultsProps {
  hotels: Hotel[];
  city: string;
  sort: string;
  setSort: (value: string) => void;
}
export default function HotelResults({
  hotels,
  city,
  sort,
  setSort,
}: HotelResultsProps) {
console.log(hotels, "dsfdfgdfg")

  return (
    <section>
      {/* Heading */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-stone-900">Hotels in {city}</h1>

        <p className="mt-1 text-sm text-stone-500">
          Showing {hotels.length} properties
        </p>
      </div>

      {/* Sort Bar */}
      <div className="mb-5 overflow-x-auto rounded-lg bg-white shadow-sm">
        <div className="flex min-w-max items-center">
          {[
            "Popularity",
            "Price (Low to High)",
            "Price (High to Low)",
            "User Rating (Highest)",
            "Lowest Price & Best Rated",
          ].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setSort(item)}
              className={`border-r border-stone-200 px-6 py-4 text-sm font-semibold ${
                sort === item
                  ? "bg-blue-50 text-blue-600"
                  : "text-stone-700 hover:bg-stone-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Hotels */}
      <div className="space-y-5">
        {hotels.map((hotel) => {
          const hotelSlug =
            hotel.slug ||
            hotel.name
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "");

          const rating = Number(hotel.starRating || 0);

          const price = Number(hotel.priceFrom || 0);

          const amenities = Array.isArray(hotel.amenities)
            ? hotel.amenities
            : [];

          /*
            Backend images is currently [].
            So use fallback image when there is no image.
          */
          const hotelImage =
            hotel.images && hotel.images.length > 0
              ? hotel.images[0]
              : "/hotels/hotel-placeholder.jpg";

          return (
            <Link
              key={hotel._id}
              href={`/hotel/${hotel.cab_page_id.slug
}/${hotelSlug}`}
              className="block"
            >
              <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition hover:border-blue-300 hover:shadow-md">
                <div className="grid md:grid-cols-[280px_minmax(0,1fr)_220px]">
                  {/* ================= IMAGE ================= */}
                  <div className="relative h-60 md:h-full">
                    <img
                      src={hotelImage}
                      alt={hotel.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* ================= DETAILS ================= */}
                  <div className="p-5">
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-bold text-stone-900">
                        {hotel.name}
                      </h2>

                      {/* Stars */}
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={15}
                            className={
                              i < Math.round(rating)
                                ? "fill-gold text-gold"
                                : "text-stone-300"
                            }
                          />
                        ))}
                      </div>
                    </div>

                    {/* Location / Address */}
                    <div className="mt-2 flex items-center gap-2 text-sm">
                      <span className="font-semibold text-blue-600">
                        {hotel.address}
                      </span>
                    </div>

                    {/* Amenities */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="rounded-md border border-stone-200 px-3 py-1 text-xs text-stone-700"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>

                    {/* Extra Information */}
                    <div className="mt-4 space-y-1 text-sm">
                      <p className="text-teal-700">
                        ✓ Free Cancellation available
                      </p>

                      <p className="text-teal-700">
                        ✓ Easy access to tourist attractions
                      </p>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-sm text-stone-600">
                      {hotel.description ||
                        "Comfortable stay with excellent facilities and convenient location."}
                    </p>
                  </div>

                  {/* ================= PRICE ================= */}
                  <div className="border-t border-stone-200 p-5 text-right md:border-l md:border-t-0">
                    <p className="font-semibold text-blue-700">
                      {rating >= 4.5
                        ? "Excellent"
                        : rating >= 4
                          ? "Very Good"
                          : "Good"}
                    </p>

                    <div className="mt-1">
                      <span className="ml-2 rounded bg-blue-600 px-2 py-1 font-bold text-white">
                        {rating}
                      </span>
                    </div>

                    <div className="mt-8">
                      <p className="text-2xl font-bold text-stone-900">
                        ₹{price.toLocaleString()}
                      </p>

                      <p className="text-sm text-stone-500">+ taxes & fees</p>

                      <p className="text-sm text-stone-500">Per Night</p>

                      <div className="mt-4 w-full rounded-lg bg-gold px-4 py-3 text-center font-bold text-white hover:bg-[#c88912]">
                        Book Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
