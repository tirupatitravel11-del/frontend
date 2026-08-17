import { notFound } from "next/navigation";

// import { getRoutePage } from "@/lib/api/route";
import TaxiPage from "@/_components/route/pages/TaxiPage";
import TaxiFarePage from "@/_components/route/pages/TaxiFarePage";
import OneWayTaxiPage from "@/_components/route/pages/OneWayTaxiPage";
import SedanTaxiPage from "@/_components/route/pages/SedanTaxiPage";
import { getRoutePage } from "@/app/lib/api/route";
import SUVTaxiPage from "@/_components/route/pages/SUVTaxiPage";
import TempoTravellerPage from "@/_components/route/pages/TempoTravellerPage";
import UrbaniaRentalPage from "@/_components/route/pages/UrbaniaRentalPage";
import InnovaCrystaTaxiPage from "@/_components/route/pages/InnovaCrystaTaxiPage";
import ErtigaTaxiPage from "@/_components/route/pages/ErtigaTaxiPage";
import DzireTaxiPage from "@/_components/route/pages/DzireTaxiPage";

export default async function Page({
  params,
}: {
  params: Promise<{ pageSlug: string }>;
}) {
  const { pageSlug } = await params;

  const data = await getRoutePage(pageSlug);
  console.log(data, "fjd");

  if (!data) {
    notFound();
  }

  switch (data.page.pageType) {
    case "taxi":
      return <TaxiPage data={data} />;

    case "taxi-fare":
      return <TaxiFarePage data={data} />;

    case "one-way-taxi":
      return <OneWayTaxiPage data={data} />;

    case "sedan-taxi":
      return <SedanTaxiPage data={data} />;

    case "suv-taxi":
      return <SUVTaxiPage data={data} />;
    case "tempo-traveller":
      return <TempoTravellerPage data={data} />;
    case "urbania-rental":
      return <UrbaniaRentalPage data={data} />;
    case "innova-crysta-taxi":
      return <InnovaCrystaTaxiPage data={data} />;

    case "ertiga-taxi":
      return <ErtigaTaxiPage data={data} />;

    case "dzire-taxi":
      return <DzireTaxiPage data={data} />;
    default:
      console.log(
        "Unmatched pageType fell through to 404:",
        data?.page?.pageType,
      );
      notFound();
  }
}
