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

export default function HotelsPage() {
  return (
    <main>
      {/* Hero + Hotel Filter */}
      <section className="bg-slate-50 relative overflow-hidden border-b border-slate-200">
        {/* Hero */}
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1.1fr] lg:gap-16">
            {/* LEFT SIDE — TEXT */}
            <div className="max-w-xl">
              <p className="font-semibold uppercase tracking-[3px] text-gold">
                500+ Hotels · Verified Stays
              </p>

              <h1 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.05] tracking-tight text-stone-900 sm:text-3xl md:text-3xl">
  Book Comfortable
  <br />
  <span className="text-gold">Hotels Across India</span>
</h1>

<p className="mt-6 max-w-xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
  Discover comfortable stays in popular destinations across India. Choose a
  hotel that suits your trip and get convenient booking assistance from
  Tirupati Travels.
</p>

              <div className="mt-8 flex flex-wrap gap-4">
         

               <a
  href="tel:+918726124680"
  className="inline-flex items-center gap-2 rounded-full border-2 border-gold px-8 py-4 font-bold text-gold transition hover:bg-gold hover:text-white"
>
  <span>Call to Book</span>
</a>
              </div>
            </div>

            {/* RIGHT SIDE — HOTEL FORM */}
            <div className="w-full min-w-0">
              <HotelFilters />
            </div>
          </div>
        </div>

      </section>

      <HotelOffers />
      <Hotels />
      <PopularDestinations />
      {/* <HotelCategories /> */}
      <BrowseMoreHotels />

      <WhyBookWithUsHotels />
      <HotelAmenities />
      {/* <HotelBookingProcess /> */}
      <Testimonials />
      <HotelFAQ />
    </main>
  );
}
