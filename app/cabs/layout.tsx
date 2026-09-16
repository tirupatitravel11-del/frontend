import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tirupati Travels | Taxi & Cab Service in India | Book Cabs Online",
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
