import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCard from "./BlogCard";
import { blogs } from "../../constants/blogs";

export default function BlogSection() {
  return (
    <section className="bg-stone-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="font-semibold uppercase tracking-[4px] text-gold">
              Travel Insights
            </p>

            <h2 className="mt-3 text-3xl font-bold text-stone-900 md:text-4xl">
              Recent Blog Posts
            </h2>

            <p className="mt-4 max-w-2xl text-base text-stone-600 md:text-lg">
              Explore travel guides, pilgrimage tips, destination highlights,
              and useful articles to plan your next journey with confidence.
            </p>
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-xl border border-gold px-6 py-3 font-semibold text-gold transition hover:bg-gold hover:text-white"
          >
            View All Blogs
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="mt-10 grid gap-6 md:mt-16 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
