"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../constants/testimonials";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="font-semibold uppercase tracking-[4px] text-gold">
              Testimonials
            </p>

            <h2 className="mt-3 text-3xl font-bold text-stone-900 md:text-4xl">
              What Our Customers Say
            </h2>

            <p className="mt-4 max-w-2xl text-base text-stone-600 md:text-lg">
              Hear from our happy travelers who trusted us for cab booking, tour
              packages, hotel reservations, and spiritual journeys.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-3 md:justify-end">
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
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="flex min-w-0 flex-[0_0_100%] px-2 md:flex-[0_0_50%] md:px-3 xl:flex-[0_0_33.333%]"
              >
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
