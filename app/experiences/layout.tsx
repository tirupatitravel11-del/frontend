import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Experiences | @10% Off | Tirupati Travels | Book Now",
  description:
    "Discover unique travel experiences in Tirupati, including guided tours, temple visits, local activities and memorable sightseeing. Call +918726124680.",
};

export default function ExperiencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
