import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Crown,
  Heart,
  Users,
  BriefcaseBusiness,
  Wallet,
} from "lucide-react";

const hotelCategories = [
  {
    id: 1,
    title: "Budget Hotels",
    description: "Affordable stays with everything you need for a comfortable trip.",
    icon: Wallet,
    href: "/hotels/budget-hotels",
  },
  {
    id: 2,
    title: "Luxury Hotels",
    description: "Premium stays with exceptional comfort, service and amenities.",
    icon: Crown,
    href: "/hotels/luxury-hotels",
  },
  {
    id: 3,
    title: "Family Hotels",
    description: "Spacious and comfortable stays perfect for family trips.",
    icon: Users,
    href: "/hotels/family-hotels",
  },
  {
    id: 4,
    title: "Couple Friendly",
    description: "Comfortable and private stays for a relaxing getaway.",
    icon: Heart,
    href: "/hotels/couple-friendly-hotels",
  },
  {
    id: 5,
    title: "Business Hotels",
    description: "Convenient stays designed for business and work travel.",
    icon: BriefcaseBusiness,
    href: "/hotels/business-hotels",
  },
  {
    id: 6,
    title: "Premium Stays",
    description: "Enjoy elevated stays with modern facilities and services.",
    icon: Building2,
    href: "/hotels/premium-hotels",
  },
];

export default function HotelCategories() {
  return (
    <section className="border-t border-stone-100 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Hotel Categories
            </p>

            <h2 className="mt-3 text-3xl font-bold text-stone-900 md:text-5xl">
              Find the Right Stay for Your Trip
            </h2>

            <p className="mt-5 max-w-2xl text-base text-gray-600 md:text-lg">
              Choose from a range of hotel categories designed to match your
              budget, travel style and comfort.
            </p>
          </div>

          {/* Desktop */}
          <Link
            href="/hotels"
            className="hidden items-center gap-2 font-semibold text-gold transition hover:gap-3 md:flex"
          >
            View All Hotels
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Mobile Link */}
        <Link
          href="/hotels"
          className="mt-5 flex items-center gap-2 font-semibold text-gold md:hidden"
        >
          View All Hotels
          <ArrowRight size={18} />
        </Link>

        {/* Categories Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hotelCategories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.id}
                href={category.href}
                className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-gold transition duration-300 group-hover:bg-gold group-hover:text-white">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-stone-900">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {category.description}
                </p>

                {/* Link */}
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-gold">
                  Explore Hotels
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}