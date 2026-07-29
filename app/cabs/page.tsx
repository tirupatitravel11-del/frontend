// import CabFilters from "../components/Cab/Cabhub/CabFilters";
// import WhyBookWithUs from "../components/Cab/Cabhub/WhyTrustUs";
// import TrustPoints from "../components/Cab/Cabhub/TrustbelowForm";
// import VehicleFleet from "../components/Cab/Cabhub/VehicleFleet";
// import UniqueIntro from "../components/Cab/Cabhub/UniqueIntro";
// import LucknowFareTable from "../components/Cab/Cabhub/Luckow_faretable";
// import AboutLocation from "../components/Cab/Cabhub/AboutLocation";
// import LucknowFAQ from "../components/Cab/Cabhub/LucknowFAQ";
// import Testimonials from "../components/Home/Testimonials";
// import OutstationRoutes from "../components/Cab/Cabhub/OutstationRoute";

// import { uniqueLocations } from "../constants/UniqueLocation";
// import { aboutLocationData } from "../constants/AboutLocation";

// export default function CabsPage() {
//   const uniqueLocation = uniqueLocations.find(
//     (item) => item.slug === "lucknow",
//   );

//   const aboutLocation = aboutLocationData.find(
//     (item) => item.city === "Lucknow",
//   );

//   if (!uniqueLocation || !aboutLocation) {
//     return <p>Location data not found.</p>;
//   }

//   return (
//     <main className="bg-stone-50">
//       {/* Hero + Cab Filter */}
//       <section className="mx-auto max-w-7xl px-6 py-24">
//         <div className="grid items-center gap-12 lg:grid-cols-2">
//           {/* LEFT SIDE — TEXT */}
//           <div>
//             <p className="font-semibold uppercase tracking-[4px] text-gold">
//               500+ Routes · Verified Drivers
//             </p>

//             <h1 className="mt-4 max-w-xl text-5xl font-bold leading-tight text-stone-900 md:text-6xl">
//               Cabs You Can Trust.
//             </h1>

//             <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
//               One-way or round-trip — choose your route, pick your vehicle, and
//               go. Transparent fares, no hidden charges.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <button
//                 type="button"
//                 className="rounded-full bg-gold px-7 py-3.5 font-bold text-white shadow-md transition hover:bg-[#c88912]"
//               >
//                 View Cab Fares
//               </button>

//               <button
//                 type="button"
//                 className="rounded-full border-2 border-gold px-7 py-3.5 font-bold text-gold transition hover:bg-gold hover:text-white"
//               >
//                 Call to Book
//               </button>
//             </div>
//           </div>

//           {/* RIGHT SIDE — FORM */}
//           <div className="w-full">
//             <CabFilters />
//           </div>
//         </div>

//         <TrustPoints />
//       </section>

//       {/* Dynamic Unique Intro */}
//       <UniqueIntro location={uniqueLocation} />

//       {/* Vehicle Fleet */}
//       <VehicleFleet />

//       {/* Fare Table */}
//       <LucknowFareTable />

//       {/* Dynamic About Location */}
//       <AboutLocation location={aboutLocation} />

//       {/* FAQ */}
//       <LucknowFAQ />

//       {/* Testimonials */}
//       <Testimonials />

//       {/* Outstation Routes */}
//       <OutstationRoutes />

//       {/* Why Book With Us */}
//       <WhyBookWithUs />
//     </main>
//   );
// }
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



export default function CabsPage() {

  return (
    <main className="bg-stone-50">
      {/* Hero + Cab Filter */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT SIDE — TEXT */}
          <div>
            <p className="font-semibold uppercase tracking-[4px] text-gold">
              500+ Routes · Verified Drivers
            </p>

            <h1 className="mt-4 max-w-xl text-5xl font-bold leading-tight text-stone-900 md:text-6xl">
              Cabs You Can Trust.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
              One-way or round-trip — choose your route, pick your vehicle, and
              go. Transparent fares, no hidden charges.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="rounded-full bg-gold px-7 py-3.5 font-bold text-white shadow-md transition hover:bg-[#c88912]"
              >
                View Cab Fares
              </button>

              <button
                type="button"
                className="rounded-full border-2 border-gold px-7 py-3.5 font-bold text-gold transition hover:bg-gold hover:text-white"
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

        <TrustPoints />
      </section>

      {/* Dynamic Unique Intro */}
      {/* <UniqueIntro location={uniqueLocation} /> */}

      {/* Vehicle Fleet */}
      <VehicleFleet />

      {/* Fare Table */}
      {/* <LucknowFareTable /> */}

      {/* Dynamic About Location */}
      {/* <AboutLocation location={aboutLocation} /> */}

      {/* FAQ */}
      {/* <LucknowFAQ /> */}

      {/* Testimonials */}
      <Testimonials />

      {/* Outstation Routes */}
      {/* <OutstationRoutes /> */}

      {/* Why Book With Us */}
      <WhyBookWithUs />
    </main>
  );
}