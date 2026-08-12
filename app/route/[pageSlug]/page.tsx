import { notFound } from "next/navigation";



// import { getRoutePage } from "@/lib/api/route";
import TaxiPage from "@/_components/route/psges/TaxiPage";
import TaxiFarePage from "@/_components/route/psges/TaxiFarePage";
import OneWayTaxiPage from "@/_components/route/psges/OneWayTaxiPage";
import SedanTaxiPage from "@/_components/route/psges/SedanTaxiPage";
import { getRoutePage } from "@/app/lib/api/route";

export default async function Page({
  params,
}: {
  params: Promise<{ pageSlug: string }>;
}) {
  const { pageSlug } = await params;

  const data = await getRoutePage(pageSlug);
console.log(data,"fjd");

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

  default:
    notFound();
}
}