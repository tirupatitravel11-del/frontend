"use client";

import {
  Briefcase,
  Flower2,
  Heart,
  Landmark,
  Plane,
  Users,
} from "lucide-react";

type UseCase = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  text: string;
};

const USE_CASES: UseCase[] = [
  {
    icon: Users,
    title: "Family Trips",
    text: "Travel comfortably with your entire family in one spacious Urbania. Premium seating, powerful AC, generous luggage space, and an experienced driver make group travel convenient and relaxing for everyone.",
  },
  {
    icon: Heart,
    title: "Wedding Functions & Guest Transfers",
    text: "Make wedding transportation simple and organised. Urbania is ideal for moving guests between hotels, venues, functions, celebrations, and reception locations comfortably and on time.",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel & Conferences",
    text: "Keep your team together and on schedule with professional group transportation. Urbania is perfect for conferences, business meetings, corporate events, team outings, and company travel.",
  },
  {
    icon: Landmark,
    title: "Tours & Sightseeing",
    text: "Explore popular attractions, local markets, restaurants, and sightseeing destinations comfortably with your entire group. Enjoy the freedom to travel together without worrying about multiple vehicles.",
  },
  {
    icon: Plane,
    title: "Airport & Railway Transfers",
    text: "Make group pickups and drop-offs simple with a single spacious vehicle. Urbania offers comfortable seating and ample luggage space for airport, railway station, hotel, and city transfers.",
  },
  {
    icon: Flower2,
    title: "Pilgrimage & Religious Tours",
    text: "Travel comfortably with family and religious groups for temple visits, spiritual journeys, and outstation pilgrimages. Spacious seating, AC, luggage capacity, and an experienced driver make longer journeys easier.",
  },
];
export default function UrbaniaUseCases() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gold sm:text-sm">
            Who Travels With Us
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Perfect for Every Group Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            From family holidays and weddings to corporate events and
            pilgrimages, Force Urbania offers a comfortable and convenient way
            to travel together.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:gap-7">
          {USE_CASES.map((useCase) => {
            const Icon = useCase.icon;

            return (
              <article
                key={useCase.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg sm:p-7"
              >
                {/* Top accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-gold transition-all duration-300 group-hover:w-full" />

                {/* Heading */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                    <Icon size={22} strokeWidth={2} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                      {useCase.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-5 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                  {useCase.text}
                </p>

                {/* Bottom indicator */}
                <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="h-px w-6 bg-gold" />
                  Comfortable Group Travel
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
