// import { Check } from "lucide-react";

import { Check } from "lucide-react";

const trustPoints = [
  "No cancellation fee up to 6 hrs",
  "Toll & permit extra — shown upfront",
  "24/7 trip support",
  "GST invoice included",
  "Driver & cab verified",
];

export default function TrustPoints() {
  return (
    <div className="mt-10 border-t border-stone-200 pt-8">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {trustPoints.map((point) => (
          <div
            key={point}
            className="group flex items-center gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10">
              <Check className="h-4 w-4 text-gold" strokeWidth={2.5} />
            </div>

            <span className="text-sm font-medium leading-5 text-stone-700">
              {point}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
