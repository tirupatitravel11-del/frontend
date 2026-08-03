// app/constants/hotels.ts

export interface Hotel {
  id: number;
  name: string;
  slug: string;
  city: string;
  location: string;
  image: string;
  rating: number;
  ratingText: string;
  reviews: number;
  oldPrice: number;
  price: number;
  amenities: string[];
  description: string;
}

export const hotels: Hotel[] = [
  // =========================
  // DELHI HOTELS
  // =========================

  {
    id: 1,
    name: "Hotel The Royal Plaza",
    slug: "hotel-the-royal-plaza",
    city: "delhi",
    location: "Connaught Place, Delhi",
    image: "/hotels/royal_hotel_plaza_delhi.jpg",
    rating: 3.4,
    ratingText: "Good",
    reviews: 12494,
    oldPrice: 8480,
    price: 7208,
    amenities: ["Free Cancellation", "Couple Friendly", "Breakfast Included"],
    description:
      "Hotel The Royal Plaza offers a comfortable stay in the heart of Delhi. The hotel is conveniently located near Connaught Place and several popular tourist attractions.",
  },

  {
    id: 2,
    name: "The Grand Delhi Hotel",
    slug: "the-grand-delhi-hotel",
    city: "delhi",
    location: "Aerocity, Delhi",
    image: "/hotels/Grand_delhi.jpg",
    rating: 4.0,
    ratingText: "Very Good",
    reviews: 8240,
    oldPrice: 7200,
    price: 5800,
    amenities: ["Free Cancellation", "Swimming Pool", "Breakfast Included"],
    description:
      "The Grand Delhi Hotel is a modern hotel located in Aerocity, offering comfortable rooms, excellent facilities and convenient access to Delhi Airport.",
  },

  {
    id: 3,
    name: "Hotel City Palace",
    slug: "hotel-city-palace",
    city: "delhi",
    location: "Karol Bagh, Delhi",
    image: "/hotels/Hotel_city_palace_delhi.jpg",
    rating: 4.2,
    ratingText: "Very Good",
    reviews: 6320,
    oldPrice: 6500,
    price: 4999,
    amenities: ["Free WiFi", "Parking", "Couple Friendly"],
    description:
      "Hotel City Palace provides a convenient and comfortable stay in Karol Bagh, Delhi, with easy access to shopping areas, restaurants and local attractions.",
  },

  {
    id: 8,
    name: "The Imperial Delhi",
    slug: "the-imperial-delhi",
    city: "delhi",
    location: "Janpath, New Delhi",
    image: "/hotels/Imperial_delhi.jpg",
    rating: 4.6,
    ratingText: "Excellent",
    reviews: 9870,
    oldPrice: 12000,
    price: 9500,
    amenities: ["Free Cancellation", "Swimming Pool", "Breakfast Included"],
    description:
      "The Imperial Delhi offers a premium stay in central Delhi with elegant rooms, excellent hospitality and easy access to major attractions.",
  },

  {
    id: 9,
    name: "Hotel Ashoka Palace",
    slug: "hotel-ashoka-palace",
    city: "delhi",
    location: "Chanakyapuri, Delhi",
    image: "/hotels/ashoka_delhi.avif",
    rating: 4.3,
    ratingText: "Very Good",
    reviews: 6340,
    oldPrice: 8500,
    price: 6900,
    amenities: ["Free WiFi", "Parking", "Breakfast Included"],
    description:
      "Hotel Ashoka Palace offers a comfortable and relaxing stay in Chanakyapuri, one of Delhi's prominent areas.",
  },

  {
    id: 10,
    name: "The Metropolitan Hotel",
    slug: "the-metropolitan-hotel",
    city: "delhi",
    location: "Connaught Place, New Delhi",
    image: "/hotels/metropolitan_delhi.jpg",
    rating: 4.2,
    ratingText: "Very Good",
    reviews: 7520,
    oldPrice: 7800,
    price: 6100,
    amenities: ["Free Cancellation", "Free WiFi", "Couple Friendly"],
    description:
      "The Metropolitan Hotel provides modern accommodation in central Delhi, close to shopping, business and entertainment destinations.",
  },

  {
    id: 11,
    name: "Hotel Blue Star Delhi",
    slug: "hotel-blue-star-delhi",
    city: "delhi",
    location: "Karol Bagh, Delhi",
    image: "/Blue_star_delhi.jpg",
    rating: 3.9,
    ratingText: "Good",
    reviews: 4380,
    oldPrice: 5200,
    price: 3999,
    amenities: ["Free WiFi", "Parking", "Free Cancellation"],
    description:
      "Hotel Blue Star Delhi is a budget-friendly accommodation option in Karol Bagh with convenient access to local markets and transportation.",
  },

  // =========================
  // MUMBAI HOTELS
  // =========================

  {
    id: 4,
    name: "The Grand Mumbai",
    slug: "the-grand-mumbai",
    city: "mumbai",
    location: "Andheri West, Mumbai",
    image: "/hotels/grand-hotel-mumbai.jpg",
    rating: 4.5,
    ratingText: "Excellent",
    reviews: 8450,
    oldPrice: 7500,
    price: 6200,
    amenities: ["Free WiFi", "Swimming Pool", "Free Cancellation"],
    description:
      "The Grand Mumbai offers a premium stay in Andheri West with modern rooms, excellent facilities and convenient connectivity across Mumbai.",
  },

  {
    id: 5,
    name: "Mumbai Palace Hotel",
    slug: "mumbai-palace-hotel",
    city: "mumbai",
    location: "Colaba, Mumbai",
    image: "/images/hotels/hotel-5.jpg",
    rating: 4.1,
    ratingText: "Very Good",
    reviews: 5210,
    oldPrice: 6800,
    price: 5400,
    amenities: ["Breakfast Included", "Parking", "Free Cancellation"],
    description:
      "Mumbai Palace Hotel offers a comfortable stay in Colaba, close to popular attractions, restaurants and shopping destinations.",
  },

  {
    id: 12,
    name: "The Taj Mumbai",
    slug: "the-taj-mumbai",
    city: "mumbai",
    location: "Colaba, Mumbai",
    image: "/hotels/Taj_hotel.avif",
    rating: 4.7,
    ratingText: "Excellent",
    reviews: 12450,
    oldPrice: 15000,
    price: 12500,
    amenities: ["Swimming Pool", "Breakfast Included", "Free Cancellation"],
    description:
      "The Taj Mumbai offers a luxurious stay in Colaba with premium facilities, excellent dining options and easy access to iconic Mumbai attractions.",
  },

  {
    id: 13,
    name: "Marine Drive Hotel",
    slug: "marine-drive-hotel",
    city: "mumbai",
    location: "Marine Drive, Mumbai",
    image: "/Marine_drive_hotel.jpg",
    rating: 4.4,
    ratingText: "Excellent",
    reviews: 8340,
    oldPrice: 9000,
    price: 7200,
    amenities: ["Free WiFi", "Breakfast Included", "Sea View"],
    description:
      "Marine Drive Hotel provides a comfortable stay near Mumbai's famous Marine Drive with convenient access to the city's major attractions.",
  },

  {
    id: 14,
    name: "The Orchid Mumbai",
    slug: "the-orchid-mumbai",
    city: "mumbai",
    location: "Vile Parle, Mumbai",
    image: "/hotels/Orchid_mumbai.webp",
    rating: 4.2,
    ratingText: "Very Good",
    reviews: 6720,
    oldPrice: 7500,
    price: 5900,
    amenities: ["Swimming Pool", "Free Cancellation", "Parking"],
    description:
      "The Orchid Mumbai offers a comfortable stay in Vile Parle with modern amenities and convenient access to Mumbai Airport.",
  },

  {
    id: 15,
    name: "Mumbai Central Hotel",
    slug: "mumbai-central-hotel",
    city: "mumbai",
    location: "Mumbai Central, Mumbai",
    image: "/hotels/Central_mumbai.jpg",
    rating: 4.0,
    ratingText: "Very Good",
    reviews: 5210,
    oldPrice: 6200,
    price: 4800,
    amenities: ["Free WiFi", "Parking", "Couple Friendly"],
    description:
      "Mumbai Central Hotel offers convenient accommodation in Mumbai Central with easy access to transportation, shopping and business areas.",
  },

  // =========================
  // PUNE HOTELS
  // =========================

  {
    id: 6,
    name: "Royal Pune Hotel",
    slug: "royal-pune-hotel",
    city: "pune",
    location: "Koregaon Park, Pune",
    image: "/images/hotels/hotel-6.jpg",
    rating: 4.3,
    ratingText: "Very Good",
    reviews: 4210,
    oldPrice: 6000,
    price: 4800,
    amenities: ["Free WiFi", "Breakfast Included", "Parking"],
    description:
      "Royal Pune Hotel offers a comfortable stay in Koregaon Park with convenient access to restaurants, shopping and popular attractions.",
  },

  {
    id: 7,
    name: "Pune Grand Resort",
    slug: "pune-grand-resort",
    city: "pune",
    location: "Viman Nagar, Pune",
    image: "/images/hotels/hotel-7.jpg",
    rating: 4.0,
    ratingText: "Very Good",
    reviews: 3210,
    oldPrice: 5500,
    price: 4200,
    amenities: ["Swimming Pool", "Free Cancellation", "Parking"],
    description:
      "Pune Grand Resort provides a relaxing stay in Viman Nagar with modern facilities and convenient access to Pune Airport and nearby attractions.",
  },
];
