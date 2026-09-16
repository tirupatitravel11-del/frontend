import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotels in India | Affordable Stays & 10% Off | Tirupati Travels",
  description:
    "Find and book hotels across India with affordable stays, comfortable rooms and convenient booking support. Explore hotels in Tirupati and other cities.",
};

export default function HotelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
