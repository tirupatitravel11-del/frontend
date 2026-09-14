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
import UrbaniaRentalPage from "../components/seo-pages/UrbaniaRentalPage";
import InnovaCrystaPage from "../components/seo-pages/InnovaCrystaPage";
import ErtigaTaxiPage from "../components/seo-pages/ErtigaTaxiPage";
import DzireTaxiPage from "../components/seo-pages/DzireTaxiPage";
import EtiosTaxiPage from "../components/seo-pages/EtiosTaxiPage";
import AmazeTaxiPage from "../components/seo-pages/AmazeTaxiPage";
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

  return createSeoMetadata({
    primaryKeyword: page.title,
    price: pricing.price,
    offer: pricing.offer,
    cta: pricing.cta,
    description: page.description,
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
        page.service !== "tempo" &&
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
