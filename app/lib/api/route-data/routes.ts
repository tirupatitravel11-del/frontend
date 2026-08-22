export type Route = {
  slug: string;
  fromCity: string;
  toCity: string;
  distance: number;
  duration: string;
};

export const ROUTES: Route[] = [
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
];