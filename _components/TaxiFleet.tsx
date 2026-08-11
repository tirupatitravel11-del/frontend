type Cab = {
  name: string;
  example: string;
  seats: number;
  luggage: number;
  oneWay: number;
  roundTrip: number;
  emoji: string;
  popular?: boolean;
};

const PHONE_NUMBER = "+916390008503";

const cabs: Cab[] = [
  {
    name: "Hatchback",
    example: "WagonR, Swift, i20",
    seats: 4,
    luggage: 2,
    oneWay: 1299,
    roundTrip: 2199,
    emoji: "🚗",
  },
  {
    name: "Sedan",
    example: "Swift Dzire, Honda Amaze",
    seats: 4,
    luggage: 3,
    oneWay: 1599,
    roundTrip: 2699,
    emoji: "🚘",
    popular: true,
  },
  {
    name: "SUV",
    example: "Ertiga, Carens, Innova",
    seats: 6,
    luggage: 4,
    oneWay: 2299,
    roundTrip: 3899,
    emoji: "🚙",
  },
  {
    name: "Premium SUV",
    example: "Innova Crysta",
    seats: 7,
    luggage: 5,
    oneWay: 2999,
    roundTrip: 4999,
    emoji: "🚐",
  },
];

interface TaxiFleetProps {
  title?: string;
  subtitle?: string;
}

export default function TaxiFleet({
  title = "Noida to Delhi Taxi Fleet & Fares",
  subtitle = "Choose from hatchbacks, sedans, and SUVs — all with fixed fares, AC, and verified drivers.",
}: TaxiFleetProps) {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* ===== Header ===== */}
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Our Fleet
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {title}
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>
        </div>

        {/* ===== Cab Cards ===== */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cabs.map((cab) => (
            <article
              key={cab.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* ===== Popular Badge ===== */}
              {cab.popular && (
                <span className="absolute right-4 top-4 z-10 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md">
                  Most Popular
                </span>
              )}

              {/* ===== Image Area ===== */}
              {/* Replace this div with a real photo:
                  <img src={`/taxis/${cab.name}.jpg`} alt={cab.name} className="h-[160px] w-full object-cover" /> */}
              <div className="flex h-[160px] items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                <span className="text-7xl transition-transform duration-500 group-hover:scale-110">
                  {cab.emoji}
                </span>
              </div>

              {/* ===== Content ===== */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold leading-tight text-slate-900">
                  {cab.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">{cab.example}</p>

                {/* ===== Specs ===== */}
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-slate-600">
                  <span className="inline-flex items-center gap-1.5">
                    👤 {cab.seats} Seats
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    🧳 {cab.luggage} Bags
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    ❄️ AC
                  </span>
                </div>

                {/* ===== Fares ===== */}
                <div className="mt-5 space-y-2 border-t border-slate-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">One Way</span>
                    <span className="text-lg font-bold text-slate-900">
                      ₹{cab.oneWay.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Round Trip</span>
                    <span className="text-lg font-bold text-gold">
                      ₹{cab.roundTrip.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* ===== CTA ===== */}
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gold transition-all duration-300 hover:gap-3"
                >
                  Book Now
                  <span className="text-xl leading-none">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
