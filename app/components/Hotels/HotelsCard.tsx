import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";

interface HotelCardProps {
  name: string;
  slug: string;
  city: string;
  location: string;
  image: string;
  rating: number;
  price: number;
}

export default function HotelsCard({
  name,
  slug,
  city,
  location,
  image,
  rating,
  price,
}: HotelCardProps) {
  return (
    <Link
      href={`/hotel/${city}/${slug}`}
      className="group block overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Rating */}
        <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm font-bold text-stone-800 shadow-sm">
          <Star className="h-4 w-4 fill-gold text-gold" />
          {rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Hotel Name */}
        <h3 className="text-2xl font-bold leading-tight text-stone-900">
          {name}
        </h3>

        {/* Location */}
        <div className="mt-3 flex items-center gap-2 text-base text-stone-600">
          <MapPin className="h-5 w-5 shrink-0 text-gold" />
          <span>{location}</span>
        </div>

        {/* Amenities */}
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-stone-100 px-3 py-1.5 text-xs font-medium text-stone-700">
            Free WiFi
          </span>

          <span className="rounded-full bg-stone-100 px-3 py-1.5 text-xs font-medium text-stone-700">
            Pool
          </span>

          <span className="rounded-full bg-stone-100 px-3 py-1.5 text-xs font-medium text-stone-700">
            Spa
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-end justify-between gap-4">
          {/* Price */}
          <div>
            <p className="text-sm text-stone-500">Starting from</p>

            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-stone-900">
                ₹{price.toLocaleString()}
              </span>

              <span className="text-sm text-stone-500">/ night</span>
            </div>
          </div>

          {/* Book Button */}
          <span className="flex shrink-0 items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-white transition-all duration-300 group-hover:bg-[#c88912]">
            Book Now
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
