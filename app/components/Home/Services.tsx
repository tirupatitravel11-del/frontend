"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ServiceCard from "./ServiceCard";
import { services } from "../../constants/services";

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="font-semibold uppercase tracking-[4px] text-gold">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Services We Provide
            </h2>

            <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
              Reliable cab bookings, hotels, tour packages, boat rides, and
              spiritual travel services—all in one place.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-3 md:justify-end">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold text-gold transition hover:bg-gold hover:text-white sm:h-12 sm:w-12"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => emblaApi?.scrollNext()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold text-gold transition hover:bg-gold hover:text-white sm:h-12 sm:w-12"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-10 overflow-hidden sm:mt-14" ref={emblaRef}>
          <div className="-mx-2 flex sm:-mx-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="
                  flex-none
                  w-full
                  px-2
                  sm:w-1/2
                  sm:px-4
                  lg:w-1/3
                "
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
