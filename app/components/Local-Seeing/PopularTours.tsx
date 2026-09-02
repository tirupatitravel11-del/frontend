import { Clock, MapPin, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const tours = [
  {
    title: "Half-Day City Tour",
    duration: "4-5 Hours",
    highlights: ["Major Temples & Religious Sites", "Local Markets & Shopping", "Historical Landmarks"],
    price: "₹1,500",
    image: "/package_rajasthan.jpg",
    tag: "Most Popular",
  },
  {
    title: "Full-Day Heritage Tour",
    duration: "8-10 Hours",
    highlights: ["All Major Attractions", "Cultural Sites & Museums", "Scenic Viewpoints", "Traditional Food Stops"],
    price: "₹2,800",
    image: "/Packages_goa.jpg",
    tag: "Best Value",
  },
  {
    title: "Sunrise & Sunset Tour",
    duration: "3 Hours",
    highlights: ["Early Morning Scenic Spots", "Photography Locations", "Golden Hour Views"],
    price: "₹1,200",
    image: "/package_kerala.jpg",
    tag: "Photographer's Choice",
  },
];

export default function PopularTours() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-[4px] text-gold">
            Curated Experiences
          </p>
          <h2 className="mt-2 text-3xl font-bold text-stone-900 md:text-4xl">
            Popular Sightseeing Packages
          </h2>
          <p className="mt-4 text-base text-stone-600 md:text-lg">
            Handcrafted itineraries covering the best attractions in any city. 
            Can't find what you're looking for? We customize!
          </p>
        </div>

        {/* Tours Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {tours.map((tour) => (
            <div
              key={tour.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-stone-900 backdrop-blur-sm">
                  {tour.tag}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-sm text-stone-500">
                  <Clock className="h-4 w-4 text-gold" />
                  {tour.duration}
                </div>

                <h3 className="mt-2 text-xl font-bold text-stone-900 group-hover:text-gold transition-colors">
                  {tour.title}
                </h3>

                {/* Highlights */}
                <ul className="mt-4 space-y-2">
                  {tour.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
                  <div>
                    <p className="text-xs text-stone-500">Starting from</p>
                    <p className="text-lg font-bold text-stone-900">{tour.price}</p>
                  </div>
                  <Link
                    href="#book"
                    className="flex items-center gap-1 text-sm font-semibold text-gold transition-all hover:gap-2"
                  >
                    Book Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}