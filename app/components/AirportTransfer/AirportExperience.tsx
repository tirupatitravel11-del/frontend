import { Plane, Clock, MapPin, ShieldCheck, Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "+916390008503";
const WHATSAPP_NUMBER = "916390008503";

interface AirportExperienceProps {
  city?: string;
  airportName?: string;
}

const TRANSFER_POINTS = [
  "Real-time flight tracking: We adjust if you are delayed",
  "Professional Meet & Greet with a name board at arrivals",
  "Complimentary 60-minute waiting time for international flights",
  "All-inclusive fixed pricing: No surge, no hidden tolls or taxes",
];

const ARRIVAL_STEPS = [
  {
    time: "Touchdown",
    label: "We Track Your Flight",
    detail: "No need to call us if you're delayed. We monitor your flight live.",
  },
  {
    time: "Arrivals Hall",
    label: "Meet & Greet Service",
    detail: "Your chauffeur waits with a clear name board, ready to assist.",
  },
  {
    time: "Luggage & Load",
    label: "Zero Heavy Lifting",
    detail: "Driver handles all your bags and escorts you to the vehicle.",
  },
  {
    time: "Smooth Ride",
    label: "Relax & Unwind",
    detail: "AC is on, water is chilled, and the route is already optimized.",
  },
];

export default function AirportExperience({
  city = "Your City",
  airportName = "the Airport",
}: AirportExperienceProps) {
  return (
    <section className="relative overflow-hidden bg-stone-50 py-12 sm:py-16 lg:py-20">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-gold/5 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2">
        
        {/* ===== Left: Content ===== */}
        <div className="min-w-0">
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            <ShieldCheck size={18} className="shrink-0" /> Stress-Free Travel
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl md:text-4xl lg:leading-tight">
            Your Flight Lands. <br className="hidden sm:block" />
            <span className="text-gold">We Handle the Rest.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-stone-600 sm:mt-5 sm:text-base sm:leading-7">
            Skip the taxi queues and ride-hailing uncertainty. Experience a 
            seamless, premium transfer from {airportName} to anywhere in {city}. 
            Punctuality and comfort are our only priorities.
          </p>

          {/* ===== Checklist ===== */}
          <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
            {TRANSFER_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm leading-6 text-stone-700 sm:text-[15px] sm:leading-7"
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
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-amber-500 hover:shadow-lg sm:w-auto sm:px-7"
            >
              <Phone size={16} /> Call to Book Now
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white sm:w-auto sm:px-7"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* ===== Right: Arrival Journey Card ===== */}
        <div className="w-full rounded-2xl border border-stone-200 bg-white p-5 shadow-xl sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            The Arrival Experience
          </p>

          <h3 className="mt-2 text-xl font-bold text-stone-900 sm:text-2xl">
            How We Get You Home
          </h3>

          {/* ===== Timeline ===== */}
          <div className="mt-6 space-y-0 sm:mt-8">
            {ARRIVAL_STEPS.map((item, index) => (
              <div key={item.label}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-white sm:h-10 sm:w-10">
                      {index === 0 && <Plane size={17} strokeWidth={2} />}
                      {index === 1 && <MapPin size={17} strokeWidth={2} />}
                      {index === 2 && <ShieldCheck size={17} strokeWidth={2} />}
                      {index === 3 && <Clock size={17} strokeWidth={2} />}
                    </span>

                    {index < ARRIVAL_STEPS.length - 1 && (
                      <span className="my-1 h-8 w-0.5 bg-gold/30" />
                    )}
                  </div>

                  <div className="min-w-0 pb-6">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-gold sm:text-xs">
                      {item.time}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-stone-900 sm:text-base">
                      {item.label}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-stone-600">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== Guarantee Strip ===== */}
          <div className="rounded-xl bg-gold/10 p-4 sm:p-5">
            <p className="text-sm leading-6 text-stone-700">
              🛡️ <strong className="text-gold">Our Promise:</strong> If your 
              flight is delayed, your driver waits.
            </p>
          </div>

          {/* ===== Note ===== */}
          <div className="mt-5 flex items-start gap-3 text-sm leading-6 text-stone-600 sm:mt-6">
            <MapPin size={18} className="mt-1 shrink-0 text-gold" />
            <p>
              Meet & Greet service is included in all premium bookings. 
              Tolls and parking fees are transparently billed at actuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}