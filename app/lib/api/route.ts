// import type { RoutePageData } from "@/types/route";

const routePages: Record<string, any> = {
  "noida-to-delhi-taxi": {
    page: {
      _id: "page-001",
      pageType: "taxi",
      slug: "noida-to-delhi-taxi",
      h1: "Noida to Delhi Taxi",
      metaTitle: "Noida to Delhi Taxi | Book Affordable Cab",
      metaDescription:
        "Book a reliable taxi from Noida to Delhi at affordable fares. Choose from Sedan, SUV and premium cabs.",
      faqs: [
        {
          _id: "faq-001",
          question: "What is the taxi fare from Noida to Delhi?",
          answer:
            "The taxi fare from Noida to Delhi depends on the vehicle type and trip option.",
        },
        {
          _id: "faq-002",
          question: "How long does it take from Noida to Delhi?",
          answer:
            "The journey usually takes around 45 minutes to 1.5 hours depending on traffic and the pickup location.",
        },
        {
          _id: "faq-003",
          question: "Which cars are available from Noida to Delhi?",
          answer:
            "You can choose from Sedan, SUV, Ertiga, Innova and other available vehicles.",
        },
      ],
    },

    route: {
      _id: "route-001",
      fromCity: "Noida",
      toCity: "Delhi",
      slug: "noida-to-delhi",
      distance: 25,
      duration: "45 min - 1.5 hrs",
    },

    vehicles: [
      {
        _id: "vehicle-001",
        name: "Swift Dzire",
        slug: "swift-dzire",
        brand: "Maruti Suzuki",
        cabType: "Sedan",
        passengerCapacity: 4,
        luggageCapacity: 2,
        image: "/images/cars/swift-dzire.png",
        airCondition: true,
        fuelType: "Petrol",
        transmission: "Manual",
      },

      {
        _id: "vehicle-002",
        name: "Ertiga",
        slug: "ertiga",
        brand: "Maruti Suzuki",
        cabType: "SUV",
        passengerCapacity: 6,
        luggageCapacity: 3,
        image: "/images/cars/ertiga.png",
        airCondition: true,
        fuelType: "Petrol",
        transmission: "Manual",
      },

      {
        _id: "vehicle-003",
        name: "Innova",
        slug: "innova",
        brand: "Toyota",
        cabType: "SUV",
        passengerCapacity: 6,
        luggageCapacity: 4,
        image: "/images/cars/innova.png",
        airCondition: true,
        fuelType: "Diesel",
        transmission: "Manual",
      },

      {
        _id: "vehicle-004",
        name: "Innova Crysta",
        slug: "innova-crysta",
        brand: "Toyota",
        cabType: "Premium SUV",
        passengerCapacity: 6,
        luggageCapacity: 5,
        image: "/images/cars/innova-crysta.png",
        airCondition: true,
        fuelType: "Diesel",
        transmission: "Manual",
      },
    ],

    fares: [
      {
        _id: "fare-001",
        vehicleId: "vehicle-001",
        vehicleName: "Swift Dzire",
        oneWayPrice: 1200,
        roundTripPrice: 2200,
      },

      {
        _id: "fare-002",
        vehicleId: "vehicle-002",
        vehicleName: "Ertiga",
        oneWayPrice: 1800,
        roundTripPrice: 3300,
      },

      {
        _id: "fare-003",
        vehicleId: "vehicle-003",
        vehicleName: "Innova",
        oneWayPrice: 2200,
        roundTripPrice: 4000,
      },

      {
        _id: "fare-004",
        vehicleId: "vehicle-004",
        vehicleName: "Innova Crysta",
        oneWayPrice: 2800,
        roundTripPrice: 5000,
      },
    ],

    popularRoutes: [
      {
        _id: "popular-001",
        fromCity: "Noida",
        toCity: "Delhi",
        slug: "noida-to-delhi",
      },

      {
        _id: "popular-002",
        fromCity: "Noida",
        toCity: "Agra",
        slug: "noida-to-agra",
      },

      {
        _id: "popular-003",
        fromCity: "Noida",
        toCity: "Jaipur",
        slug: "noida-to-jaipur",
      },

      {
        _id: "popular-004",
        fromCity: "Noida",
        toCity: "Haridwar",
        slug: "noida-to-haridwar",
      },
    ],
  },

  "noida-to-delhi-taxi-fare": {
    page: {
      _id: "page-002",
      pageType: "taxi-fare",
      slug: "noida-to-delhi-taxi-fare",
      h1: "Noida to Delhi Taxi Fare",
      metaTitle: "Noida to Delhi Taxi Fare | Cab Price",
      metaDescription:
        "Check Noida to Delhi taxi fare for Sedan, SUV, Ertiga and Innova.",
      faqs: [],
    },

    route: {
      _id: "route-001",
      fromCity: "Noida",
      toCity: "Delhi",
      slug: "noida-to-delhi",
      distance: 25,
      duration: "45 min - 1.5 hrs",
    },

    vehicles: [],
    fares: [
      {
        _id: "fare-001",
        vehicleId: "vehicle-001",
        vehicleName: "Swift Dzire",
        oneWayPrice: 1200,
        roundTripPrice: 2200,
      },

      {
        _id: "fare-002",
        vehicleId: "vehicle-002",
        vehicleName: "Ertiga",
        oneWayPrice: 1800,
        roundTripPrice: 3300,
      },

      {
        _id: "fare-003",
        vehicleId: "vehicle-003",
        vehicleName: "Innova",
        oneWayPrice: 2200,
        roundTripPrice: 4000,
      },
    ],

    popularRoutes: [],
  },

  "noida-to-delhi-one-way-taxi": {
    page: {
      _id: "page-003",
      pageType: "one-way-taxi",
      slug: "noida-to-delhi-one-way-taxi",
      h1: "Noida to Delhi One Way Taxi",
      metaTitle: "Noida to Delhi One Way Taxi | Book Now",
      metaDescription:
        "Book a one way taxi from Noida to Delhi with affordable fares and comfortable vehicles.",
      faqs: [],
    },

    route: {
      _id: "route-001",
      fromCity: "Noida",
      toCity: "Delhi",
      slug: "noida-to-delhi",
      distance: 25,
      duration: "45 min - 1.5 hrs",
    },

    vehicles: [
      {
        _id: "vehicle-001",
        name: "Swift Dzire",
        slug: "swift-dzire",
        brand: "Maruti Suzuki",
        cabType: "Sedan",
        passengerCapacity: 4,
        luggageCapacity: 2,
        image: "/images/cars/swift-dzire.png",
        airCondition: true,
        fuelType: "Petrol",
        transmission: "Manual",
      },

      {
        _id: "vehicle-002",
        name: "Ertiga",
        slug: "ertiga",
        brand: "Maruti Suzuki",
        cabType: "SUV",
        passengerCapacity: 6,
        luggageCapacity: 3,
        image: "/images/cars/ertiga.png",
        airCondition: true,
        fuelType: "Petrol",
        transmission: "Manual",
      },
    ],

    fares: [
      {
        _id: "fare-001",
        vehicleId: "vehicle-001",
        vehicleName: "Swift Dzire",
        oneWayPrice: 1200,
        roundTripPrice: 2200,
      },

      {
        _id: "fare-002",
        vehicleId: "vehicle-002",
        vehicleName: "Ertiga",
        oneWayPrice: 1800,
        roundTripPrice: 3300,
      },
    ],

    popularRoutes: [],
  },

  "noida-to-delhi-sedan-taxi": {
    page: {
      _id: "page-004",
      pageType: "sedan-taxi",
      slug: "noida-to-delhi-sedan-taxi",
      h1: "Noida to Delhi Sedan Taxi",
      metaTitle: "Noida to Delhi Sedan Taxi | Book Sedan Cab",
      metaDescription:
        "Book a comfortable Sedan taxi from Noida to Delhi at affordable prices.",
      faqs: [],
    },

    route: {
      _id: "route-001",
      fromCity: "Noida",
      toCity: "Delhi",
      slug: "noida-to-delhi",
      distance: 25,
      duration: "45 min - 1.5 hrs",
    },

    vehicles: [
      {
        _id: "vehicle-001",
        name: "Swift Dzire",
        slug: "swift-dzire",
        brand: "Maruti Suzuki",
        cabType: "Sedan",
        passengerCapacity: 4,
        luggageCapacity: 2,
        image: "/images/cars/swift-dzire.png",
        airCondition: true,
        fuelType: "Petrol",
        transmission: "Manual",
      },

      {
        _id: "vehicle-005",
        name: "Honda Amaze",
        slug: "honda-amaze",
        brand: "Honda",
        cabType: "Sedan",
        passengerCapacity: 4,
        luggageCapacity: 2,
        image: "/images/cars/honda-amaze.png",
        airCondition: true,
        fuelType: "Petrol",
        transmission: "Manual",
      },
    ],

    fares: [
      {
        _id: "fare-001",
        vehicleId: "vehicle-001",
        vehicleName: "Swift Dzire",
        oneWayPrice: 1200,
        roundTripPrice: 2200,
      },

      {
        _id: "fare-005",
        vehicleId: "vehicle-005",
        vehicleName: "Honda Amaze",
        oneWayPrice: 1300,
        roundTripPrice: 2400,
      },
    ],

    popularRoutes: [],
  },
  "noida-to-delhi-suv-taxi": {
  page: {
    _id: "page-002",
    pageType: "suv-taxi",
    slug: "noida-to-delhi-suv-taxi",
    h1: "Noida to Delhi SUV Taxi",
    metaTitle: "Noida to Delhi SUV Taxi | Book Ertiga, Innova & Crysta",
    metaDescription:
      "Book a spacious SUV taxi from Noida to Delhi at fixed fares. Choose from Ertiga, Innova, Innova Crysta & Hycross — AC cabs with experienced drivers.",
    faqs: [
      {
        _id: "faq-suv-001",
        question: "What is the SUV taxi fare from Noida to Delhi?",
        answer:
          "SUV fares start at ₹1,800 one-way for the Ertiga, ₹2,200 for the Innova and ₹2,800 for the Innova Crysta. Round-trip and premium models are priced accordingly.",
      },
      {
        _id: "faq-suv-002",
        question: "How many passengers can travel in an SUV?",
        answer:
          "The Ertiga and Innova comfortably seat 6 passengers, while the Innova Crysta and Hycross accommodate 6–7 passengers with luggage.",
      },
      {
        _id: "faq-suv-003",
        question: "Which SUV models are available from Noida to Delhi?",
        answer:
          "You can choose from the Maruti Suzuki Ertiga, Toyota Innova, Innova Crysta and Innova Hycross — all air-conditioned with ample luggage space.",
      },
    ],
  },

  route: {
    _id: "route-001",
    fromCity: "Noida",
    toCity: "Delhi",
    slug: "noida-to-delhi",
    distance: 25,
    duration: "45 min - 1.5 hrs",
  },

  vehicles: [
    {
      _id: "vehicle-002",
      name: "Ertiga",
      slug: "ertiga",
      brand: "Maruti Suzuki",
      cabType: "SUV",
      passengerCapacity: 6,
      luggageCapacity: 3,
      image: "/images/cars/ertiga.png",
      airCondition: true,
      fuelType: "Petrol",
      transmission: "Manual",
    },

    {
      _id: "vehicle-003",
      name: "Innova",
      slug: "innova",
      brand: "Toyota",
      cabType: "SUV",
      passengerCapacity: 6,
      luggageCapacity: 4,
      image: "/images/cars/innova.png",
      airCondition: true,
      fuelType: "Diesel",
      transmission: "Manual",
    },

    {
      _id: "vehicle-004",
      name: "Innova Crysta",
      slug: "innova-crysta",
      brand: "Toyota",
      cabType: "Premium SUV",
      passengerCapacity: 6,
      luggageCapacity: 5,
      image: "/images/cars/innova-crysta.png",
      airCondition: true,
      fuelType: "Diesel",
      transmission: "Manual",
    },

    {
      _id: "vehicle-005",
      name: "Innova Hycross",
      slug: "innova-hycross",
      brand: "Toyota",
      cabType: "Premium SUV",
      passengerCapacity: 7,
      luggageCapacity: 5,
      image: "/images/cars/innova-hycross.png",
      airCondition: true,
      fuelType: "Petrol",
      transmission: "Automatic",
    },
  ],

  fares: [
    {
      _id: "fare-002",
      vehicleId: "vehicle-002",
      vehicleName: "Ertiga",
      oneWayPrice: 1800,
      roundTripPrice: 3300,
    },

    {
      _id: "fare-003",
      vehicleId: "vehicle-003",
      vehicleName: "Innova",
      oneWayPrice: 2200,
      roundTripPrice: 4000,
    },

    {
      _id: "fare-004",
      vehicleId: "vehicle-004",
      vehicleName: "Innova Crysta",
      oneWayPrice: 2800,
      roundTripPrice: 5000,
    },

    {
      _id: "fare-005",
      vehicleId: "vehicle-005",
      vehicleName: "Innova Hycross",
      oneWayPrice: 3200,
      roundTripPrice: 5800,
    },
  ],

  popularRoutes: [
    {
      _id: "popular-001",
      fromCity: "Noida",
      toCity: "Delhi",
      slug: "noida-to-delhi",
    },

    {
      _id: "popular-002",
      fromCity: "Noida",
      toCity: "Agra",
      slug: "noida-to-agra",
    },

    {
      _id: "popular-003",
      fromCity: "Noida",
      toCity: "Jaipur",
      slug: "noida-to-jaipur",
    },

    {
      _id: "popular-004",
      fromCity: "Noida",
      toCity: "Haridwar",
      slug: "noida-to-haridwar",
    },
  ],
},
};

export async function getRoutePage(
  slug: string
): Promise<any | null> {
  return routePages[slug] || null;
}