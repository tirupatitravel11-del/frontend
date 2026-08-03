"use client";
import Link from "next/link";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";

import HotelResults from "@/app/components/Hotels/HotelResults";
import HotelFiltersLeft from "@/app/components/Hotels/HotelFiltersLeft";
import axios from "axios";

const hotels = [
  {
    id: 1,
    name: "Hotel The Royal Plaza",
    city: "delhi",
    location: "Connaught Place, Delhi",
    image: "/hotels/royal_hotel_plaza_delhi.jpg",
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
    city: "delhi",
    location: "Aerocity, Delhi",
    image: "/hotels/Grand_delhi.jpg",
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
    city: "delhi",
    location: "Karol Bagh, Delhi",
    image: "/hotels/Hotel_city_palace_delhi.jpg",
    rating: 4.2,
    ratingText: "Very Good",
    reviews: 6320,
    oldPrice: 6500,
    price: 4999,
    amenities: ["Free WiFi", "Parking", "Couple Friendly"],
  },

  // Mumbai
  {
    id: 4,
    name: "The Grand Mumbai",
    city: "mumbai",
    location: "Andheri West, Mumbai",
    image: "/hotels/grand-hotel-mumbai.jpg",
    rating: 4.5,
    ratingText: "Excellent",
    reviews: 8450,
    oldPrice: 7500,
    price: 6200,
    amenities: ["Free WiFi", "Swimming Pool", "Free Cancellation"],
  },

  {
    id: 5,
    name: "Mumbai Palace Hotel",
    city: "mumbai",
    location: "Colaba, Mumbai",
    image: "/images/hotels/hotel-5.jpg",
    rating: 4.1,
    ratingText: "Very Good",
    reviews: 5210,
    oldPrice: 6800,
    price: 5400,
    amenities: ["Breakfast Included", "Parking", "Free Cancellation"],
  },

  // Pune
  {
    id: 6,
    name: "Royal Pune Hotel",
    city: "pune",
    location: "Koregaon Park, Pune",
    image: "/images/hotels/hotel-6.jpg",
    rating: 4.3,
    ratingText: "Very Good",
    reviews: 4210,
    oldPrice: 6000,
    price: 4800,
    amenities: ["Free WiFi", "Breakfast Included", "Parking"],
  },

  {
    id: 7,
    name: "Pune Grand Resort",
    city: "pune",
    location: "Viman Nagar, Pune",
    image: "/images/hotels/hotel-7.jpg",
    rating: 4.0,
    ratingText: "Very Good",
    reviews: 3210,
    oldPrice: 5500,
    price: 4200,
    amenities: ["Swimming Pool", "Free Cancellation", "Parking"],
  },
  {
    id: 8,
    name: "The Imperial Delhi",
    city: "delhi",
    location: "Janpath, New Delhi",
    image: "/hotels/Imperial_delhi.jpg",
    rating: 4.6,
    ratingText: "Excellent",
    reviews: 9870,
    oldPrice: 12000,
    price: 9500,
    amenities: ["Free Cancellation", "Swimming Pool", "Breakfast Included"],
  },

  {
    id: 9,
    name: "Hotel Ashoka Palace",
    city: "delhi",
    location: "Chanakyapuri, Delhi",
    image: "/hotels/ashoka_delhi.avif",
    rating: 4.3,
    ratingText: "Very Good",
    reviews: 6340,
    oldPrice: 8500,
    price: 6900,
    amenities: ["Free WiFi", "Parking", "Breakfast Included"],
  },

  {
    id: 10,
    name: "The Metropolitan Hotel",
    city: "delhi",
    location: "Connaught Place, New Delhi",
    image: "/hotels/metropolitan_delhi.jpg",
    rating: 4.2,
    ratingText: "Very Good",
    reviews: 7520,
    oldPrice: 7800,
    price: 6100,
    amenities: ["Free Cancellation", "Free WiFi", "Couple Friendly"],
  },

  {
    id: 11,
    name: "Hotel Blue Star Delhi",
    city: "delhi",
    location: "Karol Bagh, Delhi",
    image: "/Blue_star_delhi.jpg",
    rating: 3.9,
    ratingText: "Good",
    reviews: 4380,
    oldPrice: 5200,
    price: 3999,
    amenities: ["Free WiFi", "Parking", "Free Cancellation"],
  },

  // More Mumbai Hotels
  {
    id: 12,
    name: "The Taj Mumbai",
    city: "mumbai",
    location: "Colaba, Mumbai",
    image: "/hotels/Taj_hotel.avif",
    rating: 4.7,
    ratingText: "Excellent",
    reviews: 12450,
    oldPrice: 15000,
    price: 12500,
    amenities: ["Swimming Pool", "Breakfast Included", "Free Cancellation"],
  },

  {
    id: 13,
    name: "Marine Drive Hotel",
    city: "mumbai",
    location: "Marine Drive, Mumbai",
    image: "/Marine_drive_hotel.jpg",
    rating: 4.4,
    ratingText: "Excellent",
    reviews: 8340,
    oldPrice: 9000,
    price: 7200,
    amenities: ["Free WiFi", "Breakfast Included", "Sea View"],
  },

  {
    id: 14,
    name: "The Orchid Mumbai",
    city: "mumbai",
    location: "Vile Parle, Mumbai",
    image: "/hotels/Orchid_mumbai.webp",
    rating: 4.2,
    ratingText: "Very Good",
    reviews: 6720,
    oldPrice: 7500,
    price: 5900,
    amenities: ["Swimming Pool", "Free Cancellation", "Parking"],
  },

  {
    id: 15,
    name: "Mumbai Central Hotel",
    city: "mumbai",
    location: "Mumbai Central, Mumbai",
    image: "/hotels/Central_mumbai.jpg",
    rating: 4.0,
    ratingText: "Very Good",
    reviews: 5210,
    oldPrice: 6200,
    price: 4800,
    amenities: ["Free WiFi", "Parking", "Couple Friendly"],
  },
];

export default function HotelCityPage() {
  // Get slug from URL
  const params = useParams();

  const slug = String(params.slug || "").toLowerCase();

  // Convert "mumbai" → "Mumbai"
  const city = slug.charAt(0).toUpperCase() + slug.slice(1);

  const [search, setSearch] = useState("");

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const [selectedPrice, setSelectedPrice] = useState("");

  const [sort, setSort] = useState("Popularity");
  useEffect(() => {
    getData(slug)
  },[])
  async function getData(slug: string) {
    try {
      console.log("Sending slug to API:", slug);

      const response = await axios.get(
        `${process.env.apiUrl}/api/hotel/${slug}`,
        
       
      );

      console.log("API RESPONSE:", response.data);

      return response.data.data;
    } catch (error) {
      console.error("GET PAGE API ERROR:", error);

      if (axios.isAxiosError(error)) {
        console.error("Status:", error.response?.status);
        console.error("Response:", error.response?.data);
      }

      return null;
    }
  }
  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter],
    );
  };

  const filteredHotels = useMemo(() => {
    // First filter according to URL
    let result = hotels.filter((hotel) => hotel.city === slug);

    // Search
    result = result.filter((hotel) =>
      `${hotel.name} ${hotel.location}`
        .toLowerCase()
        .includes(search.toLowerCase()),
    );

    // Breakfast
    if (selectedFilters.includes("Breakfast Included")) {
      result = result.filter((hotel) =>
        hotel.amenities.includes("Breakfast Included"),
      );
    }

    // Swimming Pool
    if (selectedFilters.includes("Swimming Pool")) {
      result = result.filter((hotel) =>
        hotel.amenities.includes("Swimming Pool"),
      );
    }

    // Free Cancellation
    if (selectedFilters.includes("Free Cancellation")) {
      result = result.filter((hotel) =>
        hotel.amenities.includes("Free Cancellation"),
      );
    }

    // 5 Star
    if (selectedFilters.includes("5 Star")) {
      result = result.filter((hotel) => hotel.rating >= 4.5);
    }

    // Price filter
    if (selectedPrice === "₹ 0 - ₹ 1000") {
      result = result.filter(
        (hotel) => hotel.price >= 0 && hotel.price <= 1000,
      );
    }

    if (selectedPrice === "₹ 1000 - ₹ 2000") {
      result = result.filter(
        (hotel) => hotel.price > 1000 && hotel.price <= 2000,
      );
    }

    if (selectedPrice === "₹ 2000 - ₹ 3000") {
      result = result.filter(
        (hotel) => hotel.price > 2000 && hotel.price <= 3000,
      );
    }

    if (selectedPrice === "₹ 3000 - ₹ 5000") {
      result = result.filter(
        (hotel) => hotel.price > 3000 && hotel.price <= 5000,
      );
    }

    if (selectedPrice === "₹ 5000 - ₹ 7000") {
      result = result.filter(
        (hotel) => hotel.price > 5000 && hotel.price <= 7000,
      );
    }

    if (selectedPrice === "₹ 7000+") {
      result = result.filter((hotel) => hotel.price > 7000);
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
  }, [slug, search, selectedFilters, selectedPrice, sort]);

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
