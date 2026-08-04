"use client";

import { useState } from "react";
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
import HotelRooms from "@/app/components/Hotels/HotelRooms";

interface SelectedRoom {
  id: number;
  name: string;
  price: number;
  taxes: number;
}

const defaultSelectedRoom: SelectedRoom = {
  id: 1,
  name: "Classic",
  price: 836,
  taxes: 143,
};

export default function HotelDetailsPage() {
  const params = useParams();

  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [selectedRoom, setSelectedRoom] =
    useState<SelectedRoom>(defaultSelectedRoom);

  const handleRoomSelect = (room: SelectedRoom) => {
    setSelectedRoom(room);
  };

  const citySlug = String(params.slug || "").toLowerCase();
  const hotelSlug = String(
    params.hotelSlug || params.hotelsdetail || "",
  ).toLowerCase();

  const hotel = hotels.find(
    (item) =>
      item.city.toLowerCase() === citySlug &&
      item.slug.toLowerCase() === hotelSlug,
  );

  const fallbackAmenities = [
    "Free WiFi",
    "Restaurant",
    "Breakfast",
    "Parking",
    "Room Service",
    "Airport Transfer",
    "Swimming Pool",
    "Spa",
  ];

  const allAmenities = Array.from(
    new Set([...hotel?.amenities, ...fallbackAmenities]),
  );
  const hasMoreAmenities = allAmenities.length > 4;
  const visibleAmenities = showAllAmenities
    ? allAmenities
    : allAmenities.slice(0, 4);

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
              <div className="mt-4">
                <div
                  className={`flex flex-wrap gap-x-8 gap-y-4 ${
                    showAllAmenities ? "max-h-48 overflow-y-auto pr-2" : ""
                  }`}
                >
                  {visibleAmenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-2 text-sm text-stone-600"
                    >
                      <CheckCircle
                        size={17}
                        className="shrink-0 text-green-600"
                      />

                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>

                {hasMoreAmenities && (
                  <button
                    type="button"
                    aria-expanded={showAllAmenities}
                    onClick={() => setShowAllAmenities((prev) => !prev)}
                    className="mt-5 font-semibold text-blue-600 hover:underline"
                  >
                    {showAllAmenities ? "Show Less" : "More Details"}
                  </button>
                )}
              </div>

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
              <div className="sticky top-5 rounded-xl bg-white p-6 shadow-sm">
                {/* Selected room */}
                <p className="text-sm text-stone-500">Selected Room</p>

                <p className="mt-1 text-lg font-bold text-stone-900">
                  {selectedRoom.name}
                </p>

                {/* Price */}
                <div className="mt-5">
                  <p className="text-sm text-stone-500">Starting from</p>

                  <p className="mt-1 text-3xl font-bold text-stone-900">
                    ₹{selectedRoom.price.toLocaleString()}
                  </p>

                  <p className="mt-1 text-sm text-stone-500">
                    + ₹{selectedRoom.taxes.toLocaleString()} taxes & fees
                  </p>

                  <p className="mt-1 text-sm text-stone-500">Per Night</p>
                </div>

                {/* Book button */}
                <button
                  type="button"
                  className="mt-6 w-full rounded-lg bg-gold px-5 py-3 font-bold text-white transition hover:bg-[#c88912]"
                >
                  Book Now
                </button>

                <p className="mt-4 text-center text-xs text-stone-500">
                  Free cancellation available
                </p>
              </div>
            </aside>
          </div>
          <HotelRooms onRoomSelect={handleRoomSelect} />
        </div>
      </div>
    </main>
  );
}
