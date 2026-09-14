import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Tour Packages | @10% Off | Tirupati Travels | Book Now",
  description:
    "Plan Tirupati tour packages with custom darshan, temple visits, sightseeing itineraries, hotel stays and convenient cab transfers. Call +918726124680.",
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
