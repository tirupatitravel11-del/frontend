export type AboutLocationData = {
  city: string;
  overview: string;

  famousFor: string[];
  localCuisine: string[];
  bestTimeToVisit: string;
  idealFor: string[];

  nearestAirport: string;
  nearestRailwayStation: string;

  note: string;
};

export const aboutLocationData: AboutLocationData[] = [
  {
    city: "Lucknow",

    overview:
      "Lucknow, the capital of Uttar Pradesh, is known for its rich Nawabi heritage, historic architecture, refined culture, famous cuisine, and warm hospitality. The city is an important hub for business, education, tourism, and travel across North India.",

    famousFor: [
      "Nawabi Heritage",
      "Bara Imambara",
      "Chikankari",
      "Historic Architecture",
    ],

    localCuisine: [
      "Galouti Kebab",
      "Tunday Kebab",
      "Lucknowi Biryani",
      "Basket Chaat",
    ],

    bestTimeToVisit: "October to March",

    idealFor: [
      "Bara Imambara",
      "Chota Imambara",
      "Rumi Darwaza",
      "Hazratganj",
      "British Residency",
    ],

    nearestAirport:
      "Chaudhary Charan Singh International Airport (LKO)",

    nearestRailwayStation:
      "Lucknow Charbagh Railway Station",

    note:
      "The above fares are indicative and may vary depending on the vehicle category, travel distance, route, tolls, parking, permits, and other applicable charges. The final fare is confirmed before booking.",
  },

  {
    city: "Varanasi",

    overview:
      "Varanasi is one of India's oldest living cities and a major spiritual and cultural destination. Located on the banks of the Ganges, the city is known for its ancient temples, sacred ghats, vibrant traditions, and growing importance as a tourism and travel hub in Uttar Pradesh.",

    famousFor: [
      "Ganga Ghats",
      "Kashi Vishwanath Temple",
      "Spiritual Heritage",
      "Banarasi Silk",
    ],

    localCuisine: [
      "Kachori Sabzi",
      "Tamatar Chaat",
      "Banarasi Paan",
      "Lassi",
    ],

    bestTimeToVisit: "October to March",

    idealFor: [
      "Kashi Vishwanath Temple",
      "Dashashwamedh Ghat",
      "Sarnath",
      "Assi Ghat",
      "Ganga Aarti",
    ],

    nearestAirport:
      "Lal Bahadur Shastri International Airport (VNS)",

    nearestRailwayStation:
      "Varanasi Junction",

    note:
      "The above fares are indicative and may vary depending on the vehicle category, travel distance, route, tolls, parking, permits, and other applicable charges. The final fare is confirmed before booking.",
  },

  {
    city: "Meerut",

    overview:
      "Meerut is an important city in western Uttar Pradesh and the National Capital Region. Known for its historical importance, sports goods industry, educational institutions, and excellent road connectivity, Meerut is a popular starting point for journeys across Delhi NCR and North India.",

    famousFor: [
      "Sports Industry",
      "Historical Heritage",
      "Scissors Industry",
      "Education",
    ],

    localCuisine: [
      "Rewari",
      "Gajak",
      "Bedmi Puri",
      "Local Sweets",
    ],

    bestTimeToVisit: "October to March",

    idealFor: [
      "Augarnath Temple",
      "Gandhi Bagh",
      "Suraj Kund Park",
      "St. John's Church",
      "Shahpeer Sahib",
    ],

    nearestAirport:
      "Indira Gandhi International Airport (DEL)",

    nearestRailwayStation:
      "Meerut City Junction",

    note:
      "The above fares are indicative and may vary depending on the vehicle category, travel distance, route, tolls, parking, permits, and other applicable charges. The final fare is confirmed before booking.",
  },
];