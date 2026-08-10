"use client";
import Link from "next/link";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";

import HotelResults from "@/app/components/Hotels/HotelResults";
import HotelFiltersLeft from "@/app/components/Hotels/HotelFiltersLeft";
import axios from "axios";
import { hotels } from "@/app/constants/hotelsdetails";



type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getData(slug: string) {
  try {
    console.log("Sending slug to API:", slug);

    const response = await axios.get(
      `${process.env.apiUrl}/api/hotel/${slug}`,
      {
        withCredentials: true,
      },
    );

    console.log("API RESPONSE:", response.data);

    return response.data.hotels || [];
  } catch (error) {
    console.error("GET PAGE API ERROR:", error);

    if (axios.isAxiosError(error)) {
      console.error("Status:", error.response?.status);
      console.error("Response:", error.response?.data);
    }

    return [];
  }
}

export default function HotelCityPage() {
  const params = useParams();
  const slug = String(params?.slug || "").toLowerCase();
  const [hotels, setHotels] = useState<any[]>([]);
  // Convert "mumbai" → "Mumbai"
  const city = slug.charAt(0).toUpperCase() + slug.slice(1);

  const [search, setSearch] = useState("");

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const [selectedPrice, setSelectedPrice] = useState("");

  const [sort, setSort] = useState("Popularity");
  useEffect(() => {
    const fetchHotels = async () => {
      const result = await getData(slug);

      console.log("HOTELS FROM API:", result);

      setHotels(result);
    };

    if (slug) {
      fetchHotels();
    }
  }, [slug]);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter],
    );
  };
  console.log(hotels, "hotesl hai");
  const filteredHotels = useMemo(() => {
    let result = [...hotels];

    // Search
    result = result.filter((hotel) =>
      `${hotel.name || ""} ${hotel.address || ""}`
        .toLowerCase()
        .includes(search.toLowerCase()),
    );

    // Breakfast
    if (selectedFilters.includes("Breakfast Included")) {
      result = result.filter((hotel) =>
        hotel.amenities?.includes("Breakfast Included"),
      );
    }

    // Swimming Pool
    if (selectedFilters.includes("Swimming Pool")) {
      result = result.filter((hotel) =>
        hotel.amenities?.includes("Swimming Pool"),
      );
    }

    // Free Cancellation
    if (selectedFilters.includes("Free Cancellation")) {
      result = result.filter((hotel) =>
        hotel.amenities?.includes("Free Cancellation"),
      );
    }

    // 5 Star
    if (selectedFilters.includes("5 Star")) {
      result = result.filter((hotel) => Number(hotel.starRating) >= 5);
    }

    // Price
    if (selectedPrice === "₹ 0 - ₹ 1000") {
      result = result.filter(
        (hotel) =>
          Number(hotel.priceFrom) >= 0 && Number(hotel.priceFrom) <= 1000,
      );
    }

    if (selectedPrice === "₹ 1000 - ₹ 2000") {
      result = result.filter(
        (hotel) =>
          Number(hotel.priceFrom) > 1000 && Number(hotel.priceFrom) <= 2000,
      );
    }

    if (selectedPrice === "₹ 2000 - ₹ 3000") {
      result = result.filter(
        (hotel) =>
          Number(hotel.priceFrom) > 2000 && Number(hotel.priceFrom) <= 3000,
      );
    }

    if (selectedPrice === "₹ 3000 - ₹ 5000") {
      result = result.filter(
        (hotel) =>
          Number(hotel.priceFrom) > 3000 && Number(hotel.priceFrom) <= 5000,
      );
    }

    if (selectedPrice === "₹ 5000 - ₹ 7000") {
      result = result.filter(
        (hotel) =>
          Number(hotel.priceFrom) > 5000 && Number(hotel.priceFrom) <= 7000,
      );
    }

    if (selectedPrice === "₹ 7000+") {
      result = result.filter((hotel) => Number(hotel.priceFrom) > 7000);
    }

    // Sorting
    if (sort === "Price (Low to High)") {
      result.sort((a, b) => Number(a.priceFrom) - Number(b.priceFrom));
    }

    if (sort === "Price (High to Low)") {
      result.sort((a, b) => Number(b.priceFrom) - Number(a.priceFrom));
    }

    if (sort === "User Rating (Highest)") {
      result.sort((a, b) => Number(b.starRating) - Number(a.starRating));
    }

    return result;
  }, [hotels, search, selectedFilters, selectedPrice, sort]);

  return (
    <main className="min-h-screen bg-stone-100">
      <div className="mx-auto max-w-[1500px] px-4 py-6 lg:px-6">
        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          {/* ================= LEFT SIDE ================= */}
          <aside>
            <div className="sticky top-5 rounded-lg bg-white px-4">
              <HotelFiltersLeft
                selectedFilters={selectedFilters}
                selectedPrice={selectedPrice}
                setSelectedPrice={setSelectedPrice}
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
