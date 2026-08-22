// // import type { RoutePageData } from "@/types/route";

import { calculateFare, findRouteFromSlug, findVehicleFromSlug, generatePopularRoutes } from "./route-data/route-generator";

// const routePages: Record<string, any> = {
//   "noida-to-delhi-taxi": {
//     page: {
//       _id: "page-001",
//       pageType: "taxi",
//       slug: "noida-to-delhi-taxi",
//       h1: "Noida to Delhi Taxi",
//       metaTitle: "Noida to Delhi Taxi | Book Affordable Cab",
//       metaDescription:
//         "Book a reliable taxi from Noida to Delhi at affordable fares. Choose from Sedan, SUV and premium cabs.",
//       faqs: [
//         {
//           _id: "faq-001",
//           question: "What is the taxi fare from Noida to Delhi?",
//           answer:
//             "The taxi fare from Noida to Delhi depends on the vehicle type and trip option.",
//         },
//         {
//           _id: "faq-002",
//           question: "How long does it take from Noida to Delhi?",
//           answer:
//             "The journey usually takes around 45 minutes to 1.5 hours depending on traffic and the pickup location.",
//         },
//         {
//           _id: "faq-003",
//           question: "Which cars are available from Noida to Delhi?",
//           answer:
//             "You can choose from Sedan, SUV, Ertiga, Innova and other available vehicles.",
//         },
//       ],
//     },

//     route: {
//       _id: "route-001",
//       fromCity: "Noida",
//       toCity: "Delhi",
//       slug: "noida-to-delhi",
//       distance: 25,
//       duration: "45 min - 1.5 hrs",
//     },

//     vehicles: [
//       {
//         _id: "vehicle-001",
//         name: "Swift Dzire",
//         slug: "swift-dzire",
//         brand: "Maruti Suzuki",
//         cabType: "Sedan",
//         passengerCapacity: 4,
//         luggageCapacity: 2,
//         image: "/images/cars/swift-dzire.png",
//         airCondition: true,
//         fuelType: "Petrol",
//         transmission: "Manual",
//       },

//       {
//         _id: "vehicle-002",
//         name: "Ertiga",
//         slug: "ertiga",
//         brand: "Maruti Suzuki",
//         cabType: "SUV",
//         passengerCapacity: 6,
//         luggageCapacity: 3,
//         image: "/images/cars/ertiga.png",
//         airCondition: true,
//         fuelType: "Petrol",
//         transmission: "Manual",
//       },

//       {
//         _id: "vehicle-003",
//         name: "Innova",
//         slug: "innova",
//         brand: "Toyota",
//         cabType: "SUV",
//         passengerCapacity: 6,
//         luggageCapacity: 4,
//         image: "/images/cars/innova.png",
//         airCondition: true,
//         fuelType: "Diesel",
//         transmission: "Manual",
//       },

//       {
//         _id: "vehicle-004",
//         name: "Innova Crysta",
//         slug: "innova-crysta",
//         brand: "Toyota",
//         cabType: "Premium SUV",
//         passengerCapacity: 6,
//         luggageCapacity: 5,
//         image: "/images/cars/innova-crysta.png",
//         airCondition: true,
//         fuelType: "Diesel",
//         transmission: "Manual",
//       },
//     ],

//     fares: [
//       {
//         _id: "fare-001",
//         vehicleId: "vehicle-001",
//         vehicleName: "Swift Dzire",
//         oneWayPrice: 1200,
//         roundTripPrice: 2200,
//       },

//       {
//         _id: "fare-002",
//         vehicleId: "vehicle-002",
//         vehicleName: "Ertiga",
//         oneWayPrice: 1800,
//         roundTripPrice: 3300,
//       },

//       {
//         _id: "fare-003",
//         vehicleId: "vehicle-003",
//         vehicleName: "Innova",
//         oneWayPrice: 2200,
//         roundTripPrice: 4000,
//       },

//       {
//         _id: "fare-004",
//         vehicleId: "vehicle-004",
//         vehicleName: "Innova Crysta",
//         oneWayPrice: 2800,
//         roundTripPrice: 5000,
//       },
//     ],

//     // popularRoutes: [
//     //   {
//     //     _id: "popular-001",
//     //     fromCity: "Noida",
//     //     toCity: "Delhi",
//     //     slug: "noida-to-delhi",
//     //   },

//     //   {
//     //     _id: "popular-002",
//     //     fromCity: "Noida",
//     //     toCity: "Agra",
//     //     slug: "noida-to-agra",
//     //   },

//     //   {
//     //     _id: "popular-003",
//     //     fromCity: "Noida",
//     //     toCity: "Jaipur",
//     //     slug: "noida-to-jaipur",
//     //   },

//     //   {
//     //     _id: "popular-004",
//     //     fromCity: "Noida",
//     //     toCity: "Haridwar",
//     //     slug: "noida-to-haridwar",
//     //   },
//     // ],
//     popularRoutes: [
//       {
//         id: 1,
//         from: "Noida",
//         to: "Delhi",
//         distance: "25 km",
//         duration: "1 hrs",
//         image: "/popular_cab_route1.jpg",
//         popular: true,
//       },
//       {
//         id: 2,
//         from: "Noida",
//         to: "Agra",
//         distance: "200 km",
//         duration: "4 hrs",
//         image: "/popular_cab_route2.jpg",
//         popular: true,
//       },
//       {
//         id: 3,
//         from: "Noida",
//         to: "Jaipur",
//         distance: "280 km",
//         duration: "5 hrs",
//         image: "/popular_cab_route3.jpg",
//         popular: true,
//       },
//       {
//         id: 4,
//         from: "Noida",
//         to: "Haridwar",
//         distance: "220 km",
//         duration: "5 hrs",
//         image: "/popular_cab_route4.jpg",
//         popular: true,
//       },
//       {
//         id: 5,
//         from: "Noida",
//         to: "Mathura",
//         distance: "160 km",
//         duration: "3 hrs",
//         image: "/popular_cab_route5.jpg",
//         popular: true,
//       },
//       {
//         id: 6,
//         from: "Noida",
//         to: "Vrindavan",
//         distance: "165 km",
//         duration: "3 hrs",
//         image: "/popular_cab_route6.jpg",
//         popular: true,
//       },
//     ],
//   },

//   "noida-to-delhi-taxi-fare": {
//     page: {
//       _id: "page-002",
//       pageType: "taxi-fare",
//       slug: "noida-to-delhi-taxi-fare",
//       h1: "Noida to Delhi Taxi Fare",
//       metaTitle: "Noida to Delhi Taxi Fare | Cab Price",
//       metaDescription:
//         "Check Noida to Delhi taxi fare for Sedan, SUV, Ertiga and Innova.",
//       faqs: [],
//     },

//     route: {
//       _id: "route-001",
//       fromCity: "Noida",
//       toCity: "Delhi",
//       slug: "noida-to-delhi",
//       distance: 25,
//       duration: "45 min - 1.5 hrs",
//     },

//     vehicles: [],
//     fares: [
//       {
//         _id: "fare-001",
//         vehicleId: "vehicle-001",
//         vehicleName: "Swift Dzire",
//         oneWayPrice: 1200,
//         roundTripPrice: 2200,
//       },

//       {
//         _id: "fare-002",
//         vehicleId: "vehicle-002",
//         vehicleName: "Ertiga",
//         oneWayPrice: 1800,
//         roundTripPrice: 3300,
//       },

//       {
//         _id: "fare-003",
//         vehicleId: "vehicle-003",
//         vehicleName: "Innova",
//         oneWayPrice: 2200,
//         roundTripPrice: 4000,
//       },
//     ],

//     popularRoutes: [
//       {
//         id: 1,
//         from: "Noida",
//         to: "Delhi",
//         distance: "25 km",
//         duration: "45 min–1.5 hr",
//         image: "/popular_cab_route1.jpg",
//         popular: true,
//       },
//       {
//         id: 2,
//         from: "Noida",
//         to: "Delhi Airport",
//         distance: "35 km",
//         duration: "1–2 hr",
//         image: "/popular_cab_route2.jpg",
//         popular: true,
//       },
//       {
//         id: 3,
//         from: "Noida",
//         to: "New Delhi Railway Station",
//         distance: "30 km",
//         duration: "1–1.5 hr",
//         image: "/popular_cab_route3.jpg",
//         popular: true,
//       },
//       {
//         id: 4,
//         from: "Noida",
//         to: "Agra",
//         distance: "200 km",
//         duration: "4–5 hr",
//         image: "/popular_cab_route4.jpg",
//         popular: true,
//       },
//       {
//         id: 5,
//         from: "Noida",
//         to: "Jaipur",
//         distance: "280 km",
//         duration: "5–6 hr",
//         image: "/popular_cab_route5.jpg",
//         popular: true,
//       },
//       {
//         id: 6,
//         from: "Noida",
//         to: "Haridwar",
//         distance: "220 km",
//         duration: "5–6 hr",
//         image: "/popular_cab_route6.jpg",
//         popular: true,
//       },
//       {
//         id: 7,
//         from: "Noida",
//         to: "Mathura",
//         distance: "160 km",
//         duration: "3–4 hr",
//         image: "/popular_cab_route7.jpg",
//         popular: true,
//       },
//       {
//         id: 8,
//         from: "Noida",
//         to: "Vrindavan",
//         distance: "165 km",
//         duration: "3–4 hr",
//         image: "/popular_cab_route8.jpg",
//         popular: true,
//       },
//     ],
//   },

//   "noida-to-delhi-one-way-taxi": {
//     page: {
//       _id: "page-003",
//       pageType: "one-way-taxi",
//       slug: "noida-to-delhi-one-way-taxi",
//       h1: "Noida to Delhi One Way Taxi",
//       metaTitle: "Noida to Delhi One Way Taxi | Book Now",
//       metaDescription:
//         "Book a one way taxi from Noida to Delhi with affordable fares and comfortable vehicles.",
//       faqs: [],
//     },

//     route: {
//       _id: "route-001",
//       fromCity: "Noida",
//       toCity: "Delhi",
//       slug: "noida-to-delhi",
//       distance: 25,
//       duration: "45 min - 1.5 hrs",
//     },

//     vehicles: [
//       {
//         _id: "vehicle-001",
//         name: "Swift Dzire",
//         slug: "swift-dzire",
//         brand: "Maruti Suzuki",
//         cabType: "Sedan",
//         passengerCapacity: 4,
//         luggageCapacity: 2,
//         image: "/images/cars/swift-dzire.png",
//         airCondition: true,
//         fuelType: "Petrol",
//         transmission: "Manual",
//       },

//       {
//         _id: "vehicle-002",
//         name: "Ertiga",
//         slug: "ertiga",
//         brand: "Maruti Suzuki",
//         cabType: "SUV",
//         passengerCapacity: 6,
//         luggageCapacity: 3,
//         image: "/images/cars/ertiga.png",
//         airCondition: true,
//         fuelType: "Petrol",
//         transmission: "Manual",
//       },
//     ],

//     fares: [
//       {
//         _id: "fare-001",
//         vehicleId: "vehicle-001",
//         vehicleName: "Swift Dzire",
//         oneWayPrice: 1200,
//         roundTripPrice: 2200,
//       },

//       {
//         _id: "fare-002",
//         vehicleId: "vehicle-002",
//         vehicleName: "Ertiga",
//         oneWayPrice: 1800,
//         roundTripPrice: 3300,
//       },
//     ],

//     popularRoutes: [],
//   },

//   "noida-to-delhi-sedan-taxi": {
//     page: {
//       _id: "page-004",
//       pageType: "sedan-taxi",
//       slug: "noida-to-delhi-sedan-taxi",
//       h1: "Noida to Delhi Sedan Taxi",
//       metaTitle: "Noida to Delhi Sedan Taxi | Book Sedan Cab",
//       metaDescription:
//         "Book a comfortable Sedan taxi from Noida to Delhi at affordable prices.",
//       faqs: [],
//     },

//     route: {
//       _id: "route-001",
//       fromCity: "Noida",
//       toCity: "Delhi",
//       slug: "noida-to-delhi",
//       distance: 25,
//       duration: "45 min - 1.5 hrs",
//     },

//     vehicles: [
//       {
//         _id: "vehicle-001",
//         name: "Swift Dzire",
//         slug: "swift-dzire",
//         brand: "Maruti Suzuki",
//         cabType: "Sedan",
//         passengerCapacity: 4,
//         luggageCapacity: 2,
//         image: "/images/cars/swift-dzire.png",
//         airCondition: true,
//         fuelType: "Petrol",
//         transmission: "Manual",
//       },

//       {
//         _id: "vehicle-005",
//         name: "Honda Amaze",
//         slug: "honda-amaze",
//         brand: "Honda",
//         cabType: "Sedan",
//         passengerCapacity: 4,
//         luggageCapacity: 2,
//         image: "/images/cars/honda-amaze.png",
//         airCondition: true,
//         fuelType: "Petrol",
//         transmission: "Manual",
//       },
//     ],

//     fares: [
//       {
//         _id: "fare-001",
//         vehicleId: "vehicle-001",
//         vehicleName: "Swift Dzire",
//         oneWayPrice: 1200,
//         roundTripPrice: 2200,
//       },

//       {
//         _id: "fare-005",
//         vehicleId: "vehicle-005",
//         vehicleName: "Honda Amaze",
//         oneWayPrice: 1300,
//         roundTripPrice: 2400,
//       },
//     ],

//     popularRoutes: [
//       {
//         id: 1,
//         from: "Noida",
//         to: "Delhi",
//         distance: "25 km",
//         duration: "45 min–1.5 hr",
//         image: "/popular_cab_route1.jpg",
//         popular: true,
//       },
//       {
//         id: 2,
//         from: "Noida",
//         to: "New Delhi Railway Station",
//         distance: "30 km",
//         duration: "1–1.5 hr",
//         image: "/popular_cab_route2.jpg",
//         popular: true,
//       },
//       {
//         id: 3,
//         from: "Noida",
//         to: "Delhi Airport",
//         distance: "35 km",
//         duration: "1–2 hr",
//         image: "/popular_cab_route3.jpg",
//         popular: true,
//       },
//       {
//         id: 4,
//         from: "Noida",
//         to: "Gurgaon",
//         distance: "55 km",
//         duration: "1.5–2.5 hr",
//         image: "/popular_cab_route4.jpg",
//         popular: true,
//       },
//       {
//         id: 5,
//         from: "Noida",
//         to: "Agra",
//         distance: "200 km",
//         duration: "4–5 hr",
//         image: "/popular_cab_route5.jpg",
//         popular: true,
//       },
//       {
//         id: 6,
//         from: "Noida",
//         to: "Jaipur",
//         distance: "280 km",
//         duration: "5–6 hr",
//         image: "/popular_cab_route6.jpg",
//         popular: true,
//       },
//       {
//         id: 7,
//         from: "Noida",
//         to: "Haridwar",
//         distance: "220 km",
//         duration: "5–6 hr",
//         image: "/popular_cab_route7.jpg",
//         popular: true,
//       },
//       {
//         id: 8,
//         from: "Noida",
//         to: "Mathura",
//         distance: "160 km",
//         duration: "3–4 hr",
//         image: "/popular_cab_route8.jpg",
//         popular: true,
//       },
//     ],
//   },
//   "noida-to-delhi-suv-taxi": {
//     page: {
//       _id: "page-002",
//       pageType: "suv-taxi",
//       slug: "noida-to-delhi-suv-taxi",
//       h1: "Noida to Delhi SUV Taxi",
//       metaTitle: "Noida to Delhi SUV Taxi | Book Ertiga, Innova & Crysta",
//       metaDescription:
//         "Book a spacious SUV taxi from Noida to Delhi at fixed fares. Choose from Ertiga, Innova, Innova Crysta & Hycross — AC cabs with experienced drivers.",
//       faqs: [
//         {
//           _id: "faq-suv-001",
//           question: "What is the SUV taxi fare from Noida to Delhi?",
//           answer:
//             "SUV fares start at ₹1,800 one-way for the Ertiga, ₹2,200 for the Innova and ₹2,800 for the Innova Crysta. Round-trip and premium models are priced accordingly.",
//         },
//         {
//           _id: "faq-suv-002",
//           question: "How many passengers can travel in an SUV?",
//           answer:
//             "The Ertiga and Innova comfortably seat 6 passengers, while the Innova Crysta and Hycross accommodate 6–7 passengers with luggage.",
//         },
//         {
//           _id: "faq-suv-003",
//           question: "Which SUV models are available from Noida to Delhi?",
//           answer:
//             "You can choose from the Maruti Suzuki Ertiga, Toyota Innova, Innova Crysta and Innova Hycross — all air-conditioned with ample luggage space.",
//         },
//       ],
//     },

//     route: {
//       _id: "route-001",
//       fromCity: "Noida",
//       toCity: "Delhi",
//       slug: "noida-to-delhi",
//       distance: 25,
//       duration: "45 min - 1.5 hrs",
//     },

//     vehicles: [
//       {
//         _id: "vehicle-002",
//         name: "Ertiga",
//         slug: "ertiga",
//         brand: "Maruti Suzuki",
//         cabType: "SUV",
//         passengerCapacity: 6,
//         luggageCapacity: 3,
//         image: "/images/cars/ertiga.png",
//         airCondition: true,
//         fuelType: "Petrol",
//         transmission: "Manual",
//       },

//       {
//         _id: "vehicle-003",
//         name: "Innova",
//         slug: "innova",
//         brand: "Toyota",
//         cabType: "SUV",
//         passengerCapacity: 6,
//         luggageCapacity: 4,
//         image: "/images/cars/innova.png",
//         airCondition: true,
//         fuelType: "Diesel",
//         transmission: "Manual",
//       },

//       {
//         _id: "vehicle-004",
//         name: "Innova Crysta",
//         slug: "innova-crysta",
//         brand: "Toyota",
//         cabType: "Premium SUV",
//         passengerCapacity: 6,
//         luggageCapacity: 5,
//         image: "/images/cars/innova-crysta.png",
//         airCondition: true,
//         fuelType: "Diesel",
//         transmission: "Manual",
//       },

//       {
//         _id: "vehicle-005",
//         name: "Innova Hycross",
//         slug: "innova-hycross",
//         brand: "Toyota",
//         cabType: "Premium SUV",
//         passengerCapacity: 7,
//         luggageCapacity: 5,
//         image: "/images/cars/innova-hycross.png",
//         airCondition: true,
//         fuelType: "Petrol",
//         transmission: "Automatic",
//       },
//     ],

//     fares: [
//       {
//         _id: "fare-002",
//         vehicleId: "vehicle-002",
//         vehicleName: "Ertiga",
//         oneWayPrice: 1800,
//         roundTripPrice: 3300,
//       },

//       {
//         _id: "fare-003",
//         vehicleId: "vehicle-003",
//         vehicleName: "Innova",
//         oneWayPrice: 2200,
//         roundTripPrice: 4000,
//       },

//       {
//         _id: "fare-004",
//         vehicleId: "vehicle-004",
//         vehicleName: "Innova Crysta",
//         oneWayPrice: 2800,
//         roundTripPrice: 5000,
//       },

//       {
//         _id: "fare-005",
//         vehicleId: "vehicle-005",
//         vehicleName: "Innova Hycross",
//         oneWayPrice: 3200,
//         roundTripPrice: 5800,
//       },
//     ],

//     popularRoutes: [
//       {
//         _id: "popular-001",
//         fromCity: "Noida",
//         toCity: "Delhi",
//         slug: "noida-to-delhi",
//       },

//       {
//         _id: "popular-002",
//         fromCity: "Noida",
//         toCity: "Agra",
//         slug: "noida-to-agra",
//       },

//       {
//         _id: "popular-003",
//         fromCity: "Noida",
//         toCity: "Jaipur",
//         slug: "noida-to-jaipur",
//       },

//       {
//         _id: "popular-004",
//         fromCity: "Noida",
//         toCity: "Haridwar",
//         slug: "noida-to-haridwar",
//       },
//     ],
//   },
//   "noida-to-delhi-tempo-traveller": {
//     page: {
//       _id: "page-003",
//       pageType: "tempo-traveller",
//       slug: "noida-to-delhi-tempo-traveller",
//       h1: "Noida to Delhi Tempo Traveller",
//       metaTitle: "Noida to Delhi Tempo Traveller | 9, 12, 16, 20 Seater",
//       metaDescription:
//         "Book a comfortable Tempo Traveller from Noida to Delhi for family trips, group travel and corporate journeys. Choose from 9, 12, 16 and 20 seater Tempo Travellers with AC and experienced drivers.",

//       faqs: [
//         {
//           _id: "faq-tempo-001",
//           question: "What is the Tempo Traveller fare from Noida to Delhi?",
//           answer:
//             "Tempo Traveller fares from Noida to Delhi start at ₹3,500 for a 9-seater. 12, 16 and 20-seater Tempo Travellers are available at different prices based on vehicle size and travel requirements.",
//         },

//         {
//           _id: "faq-tempo-002",
//           question: "How many passengers can travel in a Tempo Traveller?",
//           answer:
//             "You can choose from 9, 12, 16 and 20-seater Tempo Travellers depending on the size of your group. All vehicles offer comfortable seating and sufficient luggage space.",
//         },

//         {
//           _id: "faq-tempo-003",
//           question: "Which Tempo Traveller is available from Noida to Delhi?",
//           answer:
//             "We provide 9, 12, 16 and 20-seater Tempo Travellers from Noida to Delhi. AC and comfortable vehicles are available with experienced drivers.",
//         },

//         {
//           _id: "faq-tempo-004",
//           question:
//             "Can I book a Tempo Traveller for a one-way trip from Noida to Delhi?",
//           answer:
//             "Yes, you can book a Tempo Traveller for a one-way trip from Noida to Delhi. Round-trip and full-day options are also available for group travel.",
//         },
//       ],
//     },

//     route: {
//       _id: "route-001",
//       fromCity: "Noida",
//       toCity: "Delhi",
//       slug: "noida-to-delhi",
//       distance: 25,
//       duration: "45 min - 1.5 hrs",
//     },

//     vehicles: [
//       {
//         _id: "vehicle-006",
//         name: "9 Seater Tempo Traveller",
//         slug: "9-seater-tempo-traveller",
//         brand: "Force",
//         cabType: "Tempo Traveller",
//         passengerCapacity: 9,
//         luggageCapacity: 4,
//         image: "/images/tempo-traveller/9-seater.png",
//         airCondition: true,
//         fuelType: "Diesel",
//         transmission: "Manual",
//       },

//       {
//         _id: "vehicle-007",
//         name: "12 Seater Tempo Traveller",
//         slug: "12-seater-tempo-traveller",
//         brand: "Force",
//         cabType: "Tempo Traveller",
//         passengerCapacity: 12,
//         luggageCapacity: 6,
//         image: "/images/tempo-traveller/12-seater.png",
//         airCondition: true,
//         fuelType: "Diesel",
//         transmission: "Manual",
//       },

//       {
//         _id: "vehicle-008",
//         name: "16 Seater Tempo Traveller",
//         slug: "16-seater-tempo-traveller",
//         brand: "Force",
//         cabType: "Tempo Traveller",
//         passengerCapacity: 16,
//         luggageCapacity: 8,
//         image: "/images/tempo-traveller/16-seater.png",
//         airCondition: true,
//         fuelType: "Diesel",
//         transmission: "Manual",
//       },

//       {
//         _id: "vehicle-009",
//         name: "20 Seater Tempo Traveller",
//         slug: "20-seater-tempo-traveller",
//         brand: "Force",
//         cabType: "Tempo Traveller",
//         passengerCapacity: 20,
//         luggageCapacity: 10,
//         image: "/images/tempo-traveller/20-seater.png",
//         airCondition: true,
//         fuelType: "Diesel",
//         transmission: "Manual",
//       },
//     ],

//     fares: [
//       {
//         _id: "fare-006",
//         vehicleId: "vehicle-006",
//         vehicleName: "9 Seater Tempo Traveller",
//         oneWayPrice: 3500,
//         roundTripPrice: 6500,
//       },

//       {
//         _id: "fare-007",
//         vehicleId: "vehicle-007",
//         vehicleName: "12 Seater Tempo Traveller",
//         oneWayPrice: 4200,
//         roundTripPrice: 7800,
//       },

//       {
//         _id: "fare-008",
//         vehicleId: "vehicle-008",
//         vehicleName: "16 Seater Tempo Traveller",
//         oneWayPrice: 5200,
//         roundTripPrice: 9500,
//       },

//       {
//         _id: "fare-009",
//         vehicleId: "vehicle-009",
//         vehicleName: "20 Seater Tempo Traveller",
//         oneWayPrice: 6500,
//         roundTripPrice: 11500,
//       },
//     ],

//     popularRoutes: [
//       {
//         _id: "popular-001",
//         fromCity: "Noida",
//         toCity: "Delhi",
//         slug: "noida-to-delhi",
//       },

//       {
//         _id: "popular-002",
//         fromCity: "Noida",
//         toCity: "Agra",
//         slug: "noida-to-agra",
//       },

//       {
//         _id: "popular-003",
//         fromCity: "Noida",
//         toCity: "Jaipur",
//         slug: "noida-to-jaipur",
//       },

//       {
//         _id: "popular-004",
//         fromCity: "Noida",
//         toCity: "Haridwar",
//         slug: "noida-to-haridwar",
//       },
//     ],
//   },
//   "noida-to-delhi-urbania-rental": {
//     page: {
//       _id: "page-urbania-003",
//       pageType: "urbania-rental",
//       slug: "noida-to-delhi-urbania-rental",
//       h1: "Noida to Delhi Force Urbania Rental",
//       metaTitle:
//         "Noida to Delhi Force Urbania Rental | 9, 12, 13, 14 Seater Luxury Van",
//       metaDescription:
//         "Book a luxurious Force Urbania from Noida to Delhi for family trips, corporate travel and weddings. Choose from 9, 12, 13 and 14-seater Urbania vans with pushback seats, AC and experienced drivers.",

//       faqs: [
//         {
//           _id: "faq-urbania-001",
//           question:
//             "What is the Force Urbania rental fare from Noida to Delhi?",
//           answer:
//             "Force Urbania rental fares from Noida to Delhi start at ₹3,500 for a 9-seater. 12, 13 and 14-seater luxury vans are available at different prices based on vehicle size and travel requirements.",
//         },

//         {
//           _id: "faq-urbania-002",
//           question: "How many passengers can travel in a Force Urbania?",
//           answer:
//             "You can choose from 9, 12, 13 and 14-seater Force Urbania vans depending on the size of your group. All vehicles offer premium pushback seating, individual AC vents and sufficient luggage space.",
//         },

//         {
//           _id: "faq-urbania-003",
//           question:
//             "Which Force Urbania models are available from Noida to Delhi?",
//           answer:
//             "We provide 9, 12, 13 and 14-seater Force Urbania luxury vans from Noida to Delhi. All vehicles are well-maintained, fully air-conditioned and come with experienced drivers.",
//         },

//         {
//           _id: "faq-urbania-004",
//           question:
//             "Can I book a Force Urbania for a one-way trip from Noida to Delhi?",
//           answer:
//             "Yes, you can book a Force Urbania for a one-way trip from Noida to Delhi. Round-trip, multi-day and outstation options are also available for corporate events, weddings and group travel.",
//         },
//       ],
//     },

//     route: {
//       _id: "route-001",
//       fromCity: "Noida",
//       toCity: "Delhi",
//       slug: "noida-to-delhi",
//       distance: 25,
//       duration: "45 min - 1.5 hrs",
//     },

//     vehicles: [
//       {
//         _id: "vehicle-urbania-001",
//         name: "9 Seater Force Urbania",
//         slug: "9-seater-force-urbania",
//         brand: "Force",
//         cabType: "Luxury Van",
//         passengerCapacity: 9,
//         luggageCapacity: 5,
//         image: "/images/urbania/9-seater.png",
//         airCondition: true,
//         fuelType: "Diesel",
//         transmission: "Manual",
//       },

//       {
//         _id: "vehicle-urbania-002",
//         name: "12 Seater Force Urbania",
//         slug: "12-seater-force-urbania",
//         brand: "Force",
//         cabType: "Luxury Van",
//         passengerCapacity: 12,
//         luggageCapacity: 7,
//         image: "/images/urbania/12-seater.png",
//         airCondition: true,
//         fuelType: "Diesel",
//         transmission: "Manual",
//       },

//       {
//         _id: "vehicle-urbania-003",
//         name: "13 Seater Force Urbania",
//         slug: "13-seater-force-urbania",
//         brand: "Force",
//         cabType: "Luxury Van",
//         passengerCapacity: 13,
//         luggageCapacity: 8,
//         image: "/images/urbania/13-seater.png",
//         airCondition: true,
//         fuelType: "Diesel",
//         transmission: "Manual",
//       },

//       {
//         _id: "vehicle-urbania-004",
//         name: "14 Seater Force Urbania",
//         slug: "14-seater-force-urbania",
//         brand: "Force",
//         cabType: "Luxury Van",
//         passengerCapacity: 14,
//         luggageCapacity: 9,
//         image: "/images/urbania/14-seater.png",
//         airCondition: true,
//         fuelType: "Diesel",
//         transmission: "Manual",
//       },
//     ],

//     fares: [
//       {
//         _id: "fare-urbania-001",
//         vehicleId: "vehicle-urbania-001",
//         vehicleName: "9 Seater Force Urbania",
//         oneWayPrice: 3500,
//         roundTripPrice: 6500,
//       },

//       {
//         _id: "fare-urbania-002",
//         vehicleId: "vehicle-urbania-002",
//         vehicleName: "12 Seater Force Urbania",
//         oneWayPrice: 4500,
//         roundTripPrice: 8500,
//       },

//       {
//         _id: "fare-urbania-003",
//         vehicleId: "vehicle-urbania-003",
//         vehicleName: "13 Seater Force Urbania",
//         oneWayPrice: 5000,
//         roundTripPrice: 9000,
//       },

//       {
//         _id: "fare-urbania-004",
//         vehicleId: "vehicle-urbania-004",
//         vehicleName: "14 Seater Force Urbania",
//         oneWayPrice: 5500,
//         roundTripPrice: 10000,
//       },
//     ],

//     popularRoutes: [
//       {
//         _id: "popular-urbania-001",
//         fromCity: "Noida",
//         toCity: "Delhi",
//         slug: "noida-to-delhi",
//       },

//       {
//         _id: "popular-urbania-002",
//         fromCity: "Noida",
//         toCity: "Agra",
//         slug: "noida-to-agra",
//       },

//       {
//         _id: "popular-urbania-003",
//         fromCity: "Noida",
//         toCity: "Jaipur",
//         slug: "noida-to-jaipur",
//       },

//       {
//         _id: "popular-urbania-004",
//         fromCity: "Noida",
//         toCity: "Haridwar",
//         slug: "noida-to-haridwar",
//       },
//     ],
//   },
//   "noida-to-delhi-innova-crysta-taxi": {
//     page: {
//       _id: "page-008",
//       pageType: "innova-crysta-taxi",
//       slug: "noida-to-delhi-innova-crysta-taxi",

//       h1: "Noida to Delhi Innova Crysta Taxi",

//       metaTitle: "Noida to Delhi Innova Crysta Taxi | Book Innova Crysta",

//       metaDescription:
//         "Book an Innova Crysta taxi from Noida to Delhi at affordable fares. Enjoy a comfortable, spacious and reliable ride.",

//       faqs: [
//         {
//           _id: "faq-innova-001",
//           question:
//             "What is the fare for an Innova Crysta from Noida to Delhi?",
//           answer:
//             "The Innova Crysta taxi fare from Noida to Delhi starts from around ₹2,800 for a one-way trip. The final fare may vary depending on pickup location and trip requirements.",
//         },

//         {
//           _id: "faq-innova-002",
//           question: "How long does an Innova Crysta take from Noida to Delhi?",
//           answer:
//             "An Innova Crysta usually takes around 45 minutes to 1.5 hours from Noida to Delhi, depending on traffic and the exact pickup and drop location.",
//         },

//         {
//           _id: "faq-innova-003",
//           question: "How many passengers can travel in an Innova Crysta?",
//           answer:
//             "An Innova Crysta can comfortably accommodate up to 6 passengers along with luggage.",
//         },

//         {
//           _id: "faq-innova-004",
//           question:
//             "Is Innova Crysta available for one-way travel from Noida to Delhi?",
//           answer:
//             "Yes, Innova Crysta is available for one-way taxi travel from Noida to Delhi.",
//         },
//       ],
//     },

//     route: {
//       _id: "route-001",
//       fromCity: "Noida",
//       toCity: "Delhi",
//       slug: "noida-to-delhi",
//       distance: 25,
//       duration: "45 min - 1.5 hrs",
//     },

//     vehicles: [
//       {
//         _id: "vehicle-004",
//         name: "Innova Crysta",
//         slug: "innova-crysta",
//         brand: "Toyota",
//         cabType: "Premium SUV",
//         passengerCapacity: 6,
//         luggageCapacity: 5,
//         image: "/images/cars/innova-crysta.png",
//         airCondition: true,
//         fuelType: "Diesel",
//         transmission: "Manual",
//       },
//     ],

//     fares: [
//       {
//         _id: "fare-004",
//         vehicleId: "vehicle-004",
//         vehicleName: "Innova Crysta",
//         oneWayPrice: 2800,
//         roundTripPrice: 5000,
//       },
//     ],

//     popularRoutes: [
//       {
//         id: 1,
//         from: "Noida",
//         to: "Delhi",
//         distance: "25 km",
//         duration: "1 hrs",
//         image: "/popular_cab_route1.jpg",
//         popular: true,
//       },

//       {
//         id: 2,
//         from: "Noida",
//         to: "Agra",
//         distance: "200 km",
//         duration: "4 hrs",
//         image: "/popular_cab_route2.jpg",
//         popular: true,
//       },

//       {
//         id: 3,
//         from: "Noida",
//         to: "Jaipur",
//         distance: "280 km",
//         duration: "5 hrs",
//         image: "/popular_cab_route3.jpg",
//         popular: true,
//       },

//       {
//         id: 4,
//         from: "Noida",
//         to: "Haridwar",
//         distance: "220 km",
//         duration: "5 hrs",
//         image: "/popular_cab_route4.jpg",
//         popular: true,
//       },

//       {
//         id: 5,
//         from: "Noida",
//         to: "Mathura",
//         distance: "160 km",
//         duration: "3 hrs",
//         image: "/popular_cab_route5.jpg",
//         popular: true,
//       },

//       {
//         id: 6,
//         from: "Noida",
//         to: "Vrindavan",
//         distance: "165 km",
//         duration: "3 hrs",
//         image: "/popular_cab_route6.jpg",
//         popular: true,
//       },
//     ],
//   },
//   "noida-to-delhi-ertiga-taxi": {
//     page: {
//       _id: "page-005",
//       pageType: "ertiga-taxi",
//       slug: "noida-to-delhi-ertiga-taxi",
//       h1: "Noida to Delhi Ertiga Taxi",
//       metaTitle: "Noida to Delhi Ertiga Taxi | Book Ertiga Cab",
//       metaDescription:
//         "Book a comfortable Ertiga taxi from Noida to Delhi at affordable prices.",
//       faqs: [],
//     },

//     route: {
//       _id: "route-001",
//       fromCity: "Noida",
//       toCity: "Delhi",
//       slug: "noida-to-delhi",
//       distance: 25,
//       duration: "45 min - 1.5 hrs",
//     },

//     vehicles: [
//       {
//         _id: "vehicle-002",
//         name: "Maruti Ertiga",
//         slug: "maruti-ertiga",
//         brand: "Maruti Suzuki",
//         cabType: "Ertiga",
//         passengerCapacity: 6,
//         luggageCapacity: 3,
//         image: "/images/cars/maruti-ertiga.png",
//         airCondition: true,
//         fuelType: "Petrol",
//         transmission: "Manual",
//       },
//     ],

//     fares: [
//       {
//         _id: "fare-002",
//         vehicleId: "vehicle-002",
//         vehicleName: "Maruti Ertiga",
//         oneWayPrice: 1600,
//         roundTripPrice: 3000,
//       },
//     ],

//     popularRoutes: [
//       {
//         id: 1,
//         from: "Noida",
//         to: "Delhi",
//         distance: "25 km",
//         duration: "45 min–1.5 hr",
//         image: "/popular_cab_route1.jpg",
//         popular: true,
//       },
//       {
//         id: 2,
//         from: "Noida",
//         to: "Delhi Airport",
//         distance: "35 km",
//         duration: "1–2 hr",
//         image: "/popular_cab_route2.jpg",
//         popular: true,
//       },
//       {
//         id: 3,
//         from: "Noida",
//         to: "New Delhi Railway Station",
//         distance: "30 km",
//         duration: "1–1.5 hr",
//         image: "/popular_cab_route3.jpg",
//         popular: true,
//       },
//       {
//         id: 4,
//         from: "Noida",
//         to: "Agra",
//         distance: "200 km",
//         duration: "4–5 hr",
//         image: "/popular_cab_route4.jpg",
//         popular: true,
//       },
//       {
//         id: 5,
//         from: "Noida",
//         to: "Jaipur",
//         distance: "280 km",
//         duration: "5–6 hr",
//         image: "/popular_cab_route5.jpg",
//         popular: true,
//       },
//       {
//         id: 6,
//         from: "Noida",
//         to: "Haridwar",
//         distance: "220 km",
//         duration: "5–6 hr",
//         image: "/popular_cab_route6.jpg",
//         popular: true,
//       },
//       {
//         id: 7,
//         from: "Noida",
//         to: "Mathura",
//         distance: "160 km",
//         duration: "3–4 hr",
//         image: "/popular_cab_route7.jpg",
//         popular: true,
//       },
//       {
//         id: 8,
//         from: "Noida",
//         to: "Vrindavan",
//         distance: "165 km",
//         duration: "3–4 hr",
//         image: "/popular_cab_route8.jpg",
//         popular: true,
//       },
//     ],
//   },
//   "noida-to-delhi-dzire-taxi": {
//     page: {
//       _id: "page-009",
//       pageType: "dzire-taxi",
//       slug: "noida-to-delhi-dzire-taxi",

//       h1: "Noida to Delhi Dzire Taxi",

//       metaTitle: "Noida to Delhi Dzire Taxi | Book Swift Dzire Cab",

//       metaDescription:
//         "Book a Swift Dzire taxi from Noida to Delhi at an affordable fare. Comfortable AC cab for one-way, round-trip and airport travel.",

//       faqs: [
//         {
//           _id: "faq-dzire-001",
//           question: "What is the Dzire taxi fare from Noida to Delhi?",
//           answer:
//             "The one-way Dzire taxi fare from Noida to Delhi starts at around ₹1,599. The final fare may vary depending on the pickup location, trip type and travel requirements.",
//         },
//         {
//           _id: "faq-dzire-002",
//           question: "How many passengers can travel in a Dzire?",
//           answer:
//             "A Swift Dzire can comfortably accommodate up to 4 passengers with luggage and is suitable for families, couples and business travellers.",
//         },
//         {
//           _id: "faq-dzire-003",
//           question:
//             "Is Dzire available for one-way travel from Noida to Delhi?",
//           answer:
//             "Yes, Swift Dzire is available for one-way taxi travel from Noida to Delhi. You can book a private cab for your preferred pickup and drop location.",
//         },
//         {
//           _id: "faq-dzire-004",
//           question: "Can I book a Dzire from Noida to Delhi Airport?",
//           answer:
//             "Yes, you can book a Swift Dzire for airport transfers from Noida to Delhi. It is suitable for up to 4 passengers with moderate luggage.",
//         },
//         {
//           _id: "faq-dzire-005",
//           question: "Is Dzire taxi available 24x7?",
//           answer:
//             "Dzire taxis can be booked for early morning, daytime and late-night travel, subject to vehicle availability.",
//         },
//       ],
//     },

//     route: {
//       _id: "route-001",
//       fromCity: "Noida",
//       toCity: "Delhi",
//       slug: "noida-to-delhi",
//       distance: 25,
//       duration: "45 min - 1.5 hrs",
//     },

//     vehicles: [
//       {
//         _id: "vehicle-001",
//         name: "Swift Dzire",
//         slug: "swift-dzire",
//         brand: "Maruti Suzuki",
//         cabType: "Sedan",
//         passengerCapacity: 4,
//         luggageCapacity: 3,
//         image: "/dezire_white.png",
//         airCondition: true,
//         fuelType: "CNG / Petrol",
//         transmission: "Manual",
//       },
//     ],

//     fares: [
//       {
//         _id: "fare-dzire-001",
//         vehicleId: "vehicle-001",
//         vehicleName: "Swift Dzire",
//         oneWayPrice: 1599,
//         roundTripPrice: 2699,
//       },
//     ],

//     popularRoutes: [
//       {
//         id: 1,
//         from: "Noida",
//         to: "Delhi",
//         distance: "25 km",
//         duration: "1 hr",
//         image: "/popular_cab_route1.jpg",
//         popular: true,
//       },
//       {
//         id: 2,
//         from: "Noida",
//         to: "Agra",
//         distance: "200 km",
//         duration: "4 hrs",
//         image: "/popular_cab_route2.jpg",
//         popular: true,
//       },
//       {
//         id: 3,
//         from: "Noida",
//         to: "Jaipur",
//         distance: "280 km",
//         duration: "5 hrs",
//         image: "/popular_cab_route3.jpg",
//         popular: true,
//       },
//       {
//         id: 4,
//         from: "Noida",
//         to: "Haridwar",
//         distance: "220 km",
//         duration: "5 hrs",
//         image: "/popular_cab_route4.jpg",
//         popular: true,
//       },
//     ],
//   },
//   "noida-to-delhi-etios-taxi": {
//     page: {
//       _id: "page-010",
//       pageType: "etios-taxi",
//       slug: "noida-to-delhi-etios-taxi",

//       h1: "Noida to Delhi Etios Taxi",

//       metaTitle: "Noida to Delhi Etios Taxi | Book Toyota Etios Cab",

//       metaDescription:
//         "Book a Toyota Etios taxi from Noida to Delhi at an affordable fare. Comfortable AC cab for one-way, round-trip and airport travel.",

//       faqs: [
//         {
//           _id: "faq-etios-001",
//           question: "What is the Etios taxi fare from Noida to Delhi?",
//           answer:
//             "The one-way Etios taxi fare from Noida to Delhi starts at around ₹1,699. The final fare may vary depending on the pickup location, trip type and travel requirements.",
//         },
//         {
//           _id: "faq-etios-002",
//           question: "How many passengers can travel in an Etios?",
//           answer:
//             "A Toyota Etios can comfortably accommodate up to 4 passengers with luggage and is suitable for families, couples and business travellers.",
//         },
//         {
//           _id: "faq-etios-003",
//           question:
//             "Is Etios available for one-way travel from Noida to Delhi?",
//           answer:
//             "Yes, Toyota Etios is available for one-way taxi travel from Noida to Delhi. You can book a private cab for your preferred pickup and drop location.",
//         },
//         {
//           _id: "faq-etios-004",
//           question: "Can I book an Etios from Noida to Delhi Airport?",
//           answer:
//             "Yes, you can book a Toyota Etios for airport transfers from Noida to Delhi. It is suitable for up to 4 passengers with moderate luggage.",
//         },
//         {
//           _id: "faq-etios-005",
//           question: "Is Etios taxi available 24x7?",
//           answer:
//             "Etios taxis can be booked for early morning, daytime and late-night travel, subject to vehicle availability.",
//         },
//       ],
//     },

//     route: {
//       _id: "route-001",
//       fromCity: "Noida",
//       toCity: "Delhi",
//       slug: "noida-to-delhi",
//       distance: 25,
//       duration: "45 min - 1.5 hrs",
//     },

//     vehicles: [
//       {
//         _id: "vehicle-002",
//         name: "Toyota Etios",
//         slug: "toyota-etios",
//         brand: "Toyota",
//         cabType: "Sedan",
//         passengerCapacity: 4,
//         luggageCapacity: 3,
//         image: "/etios.png",
//         airCondition: true,
//         fuelType: "Diesel / Petrol",
//         transmission: "Manual",
//       },
//     ],

//     fares: [
//       {
//         _id: "fare-etios-001",
//         vehicleId: "vehicle-002",
//         vehicleName: "Toyota Etios",
//         oneWayPrice: 1699,
//         roundTripPrice: 2799,
//       },
//     ],

//     popularRoutes: [
//       {
//         id: 1,
//         from: "Noida",
//         to: "Delhi",
//         distance: "25 km",
//         duration: "1 hr",
//         image: "/popular_cab_route1.jpg",
//         popular: true,
//       },
//       {
//         id: 2,
//         from: "Noida",
//         to: "Agra",
//         distance: "200 km",
//         duration: "4 hrs",
//         image: "/popular_cab_route2.jpg",
//         popular: true,
//       },
//       {
//         id: 3,
//         from: "Noida",
//         to: "Jaipur",
//         distance: "280 km",
//         duration: "5 hrs",
//         image: "/popular_cab_route3.jpg",
//         popular: true,
//       },
//       {
//         id: 4,
//         from: "Noida",
//         to: "Haridwar",
//         distance: "220 km",
//         duration: "5 hrs",
//         image: "/popular_cab_route4.jpg",
//         popular: true,
//       },
//     ],
//   },
//   "noida-to-delhi-taxi-contact-number": {
//     page: {
//       _id: "page-003",
//       pageType: "taxi-contact-number",
//       slug: "noida-to-delhi-taxi-contact-number",
//       h1: "Noida to Delhi Taxi Contact Number",
//       metaTitle: "Noida to Delhi Taxi Contact Number | Book Cab",
//       metaDescription:
//         "Get the Noida to Delhi taxi contact number to book a cab, check fares, confirm availability and get assistance for your journey.",
//       faqs: [],
//     },

//     route: {
//       _id: "route-001",
//       fromCity: "Noida",
//       toCity: "Delhi",
//       slug: "noida-to-delhi",
//       distance: 25,
//       duration: "45 min - 1.5 hrs",
//     },

//     vehicles: [],

//     fares: [
//       {
//         _id: "fare-001",
//         vehicleId: "vehicle-001",
//         vehicleName: "Swift Dzire",
//         oneWayPrice: 1200,
//         roundTripPrice: 2200,
//       },

//       {
//         _id: "fare-002",
//         vehicleId: "vehicle-002",
//         vehicleName: "Ertiga",
//         oneWayPrice: 1800,
//         roundTripPrice: 3300,
//       },

//       {
//         _id: "fare-003",
//         vehicleId: "vehicle-003",
//         vehicleName: "Innova",
//         oneWayPrice: 2200,
//         roundTripPrice: 4000,
//       },
//     ],

//     popularRoutes: [
//       {
//         id: 1,
//         from: "Noida",
//         to: "Delhi",
//         distance: "25 km",
//         duration: "45 min–1.5 hr",
//         image: "/popular_cab_route1.jpg",
//         popular: true,
//       },
//       {
//         id: 2,
//         from: "Noida",
//         to: "Delhi Airport",
//         distance: "35 km",
//         duration: "1–2 hr",
//         image: "/popular_cab_route2.jpg",
//         popular: true,
//       },
//       {
//         id: 3,
//         from: "Noida",
//         to: "New Delhi Railway Station",
//         distance: "30 km",
//         duration: "1–1.5 hr",
//         image: "/popular_cab_route3.jpg",
//         popular: true,
//       },
//       {
//         id: 4,
//         from: "Noida",
//         to: "Agra",
//         distance: "200 km",
//         duration: "4–5 hr",
//         image: "/popular_cab_route4.jpg",
//         popular: true,
//       },
//       {
//         id: 5,
//         from: "Noida",
//         to: "Jaipur",
//         distance: "280 km",
//         duration: "5–6 hr",
//         image: "/popular_cab_route5.jpg",
//         popular: true,
//       },
//       {
//         id: 6,
//         from: "Noida",
//         to: "Haridwar",
//         distance: "220 km",
//         duration: "5–6 hr",
//         image: "/popular_cab_route6.jpg",
//         popular: true,
//       },
//       {
//         id: 7,
//         from: "Noida",
//         to: "Mathura",
//         distance: "160 km",
//         duration: "3–4 hr",
//         image: "/popular_cab_route7.jpg",
//         popular: true,
//       },
//       {
//         id: 8,
//         from: "Noida",
//         to: "Vrindavan",
//         distance: "165 km",
//         duration: "3–4 hr",
//         image: "/popular_cab_route8.jpg",
//         popular: true,
//       },
//     ],
//   },
//   "noida-to-delhi-amaze-taxi": {
//     page: {
//       _id: "page-amaze-001",
//       pageType: "amaze-taxi",
//       slug: "noida-to-delhi-amaze-taxi",
//       h1: "Noida to Delhi Amaze Taxi",
//       metaTitle: "Noida to Delhi Amaze Taxi | Honda Amaze Cab",
//       metaDescription:
//         "Book a Honda Amaze taxi from Noida to Delhi at affordable fares. Comfortable 5-seater cab for family, business and airport travel.",
//       faqs: [],
//     },

//     route: {
//       _id: "route-001",
//       fromCity: "Noida",
//       toCity: "Delhi",
//       slug: "noida-to-delhi",
//       distance: 25,
//       duration: "45 min - 1.5 hrs",
//     },

//     vehicles: [
//       {
//         _id: "vehicle-amaze-001",
//         name: "Honda Amaze",
//         slug: "honda-amaze",
//         brand: "Honda",
//         cabType: "Sedan",
//         passengerCapacity: 5,
//         luggageCapacity: 3,
//         image: "/amaze.webp",
//         airCondition: true,
//         fuelType: "Petrol",
//         transmission: "Manual / CVT",
//       },
//     ],

//     fares: [
//       {
//         _id: "fare-amaze-001",
//         vehicleId: "vehicle-amaze-001",
//         vehicleName: "Honda Amaze",
//         oneWayPrice: 1649,
//         roundTripPrice: 2749,
//       },
//     ],

//     popularRoutes: [
//       {
//         id: 1,
//         from: "Noida",
//         to: "Delhi",
//         distance: "25 km",
//         duration: "45 min–1.5 hr",
//         image: "/popular_cab_route1.jpg",
//         popular: true,
//       },
//       {
//         id: 2,
//         from: "Noida",
//         to: "Delhi Airport",
//         distance: "35 km",
//         duration: "1–2 hr",
//         image: "/popular_cab_route2.jpg",
//         popular: true,
//       },
//       {
//         id: 3,
//         from: "Noida",
//         to: "New Delhi Railway Station",
//         distance: "30 km",
//         duration: "1–1.5 hr",
//         image: "/popular_cab_route3.jpg",
//         popular: true,
//       },
//       {
//         id: 4,
//         from: "Noida",
//         to: "Agra",
//         distance: "200 km",
//         duration: "4–5 hr",
//         image: "/popular_cab_route4.jpg",
//         popular: true,
//       },
//       {
//         id: 5,
//         from: "Noida",
//         to: "Jaipur",
//         distance: "280 km",
//         duration: "5–6 hr",
//         image: "/popular_cab_route5.jpg",
//         popular: true,
//       },
//       {
//         id: 6,
//         from: "Noida",
//         to: "Haridwar",
//         distance: "220 km",
//         duration: "5–6 hr",
//         image: "/popular_cab_route6.jpg",
//         popular: true,
//       },
//       {
//         id: 7,
//         from: "Noida",
//         to: "Mathura",
//         distance: "160 km",
//         duration: "3–4 hr",
//         image: "/popular_cab_route7.jpg",
//         popular: true,
//       },
//       {
//         id: 8,
//         from: "Noida",
//         to: "Vrindavan",
//         distance: "165 km",
//         duration: "3–4 hr",
//         image: "/popular_cab_route8.jpg",
//         popular: true,
//       },
//     ],
//   },
//   "noida-to-delhi-distance-travel-time": {
//     page: {
//       _id: "page-distance-001",
//       pageType: "distance-travel-time",
//       slug: "noida-to-delhi-distance-travel-time",

//       h1: "Noida to Delhi Distance & Travel Time",

//       metaTitle: "Noida to Delhi Distance & Travel Time | Taxi Route",

//       metaDescription:
//         "Check Noida to Delhi distance, estimated travel time, traffic conditions and best travel timings. Plan your Noida to Delhi taxi journey easily.",

//       faqs: [
//         {
//           _id: "faq-distance-001",
//           question: "What is the distance from Noida to Delhi?",
//           answer:
//             "The approximate road distance from Noida to Delhi is around 25 km. The actual distance can vary depending on your pickup location in Noida and destination in Delhi.",
//         },

//         {
//           _id: "faq-distance-002",
//           question: "How much time does it take from Noida to Delhi?",
//           answer:
//             "A taxi from Noida to Delhi usually takes around 45 minutes to 1.5 hours. Travel time depends on traffic, pickup location and destination.",
//         },

//         {
//           _id: "faq-distance-003",
//           question: "What is the best time to travel from Noida to Delhi?",
//           answer:
//             "Early morning and late evening generally have lighter traffic. During morning and evening peak hours, you should keep additional travel time because traffic can increase the journey duration.",
//         },

//         {
//           _id: "faq-distance-004",
//           question: "Is Noida to Delhi available by taxi?",
//           answer:
//             "Yes. Private taxis are available from Noida to different locations in Delhi. You can choose a Sedan, SUV, Ertiga, Innova Crysta or other available vehicle according to your passenger and luggage requirements.",
//         },

//         {
//           _id: "faq-distance-005",
//           question: "Can I book a taxi from Noida to Delhi Airport?",
//           answer:
//             "Yes. You can book a private taxi from Noida to Delhi Airport. The travel time depends on the pickup location, airport terminal and traffic conditions.",
//         },
//       ],
//     },

//     route: {
//       _id: "route-001",
//       fromCity: "Noida",
//       toCity: "Delhi",
//       slug: "noida-to-delhi",
//       distance: 25,
//       duration: "45 min - 1.5 hrs",
//     },

//     vehicles: [
//       {
//         _id: "vehicle-001",
//         name: "Swift Dzire",
//         slug: "swift-dzire",
//         brand: "Maruti Suzuki",
//         cabType: "Sedan",
//         passengerCapacity: 4,
//         luggageCapacity: 3,
//         image: "/dezire_white.png",
//         airCondition: true,
//         fuelType: "CNG / Petrol",
//         transmission: "Manual",
//       },

//       {
//         _id: "vehicle-002",
//         name: "Ertiga",
//         slug: "ertiga",
//         brand: "Maruti Suzuki",
//         cabType: "SUV",
//         passengerCapacity: 6,
//         luggageCapacity: 3,
//         image: "/ertiga.png",
//         airCondition: true,
//         fuelType: "Petrol",
//         transmission: "Manual",
//       },

//       {
//         _id: "vehicle-003",
//         name: "Innova Crysta",
//         slug: "innova-crysta",
//         brand: "Toyota",
//         cabType: "Premium SUV",
//         passengerCapacity: 6,
//         luggageCapacity: 5,
//         image: "/images/cars/innova-crysta.png",
//         airCondition: true,
//         fuelType: "Diesel",
//         transmission: "Manual",
//       },
//     ],

//     fares: [
//       {
//         _id: "fare-distance-001",
//         vehicleId: "vehicle-001",
//         vehicleName: "Swift Dzire",
//         oneWayPrice: 1599,
//         roundTripPrice: 2699,
//       },

//       {
//         _id: "fare-distance-002",
//         vehicleId: "vehicle-002",
//         vehicleName: "Ertiga",
//         oneWayPrice: 1800,
//         roundTripPrice: 3300,
//       },

//       {
//         _id: "fare-distance-003",
//         vehicleId: "vehicle-003",
//         vehicleName: "Innova Crysta",
//         oneWayPrice: 2800,
//         roundTripPrice: 5000,
//       },
//     ],

//     popularRoutes: [
//       {
//         id: 1,
//         from: "Noida",
//         to: "Delhi",
//         distance: "25 km",
//         duration: "45 min–1.5 hr",
//         image: "/popular_cab_route1.jpg",
//         popular: true,
//       },

//       {
//         id: 2,
//         from: "Noida",
//         to: "Delhi Airport",
//         distance: "35 km",
//         duration: "1–2 hr",
//         image: "/popular_cab_route2.jpg",
//         popular: true,
//       },

//       {
//         id: 3,
//         from: "Noida",
//         to: "New Delhi Railway Station",
//         distance: "30 km",
//         duration: "1–1.5 hr",
//         image: "/popular_cab_route3.jpg",
//         popular: true,
//       },

//       {
//         id: 4,
//         from: "Noida",
//         to: "Agra",
//         distance: "200 km",
//         duration: "4–5 hr",
//         image: "/popular_cab_route4.jpg",
//         popular: true,
//       },

//       {
//         id: 5,
//         from: "Noida",
//         to: "Jaipur",
//         distance: "280 km",
//         duration: "5–6 hr",
//         image: "/popular_cab_route5.jpg",
//         popular: true,
//       },

//       {
//         id: 6,
//         from: "Noida",
//         to: "Haridwar",
//         distance: "220 km",
//         duration: "5–6 hr",
//         image: "/popular_cab_route6.jpg",
//         popular: true,
//       },

//       {
//         id: 7,
//         from: "Noida",
//         to: "Mathura",
//         distance: "160 km",
//         duration: "3–4 hr",
//         image: "/popular_cab_route7.jpg",
//         popular: true,
//       },

//       {
//         id: 8,
//         from: "Noida",
//         to: "Vrindavan",
//         distance: "165 km",
//         duration: "3–4 hr",
//         image: "/popular_cab_route8.jpg",
//         popular: true,
//       },
//     ],
//   },
//   "noida-to-delhi-luxury-tempo-traveller": {
//     page: {
//       _id: "page-011",
//       pageType: "luxury-tempo-traveller",
//       slug: "noida-to-delhi-luxury-tempo-traveller",

//       h1: "Noida to Delhi Luxury Tempo Traveller",

//       metaTitle:
//         "Noida to Delhi Luxury Tempo Traveller | Book Luxury Traveller",

//       metaDescription:
//         "Book a luxury tempo traveller from Noida to Delhi for group travel. Comfortable AC vehicle with spacious seating for families, corporate groups and tours.",

//       faqs: [
//         {
//           _id: "faq-luxury-tempo-001",
//           question:
//             "What is the luxury tempo traveller fare from Noida to Delhi?",
//           answer:
//             "The luxury tempo traveller fare from Noida to Delhi depends on the vehicle size, trip type, travel date and requirements. Contact us for the latest fare and availability.",
//         },
//         {
//           _id: "faq-luxury-tempo-002",
//           question:
//             "How many passengers can travel in a luxury tempo traveller?",
//           answer:
//             "Luxury tempo travellers are available in different seating capacities and are suitable for groups, families, corporate teams and tour groups.",
//         },
//         {
//           _id: "faq-luxury-tempo-003",
//           question:
//             "Is a luxury tempo traveller available for one-way travel from Noida to Delhi?",
//           answer:
//             "Yes, luxury tempo travellers can be booked for one-way travel from Noida to Delhi, subject to vehicle availability.",
//         },
//         {
//           _id: "faq-luxury-tempo-004",
//           question:
//             "Can I book a luxury tempo traveller from Noida to Delhi Airport?",
//           answer:
//             "Yes, you can book a luxury tempo traveller for group airport transfers from Noida to Delhi Airport. It is a convenient option for families and larger groups travelling together.",
//         },
//         {
//           _id: "faq-luxury-tempo-005",
//           question: "Is the luxury tempo traveller air conditioned?",
//           answer:
//             "Yes, luxury tempo travellers are equipped with air conditioning and comfortable seating for a convenient journey.",
//         },
//       ],
//     },

//     route: {
//       _id: "route-001",
//       fromCity: "Noida",
//       toCity: "Delhi",
//       slug: "noida-to-delhi",
//       distance: 25,
//       duration: "45 min - 1.5 hrs",
//     },

//     vehicles: [
//       {
//         _id: "vehicle-004",
//         name: "Luxury Tempo Traveller",
//         slug: "luxury-tempo-traveller",
//         brand: "Force",
//         cabType: "Tempo Traveller",
//         passengerCapacity: 12,
//         luggageCapacity: 8,
//         image: "/luxury_tempo_traveller.png",
//         airCondition: true,
//         fuelType: "Diesel",
//         transmission: "Manual",
//       },
//     ],

//     fares: [
//       {
//         _id: "fare-luxury-tempo-001",
//         vehicleId: "vehicle-004",
//         vehicleName: "Luxury Tempo Traveller",
//         oneWayPrice: 4999,
//         roundTripPrice: 8999,
//       },
//     ],

//     popularRoutes: [
//       {
//         id: 1,
//         from: "Noida",
//         to: "Delhi",
//         distance: "25 km",
//         duration: "1 hr",
//         image: "/popular_cab_route1.jpg",
//         popular: true,
//       },
//       {
//         id: 2,
//         from: "Noida",
//         to: "Agra",
//         distance: "200 km",
//         duration: "4 hrs",
//         image: "/popular_cab_route2.jpg",
//         popular: true,
//       },
//       {
//         id: 3,
//         from: "Noida",
//         to: "Jaipur",
//         distance: "280 km",
//         duration: "5 hrs",
//         image: "/popular_cab_route3.jpg",
//         popular: true,
//       },
//       {
//         id: 4,
//         from: "Noida",
//         to: "Haridwar",
//         distance: "220 km",
//         duration: "5 hrs",
//         image: "/popular_cab_route4.jpg",
//         popular: true,
//       },
//     ],
//   },
//   "noida-to-delhi-20-seater-tempo-traveller": {
//   page: {
//     _id: "page-012",
//     pageType: "20-seater-tempo-traveller",
//     slug: "noida-to-delhi-20-seater-tempo-traveller",

//     h1: "Noida to Delhi 20 Seater Tempo Traveller",

//     metaTitle:
//       "Noida to Delhi 20 Seater Tempo Traveller | Book 20 Seater Traveller",

//     metaDescription:
//       "Book a 20 seater tempo traveller from Noida to Delhi for group travel. Comfortable AC vehicle with spacious seating for families, corporate groups, tours and events.",

//     faqs: [
//       {
//         _id: "faq-20-seater-001",
//         question:
//           "What is the 20 seater tempo traveller fare from Noida to Delhi?",
//         answer:
//           "The 20 seater tempo traveller fare from Noida to Delhi depends on the travel date, trip type, vehicle availability and travel requirements. Contact us for the latest fare and availability.",
//       },
//       {
//         _id: "faq-20-seater-002",
//         question:
//           "How many passengers can travel in a 20 seater tempo traveller?",
//         answer:
//           "A 20 seater tempo traveller can accommodate up to 20 passengers and is suitable for large families, corporate groups, tour groups, school trips and events.",
//       },
//       {
//         _id: "faq-20-seater-003",
//         question:
//           "Is a 20 seater tempo traveller available for one-way travel from Noida to Delhi?",
//         answer:
//           "Yes, a 20 seater tempo traveller can be booked for one-way travel from Noida to Delhi, subject to vehicle availability.",
//       },
//       {
//         _id: "faq-20-seater-004",
//         question:
//           "Can I book a 20 seater tempo traveller from Noida to Delhi Airport?",
//         answer:
//           "Yes, you can book a 20 seater tempo traveller for group airport transfers from Noida to Delhi Airport. It is a convenient option when a large group wants to travel together.",
//       },
//       {
//         _id: "faq-20-seater-005",
//         question:
//           "Is the 20 seater tempo traveller air conditioned?",
//         answer:
//           "Yes, the 20 seater tempo traveller is equipped with air conditioning and comfortable seating for group travel.",
//       },
//     ],
//   },

//   route: {
//     _id: "route-001",
//     fromCity: "Noida",
//     toCity: "Delhi",
//     slug: "noida-to-delhi",
//     distance: 25,
//     duration: "45 min - 1.5 hrs",
//   },

//   vehicles: [
//     {
//       _id: "vehicle-005",
//       name: "20 Seater Tempo Traveller",
//       slug: "20-seater-tempo-traveller",
//       brand: "Force",
//       cabType: "Tempo Traveller",
//       passengerCapacity: 20,
//       luggageCapacity: 15,
//       image: "/20_seater_tempo_traveller.png",
//       airCondition: true,
//       fuelType: "Diesel",
//       transmission: "Manual",
//     },
//   ],

//   fares: [
//     {
//       _id: "fare-20-seater-001",
//       vehicleId: "vehicle-005",
//       vehicleName: "20 Seater Tempo Traveller",
//       oneWayPrice: 6999,
//       roundTripPrice: 11999,
//     },
//   ],

//   popularRoutes: [
//     {
//       id: 1,
//       from: "Noida",
//       to: "Delhi",
//       distance: "25 km",
//       duration: "1 hr",
//       image: "/popular_cab_route1.jpg",
//       popular: true,
//     },
//     {
//       id: 2,
//       from: "Noida",
//       to: "Agra",
//       distance: "200 km",
//       duration: "4 hrs",
//       image: "/popular_cab_route2.jpg",
//       popular: true,
//     },
//     {
//       id: 3,
//       from: "Noida",
//       to: "Jaipur",
//       distance: "280 km",
//       duration: "5 hrs",
//       image: "/popular_cab_route3.jpg",
//       popular: true,
//     },
//     {
//       id: 4,
//       from: "Noida",
//       to: "Haridwar",
//       distance: "220 km",
//       duration: "5 hrs",
//       image: "/popular_cab_route4.jpg",
//       popular: true,
//     },
//   ],
// },
// "noida-to-delhi-12-seater-tempo-traveller": {
//   page: {
//     _id: "page-12-seater-001",
//     pageType: "12-seater-tempo-traveller",
//     slug: "noida-to-delhi-12-seater-tempo-traveller",

//     h1: "Noida to Delhi 12 Seater Tempo Traveller",

//     metaTitle:
//       "Noida to Delhi 12 Seater Tempo Traveller | Book Now",

//     metaDescription:
//       "Book a 12 seater Tempo Traveller from Noida to Delhi for family trips, group travel, corporate outings and events. Comfortable seating, AC and spacious luggage capacity.",

//     faqs: [
//       {
//         _id: "faq-12-seater-001",
//         question:
//           "What is the fare for a 12 seater Tempo Traveller from Noida to Delhi?",
//         answer:
//           "The fare for a 12 seater Tempo Traveller from Noida to Delhi depends on the travel date, pickup location, drop location and trip type. Contact us for the latest fixed fare.",
//       },

//       {
//         _id: "faq-12-seater-002",
//         question:
//           "How many people can travel in a 12 seater Tempo Traveller?",
//         answer:
//           "A 12 seater Tempo Traveller is suitable for a group of up to 12 passengers. It is a convenient option for families, friends, corporate groups and small tour groups.",
//       },

//       {
//         _id: "faq-12-seater-003",
//         question:
//           "Is the 12 seater Tempo Traveller available for one way travel?",
//         answer:
//           "Yes. A 12 seater Tempo Traveller can be booked for one way travel from Noida to Delhi, subject to vehicle availability.",
//       },

//       {
//         _id: "faq-12-seater-004",
//         question:
//           "Is the 12 seater Tempo Traveller air conditioned?",
//         answer:
//           "Yes. Our 12 seater Tempo Travellers are available with air conditioning and comfortable seating for group travel.",
//       },

//       {
//         _id: "faq-12-seater-005",
//         question:
//           "Can I book a 12 seater Tempo Traveller for a family trip?",
//         answer:
//           "Yes. A 12 seater Tempo Traveller is an excellent choice for family trips because the entire group can travel together in one comfortable vehicle.",
//       },

//       {
//         _id: "faq-12-seater-006",
//         question:
//           "Can I book a 12 seater Tempo Traveller from Noida to Delhi Airport?",
//         answer:
//           "Yes. You can book a 12 seater Tempo Traveller for group airport transfers from Noida to Delhi Airport. The vehicle provides enough seating for larger groups and their luggage.",
//       },
//     ],
//   },

//   route: {
//     _id: "route-001",
//     fromCity: "Noida",
//     toCity: "Delhi",
//     slug: "noida-to-delhi",
//     distance: 25,
//     duration: "45 min - 1.5 hrs",
//   },

//   vehicles: [
//     {
//       _id: "vehicle-12-seater-001",
//       name: "12 Seater Tempo Traveller",
//       slug: "12-seater-tempo-traveller",
//       brand: "Force",
//       cabType: "Tempo Traveller",
//       passengerCapacity: 12,
//       luggageCapacity: 8,
//       image: "/images/tempo-traveller/12-seater.png",
//       airCondition: true,
//       fuelType: "Diesel",
//       transmission: "Manual",
//     },
//   ],

//   fares: [
//     {
//       _id: "fare-12-seater-001",
//       vehicleId: "vehicle-12-seater-001",
//       vehicleName: "12 Seater Tempo Traveller",
//       oneWayPrice: 4500,
//       roundTripPrice: 7500,
//     },
//   ],

//   popularRoutes: [
//     {
//       id: 1,
//       from: "Noida",
//       to: "Delhi",
//       distance: "25 km",
//       duration: "45 min–1.5 hr",
//       image: "/popular_cab_route1.jpg",
//       popular: true,
//     },

//     {
//       id: 2,
//       from: "Noida",
//       to: "Delhi Airport",
//       distance: "35 km",
//       duration: "1–2 hr",
//       image: "/popular_cab_route2.jpg",
//       popular: true,
//     },

//     {
//       id: 3,
//       from: "Noida",
//       to: "Agra",
//       distance: "200 km",
//       duration: "4–5 hr",
//       image: "/popular_cab_route3.jpg",
//       popular: true,
//     },

//     {
//       id: 4,
//       from: "Noida",
//       to: "Mathura",
//       distance: "160 km",
//       duration: "3–4 hr",
//       image: "/popular_cab_route4.jpg",
//       popular: true,
//     },

//     {
//       id: 5,
//       from: "Noida",
//       to: "Vrindavan",
//       distance: "165 km",
//       duration: "3–4 hr",
//       image: "/popular_cab_route5.jpg",
//       popular: true,
//     },

//     {
//       id: 6,
//       from: "Noida",
//       to: "Jaipur",
//       distance: "280 km",
//       duration: "5–6 hr",
//       image: "/popular_cab_route6.jpg",
//       popular: true,
//     },

//     {
//       id: 7,
//       from: "Noida",
//       to: "Haridwar",
//       distance: "220 km",
//       duration: "5–6 hr",
//       image: "/popular_cab_route7.jpg",
//       popular: true,
//     },

//     {
//       id: 8,
//       from: "Noida",
//       to: "Rishikesh",
//       distance: "250 km",
//       duration: "5–6 hr",
//       image: "/popular_cab_route8.jpg",
//       popular: true,
//     },
//   ],
// },"noida-to-delhi-16-seater-tempo-traveller": {
//   page: {
//     _id: "page-16-seater-001",
//     pageType: "16-seater-tempo-traveller",
//     slug: "noida-to-delhi-16-seater-tempo-traveller",

//     h1: "Noida to Delhi 16 Seater Tempo Traveller",

//     metaTitle:
//       "Noida to Delhi 16 Seater Tempo Traveller | Book Tempo Traveller",

//     metaDescription:
//       "Book a 16 seater Tempo Traveller from Noida to Delhi for family trips, corporate outings, weddings, airport transfers and group travel. Comfortable AC seating with spacious luggage capacity.",

//     faqs: [
//       {
//         _id: "faq-16-seater-001",
//         question:
//           "What is the fare for a 16 seater Tempo Traveller from Noida to Delhi?",
//         answer:
//           "The fare for a 16 seater Tempo Traveller from Noida to Delhi depends on the travel date, pickup and drop location, trip duration and vehicle type. Contact us for the latest fare.",
//       },

//       {
//         _id: "faq-16-seater-002",
//         question:
//           "How many passengers can travel in a 16 seater Tempo Traveller?",
//         answer:
//           "A 16 seater Tempo Traveller is designed for up to 16 passengers, making it suitable for medium-sized families, corporate teams, wedding groups and group tours.",
//       },

//       {
//         _id: "faq-16-seater-003",
//         question:
//           "Is the 16 seater Tempo Traveller suitable for family trips?",
//         answer:
//           "Yes. A 16 seater Tempo Traveller is a convenient option for extended families and groups who want to travel together in one private vehicle.",
//       },

//       {
//         _id: "faq-16-seater-004",
//         question:
//           "Is the 16 seater Tempo Traveller air conditioned?",
//         answer:
//           "Yes. AC 16 seater Tempo Travellers are available for comfortable travel. Vehicle amenities may vary depending on the selected vehicle.",
//       },

//       {
//         _id: "faq-16-seater-005",
//         question:
//           "Can I book a 16 seater Tempo Traveller for Delhi Airport?",
//         answer:
//           "Yes. A 16 seater Tempo Traveller can be booked for group airport transfers between Noida and Delhi Airport.",
//       },

//       {
//         _id: "faq-16-seater-006",
//         question:
//           "Can I book a 16 seater Tempo Traveller for an outstation trip?",
//         answer:
//           "Yes. The 16 seater Tempo Traveller is suitable for outstation group trips to destinations such as Agra, Jaipur, Haridwar, Rishikesh and other cities.",
//       },

//       {
//         _id: "faq-16-seater-007",
//         question:
//           "Does the 16 seater Tempo Traveller have luggage space?",
//         answer:
//           "Yes. 16 seater Tempo Travellers generally provide dedicated luggage space. The actual luggage capacity depends on the vehicle configuration.",
//       },

//       {
//         _id: "faq-16-seater-008",
//         question:
//           "Is the fare per person or for the complete vehicle?",
//         answer:
//           "The booking is generally for the complete private vehicle rather than per passenger. Final pricing depends on the route, duration and booking requirements.",
//       },
//     ],
//   },

//   route: {
//     _id: "route-001",
//     fromCity: "Noida",
//     toCity: "Delhi",
//     slug: "noida-to-delhi",
//     distance: 25,
//     duration: "45 min - 1.5 hrs",
//   },

//   vehicles: [
//     {
//       _id: "vehicle-16-seater-001",
//       name: "16 Seater Tempo Traveller",
//       slug: "16-seater-tempo-traveller",
//       brand: "Force",
//       cabType: "Tempo Traveller",
//       passengerCapacity: 16,
//       luggageCapacity: 10,
//       image: "/images/tempo-traveller/16-seater.png",
//       airCondition: true,
//       fuelType: "Diesel",
//       transmission: "Manual",
//     },
//   ],

//   fares: [
//     {
//       _id: "fare-16-seater-001",
//       vehicleId: "vehicle-16-seater-001",
//       vehicleName: "16 Seater Tempo Traveller",
//       oneWayPrice: 5500,
//       roundTripPrice: 9000,
//     },
//   ],

//   popularRoutes: [
//     {
//       id: 1,
//       from: "Noida",
//       to: "Delhi",
//       distance: "25 km",
//       duration: "45 min–1.5 hr",
//       image: "/popular_cab_route1.jpg",
//       popular: true,
//     },

//     {
//       id: 2,
//       from: "Noida",
//       to: "Delhi Airport",
//       distance: "35 km",
//       duration: "1–2 hr",
//       image: "/popular_cab_route2.jpg",
//       popular: true,
//     },

//     {
//       id: 3,
//       from: "Noida",
//       to: "Agra",
//       distance: "200 km",
//       duration: "4–5 hr",
//       image: "/popular_cab_route3.jpg",
//       popular: true,
//     },

//     {
//       id: 4,
//       from: "Noida",
//       to: "Jaipur",
//       distance: "280 km",
//       duration: "5–6 hr",
//       image: "/popular_cab_route4.jpg",
//       popular: true,
//     },

//     {
//       id: 5,
//       from: "Noida",
//       to: "Haridwar",
//       distance: "220 km",
//       duration: "5–6 hr",
//       image: "/popular_cab_route5.jpg",
//       popular: true,
//     },

//     {
//       id: 6,
//       from: "Noida",
//       to: "Rishikesh",
//       distance: "250 km",
//       duration: "5–6 hr",
//       image: "/popular_cab_route6.jpg",
//       popular: true,
//     },

//     {
//       id: 7,
//       from: "Noida",
//       to: "Mathura",
//       distance: "160 km",
//       duration: "3–4 hr",
//       image: "/popular_cab_route7.jpg",
//       popular: true,
//     },

//     {
//       id: 8,
//       from: "Noida",
//       to: "Vrindavan",
//       distance: "165 km",
//       duration: "3–4 hr",
//       image: "/popular_cab_route8.jpg",
//       popular: true,
//     },
//   ],
// },
// "noida-to-delhi-24-seater-tempo-traveller": {
//   page: {
//     _id: "page-24-seater-001",
//     pageType: "24-seater-tempo-traveller",
//     slug: "noida-to-delhi-24-seater-tempo-traveller",

//     h1: "Noida to Delhi 24 Seater Tempo Traveller",

//     metaTitle:
//       "Noida to Delhi 24 Seater Tempo Traveller | Book Tempo Traveller",

//     metaDescription:
//       "Book a 24 seater Tempo Traveller from Noida to Delhi for family trips, weddings, corporate events, religious tours and group travel.",

//     faqs: [],
//   },

//   route: {
//     _id: "route-001",
//     fromCity: "Noida",
//     toCity: "Delhi",
//     slug: "noida-to-delhi",
//     distance: 25,
//     duration: "45 min - 1.5 hrs",
//   },

//   vehicles: [
//     {
//       _id: "vehicle-24-seater-001",
//       name: "24 Seater Tempo Traveller",
//       slug: "24-seater-tempo-traveller",
//       brand: "Force",
//       cabType: "Tempo Traveller",
//       passengerCapacity: 24,
//       luggageCapacity: 15,
//       image: "/images/tempo-traveller/24-seater.png",
//       airCondition: true,
//       fuelType: "Diesel",
//       transmission: "Manual",
//     },
//   ],

//   fares: [
//     {
//       _id: "fare-24-seater-001",
//       vehicleId: "vehicle-24-seater-001",
//       vehicleName: "24 Seater Tempo Traveller",
//       oneWayPrice: 7500,
//       roundTripPrice: 12000,
//     },
//   ],

//   popularRoutes: [
//     {
//       id: 1,
//       from: "Noida",
//       to: "Delhi",
//       distance: "25 km",
//       duration: "45 min–1.5 hr",
//       image: "/popular_cab_route1.jpg",
//       popular: true,
//     },
//     {
//       id: 2,
//       from: "Noida",
//       to: "Delhi Airport",
//       distance: "35 km",
//       duration: "1–2 hr",
//       image: "/popular_cab_route2.jpg",
//       popular: true,
//     },
//     {
//       id: 3,
//       from: "Noida",
//       to: "Agra",
//       distance: "200 km",
//       duration: "4–5 hr",
//       image: "/popular_cab_route3.jpg",
//       popular: true,
//     },
//     {
//       id: 4,
//       from: "Noida",
//       to: "Jaipur",
//       distance: "280 km",
//       duration: "5–6 hr",
//       image: "/popular_cab_route4.jpg",
//       popular: true,
//     },
//     {
//       id: 5,
//       from: "Noida",
//       to: "Haridwar",
//       distance: "220 km",
//       duration: "5–6 hr",
//       image: "/popular_cab_route5.jpg",
//       popular: true,
//     },
//     {
//       id: 6,
//       from: "Noida",
//       to: "Rishikesh",
//       distance: "250 km",
//       duration: "5–6 hr",
//       image: "/popular_cab_route6.jpg",
//       popular: true,
//     },
//     {
//       id: 7,
//       from: "Noida",
//       to: "Mathura",
//       distance: "160 km",
//       duration: "3–4 hr",
//       image: "/popular_cab_route7.jpg",
//       popular: true,
//     },
//     {
//       id: 8,
//       from: "Noida",
//       to: "Vrindavan",
//       distance: "165 km",
//       duration: "3–4 hr",
//       image: "/popular_cab_route8.jpg",
//       popular: true,
//     },
//   ],
// },

// };

// export async function getRoutePage(slug: string): Promise<any | null> {
//   return routePages[slug] || null;
// }


export function getRoutePage(
  pageSlug: string,
) {
  const vehicle =
    findVehicleFromSlug(pageSlug);

  if (!vehicle) {
    return null;
  }

  const route =
    findRouteFromSlug(
      pageSlug,
      vehicle,
    );

  if (!route) {
    return null;
  }

  const oneWayPrice =
    calculateFare(
      route.distance,
      false,
    );

  const roundTripPrice =
    calculateFare(
      route.distance,
      true,
    );

  return {
    page: {
      _id: `${route.slug}-${vehicle.slug}`,

      pageType: vehicle.pageType,

      slug: pageSlug,

      h1: `${route.fromCity} to ${route.toCity} ${vehicle.name} Taxi`,

      metaTitle: `${route.fromCity} to ${route.toCity} ${vehicle.name} Taxi | Book Cab`,

      metaDescription:
        `Book ${vehicle.name} taxi from ${route.fromCity} to ${route.toCity}. Comfortable, affordable and reliable private cab service.`,
      
      faqs: [],
    },

    route,

    vehicles: [vehicle],

    fares: [
      {
        _id: `fare-${route.slug}-${vehicle.slug}`,

        vehicleId: vehicle.slug,

        vehicleName: vehicle.name,

        oneWayPrice,

        roundTripPrice,
      },
    ],

    popularRoutes:
      generatePopularRoutes(
        route.fromCity,
        route.slug,
      ),
  };
}