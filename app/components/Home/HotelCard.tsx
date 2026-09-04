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

export default function HotelCard({
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
      className="
        group
        block
        overflow-hidden
        rounded-[30px]
        border
        border-stone-200
        bg-white
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="relative h-[280px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Badge */}
        <span className="absolute left-5 top-5 rounded-full bg-gold px-5 py-2 text-sm font-bold text-white">
          Featured
        </span>

        {/* Rating */}
        <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-stone-800 backdrop-blur">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          {rating}
        </div>

        {/* Hotel Name */}
        <div className="absolute bottom-7 left-6 right-6">
          <h3 className="text-[2rem] font-extrabold leading-tight text-white">
            {name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Location */}
        <div className="flex items-center gap-3 text-lg text-stone-600">
          <MapPin className="h-5 w-5 text-gold" />
          <span>{location}</span>
        </div>

        {/* Price */}
        <div className="mt-4">
          <span className="text-3xl font-bold text-stone-900">
            ₹{price.toLocaleString()}
          </span>
          <span className="ml-2 text-stone-500">/ night</span>
        </div>

        {/* Button */}
        <div className="mt-8">
          <div className="flex w-full items-center justify-center gap-3 rounded-full bg-gold py-4 text-lg font-bold text-white transition-colors duration-300 group-hover:bg-[#c88912]">
            Book Now
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
