import { Navigation, ShieldAlert, UserCheck, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SafetyFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SafetyFeaturesProps {
  title?: string;
  subtitle?: string;
  features?: SafetyFeature[];
}

// Default safety features for taxi/travel services
const defaultFeatures: SafetyFeature[] = [
  {
    icon: Navigation,
    title: "GPS Tracking",
    description: "Real-time live tracking of your ride from pickup to drop-off, with route sharing for your loved ones.",
  },
  {
    icon: ShieldAlert,
    title: "Emergency SOS",
    description: "Instant emergency SOS feature to alert local authorities and our 24/7 support team in case of urgent needs.",
  },
  {
    icon: UserCheck,
    title: "Verified Drivers",
    description: "Every driver is thoroughly background-checked, police-verified, and professionally trained for your safety.",
  },
  {
    icon: Sparkles,
    title: "Sanitized Vehicles",
    description: "Rigorous cleaning and sanitization protocols followed before every trip to ensure a hygienic journey.",
  },
];

export default function SafetyFeatures({
  title = "Your Safety, Our Priority",
  subtitle = "We go the extra mile to ensure every journey is completely safe, secure, and hygienic.",
  features = defaultFeatures,
}: SafetyFeaturesProps) {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-gold">
            Safe & Secure
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10"
              >
                {/* Icon Box */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                  {feature.description}
                </p>

                {/* Subtle bottom accent line on hover */}
                <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-t-full bg-gold transition-all duration-300 group-hover:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}