import { CalendarCheck, UserCheck, Car, MapPin } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Book Online",
    description: "Select your pickup, drop-off, date, and time in just a few clicks.",
  },
  {
    icon: UserCheck,
    title: "Meet & Greet",
    description: "Your professional chauffeur will be waiting at the arrivals hall with a name sign.",
  },
  {
    icon: Car,
    title: "Relax & Ride",
    description: "Sit back in a clean, comfortable vehicle and enjoy the journey.",
  },
  {
    icon: MapPin,
    title: "Arrive Safely",
    description: "Reach your destination on time, stress-free, and in style.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-[4px] text-gold">
            Simple Process
          </p>
          <h2 className="mt-2 text-3xl font-bold text-stone-900 md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-base text-stone-600 md:text-lg">
            Booking your airport transfer is quick, easy, and hassle-free.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gold/10 text-gold transition-all group-hover:bg-gold group-hover:text-white">
                <step.icon size={36} />
                <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-stone-900 text-sm font-bold text-white">
                  {index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-stone-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}