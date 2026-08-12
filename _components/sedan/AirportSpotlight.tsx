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
    <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-20">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        {/* ===== Left: Content ===== */}
        <div>
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold">
            <Plane size={18} /> Airport Transfers
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:leading-tight">
            {from} to {airportName} by Sedan —{" "}
            <span className="text-gold">Never Miss a Flight</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            The {distance} ride from {from} to {airportName} takes around{" "}
            {travelTime}. Our sedans are the most booked choice for flyers —
            spacious boot, strong AC and on-time discipline.
          </p>

          {/* ===== Checklist ===== */}
          <ul className="mt-8 space-y-4">
            {AIRPORT_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-[15px] leading-7 text-slate-700"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>

          {/* ===== CTAs ===== */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
            >
              <Plane size={16} /> Book Airport Drop
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white"
            >
              WhatsApp Flight Details
            </a>
          </div>
        </div>

        {/* ===== Right: Pickup Guide Card ===== */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Recommended Pickup Guide
          </p>

          <h3 className="mt-2 text-xl font-bold text-slate-900">
            We Plan Your Pickup Around Your Flight
          </h3>

          {/* ===== Timeline ===== */}
          <div className="mt-8 space-y-0">
            {TIMELINE.map((item, index) => (
              <div key={item.label}>
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                      <Clock size={18} strokeWidth={2} />
                    </span>
                    {index < TIMELINE.length - 1 && (
                      <span className="my-1 h-8 w-0.5 bg-gold/30" />
                    )}
                  </div>

                  <div className="pb-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-gold">
                      {item.time}
                    </p>
                    <p className="mt-1 font-semibold text-slate-900">
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
          <div className="rounded-xl bg-gold/10 p-5">
            <p className="text-sm leading-6 text-slate-700">
              ✈️ <strong className="text-gold">Example:</strong> Flight at 10:00
              AM (domestic)? Your sedan reaches your door at 6:45 AM for a 7:00
              AM pickup.
            </p>
          </div>

          {/* ===== Luggage + Fee Note ===== */}
          <div className="mt-6 flex items-start gap-3 text-sm leading-6 text-slate-600">
            <Luggage size={18} className="mt-1 shrink-0 text-gold" />
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
