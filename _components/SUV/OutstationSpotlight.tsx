import { Clock, MapPin, Moon, Route } from "lucide-react";

const PHONE_NUMBER = "+916390008503";
const WHATSAPP_NUMBER = "916390008503";

interface OutstationSpotlightProps {
  from?: string;
}

const OUTSTATION_POINTS = [
  "Minimum 300 km / 12 hrs billing per day — standard for outstation",
  "Spacious 6–7 seater SUVs for comfortable highway cruising",
  "Flexible itinerary — stop for meals, sightseeing or temple darshan",
  "Experienced drivers who know expressways, ghats and temple routes",
  "Pay only for the actual distance travelled beyond the daily limit",
];

const TIMELINE = [
  {
    time: "Base Limit",
    label: "300 km or 12 hrs per day",
    detail:
      "Covers most day trips (like Agra or Mathura) comfortably without extra charges.",
  },
  {
    time: "Extra Distance",
    label: "Low per-km rate",
    detail:
      "If you cross the daily limit, extra kilometres are billed at a transparent per-km rate.",
  },
  {
    time: "Multi-Day Trips",
    label: "Driver night allowance",
    detail:
      "A standard ₹300–₹500 per night allowance applies if your trip extends past midnight.",
  },
];

export default function OutstationSpotlight({
  from = "Your City",
}: OutstationSpotlightProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-10 sm:py-16 lg:py-20">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2">
        {/* ===== Left: Content ===== */}
        <div>
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            <MapPin size={16} className="shrink-0 sm:size-[18px]" />
            Outstation &amp; Pilgrimage
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:leading-tight">
            {from} Outstation Trips by SUV —{" "}
            <span className="text-gold">Explore Beyond the City</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Whether it&apos;s a day trip to Agra or a multi-day pilgrimage to
            Haridwar, our SUVs are built for the highway. No rigid packages —
            just transparent, distance-based billing for your whole group.
          </p>

          {/* ===== Checklist ===== */}
          <ul className="mt-7 space-y-4 sm:mt-8">
            {OUTSTATION_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-[15px] sm:leading-7"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                  ✓
                </span>

                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* ===== CTAs ===== */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg sm:w-auto"
            >
              <MapPin size={16} />
              Book Outstation Cab
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white sm:w-auto"
            >
              WhatsApp Your Itinerary
            </a>
          </div>
        </div>

        {/* ===== Right: Billing Guide Card ===== */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            How Outstation Billing Works
          </p>

          <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-xl">
            Transparent, Distance-Based Pricing
          </h3>

          {/* ===== Timeline ===== */}
          <div className="mt-7 space-y-0 sm:mt-8">
            {TIMELINE.map((item, index) => (
              <div key={item.label}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-white sm:h-10 sm:w-10">
                      {index === 0 && <MapPin size={17} strokeWidth={2} />}
                      {index === 1 && <Route size={17} strokeWidth={2} />}
                      {index === 2 && <Moon size={17} strokeWidth={2} />}
                    </span>

                    {index < TIMELINE.length - 1 && (
                      <span className="my-1 h-8 w-0.5 bg-gold/30" />
                    )}
                  </div>

                  <div className="min-w-0 pb-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gold sm:text-xs">
                      {item.time}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">
                      {item.label}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== Example Strip ===== */}
          <div className="rounded-xl bg-gold/10 p-4 sm:p-5">
            <p className="text-sm leading-6 text-slate-700">
              🚗 <strong className="text-gold">Example:</strong> Noida to
              Haridwar round trip (approx 480 km over 2 days). You pay the 2-day
              base limit + actual extra km + tolls. No hidden markups.
            </p>
          </div>

          {/* ===== Extras Note ===== */}
          <div className="mt-5 flex items-start gap-3 text-sm leading-6 text-slate-600 sm:mt-6">
            <Clock size={18} className="mt-1 shrink-0 text-gold" />

            <p>
              State entry taxes, tolls, and parking are billed at actuals.
              Driver allowance and fuel are already included in your per-km
              rate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
