import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Hotels | @10% Off | Tirupati Travels | Book Now",
  description:
    "Find the best hotels in Tirupati near Tirumala Temple, with affordable stays, comfortable rooms and convenient booking support.",
};

export default function HotelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
