import Link from "next/link";
import { MapPin, Calendar, Clock } from "lucide-react";
import type { SeoPageData } from "@/app/data/seoPages";
import VehicleFleet from "../Cab/Cabhub/VehicleFleet"; // Adjust path if needed
import HowItWorks from "../AirportTransfer/HowItWorks";
import AirportExperience from "../AirportTransfer/AirportExperience";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "../Home/Testimonials";
import AirportFAQ from "../AirportTransfer/airportFAQ";
import LuggageCapacityAirport from "@/_components/seo/LuggageCapacityAirport";

export default function AirportTaxiPage({ page }: { page: SeoPageData }) {
  return <ServicePage page={page} />;
}

function ServicePage({ page }: { page: SeoPageData }) {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[80vh] overflow-hidden bg-white lg:min-h-screen">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute top-1/2 right-1/4 h-64 w-64 rounded-full bg-slate-100/80 blur-2xl" />
        </div>

        {/* Subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:min-h-screen">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="max-w-3xl">
              {/* Accent line */}
              <div className="mb-6 h-1 w-12 rounded-full bg-gold" />

              {/* Small Heading */}
              <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-gold">
                Punctual • Reliable • Flight Tracking
              </p>

              {/* Main Heading */}
              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
                {page.title || "Airport Taxi Service in Ayodhya"}
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
                {page.description ||
                  "Experience stress-free airport transfers with our punctual and reliable taxi service. We offer live flight tracking, meet & greet assistance, and transparent fares for seamless pickups and drops."}
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="rounded-full bg-gold px-7 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-gold/25 transition-all hover:shadow-xl hover:shadow-gold/30 hover:brightness-110 sm:px-8 sm:py-4"
                >
                  Book Airport Taxi
                </Link>

                <a
                  href="tel:+916390008503"
                  className="rounded-full border-2 border-slate-900 px-7 py-3.5 text-center text-sm font-bold text-slate-900 transition-all hover:bg-slate-900 hover:text-white hover:shadow-lg sm:px-8 sm:py-4"
                >
                  Call to Book
                </a>
              </div>
            </div>

            {/* RIGHT SIDE - Booking Form */}
            <div className="relative hidden lg:block">
              <div className="rounded-3xl border border-slate-200/60 bg-white p-8 shadow-2xl shadow-slate-200/50">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Book Airport Transfer
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Get instant confirmation
                  </p>
                </div>

                <form className="space-y-5">
                  {/* Pickup Location */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Pickup Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Enter pickup address or airport terminal"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20"
                      />
                    </div>
                  </div>

                  {/* Drop Location */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Drop Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Enter destination address"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20"
                      />
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                        <input
                          type="date"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Time
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                        <input
                          type="time"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Type (Tailored for Airport) */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Vehicle Type
                    </label>
                    <select className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-4 pr-10 text-sm text-slate-900 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20">
                      <option>Sedan (4 Seats)</option>
                      <option>SUV (6 Seats)</option>
                      <option>Innova Crysta (7 Seats)</option>
                      <option>Luxury Car</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gold py-4 text-sm font-bold text-white shadow-lg shadow-gold/25 transition-all hover:shadow-xl hover:shadow-gold/30 hover:brightness-110"
                  >
                    Book now
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    No charges until confirmation
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= END HERO SECTION ================= */}

      {/* Add your fleet/other sections below */}

      <HowItWorks />
      <VehicleFleet />
      <LuggageCapacityAirport />
      <AirportExperience />
      <WhyChooseUs />
      <Testimonials />
      <AirportFAQ />
    </>
  );
}
