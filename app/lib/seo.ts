import type { Metadata } from "next";

const BOOKING_PHONE = "+918726124680";

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
    description: `${description} Call ${BOOKING_PHONE}.`,
  };
}
