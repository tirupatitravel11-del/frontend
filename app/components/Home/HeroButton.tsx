import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
      <Link
        href="/cab"
        className="rounded-lg bg-orange-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 sm:px-6 sm:text-base"
      >
        Book Cab
      </Link>

      <Link
        href="/packages"
        className="rounded-lg border border-white px-4 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black sm:px-6 sm:text-base"
      >
        View Packages
      </Link>

      <Link
        href="/hotels"
        className="rounded-lg border border-white px-4 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black sm:px-6 sm:text-base"
      >
        Book Hotel
      </Link>

      <Link
        href="/boats"
        className="rounded-lg border border-white px-4 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black sm:px-6 sm:text-base"
      >
        Book Boat Ride
      </Link>
    </div>
  );
}
