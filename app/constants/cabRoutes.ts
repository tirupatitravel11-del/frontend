export const cabRoutes = [
  {
    id: 1,
    slug: "tirupati-to-chennai",

    origin: "kanpur",
    destination: "Lucknow",

    distance: "135 km",
    duration: "3.5 Hours",

    toll: "Approx. ₹250",

    tags: ["south-india", "airport", "popular"],

    image: "/routes/tirupati-chennai.jpg",

    vehicles: [
      {
        type: "Sedan",
        name: "Dzire / Etios",
        seating: 4,
        oneWayPrice: 3500,
        roundTripPrice: 6500,
      },
      {
        type: "SUV",
        name: "Innova",
        seating: 6,
        oneWayPrice: 5500,
        roundTripPrice: 10000,
      },
      {
        type: "Tempo Traveller",
        name: "Tempo Traveller",
        seating: 12,
        oneWayPrice: 9000,
        roundTripPrice: 16000,
      },
    ],
  },

  {
    id: 2,
    slug: "varanasi-to-ayodhya",

    origin: "Varanasi",
    destination: "Ayodhya",

    distance: "220 km",
    duration: "4.5 Hours",

    toll: "Approx. ₹300",

    tags: ["uttar-pradesh", "pilgrimage", "popular"],

    image: "/routes/varanasi-ayodhya.jpg",

    vehicles: [
      {
        type: "Sedan",
        name: "Dzire / Etios",
        seating: 4,
        oneWayPrice: 4000,
        roundTripPrice: 7500,
      },
      {
        type: "SUV",
        name: "Innova Crysta",
        seating: 6,
        oneWayPrice: 6500,
        roundTripPrice: 12000,
      },
    ],
  },
];
