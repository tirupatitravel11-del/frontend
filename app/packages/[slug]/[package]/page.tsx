import axios from "axios";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock3,
  MapPin,
  Users,
  CheckCircle2,
  Info,
  Route,
  CarFront,
  ChevronDown,
  Check,
  XCircle,
  X,
  IndianRupee,
} from "lucide-react";

import { featuredPackages } from "@/app/constants/featuredPackages";

type Props = {
  params: Promise<{
    slug: string;
    package: string;
  }>;
};

// ===============================
// HELPER: Safe Price Formatter
// ===============================
const formatPrice = (price: any): number => {
  if (!price) return 0;
  // Remove any non-numeric characters (like commas or "₹") and parse to float
  const numericValue = parseFloat(String(price).replace(/[^0-9.-]+/g, ""));
  return isNaN(numericValue) ? 0 : numericValue;
};

// ===============================
// GET SINGLE PACKAGE
// ===============================
async function getPackage(packageSlug: string) {
  try {
    const apiUrl = `${process.env.apiUrl}/api/package/single/${packageSlug}`;
    const response = await axios.get(apiUrl);
    return response.data?.data || null;
  } catch (error) {
    console.error("PACKAGE API ERROR:", error);
    return null;
  }
}

function getFallbackPackage(citySlug: string, packageSlug: string) {
  const featuredPackage = featuredPackages.find(
    (item) => item.citySlug === citySlug && item.packageSlug === packageSlug,
  );

  if (!featuredPackage) return null;

  const days = Number.parseInt(featuredPackage.duration, 10) || 1;
  // Safely format the fallback price
  const safePrice = formatPrice(featuredPackage.price);

  return {
    title: featuredPackage.title,
    slug: packageSlug,
    days,
    featuredImage: featuredPackage.image,
    startingPrice: safePrice, // Now guaranteed to be a valid number
    pricingBasis: "Per Person",
    maxGuests: 8,
    tags: ["Sightseeing", "Family Friendly", "Private Trip"],
    shortDescription: `Explore ${featuredPackage.title} with a comfortable itinerary, scenic destinations, and memorable experiences.`,
    description: `Enjoy a carefully planned ${featuredPackage.title} package designed for a smooth and memorable journey.`,
    inclusions: [],
    exclusions: [],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Exploration",
        activities: [
          "Arrive at your destination and check in.",
          "Begin exploring the highlights of the package.",
        ],
        overnight: citySlug,
      },
    ],
    highlights: [
      "Comfortable travel itinerary",
      "Local sightseeing experiences",
      "Dedicated trip support",
    ],
  };
}

// ===============================
// PAGE
// ===============================
export default async function PackageDetailsPage({ params }: Props) {
  const { slug: citySlug, package: packageSlug } = await params;

  const packageData =
    (await getPackage(packageSlug)) || getFallbackPackage(citySlug, packageSlug);

  // package nahi mila
  if (!packageData) {
    notFound();
  }

  // Safely format the price from the API or fallback data for the UI
  const displayPrice = formatPrice(packageData.startingPrice);

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

  return (
    <main className="bg-stone-100 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        
        <div className="rounded-2xl bg-gold p-6 text-white">
          <h1 className="mt-2 text-3xl font-bold">{packageData.title}</h1>

          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock3 size={16} />
              {packageData.days} days
            </div>

            <div className="flex items-center gap-2">
              <Users size={16} />
              2-8 people
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              {packageData.slug}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Left */}
          <div>
            <img
              src={packageData.featuredImage}
              alt={packageData.title}
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
                {packageData.description}
              </p>
            </section>

            {/* Quick Info Chips */}
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-stone-700 shadow-sm">
                <CarFront size={14} className="text-violet-500" />
                {packageData.pricingBasis}
              </span>

              <span className="flex items-center gap-2 rounded-full border border-rose-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-stone-700 shadow-sm">
                <Users size={14} className="text-rose-500" />
                Max {packageData.maxGuests} Guests
              </span>
            </div>

            {/* Package Tags */}
            <section className="mt-5 rounded-2xl bg-white p-5 shadow">
              <h2 className="text-xl font-bold text-stone-900">Package Tags</h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {packageData.tags.map((tag: string, index: number) => (
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
                {packageData.itinerary.map((day: any, index: number) => (
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
                        {day.activities.map((activity: string) => (
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
            {/* <div className="mt-6 grid gap-5 md:grid-cols-2">
              <section className="rounded-2xl border-2 border-emerald-400 bg-emerald-50/60 p-5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-stone-900" />
                  <h3 className="text-base font-bold text-stone-900">
                    Inclusions
                  </h3>
                </div>

                <ul className="mt-3">
                  {packageData.inclusions.map((item: string) => (
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
                  {packageData.exclusions.map((item: string) => (
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
            </div> */}

            {/* Highlights */}
            <section className="mt-6 rounded-2xl bg-white p-5 shadow">
              <h2 className="text-xl font-bold text-stone-900">Highlights</h2>

              <div className="mt-4 space-y-3">
                {packageData.highlights.map((item: string) => (
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
                  {packageData.days} days
                </div>

                <div className="flex items-center gap-3">
                  <Users size={18} />
                  2-8 people
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  {packageData.slug}
                </div>
              </div>

              <div className="mt-6 border-t pt-5">
                <p className="text-xs text-stone-500">Starting From</p>

                <div className="flex items-center gap-1">
                  <IndianRupee size={18} className="text-gold" />
                  
                  <p className="text-3xl font-bold text-gold">
                    {displayPrice.toLocaleString("en-IN")}
                  </p>
                </div>
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