import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pan India Taxi Service | 10% Off | Book Now | Tirupati Travel",
  description:
    "Book affordable Pan India taxi services for local, outstation and airport travel. Choose from sedans, SUVs and tempo travellers with reliable service.",
};

export default function CabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
