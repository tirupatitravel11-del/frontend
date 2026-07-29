import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { capitalizeFirstLetter } from "@/app/utils/commonfunction";


export default function OutstationRoutes({data}:any) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-gold">
            Popular Outstation Routes
          </p>

          <h2 className="mt-3 text-4xl font-bold text-stone-900 md:text-5xl">
            Outstation Cab from {capitalizeFirstLetter(data.cityName)}
          </h2>

          <p className="mt-5 text-lg leading-8 text-stone-600">
            Book reliable outstation cabs from {capitalizeFirstLetter(data.cityName)} to popular destinations
            across Uttar Pradesh and nearby cities. Choose your destination and
            get a comfortable cab with experienced drivers.
          </p>
        </div>

        {/* Route Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data?.routes.map((route:any, index:any) => (
            <div
              key={index}
              // href={route.href}
              className="group rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
            >
              {/* From */}
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-stone-500">
                <MapPin className="h-4 w-4 text-gold" />
                From {capitalizeFirstLetter(data.cityName)}
              </div>

              {/* Destination */}
              <h3 className="mt-8 text-2xl font-bold text-stone-900 transition-colors duration-300 group-hover:text-gold">
                To: {route.toCity}
              </h3>

              {/* Price */}
              <p className="mt-8 text-2xl font-bold text-stone-900">
                ₹{route.startingFare}
              </p>

              <p className="mt-1 text-sm text-stone-500">Starting fare</p>

              {/* Button */}
              <div className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-4 font-semibold text-stone-900 transition-all duration-300 group-hover:bg-gold-600">
                Book Now
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Region Hub Link */}
        <div className="mt-12 text-center">
          <Link
            href="/uttar-pradesh-taxi"
            className="inline-flex items-center gap-2 font-semibold text-stone-900 transition-colors hover:text-gold"
          >
            Explore All Uttar Pradesh Routes
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
