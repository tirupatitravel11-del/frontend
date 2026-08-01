"use client";

import { useState } from "react";

interface HotelFiltersProps {
  selectedFilters: string[];
  toggleFilter: (filter: string) => void;
}

export default function HotelFiltersLeft({
  selectedFilters,
  toggleFilter,
}: HotelFiltersProps) {
  const [showMore, setShowMore] = useState(false);

  const popularFilters = [
    { name: "Early Bird Deals" },
    { name: "5 Star", count: 34 },
    { name: "Unmarried Couples Allowed", count: 1323 },
    { name: "Breakfast Included", count: 1078 },
    { name: "Swimming Pool", count: 49 },
    { name: "Free Cancellation", count: 856 },
    { name: "Couple Friendly", count: 632 },
    { name: "Parking", count: 421 },
  ];

  const priceFilters = [
    { name: "₹ 0 - ₹ 1000", count: 143 },
    { name: "₹ 1000 - ₹ 2000", count: 772 },
    { name: "₹ 2000 - ₹ 3000", count: 501 },
    { name: "₹ 3000 - ₹ 5000", count: 368 },
    { name: "₹ 5000 - ₹ 7000", count: 241 },
    { name: "₹ 7000+", count: 187 },
  ];

  return (
    <aside className="w-full bg-white">
      {/* For You */}
      <div className="border-b border-stone-200 px-5 py-2 pb-6">
        <h3 className="text-[18px] font-semibold text-stone-900">For You</h3>

        <div className="mt-3 space-y-1">
          {(showMore ? popularFilters : popularFilters.slice(0, 5)).map(
            (filter) => (
              <label
                key={filter.name}
                className="flex cursor-pointer items-center gap-3 py-1.5 text-[16px] leading-6 text-stone-700"
              >
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(filter.name)}
                  onChange={() => toggleFilter(filter.name)}
                  className="h-[22px] w-[22px] shrink-0 accent-blue-500"
                />

                <span className="flex-1">{filter.name}</span>

                {filter.count !== undefined && (
                  <span className="text-[14px] text-stone-400">
                    ({filter.count})
                  </span>
                )}
              </label>
            ),
          )}
        </div>

        <button
          type="button"
          onClick={() => setShowMore(!showMore)}
          className="mt-3 block w-full text-right text-[14px] font-semibold text-blue-600"
        >
          {showMore ? "Show less" : "Show 7 more"}
        </button>
      </div>

      {/* Preference */}
      <div className="border-b border-stone-200 px-5 py-5">
        <h3 className="text-[18px] font-semibold text-stone-900">Preference</h3>

        <div className="mt-3 space-y-3">
          {/* Price per Night */}
          <label className="flex cursor-pointer items-center gap-3 text-[16px] text-stone-700">
            <input
              type="radio"
              name="preference"
              defaultChecked
              className="h-[22px] w-[22px] accent-blue-500"
            />

            <span className="font-medium">Price per Night</span>
          </label>

          {/* Total Price */}
          <label className="flex cursor-pointer items-start gap-3 text-[16px] text-stone-700">
            <input
              type="radio"
              name="preference"
              className="mt-0.5 h-[22px] w-[22px] accent-blue-500"
            />

            <div>
              <div className="flex items-center gap-2">
                <span>Total Price</span>

                <span className="rounded bg-pink-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                  new
                </span>
              </div>

              <p className="text-[13px] text-stone-500">
                All nights & rooms excluding taxes
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* Price Per Night */}
      <div className="px-5 py-5">
        <h3 className="text-[18px] font-semibold text-stone-900">
          Price Per Night
        </h3>

        <div className="mt-3 space-y-1">
          {priceFilters.map((price) => (
            <label
              key={price.name}
              className="flex cursor-pointer items-center gap-3 py-1.5 text-[16px] text-stone-700"
            >
              <input
                type="checkbox"
                className="h-[22px] w-[22px] shrink-0 accent-blue-500"
              />

              <span className="flex-1">{price.name}</span>

              <span className="text-[14px] text-stone-400">
                ({price.count})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Star Rating */}
      <div className="border-t border-stone-200 px-5 py-5">
        <h3 className="text-[18px] font-semibold text-stone-900">
          Star Rating
        </h3>

        <div className="mt-3 space-y-1">
          {[5, 4, 3, 2, 1].map((star) => (
            <label
              key={star}
              className="flex cursor-pointer items-center gap-3 py-1.5"
            >
              <input
                type="checkbox"
                className="h-[22px] w-[22px] shrink-0 accent-blue-500"
              />

              <div className="flex items-center gap-1">
                {Array.from({ length: star }).map((_, i) => (
                  <span key={i} className="text-[14px] text-gold">
                    ★
                  </span>
                ))}

                <span className="ml-1 text-[14px] text-stone-600">
                  {star} Star{star > 1 ? "s" : ""}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
