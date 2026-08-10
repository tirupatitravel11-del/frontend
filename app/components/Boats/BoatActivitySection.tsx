"use client";

import { useEffect, useRef } from "react";

type BoatActivity = {
  title: string;
  description: string;
  image: string;
};

const PHONE_NUMBER = "+916390008503";

const activities: BoatActivity[] = [
  {
    title: "Sunrise Boat Ride",
    description:
      "Begin your morning with a peaceful cruise across calm waters and beautiful sunrise views.",
    image: "/boats/Morning_boat_ride.jpg",
  },
  {
    title: "Sunset Cruise",
    description:
      "Relax on the water as the day comes to an end with beautiful sunset views and a tranquil atmosphere.",
    image: "/boats/evening_boat_ride.jpg",
  },
  {
    title: "Celebration Cruise",
    description:
      "Make special moments memorable with music, decorations, and your favorite people on board.",
    image: "/boats/birthday_boat.jpeg",
  },
  {
    title: "Family Boat Experience",
    description:
      "Enjoy a relaxed ride with family and friends while taking in the views and spending quality time together.",
    image: "/boats/family_fun.jpg",
  },
  {
    title: "Private Boat Experience",
    description:
      "Enjoy an exclusive cruise with your loved ones in privacy, comfort, and complete relaxation.",
    image: "/boats/boat3.jpg",
  },
];

interface BoatActivitySectionProps {
  title?: string;
  subtitle?: string;
}

export default function BoatActivitySection({
  title = "Book Your Boat for the Following Activities",
  subtitle = "From peaceful cruises to special celebrations on the water — choose the experience that suits you best.",
}: BoatActivitySectionProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  /*
   * Each card = 430px
   * Gap = 24px
   *
   * 430 + 24 = 454
   *
   * 5 cards = 454 × 5 = 2270px
   */
  const CARD_WIDTH = 454;
  const TOTAL_WIDTH = CARD_WIDTH * activities.length;

  /*
   * Start in the middle copy.
   *
   * [activities] [activities] [activities]
   *                    ↑
   *                 START HERE
   */
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = TOTAL_WIDTH;
    }
  }, [TOTAL_WIDTH]);

  /*
   * Infinite scrolling
   */
  const handleScroll = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    /*
     * If user goes too far RIGHT,
     * silently move them one set backwards.
     */
    if (slider.scrollLeft >= TOTAL_WIDTH * 2) {
      slider.scrollLeft -= TOTAL_WIDTH;
    }

    /*
     * If user goes too far LEFT,
     * silently move them one set forwards.
     */
    if (slider.scrollLeft <= 0) {
      slider.scrollLeft += TOTAL_WIDTH;
    }
  };

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -CARD_WIDTH,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: CARD_WIDTH,
      behavior: "smooth",
    });
  };

  /*
   * Duplicate activities 3 times.
   */
  const infiniteActivities = [...activities, ...activities, ...activities];

  return (
    <section className="bg-white py-14">
      {/* ===== Header ===== */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
              Our Services
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {title}
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              {subtitle}
            </p>
          </div>

          {/* ===== Desktop Arrows ===== */}
          <div className="hidden shrink-0 gap-3 md:flex">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Previous activities"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-white text-gold transition-all duration-300 hover:bg-gold hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={scrollRight}
              aria-label="Next activities"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-white text-gold transition-all duration-300 hover:bg-gold hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ===== Mobile Arrows ===== */}
        <div className="mb-5 flex justify-end gap-3 md:hidden">
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Previous activities"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold text-gold transition hover:bg-gold hover:text-white"
          >
            ←
          </button>

          <button
            type="button"
            onClick={scrollRight}
            aria-label="Next activities"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold text-gold transition hover:bg-gold hover:text-white"
          >
            →
          </button>
        </div>

        {/* ===== Infinite Carousel ===== */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {infiniteActivities.map((activity, index) => (
            <article
              key={`${activity.title}-${index}`}
              className="group flex w-[340px] shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[390px] lg:w-[430px]"
            >
              {/* ===== Image ===== */}
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-gold shadow-md">
                  {String((index % activities.length) + 1).padStart(2, "0")} ·
                  EXPERIENCE
                </span>
              </div>

              {/* ===== Content ===== */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-bold leading-tight text-slate-900">
                  {activity.title}
                </h3>

                <p className="mt-4 min-h-[72px] text-[15px] leading-7 text-slate-600">
                  {activity.description}
                </p>

                <div className="my-5 border-t border-slate-200" />

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gold transition-all duration-300 hover:gap-3"
                >
                  Book Now
                  <span className="text-xl leading-none">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
