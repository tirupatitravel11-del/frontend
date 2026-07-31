import {
  Search,
  Hotel,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";

const bookingSteps = [
  {
    number: "01",
    icon: Search,
    title: "Search Your Stay",
    description:
      "Enter your destination, check-in and check-out dates, and number of guests to find available hotels.",
  },
  {
    number: "02",
    icon: Hotel,
    title: "Explore Hotels",
    description:
      "Compare hotels based on location, price, amenities, ratings, and room options.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Choose Your Room",
    description:
      "Select the hotel and room that best matches your travel needs and budget.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Confirm Your Stay",
    description:
      "Complete your booking and get ready to enjoy a comfortable and hassle-free stay.",
  },
];

export default function HotelBookingProcess() {
  return (
    <section className="bg-stone-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl">
          <p className="font-semibold text-gold">
            Simple Booking Process
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Book Your Perfect Stay in 4 Easy Steps
          </h2>

          <p className="mt-5 text-base leading-7 text-stone-600 sm:text-lg">
            Finding and booking your hotel is simple. Search, compare, choose
            your room, and confirm your stay in just a few easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bookingSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-xl"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <span className="text-4xl font-bold text-stone-100 transition-colors group-hover:text-gold/20">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-7 text-xl font-bold text-stone-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 leading-7 text-stone-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}