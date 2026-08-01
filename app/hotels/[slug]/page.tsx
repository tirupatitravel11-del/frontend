"use client";

import { useMemo, useState } from "react";
import HotelFilters from "@/app/components/Hotels/HotelFilters";
import HotelResults from "@/app/components/Hotels/HotelResults";
import HotelFiltersLeft from "@/app/components/Hotels/HotelFiltersLeft";

const hotels = [
  {
    id: 1,
    name: "Hotel The Royal Plaza",
    location: "Connaught Place, Delhi",

    image: "/images/hotels/hotel-1.jpg",
    rating: 3.4,
    ratingText: "Good",
    reviews: 12494,
    oldPrice: 8480,
    price: 7208,
    amenities: ["Free Cancellation", "Couple Friendly", "Breakfast Included"],
  },
  {
    id: 2,
    name: "The Grand Delhi Hotel",
    location: "Aerocity, Delhi",

    image: "/images/hotels/hotel-2.jpg",
    rating: 4.0,
    ratingText: "Very Good",
    reviews: 8240,
    oldPrice: 7200,
    price: 5800,
    amenities: ["Free Cancellation", "Swimming Pool", "Breakfast Included"],
  },
  {
    id: 3,
    name: "Hotel City Palace",
    location: "Karol Bagh, Delhi",

    image: "/images/hotels/hotel-3.jpg",
    rating: 4.2,
    ratingText: "Very Good",
    reviews: 6320,
    oldPrice: 6500,
    price: 4999,
    amenities: ["Free WiFi", "Parking", "Couple Friendly"],
  },
];

export default function HotelCityPage() {
  const [search, setSearch] = useState("");

  // IMPORTANT: initialize as an empty array
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const [sort, setSort] = useState("Popularity");

  const city = "Delhi";

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter],
    );
  };

  const filteredHotels = useMemo(() => {
    let result = hotels.filter((hotel) =>
      `${hotel.name} ${hotel.location}`
        .toLowerCase()
        .includes(search.toLowerCase()),
    );

    // Breakfast filter
    if (selectedFilters.includes("Breakfast Included")) {
      result = result.filter((hotel) =>
        hotel.amenities.includes("Breakfast Included"),
      );
    }

    // Swimming pool filter
    if (selectedFilters.includes("Swimming Pool")) {
      result = result.filter((hotel) =>
        hotel.amenities.includes("Swimming Pool"),
      );
    }

    // Free cancellation filter
    if (selectedFilters.includes("Free Cancellation")) {
      result = result.filter((hotel) =>
        hotel.amenities.includes("Free Cancellation"),
      );
    }

    // 5 Star filter
    if (selectedFilters.includes("5 Star")) {
      result = result.filter((hotel) => hotel.rating >= 4.5);
    }

    // Sorting
    if (sort === "Price (Low to High)") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "Price (High to Low)") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "User Rating (Highest)") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, selectedFilters, sort]);

  return (
    <main className="min-h-screen bg-stone-100">
      <div className="mx-auto max-w-[1500px] px-4 py-6 lg:px-6">
        

        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          {/* ================= LEFT SIDE ================= */}
          <aside>
            <div className="sticky top-5 rounded-lg bg-white px-4">
              <HotelFiltersLeft
                search={search}
                setSearch={setSearch}
                selectedFilters={selectedFilters}
                toggleFilter={toggleFilter}
              />
            </div>
          </aside>

          {/* ================= RIGHT SIDE ================= */}
          <section className="min-w-0">
            <HotelResults
              hotels={filteredHotels}
              city={city}
              sort={sort}
              setSort={setSort}
            />
          </section>
        </div>
      </div>
    </main>
  );
}
