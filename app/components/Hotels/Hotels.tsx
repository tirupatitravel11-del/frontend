"use client";

import axios from "axios";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { featuredHotels } from "../../constants/hotels";
import { hotels as frontendHotels } from "../../constants/hotelsdetails";
import HotelsCard from "./HotelsCard";

interface BackendHotel {
  _id: string;
  name: string;
  slug: string;
  address?: string;
  images?: string[];
  starRating?: number;
  priceFrom?: number;
  cab_page_id?: {
    slug?: string;
    cityName?: string;
  } | null;
}

export default function Hotels() {
  const [backendHotels, setBackendHotels] = useState<BackendHotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    let active = true;

    axios
      .get<{ success: boolean; hotels: BackendHotel[] }>(
        `${process.env.apiUrl}/api/hotels`,
        { withCredentials: true },
      )
      .then(({ data }) => {
        if (!data.success || !Array.isArray(data.hotels)) {
          throw new Error("The hotel API returned an invalid response.");
        }

        if (active) {
          setBackendHotels(data.hotels);
          setApiError("");
        }
      })
      .catch((error: unknown) => {
        console.error("GET ALL HOTELS API ERROR:", error);
        if (active) {
          setApiError(
            "CRM hotels could not be loaded. Showing our curated hotels instead.",
          );
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const allHotels = useMemo(() => {
    const crmHotels = backendHotels.flatMap((hotel) => {
      const citySlug = hotel.cab_page_id?.slug;
      if (!citySlug) return [];

      return [
        {
          id: `crm-${hotel._id}`,
          name: hotel.name,
          slug: hotel.slug,
          city: citySlug,
          location: hotel.address || hotel.cab_page_id?.cityName || "",
          image: hotel.images?.[0] || "/hotels/hotel-placeholder.jpg",
          rating: Number(hotel.starRating || 0),
          price: Number(hotel.priceFrom || 0),
        },
      ];
    });

    const crmHotelKeys = new Set(
      crmHotels.map((hotel) => `${hotel.city}/${hotel.slug}`),
    );
    const curatedHotels = [
      ...frontendHotels.map((hotel) => ({
        id: `curated-${hotel.id}`,
        name: hotel.name,
        slug: hotel.slug,
        city: hotel.city,
        location: hotel.location,
        image: hotel.image,
        rating: hotel.rating,
        price: hotel.price,
      })),
      ...featuredHotels.map((hotel) => ({
        id: `featured-${hotel.id}`,
        name: hotel.name,
        slug: hotel.slug,
        city: hotel.city,
        location: hotel.location,
        image: hotel.image,
        rating: hotel.rating,
        price: hotel.price,
      })),
    ].filter((hotel) => !crmHotelKeys.has(`${hotel.city}/${hotel.slug}`));

    return [...crmHotels, ...curatedHotels];
  }, [backendHotels]);

  return (
    <section
      id="all-hotels"
      className="bg-slate-50 py-12 md:py-12 border-b border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="font-semibold uppercase tracking-[4px] text-gold">
              All Hotels
            </p>

            <h2 className="mt-3 text-3xl font-bold text-stone-900 md:text-5xl">
              Stay in Comfort Anywhere in India
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
              Discover handpicked hotels for a comfortable stay across India&apos;s
              top destinations.
            </p>
          </div>

          {/* Mobile */}
          <Link
            href="/hotels#all-hotels"
            className="flex shrink-0 items-center justify-center gap-2 font-semibold text-gold md:hidden"
          >
            View All Hotels
            <ArrowRight size={18} />
          </Link>

          {/* Desktop */}
          <Link
            href="/hotels#all-hotels"
            className="hidden shrink-0 items-center gap-2 font-semibold text-gold md:flex"
          >
            View All Hotels
            <ArrowRight size={18} />
          </Link>
        </div>

        {loading && (
          <p role="status" className="mb-5 text-sm text-stone-600">
            Loading hotels...
          </p>
        )}
        {apiError && (
          <p role="alert" className="mb-5 text-sm text-amber-700">
            {apiError}
          </p>
        )}

        {/* Hotels Grid */}
        <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {allHotels.map((hotel) => (
            <div key={hotel.id} className="h-full">
              <HotelsCard {...hotel} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
