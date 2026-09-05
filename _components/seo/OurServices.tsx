import { Navigation, Route, Plane, Clock, Landmark, Briefcase, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Local Taxi / City Rides",
    description: "Comfortable point-to-point rides within the city for shopping, meetings, or daily commutes.",
    icon: Navigation,
  },
  {
    title: "Outstation Cabs",
    description: "Reliable one-way and round-trip cabs for seamless travel to nearby cities and towns.",
    icon: Route,
  },
  {
    title: "Airport Transfers",
    description: "Punctual pickup and drop services to and from the airport with flight tracking.",
    icon: Plane,
  },
  {
    title: "Hourly Rentals",
    description: "Flexible hourly packages perfect for multiple stops, meetings, or city exploration.",
    icon: Clock,
  },
  {
    title: "Temple Tours & Pilgrimage",
    description: "Customized sightseeing packages to visit local temples, shrines, and spiritual sites.",
    icon: Landmark,
  },
  {
    title: "Corporate Travel",
    description: "Professional and discreet transportation solutions for business executives and teams.",
    icon: Briefcase,
  },
];

export default function OurServices() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-gold">
            What We Offer
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Our  Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 sm:text-lg">
            Comprehensive travel solutions tailored to your needs, ensuring a 
            safe and comfortable journey every time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10"
              >
                {/* Icon Box */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center text-sm font-semibold text-gold opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}