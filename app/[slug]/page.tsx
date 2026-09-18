import type { Metadata } from "next";
import { notFound } from "next/navigation";

import TempoTravellerPage from "@/app/components/seo-pages/TempoTravellerPage";
import { seoPages, seoPageSlugs } from "@/app/data/seoPages";
import { getVehiclePricing } from "@/app/constants/routePricing";
import { createSeoMetadata } from "@/app/lib/seo";
import PopularRoutes from "@/_components/PopularRoutes";
import { generatePopularRoutes } from "@/app/lib/api/route-data/route-generator";
import AirportTaxiPage from "../components/seo-pages/AirportTaxiPage";
import TaxiServicePage from "../components/seo-pages/TaxiServicePage";
import SuvTaxiPage from "../components/seo-pages/SuvTaxiPage";
import UrbaniaRentalPage from "../components/seo-pages/UrbaniaRentalPage";
import InnovaCrystaPage from "../components/seo-pages/InnovaCrystaPage";
import ErtigaTaxiPage from "../components/seo-pages/ErtigaTaxiPage";
import DzireTaxiPage from "../components/seo-pages/DzireTaxiPage";
import EtiosTaxiPage from "../components/seo-pages/EtiosTaxiPage";
import AmazeTaxiPage from "../components/seo-pages/AmazeTaxiPage";
import SedanTaxiPage from "../components/seo-pages/SedanTaxiPage";
import TaxiContactNumberPage from "../components/seo-pages/TaxiContactNumberPage";
import LuxuryTempoTravellerTaxi from "../components/seo-pages/LuxuryTempoTravellerTaxi";
import SixteenSeaterTempoTravellerTaxiPage from "../components/seo-pages/16SeaterTempoTaxiPage";
import TwelveSeaterTempoTravellerTaxiPage from "../components/seo-pages/12SeaterTempoTaxiPage";
import TwentySeaterTempoTravellerTaxiPage from "../components/seo-pages/20SeaterTempoTaxiPage";
import TwentyFourSeaterTempoTravellerTaxiPage from "../components/seo-pages/24SeaterTempoTaxiPage";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = seoPages[slug.toLowerCase()];

  if (!page) {
    return {};
  }

  const pricingKey = page.slug.includes("-in-")
    ? page.slug.slice(0, page.slug.lastIndexOf("-in-"))
    : page.service === "airport"
      ? "airport-taxi"
      : page.service;
  const normalizedPricingKey =
    pricingKey === "airport-taxi"
      ? pricingKey
      : pricingKey.replace(/-taxi$/, "");
  const pricing = getVehiclePricing(normalizedPricingKey);
  const omitBookNow = false;

  const city = page.city;
  const formattedPrice = pricing.price.startsWith("from")
    ? pricing.price
    : `from ${pricing.price}`;

  let seoDescription = page.description;

  if (page.service === "sedan" || page.slug.includes("sedan")) {
    seoDescription = `Hire verified Sedan taxi in ${city} for local sightseeing, outstation trips & airport transfers. City-expert drivers, clean AC cars.`;
  } else if (page.service === "suv" || page.slug.includes("suv-taxi")) {
    seoDescription = `Hire verified SUV taxi in ${city} for family trips, airport transfers, outstation journeys & group travel. Spacious seating, premium AC comfort.`;
  } else if (page.service === "amaze" || page.slug.includes("amaze")) {
    seoDescription = `Hire verified Honda Amaze taxi in ${city} for local sightseeing, outstation travel & airport drops. Experienced drivers, clean AC sedans.`;
  } else if (page.service === "ertiga" || page.slug.includes("ertiga")) {
    seoDescription = `Hire verified Ertiga taxi in ${city} for family trips, group tours, outstation travel & airport transfers. Experienced drivers, spacious 6-7 seater.`;
  } else if (page.service === "dzire" || page.slug.includes("dzire")) {
    seoDescription = `Hire verified Dzire taxi in ${city} for local sightseeing, outstation trips & airport transfers. City-expert drivers, clean AC cars.`;
  } else if (page.service === "etios" || page.slug.includes("etios")) {
    seoDescription = `Hire verified Toyota Etios taxi in ${city} for local sightseeing, long-distance trips & airport transfers. Expert drivers, spacious boot & AC comfort.`;
  } else if (page.service === "innova-crysta" || page.slug.includes("innova")) {
    seoDescription = `Hire verified Innova Crysta taxi in ${city} for premium family travel, outstation tours & airport drop. Professional drivers, luxury SUV comfort.`;
  } else if (
    page.service === "urbania-rental" ||
    page.slug.includes("urbania")
  ) {
    seoDescription = `Hire verified Force Urbania in ${city} for group tours, pilgrimages, outstation trips & event travel. Experienced drivers, luxury AC recliner seats.`;
  } else if (
    page.service === "luxury-tempo-traveller" ||
    page.slug.includes("luxury-tempo")
  ) {
    seoDescription = `Hire verified Luxury Tempo Traveller in ${city} for group tours, pilgrimages, weddings & outstation travel. Maharaja seats, LED TV & expert drivers.`;
  } else if (page.service === "tempo" || page.slug.includes("tempo")) {
    const tempoLabel = page.slug.includes("12-seater")
      ? "12 Seater Tempo Traveller"
      : page.slug.includes("16-seater")
        ? "16 Seater Tempo Traveller"
        : page.slug.includes("20-seater")
          ? "20 Seater Tempo Traveller"
          : page.slug.includes("24-seater")
            ? "24 Seater Tempo Traveller"
            : "Tempo Traveller";
    seoDescription = `Hire verified ${tempoLabel} in ${city} for group travel, pilgrimages, local sightseeing & outstation trips. Experienced drivers, clean AC seating.`;
  } else if (page.service === "airport" || page.slug.includes("airport")) {
    seoDescription = `Book verified airport taxi in ${city} for 24/7 airport pickups, hotel drops & outstation connections. On-time arrival, flight tracking & clean AC cabs.`;
  } else if (
    page.service === "taxi-contact-number" ||
    page.slug.includes("contact-number")
  ) {
    seoDescription = `Call Tirupati Travel to book verified taxis in ${city} for local sightseeing, outstation trips & airport transfers. Instant quotes & 24/7 support.`;
  } else if (page.service === "taxi" || page.slug.includes("taxi")) {
    seoDescription = `Book verified taxi service in ${city} for local sightseeing, outstation journeys & airport transfers. City-expert drivers, clean AC cars.`;
  }

  return createSeoMetadata({
    primaryKeyword: page.title,
    price: pricing.price,
    offer: pricing.offer,
    cta: omitBookNow ? "" : pricing.cta,
    description: seoDescription,
  });
}

export default async function SeoPage({ params }: PageProps) {
  const { slug } = await params;
  const page = seoPages[slug.toLowerCase()];

  if (!page) {
    notFound();
  }

  const popularRoutes = generatePopularRoutes(page.city, "");
  const routePageType =
    page.service === "tempo"
      ? "tempo-traveller"
      : page.service === "airport"
        ? "taxi"
        : page.service === "innova-crysta"
          ? "innova-crysta-taxi"
          : page.service === "taxi-contact-number"
            ? "taxi-contact-number"
            : page.service === "luxury-tempo-traveller"
              ? "luxury-tempo-traveller"
              : `${page.service}-taxi`;

  const pageContent = (
    <>
      {page.slug.includes("16-seater-tempo-traveller") ? (
        <SixteenSeaterTempoTravellerTaxiPage page={page} />
      ) : page.slug.includes("12-seater-tempo-traveller") ? (
        <TwelveSeaterTempoTravellerTaxiPage page={page} />
      ) : page.slug.includes("20-seater-tempo-traveller") ? (
        <TwentySeaterTempoTravellerTaxiPage page={page} />
      ) : page.slug.includes("24-seater-tempo-traveller") ? (
        <TwentyFourSeaterTempoTravellerTaxiPage page={page} />
      ) : page.service === "tempo" ? (
        <TempoTravellerPage page={page} />
      ) : page.service === "airport" ? (
        <AirportTaxiPage page={page} />
      ) : page.service === "sedan" ? (
        <SedanTaxiPage page={page} />
      ) : page.service === "suv" ? (
        <SuvTaxiPage page={page} />
      ) : page.service === "urbania-rental" ? (
        <UrbaniaRentalPage page={page} />
      ) : page.service === "innova-crysta" ? (
        <InnovaCrystaPage page={page} />
      ) : page.service === "ertiga" ? (
        <ErtigaTaxiPage page={page} />
      ) : page.service === "dzire" ? (
        <DzireTaxiPage page={page} />
      ) : page.service === "etios" ? (
        <EtiosTaxiPage page={page} />
      ) : page.service === "amaze" ? (
        <AmazeTaxiPage page={page} />
      ) : page.service === "taxi-contact-number" ? (
        <TaxiContactNumberPage page={page} />
      ) : page.service === "luxury-tempo-traveller" ? (
        <LuxuryTempoTravellerTaxi page={page} />
      ) : (
        <TaxiServicePage page={page} />
      )}
    </>
  );

  return (
    <>
      {pageContent}
      {page.service !== "taxi" &&
        page.service !== "sedan" &&
        page.service !== "tempo" &&
        page.service !== "suv" &&
        page.service !== "amaze" &&
        page.service !== "dzire" &&
        page.service !== "etios" &&
        page.service !== "ertiga" &&
        page.service !== "innova-crysta" &&
        page.service !== "airport" &&
        page.service !== "urbania-rental" &&
        page.service !== "luxury-tempo-traveller" &&
        page.service !== "taxi-contact-number" &&
        popularRoutes.length > 0 && (
          <PopularRoutes
            routes={popularRoutes}
            from={popularRoutes[0].from}
            to="popular destinations"
            pagetype={routePageType}
          />
        )}
    </>
  );
}
