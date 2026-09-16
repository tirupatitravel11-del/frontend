import type { Metadata } from "next";

const BOOKING_PHONE = "+918726124680";

type SeoMetadataInput = {
  primaryKeyword: string;
  description: string;
  price: string;
  offer?: string;
  cta?: string;
  customTitle?: string;
};

export function createSeoMetadata({
  primaryKeyword,
  description,
  price,
  offer = "10% Off",
  cta = "Book Now",
  customTitle,
}: SeoMetadataInput): Metadata {
  let title = customTitle;

  if (!title) {
    const cleanPrice = price
      ? price
          .replace(/^from\s+/i, "")
          .replace(/\/km$/i, "/KM")
          .replace(/\/day$/i, "/Day")
          .replace(/\/trip$/i, "/Trip")
      : "";

    if (cleanPrice && cta) {
      title = `${primaryKeyword} @ ${cleanPrice} – ${cta}`;
    } else if (cleanPrice) {
      title = `${primaryKeyword} @ ${cleanPrice}`;
    } else if (cta) {
      title = `${primaryKeyword} – ${cta}`;
    } else {
      title = primaryKeyword;
    }
  }

  return {
    title,
    description: `${description}`,
  };
}
