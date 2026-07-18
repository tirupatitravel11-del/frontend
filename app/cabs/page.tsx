import CabFilters from "../components/Cab/Cabhub/CabFilters";
import CabRouteCard from "../components/Cab/Cabhub/CabRouteCard";
import WhyBookWithUs from "../components/Cab/Cabhub/WhyTrustUs";
import { cabRoutes } from "../constants/cabRoutes";

export default function CabsPage() {
  return (
    <main className="bg-stone-50">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[4px] text-gold">
            Cab Services
          </p>

          <h1 className="mt-3 text-5xl font-bold text-stone-900">
            Explore Our Cab Routes
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-600">
            Book comfortable and reliable cabs for local, outstation, and
            intercity travel across India.
          </p>
        </div>
        <CabFilters />
        <WhyBookWithUs />
      </section>
    </main>
  );
}
