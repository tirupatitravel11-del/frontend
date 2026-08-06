"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const packageOffers = [
  {
    id: 1,
    image: "/packages/goa.jpg",
    tag: "BEST SELLER",
    title: "Goa Beach Holiday",
    description:
      "Enjoy 3 Nights / 4 Days in Goa with beachside hotels, breakfast, sightseeing and transfers.",
    button: "EXPLORE PACKAGE",
  },
  {
    id: 2,
    image: "/packages/kashmir.jpg",
    tag: "TOP DESTINATION",
    title: "Kashmir Paradise Tour",
    description:
      "Visit Srinagar, Gulmarg and Pahalgam with comfortable hotels, meals and local sightseeing.",
    button: "EXPLORE PACKAGE",
  },
  {
    id: 3,
    image: "/packages/kerala.jpg",
    tag: "SUMMER SPECIAL",
    title: "Kerala Backwater Escape",
    description:
      "Experience Munnar, Alleppey and Thekkady with premium stays and beautiful backwaters.",
    button: "EXPLORE PACKAGE",
  },

  {
    id: 5,
    image: "/packages/rajasthan.jpg",
    tag: "ROYAL EXPERIENCE",
    title: "Royal Rajasthan Tour",
    description:
      "Discover Jaipur, Jodhpur, Udaipur and Jaisalmer with heritage hotels and cultural experiences.",
    button: "EXPLORE PACKAGE",
  },
  {
    id: 6,
    image: "/packages/himachal.jpg",
    tag: "MOUNTAIN ESCAPE",
    title: "Himachal Adventure",
    description:
      "Visit Shimla, Manali and Solang Valley with scenic mountain stays and sightseeing.",
    button: "EXPLORE PACKAGE",
  },
];

export default function PackageOffers() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  return (
    <section className="bg-stone-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="font-semibold uppercase tracking-[0.25em] text-gold">
              Holiday Packages
            </span>

            <h2 className="mt-3 text-4xl font-bold text-stone-900 md:text-5xl">
              Exclusive Holiday Deals
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
              Discover handpicked domestic and international holiday packages
              with unbeatable prices, premium stays, sightseeing and exciting
              experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="hidden gap-3 md:flex">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold transition hover:bg-gold hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold transition hover:bg-gold hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="-ml-4 flex">
            {packageOffers.map((offer) => (
              <div
                key={offer.id}
                className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%] xl:flex-[0_0_33.333%]"
              >
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-gold shadow-lg">
                      {offer.tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="min-h-[56px] text-2xl font-bold text-stone-900">
                      {offer.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-6 text-stone-600">
                      {offer.description}
                    </p>

                    <div className="mt-6 border-t border-stone-100 pt-5">
                      <button
                        type="button"
                        className="flex items-center gap-2 rounded-lg bg-gold px-5 py-3 font-bold text-white transition hover:bg-[#c88912]"
                      >
                        {offer.button}

                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="mt-8 flex justify-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold text-gold"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold text-gold"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
