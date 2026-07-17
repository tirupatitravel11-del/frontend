"use client";

import Image from "next/image";
import { ArrowRight, Clock3, Star } from "lucide-react";

interface Props {
  title: string;
  image: string;
  duration: string;
  price: string;
  rating: number;
}

export default function PackageCard({
  title,
  image,
  duration,
  price,
  rating,
}: Props) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-45 overflow-hidden">
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
        {/* Fixed title height */}
        <h3 className="min-h-[72px] text-2xl font-bold leading-tight text-stone-900">
          {title}
        </h3>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2 text-gold">
          <Star size={18} fill="currentColor" className="text-gold" />
          <span className="font-medium">{rating}</span>
        </div>

        {/* Duration */}
        <div className="mt-4 flex min-h-[28px] items-center gap-2 text-stone-600">
          <Clock3 size={18} />
          <span>{duration}</span>
        </div>

        {/* Price */}
        <div className="mt-6 min-h-[95px]">
          <p className="text-sm text-stone-500">Starting From</p>

          <h2 className="mt-1 text-4xl font-bold text-gold">{price}</h2>
        </div>

        {/* Button */}
        <button className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3 font-semibold text-white transition-all duration-300 hover:opacity-90">
          View Package
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}
