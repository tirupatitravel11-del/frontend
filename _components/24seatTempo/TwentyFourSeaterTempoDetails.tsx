import {
  Users,
  Luggage,
  Snowflake,
  ShieldCheck,
  Armchair,
  BusFront,
} from "lucide-react";

const DETAILS = [
  {
    icon: Users,
    title: "24 Comfortable Seats",
    description:
      "Travel with a large family, wedding group or corporate team in one private vehicle.",
  },
  {
    icon: Snowflake,
    title: "Air Conditioned",
    description:
      "Enjoy a comfortable AC journey for local as well as long-distance travel.",
  },
  {
    icon: Luggage,
    title: "Large Luggage Space",
    description:
      "Spacious luggage area suitable for bags and suitcases of large groups.",
  },
  {
    icon: Armchair,
    title: "Comfortable Seating",
    description:
      "Designed for group journeys with comfortable seating and sufficient cabin space.",
  },
  {
    icon: ShieldCheck,
    title: "Experienced Driver",
    description:
      "Professional drivers focused on safe and comfortable group transportation.",
  },
  {
    icon: BusFront,
    title: "Private Group Vehicle",
    description:
      "Your complete group travels together without having to split into multiple cars.",
  },
];

export default function TwentyFourSeaterTempoDetails() {
  return (
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Vehicle Details
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            24 Seater Tempo Traveller for Large Groups
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            A spacious private vehicle for large families, wedding groups,
            corporate teams, religious tours and group outings.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {DETAILS.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                  <Icon size={23} />
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
