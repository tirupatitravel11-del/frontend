import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  MapPin,
  Users,
} from "lucide-react";

/* =========================================================
   PACKAGE DATA
   Later this will come from your backend API
========================================================= */

const packages = [
  {
    id: 1,
    title: "Delhi Agra Jaipur Golden Triangle",
    slug: "delhi-agra-jaipur",
    destination: "delhi",
    image: "/packages/delhi.jpg",
    price: 12999,
    duration: "4 Days",
    groupSize: "2-8 People",
    description:
      "Explore Delhi, Agra and Jaipur with historical monuments, cultural experiences and comfortable stays.",
    tags: ["Heritage", "Family", "Culture"],
  },

  {
    id: 2,
    title: "Delhi City Heritage Tour",
    slug: "delhi-city-heritage",
    destination: "delhi",
    image: "/packages/delhi.jpg",
    price: 7999,
    duration: "3 Days",
    groupSize: "2-6 People",
    description:
      "Discover the iconic monuments, markets and cultural attractions of Delhi.",
    tags: ["City Tour", "Heritage", "Culture"],
  },

  {
    id: 3,
    title: "Delhi Agra Weekend Tour",
    slug: "delhi-agra-weekend",
    destination: "delhi",
    image: "/packages/delhi.jpg",
    price: 6999,
    duration: "2 Days",
    groupSize: "2-6 People",
    description:
      "A short weekend trip from Delhi covering the Taj Mahal and Agra Fort.",
    tags: ["Weekend", "Taj Mahal", "Family"],
  },

  {
    id: 4,
    title: "Goa Beach Holiday",
    slug: "goa-beach-holiday",
    destination: "goa",
    image: "/packages/goa.jpg",
    price: 8999,
    duration: "4 Days",
    groupSize: "2-6 People",
    description:
      "Enjoy beautiful beaches, nightlife, water sports and relaxing beachside stays.",
    tags: ["Beach", "Nightlife", "Water Sports"],
  },

  {
    id: 5,
    title: "Goa Honeymoon Escape",
    slug: "goa-honeymoon",
    destination: "goa",
    image: "/packages/goa.jpg",
    price: 14999,
    duration: "5 Days",
    groupSize: "2 People",
    description:
      "A romantic Goa honeymoon package with beach resorts, sightseeing and special experiences.",
    tags: ["Honeymoon", "Beach", "Couples"],
  },

  {
    id: 6,
    title: "Mumbai City Explorer",
    slug: "mumbai-city-explorer",
    destination: "mumbai",
    image: "/packages/mumbai.jpg",
    price: 7499,
    duration: "3 Days",
    groupSize: "2-6 People",
    description:
      "Explore Gateway of India, Marine Drive, Elephanta Caves and the best of Mumbai.",
    tags: ["City", "Culture", "Sightseeing"],
  },

  {
    id: 7,
    title: "Mumbai Lonavala Escape",
    slug: "mumbai-lonavala",
    destination: "mumbai",
    image: "/packages/mumbai.jpg",
    price: 8999,
    duration: "3 Days",
    groupSize: "2-6 People",
    description:
      "Enjoy a relaxing getaway from Mumbai with beautiful hill stations and scenic views.",
    tags: ["Nature", "Weekend", "Hills"],
  },

  {
    id: 8,
    title: "Kashmir Paradise Tour",
    slug: "kashmir-paradise",
    destination: "kashmir",
    image: "/packages/kashmir.jpg",
    price: 14999,
    duration: "5 Days",
    groupSize: "2-8 People",
    description:
      "Experience Kashmir's beautiful valleys, houseboats, mountains and scenic landscapes.",
    tags: ["Mountains", "Snow", "Houseboat"],
  },
];

/* =========================================================
   DESTINATION NAMES
========================================================= */

const destinations: Record<string, string> = {
  delhi: "Delhi",
  goa: "Goa",
  mumbai: "Mumbai",
  kashmir: "Kashmir",
  kerala: "Kerala",
  rajasthan: "Rajasthan",
  himachal: "Himachal Pradesh",
  ladakh: "Ladakh",
  "north-east": "North East",
  uttarakhand: "Uttarakhand",
  "tamil-nadu": "Tamil Nadu",
  gujarat: "Gujarat",
  sikkim: "Sikkim",
  odisha: "Odisha",
  punjab: "Punjab",
  "madhya-pradesh": "Madhya Pradesh",
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   PAGE
========================================================= */

export default async function DestinationPackagesPage({
  params,
}: Props) {
  const { slug } = await params;

  const destinationName = destinations[slug];

  /* Invalid destination */
  if (!destinationName) {
    notFound();
  }

  /* =======================================================
     FILTER PACKAGES BY DESTINATION
  ======================================================= */

  const destinationPackages = packages.filter(
    (pkg) => pkg.destination === slug,
  );

  return (
    <main className="min-h-screen bg-stone-50">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">

          <div className="flex items-center gap-2 text-sm text-stone-500">
            <Link
              href="/packages"
              className="hover:text-gold"
            >
              Packages
            </Link>

            <span>/</span>

            <span className="text-stone-900">
              {destinationName}
            </span>
          </div>

          <div className="mt-6">

            <p className="text-sm font-semibold uppercase tracking-wide text-gold">
              Explore {destinationName}
            </p>

            <h1 className="mt-3 text-4xl font-bold text-stone-900 md:text-5xl">
              {destinationName} Holiday Packages
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">
              Discover our best holiday packages for {destinationName}.
              Choose from family vacations, couples trips, adventure tours
              and sightseeing packages.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-stone-500">
              <MapPin className="h-4 w-4 text-gold" />

              {destinationPackages.length} packages available
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          PACKAGES
      ===================================================== */}

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">

          {destinationPackages.length === 0 ? (
            <div className="rounded-2xl bg-white p-12 text-center shadow-sm">

              <h2 className="text-2xl font-bold text-stone-900">
                No packages available
              </h2>

              <p className="mt-3 text-stone-600">
                We currently don't have packages available for{" "}
                {destinationName}.
              </p>

              <Link
                href="/packages"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-white"
              >
                View All Packages
                <ArrowRight size={18} />
              </Link>

            </div>
          ) : (

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {destinationPackages.map((pkg) => (

                <Link
                  key={pkg.id}
                  href={`/packages/${pkg.slug}`}
                  className="group"
                >

                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl">

                    {/* IMAGE */}

                    <div className="relative h-56 overflow-hidden">

                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      {/* Price */}

                      <div className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-3 py-2 shadow">

                        <span className="text-xs text-stone-500">
                          Starting from
                        </span>

                        <div className="text-lg font-bold text-stone-900">
                          ₹{pkg.price.toLocaleString()}
                        </div>

                      </div>

                      {/* Duration */}

                      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white">

                        <Clock className="h-3.5 w-3.5" />

                        {pkg.duration}

                      </div>

                    </div>

                    {/* CONTENT */}

                    <div className="flex flex-1 flex-col p-5">

                      <h2 className="text-xl font-bold text-stone-900 transition-colors group-hover:text-gold">
                        {pkg.title}
                      </h2>

                      {/* META */}

                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-stone-500">

                        <span className="flex items-center gap-1.5">
                          <CalendarDays className="h-4 w-4" />
                          {pkg.duration}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <Users className="h-4 w-4" />
                          {pkg.groupSize}
                        </span>

                      </div>

                      {/* DESCRIPTION */}

                      <p className="mt-4 flex-1 text-sm leading-6 text-stone-600">
                        {pkg.description}
                      </p>

                      {/* TAGS */}

                      <div className="mt-5 flex flex-wrap gap-2">

                        {pkg.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600"
                          >
                            {tag}
                          </span>
                        ))}

                      </div>

                      {/* FOOTER */}

                      <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">

                        <span className="text-sm font-semibold text-gold">
                          View Package
                        </span>

                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-white transition-transform group-hover:translate-x-1">
                          <ArrowRight size={17} />
                        </div>

                      </div>

                    </div>

                  </article>

                </Link>

              ))}

            </div>

          )}

        </div>
      </section>

    </main>
  );
}