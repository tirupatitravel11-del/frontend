import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top India Destinations | @10% Off | Tirupati Travels | Book Now",
  description:
    "Explore top tourist destinations near Tirupati with temple tours, sightseeing routes and comfortable travel options from Tirupati Travel.",
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
