import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best India Tour Packages & Holiday Trips | 10% Off | Tirupati Travels",
  description:
        "Discover India tour packages for temple tours, sightseeing, family holidays, and group trips. Explore popular destinations and plan your journey with Tirupati Travels. Book now for an unforgettable travel experience.",

};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
