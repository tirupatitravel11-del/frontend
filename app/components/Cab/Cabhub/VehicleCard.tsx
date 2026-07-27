import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Luggage,
  Snowflake,
  Users,
  Fuel,
  Settings2,
} from "lucide-react";

interface VehicleCardProps {
  _id: string;
  name: string;
  slug: string;
  brand: string;
  description?: string;
  image?: string;
  passengerCapacity: number;
  luggageCapacity: number;
  airCondition: boolean;
  fuelType: "Petrol" | "Diesel" | "CNG" | "Electric";
  transmission: "Manual" | "Automatic";
  tags: string[];
}

export default function VehicleCard({
  name,
  slug,
  brand,
  description,
  image,
  passengerCapacity,
  luggageCapacity,
  airCondition,
  fuelType,
  transmission,
  tags,
}: VehicleCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-stone-200 text-stone-500">
            No Image
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Brand */}
        <span className="absolute left-5 top-5 rounded-md bg-gold px-3 py-1.5 text-sm font-bold text-white">
          {brand}
        </span>

        {/* Verified */}
        <span className="absolute right-5 top-5 flex items-center gap-1 rounded-md bg-white px-3 py-1.5 text-xs font-bold text-stone-900">
          <CheckCircle2 size={14} className="text-gold" />
          VERIFIED
        </span>
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="text-2xl font-bold text-stone-900">{name}</h3>

        {description && (
          <p className="mt-2 line-clamp-2 text-sm text-stone-600">
            {description}
          </p>
        )}

        {/* Vehicle Details */}
        <div className="mt-6 grid grid-cols-2 gap-5">
          <div className="flex items-center gap-2 text-stone-600">
            <Users size={20} className="text-gold" />
            <span>{passengerCapacity} Passengers</span>
          </div>

          <div className="flex items-center gap-2 text-stone-600">
            <Luggage size={20} className="text-gold" />
            <span>{luggageCapacity} Bags</span>
          </div>

          <div className="flex items-center gap-2 text-stone-600">
            <Snowflake size={20} className="text-gold" />
            <span>{airCondition ? "Full AC" : "Non AC"}</span>
          </div>

          <div className="flex items-center gap-2 text-stone-600">
            <Fuel size={20} className="text-gold" />
            <span>{fuelType}</span>
          </div>

          <div className="flex items-center gap-2 text-stone-600">
            <Settings2 size={20} className="text-gold" />
            <span>{transmission}</span>
          </div>
        </div>

        {/* Tags */}
        {tags?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Book Button */}
        <Link
          href={`/cabs/${slug}`}
          className="mt-7 flex items-center justify-center gap-2 rounded-2xl bg-gold px-5 py-4 font-semibold text-white shadow-md transition"
        >
          View Details
          <ArrowRight size={20} />
        </Link>

        {/* Call Button */}
        <a
          href="tel:8448445504"
          className="mt-4 block rounded-2xl border border-gold px-5 py-4 text-center font-semibold text-stone-900 transition hover:bg-gold hover:text-white"
        >
          Call 8448445504
        </a>
      </div>
    </div>
  );
}
