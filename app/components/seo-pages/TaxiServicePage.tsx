import Link from "next/link";
import { MapPin, Calendar, Clock } from "lucide-react";
import type { SeoPageData } from "@/app/data/seoPages";
import WhyBookWithUs from "../Cab/Cabhub/WhyTrustUs";
import VehicleFleet from "../Cab/Cabhub/VehicleFleet";
import WhyChooseUs from "@/_components/WhyChooseUs";
import HowItWorks from "../AirportTransfer/HowItWorks";
import OurServices from "@/_components/seo/OurServices";
import HowToBook from "@/_components/Howtobook";
import Testimonials from "../Home/Testimonials";
import HowToBookIt from "@/_components/seo/HowToBookIt";
import TaxiServiceFAQ from "@/_components/seo/TaxiServiceFaq";
import SafetyFeatures from "@/_components/seo/SafetyFeatures";

export default function TaxiServicePage({ page }: { page: SeoPageData }) {
  return <ServicePage page={page} icon="CAR" />;
}

function ServicePage({ page, icon }: { page: SeoPageData; icon: string }) {
  return (
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
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
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
              Reliable • Comfortable • Affordable
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
              {page.title || "Taxi Service in Ayodhya"}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              {page.description ||
                "Book reliable and comfortable taxis in Ayodhya for local travel, sightseeing, airport transfers and outstation journeys with professional drivers and transparent fares."}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/"
                className="rounded-full bg-gold px-7 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-gold/25 transition-all hover:shadow-xl hover:shadow-gold/30 hover:brightness-110 sm:px-8 sm:py-4"
              >
                Book a Taxi
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
                  Book Your Ride
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
                      placeholder="Enter pickup address"
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
                      placeholder="Enter destination"
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

                {/* Vehicle Type */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Vehicle Type
                  </label>
                  <select className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-4 pr-10 text-sm text-slate-900 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20">
                    <option>Sedan (4 seats)</option>
                    <option>SUV (6 seats)</option>
                    <option>Innovia (7 seats)</option>
                    <option>Tempo Traveller (12 seats)</option>
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
      <VehicleFleet />
      <OurServices/>
      <HowToBookIt/>
      <SafetyFeatures/>
      <Testimonials/>
      <WhyChooseUs />
      <TaxiServiceFAQ/>
      

    </section>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-700 shadow-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
