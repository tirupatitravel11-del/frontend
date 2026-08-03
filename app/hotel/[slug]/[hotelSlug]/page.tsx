"use client";

import { useParams } from "next/navigation";
import {
  Star,
  MapPin,
  CheckCircle,
  Heart,
  Clock3,
  Utensils,
  Dumbbell,
  Car,
  Wifi,
  Coffee,
  Waves,
} from "lucide-react";

import { hotels } from "../../../constants/hotelsdetails";

export default function HotelDetailsPage() {
  const params = useParams();

  const citySlug = String(params.slug || "").toLowerCase();
  const hotelSlug = String(
    params.hotelSlug || params.hotelsdetail || "",
  ).toLowerCase();

  const hotel = hotels.find(
    (item) =>
      item.city.toLowerCase() === citySlug &&
      item.slug.toLowerCase() === hotelSlug,
  );

  if (!hotel) {
    return (
      <main className="min-h-screen bg-stone-50 px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-bold text-stone-900">Hotel Not Found</h1>

          <p className="mt-2 text-stone-500">
            The hotel you are looking for does not exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 py-6">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* ================= HEADER ================= */}
        <div className="rounded-t-xl border border-stone-200 bg-white px-5 py-4">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl font-bold text-stone-900 md:text-2xl">
                  {hotel.name}
                </h1>

                <div className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={15}
                      className={
                        index < Math.round(hotel.rating)
                          ? "fill-gold text-gold"
                          : "fill-stone-200 text-stone-200"
                      }
                    />
                  ))}
                </div>
              </div>

              <div className="mt-2 flex items-center gap-2 text-sm text-stone-500">
                <MapPin size={16} className="text-gold" />
                {hotel.location}
              </div>
            </div>
          </div>
        </div>

        {/* ================= MAIN HOTEL AREA ================= */}
        <div className="border-x border-stone-200 bg-white px-5 pb-5">
          {/* MAIN IMAGE */}
          <div className="relative h-[300px] overflow-hidden rounded-xl lg:h-[380px]">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* ================= CONTENT + BOOKING ================= */}
          <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_340px]">
            {/* ================= LEFT ================= */}
            <div>
              {/* ABOUT */}
              <section>
                <h2 className="text-lg font-bold text-stone-900">
                  About Property
                </h2>

                <p className="mt-2 max-w-4xl text-sm leading-6 text-stone-600">
                  {hotel.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <button className="rounded-md border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                    🏨 Property Highlights
                  </button>

                  <button className="rounded-md border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                    🏃 Activities & Nearby Attractions
                  </button>
                </div>
              </section>

              {/* AMENITIES */}
              <section className="mt-6">
                <h2 className="text-lg font-bold text-stone-900">Amenities</h2>

                <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
                  {hotel.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-2 text-sm text-stone-600"
                    >
                      <CheckCircle size={17} className="text-green-600" />

                      {amenity}
                    </div>
                  ))}
                </div>
              </section>

              {/* EXTRA AMENITIES */}
              <section className="mt-7">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="flex items-center gap-2 text-sm text-stone-600">
                    <Wifi size={18} className="text-blue-500" />
                    Free WiFi
                  </div>

                  <div className="flex items-center gap-2 text-sm text-stone-600">
                    <Utensils size={18} className="text-blue-500" />
                    Restaurant
                  </div>

                  <div className="flex items-center gap-2 text-sm text-stone-600">
                    <Coffee size={18} className="text-blue-500" />
                    Breakfast
                  </div>

                  <div className="flex items-center gap-2 text-sm text-stone-600">
                    <Car size={18} className="text-blue-500" />
                    Parking
                  </div>
                </div>
              </section>

              {/* LOCATION */}
              <section className="mt-8 border-t border-stone-200 pt-6">
                <h2 className="text-lg font-bold text-stone-900">Location</h2>

                <div className="mt-3 flex items-start gap-3">
                  <MapPin className="mt-1 text-gold" size={20} />

                  <div>
                    <p className="font-semibold text-stone-800">
                      {hotel.location}
                    </p>

                    <p className="mt-1 text-sm text-stone-500">
                      Convenient location with easy access to nearby attractions
                      and transportation.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* ================= RIGHT BOOKING CARD ================= */}
            <aside>
              <div className="sticky top-5 rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
                {/* ROOM */}
                <div>
                  <h2 className="text-base font-bold text-stone-900">
                    Standard King Room
                  </h2>

                  <p className="mt-1 text-sm text-stone-600">Fits 2 Adults</p>
                </div>

                {/* CHECK IN INFO */}
                <div className="mt-4 flex gap-2">
                  <Clock3 size={17} className="mt-1 shrink-0 text-stone-600" />

                  <p className="text-sm leading-5 text-stone-600">
                    Allows to extend guaranteed check-in as early as 11
                    AM/check-out as late as 3 PM at extra charges.
                  </p>
                </div>

                {/* CANCELLATION */}
                <div className="mt-3 flex items-center gap-2 text-sm text-teal-600">
                  <CheckCircle size={16} />
                  Free Cancellation till 24 hrs before check in
                </div>

                <hr className="my-4 border-stone-200" />

                {/* PRICE */}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-stone-400 line-through">
                      ₹{hotel.oldPrice.toLocaleString()}
                    </span>

                    <span className="text-xs text-stone-500">Per Night:</span>
                  </div>

                  <div className="mt-1">
                    <span className="text-2xl font-bold text-stone-900">
                      ₹{hotel.price.toLocaleString()}
                    </span>

                    <span className="ml-2 text-sm text-stone-500">
                      + taxes & fees
                    </span>
                  </div>
                </div>

                {/* BOOK BUTTON */}
                <button className="mt-5 w-full rounded-lg bg-blue-600 px-5 py-3 font-bold text-white shadow-sm transition hover:bg-blue-700">
                  BOOK THIS NOW
                </button>

                {/* RATING */}
                <div className="mt-4 border-t border-stone-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-blue-700 px-4 py-3 text-xl font-bold text-white">
                        {hotel.rating}
                      </div>

                      <div>
                        <p className="font-bold text-stone-800">
                          {hotel.ratingText}
                        </p>
                      </div>
                    </div>

                    <button className="text-sm font-semibold text-blue-600">
                      All Reviews
                    </button>
                  </div>
                </div>

                {/* LOCATION CARD */}
                <div className="mt-4 border-t border-stone-200 pt-4">
                  <div className="flex gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                      <MapPin className="text-blue-600" />
                    </div>

                    <div>
                      <p className="font-bold text-stone-800">
                        {hotel.location.split(",")[0]}
                      </p>

                      <p className="text-xs text-stone-500">
                        Convenient location near the city center
                      </p>

                      <button className="mt-1 text-xs font-semibold text-blue-600">
                        See on Map
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
