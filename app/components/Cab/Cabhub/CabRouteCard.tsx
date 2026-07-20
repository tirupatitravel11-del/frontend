import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, MapPin, Route } from "lucide-react";

interface CabRouteCardProps {
  origin: string;
  destination: string;
  slug: string;
  distance: string;
  duration: string;
  image: string;
  vehicles: Array<{
    type: string;
    name: string;
    seating: number;
    oneWayPrice: number;
    roundTripPrice: number;
  }>;
}

export default function CabRouteCard({
  origin,
  destination,
  slug,
  distance,
  duration,
  image,
  vehicles,
}: CabRouteCardProps) {
  return (
    <Link
      href={`/cabs/${slug}`}
      className="
        group
        block
        min-h-130
        overflow-hidden
        rounded-xl
        border
        border-stone-200
        bg-white
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-gold
        hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        {/* <Image
          src={image}
          alt={`${origin} to ${destination} cab`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        /> */}

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

        {/* Route Title */}
        <div className="absolute bottom-6 left-6 right-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Cab Route
          </p>

          <h3 className="text-2xl font-extrabold text-white">
            {origin} → {destination}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        {/* Route Information */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-stone-600">
            <Route className="h-5 w-5 text-gold" />

            <div>
              <p className="text-xs text-stone-500">Distance</p>

              <p className="font-semibold text-stone-900">{distance}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-stone-600">
            <Clock3 className="h-5 w-5 text-gold" />

            <div>
              <p className="text-xs text-stone-500">Duration</p>

              <p className="font-semibold text-stone-900">{duration}</p>
            </div>
          </div>
        </div>

        {/* Available Vehicles */}
        <div className="mt-6">
          <p className="text-sm font-semibold text-stone-800">
            Available Vehicles
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {vehicles.map((vehicle) => (
              <span
                key={`${vehicle.type}-${vehicle.name}`}
                className="
                  rounded-full
                  bg-stone-100
                  px-3
                  py-1
                  text-sm
                  text-stone-600
                  transition-colors
                  group-hover:bg-gold/10
                "
              >
                {vehicle.type}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-7 flex items-center justify-between rounded-full bg-gold px-6 py-3 font-bold text-white transition-colors duration-300 group-hover:bg-[#c88912]">
          <span>View Route</span>

          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
