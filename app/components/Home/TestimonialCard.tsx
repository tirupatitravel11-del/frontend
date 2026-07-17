import Image from "next/image";
import { Quote, Star } from "lucide-react";

interface Props {
  name: string;
  location: string;
  rating: number;
  review: string;
  image: string;
}

export default function TestimonialCard({
  name,
  location,
  rating,
  review,
  image,
}: Props) {
  return (
    <div className="group h-full rounded-3xl border border-stone-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-2xl">
      <Quote className="mb-6 text-gold" size={42} />

      <p className="min-h-[90px] leading-8 text-stone-600">"{review}"</p>

      <div className="mt-6 flex gap-1">
        {Array.from({ length: rating }).map((_, index) => (
          <Star
            key={index}
            size={18}
            fill="currentColor"
            className="text-gold"
          />
        ))}
      </div>

      <div className="mt-8 flex items-center gap-4">
        <div>
          <h3 className="font-bold text-stone-900">{name}</h3>

          <p className="text-sm text-stone-500">{location}</p>
        </div>
      </div>
    </div>
  );
}
