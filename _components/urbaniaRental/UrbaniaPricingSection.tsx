"use client";

const PHONE_NUMBER = "+918726124680";
const WHATSAPP_NUMBER = "918726124680";

interface UrbaniaPricingProps {
  city?: string;
}

const URBANIA_VARIANTS = [
  {
    name: "12 Seater Urbania",
    capacity: "Up to 12 Passengers",
    luggage: "8-10 Large Suitcases",
    rate: 31,
    minKm: 250,
    driverAllowance: 600,
  },
  {
    name: "17 Seater Urbania",
    capacity: "Up to 17 Passengers",
    luggage: "10-12 Large Suitcases",
    rate: 37,
    minKm: 250,
    driverAllowance: 700,
  },
];

const formatCityName = (city?: string): string => {
  if (!city) return "your city";
  const cleaned = city.trim();
  if (!cleaned) return "your city";
  return cleaned
    .split(/[\s-]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export default function UrbaniaPricingSection({ city }: UrbaniaPricingProps) {
  const cityName = formatCityName(city);

  return (
    <section className="bg-slate-50 py-12 sm:py-16" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Header ===== */}
        <div className="mb-10 text-center sm:mb-12">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Transparent Pricing
          </span>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Urbania Tempo Traveller Fare & Pricing{" "}
            <span className="text-gold">in {cityName}</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Check estimated Urbania Tempo Traveller rates for popular routes from {cityName}.
            Final fare may vary depending on travel dates, route, tolls, parking, taxes, and trip duration.
          </p>
        </div>

        {/* ===== Desktop Pricing Table ===== */}
        <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
          {/* Table Header */}
          <div className="bg-gold px-6 py-4 sm:px-8">
            <div className="grid grid-cols-12 gap-4 text-xs font-bold uppercase tracking-wider text-white">
              <div className="col-span-4">Vehicle</div>
              <div className="col-span-2">Rate</div>
              <div className="col-span-2">Minimum KM / Day</div>
              <div className="col-span-2">Driver Allowance</div>
              <div className="col-span-2 text-center">Action</div>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-100">
            {URBANIA_VARIANTS.map((variant) => (
              <div
                key={variant.name}
                className="px-6 py-5 transition-colors hover:bg-slate-50 sm:px-8"
              >
                <div className="grid grid-cols-12 items-center gap-4">
                  {/* Vehicle Info */}
                  <div className="col-span-4">
                    <h4 className="text-base font-bold text-slate-900">
                      {variant.name}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">
                      {variant.capacity} · {variant.luggage}
                    </p>
                  </div>

                  {/* Rate */}
                  <div className="col-span-2">
                    <p className="text-lg font-bold text-slate-900">
                      ₹{variant.rate}
                      <span className="text-xs font-medium text-slate-500">/km</span>
                    </p>
                  </div>

                  {/* Min KM */}
                  <div className="col-span-2">
                    <p className="text-sm font-semibold text-slate-700">
                      {variant.minKm} km
                    </p>
                  </div>

                  {/* Driver Allowance */}
                  <div className="col-span-2">
                    <p className="text-sm font-semibold text-slate-700">
                      ₹{variant.driverAllowance}
                      <span className="text-xs font-medium text-slate-500">/day</span>
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="col-span-2 text-center">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        `Hello, I want to get a quote for ${variant.name} in ${cityName}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-sm transition-all duration-300 hover:bg-gold/90 hover:shadow-md"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Mobile View Cards ===== */}
        <div className="grid gap-4 md:hidden">
          {URBANIA_VARIANTS.map((variant) => (
            <div
              key={variant.name}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h4 className="text-base font-bold text-slate-900">{variant.name}</h4>
              <p className="mt-0.5 text-xs text-slate-500">
                {variant.capacity} · {variant.luggage}
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-slate-50 p-3 text-center">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Rate
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-900">₹{variant.rate}/km</p>
                </div>
                <div className="border-x border-slate-200">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Min KM
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-900">{variant.minKm} km</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Driver Fee
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-900">₹{variant.driverAllowance}/day</p>
                </div>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Hello, I want to get a quote for ${variant.name} in ${cityName}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3 text-xs font-bold uppercase tracking-wide text-white shadow-sm transition-all duration-300 hover:bg-gold/90"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Get Quote
              </a>
            </div>
          ))}
        </div>

        {/* ===== Bottom Note ===== */}
        <div className="mt-6 rounded-xl border border-gold/20 bg-gold/5 p-4 sm:p-5">
          <p className="text-center text-xs leading-6 text-slate-600 sm:text-sm">
            <span className="font-semibold text-gold">Note:</span> All rates are
            subject to availability and seasonal demand. Toll charges, state taxes,
            and parking fees are additional. Contact us for a customized quote
            based on your exact itinerary in {cityName}.
          </p>
        </div>
      </div>
    </section>
  );
}
