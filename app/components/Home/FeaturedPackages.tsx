"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PackageCard from "./PackageCard";
import { featuredPackages } from "../../constants/featuredPackages";

export default function FeaturedPackages() {
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
            <p className="font-semibold uppercase tracking-[4px] text-gold">
              Packages
            </p>

            <h2 className="mt-2 text-3xl font-bold text-stone-900 md:text-4xl">
              Featured Tour Packages
            </h2>

            <p className="mt-4 text-base text-stone-600 md:text-lg">
              Discover our most loved pilgrimage and holiday packages.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 md:justify-end">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="rounded-full border border-gold p-3 text-gold transition hover:bg-gold hover:text-white"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => emblaApi?.scrollNext()}
              className="rounded-full border border-gold p-3 text-gold transition hover:bg-gold hover:text-white"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {featuredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_50%] sm:px-3 lg:flex-[0_0_33.333%]"
              >
                <PackageCard {...pkg} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
