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
    transmission: "Manual",
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
    <section className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* ===== Header ===== */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Our Fleet
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Choose Your Preferred SUV Model
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            From the economical Ertiga to the luxurious Innova Hycross — every
            SUV is air-conditioned, sanitized and driven by verified
            professionals.
          </p>
        </div>

        {/* ===== Fleet Grid ===== */}
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
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
                <span className="absolute right-3 top-3 z-10 rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md sm:right-4 sm:top-4 sm:px-3 sm:text-[11px]">
                  {suv.badge}
                </span>
              )}

              {/* ===== Image Area ===== */}
              <div className="h-36 w-full overflow-hidden bg-white sm:h-40">
                {suv.image ? (
                  <img
                    src={suv.image}
                    alt={`${suv.name} SUV taxi for Noida to Delhi`}
                    className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105 sm:p-4"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Car
                      size={56}
                      className="text-slate-300 transition-transform duration-500 group-hover:scale-110 sm:size-16"
                    />
                  </div>
                )}
              </div>

              {/* ===== Content ===== */}
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                  {suv.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-gold">
                  {suv.tagline}
                </p>

                {/* ===== Specs Grid ===== */}
                <div className="mt-4 grid grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="flex items-center gap-2 text-xs text-slate-600 sm:text-sm">
                    <Users size={15} className="shrink-0 text-gold sm:size-4" />
                    <span>{suv.seats} Seats</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-600 sm:text-sm">
                    <Luggage
                      size={15}
                      className="shrink-0 text-gold sm:size-4"
                    />
                    <span>{suv.bags} Bags</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-600 sm:text-sm">
                    <Fuel size={15} className="shrink-0 text-gold sm:size-4" />
                    <span>{suv.fuel}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-600 sm:text-sm">
                    <Settings
                      size={15}
                      className="shrink-0 text-gold sm:size-4"
                    />
                    <span>{suv.transmission}</span>
                  </div>
                </div>

                {/* ===== Divider ===== */}
                <div className="my-4 border-t border-slate-200" />

                {/* ===== Pricing ===== */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 sm:text-sm">
                      One-Way
                    </span>

                    <span className="text-base font-bold text-slate-900 sm:text-lg">
                      ₹{suv.oneWayFare.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 sm:text-sm">
                      Round Trip
                    </span>

                    <span className="text-base font-bold text-gold sm:text-lg">
                      ₹{suv.roundTripFare.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* ===== CTA ===== */}
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold/10 py-3 text-sm font-bold text-gold transition-all duration-300 hover:bg-gold hover:text-white"
                >
                  Book {suv.name.split(" ").pop()}
                  <span className="text-lg leading-none">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ===== Bottom Note ===== */}
        <p className="mt-8 text-center text-xs leading-6 text-slate-500 sm:mt-10 sm:text-sm">
          * Fares include fuel, driver allowance, and AC. Tolls, parking, and
          state taxes are billed at actuals.
        </p>
      </div>
    </section>
  );
}