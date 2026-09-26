"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Loader2 } from "lucide-react";

const GOLD = "#C9A227";

export interface SelectedPlace {
  address: string;
  lat: number;
  lng: number;
}

interface AddressAutocompleteProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSelect: (place: SelectedPlace) => void;
}

interface PhotonFeature {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    name?: string;
    street?: string;
    housenumber?: string;
    city?: string;
    district?: string;
    state?: string;
    country?: string;
    postcode?: string;
    countrycode?: string;
  };
}

function getAddress(feature: PhotonFeature) {
  const p = feature.properties;

  const parts = [
    p.name,
    p.street && p.housenumber
      ? `${p.street} ${p.housenumber}`
      : p.street,
    p.district,
    p.city,
    p.state,
    p.postcode,
    p.country,
  ].filter(Boolean);

  return [...new Set(parts)].join(", ");
}

export default function AddressAutocomplete({
  label,
  placeholder = "Enter location",
  value,
  onChange,
  onSelect,
}: AddressAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<
    PhotonFeature[]
  >([]);

  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] =
    useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(
          event.target as Node
        )
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const searchPlaces = (query: string) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (query.trim().length < 3) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    debounceRef.current = setTimeout(
      async () => {
        try {
          setLoading(true);

          const url =
            `https://photon.komoot.io/api/?` +
            `q=${encodeURIComponent(query)}` +
            `&limit=6` +
            `&lang=en`;

          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(
              "Location search failed"
            );
          }

          const data =
            await response.json();

          const features =
            (data.features || []).filter(
              (feature: PhotonFeature) => {
                return (
                  feature.properties.countrycode ===
                    "IN" ||
                  !feature.properties.countrycode
                );
              }
            );

          setSuggestions(features);
          setShowSuggestions(true);
        } catch (error) {
          console.error(
            "Autocomplete error:",
            error
          );

          setSuggestions([]);
        } finally {
          setLoading(false);
        }
      },
      350
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.value;

    onChange(newValue);
    searchPlaces(newValue);
  };

  const handleSelect = (
    feature: PhotonFeature
  ) => {
    const address =
      getAddress(feature);

    const [lng, lat] =
      feature.geometry.coordinates;

    onChange(address);

    onSelect({
      address,
      lat,
      lng,
    });

    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative w-full"
    >
      <label className="mb-2 block text-sm font-extrabold uppercase text-gray-800">
        {label}
      </label>

      <div className="relative">
        <div
          className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2"
          style={{ color: GOLD }}
        >
          {loading ? (
            <Loader2
              size={20}
              className="animate-spin"
            />
          ) : (
            <MapPin size={20} />
          )}
        </div>

        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={() => {
            if (suggestions.length > 0) {
              setShowSuggestions(true);
            }
          }}
          autoComplete="off"
          className="h-14 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm font-medium text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20"
        />
      </div>

      {/* Suggestions */}
     {showSuggestions && suggestions.length > 0 && (
  <div
    className="
      absolute
      left-0
      right-0
      top-[78px]
      z-[9999]
      max-h-[280px]
      overflow-y-auto
      overscroll-contain
      rounded-xl
      border
      border-gray-200
      bg-white
      shadow-xl
      scrollbar-none
    "
  >
    {suggestions.map((feature, index) => {
      const address = getAddress(feature);

      return (
        <button
          key={`${address}-${index}`}
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            handleSelect(feature);
          }}
          className="
            flex
            w-full
            items-start
            gap-3
            border-b
            border-gray-100
            px-4
            py-3
            text-left
            transition
            last:border-0
            hover:bg-[#C9A227]/10
          "
        >
          {/* Location Icon */}
          <div
            className="
              mt-0.5
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#C9A227]/10
            "
            style={{
              color: GOLD,
            }}
          >
            <MapPin size={16} />
          </div>

          {/* Suggestion Text */}
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-gray-800">
              {feature.properties.name ||
                feature.properties.street ||
                "Location"}
            </p>

            <p className="mt-0.5 line-clamp-2 text-xs text-gray-500">
              {address}
            </p>
          </div>
        </button>
      );
    })}
  </div>
)}
    </div>
  );
}