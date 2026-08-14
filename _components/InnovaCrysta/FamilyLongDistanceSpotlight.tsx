import { Clock, Luggage, MapPin, Users } from "lucide-react";

const PHONE_NUMBER = "+916390008503";
const WHATSAPP_NUMBER = "916390008503";

interface FamilyLongDistanceSpotlightProps {
  from?: string;
  to?: string;
  distance?: string;
  travelTime?: string;
}

const FAMILY_POINTS = [
  "Spacious 6-seater cabin — ideal for families and small groups",
  "Large luggage space for suitcases, travel bags and family luggage",
  "Comfortable seating and powerful AC for long-distance journeys",
  "Experienced drivers for highways and outstation routes",
  "Flexible pickup and drop from your home, hotel or preferred location",
  "Perfect for family trips, weddings, vacations and weekend getaways",
];

const JOURNEY_PLAN = [
  {
    time: "Before Journey",
    label: "Pickup Planned Around Your Schedule",
    detail:
      "We plan your pickup according to your preferred departure time and travel requirements.",
  },
  {
    time: "During Journey",
    label: "Comfortable Highway Travel",
    detail:
      "Enjoy a spacious Innova Crysta with comfortable seating, powerful AC and a smooth ride.",
  },
  {
    time: "At Destination",
    label: "Safe Door-to-Door Drop",
    detail:
      "Reach your destination comfortably without worrying about parking, routes or driving.",
  },
];

export default function FamilyLongDistanceSpotlight({
  from = "Noida",
  to = "Delhi",
  distance = "25 km",
  travelTime = "1–1.5 hours",
}: FamilyLongDistanceSpotlightProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 sm:py-16 lg:py-20">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2">
        {/* ================= LEFT CONTENT ================= */}
        <div className="min-w-0">
          {/* Label */}
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            <Users size={18} className="shrink-0" />
            Family & Long Distance Rides
          </p>

          {/* Heading */}
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:leading-tight">
            {from} to {to} by Innova Crysta —{" "}
            <span className="text-gold">
              Comfortable Family Travel
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-7">
            Planning a family trip or a long-distance journey from {from} to{" "}
            {to}? Travel in a spacious Toyota Innova Crysta with comfortable
            seating, powerful AC and plenty of luggage space. The journey of{" "}
            {distance} usually takes around {travelTime}.
          </p>

          {/* ================= CHECKLIST ================= */}
          <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
            {FAMILY_POINTS.map((point) => (
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

          {/* ================= CTA ================= */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            {/* Call */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg sm:w-auto sm:px-7"
            >
              <Users size={16} />
              Book Family Ride
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white sm:w-auto sm:px-7"
            >
              Plan Your Trip
            </a>
          </div>
        </div>

        {/* ================= RIGHT CARD ================= */}
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:p-8">
          {/* Card Label */}
          <p className="text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Long Distance Travel Guide
          </p>

          {/* Card Heading */}
          <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
            Designed for Comfortable Family Journeys
          </h3>

          {/* ================= TIMELINE ================= */}
          <div className="mt-6 space-y-0 sm:mt-8">
            {JOURNEY_PLAN.map((item, index) => (
              <div key={item.label}>
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Timeline Icon */}
                  <div className="flex flex-col items-center">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-white sm:h-10 sm:w-10">
                      {index === 0 ? (
                        <Clock size={17} strokeWidth={2} />
                      ) : index === 1 ? (
                        <MapPin size={17} strokeWidth={2} />
                      ) : (
                        <Users size={17} strokeWidth={2} />
                      )}
                    </span>

                    {/* Timeline Line */}
                    {index < JOURNEY_PLAN.length - 1 && (
                      <span className="my-1 h-8 w-0.5 bg-gold/30" />
                    )}
                  </div>

                  {/* Content */}
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

          {/* ================= FAMILY TRAVEL STRIP ================= */}
          <div className="rounded-xl bg-gold/10 p-4 sm:p-5">
            <p className="text-sm leading-6 text-slate-700">
              👨‍👩‍👧‍👦{" "}
              <strong className="text-gold">Perfect for families:</strong>{" "}
              Enough seating and luggage space for a comfortable family
              journey without having to take multiple cars.
            </p>
          </div>

          {/* ================= LUGGAGE NOTE ================= */}
          <div className="mt-5 flex items-start gap-3 text-sm leading-6 text-slate-600 sm:mt-6">
            <Luggage size={18} className="mt-1 shrink-0 text-gold" />

            <p>
              Innova Crysta offers generous luggage space, making it suitable
              for family vacations, weddings, airport transfers and
              outstation trips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}