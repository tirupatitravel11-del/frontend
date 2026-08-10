"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Users,
  MapPin,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Star,
  Heart,
} from "lucide-react";
import { useState } from "react";

import { popularPackages } from "@/app/constants/packages";

const ITEMS_PER_PAGE = 9;

export default function PopularPackages() {
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState<number[]>([]);

  // Calculate pagination
  const totalPages = Math.ceil(popularPackages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPackages = popularPackages.slice(startIndex, endIndex);

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      document.getElementById("packages-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const goToPreviousPage = () => goToPage(currentPage - 1);
  const goToNextPage = () => goToPage(currentPage + 1);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 2) endPage = 4;
      else if (currentPage >= totalPages - 1) startPage = totalPages - 3;

      if (startPage > 2) pages.push("...");
      for (let i = startPage; i <= endPage; i++) pages.push(i);
      if (endPage < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

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
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-gold" />
            <Star className="h-5 w-5 text-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Explore India
            </span>
            <Star className="h-5 w-5 text-gold" />
            <div className="h-px w-12 bg-linear-to-l from-transparent to-gold" />
          </div>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
            Top Holiday{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-gold">Packages</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-gold/10 z-0" />
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-stone-600">
            Explore India's most loved destinations with curated holiday
            packages designed for families, couples, groups and solo travellers.
          </p>

          {/* Page indicator - pill style */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-stone-100 px-5 py-2 text-sm font-medium text-stone-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-gold" />
            Showing {startIndex + 1} -{" "}
            {Math.min(endIndex, popularPackages.length)} of{" "}
            {popularPackages.length} packages
          </div>
        </div>

        {/* Cards Grid - 3 columns */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentPackages.map((item) => (
            <Link
              href={`/packages/${item.slug}`}
              key={item.id}
              className="group relative block"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border-2 border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold/60 hover:shadow-2xl hover:shadow-gold/20">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-stone-900/70 via-stone-900/20 to-transparent" />

                  {/* Duration Badge */}
                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-stone-900/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    <Clock className="h-3.5 w-3.5" />
                    {item.duration}
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-3 left-3 rounded-xl bg-linear-to-r from-gold to-[#c88912] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-stone-900/30">
                    From {item.price}
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
                      {item.groupSize}
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1.5 text-xs font-medium text-stone-600">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {item.duration}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-600">
                    {item.description}
                  </p>

                  {/* Tags & CTA */}
                  <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags?.slice(0, 2).map((tag) => (
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
        {currentPackages.length === 0 && (
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
        {totalPages > 1 && (
          <div className="mt-16">
            <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-4">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className={`flex items-center justify-center gap-1.5 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all w-full md:w-auto ${
                  currentPage === 1
                    ? "cursor-not-allowed bg-stone-100 text-stone-400"
                    : "bg-white text-stone-700 ring-1 ring-stone-200 hover:bg-gold hover:text-white hover:ring-gold hover:shadow-lg"
                }`}
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </button>

              {/* Page Numbers */}
              <div className="hidden items-center gap-1.5 md:flex">
                {getPageNumbers().map((page, index) => (
                  <button
                    key={index}
                    onClick={() => typeof page === "number" && goToPage(page)}
                    disabled={typeof page !== "number"}
                    className={`min-w-11 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                      typeof page !== "number"
                        ? "cursor-default text-stone-400"
                        : page === currentPage
                          ? "bg-linear-to-r from-gold to-[#c88912] text-white shadow-lg shadow-gold/30"
                          : "bg-white text-stone-700 ring-1 ring-stone-200 hover:bg-stone-50 hover:text-gold hover:ring-gold"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center justify-center gap-1.5 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all w-full md:w-auto ${
                  currentPage === totalPages
                    ? "cursor-not-allowed bg-stone-100 text-stone-400"
                    : "bg-white text-stone-700 ring-1 ring-stone-200 hover:bg-gold hover:text-white hover:ring-gold hover:shadow-lg"
                }`}
                aria-label="Next page"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Page info */}
            <p className="mt-4 text-center text-sm text-stone-500 md:mt-6">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
