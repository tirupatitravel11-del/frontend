import type { Metadata } from "next";
import { notFound } from "next/navigation";

import TempoTravellerPage from "@/app/components/seo-pages/TempoTravellerPage";
import { seoPages, seoPageSlugs } from "@/app/data/seoPages";
import AirportTaxiPage from "../components/seo-pages/AirportTaxiPage";
import TaxiServicePage from "../components/seo-pages/TaxiServicePage";
import UrbaniaRentalPage from "../components/seo-pages/UrbaniaRentalPage";
import InnovaCrystaPage from "../components/seo-pages/InnovaCrystaPage";
import ErtigaTaxiPage from "../components/seo-pages/ErtigaTaxiPage";
import DzireTaxiPage from "../components/seo-pages/DzireTaxiPage";
import EtiosTaxiPage from "../components/seo-pages/EtiosTaxiPage";


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

  return {
    title: `${page.title} | Tirupati Travel`,
    description: page.description,
  };
}

export default async function SeoPage({ params }: PageProps) {
  const { slug } = await params;
  const page = seoPages[slug.toLowerCase()];

  if (!page) {
    notFound();
  }

  if (page.service === "tempo") {
    return <TempoTravellerPage page={page} />;
  }

  if (page.service === "airport") {
    return <AirportTaxiPage page={page} />;
  }

  if (page.service === "urbania-rental") {
    return <UrbaniaRentalPage page={page} />;
  }

  if (page.service === "innova-crysta") {
    return <InnovaCrystaPage page={page} />;
  }

   if (page.service === "ertiga") {
    return <ErtigaTaxiPage page={page} />;
  }
   if (page.service === "dzire") {
    return <DzireTaxiPage page={page} />;
  }
   if (page.service === "etios") {
    return <EtiosTaxiPage page={page} />;
  }



  return <TaxiServicePage page={page} />;
}
