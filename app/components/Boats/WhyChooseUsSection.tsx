import type { ReactNode } from "react";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-6 w-6",
};

const features: Feature[] = [
  {
    title: "Experienced Boatmen",
    description:
      "Our trained and experienced boatmen know the water well, ensuring a smooth, comfortable, and relaxed journey.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
        <path d="M5 22a7 7 0 0 1 14 0" />
        <path d="M8 13h8" />
      </svg>
    ),
  },
  {
    title: "Safety First",
    description:
      "Life jackets and essential safety equipment are available on every ride, with boats regularly checked and maintained.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    description:
      "Enjoy honest and affordable rates with no unnecessary hidden charges. What you see is what you pay.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10" />
        <path d="M15 9.5c-.5-1-1.5-1.5-3-1.5s-3 .7-3 2 1 2 3 2 3 .7 3 2-1.2 2-3 2-2.5-.5-3-1.5" />
      </svg>
    ),
  },
  {
    title: "Clean & Comfortable Boats",
    description:
      "Well-maintained boats with comfortable seating so you can relax and enjoy the scenery throughout your journey.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 17h18" />
        <path d="M5 17l2-7h10l2 7" />
        <path d="M8 10V6h8v4" />
        <path d="M3 20c1.5 1.5 3 1.5 4.5 0 1.5 1.5 3 1.5 4.5 0 1.5 1.5 3 3 0 4.5-1.5" />
      </svg>
    ),
  },
  {
    title: "Easy & Quick Booking",
    description:
      "Book your boat ride quickly through a simple phone call or WhatsApp message without a complicated booking process.",
    icon: (
      <svg {...iconProps}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    title: "Memorable Experiences",
    description:
      "From peaceful sunrise cruises to beautiful sunset rides and special celebrations, create memories worth remembering.",
    icon: (
      <svg {...iconProps}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "5000+", label: "Happy Guests" },
  { value: "4.9★", label: "Average Rating" },
  { value: "100%", label: "Safety Focus" },
];

interface WhyChooseUsSectionProps {
  title?: string;
  subtitle?: string;
}

export default function WhyChooseUsSection({
  title = "A Boat Ride You Can Trust & Enjoy",
  subtitle = "We are committed to making every ride safe, comfortable and unforgettable — here is what sets us apart.",
}: WhyChooseUsSectionProps) {
  return (
    <section className="bg-[#fffaf2] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ===== Section Header ===== */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[4px] text-gold">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl font-bold text-stone-900 md:text-5xl">
            {title}
          </h2>

          <p className="mt-5 text-base leading-7 text-stone-600 md:text-lg">
            {subtitle}
          </p>
        </div>

        {/* ===== Feature Cards ===== */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                group
                rounded-2xl
                border
                border-stone-200
                bg-white
                p-7
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:border-gold/50
                hover:shadow-lg
              "
            >
              {/* Icon */}
              <div
                className="
                  mb-5
                  inline-flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-gold/10
                  text-gold
                  transition-all
                  duration-300
                  group-hover:bg-gold
                  group-hover:text-white
                  group-hover:scale-110
                "
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-stone-900 transition-colors group-hover:text-gold">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-7 text-stone-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
