import type { LucideIcon } from "lucide-react";

interface Feature {
  label: string;
  sub: string;
  icon: LucideIcon;
}

interface VehicleFeaturesProps {
  features: Feature[];
  title?: string;
  subtitle?: string;
}

export default function VehicleFeatures({
  features,
  title = "Why Choose This Vehicle?",
  subtitle = "Everything you need for a comfortable and convenient journey.",
}: VehicleFeaturesProps) {
  return (
    <section className="bg-slate-50 px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-gold">
            Vehicle Features
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Features */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.label}
                className="group rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>

                <h3 className="mt-4 text-sm font-bold text-slate-900 sm:text-base">
                  {feature.label}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm">
                  {feature.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}