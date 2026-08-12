"use client";

import { useMemo, useState } from "react";
import { BadgeCheck, Fuel, MapPin, Timer } from "lucide-react";

const WHATSAPP_NUMBER = "916390008503";

type CabType = "SEDAN" | "SUV" | "HATCHBACK";
type FuelType = "CNG" | "DIESEL" | "ELECTRIC" | "PETROL";

interface CabSelectorProps {
  from: string;
  to: string;
}

type CabOption = {
  model: string;
  image: string;
  variant: "specific model" | "or similar";
  type: CabType;
  seats: number;
  rating: number;
  ratingsCount: number;
  tagline: string;
  extraKm: string;
  extraTime: string;
  fuel: FuelType;
  fuelNote: string;
  cancellation: string;
  price: number;
  taxes: number;
};

const CABS: CabOption[] = [
  {
    model: "Swift Dzire",
    image: "/dzire_white.png",
    variant: "specific model",
    type: "SEDAN",
    seats: 4,
    rating: 4.2,
    ratingsCount: 479,
    tagline: "Economical spacious car",
    extraKm: "₹18.0/km after 40 kms",
    extraTime: "₹166.0 per hr after 4hr",
    fuel: "CNG",
    fuelNote: "CNG with refill breaks",
    cancellation: "Free till 6 hours of departure",
    price: 1000,
    taxes: 373,
  },
  {
    model: "Honda Amaze",
    image: "/Creta.avif",
    variant: "specific model",
    type: "SEDAN",
    seats: 4,
    rating: 4.3,
    ratingsCount: 812,
    tagline: "Comfortable compact sedan",
    extraKm: "₹18.0/km after 40 kms",
    extraTime: "₹166.0 per hr after 4hr",
    fuel: "PETROL",
    fuelNote: "Petrol",
    cancellation: "Free till 6 hours of departure",
    price: 1099,
    taxes: 373,
  },
  {
    model: "Maruti Suzuki Ertiga",
    image: "/ertiga_white.jpg",
    variant: "specific model",
    type: "SUV",
    seats: 6,
    rating: 4.2,
    ratingsCount: 257,
    tagline: "Economical large car",
    extraKm: "₹27.0/km after 40 kms",
    extraTime: "₹262.0 per hr after 4hr",
    fuel: "CNG",
    fuelNote: "CNG with refill breaks",
    cancellation: "Free till 6 hours of departure",
    price: 1301,
    taxes: 373,
  },
  {
    model: "Swift",
    image: "/swift.avif",
    variant: "or similar",
    type: "HATCHBACK",
    seats: 4,
    rating: 4.4,
    ratingsCount: 15322,
    tagline: "Economical compact car",
    extraKm: "₹20.0/km after 40 kms",
    extraTime: "₹2.31 per min after 4hr",
    fuel: "CNG",
    fuelNote: "CNG with refill breaks",
    cancellation: "Free till 1 hour of departure",
    price: 1317,
    taxes: 95,
  },

  {
    model: "Toyota Innova",
    image: "/innova.avif",
    variant: "specific model",
    type: "SUV",
    seats: 7,
    rating: 4.3,
    ratingsCount: 640,
    tagline: "Spacious family SUV",
    extraKm: "₹30.0/km after 40 kms",
    extraTime: "₹300.0 per hr after 4hr",
    fuel: "DIESEL",
    fuelNote: "Diesel",
    cancellation: "Free till 6 hours of departure",
    price: 2199,
    taxes: 373,
  },
  {
    model: "Innova Crysta",
    image: "/innova.avif",
    variant: "specific model",
    type: "SUV",
    seats: 7,
    rating: 4.5,
    ratingsCount: 1024,
    tagline: "Premium comfort SUV",
    extraKm: "₹32.0/km after 40 kms",
    extraTime: "₹320.0 per hr after 4hr",
    fuel: "DIESEL",
    fuelNote: "Diesel",
    cancellation: "Free till 6 hours of departure",
    price: 2899,
    taxes: 373,
  },
];

/* ---------- Filter checkbox group ---------- */

function FilterGroup({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string;
  options: { label: string; count: number }[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-bold text-stone-900">{title}</h4>

      <div className="space-y-2.5">
        {options.map((option) => (
          <label
            key={option.label}
            className="flex cursor-pointer items-center justify-between text-sm text-stone-600 hover:text-stone-900"
          >
            <span className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={selected.includes(option.label)}
                onChange={() => onToggle(option.label)}
                className="h-4 w-4 rounded border-stone-300 accent-gold"
              />
              {option.label}
            </span>

            <span className="text-xs text-stone-400">({option.count})</span>
          </label>
        ))}
      </div>
    </div>
  );
}

/* ---------- Main section ---------- */

export default function CabSelector({ from, to }: CabSelectorProps) {
  const [types, setTypes] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [fuels, setFuels] = useState<string[]>([]);

  const toggle = (
    list: string[],
    set: (v: string[]) => void,
    value: string,
  ) => {
    set(
      list.includes(value) ? list.filter((v) => v !== value) : [...list, value],
    );
  };

  const filteredCabs = useMemo(
    () =>
      CABS.filter(
        (cab) =>
          (types.length === 0 || types.includes(cab.type)) &&
          (models.length === 0 || models.includes(cab.model)) &&
          (fuels.length === 0 || fuels.includes(cab.fuel)),
      ),
    [types, models, fuels],
  );

  const countBy = (key: "type" | "model" | "fuel") => {
    const map = new Map<string, number>();
    CABS.forEach((cab) => map.set(cab[key], (map.get(cab[key]) || 0) + 1));
    return [...map.entries()].map(([label, count]) => ({ label, count }));
  };

  const resetFilters = () => {
    setTypes([]);
    setModels([]);
    setFuels([]);
  };

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* ===== Header ===== */}
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Select Your Cab
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Available Cabs for {from} to {to}
          </h2>

          <p className="mt-4 text-base leading-7 text-stone-600">
            Filter by cab type, model or fuel — and book instantly at a fixed
            fare.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          {/* ===== Left: Filters ===== */}
          <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-bold text-stone-900">
                Select Filters
              </h3>

              <button
                type="button"
                onClick={resetFilters}
                className="text-xs font-semibold text-gold hover:underline"
              >
                Reset
              </button>
            </div>

            <div className="space-y-7">
              <FilterGroup
                title="Cab Type"
                options={countBy("type")}
                selected={types}
                onToggle={(v) => toggle(types, setTypes, v)}
              />

              <FilterGroup
                title="Cab Model"
                options={countBy("model")}
                selected={models}
                onToggle={(v) => toggle(models, setModels, v)}
              />

              <FilterGroup
                title="Fuel Type"
                options={countBy("fuel")}
                selected={fuels}
                onToggle={(v) => toggle(fuels, setFuels, v)}
              />
            </div>
          </aside>

          {/* ===== Right: Cab List ===== */}
          <div>
            {filteredCabs.length === 0 && (
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-10 text-center text-stone-600">
                No cabs match your filters.{" "}
                <button
                  type="button"
                  onClick={resetFilters}
                  className="font-bold text-gold hover:underline"
                >
                  Reset filters
                </button>
              </div>
            )}

            <div className="space-y-6">
              {filteredCabs.map((cab) => (
                <article
                  key={cab.model}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gold/40 hover:shadow-xl"
                >
                  <div className="flex flex-col gap-6 md:flex-row">
                    {/* ===== Car Image ===== */}
                    <div className="flex h-28 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-100 md:w-36">
                      <img
                        src={cab.image}
                        alt={cab.model}
                        className="h-full w-full object-contain p-2 transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    {/* ===== Details ===== */}
                    <div className="flex-1">
                      {/* Name + rating */}
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-lg font-bold text-stone-900">
                          {cab.model}
                        </h4>
                        <span className="text-xs text-stone-400">
                          {cab.variant}
                        </span>
                        <span className="rounded bg-emerald-600 px-1.5 py-0.5 text-xs font-bold text-white">
                          {cab.rating}/5
                        </span>
                        <span className="text-xs text-stone-400">
                          {cab.ratingsCount.toLocaleString("en-IN")} ratings
                        </span>
                      </div>

                      {/* Meta */}
                      <p className="mt-1.5 text-sm text-stone-600">
                        {cab.type.charAt(0) + cab.type.slice(1).toLowerCase()}
                        {"  •  AC  •  "}
                        {cab.seats} Seats
                      </p>

                      <p className="mt-3 text-sm font-bold text-stone-900">
                        {cab.tagline}
                      </p>

                      {/* Fare details */}
                      <div className="mt-4 space-y-2.5 text-sm">
                        <div className="flex items-center gap-3">
                          <MapPin size={16} className="shrink-0 text-gold" />
                          <span className="w-32 shrink-0 font-semibold text-stone-700">
                            Extra km fare
                          </span>
                          <span className="text-stone-600">{cab.extraKm}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <Timer size={16} className="shrink-0 text-gold" />
                          <span className="w-32 shrink-0 font-semibold text-stone-700">
                            Extra time fare
                          </span>
                          <span className="text-stone-600">
                            {cab.extraTime}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <Fuel size={16} className="shrink-0 text-gold" />
                          <span className="w-32 shrink-0 font-semibold text-stone-700">
                            Fuel Type
                          </span>
                          <span className="text-stone-600">{cab.fuelNote}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <BadgeCheck
                            size={16}
                            className="shrink-0 text-gold"
                          />
                          <span className="w-32 shrink-0 font-semibold text-stone-700">
                            Cancellation
                          </span>
                          <span className="text-stone-600">
                            <span className="font-semibold text-emerald-600">
                              Free
                            </span>{" "}
                            {cab.cancellation.replace("Free ", "")}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* ===== Price & Book ===== */}
                    <div className="flex shrink-0 flex-row items-center justify-between gap-4 md:flex-col md:items-end">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-stone-900">
                          ₹ {cab.price.toLocaleString("en-IN")}
                        </p>
                        <p className="mt-1 text-xs text-stone-500">
                          + ₹{cab.taxes} (Taxes &amp; Charges)
                        </p>
                      </div>

                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                          `Hello, I want to book ${cab.model} ${from} to ${to} (one way).`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gold px-8 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
