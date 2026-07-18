import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  category: string;
  image: string;
  date: string;
  description: string;
}

export default function BlogCard({
  title,
  category,
  image,
  date,
  description,
}: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-2xl">
      <div className="relative h-45 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-gold px-4 py-1 text-sm font-semibold text-white">
          {category}
        </span>
      </div>

      <div className="flex flex-grow flex-col p-6">
        <div className="flex items-center gap-2 text-sm text-stone-500">
          <CalendarDays size={16} className="text-gold" />
          {date}
        </div>

        <h3 className="mt-4 text-2xl font-bold text-stone-900 ">{title}</h3>

        <p className="mt-4 flex-grow leading-7 text-stone-600">{description}</p>

        <Link
          href="/blogs"
          className="mt-8 inline-flex items-center gap-2 font-semibold text-gold"
        >
          Read More
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-2"
          />
        </Link>
      </div>
    </article>
  );
}
