"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowRight, MapPin } from "lucide-react";

const popularDestinations = [
  {
    id: 1,
    city: "Goa",
    image: "/packages/goa_package.jpg",
    slug: "goa",
    description:
      "Golden beaches, nightlife, water sports and luxury beach resorts.",
    packages: "45+ Packages",
  },
  {
    id: 2,
    city: "Kashmir",
    image: "/packages/kashmir_package.jpg",
    slug: "kashmir",
    description:
      "Snow-capped mountains, houseboats, valleys and scenic landscapes.",
    packages: "32+ Packages",
  },
  {
    id: 3,
    city: "Kerala",
    image: "/packages/Kerala_boats.jpg",
    slug: "kerala",
    description: "Backwaters, tea gardens, beaches and luxury houseboat stays.",
    packages: "40+ Packages",
  },
  {
    id: 4,
    city: "Rajasthan",
    image: "/packages/Rajasthan_package.jpg",
    slug: "rajasthan",
    description:
      "Royal palaces, forts, desert safaris and cultural experiences.",
    packages: "38+ Packages",
  },
  {
    id: 5,
    city: "Himachal",
    image: "/packages/Himachal_package.jpg",
    slug: "himachal",
    description:
      "Snowy mountains, adventure sports and beautiful hill stations.",
    packages: "36+ Packages",
  },

  {
    id: 7,
    city: "Ladakh",
    image: "/packages/Himachal_package.jpg",
    slug: "ladakh",
    description:
      "High-altitude lakes, monasteries and unforgettable road trips.",
    packages: "15+ Packages",
  },
  {
    id: 8,
    city: "Sikkim",
    image: "/packages/Sikkim_package.jpg",
    slug: "sikkim",
    description: "Himalayan beauty, monasteries and breathtaking landscapes.",
    packages: "18+ Packages",
  },
];

export default function PopularDestinationsLastSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  return (
    <section className="relative overflow-hidden bg-stone-50 py-24">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-gold/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-gold shadow-sm">
              Popular Destinations
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-stone-900 md:text-5xl">
              Explore India’s Favourite Places
            </h2>

            <p className="mt-5 text-lg leading-8 text-stone-600">
              Discover India’s most loved travel destinations with carefully
              curated holiday packages, premium hotels and unforgettable
              experiences.
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden gap-4 md:flex">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous destinations"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/25 bg-white text-gold shadow-md transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white active:scale-95"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next destinations"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/25 bg-white text-gold shadow-md transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white active:scale-95"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="-ml-6 flex">
            {popularDestinations.map((destination) => (
              <div
                key={destination.id}
                className="min-w-0 flex-[0_0_90%] pl-6 sm:flex-[0_0_60%] md:flex-[0_0_48%] lg:flex-[0_0_42%] xl:flex-[0_0_33.333%]"
              >
                <Link
                 href={`/packages/destination/${destination.slug}`}
                  className="group block h-full"
                >
                  <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_80px_rgba(15,23,42,0.16)]">
                    {/* Image */}
                    <div className="relative h-72 overflow-hidden sm:h-80 lg:h-[22rem]">
                      <img
                        src={destination.image}
                        alt={`${destination.city} holiday packages`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                      {/* Package Badge */}
                      <div className="absolute left-6 top-6 rounded-full bg-white/95 px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-gold shadow-lg backdrop-blur-sm">
                        {destination.packages}
                      </div>

                      {/* Location */}
                      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
                        <div className="flex items-center gap-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white">
                              {destination.city}
                            </h3>
                            <p className="mt-1 text-sm text-white/80">
                              Luxury travel experiences
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-7 lg:p-8">
                      <p className="flex-1 text-base leading-8 text-stone-600">
                        {destination.description}
                      </p>

                      <div className="mt-8 flex items-center justify-between border-t border-stone-100 pt-6">
                        <span className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
                          Explore Packages
                        </span>

                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-300 group-hover:translate-x-1 group-hover:bg-gold group-hover:text-white">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="mt-10 flex justify-center gap-4 md:hidden">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous destinations"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 bg-white text-gold shadow-md transition-all duration-300 active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next destinations"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 bg-white text-gold shadow-md transition-all duration-300 active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
