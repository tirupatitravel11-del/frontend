"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";

const popularDestinations = [
  {
    id: 1,
    city: "Mumbai",
    region: "Maharashtra, India",
    properties: 1240,
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=600&h=400&fit=crop",
    isPopular: true,
  },
  {
    id: 2,
    city: "Goa",
    region: "India",
    properties: 856,
    image: "/Packages_goa.jpg",
    isPopular: true,
  },
  {
    id: 3,
    city: "Jaipur",
    region: "Rajasthan, India",
    properties: 654,
    image:
      "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=600&h=400&fit=crop",
    isPopular: true,
  },
  {
    id: 4,
    city: "Delhi",
    region: "India",
    properties: 980,
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop",
    isPopular: false,
  },
  {
    id: 5,
    city: "Bangalore",
    region: "Karnataka, India",
    properties: 742,
    image: "/popular_cab_route5.jpg",
    isPopular: false,
  },
  {
    id: 6,
    city: "Kerala",
    region: "India",
    properties: 589,
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop",
    isPopular: false,
  },
];

export default function PopularDestinations() {
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
              Top Locations
            </span>

            <h2 className="mt-3 text-3xl font-bold text-stone-900 md:text-5xl">
              Popular Hotel Destinations
            </h2>

            <p className="mt-5 max-w-3xl text-base text-stone-600 md:text-lg">
              Explore our most booked hotel destinations for comfortable stays
              and unforgettable experiences.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 md:justify-end">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="rounded-full border border-gold p-3 text-gold transition hover:bg-gold hover:text-white"
              aria-label="Previous destination"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => emblaApi?.scrollNext()}
              className="rounded-full border border-gold p-3 text-gold transition hover:bg-gold hover:text-white"
              aria-label="Next destination"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {popularDestinations.map((destination) => (
              <div
                key={destination.id}
                className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_50%] sm:px-3 lg:flex-[0_0_33.333%]"
              >
                {/* Destination Card */}
                <div className="group relative flex h-[420px] flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg">
                  {/* Image Container (Fixed height, won't shrink) */}
                  <div className="relative h-56 shrink-0 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.city}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* City Name on Image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                        {destination.city}
                      </h3>
                      <div className="mt-1.5 flex items-center gap-1.5 text-sm text-white/95">
                        <MapPin className="h-4 w-4" />
                        {destination.region}
                      </div>
                    </div>
                  </div>

                  {/* Card Content (Fills remaining space perfectly) */}
                  <div className="flex flex-1 flex-col justify-between p-5">
                    {/* Rating & Reviews */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 rounded-lg bg-green-50 px-2 py-1">
                        <Star className="h-4 w-4 fill-green-600 text-green-600" />
                        <span className="text-sm font-bold text-green-700">
                          4.8
                        </span>
                      </div>
                      <span className="text-xs text-stone-500">
                        (2.4k reviews)
                      </span>
                    </div>

                    {/* Features/Tags */}
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">
                        Free WiFi
                      </span>
                      <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">
                        Pool
                      </span>
                      <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">
                        Spa
                      </span>
                    </div>

                    {/* Footer */}
                    <div className="flex items-end justify-between border-t border-stone-100 pt-4">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xs text-stone-500">from</span>
                          <span className="text-2xl font-bold text-stone-900">
                            ₹2,499
                          </span>
                        </div>
                        <span className="text-xs text-stone-500">
                          per night
                        </span>
                      </div>

                      <button className="flex items-center gap-1.5 rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-white">
                        Explore
                        <ChevronRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
