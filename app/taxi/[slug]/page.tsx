import LucknowFAQ from "@/app/components/Cab/Cabhub/LucknowFAQ";
import LucknowFareTable from "@/app/components/Cab/Cabhub/Luckow_faretable";
import OutstationRoutes from "@/app/components/Cab/Cabhub/OutstationRoute";
import TrustPoints from "@/app/components/Cab/Cabhub/TrustbelowForm";
import VehicleFleet from "@/app/components/Cab/Cabhub/VehicleFleet";
import WhyBookWithUs from "@/app/components/Cab/Cabhub/WhyTrustUs";
import Testimonials from "@/app/components/Home/Testimonials";

async function getData(slug: string) {
  const res = await fetch(
    `${process.env.apiUrl}/api/page/${slug}`,
    {
      cache: "no-store",
    },
  );

  console.log("API called");

  return res.json();
}

export default async function Page({ params }: any) {
  const { slug } = await params;

  const data = await getData(slug);

  console.log("DATA:", data);

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT SIDE */}
        </div>

        <TrustPoints />
      </section>

      <VehicleFleet />

      <LucknowFareTable  />

      <LucknowFAQ />

      <Testimonials />

      <OutstationRoutes />

      <WhyBookWithUs />

      {/* Later:
      <HeroSection route={data.route} />
      <FareSection vehicles={data.vehicles} />
      <CabList vehicles={data.vehicles} />
      */}
    </>
  );
}