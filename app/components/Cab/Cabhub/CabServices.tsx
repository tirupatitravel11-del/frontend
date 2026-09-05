import Link from "next/link";
import { MapPin, Users, Plane, ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    title: "Taxi Service in Ayodhya",
    description:
      "Reliable and comfortable local and outstation taxi services for your spiritual journey and sightseeing across the holy city.",
    href: "/taxi-service-in-ayodhya",
    icon: MapPin,
  },
  {
    title: "Tempo Traveller in Ayodhya",
    description:
      "Spacious, luxurious, and safe tempo travellers perfect for family trips, group tours, and large pilgrimages.",
    href: "/tempo-traveller-in-ayodhya",
    icon: Users,
  },
  {
    title: "Airport Taxi Service",
    description:
      "Punctual and hassle-free airport pickups and drops from Lucknow (CCS) or Varanasi (VNS) with meet & greet services.",
    href: "/airport-taxi-in-ayodhya",
    icon: Plane,
  },
];

export default function CabServices() {
  return (
    <section className="relative overflow-hidden bg-stone-50 py-20 md:py-28">
      {/* Subtle Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/40 via-stone-50 to-stone-50 pointer-events-none" />
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5">
            <Sparkles size={16} className="text-gold" />
            <span className="text-sm font-semibold uppercase tracking-wider text-gold">
              Divine Journeys
            </span>
          </div>
          
          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 md:text-5xl">
         Special Ayodhya Travel Services
          </h2>
          
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
            Dedicated, comfortable, and reliable transportation solutions designed 
            to make your spiritual journey to the holy city seamless and memorable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative flex flex-col rounded-2xl border border-stone-200/60 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5"
              >
                {/* Decorative top border on hover */}
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-gold to-orange-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/10 to-orange-50 text-gold transition-transform duration-300 group-hover:scale-110 group-hover:from-gold/20 group-hover:to-orange-100">
                  <Icon size={32} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-stone-900 transition-colors group-hover:text-gold">
                  {service.title}
                </h3>
                
                <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-600">
                  {service.description}
                </p>

                {/* Link Action */}
                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-stone-900 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold">
                  Explore Service
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}