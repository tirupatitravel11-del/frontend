import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Travel Experiences | 10% Off | Book Now  | Tirupati Travel",
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
