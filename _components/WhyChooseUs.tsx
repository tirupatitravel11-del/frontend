type Feature = {
  icon: string;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: "💰",
    title: "Fixed, Transparent Fares",
    description:
      "The fare you see at booking is the fare you pay. No surge pricing, no meter surprises, no hidden charges.",
  },
  {
    icon: "⏰",
    title: "On-Time Pickup",
    description:
      "Our drivers reach your doorstep before the scheduled time — crucial for flights, trains and office travel.",
  },
  {
    icon: "🛡️",
    title: "Verified Drivers",
    description:
      "Every driver is background-verified and knows the Noida–Delhi routes, flyovers and traffic shortcuts well.",
  },
  {
    icon: "✨",
    title: "Clean & Sanitized Cabs",
    description:
      "Well-maintained, air-conditioned cars cleaned before every trip for a comfortable and hygienic ride.",
  },
  {
    icon: "🕐",
    title: "24×7 Availability",
    description:
      "Early morning airport drop or late night return from Delhi — we're available round the clock, all days.",
  },
  {
    icon: "📍",
    title: "Doorstep Pickup",
    description:
      "Pickup from any Noida or Greater Noida sector — your home, office, hotel or the nearest metro station.",
  },
];

interface WhyChooseUsProps {
  title?: string;
  subtitle?: string;
}

export default function WhyChooseUs({
  title,
  subtitle = "Thousands of riders trust us for daily travel, airport drops and outstation trips between Noida and Delhi.",
}: WhyChooseUsProps) {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* ===== Header ===== */}
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Why Choose Us
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Why Book With Us?
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>
        </div>

        {/* ===== Feature Cards ===== */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
            >
              {/* ===== Icon ===== */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-2xl transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
