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
    <div className="mt-8 border-t border-stone-200 pt-6">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {trustPoints.map((point) => (
          <div
            key={point}
            className="flex items-center gap-2 text-sm font-medium text-stone-600"
          >
            <Check className="h-5 w-5 text-gold" />
            <span>{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
