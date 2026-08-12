const PHONE_NUMBER = "+916390008503";

const OUR_STEPS = [
  {
    title: "Call, WhatsApp or Fill the Form",
    description:
      "Book in under 2 minutes — call us, send a WhatsApp message, or use the booking form on this page.",
  },
  {
    title: "Get Instant Confirmation",
    description:
      "Driver name, car number and pickup time are shared with you on WhatsApp right after booking.",
  },
  {
    title: "Cab Arrives at Your Doorstep",
    description:
      "On-time pickup from your home, office or hotel in any Noida or Greater Noida sector.",
  },
  {
    title: "Ride & Pay After the Trip",
    description:
      "Pay the fixed quoted fare by cash or UPI after your ride. No advance payment needed.",
  },
];

interface FareProps {
  from: string;
  to: string;
  title?: string;
  subtitle?: string;
}

const MMT_STEPS = [
  "Open the MakeMyTrip app or website and go to the “Cabs” / “Outstation” section.",
  "Enter Noida as your pickup and Delhi (or IGI Airport) as your drop location.",
  "Select your travel date, time and cab type (Sedan, SUV, etc.).",
  "Compare fares, choose a cab and confirm by paying online in advance.",
];

export default function HowToBook({from,
  to}: FareProps) {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* ===== Header ===== */}
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Booking Guide
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            How to Book a Taxi from {from} to {to}
          </h2>

          <p className="mt-4 text-base leading-7 text-stone-600">
            Booking with us takes less than 2 minutes — no apps to install, no
            advance payment.
          </p>
        </div>
        {/* ===== Our 4 Steps ===== */}
     
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OUR_STEPS.map((step, index) => (
            <div
              key={step.title}
              className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
            >
              {/* Step Number */}
              <div className="mb-6 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-base font-bold text-white shadow-md ring-4 ring-gold/10 transition-all duration-300 group-hover:scale-105 group-hover:ring-gold/20">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Step indicator */}
                <span className="text-sm font-semibold tracking-wider text-stone-300">
                  STEP {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold tracking-tight text-stone-900 transition-colors duration-300 group-hover:text-gold">
                {step.title}
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-stone-600">
                {step.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-6 h-1 w-10 rounded-full bg-gold/70 transition-all duration-300 group-hover:w-16" />

              {/* Decorative background */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/5 transition-transform duration-500 group-hover:scale-150" />
            </div>
          ))}
        </div>
    
      </div>
    </section>
  );
}
