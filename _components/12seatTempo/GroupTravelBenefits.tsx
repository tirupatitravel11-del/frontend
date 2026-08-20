import {
  Users,
  IndianRupee,
  BriefcaseBusiness,
  Heart,
  Plane,
  CalendarDays,
} from "lucide-react";

const BENEFITS = [
  {
    icon: Users,
    title: "One Vehicle for Everyone",
    description:
      "Your entire group can travel together instead of splitting into multiple taxis.",
  },
  {
    icon: IndianRupee,
    title: "Better Group Value",
    description:
      "Sharing one larger vehicle can be more convenient than booking several separate cars.",
  },
  {
    icon: Heart,
    title: "Perfect for Families",
    description:
      "Ideal for family functions, weddings, religious trips and vacations.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Travel",
    description:
      "Suitable for employee transportation, meetings, events and corporate outings.",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Convenient option for transporting a larger group to or from Delhi Airport.",
  },
  {
    icon: CalendarDays,
    title: "Outstation Trips",
    description:
      "A comfortable choice for longer journeys such as Agra, Jaipur, Haridwar and Rishikesh.",
  },
];

export default function GroupTravelBenefits() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Why Choose a Tempo Traveller?
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            Made for Families & Group Travel
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Keep your group together and enjoy a convenient, comfortable
            journey without managing multiple cars.
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