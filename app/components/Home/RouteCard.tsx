import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Route } from "lucide-react";

interface RouteCardProps {
  from: string;
  to: string;
  distance: string;
  duration: string;
  image: string;
  popular: boolean;
}

// Helper function to format city names for URLs
const generateSlug = (city: string) => city.toLowerCase().replace(/\s+/g, "-");

export default function RouteCard({
  from,
  to,
  distance,
  duration,
  image,
  popular,
}: RouteCardProps) {
  // Generate the dynamic URL for this specific route
  const routeUrl = `/route/${generateSlug(from)}-to-${generateSlug(to)}-taxi`;

  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-[280px] overflow-hidden">
        <Image
          src={image}
          alt={`${from} to ${to}`}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {popular && (
          <span className="absolute left-4 top-4 rounded-full bg-gold px-4 py-1 text-sm font-semibold text-white">
            Popular
          </span>
        )}

        <div className="absolute bottom-5 left-5 text-white">
          <h3 className="text-2xl font-bold">{from}</h3>
          <ArrowRight className="my-2" />
          <h3 className="text-2xl font-bold">{to}</h3>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="flex items-center gap-3 text-gray-700">
          <Route size={20} className="text-gold" />
          <span>{distance}</span>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <Clock3 size={20} className="text-gold" />
          <span>{duration}</span>
        </div>

        {/* Updated to use the dynamic route URL */}
        <Link
          href={routeUrl}
          className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Book This Route
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}