import {
  BadgeCheck,
  Ban,
  Car,
  DoorOpen,
  PhoneCall,
  UserRound,
} from "lucide-react";

const trustFeatures = [
  {
    icon: BadgeCheck,
    title: "Pay Only One Way",
    description:
      "You pay only for the journey you take. No charges for the driver's empty return trip, helping you save significantly on your one-way fare.",
  },
  {
    icon: DoorOpen,
    title: "Door-to-Door Service",
    description:
      "We pick you up from your doorstep and drop you safely at your destination for a smooth and convenient journey.",
  },
  {
    icon: UserRound,
    title: "Expert Outstation Drivers",
    description:
      "Our experienced drivers are trained for highway and outstation travel, ensuring a safe, comfortable, and timely journey.",
  },
  {
    icon: Car,
    title: "Clean & Comfortable Vehicles",
    description:
      "Choose from well-maintained vehicles that are regularly serviced and prepared for a comfortable long-distance journey.",
  },
  {
    icon: Ban,
    title: "No Hidden Charges",
    description:
      "The price you see is transparent. We avoid unexpected booking charges and clearly communicate applicable tolls and fees.",
  },
  {
    icon: PhoneCall,
    title: "24/7 Customer Support",
    description:
      "Our support team is available to assist you before, during, and after your journey whenever you need help.",
  },
];

export default function WhyBookWithUs() {
  return (
    <section className="bg-stone-50 px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[4px] text-gold">
            Travel With Confidence
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Why Book Your One-Way Cab With Us?
          </h2>

          <p className="mt-5 text-base leading-7 text-stone-600 sm:text-lg">
            From transparent pricing to experienced drivers, we make your
            outstation journey safe, comfortable, and completely hassle-free.
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-stone-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-stone-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
