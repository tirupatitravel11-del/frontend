"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RouteCard from "./RouteCard";
import { popularRoutes } from "../../constants/routes";

// Helper function to generate URL-friendly slugs
const generateRouteSlug = (from: string, to: string) => {
  const format = (str: string) => str.toLowerCase().replace(/\s+/g, "-");
  return `${format(from)}-to-${format(to)}-taxi`;
};

export default function PopularRoutes() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  return (
    <section className="bg-stone-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <span className="font-semibold uppercase tracking-[4px] text-gold">
              Cab Routes
            </span>

            <h2 className="mt-3 text-3xl font-bold text-stone-900 md:text-5xl">
              Popular Cab Routes
            </h2>

            <p className="mt-5 max-w-3xl text-base text-gray-600 md:text-lg">
              Explore our most booked routes for comfortable and affordable
              travel.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 md:flex md:justify-end">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              className="rounded-full border border-gold p-3 text-gold transition hover:bg-gold hover:text-white"
              aria-label="Previous route"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              className="rounded-full border border-gold p-3 text-gold transition hover:bg-gold hover:text-white"
              aria-label="Next route"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {popularRoutes.map((route) => {
              const slug = generateRouteSlug(route.from, route.to);

              return (
                <Link
                  key={route.id}
                  href={`/route/${slug}`}
                  className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_50%] sm:px-3 lg:flex-[0_0_33.333%] block"
                >
                  {/* The entire card is now clickable */}
                  <RouteCard {...route} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
