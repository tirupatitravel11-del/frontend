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

    // popularRoutes: [
    //   {
    //     _id: "popular-001",
    //     fromCity: "Noida",
    //     toCity: "Delhi",
    //     slug: "noida-to-delhi",
    //   },

    //   {
    //     _id: "popular-002",
    //     fromCity: "Noida",
    //     toCity: "Agra",
    //     slug: "noida-to-agra",
    //   },

    //   {
    //     _id: "popular-003",
    //     fromCity: "Noida",
    //     toCity: "Jaipur",
    //     slug: "noida-to-jaipur",
    //   },

    //   {
    //     _id: "popular-004",
    //     fromCity: "Noida",
    //     toCity: "Haridwar",
    //     slug: "noida-to-haridwar",
    //   },
    // ],
    popularRoutes: [
      {
        id: 1,
        from: "Noida",
        to: "Delhi",
        distance: "25 km",
        duration: "1 hrs",
        image: "/popular_cab_route1.jpg",
        popular: true,
      },
      {
        id: 2,
        from: "Noida",
        to: "Agra",
        distance: "200 km",
        duration: "4 hrs",
        image: "/popular_cab_route2.jpg",
        popular: true,
      },
      {
        id: 3,
        from: "Noida",
        to: "Jaipur",
        distance: "280 km",
        duration: "5 hrs",
        image: "/popular_cab_route3.jpg",
        popular: true,
      },
      {
        id: 4,
        from: "Noida",
        to: "Haridwar",
        distance: "220 km",
        duration: "5 hrs",
        image: "/popular_cab_route4.jpg",
        popular: true,
      },
      {
        id: 5,
        from: "Noida",
        to: "Mathura",
        distance: "160 km",
        duration: "3 hrs",
        image: "/popular_cab_route5.jpg",
        popular: true,
      },
      {
        id: 6,
        from: "Noida",
        to: "Vrindavan",
        distance: "165 km",
        duration: "3 hrs",
        image: "/popular_cab_route6.jpg",
        popular: true,
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
  "noida-to-delhi-tempo-traveller": {
    page: {
      _id: "page-003",
      pageType: "tempo-traveller",
      slug: "noida-to-delhi-tempo-traveller",
      h1: "Noida to Delhi Tempo Traveller",
      metaTitle: "Noida to Delhi Tempo Traveller | 9, 12, 16, 20 Seater",
      metaDescription:
        "Book a comfortable Tempo Traveller from Noida to Delhi for family trips, group travel and corporate journeys. Choose from 9, 12, 16 and 20 seater Tempo Travellers with AC and experienced drivers.",

      faqs: [
        {
          _id: "faq-tempo-001",
          question: "What is the Tempo Traveller fare from Noida to Delhi?",
          answer:
            "Tempo Traveller fares from Noida to Delhi start at ₹3,500 for a 9-seater. 12, 16 and 20-seater Tempo Travellers are available at different prices based on vehicle size and travel requirements.",
        },

        {
          _id: "faq-tempo-002",
          question: "How many passengers can travel in a Tempo Traveller?",
          answer:
            "You can choose from 9, 12, 16 and 20-seater Tempo Travellers depending on the size of your group. All vehicles offer comfortable seating and sufficient luggage space.",
        },

        {
          _id: "faq-tempo-003",
          question: "Which Tempo Traveller is available from Noida to Delhi?",
          answer:
            "We provide 9, 12, 16 and 20-seater Tempo Travellers from Noida to Delhi. AC and comfortable vehicles are available with experienced drivers.",
        },

        {
          _id: "faq-tempo-004",
          question:
            "Can I book a Tempo Traveller for a one-way trip from Noida to Delhi?",
          answer:
            "Yes, you can book a Tempo Traveller for a one-way trip from Noida to Delhi. Round-trip and full-day options are also available for group travel.",
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
        _id: "vehicle-006",
        name: "9 Seater Tempo Traveller",
        slug: "9-seater-tempo-traveller",
        brand: "Force",
        cabType: "Tempo Traveller",
        passengerCapacity: 9,
        luggageCapacity: 4,
        image: "/images/tempo-traveller/9-seater.png",
        airCondition: true,
        fuelType: "Diesel",
        transmission: "Manual",
      },

      {
        _id: "vehicle-007",
        name: "12 Seater Tempo Traveller",
        slug: "12-seater-tempo-traveller",
        brand: "Force",
        cabType: "Tempo Traveller",
        passengerCapacity: 12,
        luggageCapacity: 6,
        image: "/images/tempo-traveller/12-seater.png",
        airCondition: true,
        fuelType: "Diesel",
        transmission: "Manual",
      },

      {
        _id: "vehicle-008",
        name: "16 Seater Tempo Traveller",
        slug: "16-seater-tempo-traveller",
        brand: "Force",
        cabType: "Tempo Traveller",
        passengerCapacity: 16,
        luggageCapacity: 8,
        image: "/images/tempo-traveller/16-seater.png",
        airCondition: true,
        fuelType: "Diesel",
        transmission: "Manual",
      },

      {
        _id: "vehicle-009",
        name: "20 Seater Tempo Traveller",
        slug: "20-seater-tempo-traveller",
        brand: "Force",
        cabType: "Tempo Traveller",
        passengerCapacity: 20,
        luggageCapacity: 10,
        image: "/images/tempo-traveller/20-seater.png",
        airCondition: true,
        fuelType: "Diesel",
        transmission: "Manual",
      },
    ],

    fares: [
      {
        _id: "fare-006",
        vehicleId: "vehicle-006",
        vehicleName: "9 Seater Tempo Traveller",
        oneWayPrice: 3500,
        roundTripPrice: 6500,
      },

      {
        _id: "fare-007",
        vehicleId: "vehicle-007",
        vehicleName: "12 Seater Tempo Traveller",
        oneWayPrice: 4200,
        roundTripPrice: 7800,
      },

      {
        _id: "fare-008",
        vehicleId: "vehicle-008",
        vehicleName: "16 Seater Tempo Traveller",
        oneWayPrice: 5200,
        roundTripPrice: 9500,
      },

      {
        _id: "fare-009",
        vehicleId: "vehicle-009",
        vehicleName: "20 Seater Tempo Traveller",
        oneWayPrice: 6500,
        roundTripPrice: 11500,
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
  "noida-to-delhi-urbania-rental": {
    page: {
      _id: "page-urbania-003",
      pageType: "urbania-rental",
      slug: "noida-to-delhi-urbania-rental",
      h1: "Noida to Delhi Force Urbania Rental",
      metaTitle:
        "Noida to Delhi Force Urbania Rental | 9, 12, 13, 14 Seater Luxury Van",
      metaDescription:
        "Book a luxurious Force Urbania from Noida to Delhi for family trips, corporate travel and weddings. Choose from 9, 12, 13 and 14-seater Urbania vans with pushback seats, AC and experienced drivers.",

      faqs: [
        {
          _id: "faq-urbania-001",
          question:
            "What is the Force Urbania rental fare from Noida to Delhi?",
          answer:
            "Force Urbania rental fares from Noida to Delhi start at ₹3,500 for a 9-seater. 12, 13 and 14-seater luxury vans are available at different prices based on vehicle size and travel requirements.",
        },

        {
          _id: "faq-urbania-002",
          question: "How many passengers can travel in a Force Urbania?",
          answer:
            "You can choose from 9, 12, 13 and 14-seater Force Urbania vans depending on the size of your group. All vehicles offer premium pushback seating, individual AC vents and sufficient luggage space.",
        },

        {
          _id: "faq-urbania-003",
          question:
            "Which Force Urbania models are available from Noida to Delhi?",
          answer:
            "We provide 9, 12, 13 and 14-seater Force Urbania luxury vans from Noida to Delhi. All vehicles are well-maintained, fully air-conditioned and come with experienced drivers.",
        },

        {
          _id: "faq-urbania-004",
          question:
            "Can I book a Force Urbania for a one-way trip from Noida to Delhi?",
          answer:
            "Yes, you can book a Force Urbania for a one-way trip from Noida to Delhi. Round-trip, multi-day and outstation options are also available for corporate events, weddings and group travel.",
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
        _id: "vehicle-urbania-001",
        name: "9 Seater Force Urbania",
        slug: "9-seater-force-urbania",
        brand: "Force",
        cabType: "Luxury Van",
        passengerCapacity: 9,
        luggageCapacity: 5,
        image: "/images/urbania/9-seater.png",
        airCondition: true,
        fuelType: "Diesel",
        transmission: "Manual",
      },

      {
        _id: "vehicle-urbania-002",
        name: "12 Seater Force Urbania",
        slug: "12-seater-force-urbania",
        brand: "Force",
        cabType: "Luxury Van",
        passengerCapacity: 12,
        luggageCapacity: 7,
        image: "/images/urbania/12-seater.png",
        airCondition: true,
        fuelType: "Diesel",
        transmission: "Manual",
      },

      {
        _id: "vehicle-urbania-003",
        name: "13 Seater Force Urbania",
        slug: "13-seater-force-urbania",
        brand: "Force",
        cabType: "Luxury Van",
        passengerCapacity: 13,
        luggageCapacity: 8,
        image: "/images/urbania/13-seater.png",
        airCondition: true,
        fuelType: "Diesel",
        transmission: "Manual",
      },

      {
        _id: "vehicle-urbania-004",
        name: "14 Seater Force Urbania",
        slug: "14-seater-force-urbania",
        brand: "Force",
        cabType: "Luxury Van",
        passengerCapacity: 14,
        luggageCapacity: 9,
        image: "/images/urbania/14-seater.png",
        airCondition: true,
        fuelType: "Diesel",
        transmission: "Manual",
      },
    ],

    fares: [
      {
        _id: "fare-urbania-001",
        vehicleId: "vehicle-urbania-001",
        vehicleName: "9 Seater Force Urbania",
        oneWayPrice: 3500,
        roundTripPrice: 6500,
      },

      {
        _id: "fare-urbania-002",
        vehicleId: "vehicle-urbania-002",
        vehicleName: "12 Seater Force Urbania",
        oneWayPrice: 4500,
        roundTripPrice: 8500,
      },

      {
        _id: "fare-urbania-003",
        vehicleId: "vehicle-urbania-003",
        vehicleName: "13 Seater Force Urbania",
        oneWayPrice: 5000,
        roundTripPrice: 9000,
      },

      {
        _id: "fare-urbania-004",
        vehicleId: "vehicle-urbania-004",
        vehicleName: "14 Seater Force Urbania",
        oneWayPrice: 5500,
        roundTripPrice: 10000,
      },
    ],

    popularRoutes: [
      {
        _id: "popular-urbania-001",
        fromCity: "Noida",
        toCity: "Delhi",
        slug: "noida-to-delhi",
      },

      {
        _id: "popular-urbania-002",
        fromCity: "Noida",
        toCity: "Agra",
        slug: "noida-to-agra",
      },

      {
        _id: "popular-urbania-003",
        fromCity: "Noida",
        toCity: "Jaipur",
        slug: "noida-to-jaipur",
      },

      {
        _id: "popular-urbania-004",
        fromCity: "Noida",
        toCity: "Haridwar",
        slug: "noida-to-haridwar",
      },
    ],
  },
  "noida-to-delhi-innova-crysta-taxi": {
    page: {
      _id: "page-008",
      pageType: "innova-crysta-taxi",
      slug: "noida-to-delhi-innova-crysta-taxi",

      h1: "Noida to Delhi Innova Crysta Taxi",

      metaTitle: "Noida to Delhi Innova Crysta Taxi | Book Innova Crysta",

      metaDescription:
        "Book an Innova Crysta taxi from Noida to Delhi at affordable fares. Enjoy a comfortable, spacious and reliable ride.",

      faqs: [
        {
          _id: "faq-innova-001",
          question:
            "What is the fare for an Innova Crysta from Noida to Delhi?",
          answer:
            "The Innova Crysta taxi fare from Noida to Delhi starts from around ₹2,800 for a one-way trip. The final fare may vary depending on pickup location and trip requirements.",
        },

        {
          _id: "faq-innova-002",
          question: "How long does an Innova Crysta take from Noida to Delhi?",
          answer:
            "An Innova Crysta usually takes around 45 minutes to 1.5 hours from Noida to Delhi, depending on traffic and the exact pickup and drop location.",
        },

        {
          _id: "faq-innova-003",
          question: "How many passengers can travel in an Innova Crysta?",
          answer:
            "An Innova Crysta can comfortably accommodate up to 6 passengers along with luggage.",
        },

        {
          _id: "faq-innova-004",
          question:
            "Is Innova Crysta available for one-way travel from Noida to Delhi?",
          answer:
            "Yes, Innova Crysta is available for one-way taxi travel from Noida to Delhi.",
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
        _id: "fare-004",
        vehicleId: "vehicle-004",
        vehicleName: "Innova Crysta",
        oneWayPrice: 2800,
        roundTripPrice: 5000,
      },
    ],

    popularRoutes: [
      {
        id: 1,
        from: "Noida",
        to: "Delhi",
        distance: "25 km",
        duration: "1 hrs",
        image: "/popular_cab_route1.jpg",
        popular: true,
      },

      {
        id: 2,
        from: "Noida",
        to: "Agra",
        distance: "200 km",
        duration: "4 hrs",
        image: "/popular_cab_route2.jpg",
        popular: true,
      },

      {
        id: 3,
        from: "Noida",
        to: "Jaipur",
        distance: "280 km",
        duration: "5 hrs",
        image: "/popular_cab_route3.jpg",
        popular: true,
      },

      {
        id: 4,
        from: "Noida",
        to: "Haridwar",
        distance: "220 km",
        duration: "5 hrs",
        image: "/popular_cab_route4.jpg",
        popular: true,
      },

      {
        id: 5,
        from: "Noida",
        to: "Mathura",
        distance: "160 km",
        duration: "3 hrs",
        image: "/popular_cab_route5.jpg",
        popular: true,
      },

      {
        id: 6,
        from: "Noida",
        to: "Vrindavan",
        distance: "165 km",
        duration: "3 hrs",
        image: "/popular_cab_route6.jpg",
        popular: true,
      },
    ],
  },
  "noida-to-delhi-ertiga-taxi": {
    page: {
      _id: "page-005",
      pageType: "ertiga-taxi",
      slug: "noida-to-delhi-ertiga-taxi",
      h1: "Noida to Delhi Ertiga Taxi",
      metaTitle: "Noida to Delhi Ertiga Taxi | Book Ertiga Cab",
      metaDescription:
        "Book a comfortable Ertiga taxi from Noida to Delhi at affordable prices.",
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
        _id: "vehicle-002",
        name: "Maruti Ertiga",
        slug: "maruti-ertiga",
        brand: "Maruti Suzuki",
        cabType: "Ertiga",
        passengerCapacity: 6,
        luggageCapacity: 3,
        image: "/images/cars/maruti-ertiga.png",
        airCondition: true,
        fuelType: "Petrol",
        transmission: "Manual",
      },
    ],

    fares: [
      {
        _id: "fare-002",
        vehicleId: "vehicle-002",
        vehicleName: "Maruti Ertiga",
        oneWayPrice: 1600,
        roundTripPrice: 3000,
      },
    ],

    popularRoutes: [],
  },
};

export async function getRoutePage(slug: string): Promise<any | null> {
  return routePages[slug] || null;
}
