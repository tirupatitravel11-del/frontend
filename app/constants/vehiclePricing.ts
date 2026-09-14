export type VehiclePricing = {
  price: string;
  offer: string;
  cta: string;
};

export const vehiclePricing: Record<string, VehiclePricing> = {
  taxi: { price: "from ₹9/km", offer: "10% Off", cta: "Book Now" },
  "tempo-traveller": {
    price: "from ₹1,499/day",
    offer: "10% Off",
    cta: "Book Now",
  },
  "airport-taxi": {
    price: "from ₹999/trip",
    offer: "10% Off",
    cta: "Book Now",
  },
  "urbania-rental": {
    price: "from ₹2,499/day",
    offer: "10% Off",
    cta: "Book Now",
  },
  "innova-crysta": {
    price: "from ₹18/km",
    offer: "10% Off",
    cta: "Book Now",
  },
  ertiga: { price: "from ₹14/km", offer: "10% Off", cta: "Book Now" },
  dzire: { price: "from ₹11/km", offer: "10% Off", cta: "Book Now" },
  etios: { price: "from ₹12/km", offer: "10% Off", cta: "Book Now" },
  amaze: { price: "from ₹12/km", offer: "10% Off", cta: "Book Now" },
  "luxury-tempo-traveller": {
    price: "from ₹2,999/day",
    offer: "10% Off",
    cta: "Book Now",
  },
  "12-seater-tempo-traveller": {
    price: "₹20/km",
    offer: "10% Off",
    cta: "Book Now",
  },
  "16-seater-tempo-traveller": {
    price: "₹22/km",
    offer: "10% Off",
    cta: "Book Now",
  },
  "20-seater-tempo-traveller": {
    price: "₹22/km",
    offer: "10% Off",
    cta: "Book Now",
  },
  "24-seater-tempo-traveller": {
    price: "₹23/km",
    offer: "10% Off",
    cta: "Book Now",
  },
};

export const defaultVehiclePricing = vehiclePricing.taxi;
