import { Mountain, Shield, Gauge, Wind, Coffee, Award } from "lucide-react";

const hillFeatures = [
  {
    icon: Gauge,
    title: "Powerful Engines",
    description: "Cars with high-torque engines perfect for steep climbs and ghat roads.",
  },
  {
    icon: Shield,
    title: "Hill-Tested Drivers",
    description: "Drivers with 5+ years of experience on Manali, Shimla, Ooty, and Darjeeling routes.",
  },
  {
    icon: Wind,
    title: "Well-Maintained Brakes",
    description: "Every vehicle undergoes strict brake and suspension checks before hill trips.",
  },
  {
    icon: Coffee,
    title: "Comfortable Ride",
    description: "Smooth suspension, strong AC/heater, and clean interiors for long journeys.",
  },
];

const popularHills = ["Manali", "Shimla", "Mussoorie", "Nainital", "Ooty", "Munnar", "Darjeeling", "Leh-Ladakh"];

export default function HillStationSpecial() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 py-16 md:py-24">
      {/* Decorative */}
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Content */}
          <div>
            <p className="flex items-center gap-2 font-semibold uppercase tracking-[4px] text-gold">
              <Mountain size={18} /> Hill Station Specialist
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:leading-tight">
              Conquer the Mountains <br />
              <span className="text-gold">With Confidence</span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-400">
              Hill station trips demand more than just a car — they need the right 
              vehicle, the right driver, and the right preparation. We specialize 
              in mountain routes across India.
            </p>

            {/* Popular Hills */}
            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                Popular Hill Routes
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {popularHills.map((hill) => (
                  <span
                    key={hill}
                    className="rounded-full border border-stone-700 bg-stone-800/50 px-4 py-1.5 text-sm text-stone-300"
                  >
                    {hill}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#book"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-amber-500"
            >
              <Mountain size={18} />
              Plan a Hill Trip
            </a>
          </div>

          {/* Right - Features Grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {hillFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-stone-700 bg-stone-800/50 p-6 backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-stone-800"
              >
                <feature.icon className="h-8 w-8 text-gold" />
                <h3 className="mt-4 text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-stone-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}