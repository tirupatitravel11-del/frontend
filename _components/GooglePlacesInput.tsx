"use client";

import { useEffect, useRef } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import { MapPin } from "lucide-react";

interface GooglePlacesInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onPlaceSelect?: (place: {
    address: string;
    lat?: number;
    lng?: number;
    placeId?: string;
  }) => void;
}

export default function GooglePlacesInput({
  label,
  placeholder = "Search location",
  value,
  onChange,
  onPlaceSelect,
}: GooglePlacesInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef =
    useRef<any | null>(null);

  useEffect(() => {
    let mounted = true;

    const initAutocomplete = async () => {
      const apiKey =
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

      if (!apiKey) {
        console.error(
          "Google Maps API key is missing"
        );
        return;
      }

      try {
        setOptions({
          key: apiKey,
          v: "weekly",
        });

        await importLibrary("places");

        if (!mounted || !inputRef.current) {
          return;
        }

        // Avoid creating autocomplete twice
        if (autocompleteRef.current) {
          return;
        }

        const autocomplete =
          new (window as any).google.maps.places.Autocomplete(
            inputRef.current,
            {
              fields: [
                "formatted_address",
                "geometry",
                "name",
                "place_id",
              ],

              componentRestrictions: {
                country: "in",
              },

              types: ["geocode", "establishment"],
            }
          );

        autocompleteRef.current = autocomplete;

        autocomplete.addListener(
          "place_changed",
          () => {
            const place =
              autocomplete.getPlace();

            const address =
              place.formatted_address ||
              place.name ||
              "";

            onChange(address);

            onPlaceSelect?.({
              address,
              placeId: place.place_id,
              lat: place.geometry?.location?.lat(),
              lng: place.geometry?.location?.lng(),
            });
          }
        );
      } catch (error) {
        console.error(
          "Google Places initialization failed:",
          error
        );
      }
    };

    initAutocomplete();

    return () => {
      mounted = false;
    };
  }, [onChange, onPlaceSelect]);

  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-extrabold uppercase text-gray-800">
        {label}
      </label>

      <div className="relative">
        <div
          className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2"
          style={{
            color: "#C9A227",
          }}
        >
          <MapPin size={20} />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          className="h-14 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm font-medium text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20"
        />
      </div>
    </div>
  );
}