import { Armchair, Fuel, Luggage, Users } from "lucide-react";

const PHONE_NUMBER = "+916390008503";

type UrbaniaModel = {
  name: string;
  tagline: string;
  image: string;
  fuel: string;
  seats: string;
  seatingPlan: string;
  bags: number;
  localTourFare: number;
  perKmFare: number;
  badge?: string;
  popular?: boolean;
};

const URBANIAS: UrbaniaModel[] = [
  {
    name: "9 Seater Urbania",
    tagline: "Perfect for Small Groups",
    image: "/urbania/urbania-9-seater.png",
    fuel: "Diesel",
    seats: "9+1",
    seatingPlan: "1*1",
    bags: 5,
    localTourFare: 8500,
    perKmFare: 35,
    badge: "Most Popular",
    popular: true,
  },
  {
    name: "9 Seater Maharaja Urbania",
    tagline: "Luxury Recliner Experience",
    image: "/urbania/urbania-9-seater-maharaja.png",
    fuel: "Diesel",
    seats: "9+1",
    seatingPlan: "1*1",
    bags: 5,
    localTourFare: 11000,
    perKmFare: 45,
    badge: "Luxury",
  },
  {
    name: "12 Seater Urbania",
    tagline: "Ideal for Family Trips",
    image: "/urbania/urbania-12-seater.png",
    fuel: "Diesel",
    seats: "12+1",
    seatingPlan: "1*1",
    bags: 6,
    localTourFare: 8500,
    perKmFare: 35,
  },
  {
    name: "13 Seater Urbania",
    tagline: "Comfort for Mid-Size Groups",
    image: "/urbania/urbania-13-seater.png",
    fuel: "Diesel",
    seats: "13+1",
    seatingPlan: "2*1",
    bags: 7,
    localTourFare: 8500,
    perKmFare: 35,
  },
  {
    name: "16 Seater Urbania",
    tagline: "Best for Large Groups",
    image: "/urbania/urbania-16-seater.png",
    fuel: "Diesel",
    seats: "16+1",
    seatingPlan: "2*1",
    bags: 8,
    localTourFare: 9000,
    perKmFare: 37,
  },
  {
    name: "17 Seater Urbania",
    tagline: "Maximum Space & Comfort",
    image: "/urbania/urbania-17-seater.png",
    fuel: "Diesel",
    seats: "17+1",
    seatingPlan: "2*1",
    bags: 9,
    localTourFare: 9000,
    perKmFare: 37,
  },
];

export default function UrbaniaFleetDetails() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Header ===== */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Our Fleet
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Choose Your Preferred Urbania Model
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            All our Force Urbania vans are well-maintained, fully
            air-conditioned, and driven by experienced professionals. Select the
            model that suits your group size.
          </p>
        </div>

        {/* ===== Fleet Grid ===== */}
        <div className="grid gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {URBANIAS.map((van) => (
            <article
              key={van.name}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                van.popular
                  ? "border-gold"
                  : "border-slate-200 hover:border-gold/40"
              }`}
            >
              {/* ===== Badge ===== */}
              {van.badge && (
                <span className="absolute right-3 top-3 z-10 rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md sm:right-4 sm:top-4 sm:px-3 sm:text-[11px]">
                  {van.badge}
                </span>
              )}

              {/* ===== Image ===== */}
              <div className="relative h-44 w-full overflow-hidden sm:h-52">
                <img
                  src={van.image}
                  alt={`${van.name} interior`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* ===== Content ===== */}
              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                  {van.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-gold">
                  {van.tagline}
                </p>

                {/* ===== Specs Grid ===== */}
                <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Users size={16} className="shrink-0 text-gold" />
                    <span>{van.seats} Seats</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Armchair size={16} className="shrink-0 text-gold" />
                    <span>{van.seatingPlan} Seating</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Fuel size={16} className="shrink-0 text-gold" />
                    <span>{van.fuel}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Luggage size={16} className="shrink-0 text-gold" />
                    <span>{van.bags} Bags</span>
                  </div>
                </div>

                {/* ===== Divider ===== */}
                <div className="my-4 border-t border-slate-200 sm:my-5" />

                {/* ===== Pricing ===== */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-500 sm:text-sm">
                      Local Tour Fare
                    </span>

                    <span className="text-base font-bold text-slate-900 sm:text-lg">
                      ₹{van.localTourFare.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-500 sm:text-sm">
                      Fare Per Km
                    </span>

                    <span className="text-base font-bold text-gold sm:text-lg">
                      ₹{van.perKmFare}
                    </span>
                  </div> */}
                </div>

                {/* ===== CTA ===== */}
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold/10 py-3 text-sm font-bold text-gold transition-all duration-300 hover:bg-gold hover:text-white sm:mt-6"
                >
                  Book {van.seats.split("+")[0]} Seater
                  <span className="text-lg leading-none">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ===== Bottom Note ===== */}
        <p className="mt-8 text-center text-xs leading-5 text-slate-500 sm:mt-10 sm:text-sm">
          * Fares include fuel, driver allowance, and AC. Tolls, parking, and
          state taxes are billed at actuals.
        </p>
      </div>
    </section>
  );
}
