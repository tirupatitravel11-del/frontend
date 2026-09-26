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
  Calendar,
} from "lucide-react";
import AddressAutocomplete from "./AddressAutocomplete";
import { VEHICLES, calculateCabFare } from "@/app/lib/api/route-data/vehicles";
import axios from "axios";
import toast from "react-hot-toast";

type TripType = "oneWay" | "roundTrip" | "local" | "airport";

type AirportTripType = "pickup" | "drop";
const PHONE_NUMBER = "+918726124680";
const WHATSAPP_NUMBER = "918726124680";
interface FormData {
  from: string;
  to: string;
  city: string;

  pickupAddress: string;
  dropAirport: string;

  pickupDate: string;
  pickupTime: string;

  returnDate: string;
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

// const cars: Car[] = [
//   {
//     id: 1,
//     name: "Maruti Dzire",
//     type: "Sedan",
//     image: "/images/cars/dzire.png",
//     seats: 4,
//     luggage: 2,
//     price: 1499,
//     ac: true,
//     description:
//       "Comfortable sedan suitable for small families and city/outstation travel.",
//   },
//   {
//     id: 2,
//     name: "Maruti Ertiga",
//     type: "MUV",
//     image: "/images/cars/ertiga.png",
//     seats: 6,
//     luggage: 3,
//     price: 1999,
//     ac: true,
//     description:
//       "Spacious MUV with comfortable seating for family and group travel.",
//   },
//   {
//     id: 3,
//     name: "Toyota Innova Crysta",
//     type: "SUV",
//     image: "/images/cars/innova.png",
//     seats: 6,
//     luggage: 4,
//     price: 2999,
//     ac: true,
//     description: "Premium SUV with comfortable seats and extra luggage space.",
//   },
//   {
//     id: 4,
//     name: "Tempo Traveller",
//     type: "Traveller",
//     image: "/images/cars/tempo.png",
//     seats: 12,
//     luggage: 6,
//     price: 4499,
//     ac: true,
//     description: "Ideal for family trips, group tours and outstation travel.",
//   },
// ];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function CabSearchBooking() {
  const [tripType, setTripType] = useState<TripType>("oneWay");

  const [airportTrip, setAirportTrip] = useState<AirportTripType>("pickup");

  const [showResults, setShowResults] = useState(false);

  const [formData, setFormData] = useState({
    from: "",
    to: "",

    fromLat: null as number | null,
    fromLng: null as number | null,

    toLat: null as number | null,
    toLng: null as number | null,

    city: "",

    pickupAddress: "",
    pickupAddressLat: null as number | null,
    pickupAddressLng: null as number | null,

    dropAirport: "",
    dropAirportLat: null as number | null,
    dropAirportLng: null as number | null,

    pickupDate: "",
    pickupTime: "",

    returnDate: "",
  });

  const [distance, setDistance] = useState<number | null>(null);

  const [duration, setDuration] = useState<number | null>(null);

  const [distanceLoading, setDistanceLoading] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    phoneNo: "",
  });
  const [bookingLoading, setBookingLoading] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
  const [selectedFare, setSelectedFare] = useState<any>(null);
  /* =======================================================
     UPDATE FORM
  ======================================================= */

  const updateField = (field: keyof FormData, value: string) => {
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

    // Hide old results
    setShowResults(false);

    // Clear old route calculation
    setDistance(null);
    setDuration(null);
    setDistanceLoading(false);

    // Airport ko default pickup par rakho
    if (type === "airport") {
      setAirportTrip("pickup");
    }

    // Old location coordinates clear
    setFormData((prev) => ({
      ...prev,

      from: "",
      to: "",
      fromLat: null,
      fromLng: null,
      toLat: null,
      toLng: null,

      city: "",

      pickupAddress: "",
      pickupAddressLat: null,
      pickupAddressLng: null,

      dropAirport: "",
      dropAirportLat: null,
      dropAirportLng: null,

      pickupDate: "",
      pickupTime: "",
      returnDate: "",
    }));
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
  const getTodayDate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const day = String(tomorrow.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  const getCurrentTime = () => {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  };
  const isPickupTimeValid = () => {
    if (formData.pickupDate !== getTodayDate()) {
      return true;
    }

    return formData.pickupTime >= getCurrentTime();
  };
  const validateForm = (): boolean => {
    // =========================
    // ONE WAY
    // =========================

    if (tripType === "oneWay") {
      if (!formData.from.trim()) {
        toast.error("Please select pickup location.");
        return false;
      }

      if (formData.fromLat === null || formData.fromLng === null) {
        toast.error("Please select pickup location from suggestions.");
        return false;
      }

      if (!formData.to.trim()) {
        toast.error("Please select drop location.");
        return false;
      }

      if (formData.toLat === null || formData.toLng === null) {
        toast.error("Please select drop location from suggestions.");
        return false;
      }

      if (!formData.pickupDate) {
        toast.error("Please select pickup date.");
        return false;
      }

      if (!formData.pickupTime) {
        toast.error("Please select pickup time.");
        return false;
      }

      if (formData.pickupDate < getTodayDate()) {
        toast.error("Pickup date cannot be in the past.");
        return false;
      }

      return true;
    }

    // =========================
    // ROUND TRIP
    // =========================

    if (tripType === "roundTrip") {
      if (!formData.from.trim()) {
        toast.error("Please select pickup location.");
        return false;
      }

      if (formData.fromLat === null || formData.fromLng === null) {
        toast.error("Please select pickup location from suggestions.");
        return false;
      }

      if (!formData.to.trim()) {
        toast.error("Please select drop location.");
        return false;
      }

      if (formData.toLat === null || formData.toLng === null) {
        toast.error("Please select drop location from suggestions.");
        return false;
      }

      if (!formData.pickupDate) {
        toast.error("Please select pickup date.");
        return false;
      }

      if (!formData.pickupTime) {
        toast.error("Please select pickup time.");
        return false;
      }

      if (!formData.returnDate) {
        toast.error("Please select return date.");
        return false;
      }

      // Pickup date past me nahi honi chahiye
      if (formData.pickupDate < getTodayDate()) {
        toast.error("Pickup date cannot be in the past.");
        return false;
      }

      // Return date pickup se pehle nahi ho sakti
      if (formData.returnDate < formData.pickupDate) {
        toast.error("Return date cannot be before pickup date.");
        return false;
      }
      if (!isPickupTimeValid()) {
        toast.error("Pickup time cannot be in the past.");
        return false;
      }
      return true;
    }

    // =========================
    // LOCAL
    // =========================

    if (tripType === "local") {
      if (!formData.city.trim()) {
        toast.error("Please select city.");
        return false;
      }

      if (!formData.pickupDate) {
        toast.error("Please select pickup date.");
        return false;
      }

      if (!formData.pickupTime) {
        toast.error("Please select pickup time.");
        return false;
      }

      if (formData.pickupDate < getTodayDate()) {
        toast.error("Pickup date cannot be in the past.");
        return false;
      }

      return true;
    }

    // =========================
    // AIRPORT
    // =========================

    if (tripType === "airport") {
      // Airport Pickup
      if (airportTrip === "pickup") {
        if (!formData.from.trim()) {
          toast.error("Please select pickup airport.");
          return false;
        }

        if (formData.fromLat === null || formData.fromLng === null) {
          toast.error("Please select airport from suggestions.");
          return false;
        }

        if (!formData.pickupAddress.trim()) {
          toast.error("Please select drop address.");
          return false;
        }

        if (
          formData.pickupAddressLat === null ||
          formData.pickupAddressLng === null
        ) {
          toast.error("Please select drop address from suggestions.");
          return false;
        }
      }

      // Airport Drop
      if (airportTrip === "drop") {
        if (!formData.pickupAddress.trim()) {
          toast.error("Please select pickup address.");
          return false;
        }

        if (
          formData.pickupAddressLat === null ||
          formData.pickupAddressLng === null
        ) {
          toast.error("Please select pickup address from suggestions.");
          return false;
        }

        if (!formData.dropAirport.trim()) {
          toast.error("Please select drop airport.");
          return false;
        }

        if (
          formData.dropAirportLat === null ||
          formData.dropAirportLng === null
        ) {
          toast.error("Please select airport from suggestions.");
          return false;
        }
      }

      if (!formData.pickupDate) {
        toast.error("Please select pickup date.");
        return false;
      }

      if (!formData.pickupTime) {
        toast.error("Please select pickup time.");
        return false;
      }

      if (formData.pickupDate < getTodayDate()) {
        toast.error("Pickup date cannot be in the past.");
        return false;
      }

      return true;
    }

    return false;
  };
  /* =======================================================
     SEARCH
  ======================================================= */

  const handleSearch = async () => {
    // --------------------------------
    // FIRST VALIDATE EVERYTHING
    // --------------------------------

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    let fromPoint: {
      lat: number;
      lng: number;
    } | null = null;

    let toPoint: {
      lat: number;
      lng: number;
    } | null = null;

    // --------------------------------
    // ONE WAY / ROUND TRIP
    // --------------------------------

    if (tripType === "oneWay" || tripType === "roundTrip") {
      fromPoint = {
        lat: formData.fromLat!,
        lng: formData.fromLng!,
      };

      toPoint = {
        lat: formData.toLat!,
        lng: formData.toLng!,
      };
    }

    // --------------------------------
    // AIRPORT PICKUP
    // --------------------------------

    if (tripType === "airport" && airportTrip === "pickup") {
      fromPoint = {
        lat: formData.fromLat!,
        lng: formData.fromLng!,
      };

      toPoint = {
        lat: formData.pickupAddressLat!,
        lng: formData.pickupAddressLng!,
      };
    }

    // --------------------------------
    // AIRPORT DROP
    // --------------------------------

    if (tripType === "airport" && airportTrip === "drop") {
      fromPoint = {
        lat: formData.pickupAddressLat!,
        lng: formData.pickupAddressLng!,
      };

      toPoint = {
        lat: formData.dropAirportLat!,
        lng: formData.dropAirportLng!,
      };
    }

    // --------------------------------
    // CLEAR OLD RESULT
    // --------------------------------

    setShowResults(false);
    setDistance(null);
    setDuration(null);

    // --------------------------------
    // LOCAL
    // --------------------------------

    if (tripType === "local") {
      /*
      Local ke liye abhi distance API call nahi hogi
      kyunki current implementation me sirf city hai.
    */

      setShowResults(true);

      return;
    }

    // --------------------------------
    // DISTANCE API
    // --------------------------------

    if (!fromPoint || !toPoint) {
      toast.error("Please select valid locations.");
      return;
    }
    console.log("dhbdfdd");

    const result = await calculateRouteDistance(fromPoint, toPoint);

    if (!result) {
      toast.error("Unable to calculate route distance. Please try again.");
      return;
    }

    // --------------------------------
    // SHOW RESULT
    // --------------------------------

    setShowResults(true);

    setTimeout(() => {
      document.getElementById("cab-results")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  };

  const calculateRouteDistance = async (
    from: {
      lat: number;
      lng: number;
    },
    to: {
      lat: number;
      lng: number;
    },
  ) => {
    try {
      setDistanceLoading(true);

      const response = await fetch(`${process.env.apiUrl}/api/distance`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          from,
          to,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Distance calculation failed");
      }

      setDistance(data.distanceKm);
      setDuration(data.durationMinutes);

      return data;
    } catch (error) {
      console.error("Distance calculation error:", error);

      setDistance(null);
      setDuration(null);

      return null;
    } finally {
      setDistanceLoading(false);
    }
  };
  const vehicleResults = VEHICLES.map((vehicle) => {
    const fare = calculateCabFare({
      vehicle,
      distanceKm: distance ?? 0,
      tripType,
      pickupDate: formData.pickupDate,
      returnDate: formData.returnDate,
    });

    return {
      vehicle,
      fare,
    };
  });
  const getBookingData = (vehicle: any, fare: any) => {
    return {
      tripType,

      airportTrip: tripType === "airport" ? airportTrip : null,

      pickupLocation:
        tripType === "local"
          ? formData.city
          : tripType === "airport" && airportTrip === "drop"
            ? formData.pickupAddress
            : formData.from,

      dropLocation:
        tripType === "oneWay" || tripType === "roundTrip"
          ? formData.to
          : tripType === "airport" && airportTrip === "pickup"
            ? formData.pickupAddress
            : tripType === "airport" && airportTrip === "drop"
              ? formData.dropAirport
              : formData.city,

      pickupDate: formData.pickupDate,
      pickupTime: formData.pickupTime,

      returnDate: tripType === "roundTrip" ? formData.returnDate : null,

      distanceKm: distance,
      durationMinutes: duration,

      vehicle: {
        slug: vehicle.slug,
        name: vehicle.name,
        perKm: vehicle.perKm,
      },

      fare: {
        baseFare: fare.baseFare,
        driverAllowance: fare.driverAllowance,
        nightCharge: fare.nightCharge,
        subtotal: fare.subtotal,
        gst: fare.gst,
        total: fare.total,
      },
    };
  };
  const handleBookNow = async (vehicle: any, fare: any) => {
    try {
      // Name validation
      if (!customerDetails.name.trim()) {
        toast.error("Please enter your name");
        return;
      }

      // Phone validation
      if (!/^[6-9]\d{9}$/.test(customerDetails.phoneNo.trim())) {
        toast.error("Please enter a valid 10 digit mobile number");
        return;
      }

      // Get complete booking data
      const bookingData = getBookingData(vehicle, fare);

      const payload = {
        name: customerDetails.name.trim(),

        phoneNo: customerDetails.phoneNo.trim(),

        serviceType: "cab",

        // IMPORTANT:
        // getBookingData me pickupLocation hai
        pickup: bookingData.pickupLocation,

        // IMPORTANT:
        // getBookingData me dropLocation hai
        drop: bookingData.dropLocation,

        // Backend expects "one-way" / "round-trip"
        trip: bookingData.tripType === "roundTrip" ? "round-trip" : "one-way",

        // Backend expects date
        date: bookingData.pickupDate,

        // Backend optional fields
        from: bookingData.pickupLocation,

        to: bookingData.dropLocation,

        // Backend expects number
        fare: bookingData.fare.total,

        // Backend expects string
        vehicle: bookingData.vehicle.name,
      };

      console.log("BOOKING PAYLOAD:", payload);

      setBookingLoading(true);

      const response = await axios.post(
        `${process.env.apiUrl}/api/create-booking-cab`,
        payload,
      );

      console.log("BOOKING RESPONSE:", response.data);

      if (response.data?.success) {
        toast.success("Booking created successfully!");

        const message = `Hello, I want to book a ${bookingData.vehicle.name}.

Pickup: ${bookingData.pickupLocation}
Drop: ${bookingData.dropLocation}
Travel Date: ${bookingData.pickupDate}
Vehicle: ${bookingData.vehicle.name}
Phone: ${customerDetails.phoneNo}
Trip: ${bookingData.tripType === "roundTrip" ? "round-trip" : "one-way"}
Fare: ₹${bookingData.fare.total.toLocaleString("en-IN")}`;

        // Clear customer details
        setCustomerDetails({
          name: "",
          phoneNo: "",
        });

        // Close modal
        setShowBookingModal(false);

        // ==============================
        // OPEN WHATSAPP
        // ==============================

        window.open(
          `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            message,
          )}`,
          "_blank",
        );
      } else {
        toast.error(response.data?.message || "Booking failed");
      }
    } catch (error: any) {
      console.error("Booking error:", error);

      toast.error(
        error?.response?.data?.message ||
          "Something went wrong while creating booking",
      );
    } finally {
      setBookingLoading(false);
    }
  };
  const openBookingModal = (vehicle: any, fare: any) => {
    console.log("OPEN BOOKING MODAL CLICKED");
    console.log("Vehicle:", vehicle);
    console.log("Fare:", fare);

    setSelectedVehicle(vehicle);
    setSelectedFare(fare);
    setShowBookingModal(true);
  };
  return (
    <>
      <section className="w-full bg-[#f7f7f7] py-10 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
          {/* =================================================
            SEARCH BOX
        ================================================= */}

          <div className="overflow-visible rounded-3xl border border-gray-200 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.12)]">
            {/* =================================================
              HEADER
          ================================================= */}

            <div className="relative overflow-hidden rounded-3xl bg-[#151515] px-5 py-9 text-center md:px-10 md:py-12">
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
                  Book comfortable and reliable cabs for local, outstation and
                  airport travel.
                </p>
              </div>
            </div>

            {/* =================================================
              TABS
          ================================================= */}

            <div className="px-4 pt-6 md:px-8">
              <div className="mx-auto grid max-w-5xl grid-cols-2 overflow-hidden rounded-xl border border-gray-200 md:grid-cols-3">
                <TripTab
                  active={tripType === "oneWay"}
                  onClick={() => handleTripChange("oneWay")}
                >
                  ONE WAY
                </TripTab>

                <TripTab
                  active={tripType === "roundTrip"}
                  onClick={() => handleTripChange("roundTrip")}
                >
                  ROUND TRIP
                </TripTab>

                {/* <TripTab
                  active={tripType === "local"}
                  onClick={() => handleTripChange("local")}
                >
                  LOCAL
                </TripTab> */}

                <TripTab
                  active={tripType === "airport"}
                  onClick={() => handleTripChange("airport")}
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
                  setFormData={setFormData}
                  getTodayDate={getTodayDate}
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
                  setFormData={setFormData}
                  getTodayDate={getTodayDate}
                  getCurrentTime={getCurrentTime}
                />
              )}

              {/* =================================================
                LOCAL
            ================================================= */}

              {tripType === "local" && (
                <LocalForm
                  formData={formData}
                  updateField={updateField}
                  setFormData={setFormData}
                  getTodayDate={getTodayDate}
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
                  setFormData={setFormData}
                  getTodayDate={getTodayDate}
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
                    e.currentTarget.style.backgroundColor = DARK_GOLD;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = GOLD;
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

          {showResults && distance && (
            <section id="cab-results" className="mt-8 space-y-5">
              {/* Route Summary */}
              <div className="bg-white border rounded-xl p-5">
                <div className="flex flex-wrap gap-6">
                  {distance !== null && (
                    <div>
                      <p className="text-sm text-gray-500">Distance</p>
                      <p className="font-bold text-lg">
                        {distance.toFixed(2)} KM
                      </p>
                    </div>
                  )}

                  {duration !== null && (
                    <div>
                      <p className="text-sm text-gray-500">Estimated Time</p>

                      <p className="font-bold text-lg">
                        {Math.floor(duration / 60)} hr {duration % 60} min
                      </p>
                    </div>
                  )}

                  {tripType === "local" && (
                    <div>
                      <p className="text-sm text-gray-500">Service</p>
                      <p className="font-bold text-lg">Local Cab</p>
                    </div>
                  )}
                </div>
              </div>

              {/* ALL VEHICLES */}
              {vehicleResults.map(({ vehicle, fare }) => (
                <div
                  key={vehicle.slug}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-[220px_1fr_240px] gap-6 p-5">
                    {/* IMAGE */}
                    <div className="flex items-center justify-center">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full max-w-[200px] h-[130px] object-contain"
                      />
                    </div>

                    {/* DETAILS */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {vehicle.name}
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        {vehicle.brand} • {vehicle.cabType}
                      </p>

                      <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                        <div>👤 {vehicle.passengerCapacity} Passengers</div>

                        <div>🧳 {vehicle.luggageCapacity} Luggage</div>

                        <div>
                          ❄️{" "}
                          {vehicle.airCondition ? "Air Conditioned" : "Non AC"}
                        </div>

                        <div>⛽ {vehicle.fuelType}</div>

                        <div>⚙️ {vehicle.transmission}</div>

                        <div className="font-semibold">₹{vehicle.perKm}/KM</div>
                      </div>
                    </div>

                    {/* PRICE */}
                    <div className="md:border-l md:pl-6 flex flex-col justify-center md:items-end">
                      <p className="text-sm text-gray-500">Estimated Total</p>

                      <p
                        className="text-3xl font-bold mt-1"
                        style={{ color: "#C9A227" }}
                      >
                        ₹
                        {fare.total.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>

                      <p className="text-xs text-gray-500 mt-1">
                        Inclusive of 5% GST
                      </p>

                      <button
                        type="button"
                        onClick={() => openBookingModal(vehicle, fare)}
                        className="mt-4 rounded-lg px-8 py-3 font-semibold text-white"
                        style={{
                          backgroundColor: "#C9A227",
                        }}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>

                  {/* FARE BREAKDOWN */}
                  <div className="border-t bg-gray-50 px-5 py-4">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Base Fare</p>

                        <p className="font-semibold">
                          ₹{fare.baseFare.toLocaleString("en-IN")}
                        </p>

                        <p className="text-xs text-gray-400">
                          {fare.distanceKm} × ₹{fare.perKm} × 1.5
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500">Driver Allowance</p>

                        <p className="font-semibold">
                          ₹{fare.driverAllowance.toLocaleString("en-IN")}
                        </p>

                        <p className="text-xs text-gray-400">
                          {fare.days} Day × ₹250
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500">Night Charge</p>

                        <p className="font-semibold">
                          ₹{fare.nightCharge.toLocaleString("en-IN")}
                        </p>

                        <p className="text-xs text-gray-400">
                          {fare.nights} Night × ₹250
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500">GST (5%)</p>

                        <p className="font-semibold">
                          ₹{fare.gst.toLocaleString("en-IN")}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500">Total</p>

                        <p
                          className="font-bold text-lg"
                          style={{ color: "#C9A227" }}
                        >
                          ₹{fare.total.toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
      </section>
      {showBookingModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Complete Your Booking
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Enter your details to confirm booking
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowBookingModal(false)}
                className="text-2xl text-gray-500 hover:text-gray-800"
              >
                ×
              </button>
            </div>

            {/* Name */}
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                value={customerDetails.name}
                onChange={(e) =>
                  setCustomerDetails((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#C9A227]"
              />
            </div>

            {/* Phone */}
            <div className="mb-5">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Mobile Number
              </label>

              <input
                type="tel"
                maxLength={10}
                placeholder="Enter 10 digit mobile number"
                value={customerDetails.phoneNo}
                onChange={(e) =>
                  setCustomerDetails((prev) => ({
                    ...prev,
                    phoneNo: e.target.value.replace(/\D/g, ""),
                  }))
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#C9A227]"
              />
            </div>

            {/* Booking Summary */}
            <div className="mb-5 rounded-lg bg-gray-50 p-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Vehicle</span>
                <span className="font-medium">
                  {selectedVehicle?.name ||
                    selectedVehicle?.vehicle ||
                    selectedVehicle}
                </span>
              </div>

              <div className="mt-2 flex justify-between text-sm">
                <span className="text-gray-500">Fare</span>
                <span className="font-bold text-[#C9A227]">
                  ₹{selectedFare?.total?.toLocaleString("en-IN") || 0}
                </span>
              </div>
            </div>

            <button
              type="button"
              disabled={bookingLoading}
              onClick={() => {
                handleBookNow(selectedVehicle, selectedFare);
              }}
              className="w-full rounded-lg bg-[#C9A227] px-5 py-3 font-semibold text-white transition hover:bg-[#A98212] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {bookingLoading ? "Booking..." : "Confirm Booking"}
            </button>
          </div>
        </div>
      )}
    </>
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
  setFormData,
  getTodayDate,
}: {
  formData: any;
  updateField: (field: keyof FormData, value: string) => void;
  swapLocations: () => void;
  setFormData: any;
  getTodayDate: any;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      <div className="relative">
        <AddressAutocomplete
          label="FROM"
          placeholder="Enter Pickup Location"
          value={formData.from}
          onChange={(value) => updateField("from", value)}
          onSelect={(place) => {
            setFormData((prev: any) => ({
              ...prev,
              from: place.address,
              fromLat: place.lat,
              fromLng: place.lng,
            }));
          }}
        />
      </div>

      <div className="relative">
        <AddressAutocomplete
          label="TO"
          placeholder="Enter Drop Location"
          value={formData.to}
          onChange={(value) => updateField("to", value)}
          onSelect={(place) => {
            setFormData((prev: any) => ({
              ...prev,
              to: place.address,
              toLat: place.lat,
              toLng: place.lng,
            }));
          }}
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
        min={getTodayDate()}
        onChange={(value) => updateField("pickupDate", value)}
        icon={<CalendarDays size={20} />}
      />

      <InputField
        label="PICK UP TIME"
        type="time"
        value={formData.pickupTime}
        onChange={(value) => updateField("pickupTime", value)}
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
  setFormData,
  getTodayDate,
  getCurrentTime,
}: {
  formData: any;
  updateField: (field: keyof FormData, value: string) => void;
  swapLocations: () => void;
  setFormData: any;
  getTodayDate: any;
  getCurrentTime: any;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {/* FROM */}
      <AddressAutocomplete
        label="FROM"
        placeholder="Enter Pickup Location"
        value={formData.from}
        onChange={(value) => updateField("from", value)}
        onSelect={(place) => {
          setFormData((prev: any) => ({
            ...prev,
            from: place.address,
            fromLat: place.lat,
            fromLng: place.lng,
          }));
        }}
      />

      {/* TO */}
      <div className="relative">
        <AddressAutocomplete
          label="TO"
          placeholder="Enter Drop Location"
          value={formData.to}
          onChange={(value) => updateField("to", value)}
          onSelect={(place) => {
            setFormData((prev: any) => ({
              ...prev,
              to: place.address,
              toLat: place.lat,
              toLng: place.lng,
            }));
          }}
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
        label="PICKUP DATE"
        type="date"
        value={formData.pickupDate}
        min={getTodayDate()}
        max={formData.returnDate || undefined}
        onChange={(value) => {
          setFormData((prev: any) => ({
            ...prev,
            pickupDate: value,
            returnDate:
              prev.returnDate && prev.returnDate >= value
                ? prev.returnDate
                : "",
          }));
        }}
        icon={<Calendar size={18} />}
      />

      {/* PICKUP TIME */}
      <InputField
        label="PICK UP TIME"
        type="time"
        value={formData.pickupTime}
        min={
          formData.pickupDate === getTodayDate() ? getCurrentTime() : undefined
        }
        onChange={(value) => updateField("pickupTime", value)}
        icon={<Clock3 size={20} />}
      />

      {/* RETURN DATE ONLY */}
      <InputField
        label="RETURN DATE"
        type="date"
        value={formData.returnDate}
        min={formData.pickupDate || getTodayDate()}
        onChange={(value) => updateField("returnDate", value)}
        icon={<Calendar size={18} />}
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
  setFormData,
  getTodayDate,
}: {
  formData: any;
  updateField: (field: keyof FormData, value: string) => void;
  setFormData: any;
  getTodayDate: any;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <AddressAutocomplete
        label="CITY"
        placeholder="Enter City"
        value={formData.city}
        onChange={(value) => updateField("city", value)}
        onSelect={(place) => {
          setFormData((prev: any) => ({
            ...prev,
            city: place.address,
          }));
        }}
      />

      <InputField
        label="PICK UP DATE"
        type="date"
        value={formData.pickupDate}
        min={getTodayDate()}
        onChange={(value) => updateField("pickupDate", value)}
        icon={<CalendarDays size={20} />}
      />

      <InputField
        label="PICK UP TIME"
        type="time"
        value={formData.pickupTime}
        onChange={(value) => updateField("pickupTime", value)}
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
  setFormData,
  getTodayDate,
}: {
  formData: any;
  updateField: (field: keyof FormData, value: string) => void;
  airportTrip: AirportTripType;
  setAirportTrip: React.Dispatch<React.SetStateAction<AirportTripType>>;
  setFormData: any;
  getTodayDate: any;
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
              borderColor: airportTrip === "pickup" ? GOLD : "#e5e7eb",

              backgroundColor:
                airportTrip === "pickup" ? `${GOLD}12` : "#ffffff",
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
              <p className="font-bold text-gray-900">Pickup from Airport</p>

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
              borderColor: airportTrip === "drop" ? GOLD : "#e5e7eb",

              backgroundColor: airportTrip === "drop" ? `${GOLD}12` : "#ffffff",
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
              <p className="font-bold text-gray-900">Drop to Airport</p>

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

          <AddressAutocomplete
            label="PICKUP AIRPORT"
            placeholder="Search Pickup Airport"
            value={formData.from}
            onChange={(value) => {
              updateField("from", value);

              // Agar user selected suggestion ko edit kare
              setFormData((prev: any) => ({
                ...prev,
                fromLat: null,
                fromLng: null,
              }));
            }}
            onSelect={(place) => {
              setFormData((prev: any) => ({
                ...prev,

                from: place.address,

                fromLat: place.lat,
                fromLng: place.lng,
              }));
            }}
          />

          <AddressAutocomplete
            label="DROP ADDRESS"
            placeholder="Please select from Dropdown"
            value={formData.pickupAddress}
            onChange={(value) => {
              updateField("pickupAddress", value);

              setFormData((prev: any) => ({
                ...prev,
                pickupAddressLat: null,
                pickupAddressLng: null,
              }));
            }}
            onSelect={(place) => {
              setFormData((prev: any) => ({
                ...prev,

                pickupAddress: place.address,

                pickupAddressLat: place.lat,
                pickupAddressLng: place.lng,
              }));
            }}
          />
          {/* PICKUP DATE */}

          <InputField
            label="PICK UP DATE"
            type="date"
            value={formData.pickupDate}
            min={getTodayDate()}
            onChange={(value) => updateField("pickupDate", value)}
            icon={<CalendarDays size={20} />}
          />

          {/* PICKUP TIME */}

          <InputField
            label="PICK UP TIME"
            type="time"
            value={formData.pickupTime}
            onChange={(value) => updateField("pickupTime", value)}
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

          <AddressAutocomplete
            label="PICKUP ADDRESS"
            placeholder="Please select from Dropdown"
            value={formData.pickupAddress}
            onChange={(value) => {
              updateField("pickupAddress", value);

              setFormData((prev: any) => ({
                ...prev,

                pickupAddressLat: null,
                pickupAddressLng: null,
              }));
            }}
            onSelect={(place) => {
              setFormData((prev: any) => ({
                ...prev,

                pickupAddress: place.address,

                pickupAddressLat: place.lat,
                pickupAddressLng: place.lng,
              }));
            }}
          />

          <AddressAutocomplete
            label="DROP AIRPORT"
            placeholder="Search Drop Airport"
            value={formData.dropAirport}
            onChange={(value) => {
              updateField("dropAirport", value);

              setFormData((prev: any) => ({
                ...prev,

                dropAirportLat: null,
                dropAirportLng: null,
              }));
            }}
            onSelect={(place) => {
              setFormData((prev: any) => ({
                ...prev,

                dropAirport: place.address,

                dropAirportLat: place.lat,
                dropAirportLng: place.lng,
              }));
            }}
          />

          {/* PICKUP DATE */}

          <InputField
            label="PICK UP DATE"
            type="date"
            value={formData.pickupDate}
            onChange={(value) => updateField("pickupDate", value)}
            icon={<CalendarDays size={20} />}
          />

          {/* PICKUP TIME */}

          <InputField
            label="PICK UP TIME"
            type="time"
            value={formData.pickupTime}
            onChange={(value) => updateField("pickupTime", value)}
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
  min,
  max,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
  min?: string;
  max?: string;
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
          onChange={(e) => onChange(e.target.value)}
          min={min}
          max={max}
          className="h-14 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm font-medium text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20"
        />
      </div>
    </div>
  );
}

/* =========================================================
   RESULTS
========================================================= */

function CabResults({ cars, tripType }: { cars: Car[]; tripType: TripType }) {
  return (
    <div id="cab-results" className="scroll-mt-8 pt-10 md:pt-14">
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
          <CarCard key={car.id} car={car} tripType={tripType} />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   CAR CARD
========================================================= */

function CarCard({ car, tripType }: { car: Car; tripType: TripType }) {
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
            <Feature icon={<Users size={16} />} text={`${car.seats} Seats`} />

            <Feature
              icon={<BriefcaseBusiness size={16} />}
              text={`${car.luggage} Luggage`}
            />

            <Feature icon={<CheckCircle2 size={16} />} text="Verified Car" />
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
                e.currentTarget.style.backgroundColor = DARK_GOLD;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = GOLD;
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

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
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
