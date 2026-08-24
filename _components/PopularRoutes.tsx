type TaxiRoute = {
  from: string;
  to: string;
  km: string;
  time: string;
  fare: number;
  tag: string;
};

const PHONE_NUMBER = "+916390008503";

interface PopularRoutesProps {
  from: string;
  to: string;
  routes: any;
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
  console.log(from, to, routes, title, "sdfsdf");
  return (
    <section className="bg-slate-50 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Header ===== */}
        <div className="mb-8 max-w-3xl sm:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Popular Routes
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {title || `Popular ${from} to ${to} Taxi Routes`}
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            {subtitle}
          </p>
        </div>

        {/* ===== Route Cards ===== */}
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {routes.map((route) => (
            <article
              key={`${route.from}-${route.to}`}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6"
            >
              {/* ===== Tag Badge ===== */}
              <span className="absolute right-4 top-4 rounded-full bg-gold/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-gold sm:right-5 sm:top-5 sm:px-3 sm:text-[10px]">
                {route.tag}
              </span>

              {/* ===== Route Timeline ===== */}
              <div className="pr-16 sm:pr-20">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-gold ring-4 ring-gold/15" />

                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 sm:text-xs">
                      Pickup
                    </p>

                    <p className="break-words font-semibold text-slate-900">
                      {route.from}
                    </p>
                  </div>
                </div>

                {/* Connector line */}
                <div className="ml-[5px] my-1 h-5 w-0.5 bg-slate-200" />

                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-slate-900 bg-white" />

                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 sm:text-xs">
                      Drop
                    </p>

                    <p className="break-words font-semibold text-slate-900">
                      {route.to}
                    </p>
                  </div>
                </div>
              </div>

              {/* ===== Fare & CTA ===== */}
              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs text-slate-500">Starting fare</p>

                  <p className="text-xl font-bold text-slate-900">₹{(parseFloat(route?.distance?.split(' ')[0]) * 1.6 * 10) + 500}</p>
                </div>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-gold px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white sm:px-5 sm:text-xs"
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
