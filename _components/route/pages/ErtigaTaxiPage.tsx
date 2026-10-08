import CabSelector from "@/_components/CabSelector";
import ErtigaAdvantage from "@/_components/Ertiga/ErtigaAdvantage";
import ErtigaFaq from "@/_components/Ertiga/ErtigaFaq";

import ErtigaStorySection from "@/_components/Ertiga/ErtigaStorySection";
import ErtigaTaxiHero from "@/_components/Ertiga/ErtigaTaxiHero";

import VehicleComparison from "@/_components/Ertiga/VehicleComparison";
import FareDetails from "@/_components/FareDetails";
import Hero from "@/_components/Hero";
import HowToBook from "@/_components/Howtobook";
import PopularRoutes from "@/_components/PopularRoutes";
import TaxiFaq from "@/_components/TaxiFaq";
import WhyChooseUs from "@/_components/WhyChooseUs";
import TestimonialCard from "@/app/components/Home/TestimonialCard";
import Testimonials from "@/app/components/Home/Testimonials";



export default function ErtigaTaxiPage({ data }: any) {
  const { route, page } = data;

  const sedanVehicles = data.vehicles.filter(
    (vehicle: any) => vehicle.cabType === "Sedan",
  );

  return (
    <>
      <ErtigaTaxiHero
        from={data.route.fromCity}
        to={data.route.toCity}
        fare={data.fares[0]}
      />
      <ErtigaStorySection />
      <VehicleComparison fares={data.fares[0]} />
      <PopularRoutes
        routes={data.popularRoutes}
        from={route.fromCity}
        to={route.toCity}
        pagetype={page.pageType}
      />
      <ErtigaAdvantage />
      <Testimonials />
      <HowToBook from="Noida" to="Delhi" />
      <WhyChooseUs />
      <ErtigaFaq from={data.route.fromCity}
        to={data.route.toCity} />

      <section className="relative overflow-hidden bg-stone-800 px-4 py-12 sm:px-6 lg:py-12 border-b border-white ">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">


          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Ready to Travel from{" "}
            <span className="text-gold">{data.route.fromCity}</span> to{" "}
            <span className="text-gold">{data.route.toCity}</span>?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
            Book a comfortable ertiga from {data.route.fromCity} to {data.route.toCity} for a convenient
            intercity journey. Choose a suitable vehicle for your family, group,
            or personal travel and get booking assistance from Tirupati Travels.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/918726124680?text=Hello%20Tirupati%20Travels%2C%20I%20want%20to%20book%20a%20ertiga%20from%20${data.route.fromCity}%20to%20${data.route.toCity}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-white transition hover:bg-gold/90 sm:w-auto"
            >
              Book {data.route.fromCity} to {data.route.toCity} Ertiga
            </a>

            <a
              href={`tel:+918726124680`}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Call Now
            </a>
          </div>

          <p className="mt-6 text-sm text-stone-400">
            {data.route.fromCity} to {data.route.toCity} • One Way • Round Trip • Family Travel • Group Travel
          </p>
        </div>
      </section>
    </>
  );
}
