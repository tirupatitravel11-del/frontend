import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { blogs } from "../../constants/blogs";

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <article className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-amber-600"
        >
          <ArrowLeft size={16} />
          Back to blogs
        </Link>

        <div className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm">
          <div className="relative h-[260px] w-full md:h-[420px]">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <div className="mb-5 inline-flex rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {blog.category}
            </div>

            <div className="flex items-center gap-2 text-sm text-stone-500">
              <CalendarDays size={16} className="text-gold" />
              {blog.date}
            </div>

            <h1 className="mt-5 text-3xl font-black leading-tight text-stone-900 md:text-5xl">
              {blog.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-stone-600 md:text-xl">
              {blog.description}
            </p>

            <div className="mt-10 space-y-6 text-base leading-8 text-stone-700 md:text-lg">
              <p>
                Every journey becomes easier when you plan with the right
                information in hand. Whether you are heading for a quick city
                ride, a weekend getaway, or a long outstation trip, a smooth and
                comfortable travel experience starts with smart choices.
              </p>
              <p>
                In this guide, we focus on the practical steps that matter most:
                choosing the best cab, understanding pricing, preparing for the
                route, and making sure your plans fit your budget and travel
                style.
              </p>
              <p>
                The best travel decisions are the ones that balance comfort,
                reliability, and convenience. With the right vehicle, clear
                timing, and a realistic itinerary, your trip can feel much more
                relaxed and enjoyable from start to finish.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
