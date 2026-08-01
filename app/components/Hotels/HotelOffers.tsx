"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const hotelOffers = [
  {
    id: 1,
    image: "/save_more_hotels.jpg",
    tag: "LIMITED TIME OFFER",
    title: "Save More on Your Next Hotel Stay",
    description: "Get exclusive discounts on selected hotels across India.",
    button: "BOOK NOW",
  },
  {
    id: 2,
    image: "/summer_specia_hotels.jpg",
    tag: "SUMMER SPECIAL",
    title: "Make Your Summer Stay Extra Special",
    description: "Enjoy great savings on hotels at popular destinations.",
    button: "BOOK NOW",
  },
  {
    id: 3,
    image: "/relax_offer_hotel.jpg",
    tag: "WEEKEND DEAL",
    title: "Plan a Relaxing Weekend Getaway",
    description: "Book your weekend stay and enjoy special hotel prices.",
    button: "BOOK NOW",
  },
  {
    id: 4,
    image: "/save_more_onnext_hotel.jpg",
    tag: "SPECIAL DEAL",
    title: "Stay Longer, Save More",
    description: "Enjoy better prices when you plan an extended hotel stay.",
    button: "BOOK NOW",
  },
];

export default function HotelOffers() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex items-end justify-between gap-6">
          <div>
            <h2 className="mt-3 text-3xl font-bold text-stone-900 md:text-5xl">
              Offers You’ll Love
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
              Get more from your stay with exclusive hotel deals, seasonal
              discounts, and special offers.
            </p>
          </div>

          {/* Navigation */}
          <div className="hidden gap-3 md:flex">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold transition hover:bg-gold hover:text-white"
            >
              <ChevronLeft size={21} />
            </button>

            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold transition hover:bg-gold hover:text-white"
            >
              <ChevronRight size={21} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="-ml-4 flex">
            {hotelOffers.map((offer) => (
              <div
                key={offer.id}
                className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%] xl:flex-[0_0_33.333%]"
              >
                {/* Card */}
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* Image */}
                  <div className="relative h-52 w-full overflow-hidden bg-stone-100">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Tag */}
                    <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-gold shadow-md">
                      {offer.tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Title */}
                    <h3 className="min-h-[50px] text-xl font-bold leading-7 text-stone-900">
                      {offer.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 min-h-[40px] text-sm leading-6 text-stone-600">
                      {offer.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-auto border-t border-stone-100 pt-5">
                      <button
                        type="button"
                        className="flex items-center gap-2 font-bold text-gold transition-all hover:gap-3"
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
        <div className="mt-7 flex justify-center gap-3 md:hidden">
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
