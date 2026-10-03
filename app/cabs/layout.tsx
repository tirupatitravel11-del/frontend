import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taxi Booking in India | Starting @ ₹11/km | Book Now",
  description:
    "Book taxi services across India for local, outstation, airport, and sightseeing travel. Choose from sedans, SUVs, Tempo Travellers, and Urbania starting from ₹11/km. Book Now or call 8726124680.",
};

export default function CabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
