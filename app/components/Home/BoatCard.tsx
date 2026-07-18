"use client";

import Image from "next/image";
import { MapPin, Star, ArrowRight } from "lucide-react";

interface BoatCardProps {
  title: string;
  location: string;
  image: string;
  rating: number;
  price: number;
}

export default function BoatCard({
  title,
  location,
  image,
  rating,
  price,
}: BoatCardProps) {
  return (
    <div
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-stone-200
        bg-white
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-gold
        hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute left-4 top-4 rounded-full bg-gold px-4 py-1 text-sm font-semibold text-white">
          Featured
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mt-4 min-h-[64px] text-2xl font-bold leading-tight text-stone-900">
          {title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-stone-600">
          <MapPin size={18} />
          <span>{location}</span>
        </div>

        <div className="mt-6">
          <p className="text-sm text-stone-500">Starting From</p>

          <h2 className="text-xl font-bold text-gold">
            ₹{price.toLocaleString()}
          </h2>
        </div>

        <button className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3 font-semibold text-white transition hover:opacity-90">
          Book Boat Ride
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
