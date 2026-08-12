type TaxiRoute = {
  from: string;
  to: string;
  km: string;
  time: string;
  fare: number;
  tag: string;
};
const LUCKNOW_AYODHYA_ROUTES: TaxiRoute[] = [
  {
    from: "Lucknow",
    to: "Ayodhya Dham",
    km: "135 km",
    time: "2.5–3 hr",
    fare: 2499,
    tag: "Popular",
  },
  {
    from: "Lucknow Airport",
    to: "Ayodhya",
    km: "150 km",
    time: "3–3.5 hr",
    fare: 2799,
    tag: "Airport",
  },
  {
    from: "Lucknow Railway Station",
    to: "Ayodhya Dham",
    km: "140 km",
    time: "2.5–3 hr",
    fare: 2599,
    tag: "Railway",
  },
];

const PHONE_NUMBER = "+916390008503";

// const ROUTES: TaxiRoute[] = [
//   {
//     from: "Noida Sector 18",
//     to: "Connaught Place",
//     km: "25 km",
//     time: "45–60 min",
//     fare: 1299,
//     tag: "City Centre",
//   },
//   {
//     from: "Noida Sector 62",
//     to: "New Delhi Railway Station",
//     km: "22 km",
//     time: "40–55 min",
//     fare: 1299,
//     tag: "Railway",
//   },
//   {
//     from: "Noida Sector 137",
//     to: "IGI Airport (T1 / T2 / T3)",
//     km: "30 km",
//     time: "50–70 min",
//     fare: 1499,
//     tag: "Airport",
//   },
//   {
//     from: "Greater Noida",
//     to: "Kashmere Gate ISBT",
//     km: "45 km",
//     time: "70–90 min",
//     fare: 1999,
//     tag: "Bus Stand",
//   },
//   {
//     from: "Noida Sector 76",
//     to: "Karol Bagh",
//     km: "28 km",
//     time: "50–65 min",
//     fare: 1499,
//     tag: "Market",
//   },
//   {
//     from: "Noida Expressway",
//     to: "Anand Vihar",
//     km: "15 km",
//     time: "30–45 min",
//     fare: 1099,
//     tag: "Railway",
//   },
// ];

interface PopularRoutesProps {
  from: string;
  to: string;
  routes: TaxiRoute[];
  title?: string;
  subtitle?: string;
}

export default function PopularRoutes({
  from,
  to,
  routes,
  title,
  subtitle = "Fixed fares for the most booked routes. Actual time may vary with traffic conditions.",
}: PopularRoutesProps) {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* ===== Header ===== */}
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Popular Routes
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {title || `Popular ${from} to ${to} Taxi Routes`}
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>
        </div>

        {/* ===== Route Cards ===== */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route) => (
            <article
              key={`${route.from}-${route.to}`}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* ===== Tag Badge ===== */}
              <span className="absolute right-5 top-5 rounded-full bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-gold">
                {route.tag}
              </span>

              {/* ===== Route Timeline ===== */}
              <div>
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-gold ring-4 ring-gold/15" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400">
                      Pickup
                    </p>
                    <p className="font-semibold text-slate-900">{route.from}</p>
                  </div>
                </div>

                {/* Connector line */}
                <div className="ml-[5px] my-1 h-5 w-0.5 bg-slate-200" />

                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-slate-900 bg-white" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400">
                      Drop
                    </p>
                    <p className="font-semibold text-slate-900">{route.to}</p>
                  </div>
                </div>
              </div>

              {/* ===== Fare & CTA ===== */}
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">Starting fare</p>
                  <p className="text-xl font-bold text-slate-900">
                    ₹{route.fare.toLocaleString("en-IN")}
                  </p>
                </div>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2 text-xs font-bold uppercase tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white"
                >
                  Book
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
