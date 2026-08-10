import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Calendar,
  CarFront,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Info,
  MapPin,
  Route,
  Users,
  X,
  XCircle,
} from "lucide-react";

import { popularPackages } from "../../constants/packages";

type Props = {
  params: Promise<{ slug: string }>;
};

const tagColors = [
  "border-pink-200 bg-pink-50 text-pink-600",
  "border-amber-200 bg-amber-50 text-amber-700",
  "border-emerald-200 bg-emerald-50 text-emerald-600",
  "border-sky-200 bg-sky-50 text-sky-600",
  "border-violet-200 bg-violet-50 text-violet-600",
  "border-rose-200 bg-rose-50 text-rose-600",
  "border-lime-200 bg-lime-50 text-lime-700",
  "border-cyan-200 bg-cyan-50 text-cyan-700",
];

export default async function PackageDetailsPage({ params }: Props) {
  const { slug } = await params;

  const pkg = popularPackages.find((item) => item.slug === slug);

  if (!pkg) {
    notFound();
  }

  return (
    <main className="bg-stone-100 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="rounded-2xl bg-gold p-6 text-white">
          {/* <p className="text-sm">{pkg.type}</p> */}

          <h1 className="mt-2 text-3xl font-bold">{pkg.title}</h1>

          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock3 size={16} />
              {pkg.duration}
            </div>

            <div className="flex items-center gap-2">
              <Users size={16} />
              {pkg.groupSize}
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              {pkg.location}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Left */}
          <div>
            <Image
              src={pkg.image}
              alt={pkg.title}
              width={1200}
              height={700}
              className="h-[380px] w-full rounded-2xl object-cover"
            />

            {/* About This Package */}
            <section className="mt-6 rounded-2xl bg-white p-5 shadow">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-gold">
                  <Info size={16} />
                </span>
                <h2 className="text-xl font-bold text-stone-900">
                  About This Package
                </h2>
              </div>

              <p className="mt-3 text-sm leading-7 text-stone-600">
                {pkg.description}
              </p>
            </section>

            {/* Itinerary Route Bar */}
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3">
              <Route size={16} className="shrink-0 text-red-500" />
              <p className="text-[13px] font-medium text-stone-700">
                <span className="font-bold text-red-500">Itinerary:</span>{" "}
                {pkg.route.join(", ")}
              </p>
            </div>

            {/* Quick Info Chips */}
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-stone-700 shadow-sm">
                <CarFront size={14} className="text-violet-500" />
                {pkg.pricingBasis}
              </span>

              <span className="flex items-center gap-2 rounded-full border border-rose-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-stone-700 shadow-sm">
                <Users size={14} className="text-rose-500" />
                Max {pkg.maxGuests} Guests
              </span>

              <span className="flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-stone-700 shadow-sm">
                <Users size={14} className="text-sky-500" />
                Max {pkg.maxGuests} Seats
              </span>
            </div>

            {/* Package Tags */}
            <section className="mt-5 rounded-2xl bg-white p-5 shadow">
              <h2 className="text-xl font-bold text-stone-900">Package Tags</h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {pkg.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                      tagColors[index % tagColors.length]
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Day-wise Itinerary */}
            <section className="mt-6 rounded-2xl bg-white p-5 shadow">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-gold">
                  <Route size={16} />
                </span>
                <h2 className="text-xl font-bold text-stone-900">
                  Day-wise Itinerary
                </h2>
              </div>

              <div className="mt-5 space-y-4">
                {pkg.itinerary.map((day, index) => (
                  <details
                    key={day.day}
                    open={index === 0}
                    className="group overflow-hidden rounded-xl border border-sky-100 bg-sky-50/60"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 [&::-webkit-details-marker]:hidden">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-500 text-base font-bold text-white shadow">
                          {day.day}
                        </span>

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-500">
                            Day
                          </p>
                          <h3 className="text-sm font-bold leading-5 text-stone-900">
                            Day {day.day}: {day.title}
                          </h3>
                        </div>
                      </div>

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white transition-transform duration-300 group-open:rotate-180">
                        <ChevronDown size={16} />
                      </span>
                    </summary>

                    <div className="border-t border-sky-100 bg-white px-5 py-4">
                      <ul className="space-y-2">
                        {day.activities.map((activity) => (
                          <li
                            key={activity}
                            className="flex items-start gap-3 text-[13px] leading-6 text-stone-600"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                            {activity}
                          </li>
                        ))}
                      </ul>

                      {day.overnight && (
                        <p className="mt-4 text-xs font-bold text-sky-600">
                          Overnight: {day.overnight}
                        </p>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Inclusions / Exclusions */}
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <section className="rounded-2xl border-2 border-emerald-400 bg-emerald-50/60 p-5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-stone-900" />
                  <h3 className="text-base font-bold text-stone-900">
                    Inclusions
                  </h3>
                </div>

                <ul className="mt-3">
                  {pkg.inclusions.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-b border-dashed border-emerald-300 py-2.5 text-[13px] font-medium text-stone-700 last:border-0"
                    >
                      <Check size={14} className="shrink-0 text-emerald-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border-2 border-red-400 bg-red-50/60 p-5">
                <div className="flex items-center gap-2">
                  <XCircle size={18} className="text-stone-900" />
                  <h3 className="text-base font-bold text-stone-900">
                    Exclusions
                  </h3>
                </div>

                <ul className="mt-3">
                  {pkg.exclusions.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-b border-dashed border-red-300 py-2.5 text-[13px] font-medium text-stone-700 last:border-0"
                    >
                      <X size={14} className="shrink-0 text-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Highlights */}
            <section className="mt-6 rounded-2xl bg-white p-5 shadow">
              <h2 className="text-xl font-bold text-stone-900">Highlights</h2>

              <div className="mt-4 space-y-3">
                {pkg.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-stone-700"
                  >
                    <CheckCircle2 className="text-green-600" size={16} />
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-5 rounded-2xl bg-white p-5 shadow">
              <h3 className="text-lg font-bold">Package Summary</h3>

              <div className="mt-5 space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Calendar size={18} />
                  {pkg.duration}
                </div>

                <div className="flex items-center gap-3">
                  <Users size={18} />
                  {pkg.groupSize}
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  {pkg.location}
                </div>
              </div>

              <div className="mt-6 border-t pt-5">
                <p className="text-xs text-stone-500">Starting From</p>

                <p className="mt-1 text-3xl font-bold text-gold">{pkg.price}</p>
              </div>

              <button className="mt-6 w-full rounded-xl bg-gold py-3 text-sm font-bold text-white transition hover:opacity-90">
                Book Now
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
