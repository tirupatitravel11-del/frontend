import {
  Heart,
  Users,
  Briefcase,
  GraduationCap,
  Plane,
  Map,
} from "lucide-react";
import Link from "next/link";

const occasions = [
  {
    icon: Heart,
    title: "Pilgrimage Tours",
    subtitle: "Vaishno Devi, Tirupati, Char Dham & more",
    description:
      "Spiritual journeys made comfortable with experienced drivers who know the routes, timings, and local customs.",
    benefits: [
      "Early morning pickups for aarti timings",
      "Drivers familiar with temple routes & parking",
      "Flexible schedules for darshan queues",
      "Comfortable rides for elderly parents",
    ],
    cta: "Plan Pilgrimage",
    gradient: "from-orange-500/10 to-red-500/10",
    iconColor: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: Users,
    title: "Wedding & Family Events",
    subtitle: "Guest pickups, Mehendi, Sangeet & more",
    description:
      "Make your special day stress-free. We handle all guest transportation so you can focus on celebrating.",
    benefits: [
      "Bulk bookings for 10+ vehicles",
      "Airport & railway station pickups",
      "Decorated cars available",
      "Dedicated coordinator for large groups",
    ],
    cta: "Book for Wedding",
    gradient: "from-pink-500/10 to-rose-500/10",
    iconColor: "text-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: Users,
    title: "Family Vacations",
    subtitle: "Multi-day trips with kids & elderly",
    description:
      "Create unforgettable memories with your family. Spacious cars, flexible stops, and drivers who love kids.",
    benefits: [
      "Child seats & booster seats available",
      "Frequent breaks for kids & elderly",
      "Sightseeing stops at your pace",
      "Cooler boxes for snacks & drinks",
    ],
    cta: "Plan Family Trip",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Briefcase,
    title: "Corporate Offsites",
    subtitle: "Team retreats, conferences & events",
    description:
      "Professional transport for your team. Punctual, comfortable, and fully customizable for corporate needs.",
    benefits: [
      "GST invoices for easy reimbursement",
      "Bulk discounts for 5+ vehicles",
      "Branded vehicles available",
      "Dedicated account manager",
    ],
    cta: "Corporate Booking",
    gradient: "from-stone-500/10 to-slate-500/10",
    iconColor: "text-stone-700",
    bgColor: "bg-stone-50",
  },
  {
    icon: GraduationCap,
    title: "College Group Trips",
    subtitle: "Friends heading to hill stations & beaches",
    description:
      "The perfect road trip with your squad. Affordable rates for groups, flexible timing, and drivers who get it.",
    benefits: [
      "Special group discounts",
      "Extra luggage space for backpacks",
      "Late-night pickup/drop flexibility",
      "Playlist-friendly drivers",
    ],
    cta: "Plan Group Trip",
    gradient: "from-purple-500/10 to-indigo-500/10",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Plane,
    title: "Airport Transfers for Groups",
    subtitle: "Family or team arrivals/departures",
    description:
      "Coordinated pickups for multiple flights. One point of contact, seamless logistics, no missed connections.",
    benefits: [
      "Flight tracking for all passengers",
      "Multiple vehicles, single booking",
      "Meet & greet at arrivals",
      "Luggage assistance for everyone",
    ],
    cta: "Group Airport Transfer",
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
];

export default function SpecialOccasions() {
  return (
    <section className="bg-stone-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[4px] text-gold">
            For Every Occasion
          </p>
          <h2 className="mt-2 text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl">
            More Than Just a Ride — <br className="hidden sm:block" />
            <span className="text-gold">We're Part of Your Journey</span>
          </h2>
          <p className="mt-5 text-base text-stone-600 md:text-lg">
            Whether it's a spiritual pilgrimage, a family vacation, or a
            corporate event, we customize our service to make every trip
            special.
          </p>
        </div>

        {/* Occasions Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {occasions.map((occasion) => (
            <div
              key={occasion.title}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl`}
            >
              {/* Gradient Top Bar */}
              <div className={`h-1.5 bg-gradient-to-r ${occasion.gradient}`} />

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Icon & Title */}
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${occasion.bgColor} transition-all group-hover:scale-110`}
                  >
                    <occasion.icon
                      className={`h-7 w-7 ${occasion.iconColor}`}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-bold text-stone-900">
                      {occasion.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-stone-500">
                      {occasion.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-5 text-sm leading-relaxed text-stone-600">
                  {occasion.description}
                </p>

                {/* Benefits */}
                <ul className="mt-5 flex-1 space-y-2.5">
                  {occasion.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-stone-700"
                    >
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold/15 text-[10px] font-bold text-gold">
                        ✓
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="#book"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg border border-gold bg-white px-5 py-2.5 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-white"
                >
                  {occasion.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
