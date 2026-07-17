import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  image,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        block
        h-full
        overflow-hidden
        rounded-[28px]
        border
        border-stone-200
        bg-white
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="relative h-[280px] overflow-hidden rounded-t-[28px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Title */}
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-3xl font-bold text-white">{title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex h-[220px] flex-col p-7">
        <p className="flex-grow leading-7 text-stone-600">{description}</p>

        <div className="mt-6 flex items-center font-semibold text-gold">
          <span>Explore Service</span>

          <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  );
}
