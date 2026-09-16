import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TaxiPage from "@/_components/route/pages/TaxiPage";
import TaxiFarePage from "@/_components/route/pages/TaxiFarePage";
import OneWayTaxiPage from "@/_components/route/pages/OneWayTaxiPage";
import SedanTaxiPage from "@/_components/route/pages/SedanTaxiPage";
import { getRoutePage } from "@/app/lib/api/route-page";
import SUVTaxiPage from "@/_components/route/pages/SUVTaxiPage";
import TempoTravellerPage from "@/_components/route/pages/TempoTravellerPage";
import UrbaniaRentalPage from "@/_components/route/pages/UrbaniaRentalPage";
import InnovaCrystaTaxiPage from "@/_components/route/pages/InnovaCrystaTaxiPage";
import ErtigaTaxiPage from "@/_components/route/pages/ErtigaTaxiPage";
import DzireTaxiPage from "@/_components/route/pages/DzireTaxiPage";
import EtiosTaxiPage from "@/_components/route/pages/EtiosTaxiPage";
import TaxiContactNumberPage from "@/_components/route/pages/TaxiContactNumberPage";
import AmazeTaxiPage from "@/_components/route/pages/AmazeTaxiPage";
import DistanceAndTravelPage from "@/_components/route/pages/DistanceAndTravelPage";
import LuxuryTempoTravellerPage from "@/_components/route/pages/LuxuryTempoTravellerPage";
import Seater20TempoTravellerPage from "@/_components/route/pages/Seater20TempoTravellerPage";
import TwelveSeaterTempoTravellerPage from "@/_components/route/pages/TwelveSeaterTempoTravellerPage";
import SixteenSeaterTempoTravellerPage from "@/_components/route/pages/SixteenSeaterTempoTravellerPage";
import TwentyFourSeaterTempoTravellerPage from "@/_components/route/pages/TwentyFourSeaterTempoTravellerPage";
import {
  getRoutePricing,
  getVehiclePricing,
} from "@/app/constants/routePricing";
import { createSeoMetadata } from "@/app/lib/seo";
type PageProps = {
  params: Promise<{
    pageSlug: string;
  }>;
};
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { pageSlug } = await params;

  const data = await getRoutePage(pageSlug);

  if (!data) {
    return {
      title: "Page Not Found",
      description: "The requested page was not found.",
    };
  }

  const pageType = data.page.pageType;
  const normalizedVehicleKey =
    pageType === "taxi-fare" ||
    pageType === "one-way-taxi" ||
    pageType === "taxi-contact-number" ||
    pageType === "distance-travel-time" ||
    pageType === "taxi"
      ? "taxi"
      : pageType.replace(/-taxi$/, "");

  const pricing = getVehiclePricing(normalizedVehicleKey);
  const vehicleRoutePageTypes = new Set([
    "sedan-taxi",
    "dzire-taxi",
    "amaze-taxi",
    "etios-taxi",
    "ertiga-taxi",
    "innova-crysta-taxi",
    "tempo-traveller",
    "luxury-tempo-traveller",
    "12-seater-tempo-traveller",
    "16-seater-tempo-traveller",
    "20-seater-tempo-traveller",
    "24-seater-tempo-traveller",
    "urbania-rental",
    "distance-travel-time",
    "taxi-contact-number",
  ]);
  const pageTypeLabels: Record<string, string> = {
    taxi: "Taxi",
    "taxi-fare": "Taxi Fare",
    "one-way-taxi": "One Way Taxi",
    "suv-taxi": "SUV Taxi",
    "taxi-contact-number": "Taxi Contact Number",
    "distance-travel-time": "Distance & Travel Time",
    "sedan-taxi": "Sedan Taxi",
    "dzire-taxi": "Dzire Taxi",
    "amaze-taxi": "Amaze Taxi",
    "etios-taxi": "Etios Taxi",
    "ertiga-taxi": "Ertiga Taxi",
    "innova-crysta-taxi": "Innova Crysta Taxi",
    "tempo-traveller": "Tempo Traveller",
    "luxury-tempo-traveller": "Luxury Tempo Traveller",
    "12-seater-tempo-traveller": "12 Seater Tempo Traveller",
    "16-seater-tempo-traveller": "16 Seater Tempo Traveller",
    "20-seater-tempo-traveller": "20 Seater Tempo Traveller",
    "24-seater-tempo-traveller": "24 Seater Tempo Traveller",
    "urbania-rental": "Force Urbania",
  };
  const pageTypeLabel = pageTypeLabels[data.page.pageType] ?? "Taxi";
  const omitBookNow = false;
  const primaryKeyword = data.route
    ? `${data.route.fromCity} to ${data.route.toCity} ${pageTypeLabel}`
    : data.page.metaTitle;
  const fromCity = data.route?.fromCity ?? "your city";
  const toCity = data.route?.toCity ?? "your destination";
  const price = pricing.price;
  const formattedPrice = price
    ? price.startsWith("from") || price.startsWith("₹")
      ? price.startsWith("from")
        ? price
        : `from ${price}`
      : `from ${price}`
    : "affordable rates";

  const routeDescription =
    data.page.pageType === "taxi-contact-number"
      ? `Call Tirupati Travel for ${fromCity} to ${toCity} taxi booking, instant fare quotes & 24/7 travel support. City-expert drivers, clean AC cabs.`
      : data.page.pageType === "taxi-fare"
        ? `Check ${fromCity} to ${toCity} taxi fare starting ${formattedPrice}. Compare verified cabs for local & outstation trips. Zero hidden charges.`
        : data.page.pageType === "one-way-taxi"
          ? `Book verified one-way taxi from ${fromCity} to ${toCity} starting ${formattedPrice}. City-expert drivers, clean AC cabs & instant pickup.`
          : data.page.pageType === "suv-taxi"
            ? `Book verified SUV taxi from ${fromCity} to ${toCity} starting ${formattedPrice}. Spacious family seating, extra luggage space & expert drivers.`
            : data.page.pageType === "sedan-taxi"
              ? `Book verified sedan taxi from ${fromCity} to ${toCity} starting ${formattedPrice}. City-expert drivers, clean AC cars & smooth travel.`
              : data.page.pageType === "dzire-taxi"
                ? `Hire verified Dzire taxi from ${fromCity} to ${toCity} for one-way & outstation travel. City-expert drivers, clean AC cars.`
                : data.page.pageType === "etios-taxi"
                  ? `Hire verified Toyota Etios taxi from ${fromCity} to ${toCity} for outstation travel & family trips. Expert drivers, spacious boot & AC comfort.`
                  : data.page.pageType === "amaze-taxi"
                    ? `Hire verified Honda Amaze taxi from ${fromCity} to ${toCity} for one-way & round trips. City-expert drivers, clean AC sedans.`
                    : data.page.pageType === "ertiga-taxi"
                      ? `Hire verified Ertiga taxi from ${fromCity} to ${toCity} for family trips & outstation travel. Experienced drivers, spacious 6-7 seater.`
                      : data.page.pageType === "innova-crysta-taxi"
                        ? `Hire verified Innova Crysta taxi from ${fromCity} to ${toCity} for premium outstation travel & family tours. Expert drivers, luxury SUV comfort.`
                        : data.page.pageType === "urbania-rental"
                          ? `Hire verified Force Urbania from ${fromCity} to ${toCity} for group travel, pilgrimages & outstation tours. Expert drivers, luxury AC seating.`
                          : data.page.pageType === "luxury-tempo-traveller"
                            ? `Hire verified Luxury Tempo Traveller from ${fromCity} to ${toCity} for group tours, pilgrimages & family travel. Maharaja seats & expert drivers.`
                            : data.page.pageType === "tempo-traveller" ||
                              data.page.pageType.includes(
                                "-seater-tempo-traveller",
                              )
                              ? `Hire verified ${pageTypeLabel} from ${fromCity} to ${toCity} for group tours, pilgrimages & outstation travel. Experienced drivers, clean AC seating.`
                              : data.page.pageType === "distance-travel-time"
                                ? `Check distance and travel time from ${fromCity} to ${toCity}. Book verified cabs ${formattedPrice} with city-expert drivers & 24/7 service.`
                                : `Book verified taxi service from ${fromCity} to ${toCity} starting ${formattedPrice}. City-expert drivers, clean AC cars & 24/7 support.`;

  return createSeoMetadata({
    primaryKeyword,
    price: pricing.price,
    offer: pricing.offer,
    cta: omitBookNow ? "" : pricing.cta,
    description: routeDescription,
  });
}
export default async function Page({
  params,
}: {
  params: Promise<{ pageSlug: string }>;
}) {
  const { pageSlug } = await params;

  const data = await getRoutePage(pageSlug);
  console.log(data, "fjddddd");

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
    case "etios-taxi":
      return <EtiosTaxiPage data={data} />;
    case "taxi-contact-number":
      return <TaxiContactNumberPage data={data} />;
    case "amaze-taxi":
      return <AmazeTaxiPage data={data} />;
    case "distance-travel-time":
      return <DistanceAndTravelPage data={data} />;
    case "luxury-tempo-traveller":
      return <LuxuryTempoTravellerPage data={data} />;
    case "20-seater-tempo-traveller":
      return <Seater20TempoTravellerPage data={data} />;
    case "12-seater-tempo-traveller":
      return <TwelveSeaterTempoTravellerPage data={data} />;
    case "16-seater-tempo-traveller":
      return <SixteenSeaterTempoTravellerPage data={data} />;
    case "24-seater-tempo-traveller":
      return <TwentyFourSeaterTempoTravellerPage data={data} />;
    default:
      console.log(
        "Unmatched pageType fell through to 404:",
        data?.page?.pageType,
      );
      notFound();
  }
}
