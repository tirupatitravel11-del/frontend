export interface RouteDetails {
  highway: string;
  highwayDescription: string;
  roadCondition: string;
  tollInfo: string;
  majorStops: string[];
  popularDestinations: string[];
  pickupLocalities: string[];
  travelPurposes: string[];
  travelTimes: {
    trafficType: string;
    duration: string;
    description: string;
  }[];
  bookingInfo: {
    cancellation: string;
    waiting: string;
    luggage: string;
    bookingProcess: string;
  };
}

export interface CityDetails {
  destinations: string[];
  stops: string[];
  highways: string[];
  highwayDescription: string;
  pickupAreas: string[];
  distanceOverview: {
    distanceRange: string;
    durationRange: string;
    type: string;
  };
  roadCondition: string;
  tollInfo: string;
  travelPurposes: string[];
  bookingInfo: {
    cancellation: string;
    waiting: string;
    luggage: string;
    bookingProcess: string;
  };
}

// City Specific Database
const CITY_DESTINATIONS_DATA: Record<string, string[]> = {
  ayodhya: [
    "Shri Ram Janmabhoomi Mandir",
    "Hanuman Garhi Temple",
    "Kanak Bhavan",
    "Saryu Ghat (Evening Aarti)",
    "Guptar Ghat & Military Mandir",
    "Dashrath Mahal",
    "Nageshwar Nath Temple",
    "Surya Kund & Bharat Kund",
  ],
  varanasi: [
    "Kashi Vishwanath Temple Corridor",
    "Dashashwamedh Ghat (Ganga Aarti)",
    "Assi Ghat & Subah-e-Banaras",
    "Sarnath Stupa & Deer Park",
    "BHU Vishwanath Temple",
    "Manikarnika & Harishchandra Ghat",
    "Ramnagar Fort & Museum",
    "Sankat Mochan Hanuman Temple",
  ],
  lucknow: [
    "Bara Imambara & Bhool Bhulaiya",
    "Chota Imambara & Clock Tower",
    "Rumi Darwaza",
    "Hazratganj Heritage Market",
    "Ambedkar Memorial Park",
    "British Residency",
    "Janeshwar Mishra Park",
    "Lucknow Zoo",
  ],
  prayagraj: [
    "Triveni Sangam (Ganga-Yamuna-Saraswati)",
    "Bade Hanuman Ji (Shayan Mudra Mandir)",
    "Anand Bhavan & Swaraj Bhavan",
    "Allahabad Fort & Akshayavat",
    "Alopi Devi Shaktipeeth",
    "Chandra Shekhar Azad Park",
    "Khusro Bagh",
  ],
  gaya: [
    "Mahabodhi Temple (UNESCO World Heritage)",
    "Vishnupad Temple (Pind Daan)",
    "Sacred Bodhi Tree",
    "Great Buddha Statue (80 Feet)",
    "Dungeshwari Cave Temples",
    "Pretshila & Mangla Gauri Hills",
    "Royal Bhutan & Thai Monastery",
  ],
  vindhyachal: [
    "Maa Vindhyavasini Temple (Shaktipeeth)",
    "Kali Khoh Temple",
    "Ashtabhuja Devi Temple",
    "Sita Kund & Shiva Lingam",
    "Rameshwar Mahadev Mandir",
    "Chunar Fort & Ganga View",
  ],
  agra: [
    "Taj Mahal (Wonder of the World)",
    "Agra Fort (Red Fort)",
    "Fatehpur Sikri & Buland Darwaza",
    "Mehtab Bagh Sunset Point",
    "Itmad-ud-Daulah (Baby Taj)",
    "Sikandra (Akbar's Tomb)",
  ],
  delhi: [
    "India Gate & Kartavya Path",
    "Red Fort (Lal Qila)",
    "Qutub Minar Complex",
    "Akshardham Temple",
    "Lotus Temple (Bahá'í House)",
    "Gurudwara Bangla Sahib",
    "Connaught Place (CP)",
  ],
  noida: [
    "Akshardham Corridor",
    "DLF Mall of India & Sector 18",
    "Okhla Bird Sanctuary",
    "Worlds of Wonder (WOW)",
    "Advant Navis Business Park",
    "Grand Venice Mall Greater Noida",
  ],
  mathura: [
    "Shri Krishna Janmabhoomi Temple",
    "Dwarkadhish Temple",
    "Vishram Ghat (Yamuna Aarti)",
    "Govardhan Parikrama Marg",
    "Gita Mandir",
    "Mathura Museum",
  ],
  vrindavan: [
    "Banke Bihari Temple",
    "Prem Mandir (Illuminated Temple)",
    "ISKCON Temple Vrindavan",
    "Radha Raman Temple",
    "Nidhivan Sacred Grove",
    "Priya Kant Ju Temple",
  ],
  haridwar: [
    "Har Ki Pauri (Ganga Aarti)",
    "Mansa Devi Temple (Ropeway)",
    "Chandi Devi Temple",
    "Bharat Mata Mandir",
    "Shanti Kunj Ashram",
    "Daksha Mahadev Temple",
  ],
  rishikesh: [
    "Ram Jhula & Laxman Jhula",
    "Triveni Ghat Evening Aarti",
    "Parmarth Niketan Ashram",
    "Beatles Ashram (Chaurasi Kutia)",
    "Shivpuri River Rafting Point",
    "Neelkanth Mahadev Temple",
  ],
  jaipur: [
    "Hawa Mahal (Palace of Winds)",
    "Amer Fort (Amber Palace)",
    "City Palace & Mubarak Mahal",
    "Jantar Mantar Observatory",
    "Nahargarh Fort Sunset Point",
    "Jal Mahal (Water Palace)",
  ],
  gorakhpur: [
    "Gorakhnath Temple (Main Math)",
    "Ramgarh Taal & Marine Drive",
    "Gita Press Headquarter & Museum",
    "Kushmi Forest & Zoo",
    "Railway Museum Gorakhpur",
  ],
  patna: [
    "Takht Sri Patna Sahib Gurudwara",
    "Bihar Museum & Heritage Gallery",
    "Golghar Historical Granary",
    "Patna Planetarium",
    "Ganga Marine Drive (JP Ganga Path)",
  ],
};

const CITY_PICKUP_AREAS_DATA: Record<string, string[]> = {
  ayodhya: [
    "Ayodhya Dham Railway Station",
    "Ayodhya Cantt (Faizabad Junction)",
    "Maharishi Valmiki International Airport (AYJ)",
    "Ram Path & Tedhi Bazar",
    "Naya Ghat & Saryu Riverside",
    "Civil Lines & Hotel Hubs",
    "Bypass Road & Highway Crossings",
  ],
  varanasi: [
    "Lal Bahadur Shastri Airport (VNS - Babatpur)",
    "Varanasi Junction (Varanasi Cantt)",
    "Banaras Railway Station (Manduadih)",
    "Godowlia & Dashashwamedh Area",
    "Assi Ghat & Lanka (BHU)",
    "Sigra & Maldahiya Hotels",
    "Pandeypur, Shivpur & Cantonment",
  ],
  lucknow: [
    "Chaudhary Charan Singh Airport (LKO - Amausi)",
    "Charbagh Railway Station & Junction",
    "Gomti Nagar & Gomti Nagar Extension",
    "Hazratganj & Central Commercial Zone",
    "Alambagh Bus Terminal & Metro Hub",
    "Indira Nagar & Munshi Pulia",
    "Aliganj, Mahanagar & Shaheed Path",
  ],
  prayagraj: [
    "Prayagraj Airport (IXD - Bamrauli)",
    "Prayagraj Junction & City Station",
    "Civil Lines Commercial & Hotel District",
    "George Town & Tagore Town",
    "Katra & University Area",
    "Naini & Sangam Approach Localities",
  ],
  gaya: [
    "Gaya International Airport (GAY)",
    "Gaya Junction Railway Station",
    "Bodh Gaya Temple Precinct & Monasteries",
    "Station Road & Golghar Area",
    "Civil Lines Gaya",
  ],
  vindhyachal: [
    "Vindhyachal Railway Station",
    "Mirzapur Cantt / Mirzapur Railway Station",
    "Maa Vindhyavasini Temple Complex",
    "Shastri Bridge & Civil Lines Mirzapur",
    "Ganga Ghat Road & Pilgrim Dharamshalas",
  ],
  agra: [
    "Agra Cantt Railway Station",
    "Agra Fort Station & Raja Ki Mandi",
    "Fatehabad Road (Luxury Hotel Corridor)",
    "Sanjay Place Commercial Hub",
    "Dayalbagh & Kamla Nagar",
    "Kheria Airport Area",
  ],
  delhi: [
    "Indira Gandhi International Airport (T1, T2, T3)",
    "New Delhi Railway Station (Paharganj / Ajmeri Gate)",
    "Old Delhi & Hazrat Nizamuddin Railway Station",
    "Anand Vihar ISBT & Railway Terminal",
    "Connaught Place, South Extension & Karol Bagh",
    "Dwarka, Rohini, Saket & Vasant Kunj",
  ],
  noida: [
    "Sector 18, 16 & Atta Market Hub",
    "Sector 62, 63 & IT/Commercial Parks",
    "Sector 137, 76, 78 & Expressway High-rises",
    "Greater Noida Pari Chowk & Knowledge Park",
    "Noida Electronic City & DND Corridor",
  ],
  mathura: [
    "Mathura Junction Railway Station",
    "Mathura Cantt & Dhauli Pyau",
    "Krishna Janmabhoomi Complex",
    "Highway Plaza & Govardhan Chauraha",
  ],
  vrindavan: [
    "Chhatikara Road & Bhaktivedanta Marg",
    "Prem Mandir & ISKCON Temple Zone",
    "Raman Reti & VIP Marg",
    "Vrindavan Railway Station Area",
  ],
  haridwar: [
    "Haridwar Railway Station & Bus Terminal",
    "Har Ki Pauri & Bada Bazar",
    "Ranipur More & Shivalik Nagar",
    "Jwalapur & Kankhal",
  ],
  rishikesh: [
    "Rishikesh Railway Station (Yog Nagari)",
    "Tapovan & Lakshman Jhula Chowk",
    "Ram Jhula & Swargashram Road",
    "AIIMS Rishikesh & Dehradun Highway",
  ],
  jaipur: [
    "Jaipur International Airport (JAI)",
    "Jaipur Junction & Gandhinagar Railway Station",
    "Sindhi Camp Central Bus Stand",
    "Vaishali Nagar, Malviya Nagar & C-Scheme",
    "Tonk Road & Mansarovar Hub",
  ],
  gorakhpur: [
    "Mahayogi Gorakhnath Airport (GOP)",
    "Gorakhpur Junction Railway Station",
    "Golghar Commercial District",
    "Medical College Road & Asuran",
    "Mohaddipur & Tara Mandal (Ramgarh Taal)",
  ],
  patna: [
    "Jay Prakash Narayan Airport (PAT)",
    "Patna Junction & Rajendra Nagar Terminal",
    "Boring Road, Fraser Road & Dak Bungalow",
    "Kankarbagh, Bailey Road & Exhibition Road",
    "Patna City (Gurudwara Zone)",
  ],
};

const HIGHWAY_ROUTE_MAPPING: Record<
  string,
  {
    highway: string;
    description: string;
    stops: string[];
    roadCondition: string;
    tollInfo: string;
  }
> = {
  "lucknow-ayodhya": {
    highway: "NH-27 (Lucknow-Ayodhya 4-Lane Highway)",
    description:
      "Travel seamlessly along National Highway 27, connecting Lucknow to Ayodhya via Barabanki and Ramsanehi Ghat. The entire stretch is a well-maintained 4-lane divided highway with dedicated flyovers.",
    stops: [
      "Barabanki Bypass Food Mall",
      "Ramsanehi Ghat Midway Plaza (Tea & Snacks)",
      "Badosarai Toll Rest Stop",
      "Ronahi Toll Plaza Refreshment Point",
    ],
    roadCondition:
      "Excellent 4-lane smooth asphalt highway. Fast-moving traffic with dedicated expressway bypasses and minimal local bottlenecks.",
    tollInfo:
      "Fastag enabled automatic toll lanes at Barabanki & Ronahi toll plazas (approx 2 toll gates). Tolls billed at actuals.",
  },
  "ayodhya-lucknow": {
    highway: "NH-27 (Ayodhya-Lucknow 4-Lane Highway)",
    description:
      "Smooth return trip on National Highway 27 from Ayodhya to Lucknow through Ronahi, Ramsanehi Ghat, and Barabanki, leading directly into Lucknow via Shaheed Path or Faizabad Road.",
    stops: [
      "Ronahi Toll Plaza Food Stop",
      "Ramsanehi Ghat Highway Dhaba",
      "Barabanki Midway Rest Area",
      "Chinhat / Shaheed Path Entry Point",
    ],
    roadCondition:
      "Top-tier 4-lane highway with clear signages, bright night illumination at junctions, and bypass around town centers.",
    tollInfo:
      "Fastag toll plazas active on NH-27. Toll charges apply at actuals with zero waiting time in Fastag lanes.",
  },
  "varanasi-ayodhya": {
    highway: "NH-135A & Purvanchal Expressway Link",
    description:
      "Route connects the holy cities of Kashi and Ayodhya via Jaunpur, Shahganj, and Akbarpur (or through Purvanchal Expressway interchange) offering an easy, scenic journey.",
    stops: [
      "Jaunpur Bypass Food Corner",
      "Shahganj Highway Tea & Fuel Stop",
      "Akbarpur / Ambedkar Nagar Midway Dhaba",
      "Ayodhya Ring Road Entry Point",
    ],
    roadCondition:
      "Smooth 2-lane to 4-lane widened highway sections with newly resurfaced stretches and bypass roads avoiding city congestion.",
    tollInfo:
      "Fastag toll plazas functional along Jaunpur-Ayodhya corridor and Purvanchal expressway exits.",
  },
  "ayodhya-varanasi": {
    highway: "NH-135A & Purvanchal Expressway Link",
    description:
      "Direct highway journey from Ayodhya to Varanasi via Ambedkar Nagar, Shahganj, and Jaunpur, entering Varanasi through the newly built Ring Road.",
    stops: [
      "Akbarpur Highway Rest Stop",
      "Shahganj Tea & Refreshment Dhaba",
      "Jaunpur Bypass Midway Plaza",
      "Babatpur Airport / Ring Road Crossing",
    ],
    roadCondition:
      "Well-paved national highway with multi-lane ring road access into Varanasi Cantt and temple hubs.",
    tollInfo:
      "Fastag electronic toll collection on designated toll plazas. Toll charged as per actual receipts.",
  },
  "varanasi-prayagraj": {
    highway: "NH-19 (6-Lane Grand Trunk Road / Golden Quadrilateral)",
    description:
      "One of the fastest and smoothest corridors in Eastern UP. Runs across NH-19 through Mirzamurad, Aurai, Handia, and enters Prayagraj across the Shastri Bridge.",
    stops: [
      "Aurai Highway Midway Plaza",
      "Handia Toll Rest Plaza & Dhaba",
      "Gopiganj Food & Refreshment Stop",
      "Shastri Bridge Approach Break",
    ],
    roadCondition:
      "World-class 6-lane access-controlled highway. Very smooth driving surface with 80-100 km/h cruising speed.",
    tollInfo:
      "Fastag toll booths at Handia and Lalanagar toll plazas. Toll charges billed at actuals.",
  },
  "prayagraj-varanasi": {
    highway: "NH-19 (6-Lane Grand Trunk Road)",
    description:
      "Smooth high-speed transit from Sangam City Prayagraj to Varanasi along the 6-lane National Highway 19 with flyovers bypassing all intermediate towns.",
    stops: [
      "Handia Expressway Plaza",
      "Aurai Food Court & Tea Junction",
      "Mirzamurad Highway Dhaba",
      "Rohania / Varanasi Ring Road Point",
    ],
    roadCondition:
      "Excellent 6-lane concrete and asphalt road with clearly demarcated lanes, emergency bays, and fuel stations.",
    tollInfo:
      "Fastag-ready toll gates at Handia and Lalanagar plazas.",
  },
  "noida-delhi": {
    highway: "DND Flyway & Delhi-Noida Direct Corridor",
    description:
      "Fast urban connection linking Noida sectors with Delhi through DND Flyway, Kalindi Kunj, or Mayur Vihar Link Road, providing quick access across the Yamuna River.",
    stops: [
      "DND Flyway Toll Plaza Point",
      "Mayur Vihar Pocket Food Corner",
      "Sarai Kale Khan Transit Point",
      "Ring Road Fuel / EV Charging Station",
    ],
    roadCondition:
      "Multi-lane signal-free elevated expressways and arterial boulevards with smooth bitumen surfaces.",
    tollInfo:
      "MCD commercial vehicle toll applies at Delhi border entries for commercial cabs (included or billed at actuals). DND is toll-free.",
  },
  "delhi-noida": {
    highway: "DND Flyway, Chilla Border & Ring Road Corridor",
    description:
      "Direct transit from Delhi to Noida via DND Flyway, Noida Link Road, and Greater Noida Expressway corridors.",
    stops: [
      "Ashram Flyover Rest Corner",
      "Akshardham Highway Rest Point",
      "Noida Sector 18 Commercial Stop",
      "Expressway Food Hub",
    ],
    roadCondition:
      "8-lane wide urban expressway corridors with modern lighting, automated speed cameras, and smooth road conditions.",
    tollInfo:
      "Toll-free personal entry; commercial municipal tax at border crossings as per regulations.",
  },
  "noida-agra": {
    highway: "Yamuna Expressway (6-Lane Access-Controlled Expressway)",
    description:
      "Travel along the landmark 165 km Yamuna Expressway from Noida/Greater Noida to Agra. Features 6-lane high-speed concrete expressway with world-class rest areas.",
    stops: [
      "Jewar Toll Plaza Midway Food Court (Milestone 38)",
      "Mathura Cut Food Mall & Rest Area (Milestone 95)",
      "Tundla / Agra Toll Plaza Refreshment Corner",
    ],
    roadCondition:
      "Premium 6-lane access-controlled concrete highway designed for 100 km/h cruising. Clean, barrier-free driving.",
    tollInfo:
      "Yamuna Expressway Fastag electronic toll collection. Toll charges billed at actual expressway rates.",
  },
  "agra-noida": {
    highway: "Yamuna Expressway (6-Lane Access-Controlled Expressway)",
    description:
      "Direct high-speed return from the Taj City Agra to Noida and Greater Noida along the Yamuna Expressway.",
    stops: [
      "Agra Toll Plaza Milestone Point",
      "Mathura Expressway Food Plaza",
      "Jewar Toll Plaza Food Court & Coffee Stop",
    ],
    roadCondition:
      "Superior 6-lane concrete surface with emergency assistance booths, rest plazas, and round-the-clock highway patrolling.",
    tollInfo:
      "Fastag toll plazas active along Yamuna Expressway exits. Toll billed at actuals.",
  },
  "gorakhpur-ayodhya": {
    highway: "NH-27 (Gorakhpur-Ayodhya 4-Lane Highway)",
    description:
      "Crucial east-west corridor connecting Gorakhpur with Ayodhya Dham via Khalilabad, Basti, and Harraiya along the 4-lane NH-27.",
    stops: [
      "Khalilabad Highway Food Mall",
      "Basti Toll Plaza Rest Area",
      "Harraiya Midway Tea & Snacks Dhaba",
      "Chhawni Highway Stop",
    ],
    roadCondition:
      "Well-surfaced 4-lane national highway with multiple flyovers bypassing Basti and Khalilabad cities.",
    tollInfo:
      "Fastag enabled toll collection at Gidha and Basti toll plazas.",
  },
  "prayagraj-ayodhya": {
    highway: "NH-330 (Prayagraj-Pratapgarh-Ayodhya Highway)",
    description:
      "Direct spiritual corridor connecting Sangam city Prayagraj with Ram Janmabhoomi Ayodhya through Pratapgarh and Sultanpur.",
    stops: [
      "Pratapgarh Bypass Food Court",
      "Sultanpur Midway Dhaba & Tea Point",
      "Kurebhar Highway Stop",
      "Surya Kund Approach Rest Point",
    ],
    roadCondition:
      "4-lane paved corridor with smooth driving conditions and clear signposting towards Ayodhya Dham.",
    tollInfo:
      "Fastag toll gates located along NH-330 corridor.",
  },
  "varanasi-gaya": {
    highway: "NH-19 (Grand Trunk Road / Golden Quadrilateral)",
    description:
      "Connects Varanasi to Gaya and Bodh Gaya via Mughalsarai, Mohania, Sasaram, Dehri-on-Sone, and Dobhi along NH-19.",
    stops: [
      "Mohania Highway Food Mall",
      "Sasaram Grand Trunk Dhaba",
      "Dehri-on-Sone Riverview Rest Stop",
      "Dobhi Junction Tea & Snacks Break",
    ],
    roadCondition:
      "Broad 6-lane national highway spanning across UP and Bihar border. Smooth high-speed asphalt corridor.",
    tollInfo:
      "Fastag toll booths operational at UP-Bihar border plazas.",
  },
};

export function getRouteDetails(
  fromCity: string,
  toCity: string,
  distance?: number,
  duration?: string
): RouteDetails {
  const normFrom = (fromCity || "").trim().toLowerCase();
  const normTo = (toCity || "").trim().toLowerCase();
  const routeKey = `${normFrom}-${normTo}`;
  const reverseKey = `${normTo}-${normFrom}`;

  const mappedData =
    HIGHWAY_ROUTE_MAPPING[routeKey] || HIGHWAY_ROUTE_MAPPING[reverseKey];

  const highway =
    mappedData?.highway ||
    `National Highway (NH) & Expressway Corridor connecting ${fromCity} to ${toCity}`;

  const highwayDescription =
    mappedData?.description ||
    `Travel from ${fromCity} to ${toCity} via the primary national highway and state expressway corridor. The route offers modern multi-lane roads, strategic bypasses around congested city centers, and designated highway rest stops.`;

  const roadCondition =
    mappedData?.roadCondition ||
    `Well-maintained 4 to 6 lane highway with smooth asphalt surface, clear lane markings, directional road signages, and regular fuel & emergency rest stops.`;

  const tollInfo =
    mappedData?.tollInfo ||
    `Fastag-enabled electronic toll collection booths on the route. Fastag automatic lanes ensure zero waiting time. All toll charges are billed transparently at actuals.`;

  const majorStops =
    mappedData?.stops || [
      `${fromCity} Highway Exit / Bypass Food Court`,
      "Driver-recommended Family Midway Dhaba & Restaurant",
      "Midway Fuel Station & Clean Restroom Break",
      `${toCity} Outer Ring Road / Toll Plaza Rest Area`,
    ];

  const popularDestinations =
    CITY_DESTINATIONS_DATA[normTo] || [
      `Popular Temples & Spiritual Shrines in ${toCity}`,
      `Top Historical Monuments & Heritage Landmarks in ${toCity}`,
      `Central Markets & Shopping Hubs in ${toCity}`,
      `Scenic Sightseeing Points & City Parks in ${toCity}`,
      `Nearby Cultural Attractions in ${toCity}`,
    ];

  const pickupLocalities =
    CITY_PICKUP_AREAS_DATA[normFrom] || [
      `${fromCity} Airport / Domestic Flight Terminal`,
      `${fromCity} Main Railway Junction / Station`,
      `Central Bus Stand / Interstate Bus Terminal`,
      `Prominent Hotels & Commercial Districts in ${fromCity}`,
      `Doorstep Home & Residential Colony Pickup across ${fromCity}`,
    ];

  const travelPurposes = [
    `Family Holidays & Pilgrimage Darshan trips to ${toCity}`,
    `Airport & Railway Station connectivity from ${fromCity} to ${toCity}`,
    `Corporate Meetings, Business Travel & Office Commutes`,
    `Outstation Weekend Getaways & Leisure Road Trips`,
    `Wedding, Event & Group Travel assistance`,
  ];

  const distVal = distance || 150;
  const durVal = duration || "3 - 4 hrs";

  const travelTimes = [
    {
      trafficType: "Normal Traffic (Recommended)",
      duration: durVal,
      description: `Smooth driving along highway stretches with recommended speed limits (60–80 km/h). Ideal for daytime travel.`,
    },
    {
      trafficType: "Peak Traffic / City Exits",
      duration: `+30 to 45 min extra`,
      description: `During morning (8 AM – 11 AM) and evening (5 PM – 8 PM) peak hours around city borders and bypass junctions.`,
    },
    {
      trafficType: "Early Morning / Late Night",
      duration: `Quickest journey (approx 15-20% faster)`,
      description: `Low vehicular density on expressways allows smooth, uninterupted cruising. Dedicated night-experienced drivers.`,
    },
  ];

  const bookingInfo = {
    cancellation:
      "Free cancellation is available up to 2 hours before driver dispatch. Zero cancellation fee on advance intimation.",
    waiting:
      "Up to 30 minutes of free waiting time at your doorstep or pickup point. Extended waiting billed at nominal hourly rates.",
    luggage:
      "Sedans carry 2–3 medium suitcases; SUVs (Ertiga/Innova) hold 4–5 large bags; Tempo Travellers feature dedicated boot space for 10–18 bags.",
    bookingProcess:
      "1. Select cab & trip type (One Way / Round Trip). 2. Share pickup address & travel time via call/WhatsApp. 3. Receive fixed price confirmation with driver details before arrival.",
  };

  return {
    highway,
    highwayDescription,
    roadCondition,
    tollInfo,
    majorStops,
    popularDestinations,
    pickupLocalities,
    travelPurposes,
    travelTimes,
    bookingInfo,
  };
}

export function getCityDetails(
  city: string,
  mode: "taxi" | "airport" | "sightseeing" | "tempo" = "taxi"
): CityDetails {
  const normCity = (city || "").trim().toLowerCase();

  const destinations =
    CITY_DESTINATIONS_DATA[normCity] || [
      `Prominent Temples & Shrines in ${city}`,
      `Historical Heritage Sites & Monuments in ${city}`,
      `Cultural Attractions & City Viewpoints in ${city}`,
      `Traditional Markets & Souvenir Hubs in ${city}`,
      `Famous Parks & Memorials in ${city}`,
    ];

  const pickupAreas =
    CITY_PICKUP_AREAS_DATA[normCity] || [
      `${city} Airport / Air Terminal Pickup`,
      `${city} Main Railway Junction / Station`,
      `Central Bus Terminal & Interstate Stand`,
      `Major City Hotels, Resorts & Guest Houses`,
      `Door-to-door Residential Neighborhood Pickup across ${city}`,
    ];

  let stops: string[] = [];
  let highways: string[] = [];
  let highwayDescription = "";
  let distanceOverview = {
    distanceRange: "5 – 30 km (City Local) | 50 – 300 km (Outstation)",
    durationRange: "20 min – 1 hr (Local) | Custom for outstation",
    type: "Door-to-door Local & Outstation Taxi",
  };
  let roadCondition =
    "Smooth city arterial roads, elevated bypass flyovers, and well-connected 4-lane state and national highways.";
  let tollInfo =
    "City travel has zero toll. Highway and expressway trips are Fastag enabled; toll charges are billed at actuals.";

  if (mode === "airport") {
    stops = [
      "Airport Terminal Arrival / Departure Curbside Pickup Point",
      "Designated Airport Prepaid Cab Lane",
      "Expressway / Flyover Link to City Hotels",
      "Midway Refreshment & Tea Corner",
    ];
    highways = [
      `${city} Airport Expressway & Elevated Corridor`,
      "Connected Ring Road & National Highway Arteries",
      "Direct City Center Bypass Route",
    ];
    highwayDescription =
      `Fast-track airport transit connecting ${city} Airport with key city sectors, hotels, railway stations, and suburban residential zones via signal-free elevated roads and highways.`;
    distanceOverview = {
      distanceRange: "15 – 35 km (Terminal to City / Hotel Hubs)",
      durationRange: "30 – 50 mins (Live Flight Tracked)",
      type: "Dedicated Airport Transfer Pickup & Drop",
    };
    roadCondition =
      "Signal-free airport expressway and wide arterial roads ensuring punctual arrival for flights.";
    tollInfo =
      "Airport parking fee and expressway toll charged at actual receipts. Transparent upfront fare calculation.";
  } else if (mode === "sightseeing") {
    stops = [
      "Morning Temple Darshan & Spiritual Halts",
      "Midway Traditional Lunch / Famous Food Plaza Halt",
      "Heritage Monument & Guided Photography Point",
      "Evening Market, Souvenir & River Ghat Aarti Stop",
    ];
    highways = [
      `${city} Heritage Circuit Corridor`,
      "City Ring Road & Riverside Boulevard",
      "Temple Connectivity & Bypass Routes",
    ];
    highwayDescription =
      `Customized local tour circuit covering the top historical monuments, temples, and riverside ghats in ${city} with parking assistance and local driver guidance.`;
    distanceOverview = {
      distanceRange: "40 – 80 km (Half Day) | 80 – 120 km (Full Day)",
      durationRange: "4 Hours (Half Day) | 8 to 12 Hours (Full Day)",
      type: "Sightseeing Rental Packages (Flexible Hours & Km)",
    };
    roadCondition =
      "Paved city heritage roads, temple corridors, and clean tourist routes with convenient parking spots.";
    tollInfo =
      "City parking and monument entry fees to be borne directly by traveler. No hidden taxes.";
  } else if (mode === "tempo") {
    stops = [
      "Highway Food Court & Family Restaurant Break",
      "Major Expressways & Toll Plaza Interchanges",
      "Restroom & Refreshment Waypoints for Groups",
      "Pilgrimage Circuit Entry Points & Fuel Halts",
    ];
    highways = [
      `Primary National Highways & Expressways from ${city}`,
      "Intercity 4/6 Lane Corridors with Dedicated Bus/Van Lanes",
      "State Highway Connecting Arterial Routes",
    ];
    highwayDescription =
      `${city} offers excellent high-speed connectivity via multi-lane expressways and national corridors, ideally suited for smooth Tempo Traveller group journeys.`;
    distanceOverview = {
      distanceRange: "50 km - 500+ km depending on route",
      durationRange: "1 hr - 12+ hrs depending on destination",
      type: "Group Travel, Pilgrimage & Luxury Outstation Van",
    };
    roadCondition =
      "Broad 4-to-6 lane highways with smooth asphalt and minimal turbulence, ideal for group passenger comfort.";
    tollInfo =
      "Commercial vehicle toll & state border permit charges billed transparently at actuals.";
  } else {
    // Taxi mode
    stops = [
      "City Entry & Exit Highway Points",
      "Family Highway Dhaba & Food Court",
      "Fuel Station & Clean Restroom Break",
      "Major Expressway / Toll Interchange",
    ];
    highways = [
      `Primary National Highways (NH) serving ${city}`,
      `State Expressways & Outer Ring Road Corridors`,
      `Intercity Connecting 4-Lane Highways`,
    ];
    highwayDescription =
      `${city} is exceptionally connected via 4-lane and 6-lane national highways, state expressways, and bypass corridors, making one-way and round-trip outstation journeys seamless.`;
    distanceOverview = {
      distanceRange: "City Local (per km) | Outstation (Custom Km)",
      durationRange: "Immediate on-call dispatch (24x7)",
      type: "One-Way Drop & Round-Trip Outstation Taxi",
    };
  }

  const travelPurposes =
    mode === "airport"
      ? [
          "Flight Arrival Pickup with Meet & Greet assistance",
          "Timely Airport Drop for Scheduled Departures",
          "Hotel & Resort Transfers for Air Passengers",
          "Corporate & VIP Executive Airport Transfers",
          "Connecting Airport to Outstation Towns Transfers",
        ]
      : mode === "sightseeing"
      ? [
          "Family Heritage & Sightseeing Day Tours",
          "Pilgrimage & Sacred Temple Darshan Circuits",
          "Senior Citizen & Group Sightseeing with easy boarding",
          "Cultural Exploration, Shopping & Ghat Aarti Visits",
          "Corporate Team Outings & Educational Excursions",
        ]
      : mode === "tempo"
      ? [
          "Family Vacations & Large Group Holiday Tours",
          "Pilgrimage Circuits (Char Dham, Ayodhya, Varanasi, Mathura)",
          "Wedding Guest Transfers & Baraat Conveyance",
          "Corporate Offsites, Team Tours & Conferences",
          "School & College Educational Excursions",
        ]
      : [
          "Airport & Railway Station Commutes",
          "Corporate Meetings & Daily Office Travel",
          "Family Functions, Weddings & Pilgrimage Journeys",
          "Outstation Intercity Travel & Weekend Holidays",
          "Emergency & Round-the-Clock On-Call Cab Service",
        ];

  const bookingInfo = {
    cancellation:
      "Free cancellation is available before driver dispatch. Instant cancellation support via call or WhatsApp.",
    waiting:
      mode === "airport"
        ? "Up to 45 minutes of free waiting for flight arrivals (tracked live with your flight number)."
        : "Up to 30 minutes of complimentary waiting at your doorstep. Sightseeing packages include full duration.",
    luggage:
      "Choose Sedan for 2–3 medium bags, SUV for 4–5 large suitcases, or Tempo Traveller for large group luggage.",
    bookingProcess:
      "Select your car, confirm pickup time and location over WhatsApp or call, and get driver details 30 minutes before arrival.",
  };

  return {
    destinations,
    stops,
    highways,
    highwayDescription,
    pickupAreas,
    distanceOverview,
    roadCondition,
    tollInfo,
    travelPurposes,
    bookingInfo,
  };
}
