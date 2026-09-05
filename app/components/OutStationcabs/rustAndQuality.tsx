import { Shield, Wrench, UserCheck, MapPinned, HeartHandshake, Award, Sparkles, Headphones } from "lucide-react";

const trustPillars = [
  {
    icon: Wrench,
    title: "Well-Maintained Fleet",
    description:
      "Every car undergoes a 50-point inspection before each trip. Regular servicing, fresh tyres, and fully working AC guaranteed.",
  },
  {
    icon: UserCheck,
    title: "Verified & Trained Drivers",
    description:
      "Background-checked, police-verified drivers with 5+ years of outstation experience. Polite, punctual, and route-savvy.",
  },
  {
    icon: MapPinned,
    title: "Live GPS Tracking",
    description:
      "Track your cab in real-time and share live location with family. Every trip is monitored by our operations team 24/7.",
  },
  {
    icon: Shield,
    title: "Fully Insured Rides",
    description:
      "All vehicles carry comprehensive commercial insurance. You, your family, and your luggage are fully covered on every journey.",
  },
  {
    icon: Sparkles,
    title: "Spotlessly Clean Cars",
    description:
      "Deep-cleaned interiors, fresh seat covers, and sanitised surfaces before every trip. A hotel-like experience on wheels.",
  },
  {
    icon: HeartHandshake,
    title: "No Hidden Charges",
    description:
      "What we quote is what you pay. Tolls, state taxes, and parking are billed transparently at actuals — with receipts.",
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Support",
    description:
      "A real human is always available on call or WhatsApp. Flat tyre? Route change? We've got you covered, any hour.",
  },
  {
    icon: Award,
    title: "10,000+ Happy Trips",
    description:
      "Trusted by thousands of families, corporate clients, and travellers across India with a 4.8★ average rating.",
  },
];

const stats = [
  { value: "10,000+", label: "Trips Completed" },
  { value: "4.8★", label: "Average Rating" },
  { value: "50+", label: "Well-Maintained Cars" },
  { value: "100+", label: "Verified Drivers" },
];

export default function TrustAndQuality() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-gold/5 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 font-semibold uppercase tracking-[4px] text-gold">
            <Shield size={18} /> Trust & Quality
          </p>
          <h2 className="mt-4 text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl">
            Cars You Can Trust. <br className="hidden sm:block" />
            <span className="text-gold">Drivers You Can Rely On.</span>
          </h2>
          <p className="mt-5 text-base text-stone-600 md:text-lg">
            Your safety and comfort are non-negotiable. That's why every vehicle 
            and every driver in our fleet meets the highest standards — so you can 
            travel with complete peace of mind.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:grid-cols-4 md:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-gold md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-stone-600 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Pillars Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all group-hover:bg-gold group-hover:text-white">
                <pillar.icon size={24} />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-bold text-stone-900">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Assurance Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-stone-900 to-stone-800 p-8 text-center md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[4px] text-gold">
            Our Promise
          </p>
          <h3 className="mt-3 text-xl font-bold text-white md:text-2xl">
            If you're not happy with the car or driver, we'll replace them — no questions asked.
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-stone-400">
            Your comfort is our reputation. That's why we stand behind every single trip 
            with a 100% satisfaction guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}