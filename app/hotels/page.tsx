import TrustPoints from "../components/Cab/Cabhub/TrustbelowForm";
import HotelsSection from "../components/Home/HotelSection";
import TestimonialCard from "../components/Home/TestimonialCard";
import Testimonials from "../components/Home/Testimonials";
import HotelAmenities from "../components/Hotels/HotelAmenities";
import HotelBookingProcess from "../components/Hotels/HotelBookingProcess";
import HotelCategories from "../components/Hotels/HotelCategories";
import HotelFAQ from "../components/Hotels/HotelFAQ";
import HotelFilters from "../components/Hotels/HotelFilters";
import HotelTrustPoints from "../components/Hotels/HotelTrustPoints";
import PopularDestinations from "../components/Hotels/PopularDestinations";
import WhyBookWithUsHotels from "../components/Hotels/WhyBookWithUsHotels";
import WhyBookWithUs from "../components/Hotels/WhyBookWithUsHotels";

export default function HotelsPage() {
  return (
    <main>
      {/* Hero + Hotel Filter */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT SIDE — TEXT */}
            <div>
              <p className="font-semibold text-gold">
                500+ Hotels · Verified Stays
              </p>

              <h1 className="mt-5 max-w-xl text-5xl font-bold leading-[1.05] text-stone-900 md:text-6xl">
                Hotels You Can
                <br />
                Trust.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
                Find comfortable hotels at the best prices. Choose your
                destination, select your stay, and enjoy a hassle-free booking
                experience with no hidden charges.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="rounded-full bg-gold px-8 py-4 font-bold text-white shadow-md transition hover:bg-[#c88912]"
                >
                  View Hotels
                </button>

                <button
                  type="button"
                  className="rounded-full border-2 border-gold px-8 py-4 font-bold text-gold transition hover:bg-gold hover:text-white"
                >
                  Call to Book
                </button>
              </div>
            </div>

            {/* RIGHT SIDE — HOTEL FORM */}
            <div className="w-full min-w-0">
              <HotelFilters />
            </div>
          </div>
        </div>
      </section>
      <HotelTrustPoints />
      <PopularDestinations />
      <HotelsSection />
      <HotelCategories />
      <WhyBookWithUsHotels />
      <HotelAmenities />
      {/* <HotelBookingProcess /> */}
      <Testimonials />
      <HotelFAQ />
    </main>
  );
}
