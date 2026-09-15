import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Hotels | 10% Off | Affordable Stays | Book Now",
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
