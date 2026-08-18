import {
  Clock,
  MapPin,
  Route,
  Car,
  Navigation,
  CalendarClock,
} from "lucide-react";

const PHONE_NUMBER = "+916390008503";

interface DistanceTravelTimeProps {
  from?: string;
  to?: string;
  distance?: string;
  travelTime?: string;
}

const TRAVEL_TIMES = [
  {
    title: "Normal Traffic",
    time: "45–60 min",
    description:
      "Light to moderate traffic conditions में journey usually this range में complete हो सकती है.",
  },
  {
    title: "Peak Traffic",
    time: "1–1.5 hrs",
    description:
      "Morning and evening peak hours में traffic के कारण travel time बढ़ सकता है.",
  },
  {
    title: "Late Night / Early Morning",
    time: "35–50 min",
    description:
      "Low traffic के कारण early morning और late night journey comparatively faster हो सकती है.",
  },
];

const ROUTE_POINTS = [
  "Pickup from your preferred location in Noida",
  "Direct road journey towards Delhi",
  "Flexible pickup and drop locations",
  "Private cab — no sharing with other passengers",
];

export default function DistanceTravelTime({
  from = "Noida",
  to = "Delhi",
  distance = "25 km",
  travelTime = "45 min–1.5 hr",
}: DistanceTravelTimeProps) {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            <Route size={17} />
            Distance & Travel Time
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {from} to {to} Distance & Travel Time
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Planning a taxi journey from {from} to {to}? Here is the
            approximate distance, expected travel time and traffic information
            to help you plan your trip.
          </p>
        </div>

        {/* ================= MAIN STATS ================= */}

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
          {/* Distance */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm sm:p-7">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <MapPin size={23} />
            </div>

            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Approx Distance
            </p>

            <p className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
              {distance}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Road distance may vary by pickup and drop location.
            </p>
          </div>

          {/* Travel Time */}
          <div className="rounded-2xl border border-gold/30 bg-gold/5 p-5 text-center shadow-sm sm:p-7">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-white">
              <Clock size={23} />
            </div>

            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Average Travel Time
            </p>

            <p className="mt-1 text-2xl font-bold text-gold sm:text-3xl">
              {travelTime}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Actual time depends on traffic and route.
            </p>
          </div>

          {/* Cab */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm sm:p-7">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <Car size={23} />
            </div>

            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Travel Type
            </p>

            <p className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
              Private Cab
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Comfortable door-to-door taxi service.
            </p>
          </div>
        </div>

        {/* ================= TRAVEL TIME ================= */}

        <div className="mt-10 sm:mt-14">
          <div className="mb-6 text-center">
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
              How Long Does {from} to {to} Take?
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Travel time can change depending on traffic, pickup location and
              time of day.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {TRAVEL_TIMES.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Clock size={19} />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900 sm:text-base">
                      {item.title}
                    </h4>

                    <p className="text-lg font-bold text-gold">
                      {item.time}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= ROUTE GUIDE ================= */}

        <div className="mt-10 grid gap-5 lg:grid-cols-2 sm:mt-14">
          {/* Route Card */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Route Overview
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
              {from} → {to}
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                  <MapPin size={17} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Pickup
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    Your preferred location in {from}
                  </p>
                </div>
              </div>

              <div className="ml-4 h-6 border-l-2 border-dashed border-gold/40" />

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                  <Navigation size={17} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Destination
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    Your preferred location in {to}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Things to Know */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Before You Travel
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
              Things to Know
            </h3>

            <ul className="mt-5 space-y-4">
              {ROUTE_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                    ✓
                  </span>

                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-start gap-3 rounded-xl bg-gold/10 p-4">
              <CalendarClock
                size={19}
                className="mt-0.5 shrink-0 text-gold"
              />

              <p className="text-sm leading-6 text-slate-700">
                <strong className="text-gold">
                  Travel tip:
                </strong>{" "}
                During peak traffic hours, keep some extra time in your
                schedule, especially for airport and railway station trips.
              </p>
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}

        <div className="mt-10 text-center sm:mt-12">
          <p className="text-sm text-slate-600">
            Planning a trip from {from} to {to}?
          </p>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
          >
            Book Your Taxi →
          </a>
        </div>
      </div>
    </section>
  );
}