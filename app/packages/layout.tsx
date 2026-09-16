import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Tour Packages | 10% Off | Custom Trips | Book Now",
  description:
    "Explore India tour packages with temple visits, sightseeing, hotel stays, cab transfers and customizable itineraries. Plan your trip with Tirupati Travel.",
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
