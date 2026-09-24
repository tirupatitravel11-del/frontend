"use client";

import React, { useState } from "react";
import {
  MapPin,
  CalendarDays,
  Clock3,
  Search,
  ArrowLeftRight,
  Plane,
  Users,
  BriefcaseBusiness,
  Wind,
  ArrowRight,
  CheckCircle2,
  CarFront,
} from "lucide-react";

type TripType = "oneWay" | "roundTrip" | "local" | "airport";

type AirportTripType = "pickup" | "drop";

interface FormData {
  from: string;
  to: string;
  city: string;

  pickupAddress: string;
  dropAirport: string;

  pickupDate: string;
  pickupTime: string;

  returnDate: string;
  returnTime: string;
}

interface Car {
  id: number;
  name: string;
  type: string;
  image: string;
  seats: number;
  luggage: number;
  price: number;
  ac: boolean;
  description: string;
}

/* =========================================================
   GOLD THEME
========================================================= */

const GOLD = "#C9A227";
const DARK_GOLD = "#A98212";

/* =========================================================
   DUMMY CARS
   Later replace this with API response
========================================================= */

const cars: Car[] = [
  {
    id: 1,
    name: "Maruti Dzire",
    type: "Sedan",
    image: "/images/cars/dzire.png",
    seats: 4,
    luggage: 2,
    price: 1499,
    ac: true,
    description: "Comfortable sedan suitable for small families and city/outstation travel.",
  },
  {
    id: 2,
    name: "Maruti Ertiga",
    type: "MUV",
    image: "/images/cars/ertiga.png",
    seats: 6,
    luggage: 3,
    price: 1999,
    ac: true,
    description: "Spacious MUV with comfortable seating for family and group travel.",
  },
  {
    id: 3,
    name: "Toyota Innova Crysta",
    type: "SUV",
    image: "/images/cars/innova.png",
    seats: 6,
    luggage: 4,
    price: 2999,
    ac: true,
    description: "Premium SUV with comfortable seats and extra luggage space.",
  },
  {
    id: 4,
    name: "Tempo Traveller",
    type: "Traveller",
    image: "/images/cars/tempo.png",
    seats: 12,
    luggage: 6,
    price: 4499,
    ac: true,
    description: "Ideal for family trips, group tours and outstation travel.",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function CabSearchBooking() {
  const [tripType, setTripType] = useState<TripType>("oneWay");

  const [airportTrip, setAirportTrip] =
    useState<AirportTripType>("pickup");

  const [showResults, setShowResults] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    from: "",
    to: "",
    city: "",

    pickupAddress: "",
    dropAirport: "",

    pickupDate: "",
    pickupTime: "",

    returnDate: "",
    returnTime: "",
  });

  /* =======================================================
     UPDATE FORM
  ======================================================= */

  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* =======================================================
     CHANGE TAB
  ======================================================= */

  const handleTripChange = (type: TripType) => {
    setTripType(type);

    // Hide old results when tab changes
    setShowResults(false);
  };

  /* =======================================================
     SWAP LOCATIONS
  ======================================================= */

  const swapLocations = () => {
    setFormData((prev) => ({
      ...prev,
      from: prev.to,
      to: prev.from,
    }));
  };

  /* =======================================================
     SEARCH
  ======================================================= */

  const handleSearch = () => {
    setShowResults(true);

    // Scroll to result list
    setTimeout(() => {
      document
        .getElementById("cab-results")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 150);
  };

  return (
    <section className="w-full bg-[#f7f7f7] py-10 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">

        {/* =================================================
            SEARCH BOX
        ================================================= */}

        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.12)]">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="relative overflow-hidden bg-[#151515] px-5 py-9 text-center md:px-10 md:py-12">

            {/* Gold glow */}
            <div
              className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
              style={{
                backgroundColor: GOLD,
              }}
            />

            <div className="relative z-10">

              <p
                className="mb-2 text-xs font-bold uppercase tracking-[4px]"
                style={{ color: GOLD }}
              >
                Tirupati Travels
              </p>

              <h1 className="text-3xl font-black uppercase tracking-wide text-white md:text-5xl">
                Book Your Ride
              </h1>

              <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-300 md:text-base">
                Book comfortable and reliable cabs for local,
                outstation and airport travel.
              </p>

            </div>
          </div>

          {/* =================================================
              TABS
          ================================================= */}

          <div className="px-4 pt-6 md:px-8">

            <div className="mx-auto grid max-w-5xl grid-cols-2 overflow-hidden rounded-xl border border-gray-200 md:grid-cols-4">

              <TripTab
                active={tripType === "oneWay"}
                onClick={() =>
                  handleTripChange("oneWay")
                }
              >
                ONE WAY
              </TripTab>

              <TripTab
                active={tripType === "roundTrip"}
                onClick={() =>
                  handleTripChange("roundTrip")
                }
              >
                ROUND TRIP
              </TripTab>

              <TripTab
                active={tripType === "local"}
                onClick={() =>
                  handleTripChange("local")
                }
              >
                LOCAL
              </TripTab>

              <TripTab
                active={tripType === "airport"}
                onClick={() =>
                  handleTripChange("airport")
                }
              >
                AIRPORT
              </TripTab>

            </div>
          </div>

          {/* =================================================
              FORM AREA
          ================================================= */}

          <div className="p-5 md:p-8">

            {/* =================================================
                ONE WAY
            ================================================= */}

            {tripType === "oneWay" && (
              <OneWayForm
                formData={formData}
                updateField={updateField}
                swapLocations={swapLocations}
              />
            )}

            {/* =================================================
                ROUND TRIP
            ================================================= */}

            {tripType === "roundTrip" && (
              <RoundTripForm
                formData={formData}
                updateField={updateField}
                swapLocations={swapLocations}
              />
            )}

            {/* =================================================
                LOCAL
            ================================================= */}

            {tripType === "local" && (
              <LocalForm
                formData={formData}
                updateField={updateField}
              />
            )}

            {/* =================================================
                AIRPORT
            ================================================= */}

            {tripType === "airport" && (
              <AirportForm
                formData={formData}
                updateField={updateField}
                airportTrip={airportTrip}
                setAirportTrip={setAirportTrip}
              />
            )}

            {/* =================================================
                SEARCH BUTTON
            ================================================= */}

            <div className="mt-8 flex justify-center">

              <button
                type="button"
                onClick={handleSearch}
                className="group flex min-w-[230px] items-center justify-center gap-3 rounded-xl px-8 py-4 text-base font-extrabold uppercase tracking-wide text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                  backgroundColor: GOLD,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    DARK_GOLD;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    GOLD;
                }}
              >
                <Search
                  size={21}
                  className="transition-transform group-hover:scale-110"
                />

                Search Cabs
              </button>

            </div>
          </div>
        </div>

        {/* =================================================
            RESULTS
        ================================================= */}

        {showResults && (
          <CabResults
            cars={cars}
            tripType={tripType}
          />
        )}

      </div>
    </section>
  );
}

/* =========================================================
   TRIP TAB
========================================================= */

function TripTab({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border-b border-r border-gray-200 px-3 py-4 text-xs font-extrabold transition-all duration-200 md:px-5 md:text-sm"
      style={{
        backgroundColor: active ? GOLD : "#ffffff",
        color: active ? "#ffffff" : "#222222",
      }}
    >
      {children}
    </button>
  );
}

/* =========================================================
   ONE WAY FORM
========================================================= */

function OneWayForm({
  formData,
  updateField,
  swapLocations,
}: {
  formData: FormData;
  updateField: (
    field: keyof FormData,
    value: string
  ) => void;
  swapLocations: () => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

      <div className="relative">
        <InputField
          label="FROM"
          placeholder="Enter Pickup Location"
          value={formData.from}
          onChange={(value) =>
            updateField("from", value)
          }
          icon={<MapPin size={20} />}
        />
      </div>

      <div className="relative">

        <InputField
          label="TO"
          placeholder="Enter Drop Location"
          value={formData.to}
          onChange={(value) =>
            updateField("to", value)
          }
          icon={<MapPin size={20} />}
        />

        <button
          type="button"
          onClick={swapLocations}
          className="absolute -left-4 top-10 hidden h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md lg:flex"
          style={{
            color: GOLD,
          }}
        >
          <ArrowLeftRight size={17} />
        </button>

      </div>

      <InputField
        label="PICK UP DATE"
        type="date"
        value={formData.pickupDate}
        onChange={(value) =>
          updateField("pickupDate", value)
        }
        icon={<CalendarDays size={20} />}
      />

      <InputField
        label="PICK UP TIME"
        type="time"
        value={formData.pickupTime}
        onChange={(value) =>
          updateField("pickupTime", value)
        }
        icon={<Clock3 size={20} />}
      />

    </div>
  );
}

/* =========================================================
   ROUND TRIP FORM
========================================================= */

function RoundTripForm({
  formData,
  updateField,
  swapLocations,
}: {
  formData: FormData;
  updateField: (
    field: keyof FormData,
    value: string
  ) => void;
  swapLocations: () => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

      {/* FROM */}
      <InputField
        label="FROM"
        placeholder="Enter Pickup Location"
        value={formData.from}
        onChange={(value) =>
          updateField("from", value)
        }
        icon={<MapPin size={20} />}
      />

      {/* TO */}
      <div className="relative">

        <InputField
          label="TO"
          placeholder="Enter Drop Location"
          value={formData.to}
          onChange={(value) =>
            updateField("to", value)
          }
          icon={<MapPin size={20} />}
        />

        <button
          type="button"
          onClick={swapLocations}
          className="absolute -left-4 top-10 hidden h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md lg:flex"
          style={{
            color: GOLD,
          }}
        >
          <ArrowLeftRight size={17} />
        </button>

      </div>

      {/* PICKUP DATE */}
      <InputField
        label="PICK UP DATE"
        type="date"
        value={formData.pickupDate}
        onChange={(value) =>
          updateField("pickupDate", value)
        }
        icon={<CalendarDays size={20} />}
      />

      {/* PICKUP TIME */}
      <InputField
        label="PICK UP TIME"
        type="time"
        value={formData.pickupTime}
        onChange={(value) =>
          updateField("pickupTime", value)
        }
        icon={<Clock3 size={20} />}
      />

      {/* RETURN DATE ONLY */}
      <InputField
        label="RETURN DATE"
        type="date"
        value={formData.returnDate}
        onChange={(value) =>
          updateField("returnDate", value)
        }
        icon={<CalendarDays size={20} />}
      />

    </div>
  );
}

/* =========================================================
   LOCAL FORM
========================================================= */

function LocalForm({
  formData,
  updateField,
}: {
  formData: FormData;
  updateField: (
    field: keyof FormData,
    value: string
  ) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

      <InputField
        label="CITY"
        placeholder="Enter City"
        value={formData.city}
        onChange={(value) =>
          updateField("city", value)
        }
        icon={<MapPin size={20} />}
      />

      <InputField
        label="PICK UP DATE"
        type="date"
        value={formData.pickupDate}
        onChange={(value) =>
          updateField("pickupDate", value)
        }
        icon={<CalendarDays size={20} />}
      />

      <InputField
        label="PICK UP TIME"
        type="time"
        value={formData.pickupTime}
        onChange={(value) =>
          updateField("pickupTime", value)
        }
        icon={<Clock3 size={20} />}
      />

    </div>
  );
}

/* =========================================================
   AIRPORT FORM
========================================================= */

function AirportForm({
  formData,
  updateField,
  airportTrip,
  setAirportTrip,
}: {
  formData: FormData;
  updateField: (
    field: keyof FormData,
    value: string
  ) => void;
  airportTrip: AirportTripType;
  setAirportTrip: React.Dispatch<
    React.SetStateAction<AirportTripType>
  >;
}) {
  return (
    <div className="space-y-7">

      {/* ================================================
          TRIP
      ================================================= */}

      <div>

        <label className="mb-3 block text-sm font-extrabold uppercase text-gray-800">
          TRIP
        </label>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

          {/* PICKUP FROM AIRPORT */}

          <button
            type="button"
            onClick={() => setAirportTrip("pickup")}
            className="flex items-center gap-4 rounded-xl border-2 p-4 text-left transition"
            style={{
              borderColor:
                airportTrip === "pickup"
                  ? GOLD
                  : "#e5e7eb",

              backgroundColor:
                airportTrip === "pickup"
                  ? `${GOLD}12`
                  : "#ffffff",
            }}
          >

            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
              style={{
                backgroundColor: `${GOLD}18`,
                color: GOLD,
              }}
            >
              <Plane size={22} />
            </div>

            <div>
              <p className="font-bold text-gray-900">
                Pickup from Airport
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Pickup passenger from airport
              </p>
            </div>

            {airportTrip === "pickup" && (
              <CheckCircle2
                size={21}
                className="ml-auto"
                style={{
                  color: GOLD,
                }}
              />
            )}

          </button>

          {/* DROP TO AIRPORT */}

          <button
            type="button"
            onClick={() => setAirportTrip("drop")}
            className="flex items-center gap-4 rounded-xl border-2 p-4 text-left transition"
            style={{
              borderColor:
                airportTrip === "drop"
                  ? GOLD
                  : "#e5e7eb",

              backgroundColor:
                airportTrip === "drop"
                  ? `${GOLD}12`
                  : "#ffffff",
            }}
          >

            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
              style={{
                backgroundColor: `${GOLD}18`,
                color: GOLD,
              }}
            >
              <Plane size={22} />
            </div>

            <div>
              <p className="font-bold text-gray-900">
                Drop to Airport
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Drop passenger at airport
              </p>
            </div>

            {airportTrip === "drop" && (
              <CheckCircle2
                size={21}
                className="ml-auto"
                style={{
                  color: GOLD,
                }}
              />
            )}

          </button>

        </div>
      </div>

      {/* =================================================
          PICKUP FROM AIRPORT
      ================================================= */}

      {airportTrip === "pickup" && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

          {/* PICKUP AIRPORT */}

          <InputField
            label="PICKUP AIRPORT"
            placeholder="Select Pickup Airport"
            value={formData.from}
            onChange={(value) =>
              updateField("from", value)
            }
            icon={<Plane size={20} />}
          />

          {/* DROP ADDRESS */}

          <InputField
            label="DROP ADDRESS"
            placeholder="Please select from Dropdown"
            value={formData.pickupAddress}
            onChange={(value) =>
              updateField("pickupAddress", value)
            }
            icon={<MapPin size={20} />}
          />

          {/* PICKUP DATE */}

          <InputField
            label="PICK UP DATE"
            type="date"
            value={formData.pickupDate}
            onChange={(value) =>
              updateField("pickupDate", value)
            }
            icon={<CalendarDays size={20} />}
          />

          {/* PICKUP TIME */}

          <InputField
            label="PICK UP TIME"
            type="time"
            value={formData.pickupTime}
            onChange={(value) =>
              updateField("pickupTime", value)
            }
            icon={<Clock3 size={20} />}
          />

        </div>
      )}

      {/* =================================================
          DROP TO AIRPORT
      ================================================= */}

      {airportTrip === "drop" && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

          {/* PICKUP ADDRESS */}

          <InputField
            label="PICKUP ADDRESS"
            placeholder="Please select from Dropdown"
            value={formData.pickupAddress}
            onChange={(value) =>
              updateField("pickupAddress", value)
            }
            icon={<MapPin size={20} />}
          />

          {/* DROP AIRPORT */}

          <InputField
            label="DROP AIRPORT"
            placeholder="Select Drop Airport"
            value={formData.dropAirport}
            onChange={(value) =>
              updateField("dropAirport", value)
            }
            icon={<Plane size={20} />}
          />

          {/* PICKUP DATE */}

          <InputField
            label="PICK UP DATE"
            type="date"
            value={formData.pickupDate}
            onChange={(value) =>
              updateField("pickupDate", value)
            }
            icon={<CalendarDays size={20} />}
          />

          {/* PICKUP TIME */}

          <InputField
            label="PICK UP TIME"
            type="time"
            value={formData.pickupTime}
            onChange={(value) =>
              updateField("pickupTime", value)
            }
            icon={<Clock3 size={20} />}
          />

        </div>
      )}

    </div>
  );
}

/* =========================================================
   INPUT FIELD
========================================================= */

function InputField({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  icon,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
}) {
  return (
    <div className="w-full">

      <label className="mb-2 block text-sm font-extrabold uppercase text-gray-800">
        {label}
      </label>

      <div className="relative">

        {/* ICON */}

        <div
          className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2"
          style={{
            color: GOLD,
          }}
        >
          {icon}
        </div>

        {/* INPUT */}

        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) =>
            onChange(e.target.value)
          }
          className="h-14 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm font-medium text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20"
        />

      </div>
    </div>
  );
}

/* =========================================================
   RESULTS
========================================================= */

function CabResults({
  cars,
  tripType,
}: {
  cars: Car[];
  tripType: TripType;
}) {
  return (
    <div
      id="cab-results"
      className="scroll-mt-8 pt-10 md:pt-14"
    >

      {/* =================================================
          RESULT HEADER
      ================================================= */}

      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">

        <div>

          <p
            className="mb-1 text-xs font-bold uppercase tracking-[3px]"
            style={{
              color: GOLD,
            }}
          >
            Tirupati Travels
          </p>

          <h2 className="text-2xl font-black text-gray-900 md:text-3xl">
            Available Vehicles
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Select a vehicle according to your travel requirements.
          </p>

        </div>

        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm">

          <CarFront
            size={17}
            style={{
              color: GOLD,
            }}
          />

          {cars.length} Vehicles Available

        </div>

      </div>

      {/* =================================================
          RESULTS LIST
      ================================================= */}

      <div className="space-y-5">

        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            tripType={tripType}
          />
        ))}

      </div>

    </div>
  );
}

/* =========================================================
   CAR CARD
========================================================= */

function CarCard({
  car,
  tripType,
}: {
  car: Car;
  tripType: TripType;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr_190px]">

        {/* =================================================
            CAR IMAGE
        ================================================= */}

        <div className="flex min-h-[200px] items-center justify-center bg-gray-50 p-5">

          <img
            src={car.image}
            alt={car.name}
            className="max-h-40 max-w-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          {/* Fallback */}
          <div className="hidden text-center text-gray-400">
            <CarFront size={60} />
          </div>

        </div>

        {/* =================================================
            CAR DETAILS
        ================================================= */}

        <div className="p-5 md:p-6">

          <div className="flex items-start justify-between gap-3">

            <div>

              <p
                className="text-xs font-bold uppercase tracking-wider"
                style={{
                  color: GOLD,
                }}
              >
                {car.type}
              </p>

              <h3 className="mt-1 text-xl font-black text-gray-900 md:text-2xl">
                {car.name}
              </h3>

            </div>

            {car.ac && (
              <div className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-600">

                <Wind size={14} />

                AC

              </div>
            )}

          </div>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
            {car.description}
          </p>

          {/* FEATURES */}

          <div className="mt-5 flex flex-wrap gap-3">

            <Feature
              icon={<Users size={16} />}
              text={`${car.seats} Seats`}
            />

            <Feature
              icon={<BriefcaseBusiness size={16} />}
              text={`${car.luggage} Luggage`}
            />

            <Feature
              icon={<CheckCircle2 size={16} />}
              text="Verified Car"
            />

          </div>

          {/* AVAILABLE */}

          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-green-600">

            <span className="h-2 w-2 rounded-full bg-green-500" />

            Available for booking

          </div>

        </div>

        {/* =================================================
            PRICE
        ================================================= */}

        <div className="border-t border-gray-100 p-5 md:border-l md:border-t-0 md:p-6">

          <div className="flex h-full flex-col justify-center md:items-end">

            <p className="text-xs font-semibold uppercase text-gray-400">
              Starting From
            </p>

            <p className="mt-1 text-2xl font-black text-gray-900">
              ₹{car.price.toLocaleString("en-IN")}
            </p>

            <p className="mt-1 text-xs text-gray-400">
              {tripType === "roundTrip"
                ? "Round Trip"
                : tripType === "local"
                ? "Local"
                : tripType === "airport"
                ? "Airport Transfer"
                : "One Way"}
            </p>

            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-extrabold text-white transition-all hover:shadow-lg md:w-auto"
              style={{
                backgroundColor: GOLD,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  DARK_GOLD;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  GOLD;
              }}
            >
              BOOK NOW

              <ArrowRight size={17} />

            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

/* =========================================================
   FEATURE
========================================================= */

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-600">

      <span
        style={{
          color: GOLD,
        }}
      >
        {icon}
      </span>

      {text}

    </div>
  );
}