import { Car, Fuel, Luggage, Settings, Users } from "lucide-react";

const PHONE_NUMBER = "+916390008503";

type SuvModel = {
  name: string;
  tagline: string;
  image: string;
  fuel: string;
  transmission: string;
  seats: number;
  bags: number;
  oneWayFare: number;
  roundTripFare: number;
  badge?: string;
  popular?: boolean;
};

const SUVS: SuvModel[] = [
  {
    name: "Maruti Suzuki Ertiga",
    tagline: "The Smart Choice for Groups",
    image: "/ertiga_white.jpg",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 6,
    bags: 3,
    oneWayFare: 1800,
    roundTripFare: 3300,
    badge: "Most Popular",
    popular: true,
  },
  {
    name: "Hyundai Creta",
    tagline: "Compact SUV with Premium Features",
    image: "/Creta.avif",
    fuel: "Diesel / Petrol",
    transmission: "Automatic / Manual",
    seats: 5,
    bags: 3,
    oneWayFare: 2400,
    roundTripFare: 4400,
    badge: "Compact SUV",
  },
  {
    name: "Toyota Innova",
    tagline: "The Trusted Workhorse",
    image: "/innova.avif",
    fuel: "Diesel",
    transmission: "Manual",
    seats: 6,
    bags: 4,
    oneWayFare: 2200,
    roundTripFare: 4000,
  },
  {
    name: "Innova Crysta",
    tagline: "Premium Comfort & Space",
    image: "/innova.avif",
    fuel: "Diesel",
    transmission: "Manual",
    seats: 6,
    bags: 5,
    oneWayFare: 2800,
    roundTripFare: 5000,
    badge: "Premium",
  },
];

export default function SuvFleetDetails() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* ===== Header ===== */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Our Fleet
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Choose Your Preferred SUV Model
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            From the economical Ertiga to the luxurious Innova Hycross — every
            SUV is air-conditioned, sanitized and driven by verified
            professionals.
          </p>
        </div>

        {/* ===== Fleet Grid ===== */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SUVS.map((suv) => (
            <article
              key={suv.name}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                suv.popular
                  ? "border-gold"
                  : "border-slate-200 hover:border-gold/40"
              }`}
            >
              {/* ===== Badge ===== */}
              {suv.badge && (
                <span className="absolute right-4 top-4 z-10 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-md">
                  {suv.badge}
                </span>
              )}

              {/* ===== Image Area (controlled by const only) ===== */}
              <div className="h-40 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                {suv.image ? (
                  <img
                    src={suv.image}
                    alt={`${suv.name} SUV taxi for Noida to Delhi`}
                    className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Car
                      size={64}
                      className="text-slate-300 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
              </div>

              {/* ===== Content ===== */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-slate-900">{suv.name}</h3>
                <p className="mt-1 text-sm font-medium text-gold">
                  {suv.tagline}
                </p>

                {/* ===== Specs Grid ===== */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Users size={16} className="shrink-0 text-gold" />
                    <span>{suv.seats} Seats</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Luggage size={16} className="shrink-0 text-gold" />
                    <span>{suv.bags} Bags</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Fuel size={16} className="shrink-0 text-gold" />
                    <span>{suv.fuel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Settings size={16} className="shrink-0 text-gold" />
                    <span>{suv.transmission}</span>
                  </div>
                </div>

                {/* ===== Divider ===== */}
                <div className="my-4 border-t border-slate-200" />

                {/* ===== Pricing ===== */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">One-Way</span>
                    <span className="text-lg font-bold text-slate-900">
                      ₹{suv.oneWayFare.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Round Trip</span>
                    <span className="text-lg font-bold text-gold">
                      ₹{suv.roundTripFare.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* ===== CTA ===== */}
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-gold/10 py-3 text-sm font-bold text-gold transition-all duration-300 hover:bg-gold hover:text-white"
                >
                  Book {suv.name.split(" ").pop()}
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
