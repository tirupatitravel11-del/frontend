"use client";

import { useState } from "react";

interface HotelFiltersProps {
  selectedFilters: string[];
  toggleFilter: (filter: string) => void;

  selectedPrice: string;
  setSelectedPrice: (price: string) => void;
}

export default function HotelFiltersLeft({
  selectedFilters,
  toggleFilter,
  selectedPrice,
  setSelectedPrice,
}: HotelFiltersProps) {
  const [showMore, setShowMore] = useState(false);

  const popularFilters = [
    { name: "Early Bird Deals" },
    { name: "5 Star"  },
    { name: "Unmarried Couples Allowed"  },
    { name: "Breakfast Included" },
    { name: "Swimming Pool"  },
    { name: "Free Cancellation" },
    { name: "Couple Friendly"  },
    { name: "Parking" },
  ];

  const priceFilters = [
    { name: "₹ 0 - ₹ 1000" },
    { name: "₹ 1000 - ₹ 2000"  },
    { name: "₹ 2000 - ₹ 3000" },
    { name: "₹ 3000 - ₹ 5000"  },
    { name: "₹ 5000 - ₹ 7000"  },
    { name: "₹ 7000+"  },
  ];

  return (
    <aside className="rounded-xl bg-white shadow-sm">
      {/* For You */}
      <div className="px-5 py-5">
        <h3 className="text-[18px] font-semibold text-stone-900">
          For You
        </h3>

        <div className="mt-3 space-y-1">
          {(showMore
            ? popularFilters
            : popularFilters.slice(0, 5)
          ).map((filter) => (
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
          ))}
        </div>

        <button
          type="button"
          onClick={() => setShowMore(!showMore)}
          className="mt-3 block w-full text-right text-[14px] font-semibold text-blue-600"
        >
          {showMore ? "Show less" : "Show 7 more"}
        </button>
      </div>

      {/* Price Per Night */}
      <div className="border-t border-stone-200 px-5 py-5">
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
                type="radio"
                name="priceRange"
                checked={selectedPrice === price.name}
                onChange={() => setSelectedPrice(price.name)}
                className="h-[20px] w-[20px] shrink-0 accent-blue-500"
              />

              <span className="flex-1">{price.name}</span>

              {/* <span className="text-[14px] text-stone-400">
                ({price.count})
              </span> */}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}