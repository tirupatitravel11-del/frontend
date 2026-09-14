import type { Metadata } from "next";

type SeoMetadataInput = {
  primaryKeyword: string;
  description: string;
  price: string;
  offer?: string;
  cta?: string;
};

export function createSeoMetadata({
  primaryKeyword,
  description,
  price,
  offer = "10% Off",
  cta = "Book Now",
}: SeoMetadataInput): Metadata {
  return {
    title: `${primaryKeyword} ${price} | ${offer} | ${cta}`,
    description,
  };
}
