import {
  Users,
  IndianRupee,
  Heart,
  BriefcaseBusiness,
  Plane,
  MapPinned,
} from "lucide-react";

const BENEFITS = [
  {
    icon: Users,
    title: "Perfect for Large Groups",
    description:
      "Up to 16 passengers can travel together without splitting into multiple taxis.",
  },
  {
    icon: IndianRupee,
    title: "Convenient Group Travel",
    description:
      "One private vehicle makes group transportation easier to manage.",
  },
  {
    icon: Heart,
    title: "Family Trips",
    description:
      "Ideal for family functions, weddings, religious visits and vacations.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Outings",
    description:
      "Useful for employee transportation, meetings, conferences and events.",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Comfortable option for transferring a larger group to or from Delhi Airport.",
  },
  {
    icon: MapPinned,
    title: "Outstation Tours",
    description:
      "Suitable for Agra, Jaipur, Haridwar, Rishikesh and other long-distance destinations.",
  },
];

export default function SixteenSeaterGroupBenefits() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Why Choose 16 Seater?
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            Comfortable Travel for Families & Groups
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Keep everyone together and make your group journey simple and
            comfortable.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12">
          {BENEFITS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-xl sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all group-hover:bg-gold group-hover:text-white">
                  <Icon size={23} />
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}