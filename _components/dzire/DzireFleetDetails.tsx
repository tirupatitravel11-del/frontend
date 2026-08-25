import { Fuel, Luggage, Users, Zap } from "lucide-react";

const PHONE_NUMBER = "+916390008503";

type DzireModel = {
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

const DZIRE_FLEET: DzireModel[] = [
  {
    name: "Maruti Suzuki Swift Dzire",
    tagline: "Reliable, Comfortable & Economical",
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
];

export default function DzireFleetDetails({fares}: any) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Header ===== */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Our Dzire Fleet
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Maruti Suzuki Swift Dzire Taxi
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            Travel comfortably from Noida to Delhi in a well-maintained,
            air-conditioned Swift Dzire. It is an ideal choice for families,
            couples, business travellers and airport transfers.
          </p>
        </div>

        {/* ===== Fleet Grid ===== */}
        <div className="mx-auto max-w-xl">
          {DZIRE_FLEET.map((car) => (
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
                <span className="absolute right-3 top-3 z-10 rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md sm:right-4 sm:top-4 sm:px-3 sm:text-[11px]">
                  {car.badge}
                </span>
              )}

              {/* ===== Image ===== */}
              <div className="relative flex h-48 w-full items-center justify-center overflow-hidden bg-white sm:h-60">
                <img
                  src={car.image}
                  alt={`${car.name} taxi from Noida to Delhi`}
                  className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105 sm:p-4"
                />
              </div>

              {/* ===== Content ===== */}
              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                  {car.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-gold">
                  {car.tagline}
                </p>

                {/* ===== Specs Grid ===== */}
                <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-4">
                  {/* Seats */}
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Users
                      size={16}
                      className="shrink-0 text-gold"
                    />

                    <span>{car.seats} Seats</span>
                  </div>

                  {/* Bags */}
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Luggage
                      size={16}
                      className="shrink-0 text-gold"
                    />

                    <span>{car.bags} Bags</span>
                  </div>

                  {/* Fuel */}
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Fuel
                      size={16}
                      className="shrink-0 text-gold"
                    />

                    <span>{car.fuel}</span>
                  </div>

                  {/* Boot Space */}
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Zap
                      size={16}
                      className="shrink-0 text-gold"
                    />

                    <span>{car.bootSpace}</span>
                  </div>
                </div>

                {/* ===== Divider ===== */}
                <div className="my-4 border-t border-slate-200 sm:my-5" />

                {/* ===== Pricing ===== */}
                <div className="space-y-2">
                  {/* One Way */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-500 sm:text-sm">
                      One-Way Fare
                    </span>

                    <span className="text-base font-bold text-slate-900 sm:text-lg">
                      ₹{fares.oneWayPrice.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Round Trip */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-500 sm:text-sm">
                      Round-Trip Fare
                    </span>

                    <span className="text-base font-bold text-gold sm:text-lg">
                      ₹{fares.roundTripPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* ===== CTA ===== */}
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold/10 py-3 text-sm font-bold text-gold transition-all duration-300 hover:bg-gold hover:text-white sm:mt-6"
                >
                  Book Swift Dzire
                  <span className="text-lg leading-none">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ===== Bottom Note ===== */}
        <p className="mt-8 text-center text-xs leading-5 text-slate-500 sm:mt-10 sm:text-sm">
          * Fares include fuel, driver allowance and AC. Tolls, parking and
          applicable state taxes are billed at actuals.
        </p>
      </div>
    </section>
  );
}