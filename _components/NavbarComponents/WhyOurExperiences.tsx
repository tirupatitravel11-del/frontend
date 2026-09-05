import {
  ShieldCheck,
  Users,
  Award,
  Clock,
  Star,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: <ShieldCheck className="h-7 w-7 text-white" />,
    title: "Vetted Local Experts",
    desc: "Every experience is led by certified local guides with years of on-ground expertise.",
    highlight: "100% Verified",
  },
  {
    number: "02",
    icon: <Users className="h-7 w-7 text-white" />,
    title: "Small Group Sizes",
    desc: "Intimate groups ensure personalized attention and authentic, meaningful interactions.",
    highlight: "Max 12 Guests",
  },
  {
    number: "03",
    icon: <Award className="h-7 w-7 text-white" />,
    title: "Authentic & Unique",
    desc: "Access hidden gems and cultural moments you won't find in any guidebook.",
    highlight: "Exclusive Access",
  },
  {
    number: "04",
    icon: <Clock className="h-7 w-7 text-white" />,
    title: "Flexible Cancellation",
    desc: "Plans change — cancel up to 24 hours before for a full, no-questions-asked refund.",
    highlight: "24-Hr Policy",
  },
];

export default function WhyOurExperiences() {
  return (
    <section className="relative overflow-hidden bg-stone-50 py-20 md:py-28">
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(214 211 209) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
            <Star className="h-4 w-4 text-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              The Premium Difference
            </span>
            <Star className="h-4 w-4 text-gold" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-5xl">
            Why Choose Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-gold">Experiences</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-gold/10 z-0" />
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-stone-600 md:text-lg">
            We don't just offer activities — we craft memorable moments with
            safety, authenticity, and uncompromising quality at the core.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col rounded-2xl border border-stone-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10"
            >
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-amber-600 shadow-lg shadow-gold/20 transition-transform duration-300 group-hover:scale-105">
                {reason.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-stone-900 transition-colors group-hover:text-gold">
                {reason.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                {reason.desc}
              </p>

              {/* Highlight Tag */}
              <div className="mt-6 flex items-center gap-1.5 border-t border-stone-100 pt-4">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                  {reason.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
