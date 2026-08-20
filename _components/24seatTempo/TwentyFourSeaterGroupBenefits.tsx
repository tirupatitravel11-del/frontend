import {
  Users,
  Heart,
  BriefcaseBusiness,
  Church,
  Plane,
  MapPinned,
} from "lucide-react";

const BENEFITS = [
  {
    icon: Users,
    title: "Ideal for Large Groups",
    description:
      "Travel with up to 24 passengers together instead of booking several smaller vehicles.",
  },
  {
    icon: Heart,
    title: "Family Functions",
    description:
      "Perfect for weddings, family functions, vacations and large family gatherings.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Events",
    description:
      "Convenient transportation for employees, meetings, conferences and corporate outings.",
  },
  {
    icon: Church,
    title: "Religious Tours",
    description:
      "Suitable for group visits to temples, pilgrimage destinations and religious events.",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Convenient group transportation between Noida and Delhi Airport.",
  },
  {
    icon: MapPinned,
    title: "Long Distance Tours",
    description:
      "Suitable for Agra, Jaipur, Haridwar, Rishikesh and other long-distance destinations.",
  },
];

export default function TwentyFourSeaterGroupBenefits() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Group Travel
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Why Choose a 24 Seater Tempo Traveller?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            One spacious vehicle makes transportation easier when you are
            travelling with a large group.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-xl sm:p-6"
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
