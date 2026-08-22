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


    const apiUrl = `${process.env.apiUrl}/api/package/${slug}`;



    const response = await axios.get(apiUrl, {
      withCredentials: true,
    });

  

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


      const result = await getData(slug);



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


  // const filteredPackages = useMemo(() => {
  //   let result = [...packages];

  //   return result;
  // }, [packages]);

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
  
  );
}
