import type { Metadata } from "next";
import { notFound } from "next/navigation";


import TempoTravellerPage from "@/app/components/seo-pages/TempoTravellerPage";
import { seoPages, seoPageSlugs } from "@/app/data/seoPages";
import AirportTaxiPage from "../components/seo-pages/AirportTaxiPage";
import TaxiServicePage from "../components/seo-pages/TaxiServicePage";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoPageSlugs.map((slug) => ({ slug }));
}

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

  return <TaxiServicePage page={page} />;
}
