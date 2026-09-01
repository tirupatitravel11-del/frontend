"use client";

import { useState } from "react";
import { Search, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const BLOGS = [
  {
    id: 1,
    title: "The Ultimate Guide to Planning Your First Outstation Trip",
    excerpt: "Planning your first outstation journey? Learn everything from choosing destinations, booking cabs, packing essentials, to managing your budget effectively.",
    category: "Travel Tips",
    date: "Aug 25, 2026",
    image: "/blog3.jpg",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Cab for Your Outstation Journey",
    excerpt: "Learn how to select the right vehicle based on your group size, luggage, and route to ensure a comfortable and safe trip.",
    category: "Cab Services",
    date: "Aug 22, 2026",
    image: "/blog2.jpg",
  },
  {
    id: 3,
    title: "10 Hidden Gems in South India You Must Visit",
    excerpt: "Beyond the famous tourist spots, discover breathtaking waterfalls, ancient temples, serene beaches, and hill stations that will take your breath away.",
    category: "Destinations",
    date: "Aug 18, 2026",
    image: "/blog1.jpg",
  },
];

const CATEGORIES = ["All Articles", "Pilgrimage", "Travel Tips", "Destinations", "Cab Services"];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = BLOGS.filter((blog) => {
    const matchesCategory = activeCategory === "All Articles" || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Premium Hero Section */}
      <section className="relative border-b border-gray-800 bg-gray-950 py-20 md:py-32 overflow-hidden">
        {/* Subtle Background Gradient for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950" />
        
        {/* Elegant Top Gold Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
        
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
          {/* Modern Premium Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold mb-8 backdrop-blur-sm">
            <Calendar className="h-3.5 w-3.5" />
            Travel Insights & Updates
          </div>

          {/* Refined Typography */}
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl md:leading-tight">
            Insights and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-300">
              Updates
            </span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            A collection of hand-picked articles for travelers, by travelers. 
            Deep dives, insights, and honest advice to navigate your journey with confidence and style.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">All Articles</h2>
            <p className="mt-2 text-sm text-gray-600">
              Find or list tools that will help designers build to last. Simplify design with our comprehensive library.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-gold text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  {/* Category & Date */}
                  <div className="flex items-center gap-3 text-xs">
                    <span className="font-semibold text-gold">
                      {blog.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 text-lg font-bold text-gray-900 group-hover:text-gold">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                    {blog.excerpt}
                  </p>

                  {/* Learn More */}
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredBlogs.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-gray-500">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}