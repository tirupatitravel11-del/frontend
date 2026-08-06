import TrustPoints from "../components/Cab/Cabhub/TrustbelowForm";
import HotelsSection from "../components/Home/HotelSection";
import TestimonialCard from "../components/Home/TestimonialCard";
import Testimonials from "../components/Home/Testimonials";
import BrowseMoreHotels from "../components/Hotels/BrowseMoreHotels";
import HotelAmenities from "../components/Hotels/HotelAmenities";
import HotelBookingProcess from "../components/Hotels/HotelBookingProcess";
import HotelCategories from "../components/Hotels/HotelCategories";
import HotelFAQ from "../components/Hotels/HotelFAQ";
import HotelFilters from "../components/Hotels/HotelFilters";
import HotelOffers from "../components/Hotels/HotelOffers";
import Hotels from "../components/Hotels/Hotels";
import HotelTrustPoints from "../components/Hotels/HotelTrustPoints";
import PopularDestinations from "../components/Hotels/PopularDestinations";
import WhyBookWithUsHotels from "../components/Hotels/WhyBookWithUsHotels";
import WhyBookWithUs from "../components/Hotels/WhyBookWithUsHotels";
import PackageFilter from "../components/Package/PackageFilter";
import PackageOffers from "../components/Package/PackageOffers";
import PopularPackages from "../components/Package/PopularPackages";

export default function PackagePage() {
  return (
    <main>
      <main>
        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-white to-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_520px]">
              {/* LEFT SIDE */}
              <div>
                <span className="inline-flex items-center rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
                  ✈️ Discover Incredible Holiday Experiences
                </span>

                <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-stone-900 md:text-6xl">
                  Holiday Packages
                  <br />
                  You Can Trust.
                </h1>

                <p className="mt-6 max-w-lg text-lg leading-8 text-stone-600">
                  Explore handpicked holiday packages across India. From
                  romantic honeymoons and family vacations to adventure trips
                  and group tours, enjoy unforgettable experiences with
                  transparent pricing and hassle-free booking.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="rounded-full bg-gold px-8 py-4 font-bold text-white shadow-md transition hover:bg-[#c88912]"
                  >
                    Explore Packages
                  </button>

                  <button
                    type="button"
                    className="rounded-full border-2 border-gold px-8 py-4 font-bold text-gold transition hover:bg-gold hover:text-white"
                  >
                    Book Trip
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE — PACKAGE FILTER */}
              <div className="w-full min-w-0">
                <PackageFilter />
              </div>
            </div>
          </div>
        </section>

        {/* 
        <PackageOffers /> */}
        <PopularPackages />
      </main>
    </main>
  );
}
