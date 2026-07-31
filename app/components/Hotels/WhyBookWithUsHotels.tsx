import {
  BadgeCheck,
  Building2,
  Headphones,
  IndianRupee,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const trustFeatures = [
  {
    icon: BadgeCheck,
    title: "Verified Hotels",
    description:
      "Stay with confidence at carefully selected and verified hotels that meet our standards for comfort, service, and guest experience.",
  },
  {
    icon: IndianRupee,
    title: "Best Available Prices",
    description:
      "Find comfortable stays at competitive prices with transparent rates, helping you get great value for your hotel booking.",
  },
  {
    icon: MapPin,
    title: "Great Locations",
    description:
      "Choose hotels in convenient locations close to popular attractions, business areas, transport hubs, and major destinations.",
  },
  {
    icon: Building2,
    title: "Comfortable Stays",
    description:
      "From budget-friendly rooms to premium properties, find accommodations designed to make your trip comfortable and relaxing.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Booking",
    description:
      "Book your stay with confidence through a simple and secure booking experience with clear hotel and room information.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Our support team is available to help with your hotel booking and assist you whenever you need help during your stay.",
  },
];

export default function WhyBookWithUsHotels() {
  return (
    <section className="border-t border-stone-100 bg-stone-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="font-semibold text-gold">Stay With Confidence</p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Why Book Your Hotel With Us?
          </h2>

          <p className="mt-5 text-base leading-7 text-stone-600 sm:text-lg">
            From verified properties and comfortable stays to transparent
            pricing and reliable support, we make finding and booking your hotel
            simple and hassle-free.
          </p>
        </div>

        {/* Trust Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
