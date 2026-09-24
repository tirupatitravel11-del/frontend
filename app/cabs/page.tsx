import CabFilters from "../components/Cab/Cabhub/CabFilters";
import WhyBookWithUs from "../components/Cab/Cabhub/WhyTrustUs";
import TrustPoints from "../components/Cab/Cabhub/TrustbelowForm";
import VehicleFleet from "../components/Cab/Cabhub/VehicleFleet";
import UniqueIntro from "../components/Cab/Cabhub/UniqueIntro";
import LucknowFareTable from "../components/Cab/Cabhub/Luckow_faretable";
import AboutLocation from "../components/Cab/Cabhub/AboutLocation";
import LucknowFAQ from "../components/Cab/Cabhub/LucknowFAQ";
import Testimonials from "../components/Home/Testimonials";
import OutstationRoutes from "../components/Cab/Cabhub/OutstationRoute";
import CabServices from "../components/Cab/Cabhub/CabServices";
import CityWiseServices from "../components/Cab/Cabhub/CityWiseServices";
import AyodhyaRoutesSection from "@/_components/AyodhyaRoutesSection";
import CabFaq from "@/_components/CabFaq";


export default function CabsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* Hero Section - Full Width */}
      <section className="relative w-full overflow-hidden py-24 lg:py-32">

        {/* Car Image - Anchored to the true left edge */}
        <img
          src="/ertiga_taxi.png"
          alt="Ertiga Taxi"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[70vw] max-w-[1200px] h-auto object-contain z-0 pointer-events-none"
        />

        {/* Dark Gradient Overlay - Ensures text readability */}
        {/* w-[55%] ensures it covers the text area but fades out before the form */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/60 to-transparent z-[1] pointer-events-none lg:w-[55%]" />

        {/* Content Container - Centered */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* LEFT SIDE — TEXT */}
            <div>
              <p className="font-semibold uppercase tracking-[4px] text-gold drop-shadow-lg">
                500+ Routes · Verified Drivers
              </p>

              <h1 className="mt-4 max-w-xl text-5xl font-bold leading-tight text-white drop-shadow-2xl md:text-6xl">
                Cabs You Can <span className="text-gold">Trust.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/90 drop-shadow-lg">
                One-way or round-trip — choose your route, pick your vehicle, and
                go. Transparent fares, no hidden charges.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="rounded-full border-2 border-white bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-gold hover:text-stone-900 hover:border-gold"
                >
                  Call to Book
                </button>
              </div>
            </div>

            {/* RIGHT SIDE — FORM */}
            <div className="w-full">
              <CabFilters />
            </div>
          </div>
        </div>
      </section>

      <VehicleFleet />
      {/* <CabServices /> */}
      <CityWiseServices />

      <WhyBookWithUs />
      <Testimonials />
      <CabFaq />
    </main>
  );
}
