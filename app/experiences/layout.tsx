import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Travel Experiences, Tirupati Travel | 10% Off |Book Now",
  description:
    "Discover the best travel experiences in India, including temple visits, guided tours, sightseeing and local activities. Plan memorable trips with Tirupati Travel.",
};

export default function ExperiencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
