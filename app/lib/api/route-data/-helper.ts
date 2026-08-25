export type Route = {
  slug: string;
  fromCity: string;
  toCity: string;
  distance: number;
  duration: string;
};


 export const ROUTES: Route[] = [
  // --- Existing Core Routes ---
  {
    slug: "noida-to-delhi",
    fromCity: "Noida",
    toCity: "Delhi",
    distance: 25,
    duration: "45 min - 1.5 hrs",
  },
  {
    slug: "lucknow-to-ayodhya",
    fromCity: "Lucknow",
    toCity: "Ayodhya",
    distance: 135,
    duration: "2.5 - 3 hrs",
  },
  {
    slug: "noida-to-agra",
    fromCity: "Noida",
    toCity: "Agra",
    distance: 200,
    duration: "4 - 5 hrs",
  },
  {
    slug: "noida-to-jaipur",
    fromCity: "Noida",
    toCity: "Jaipur",
    distance: 280,
    duration: "5 - 6 hrs",
  },
  {
    slug: "noida-to-haridwar",
    fromCity: "Noida",
    toCity: "Haridwar",
    distance: 220,
    duration: "5 - 6 hrs",
  },
  {
    slug: "noida-to-mathura",
    fromCity: "Noida",
    toCity: "Mathura",
    distance: 160,
    duration: "3 - 4 hrs",
  },
  {
    slug: "noida-to-vrindavan",
    fromCity: "Noida",
    toCity: "Vrindavan",
    distance: 165,
    duration: "3 - 4 hrs",
  },
  {
    slug: "lucknow-to-varanasi",
    fromCity: "Lucknow",
    toCity: "Varanasi",
    distance: 320,
    duration: "6 - 7 hrs",
  },

  // --- Varanasi Nearby Routes ---
  {
    slug: "varanasi-to-prayagraj",
    fromCity: "Varanasi",
    toCity: "Prayagraj",
    distance: 120,
    duration: "2.5 - 3 hrs",
  },
  {
    slug: "varanasi-to-sarnath",
    fromCity: "Varanasi",
    toCity: "Sarnath",
    distance: 10,
    duration: "20 - 30 min",
  },
  {
    slug: "varanasi-to-mirzapur",
    fromCity: "Varanasi",
    toCity: "Mirzapur",
    distance: 90,
    duration: "2 - 2.5 hrs",
  },
  {
    slug: "varanasi-to-ayodhya",
    fromCity: "Varanasi",
    toCity: "Ayodhya",
    distance: 200,
    duration: "4 - 5 hrs",
  },
  {
    slug: "varanasi-to-gaya",
    fromCity: "Varanasi",
    toCity: "Gaya",
    distance: 250,
    duration: "5 - 6 hrs",
  },
  {
    slug: "varanasi-to-vindhyachal",
    fromCity: "Varanasi",
    toCity: "Vindhyachal",
    distance: 70,
    duration: "1.5 - 2 hrs",
  },
  {
    slug: "varanasi-to-chunar",
    fromCity: "Varanasi",
    toCity: "Chunar",
    distance: 40,
    duration: "1 - 1.5 hrs",
  },
  {
    slug: "varanasi-to-jaunpur",
    fromCity: "Varanasi",
    toCity: "Jaunpur",
    distance: 60,
    duration: "1.5 - 2 hrs",
  },
  {
    slug: "varanasi-to-ghazipur",
    fromCity: "Varanasi",
    toCity: "Ghazipur",
    distance: 75,
    duration: "2 - 2.5 hrs",
  },
  {
    slug: "varanasi-to-ramnagar",
    fromCity: "Varanasi",
    toCity: "Ramnagar",
    distance: 15,
    duration: "30 - 45 min",
  },

  // --- Ayodhya Nearby Routes ---
  {
    slug: "ayodhya-to-gorakhpur",
    fromCity: "Ayodhya",
    toCity: "Gorakhpur",
    distance: 135,
    duration: "3 - 3.5 hrs",
  },
  {
    slug: "ayodhya-to-prayagraj",
    fromCity: "Ayodhya",
    toCity: "Prayagraj",
    distance: 165,
    duration: "3.5 - 4 hrs",
  },
  {
    slug: "ayodhya-to-shravasti",
    fromCity: "Ayodhya",
    toCity: "Shravasti",
    distance: 90,
    duration: "2 - 2.5 hrs",
  },
  {
    slug: "ayodhya-to-sultanpur",
    fromCity: "Ayodhya",
    toCity: "Sultanpur",
    distance: 85,
    duration: "2 - 2.5 hrs",
  },
  {
    slug: "ayodhya-to-lucknow",
    fromCity: "Ayodhya",
    toCity: "Lucknow",
    distance: 135,
    duration: "2.5 - 3 hrs",
  },
  {
    slug: "ayodhya-to-kanpur",
    fromCity: "Ayodhya",
    toCity: "Kanpur",
    distance: 200,
    duration: "4 - 4.5 hrs",
  },
  {
    slug: "ayodhya-to-naimisharanya",
    fromCity: "Ayodhya",
    toCity: "Naimisharanya",
    distance: 110,
    duration: "2.5 - 3 hrs",
  },
  {
    slug: "ayodhya-to-sitapur",
    fromCity: "Ayodhya",
    toCity: "Sitapur",
    distance: 100,
    duration: "2 - 2.5 hrs",
  },
  {
    slug: "ayodhya-to-amethi",
    fromCity: "Ayodhya",
    toCity: "Amethi",
    distance: 70,
    duration: "1.5 - 2 hrs",
  },
  {
    slug: "ayodhya-to-gonda",
    fromCity: "Ayodhya",
    toCity: "Gonda",
    distance: 60,
    duration: "1.5 hrs",
  },
  {
    slug: "ayodhya-to-chitrakoot",
    fromCity: "Ayodhya",
    toCity: "Chitrakoot",
    distance: 200,
    duration: "4.5 - 5 hrs",
  },

  // --- Delhi & Noida Expanded Routes ---
  {
    slug: "delhi-to-agra",
    fromCity: "Delhi",
    toCity: "Agra",
    distance: 230,
    duration: "4 - 4.5 hrs",
  },
  {
    slug: "delhi-to-jaipur",
    fromCity: "Delhi",
    toCity: "Jaipur",
    distance: 280,
    duration: "5 - 5.5 hrs",
  },
  {
    slug: "delhi-to-chandigarh",
    fromCity: "Delhi",
    toCity: "Chandigarh",
    distance: 250,
    duration: "4.5 - 5.5 hrs",
  },
  {
    slug: "delhi-to-dehradun",
    fromCity: "Delhi",
    toCity: "Dehradun",
    distance: 250,
    duration: "5.5 - 6.5 hrs",
  },
  {
    slug: "delhi-to-gurugram",
    fromCity: "Delhi",
    toCity: "Gurugram",
    distance: 30,
    duration: "45 min - 1.5 hrs",
  },
  {
    slug: "noida-to-rishikesh",
    fromCity: "Noida",
    toCity: "Rishikesh",
    distance: 240,
    duration: "5 - 6 hrs",
  },
  {
    slug: "noida-to-gurugram",
    fromCity: "Noida",
    toCity: "Gurugram",
    distance: 45,
    duration: "1 - 1.5 hrs",
  },
  {
    slug: "noida-to-faridabad",
    fromCity: "Noida",
    toCity: "Faridabad",
    distance: 30,
    duration: "45 min - 1 hr",
  },
];

// eee