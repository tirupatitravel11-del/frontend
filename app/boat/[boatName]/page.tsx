import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Star, CheckCircle, Clock } from "lucide-react";

import { featuredBoats } from "@/app/constants/featuredBoats";

const activityBoats = {
  "sunrise-boat-ride": {
    title: "Sunrise Boat Ride",
    location: "India",
    image: "/boats/Morning_boat_ride.jpg",
    rating: 4.8,
    price: 999,
  },
  "sunset-cruise": {
    title: "Sunset Cruise",
    location: "India",
    image: "/boats/evening_boat_ride.jpg",
    rating: 4.8,
    price: 1499,
  },
  "celebration-cruise": {
    title: "Celebration Cruise",
    location: "India",
    image: "/boats/birthday_boat.jpeg",
    rating: 4.7,
    price: 1999,
  },
  "family-boat-experience": {
    title: "Family Boat Experience",
    location: "India",
    image: "/boats/family_fun.jpg",
    rating: 4.8,
    price: 1299,
  },
  "private-boat-experience": {
    title: "Private Boat Experience",
    location: "India",
    image: "/boats/boat3.jpg",
    rating: 4.9,
    price: 2499,
  },
} as const;

type BoatDetailsPageProps = {
  params: Promise<{ boatName: string }>;
};

export default async function BoatDetailsPage({ params }: BoatDetailsPageProps) {
  const { boatName } = await params;
  const activityBoat = activityBoats[boatName as keyof typeof activityBoats];
  const boat = featuredBoats.find((item) => item.slug === boatName) || activityBoat;

  // -------------------------
  // BOAT NOT FOUND
  // -------------------------
  if (!boat) {
    return (
      <main className="min-h-screen bg-stone-50 px-5 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-bold text-stone-900">Boat Ride Not Found</h1>
          <p className="mt-2 text-stone-500">
            The boat ride you are looking for does not exist.
          </p>
          <Link
            href="/boats"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-white transition hover:bg-[#c88912]"
          >
            <ArrowLeft size={18} />
            View All Boat Rides
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50">
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="border-x border-stone-200 bg-white px-5 py-5">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-stone-900">{boat.title}</h1>

              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={15}
                    className={
                      index < Math.round(boat.rating)
                        ? "fill-gold text-gold"
                        : "fill-stone-200 text-stone-200"
                    }
                  />
                ))}
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-stone-500">
              <MapPin size={16} className="text-gold" />
              {boat.location}
            </div>
          </div>
        </div>

        {/* ================= MAIN BOAT AREA ================= */}
        <div className="border-x border-stone-200 bg-white px-5 pb-5">
          {/* MAIN IMAGE */}
          <div className="relative h-[300px] overflow-hidden rounded-xl lg:h-[380px]">
            <img
              src={boat.image}
              alt={boat.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* ================= CONTENT + BOOKING ================= */}
          <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_340px]">
            {/* ================= LEFT ================= */}
            <div>
              {/* ABOUT */}
              <section>
                <h2 className="text-lg font-bold text-stone-900">About This Experience</h2>
                <p className="mt-2 max-w-4xl text-sm leading-6 text-stone-600">
                  Enjoy a memorable boat ride with scenic views, comfortable travel, and a carefully 
                  planned experience at {boat.location}. Perfect for families, couples, and solo 
                  travelers looking to unwind on the water.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <button className="rounded-md border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                    🚤 Ride Highlights
                  </button>
                  <button className="rounded-md border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                    🛡️ Safety & Guidelines
                  </button>
                </div>
              </section>

              {/* WHAT'S INCLUDED */}
              <section className="mt-8 border-t border-stone-200 pt-6">
                <h2 className="text-lg font-bold text-stone-900">What's Included</h2>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle size={18} className="text-green-600" />
                    Life Jackets
                  </div>
                  <div className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle size={18} className="text-green-600" />
                    Professional Crew
                  </div>
                  <div className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle size={18} className="text-green-600" />
                    Scenic Route
                  </div>
                  <div className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle size={18} className="text-green-600" />
                    Refreshments
                  </div>
                </div>
              </section>

              {/* LOCATION */}
              <section className="mt-8 border-t border-stone-200 pt-6">
                <h2 className="text-lg font-bold text-stone-900">Boarding Location</h2>
                <div className="mt-3 flex items-start gap-3">
                  <MapPin className="mt-1 text-gold" size={20} />
                  <div>
                    <p className="font-semibold text-stone-800">{boat.location}</p>
                    <p className="mt-1 text-sm text-stone-500">
                      Convenient boarding point with easy access. Exact meeting point details 
                      will be provided upon booking confirmation.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* ================= RIGHT BOOKING CARD ================= */}
            <aside>
              <div className="sticky top-5 rounded-xl bg-white p-6 shadow-sm border border-stone-100">
                <div className="mt-2">
                  <p className="text-sm text-stone-500">Starting from</p>
                  <p className="mt-1 text-3xl font-bold text-stone-900">
                    ₹{boat.price.toLocaleString()}
                  </p>
                  <p className="mt-1 text-sm text-stone-500">Per Person</p>
                </div>

                <Link
                  href="tel:+916390008503"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 font-bold text-white transition hover:bg-[#c88912]"
                >
                  Book This Boat Ride
                  <ArrowRight size={18} />
                </Link>

                <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-stone-500">
                  <Clock size={14} />
                  Instant confirmation • Free cancellation
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}