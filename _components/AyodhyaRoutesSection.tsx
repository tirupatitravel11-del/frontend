const routes = [
    { slug: "gorakhpur-to-ayodhya", fromCity: "Gorakhpur", toCity: "Ayodhya", distance: 135, duration: "3 - 3.5 hrs" },
    { slug: "kanpur-to-ayodhya", fromCity: "Kanpur", toCity: "Ayodhya", distance: 200, duration: "4 - 4.5 hrs" },
    { slug: "patna-to-ayodhya", fromCity: "Patna", toCity: "Ayodhya", distance: 280, duration: "6 - 7 hrs" },
    { slug: "agra-to-ayodhya", fromCity: "Agra", toCity: "Ayodhya", distance: 400, duration: "7 - 8 hrs" },
    { slug: "mathura-to-ayodhya", fromCity: "Mathura", toCity: "Ayodhya", distance: 380, duration: "7 - 8 hrs" },
    { slug: "basti-to-ayodhya", fromCity: "Basti", toCity: "Ayodhya", distance: 100, duration: "2 - 2.5 hrs" },
    { slug: "gonda-to-ayodhya", fromCity: "Gonda", toCity: "Ayodhya", distance: 60, duration: "1.5 hrs" },
    { slug: "sultanpur-to-ayodhya", fromCity: "Sultanpur", toCity: "Ayodhya", distance: 85, duration: "2 - 2.5 hrs" },
    { slug: "faizabad-to-ayodhya", fromCity: "Faizabad", toCity: "Ayodhya", distance: 6, duration: "15 - 20 min" },
    { slug: "jaunpur-to-ayodhya", fromCity: "Jaunpur", toCity: "Ayodhya", distance: 170, duration: "4 - 5 hrs" },
    { slug: "pratapgarh-to-ayodhya", fromCity: "Pratapgarh", toCity: "Ayodhya", distance: 100, duration: "2.5 - 3 hrs" },
    { slug: "rae-bareli-to-ayodhya", fromCity: "Rae Bareli", toCity: "Ayodhya", distance: 130, duration: "3 - 3.5 hrs" },
    { slug: "ambedkar-nagar-to-ayodhya", fromCity: "Ambedkar Nagar", toCity: "Ayodhya", distance: 70, duration: "1.5 - 2 hrs" },
    { slug: "azamgarh-to-ayodhya", fromCity: "Azamgarh", toCity: "Ayodhya", distance: 140, duration: "3 - 4 hrs" },
    { slug: "deoria-to-ayodhya", fromCity: "Deoria", toCity: "Ayodhya", distance: 220, duration: "5 - 6 hrs" },
    { slug: "maharajganj-to-ayodhya", fromCity: "Maharajganj", toCity: "Ayodhya", distance: 240, duration: "5.5 - 6.5 hrs" },
    { slug: "bareilly-to-ayodhya", fromCity: "Bareilly", toCity: "Ayodhya", distance: 280, duration: "5.5 - 6.5 hrs" },
    { slug: "moradabad-to-ayodhya", fromCity: "Moradabad", toCity: "Ayodhya", distance: 330, duration: "6.5 - 7.5 hrs" },
    { slug: "aligarh-to-ayodhya", fromCity: "Aligarh", toCity: "Ayodhya", distance: 400, duration: "8 - 9 hrs" },
    { slug: "ghaziabad-to-ayodhya", fromCity: "Ghaziabad", toCity: "Ayodhya", distance: 550, duration: "9 - 10 hrs" },
    { slug: "noida-to-ayodhya", fromCity: "Noida", toCity: "Ayodhya", distance: 570, duration: "10 - 11 hrs" },
    { slug: "greater-noida-to-ayodhya", fromCity: "Greater Noida", toCity: "Ayodhya", distance: 580, duration: "10 - 11 hrs" },
    { slug: "meerut-to-ayodhya", fromCity: "Meerut", toCity: "Ayodhya", distance: 600, duration: "11 - 12 hrs" },
    { slug: "gaya-to-ayodhya", fromCity: "Gaya", toCity: "Ayodhya", distance: 330, duration: "7 - 8 hrs" },
    { slug: "bodh-gaya-to-ayodhya", fromCity: "Bodh Gaya", toCity: "Ayodhya", distance: 360, duration: "8 - 9 hrs" },
    { slug: "muzaffarpur-to-ayodhya", fromCity: "Muzaffarpur", toCity: "Ayodhya", distance: 320, duration: "7 - 8 hrs" },
    { slug: "darbhanga-to-ayodhya", fromCity: "Darbhanga", toCity: "Ayodhya", distance: 360, duration: "8 - 9 hrs" },
    { slug: "vrindavan-to-ayodhya", fromCity: "Vrindavan", toCity: "Ayodhya", distance: 390, duration: "7 - 8 hrs" },
    { slug: "jaipur-to-ayodhya", fromCity: "Jaipur", toCity: "Ayodhya", distance: 750, duration: "13 - 14 hrs" },
    { slug: "haridwar-to-ayodhya", fromCity: "Haridwar", toCity: "Ayodhya", distance: 680, duration: "12 - 13 hrs" },
    { slug: "rishikesh-to-ayodhya", fromCity: "Rishikesh", toCity: "Ayodhya", distance: 700, duration: "13 - 14 hrs" },
    { slug: "dehradun-to-ayodhya", fromCity: "Dehradun", toCity: "Ayodhya", distance: 720, duration: "13 - 14 hrs" },
    { slug: "jhansi-to-ayodhya", fromCity: "Jhansi", toCity: "Ayodhya", distance: 420, duration: "8 - 9 hrs" },
    { slug: "chitrakoot-to-ayodhya", fromCity: "Chitrakoot", toCity: "Ayodhya", distance: 200, duration: "4.5 - 5 hrs" },
    { slug: "shravasti-to-ayodhya", fromCity: "Shravasti", toCity: "Ayodhya", distance: 90, duration: "2 - 2.5 hrs" },
    { slug: "kolkata-to-ayodhya", fromCity: "Kolkata", toCity: "Ayodhya", distance: 650, duration: "12 - 14 hrs" },
    { slug: "ranchi-to-ayodhya", fromCity: "Ranchi", toCity: "Ayodhya", distance: 500, duration: "10 - 11 hrs" },
    { slug: "dhanbad-to-ayodhya", fromCity: "Dhanbad", toCity: "Ayodhya", distance: 420, duration: "9 - 10 hrs" },
    { slug: "jamshedpur-to-ayodhya", fromCity: "Jamshedpur", toCity: "Ayodhya", distance: 550, duration: "11 - 12 hrs" },
    { slug: "bhopal-to-ayodhya", fromCity: "Bhopal", toCity: "Ayodhya", distance: 650, duration: "12 - 13 hrs" },
    { slug: "indore-to-ayodhya", fromCity: "Indore", toCity: "Ayodhya", distance: 800, duration: "14 - 16 hrs" },
    { slug: "ujjain-to-ayodhya", fromCity: "Ujjain", toCity: "Ayodhya", distance: 750, duration: "14 - 15 hrs" },
];

export default function AyodhyaRoutesSection() {
    return (
        <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
                    Book Cab to Ayodhya from 40+ Cities
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    Choose your pickup city and book a cab to Ayodhya
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {routes.map((route) => (
                        <a
                            key={route.slug}
                            // 👇 THIS IS THE CHANGED LINE: Appends "-taxi" to the slug
                            href={`/route/${route.slug}-taxi`}
                            className="block bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md hover:border-orange-400 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-gray-900">
                                    {route.fromCity}
                                </span>
                                <span className="text-orange-500 text-xl">→</span>
                                <span className="font-semibold text-orange-600">
                                    {route.toCity}
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span>📍 {route.distance} km</span>
                                <span>🕐 {route.duration}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}