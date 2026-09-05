import { Fuel, Luggage, Users, Zap } from "lucide-react";

const PHONE_NUMBER = "+916390008503";

type TempoTravellerModel = {
  name: string;
  tagline: string;
  image: string;
  fuel: string;
  luggageCapacity: string;
  seats: number;
  bags: number;
  badge?: string;
  popular?: boolean;
};

const TEMPO_TRAVELLERS: TempoTravellerModel[] = [
  {
    name: "9 Seater Tempo Traveller",
    tagline: "Perfect for Small Group Travel",
    image: "/tempo1.jpeg",
    fuel: "Diesel",
    luggageCapacity: "4 Large Bags",
    seats: 9,
    bags: 4,
    badge: "Most Popular",
    popular: true,
  },
  {
    name: "12 Seater Tempo Traveller",
    tagline: "Comfortable Choice for Families",
    image: "/tempo2.jpeg",
    fuel: "Diesel",
    luggageCapacity: "6 Large Bags",
    seats: 12,
    bags: 6,
  },
  {
    name: "16 Seater Tempo Traveller",
    tagline: "Ideal for Large Group Trips",
    image: "/tempo1.jpeg",
    fuel: "Diesel",
    luggageCapacity: "8 Large Bags",
    seats: 16,
    bags: 8,
  },
  {
    name: "20 Seater Tempo Traveller",
    tagline: "Best for Bigger Groups & Tours",
    image: "/tempo2.jpeg",
    fuel: "Diesel",
    luggageCapacity: "10 Large Bags",
    seats: 20,
    bags: 10,
  },
];

export default function TempoTravellerFleetDetailsTaxi() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Header ===== */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Our Fleet
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Choose Your Preferred Tempo Traveller
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            Our Tempo Travellers are spacious, air-conditioned, well-maintained
            and driven by experienced professionals. Choose the vehicle size
            that best suits your group.
          </p>
        </div>

        {/* ===== Fleet Grid ===== */}
        <div className="grid gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {TEMPO_TRAVELLERS.map((vehicle) => (
            <article
              key={vehicle.name}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                vehicle.popular
                  ? "border-gold"
                  : "border-slate-200 hover:border-gold/40"
              }`}
            >
              {/* ===== Badge ===== */}
              {vehicle.badge && (
                <span className="absolute right-3 top-3 z-10 rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md sm:right-4 sm:top-4 sm:px-3 sm:text-[11px]">
                  {vehicle.badge}
                </span>
              )}

              {/* ===== Image ===== */}
              <div className="relative flex h-44 w-full items-center justify-center overflow-hidden bg-white sm:h-52">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.name} taxi`}
                  className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105 sm:p-3"
                />
              </div>

              {/* ===== Content ===== */}
              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                  {vehicle.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-gold">
                  {vehicle.tagline}
                </p>

                {/* ===== Specs Grid ===== */}
                <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-4">
                  {/* Seats */}
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Users
                      size={16}
                      className="shrink-0 text-gold"
                    />
                    <span>{vehicle.seats} Seats</span>
                  </div>

                  {/* Bags */}
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Luggage
                      size={16}
                      className="shrink-0 text-gold"
                    />
                    <span>{vehicle.bags} Bags</span>
                  </div>

                  {/* Fuel */}
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Fuel
                      size={16}
                      className="shrink-0 text-gold"
                    />
                    <span>{vehicle.fuel}</span>
                  </div>

                  {/* AC */}
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Zap
                      size={16}
                      className="shrink-0 text-gold"
                    />
                    <span>AC Available</span>
                  </div>
                </div>

                {/* ===== Luggage Capacity ===== */}
                <div className="mt-3 text-xs text-slate-500">
                  Luggage Capacity:{" "}
                  <span className="font-medium text-slate-700">
                    {vehicle.luggageCapacity}
                  </span>
                </div>

                {/* ===== Divider ===== */}
                <div className="my-4 border-t border-slate-200 sm:my-5" />

                {/* ===== CTA ===== */}
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold/10 py-3 text-sm font-bold text-gold transition-all duration-300 hover:bg-gold hover:text-white sm:mt-6"
                >
                  Book {vehicle.seats} Seater
                  <span className="text-lg leading-none">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ===== Bottom Note ===== */}
        <p className="mt-8 text-center text-xs leading-5 text-slate-500 sm:mt-10 sm:text-sm">
          * Fares are customized based on your exact route and dates. Call us for the best quote.
        </p>
      </div>
    </section>
  );
}