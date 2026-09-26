export type Vehicle = {
  slug: string;
  name: string;
  pageType: string;
  brand: string;
  cabType: string;
  passengerCapacity: number;
  luggageCapacity: number;
  image: string;
  airCondition: boolean;
  fuelType: string;
  transmission: string;
  perKm: number;
};
// export function findVehicleFromSlug(
//   pageSlug: string,
// ): Vehicle | null {
//   const sortedVehicles = [...VEHICLES].sort(
//     (a, b) => b.slug.length - a.slug.length,
//   );

//   const vehicle = sortedVehicles.find((vehicle) =>
//     pageSlug.endsWith(`-${vehicle.slug}-taxi`),
//   );

//   return vehicle || null;
// }
export const VEHICLES: Vehicle[] = [
  // =========================
  // SEDAN
  // =========================
  {
    slug: "sedan",
    name: "Sedan",
    pageType: "sedan-taxi",
    brand: "Multiple",
    cabType: "Sedan",
    passengerCapacity: 4,
    luggageCapacity: 3,
    image: "/aura.avif",
    airCondition: true,
    fuelType: "Petrol / CNG",
    transmission: "Manual",
    perKm: 10,
  },

  {
    slug: "dzire",
    name: "Maruti Swift Dzire",
    pageType: "dzire-taxi",
    brand: "Maruti Suzuki",
    cabType: "Sedan",
    passengerCapacity: 4,
    luggageCapacity: 3,
    image: "/dezire_white.png",
    airCondition: true,
    fuelType: "CNG / Petrol",
    transmission: "Manual",
    perKm: 10,
  },

  {
    slug: "amaze",
    name: "Honda Amaze",
    pageType: "amaze-taxi",
    brand: "Honda",
    cabType: "Sedan",
    passengerCapacity: 5,
    luggageCapacity: 3,
    image: "/amaze.webp",
    airCondition: true,
    fuelType: "Petrol",
    transmission: "Manual / CVT",
    perKm: 10,
  },

  {
    slug: "etios",
    name: "Toyota Etios",
    pageType: "etios-taxi",
    brand: "Toyota",
    cabType: "Sedan",
    passengerCapacity: 4,
    luggageCapacity: 3,
    image: "/etios.avif",
    airCondition: true,
    fuelType: "Diesel / Petrol",
    transmission: "Manual",
    perKm: 10,
  },

  // =========================
  // SUV
  // =========================
  {
    slug: "ertiga",
    name: "Maruti Ertiga",
    pageType: "ertiga-taxi",
    brand: "Maruti Suzuki",
    cabType: "SUV",
    passengerCapacity: 6,
    luggageCapacity: 4,
    image: "/ertiga_white.jpg",
    airCondition: true,
    fuelType: "Petrol / CNG",
    transmission: "Manual",
    perKm: 13,
  },

  {
    slug: "innova-crysta",
    name: "Toyota Innova Crysta",
    pageType: "innova-crysta-taxi",
    brand: "Toyota",
    cabType: "Premium SUV",
    passengerCapacity: 6,
    luggageCapacity: 5,
    image: "/innova.avif",
    airCondition: true,
    fuelType: "Diesel",
    transmission: "Manual",
    perKm: 16,
  },

  // =========================
  // TEMPO TRAVELLER
  // =========================
  {
    slug: "tempo-traveller",
    name: "Tempo Traveller",
    pageType: "tempo-traveller",
    brand: "Force",
    cabType: "Tempo Traveller",
    passengerCapacity: 12,
    luggageCapacity: 8,
    image: "/tempo2.jpeg",
    airCondition: true,
    fuelType: "Diesel",
    transmission: "Manual",
    perKm: 20,
  },

  {
    slug: "luxury-tempo-traveller",
    name: "Luxury Tempo Traveller",
    pageType: "luxury-tempo-traveller",
    brand: "Force",
    cabType: "Luxury Tempo Traveller",
    passengerCapacity: 12,
    luggageCapacity: 8,
    image: "/tempo1.jpeg",
    airCondition: true,
    fuelType: "Diesel",
    transmission: "Manual",
    perKm: 22,
  },

  {
    slug: "12-seater-tempo-traveller",
    name: "12 Seater Tempo Traveller",
    pageType: "12-seater-tempo-traveller",
    brand: "Force",
    cabType: "Tempo Traveller",
    passengerCapacity: 12,
    luggageCapacity: 8,
    image: "/tempo1.jpeg",
    airCondition: true,
    fuelType: "Diesel",
    transmission: "Manual",
    perKm: 24,
  },

  {
    slug: "16-seater-tempo-traveller",
    name: "16 Seater Tempo Traveller",
    pageType: "16-seater-tempo-traveller",
    brand: "Force",
    cabType: "Tempo Traveller",
    passengerCapacity: 16,
    luggageCapacity: 10,
    image: "/tempo2.jpeg",
    airCondition: true,
    fuelType: "Diesel",
    transmission: "Manual",
    perKm: 22,
  },

  {
    slug: "20-seater-tempo-traveller",
    name: "20 Seater Tempo Traveller",
    pageType: "20-seater-tempo-traveller",
    brand: "Force",
    cabType: "Tempo Traveller",
    passengerCapacity: 20,
    luggageCapacity: 12,
    image: "/tempo1.jpeg",
    airCondition: true,
    fuelType: "Diesel",
    transmission: "Manual",
    perKm: 22,
  },

  {
    slug: "24-seater-tempo-traveller",
    name: "24 Seater Tempo Traveller",
    pageType: "24-seater-tempo-traveller",
    brand: "Force",
    cabType: "Tempo Traveller",
    passengerCapacity: 24,
    luggageCapacity: 15,
    image: "/tempo2.jpeg",
    airCondition: true,
    fuelType: "Diesel",
    transmission: "Manual",
    perKm: 23,
  },

  // =========================
  // URBANIA
  // =========================
  {
    slug: "urbania",
    name: "Force Urbania",
    pageType: "urbania-rental",
    brand: "Force",
    cabType: "Urbania",
    passengerCapacity: 16,
    luggageCapacity: 10,
    image: "../Urbania.png",
    airCondition: true,
    fuelType: "Diesel",
    transmission: "Manual",
    perKm: 30,
  },
];

export function findVehicleFromSlug(pageSlug: string): Vehicle | null {
  const normalizedSlug = pageSlug.toLowerCase().replace(/^\/|\/$/g, "");

  // Longest slug first
  const sortedVehicles = [...VEHICLES].sort(
    (a, b) => b.slug.length - a.slug.length,
  );

  for (const vehicle of sortedVehicles) {
    const taxiSuffix = `-${vehicle.slug}-taxi`;

    // Example:
    // noida-to-delhi-dzire-taxi
    if (normalizedSlug.endsWith(taxiSuffix)) {
      return vehicle;
    }

    // Tempo Traveller type URLs
    // noida-to-delhi-tempo-traveller
    if (normalizedSlug.endsWith(`-${vehicle.slug}`)) {
      return vehicle;
    }

    // Urbania:
    // noida-to-delhi-urbania-rental
    if (normalizedSlug.endsWith(`-${vehicle.pageType}`)) {
      return vehicle;
    }
  }

  return null;
}




export interface FareCalculation {
  baseFare: number;
  driverAllowance: number;
  nightCharge: number;
  subtotal: number;
  gst: number;
  total: number;
  distanceKm: number;
  perKm: number;
  days: number;
  nights: number;
}

interface CalculateFareParams {
  vehicle: Vehicle;
  distanceKm: number;
  tripType: "oneWay" | "roundTrip" | "local" | "airport";
  pickupDate?: string;
  returnDate?: string;
}

export function calculateCabFare({
  vehicle,
  distanceKm,
  tripType,
  pickupDate,
  returnDate,
}: CalculateFareParams): FareCalculation {
  // -----------------------------
  // DAYS & NIGHTS
  // -----------------------------

  let days = 1;
  let nights = 0;

  if (
    tripType === "roundTrip" &&
    pickupDate &&
    returnDate
  ) {
    const start = new Date(`${pickupDate}T00:00:00`);
    const end = new Date(`${returnDate}T00:00:00`);

    const differenceInDays = Math.max(
      0,
      Math.ceil(
        (end.getTime() - start.getTime()) /
          (1000 * 60 * 60 * 24)
      )
    );

    nights = differenceInDays;
    days = differenceInDays + 1;
  }

  // -----------------------------
  // BASE FARE
  // distance × perKm × 1.5
  // -----------------------------

  const baseFare =
    distanceKm * vehicle.perKm * 1.5;

  // -----------------------------
  // DRIVER ALLOWANCE
  // ₹250 per day
  // -----------------------------

  const driverAllowance = days * 250;

  // -----------------------------
  // NIGHT CHARGE
  // ₹250 per night
  // -----------------------------

  const nightCharge = nights * 250;

  // -----------------------------
  // SUBTOTAL
  // -----------------------------

  const subtotal =
    baseFare +
    driverAllowance +
    nightCharge;

  // -----------------------------
  // GST 5%
  // -----------------------------

  const gst = subtotal * 0.05;

  // -----------------------------
  // FINAL TOTAL
  // -----------------------------

  const total = subtotal + gst;

  return {
    baseFare: Number(baseFare.toFixed(2)),
    driverAllowance: Number(driverAllowance.toFixed(2)),
    nightCharge: Number(nightCharge.toFixed(2)),
    subtotal: Number(subtotal.toFixed(2)),
    gst: Number(gst.toFixed(2)),
    total: Number(total.toFixed(2)),
    distanceKm: Number(distanceKm.toFixed(2)),
    perKm: vehicle.perKm,
    days,
    nights,
  };
}