import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Travel Blog | @10% Off | Tirupati Travels | Book Now",
  description:
    "Read Tirupati travel guides and tips covering darshan planning, hotels, taxi services, sightseeing and the latest travel updates.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
