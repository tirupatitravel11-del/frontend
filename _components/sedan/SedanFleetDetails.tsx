import { Car, Fuel, Luggage, Users, Zap } from "lucide-react";

const PHONE_NUMBER = "+916390008503";

type SedanModel = {
  name: string;
  tagline: string;
  image: string;
  fuel: string;
  bootSpace: string;
  seats: number;
  bags: number;
  oneWayFare: number;
  roundTripFare: number;
  badge?: string;
  popular?: boolean;
};

const SEDANS: SedanModel[] = [
  {
    name: "Maruti Swift Dzire",
    tagline: "The Reliable & Economical Choice",
    image: "/dezire_white.png",
    fuel: "CNG / Petrol",
    bootSpace: "378 Liters",
    seats: 4,
    bags: 3,
    oneWayFare: 1599,
    roundTripFare: 2699,
    badge: "Most Popular",
    popular: true,
  },
  {
    name: "Honda Amaze",
    tagline: "Best-in-Class Boot Space",
    image: "/amaze.webp",
    fuel: "Petrol / Diesel",
    bootSpace: "420 Liters",
    seats: 4,
    bags: 3,
    oneWayFare: 1649,
    roundTripFare: 2749,
  },
  {
    name: "Toyota Etios",
    tagline: "Reliable & Comfortable Sedan",
    image: "/etios.avif",
    fuel: "Diesel / Petrol",
    bootSpace: "595 Liters",
    seats: 4,
    bags: 3,
    oneWayFare: 1699,
    roundTripFare: 2799,
  },
];

export default function SedanFleetDetails() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* ===== Header ===== */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Our Fleet
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Choose Your Preferred Sedan Model
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            All our Sedans are well-maintained, air-conditioned, and driven by
            experienced professionals. Select the model that suits your needs.
          </p>
        </div>

        {/* ===== Fleet Grid ===== */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SEDANS.map((car) => (
            <article
              key={car.name}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                car.popular
                  ? "border-gold"
                  : "border-slate-200 hover:border-gold/40"
              }`}
            >
              {/* ===== Badge ===== */}
              {car.badge && (
                <span className="absolute right-4 top-4 z-10 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-md">
                  {car.badge}
                </span>
              )}

              <div className="relative flex h-52 w-full items-center justify-center overflow-hidden bg-white">
                <img
                  src={car.image}
                  alt={`${car.name} taxi`}
                  className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* ===== Content ===== */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-slate-900">{car.name}</h3>
                <p className="mt-1 text-sm font-medium text-gold">
                  {car.tagline}
                </p>

                {/* ===== Specs Grid ===== */}
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Users size={16} className="text-gold" />
                    <span>{car.seats} Seats</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Luggage size={16} className="text-gold" />
                    <span>{car.bags} Bags</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Fuel size={16} className="text-gold" />
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Zap size={16} className="text-gold" />
                    <span>{car.bootSpace}</span>
                  </div>
                </div>

                {/* ===== Divider ===== */}
                <div className="my-5 border-t border-slate-200" />

                {/* ===== Pricing ===== */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">One-Way Fare</span>
                    <span className="text-lg font-bold text-slate-900">
                      ₹{car.oneWayFare.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                      Round-Trip Fare
                    </span>
                    <span className="text-lg font-bold text-gold">
                      ₹{car.roundTripFare.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* ===== CTA ===== */}
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gold/10 py-3 text-sm font-bold text-gold transition-all duration-300 hover:bg-gold hover:text-white"
                >
                  Book {car.name.split(" ").pop()}
                  <span className="text-lg leading-none">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ===== Bottom Note ===== */}
        <p className="mt-10 text-center text-sm text-slate-500">
          * Fares include fuel, driver allowance, and AC. Tolls, parking, and
          state taxes are billed at actuals.
        </p>
      </div>
    </section>
  );
}
