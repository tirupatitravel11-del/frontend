import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Phone,
  Users,
  Car,
  Shield,
} from "lucide-react";
import { taxiFleet } from "@/app/constants/TaxiFleet";
import WhyBookWithUs from "@/app/components/Cab/Cabhub/WhyTrustUs";
import BookingProcess from "@/app/components/Cab/Cabhub/BookingProcess";
import FareDetails from "@/_components/FareDetails";

const PHONE_NUMBER = "+916390008503";

export default async function TaxiDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Find the vehicle based on the URL slug
  const vehicle = taxiFleet.find((v) => v.slug === slug);

  // If no vehicle matches the slug, show a 404 page
  if (!vehicle) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
    

      {/* ===== Hero Section ===== */}
      <section className="relative bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left: Image */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-lg">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 left-4 rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                {vehicle.category}
              </div>
            </div>

            {/* Right: Details */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {vehicle.name}
              </h1>

              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                A comfortable {vehicle.category.toLowerCase()} for dependable
                local, airport, and outstation travel. Enjoy{" "}
                {vehicle.features.slice(0, 3).join(", ").toLowerCase()}.
              </p>

              {/* Quick Specs */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <Users className="h-6 w-6 text-gold" />
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500">
                      Seating
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      {vehicle.seating}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <Car className="h-6 w-6 text-gold" />
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500">
                      Category
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      {vehicle.category}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <Shield className="h-6 w-6 text-gold" />
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500">
                      Safety
                    </p>
                    <p className="text-sm font-bold text-slate-900">Verified</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-white shadow-lg shadow-gold/20 transition-all hover:bg-gold/90 hover:shadow-xl sm:text-base"
                >
                  <Phone className="h-5 w-5" />
                  Call to Book Now
                </a>
                <a
                  href={`https://wa.me/${PHONE_NUMBER.replace("+", "")}?text=Hi, I want to book a ${vehicle.name} for my upcoming trip.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-900 transition-all hover:border-gold hover:text-gold sm:text-base"
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[4px] text-gold">
              Built for your journey
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Everything you need in one ride
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vehicle.features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/30 hover:shadow-md"
              >
                <CheckCircle2 className="h-7 w-7 text-gold" />
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {feature}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Carefully selected for a smoother, more comfortable journey.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Fare Details (Generic) ===== */}
      <FareDetails
        from="Your Pickup Location"
        to="Your Destination"
        title={`${vehicle.name} Fare Details`}
        subtitle="Get clear one-way and round-trip pricing with verified drivers and no hidden booking fees." fares={[]}      />
    
      <BookingProcess />
      <WhyBookWithUs />
    </main>
  );
}