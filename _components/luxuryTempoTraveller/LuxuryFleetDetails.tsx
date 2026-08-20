import { Armchair, Fuel, Luggage, Users } from "lucide-react";

const PHONE_NUMBER = "+916390008503";

type TempoModel = {
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

const TEMPO_TRAVELLERS: TempoModel[] = [
  {
    name: "12 Seater Tempo Traveller",
    tagline: "Perfect for Family Trips",
    image: "/12-seater-tempo-traveller.webp",
    fuel: "Diesel",
    seats: "12+1",
    seatingPlan: "2*1",
    bags: 6,
    localTourFare: 5500,
    perKmFare: 25,
    badge: "Most Popular",
    popular: true,
  },
  {
    name: "16 Seater Tempo Traveller",
    tagline: "Ideal for Group Tours & Yatras",
    image: "/16-seater-tempo-traveller.webp",
    fuel: "Diesel",
    seats: "16+1",
    seatingPlan: "2*2",
    bags: 8,
    localTourFare: 6500,
    perKmFare: 28,
  },
  {
    name: "20 Seater Tempo Traveller",
    tagline: "Best for Weddings & Large Groups",
    image: "/20-seater-tempo.jpg",
    fuel: "Diesel",
    seats: "20+1",
    seatingPlan: "2*2",
    bags: 10,
    localTourFare: 7500,
    perKmFare: 30,
    badge: "Wedding Favourite",
  },
  {
    name: "24 Seater Tempo Traveller",
    tagline: "Maximum Space for Corporate & Events",
    image: "/24-seater-tempo.jpg",
    fuel: "Diesel",
    seats: "24+1",
    seatingPlan: "2*2",
    bags: 12,
    localTourFare: 8500,
    perKmFare: 32,
    badge: "Max Capacity",
  },
];

export default function LuxuryFleetDetails() {
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Header ===== */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Our Luxury Fleet
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Choose Your Preferred Tempo Traveller
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            All our Luxury Tempo Travellers come with Maharaja pusher seats,
            powerful AC, LED TV and premium music system — well-maintained and
            driven by experienced professionals. Select the model that suits
            your group size.
          </p>
        </div>

        {/* ===== Fleet Grid ===== */}
        <div className="grid gap-5 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
          {TEMPO_TRAVELLERS.map((van) => (
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
                <span className="absolute right-4 top-4 z-10 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md sm:text-[11px]">
                  {van.badge}
                </span>
              )}

              {/* ===== Image ===== */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100 sm:h-52">
                <img
                  src={van.image}
                  alt={`${van.name} luxury interior`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* ===== Content ===== */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  {van.name}
                </h3>

                <p className="mt-1.5 text-sm font-medium text-gold sm:text-base">
                  {van.tagline}
                </p>

                {/* ===== Specs Grid ===== */}
                <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
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
                <div className="my-5 border-t border-slate-200" />

                {/* ===== Pricing (pushed to bottom) ===== */}
                <div className="mt-auto flex items-center justify-between gap-3">
                  <span className="text-sm text-slate-500">
                    Local Tour Fare
                  </span>

                  <span className="text-lg font-bold text-slate-900">
                    ₹{van.localTourFare.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* ===== Pill CTA Button ===== */}
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold/10 py-3 text-sm font-bold text-gold transition-all duration-300 hover:bg-gold hover:text-white"
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