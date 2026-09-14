import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pan India Taxi | @10% Off | Tirupati Travels | Book Now",
  description:
    "Book Tirupati taxi and cab services for airport transfers, local sightseeing and outstation trips with reliable drivers and transparent fares. Call +918726124680.",
};

export default function CabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
