"use client";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  CalendarDays,
  CarFront,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Clock3,
  Info,
  MapPin,
  Route,
  Star,
  Users,
  X,
  XCircle,
} from "lucide-react";

import { popularPackages } from "../../constants/packages";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getData(slug: string) {
  try {
    console.log("Sending slug to API:", slug);

    const apiUrl = `${process.env.apiUrl}/api/package/${slug}`;

    console.log("FINAL API URL:", apiUrl);

    const response = await axios.get(apiUrl, {
      withCredentials: true,
    });

    console.log("FULL API RESPONSE:", response.data);

    return {
      city: response.data.city || null,
      packages: response.data.data || [],
      pagination: response.data.pagination || null,
    };
  } catch (error) {
    console.error("GET PAGE API ERROR:", error);

    if (axios.isAxiosError(error)) {
      console.error("Status:", error.response?.status);
      console.error("Response:", error.response?.data);
    }

    return {
      city: null,
      packages: [],
      pagination: null,
    };
  }
}
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

export default function PackageDetailsPage() {
  const params = useParams();
  const slug = String(params?.slug || "").toLowerCase();
  const [packages, setPackages] = useState<any[]>([]);
  const [city, setCity] = useState<any>(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    hasNextPage: false,
    hasPreviousPage: false,
    limit: 9,
    totalPackages: 0,
    totalPages: 1,
  });
  useEffect(() => {
    const fetchPackages = async () => {
      console.log("CALLING API...");

      const result = await getData(slug);

      console.log("CITY:", result.city);
      console.log("PACKAGES:", result.packages);
      console.log("PAGINATION:", result.pagination);

      setCity(result.city);
      setPackages(result.packages);
      if (result.pagination) {
        setPagination(result.pagination);
      }
    };

    if (slug) {
      fetchPackages();
    }
  }, [slug]);

  // const pkg = packages.find((item) => item.slug === slug);

  // if (!pkg) {
  //   notFound();
  // }

  console.log(packages, "hotesl hai");
  // const filteredPackages = useMemo(() => {
  //   let result = [...packages];

  //   return result;
  // }, [packages]);
  console.log(packages, "sdfgjkh");
  return (
    <section
      id="packages-section"
      className="relative overflow-hidden bg-linear-to-b from-stone-50 to-white py-24"
    >
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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
         

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
            Holiday{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-gold">Packages for {city?.slug}</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-gold/10 z-0" />
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-stone-600">
            Explore {city?.slug} most loved destinations with curated holiday
            packages designed for families, couples, groups and solo travellers.
          </p>

          {/* Page indicator - pill style */}
          {/* <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-stone-100 px-5 py-2 text-sm font-medium text-stone-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-gold" />
            Showing {startIndex + 1} -{" "}
            {Math.min(endIndex, popularPackages.length)} of{" "}
            {popularPackages.length} packages
          </div> */}
        </div>

        {/* Cards Grid - 3 columns */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((item) => (
            <Link
              href={`/packages/${city?.slug}/${item.slug}`}
              key={item.id}
              className="group relative block"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border-2 border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold/60 hover:shadow-2xl hover:shadow-gold/20">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <img
                    src={item.featuredImage}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-stone-900/70 via-stone-900/20 to-transparent" />

                  {/* Duration Badge */}
                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-stone-900/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    <Clock className="h-3.5 w-3.5" />
                    {item.days} days
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-3 left-3 rounded-xl bg-linear-to-r from-gold to-[#c88912] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-stone-900/30">
                    From {item.startingPrice}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  {/* Title */}
                  <h3 className="text-lg font-bold leading-tight text-stone-900 transition-colors group-hover:text-gold">
                    {item.title}
                  </h3>

                  {/* Package Meta Info */}
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1.5 text-xs font-medium text-stone-600">
                      <Users className="h-3.5 w-3.5" />
                      {/* {item.groupSize} */}2-8 people
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1.5 text-xs font-medium text-stone-600">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {/* {item.duration} */}
                      {item.days} days
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-600">
                    {item.shortDescription}
                  </p>

                  {/* Tags & CTA */}
                  <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags?.slice(0, 2).map((tag: any) => (
                        <span
                          key={tag}
                          className="rounded-full bg-linear-to-r from-stone-100 to-stone-50 px-3 py-1 text-xs font-medium text-stone-600 ring-1 ring-stone-200/50"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags && item.tags.length > 2 && (
                        <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-400">
                          +{item.tags.length - 2}
                        </span>
                      )}
                    </div>
                    <span className="flex items-center gap-1 text-sm font-bold text-gold transition-all group-hover:gap-2">
                      View Details
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {packages.length === 0 && (
          <div className="rounded-2xl border-2 border-dashed border-stone-300 bg-white p-12 text-center">
            <p className="text-lg font-semibold text-stone-700">
              No packages found
            </p>
            <p className="mt-2 text-sm text-stone-500">
              Try adjusting your filters or check back later.
            </p>
          </div>
        )}

        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <div className="mt-10">
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
              {/* Previous Button */}
              <button
                type="button"
                onClick={() => {
                  if (pagination.hasPreviousPage) {
                    // API call yahan karna hai
                    console.log("Go to page:", pagination.currentPage - 1);
                  }
                }}
                disabled={!pagination.hasPreviousPage}
                className={`flex w-full items-center justify-center gap-1.5 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all md:w-auto ${
                  !pagination.hasPreviousPage
                    ? "cursor-not-allowed bg-stone-100 text-stone-400"
                    : "bg-white text-stone-700 ring-1 ring-stone-200 hover:bg-gold hover:text-white hover:ring-gold hover:shadow-lg"
                }`}
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </button>

              {/* Page Info */}
              <div className="text-center">
                <p className="text-sm font-semibold text-stone-700">
                  Page {pagination.currentPage} of {pagination.totalPages}
                </p>

                <p className="mt-1 text-xs text-stone-500">
                  {pagination.totalPackages} packages
                </p>
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={() => {
                  if (pagination.hasNextPage) {
                    // API call yahan karna hai
                    console.log("Go to page:", pagination.currentPage + 1);
                  }
                }}
                disabled={!pagination.hasNextPage}
                className={`flex w-full items-center justify-center gap-1.5 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all md:w-auto ${
                  !pagination.hasNextPage
                    ? "cursor-not-allowed bg-stone-100 text-stone-400"
                    : "bg-white text-stone-700 ring-1 ring-stone-200 hover:bg-gold hover:text-white hover:ring-gold hover:shadow-lg"
                }`}
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
    // <main className="bg-stone-100 py-10">
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     {/* Header */}
    //     <div className="rounded-2xl bg-gold p-6 text-white">
    //       {/* <p className="text-sm">{pkg.type}</p> */}

    //       <h1 className="mt-2 text-3xl font-bold">{pkg.title}</h1>

    //       <div className="mt-4 flex flex-wrap gap-4 text-sm">
    //         <div className="flex items-center gap-2">
    //           <Clock3 size={16} />
    //           {pkg.duration}
    //         </div>

    //         <div className="flex items-center gap-2">
    //           <Users size={16} />
    //           {pkg.groupSize}
    //         </div>

    //         <div className="flex items-center gap-2">
    //           <MapPin size={16} />
    //           {pkg.location}
    //         </div>
    //       </div>
    //     </div>

    //     <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
    //       {/* Left */}
    //       <div>
    //         <Image
    //           src={pkg.image}
    //           alt={pkg.title}
    //           width={1200}
    //           height={700}
    //           className="h-[380px] w-full rounded-2xl object-cover"
    //         />

    //         {/* About This Package */}
    //         <section className="mt-6 rounded-2xl bg-white p-5 shadow">
    //           <div className="flex items-center gap-2.5">
    //             <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-gold">
    //               <Info size={16} />
    //             </span>
    //             <h2 className="text-xl font-bold text-stone-900">
    //               About This Package
    //             </h2>
    //           </div>

    //           <p className="mt-3 text-sm leading-7 text-stone-600">
    //             {pkg.description}
    //           </p>
    //         </section>

    //         {/* Itinerary Route Bar */}
    //         <div className="mt-5 flex items-center gap-3 rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3">
    //           <Route size={16} className="shrink-0 text-red-500" />
    //           <p className="text-[13px] font-medium text-stone-700">
    //             <span className="font-bold text-red-500">Itinerary:</span>{" "}
    //             {pkg.route.join(", ")}
    //           </p>
    //         </div>

    //         {/* Quick Info Chips */}
    //         <div className="mt-3 flex flex-wrap gap-2">
    //           <span className="flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-stone-700 shadow-sm">
    //             <CarFront size={14} className="text-violet-500" />
    //             {pkg.pricingBasis}
    //           </span>

    //           <span className="flex items-center gap-2 rounded-full border border-rose-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-stone-700 shadow-sm">
    //             <Users size={14} className="text-rose-500" />
    //             Max {pkg.maxGuests} Guests
    //           </span>

    //           <span className="flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-stone-700 shadow-sm">
    //             <Users size={14} className="text-sky-500" />
    //             Max {pkg.maxGuests} Seats
    //           </span>
    //         </div>

    //         {/* Package Tags */}
    //         <section className="mt-5 rounded-2xl bg-white p-5 shadow">
    //           <h2 className="text-xl font-bold text-stone-900">Package Tags</h2>

    //           <div className="mt-4 flex flex-wrap gap-2">
    //             {pkg.tags.map((tag: any, index: any) => (
    //               <span
    //                 key={tag}
    //                 className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
    //                   tagColors[index % tagColors.length]
    //                 }`}
    //               >
    //                 {tag}
    //               </span>
    //             ))}
    //           </div>
    //         </section>

    //         {/* Day-wise Itinerary */}
    //         <section className="mt-6 rounded-2xl bg-white p-5 shadow">
    //           <div className="flex items-center gap-2.5">
    //             <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-gold">
    //               <Route size={16} />
    //             </span>
    //             <h2 className="text-xl font-bold text-stone-900">
    //               Day-wise Itinerary
    //             </h2>
    //           </div>

    //           <div className="mt-5 space-y-4">
    //             {pkg.itinerary.map((day: any, index: any) => (
    //               <details
    //                 key={day.day}
    //                 open={index === 0}
    //                 className="group overflow-hidden rounded-xl border border-sky-100 bg-sky-50/60"
    //               >
    //                 <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 [&::-webkit-details-marker]:hidden">
    //                   <div className="flex items-center gap-3">
    //                     <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-500 text-base font-bold text-white shadow">
    //                       {day.day}
    //                     </span>

    //                     <div>
    //                       <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-500">
    //                         Day
    //                       </p>
    //                       <h3 className="text-sm font-bold leading-5 text-stone-900">
    //                         Day {day.day}: {day.title}
    //                       </h3>
    //                     </div>
    //                   </div>

    //                   <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white transition-transform duration-300 group-open:rotate-180">
    //                     <ChevronDown size={16} />
    //                   </span>
    //                 </summary>

    //                 <div className="border-t border-sky-100 bg-white px-5 py-4">
    //                   <ul className="space-y-2">
    //                     {day.activities.map((activity: any) => (
    //                       <li
    //                         key={activity}
    //                         className="flex items-start gap-3 text-[13px] leading-6 text-stone-600"
    //                       >
    //                         <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
    //                         {activity}
    //                       </li>
    //                     ))}
    //                   </ul>

    //                   {day.overnight && (
    //                     <p className="mt-4 text-xs font-bold text-sky-600">
    //                       Overnight: {day.overnight}
    //                     </p>
    //                   )}
    //                 </div>
    //               </details>
    //             ))}
    //           </div>
    //         </section>

    //         {/* Inclusions / Exclusions */}
    //         <div className="mt-6 grid gap-5 md:grid-cols-2">
    //           <section className="rounded-2xl border-2 border-emerald-400 bg-emerald-50/60 p-5">
    //             <div className="flex items-center gap-2">
    //               <CheckCircle2 size={18} className="text-stone-900" />
    //               <h3 className="text-base font-bold text-stone-900">
    //                 Inclusions
    //               </h3>
    //             </div>

    //             <ul className="mt-3">
    //               {pkg.inclusions.map((item: any) => (
    //                 <li
    //                   key={item}
    //                   className="flex items-center gap-3 border-b border-dashed border-emerald-300 py-2.5 text-[13px] font-medium text-stone-700 last:border-0"
    //                 >
    //                   <Check size={14} className="shrink-0 text-emerald-600" />
    //                   {item}
    //                 </li>
    //               ))}
    //             </ul>
    //           </section>

    //           <section className="rounded-2xl border-2 border-red-400 bg-red-50/60 p-5">
    //             <div className="flex items-center gap-2">
    //               <XCircle size={18} className="text-stone-900" />
    //               <h3 className="text-base font-bold text-stone-900">
    //                 Exclusions
    //               </h3>
    //             </div>

    //             <ul className="mt-3">
    //               {pkg.exclusions.map((item: any) => (
    //                 <li
    //                   key={item}
    //                   className="flex items-center gap-3 border-b border-dashed border-red-300 py-2.5 text-[13px] font-medium text-stone-700 last:border-0"
    //                 >
    //                   <X size={14} className="shrink-0 text-red-500" />
    //                   {item}
    //                 </li>
    //               ))}
    //             </ul>
    //           </section>
    //         </div>

    //         {/* Highlights */}
    //         <section className="mt-6 rounded-2xl bg-white p-5 shadow">
    //           <h2 className="text-xl font-bold text-stone-900">Highlights</h2>

    //           <div className="mt-4 space-y-3">
    //             {pkg.highlights.map((item: any) => (
    //               <div
    //                 key={item}
    //                 className="flex items-center gap-3 text-sm text-stone-700"
    //               >
    //                 <CheckCircle2 className="text-green-600" size={16} />
    //                 {item}
    //               </div>
    //             ))}
    //           </div>
    //         </section>
    //       </div>

    //       {/* Sidebar */}
    //       <aside>
    //         <div className="sticky top-5 rounded-2xl bg-white p-5 shadow">
    //           <h3 className="text-lg font-bold">Package Summary</h3>

    //           <div className="mt-5 space-y-4 text-sm">
    //             <div className="flex items-center gap-3">
    //               <Calendar size={18} />
    //               {pkg.duration}
    //             </div>

    //             <div className="flex items-center gap-3">
    //               <Users size={18} />
    //               {pkg.groupSize}
    //             </div>

    //             <div className="flex items-center gap-3">
    //               <MapPin size={18} />
    //               {pkg.location}
    //             </div>
    //           </div>

    //           <div className="mt-6 border-t pt-5">
    //             <p className="text-xs text-stone-500">Starting From</p>

    //             <p className="mt-1 text-3xl font-bold text-gold">{pkg.price}</p>
    //           </div>

    //           <button className="mt-6 w-full rounded-xl bg-gold py-3 text-sm font-bold text-white transition hover:opacity-90">
    //             Book Now
    //           </button>
    //         </div>
    //       </aside>
    //     </div>
    //   </div>
    // </main>
  );
}
