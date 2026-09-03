import { MapPin, Car, CheckCircle, type LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface HowToBookProps {
  title?: string;
  subtitle?: string;
  steps?: Step[];
}

// Default steps for a standard taxi booking flow
const defaultSteps: Step[] = [
  {
    icon: MapPin,
    title: "Enter Your Details",
    description: "Share your pickup location, destination, and preferred travel date.",
  },
  {
    icon: Car,
    title: "Choose Your Vehicle",
    description: "Select the perfect car from our wide range of clean and sanitized fleet.",
  },
  {
    icon: CheckCircle,
    title: "Confirm & Enjoy",
    description: "Get instant confirmation and enjoy a safe, comfortable, and hassle-free ride.",
  },
];

export default function HowToBookIt({
  title = "How to Book Your Ride",
  subtitle = "Book your perfect ride in just a few simple steps",
  steps = defaultSteps,
}: HowToBookProps) {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-gold">
            Simple Process
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Connecting Line (Desktop Only) */}
          <div className="absolute left-1/2 top-16 hidden h-px w-2/3 -translate-x-1/2 border-t-2 border-dashed border-gold/30 lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative z-10 flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10"
              >
                {/* Step Number Badge */}
                <span className="absolute -top-4 right-6 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                  0{index + 1}
                </span>

                {/* Icon Box */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white group-hover:scale-110">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}