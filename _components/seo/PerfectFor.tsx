import { Users, Briefcase, Heart, Landmark, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface UseCase {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

interface PerfectForProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  useCases?: UseCase[];
}

// Default use cases tailored for Tempo Traveller
const defaultUseCases: UseCase[] = [
  {
    icon: Users,
    title: "Family Vacations",
    description:
      "Keep the whole family together in one comfortable, air-conditioned vehicle with ample space for everyone's luggage.",
    link: "/contact-us",
  },
  {
    icon: Briefcase,
    title: "Corporate Outings",
    description:
      "Professional, punctual, and spacious transport for team-building events, conferences, and official group travel.",
    link: "/contact-us",
  },
  {
    icon: Heart,
    title: "Wedding & Events",
    description:
      "Reliable shuttle service to transport wedding guests, family members, and bridal parties between venues and hotels.",
    link: "/contact-us",
  },
  {
    icon: Landmark,
    title: "Pilgrimage & Temple Tours",
    description:
      "Customized spiritual circuits with comfortable pushback seats, perfect for long journeys to sacred destinations.",
    link: "/contact-us",
  },
];

export default function PerfectFor({
  eyebrow = "Use Cases",
  title = "Perfect For Every Group Journey",
  subtitle = "Whether it's a weekend getaway or a large corporate event, our Tempo Travellers are designed to make group travel seamless.",
  useCases = defaultUseCases,
}: PerfectForProps) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-gold">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <div
                key={useCase.title}
                className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-xl hover:shadow-gold/10"
              >
                {/* Icon Box */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900">
                  {useCase.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {useCase.description}
                </p>

                {/* Hover Link */}
                {useCase.link && (
                  <Link
                    href={useCase.link}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-gold opacity-0 transition-all duration-300 group-hover:opacity-100"
                  >
                    Book for {useCase.title.toLowerCase()}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
