"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Clock, MapPin, Star, Users } from "lucide-react";

export const featuredExperiences = [
  {
    id: 1,
    title: "Goa Beach Water Sports",
    location: "Goa, India",
    duration: "4 Hours",
    groupSize: "2-6 people",
    price: "₹2,500",
    rating: 4.9,
    image: "/Packages_goa.jpg",
    tag: "Adventure",
  },
  {
    id: 2,
    title: "Kashmir Shikara Ride & Valley Tour",
    location: "Kashmir, India",
    duration: "6 Hours",
    groupSize: "2-8 people",
    price: "₹3,200",
    rating: 5.0,
    image: "/package_kashmir.jpg",
    tag: "Nature",
  },
  {
    id: 3,
    title: "Kerala Backwater Houseboat Experience",
    location: "Alleppey, Kerala",
    duration: "24 Hours",
    groupSize: "2-6 people",
    price: "₹8,500",
    rating: 4.9,
    image: "/package_kerala.jpg",
    tag: "Luxury",
  },
  {
    id: 4,
    title: "Leh Ladakh Mountain Expedition",
    location: "Leh Ladakh, India",
    duration: "Full Day",
    groupSize: "4-12 people",
    price: "₹6,500",
    rating: 5.0,
    image: "/package_leh.jpg",
    tag: "Adventure",
  },
  {
    id: 5,
    title: "Rajasthan Heritage & Cultural Walk",
    location: "Rajasthan, India",
    duration: "5 Hours",
    groupSize: "2-10 people",
    price: "₹2,800",
    rating: 4.8,
    image: "/package_rajasthan.jpg",
    tag: "Cultural",
  },
];

export default function FeaturedExperiences() {
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
              Experiences
            </p>

            <h2 className="mt-2 text-3xl font-bold text-stone-900 md:text-4xl">
              Featured Experiences
            </h2>

            <p className="mt-4 text-base text-stone-600 md:text-lg">
              Discover our most loved activities and unique cultural encounters.
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
            {featuredExperiences.map((exp) => (
              <div
                key={exp.id}
                className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_50%] sm:px-3 lg:flex-[0_0_33.333%]"
              >
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
                    {/* Tag */}
                    <div className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-stone-900 backdrop-blur-sm">
                      {exp.tag}
                    </div>
                    
                    {/* Rating */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 backdrop-blur-sm">
                      <Star className="h-3 w-3 fill-gold text-gold" />
                      <span className="text-xs font-bold">{exp.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-stone-900 group-hover:text-gold transition-colors">
                      {exp.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-1 text-sm text-stone-500">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </div>

                    {/* Meta */}
                    <div className="mt-4 flex items-center gap-3 text-xs text-stone-600">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-gold" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5 text-gold" />
                        {exp.groupSize}
                      </span>
                    </div>

                    {/* Footer */}
                    <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
                      <div>
                        <p className="text-xs text-stone-500">Starting from</p>
                        <p className="text-lg font-bold text-stone-900">{exp.price}</p>
                      </div>
                      <Link
                        href={`/experiences/${exp.id}`}
                        className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-amber-500"
                      >
                        Book Now
                      </Link>
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