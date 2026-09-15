import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Travel Blog | Guides, Tips & Places | Tirupati Travel",
  description:
    "Read India travel guides and tips covering Tirupati, darshan planning, hotels, taxi services, sightseeing, tour packages and useful travel updates.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
