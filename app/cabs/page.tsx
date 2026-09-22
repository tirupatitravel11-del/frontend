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


export default function CabsPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background Image - Full Visibility */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/services_cabs.jpg')" }}
      />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT SIDE — TEXT */}
          <div>
            <p className="font-semibold uppercase tracking-[4px] text-white drop-shadow-lg">
              500+ Routes · Verified Drivers
            </p>

            <h1 className="mt-4 max-w-xl text-5xl font-bold leading-tight text-white drop-shadow-2xl md:text-6xl">
              Cabs You Can Trust.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/95 drop-shadow-lg">
              One-way or round-trip — choose your route, pick your vehicle, and
              go. Transparent fares, no hidden charges.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="rounded-full border-2 border-white bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-gold hover:text-stone-900"
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
      </section>

      <VehicleFleet />
      <CabServices />
      <CityWiseServices />
      <AyodhyaRoutesSection />
      <Testimonials />
      <WhyBookWithUs />
    </main>
  );
}
