import CabFilters from "../../components/Cab/Cabhub/CabFilters";
import WhyBookWithUs from "../../components/Cab/Cabhub/WhyTrustUs";
import TrustPoints from "../../components/Cab/Cabhub/TrustbelowForm";
import VehicleFleet from "../../components/Cab/Cabhub/VehicleFleet";
import UniqueIntro from "../../components/Cab/Cabhub/UniqueIntro";
import LucknowFareTable from "../../components/Cab/Cabhub/Luckow_faretable";
import AboutLocation from "../../components/Cab/Cabhub/AboutLocation";
import LucknowFAQ from "../../components/Cab/Cabhub/LucknowFAQ";
import Testimonials from "../../components/Home/Testimonials";
import OutstationRoutes from "../../components/Cab/Cabhub/OutstationRoute";

import { uniqueLocations } from "../../constants/UniqueLocation";
import { aboutLocationData } from "../../constants/AboutLocation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getData(slug: string) {
  const res = await fetch(`${process.env.apiUrl}/api/page/${slug}`, {
    cache: "no-store",
  });

  return res.json();
}
export default async function CityCabsPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getData(params.slug);

  // Example:
  // URL: /cabs/lucknow
  // city = "lucknow"

  const uniqueLocation = uniqueLocations.find(
    (item) => item.slug === slug.toLowerCase(),
  );

  const aboutLocation = aboutLocationData.find(
    (item) => item.city.toLowerCase() === slug.toLowerCase(),
  );

  if (!uniqueLocation || !aboutLocation) {
    return <p>Location not found.</p>;
  }

  return (
    <main className="bg-stone-50">
      {/* Hero + Cab Filter */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT SIDE */}
        </div>

        <TrustPoints />
      </section>

      {/* Dynamic city content */}
      <UniqueIntro location={uniqueLocation} />

      <VehicleFleet />

      <LucknowFareTable />

      <AboutLocation location={aboutLocation} />

      <LucknowFAQ />

      <Testimonials />

      <OutstationRoutes />

      <WhyBookWithUs />
    </main>
  );
}
