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
// import CabFaq from "@/_components/CabFaq";
import CabFAQ from "../components/Cab/Cabhub/FAQ";

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
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/80 to-transparent z-[1] pointer-events-none lg:w-[55%]" />

        {/* Content Container - Centered */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT SIDE — TEXT */}
            <div>
              <p className="font-semibold uppercase tracking-[4px] text-gold drop-shadow-lg">
                500+ Routes · Verified Drivers
              </p>

              <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-white drop-shadow-2xl sm:text-5xl md:text-6xl">
  Book Reliable <span className="text-gold">Cabs Across India</span>
</h1>

<p className="mt-6 max-w-2xl text-base leading-7 text-white/90 drop-shadow-lg sm:text-lg sm:leading-8">
  Choose comfortable cabs for local, outstation, airport, and sightseeing
  journeys. Sedan, SUV, Tempo Traveller, and Urbania options are available.
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
      <CabFAQ />

       {/* Final CTA */}
      <section className="relative overflow-hidden bg-stone-800 px-4 py-12 sm:px-6 lg:py-12 border-b border-white">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-gold">
            Book Your Cab
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Ready to Start Your{" "}
            <span className="text-gold">Journey?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Book a comfortable cab for local travel, outstation trips, airport
            transfers, sightseeing, or group journeys with Tirupati Travels.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/918726124680?text=Hello%20Tirupati%20Travels%2C%20I%20want%20to%20book%20a%20cab."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-gold px-8 py-3.5 text-center text-sm font-bold text-white transition hover:bg-gold/90 sm:w-auto"
            >
              Book on WhatsApp
            </a>

            <a
              href="tel:+918726124680"
              className="w-full rounded-full border border-white/20 px-8 py-3.5 text-center text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Call Now
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            Local Cabs • Outstation • Airport Transfers • Sightseeing •
            Tempo Traveller • Urbania
          </p>
        </div>
      </section>
      
    </main>
  );
}
