import { Clock, Luggage, Plane } from "lucide-react";

const PHONE_NUMBER = "+916390008503";
const WHATSAPP_NUMBER = "916390008503";

interface AirportSpotlightProps {
  from?: string;
  to?: string;
  airportName?: string;
  distance?: string;
  travelTime?: string;
}

const AIRPORT_POINTS = [
  "Doorstep pickup, terminal drop — all terminals",
  "Boot space for 3 large suitcases plus cabin bags",
  "Early morning & late night flights covered 24×7",
  "Fixed fare — no airport surge, no meter anxiety",
  "Experienced drivers who know every terminal entry route",
];

const TIMELINE = [
  {
    time: "3 hrs before",
    label: "Domestic flight pickup",
    detail: "We plan your pickup backwards from departure time.",
  },
  {
    time: "4 hrs before",
    label: "International flight pickup",
    detail: "Extra buffer for check-in and security queues.",
  },
  {
    time: "15 min early",
    label: "Driver reaches your door",
    detail: "You never chase your cab at odd hours.",
  },
];

export default function AirportSpotlight({
  from = "Your City",
  to = "Destination",
  airportName = "the Airport",
  distance = "30 km",
  travelTime = "50–70 minutes",
}: AirportSpotlightProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 sm:py-16 lg:py-20">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2">
        {/* ===== Left: Content ===== */}
        <div className="min-w-0">
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            <Plane size={18} className="shrink-0" /> Airport Transfers
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:leading-tight">
            {from} to {airportName} by Sedan —{" "}
            <span className="text-gold">Never Miss a Flight</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-7">
            The {distance} ride from {from} to {airportName} takes around{" "}
            {travelTime}. Our sedans are the most booked choice for flyers —
            spacious boot, strong AC and on-time discipline.
          </p>

          {/* ===== Checklist ===== */}
          <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
            {AIRPORT_POINTS.map((point) => (
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
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg sm:w-auto sm:px-7"
            >
              <Plane size={16} /> Book Airport Drop
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white sm:w-auto sm:px-7"
            >
              WhatsApp Flight Details
            </a>
          </div>
        </div>

        {/* ===== Right: Pickup Guide Card ===== */}
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Recommended Pickup Guide
          </p>

          <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
            We Plan Your Pickup Around Your Flight
          </h3>

          {/* ===== Timeline ===== */}
          <div className="mt-6 space-y-0 sm:mt-8">
            {TIMELINE.map((item, index) => (
              <div key={item.label}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-white sm:h-10 sm:w-10">
                      <Clock size={17} strokeWidth={2} />
                    </span>

                    {index < TIMELINE.length - 1 && (
                      <span className="my-1 h-8 w-0.5 bg-gold/30" />
                    )}
                  </div>

                  <div className="min-w-0 pb-6">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-gold sm:text-xs">
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
              ✈️ <strong className="text-gold">Example:</strong> Flight at
              10:00 AM (domestic)? Your sedan reaches your door at 6:45 AM for
              a 7:00 AM pickup.
            </p>
          </div>

          {/* ===== Luggage + Fee Note ===== */}
          <div className="mt-5 flex items-start gap-3 text-sm leading-6 text-slate-600 sm:mt-6">
            <Luggage
              size={18}
              className="mt-1 shrink-0 text-gold"
            />

            <p>
              Airport entry fee is billed at actuals. Everything else is
              included in your fixed fare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}