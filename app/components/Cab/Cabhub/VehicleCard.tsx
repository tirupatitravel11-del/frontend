import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Luggage,
  Snowflake,
  Users,
} from "lucide-react";

interface VehicleCardProps {
  id: number;
  category: string;
  name: string;
  image: string;
  seating: string;
  features: string[];
  buttonText: string;
  slug: string;
}

export default function VehicleCard({
  category,
  name,
  image,
  seating,
  features,
  buttonText,
  slug,
}: VehicleCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Category */}
        <span className="absolute left-5 top-5 rounded-md bg-gold px-3 py-1.5 text-sm font-bold text-white">
          {category}
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

        {/* Vehicle Details */}
        <div className="mt-6 grid grid-cols-2 gap-5">
          <div className="flex items-center gap-2 text-stone-600">
            <Users size={20} className="text-gold" />
            <span>{seating}</span>
          </div>

          <div className="flex items-center gap-2 text-stone-600">
            <Snowflake size={20} className="text-gold" />
            <span>Full AC</span>
          </div>

          <div className="flex items-center gap-2 text-stone-600">
            <Luggage size={20} className="text-gold" />
            <span>Luggage Space</span>
          </div>

          <div className="flex items-center gap-2 text-stone-600">
            <CheckCircle2 size={20} className="text-gold" />
            <span>24/7 Verified</span>
          </div>
        </div>

        {/* Custom Features */}
        {features.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {features.map((feature) => (
              <span
                key={feature}
                className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-600"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Book Button */}
        <Link
          href={`/cabs/${slug}`}
          className="mt-7 flex items-center justify-center gap-2 rounded-2xl bg-gold px-5 py-4 font-semibold text-white shadow-md transition "
        >
          {buttonText}
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