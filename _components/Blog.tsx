"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  ArrowRight,
  Calendar,
  User,
} from "lucide-react";
import { cn } from "@/app/utils/commonfunction";
import Link from "next/link";
import axios from "axios";
import { DateTime } from "luxon";
import BlogSkeleton from "@/app/utils/BlogSkeleton";

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const [isInView, setIsInView] = useState(false);
  const [blogsData, setBlogsData] = useState<any>([]);
  const [newPage, setnewPage] = useState<number>(1);
  const [blogCount, setBlogCount] = useState<number>(0);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const getEditorBlog = async () => {
    try {
      if (newPage === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      const result = await axios.post(
        `${process.env.apiUrl}/api/get-all-blogs`,
        {
          page: newPage,
          limit: 6,
        }
      );

      if (newPage === 1) {
        setBlogsData(result?.data?.data);
      } else {
        setBlogsData((prev: any) => [
          ...prev,
          ...result?.data?.data,
        ]);
      }

      setBlogCount(result?.data?.pagination?.total);
    } catch (error) {
      console.log(error, "blogerror");
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    getEditorBlog();
  }, [newPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleLoadMore = () => {
    setnewPage((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen bg-white">

      {/* ================= PREMIUM HERO ================= */}
      <section className="relative overflow-hidden border-b border-gray-800 bg-gray-950 py-20 md:py-28">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950" />

        {/* Soft Glow */}
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[120px]" />

        {/* Top Gold Line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-70" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6">

          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-400 backdrop-blur-sm">
            <Calendar className="h-3.5 w-3.5" />
            Travel Insights & Updates
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl md:leading-tight">
            Insights and{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Updates
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            Discover helpful travel insights, destination guides and useful
            tips to make every journey easier, safer and more enjoyable.
          </p>

          {/* Decorative Line */}
          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        </div>
      </section>


      {/* ================= BLOG SECTION ================= */}
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-white py-14 md:py-20"
      >

        {/* Subtle Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-amber-50 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gray-50 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* ================= SECTION HEADER ================= */}
          <div
            className={cn(
              "mb-12 text-center transition-all duration-700 md:mb-16",
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            )}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
              Our Blog
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Travel{" "}
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Stories & Insights
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base">
              Explore useful travel guides, destination insights and expert
              tips to help you plan your next journey with confidence.
            </p>

            <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500" />
          </div>


          {/* ================= BLOG GRID ================= */}
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <BlogSkeleton key={index} />
              ))
            ) : (
              blogsData?.map((item: any, index: number) => (

                <article
                  key={index}
                  className={cn(
                    "group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-amber-200 hover:shadow-xl",
                    isInView
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0"
                  )}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >

                  <Link
                    href={`/blog/${item.slug}`}
                    className="flex h-full flex-col text-black"
                  >

                    {/* ================= IMAGE ================= */}
                    <div className="relative h-[230px] overflow-hidden bg-gray-100 sm:h-[250px]">

                      {item?.content?.content?.find(
                        (block: any) => block.type === "imageResize"
                      ) && (
                        <img
                          src={
                            item?.content?.content?.find(
                              (b: any) => b.type === "imageResize"
                            )?.attrs?.src
                          }
                          alt={item?.title || "Blog image"}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      )}

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/20 to-transparent" />

                      {/* Category */}
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                          Travel
                        </span>
                      </div>

                      {/* Arrow */}
                      <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 group-hover:bg-amber-500 group-hover:scale-110">
                        <ArrowRight className="h-5 w-5 text-gray-900 transition-colors group-hover:text-white" />
                      </div>

                      {/* Title Over Image */}
                      <div className="absolute bottom-4 left-4 right-16">
                        <h3 className="line-clamp-2 text-lg font-bold leading-snug text-white sm:text-xl">
                          {item?.title}
                        </h3>
                      </div>
                    </div>


                    {/* ================= CARD CONTENT ================= */}
                    <div className="flex flex-1 flex-col p-5">

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-gray-500">

                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />

                          <span>
                            {item?.publisheddate
                              ? DateTime.fromISO(
                                  item?.publisheddate
                                ).toFormat("LLL dd, yyyy")
                              : "--"}
                          </span>
                        </div>

                        {item?.author && (
                          <div className="flex items-center gap-1.5">
                            <User className="h-3.5 w-3.5" />
                            <span className="truncate">
                              {item?.author}
                            </span>
                          </div>
                        )}
                      </div>


                      {/* Small Gold Divider */}
                      <div className="mt-4 h-px w-10 bg-amber-400 transition-all duration-300 group-hover:w-16" />


                      {/* Read More */}
                      <div className="mt-5 flex items-center justify-between">

                        <span className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-amber-500">
                          Read Article
                        </span>

                        <span className="flex items-center gap-1 text-sm font-semibold text-amber-500">
                          Explore
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>

                      </div>

                    </div>

                  </Link>
                </article>
              ))
            )}

          </div>


          {/* ================= EMPTY STATE ================= */}
          {!loading && blogsData?.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-gray-500">
                No articles available at the moment.
              </p>
            </div>
          )}


          {/* ================= LOAD MORE ================= */}
          <div className="mt-12 flex justify-center">

            {blogsData?.length < blogCount && (
              <button
                onClick={handleLoadMore}
                disabled={loadingMore}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-amber-500 bg-amber-500 px-7 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-amber-600 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loadingMore ? "Loading..." : "Load More"}

                {!loadingMore && (
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>
            )}

          </div>

        </div>
      </section>
    </main>
  );
};

export default Blog;