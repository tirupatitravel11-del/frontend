const routes = [
    // 1. Immediate Neighbors & Mirzapur District (0–60 km)
    { slug: "mirzapur", fromCity: "Mirzapur", toCity: "Vindhyachal", distance: 10, duration: "20 - 30 min" },
    { slug: "chunar", fromCity: "Chunar", toCity: "Vindhyachal", distance: 30, duration: "45 min - 1 hr" },
    { slug: "marihan", fromCity: "Marihan", toCity: "Vindhyachal", distance: 60, duration: "1.5 - 2 hrs" },
    { slug: "chakia", fromCity: "Chakia", toCity: "Vindhyachal", distance: 45, duration: "1 - 1.5 hrs" },
    { slug: "ahraura", fromCity: "Ahraura", toCity: "Vindhyachal", distance: 35, duration: "45 min - 1 hr" },
    { slug: "sakaldiha", fromCity: "Sakaldiha", toCity: "Vindhyachal", distance: 75, duration: "1.5 - 2 hrs" },
    { slug: "lalganj", fromCity: "Lalganj", toCity: "Vindhyachal", distance: 85, duration: "2 - 2.5 hrs" },
    { slug: "obra", fromCity: "Obra", toCity: "Vindhyachal", distance: 95, duration: "2 - 2.5 hrs" },
    { slug: "renukoot", fromCity: "Renukoot", toCity: "Vindhyachal", distance: 105, duration: "2.5 - 3 hrs" },
    { slug: "robertsganj", fromCity: "Robertsganj", toCity: "Vindhyachal", distance: 75, duration: "1.5 - 2 hrs" },
    { slug: "dudhi", fromCity: "Dudhi", toCity: "Vindhyachal", distance: 85, duration: "2 - 2.5 hrs" },
    { slug: "ghorawal", fromCity: "Ghorawal", toCity: "Vindhyachal", distance: 55, duration: "1 - 1.5 hrs" },
    { slug: "chopan", fromCity: "Chopan", toCity: "Vindhyachal", distance: 100, duration: "2.5 - 3 hrs" },
    { slug: "wyndhamganj", fromCity: "Wyndhamganj", toCity: "Vindhyachal", distance: 115, duration: "2.5 - 3 hrs" },

    // 2. Eastern UP & Varanasi Division
    { slug: "varanasi", fromCity: "Varanasi", toCity: "Vindhyachal", distance: 70, duration: "1.5 - 2 hrs" },
    { slug: "pt-deen-dayal-upadhyaya-nagar-mughalsarai-ddu", fromCity: "Pt. Deen Dayal Upadhyaya Nagar (Mughalsarai/DDU)", toCity: "Vindhyachal", distance: 50, duration: "1 - 1.5 hrs" },
    { slug: "chandauli", fromCity: "Chandauli", toCity: "Vindhyachal", distance: 60, duration: "1.5 - 2 hrs" },
    { slug: "jaunpur", fromCity: "Jaunpur", toCity: "Vindhyachal", distance: 115, duration: "2.5 - 3 hrs" },
    { slug: "machhlishahr", fromCity: "Machhlishahr", toCity: "Vindhyachal", distance: 125, duration: "3 - 3.5 hrs" },
    { slug: "mariahu", fromCity: "Mariahu", toCity: "Vindhyachal", distance: 130, duration: "3 - 3.5 hrs" },
    { slug: "shahganj", fromCity: "Shahganj", toCity: "Vindhyachal", distance: 145, duration: "3.5 - 4 hrs" },
    { slug: "ghazipur", fromCity: "Ghazipur", toCity: "Vindhyachal", distance: 125, duration: "3 - 3.5 hrs" },
    { slug: "saidpur", fromCity: "Saidpur", toCity: "Vindhyachal", distance: 115, duration: "2.5 - 3 hrs" },
    { slug: "zamania", fromCity: "Zamania", toCity: "Vindhyachal", distance: 105, duration: "2.5 - 3 hrs" },
    { slug: "ballia", fromCity: "Ballia", toCity: "Vindhyachal", distance: 185, duration: "4 - 5 hrs" },
    { slug: "mau", fromCity: "Mau", toCity: "Vindhyachal", distance: 155, duration: "3.5 - 4.5 hrs" },
    { slug: "azamgarh", fromCity: "Azamgarh", toCity: "Vindhyachal", distance: 145, duration: "3.5 - 4 hrs" },
    { slug: "deoria", fromCity: "Deoria", toCity: "Vindhyachal", distance: 205, duration: "4.5 - 5.5 hrs" },
    { slug: "gorakhpur", fromCity: "Gorakhpur", toCity: "Vindhyachal", distance: 255, duration: "5.5 - 6.5 hrs" },
    { slug: "basti", fromCity: "Basti", toCity: "Vindhyachal", distance: 225, duration: "5 - 6 hrs" },
    { slug: "ayodhya", fromCity: "Ayodhya", toCity: "Vindhyachal", distance: 235, duration: "5 - 6 hrs" },
    { slug: "sultanpur", fromCity: "Sultanpur", toCity: "Vindhyachal", distance: 185, duration: "4 - 5 hrs" },
    { slug: "amethi", fromCity: "Amethi", toCity: "Vindhyachal", distance: 165, duration: "3.5 - 4.5 hrs" },

    // 3. Central & Western UP (Lucknow, Kanpur, NCR Divisions)
    { slug: "prayagraj-allahabad", fromCity: "Prayagraj (Allahabad)", toCity: "Vindhyachal", distance: 85, duration: "2 - 2.5 hrs" },
    { slug: "kaushambi", fromCity: "Kaushambi", toCity: "Vindhyachal", distance: 105, duration: "2.5 - 3 hrs" },
    { slug: "fatehpur", fromCity: "Fatehpur", toCity: "Vindhyachal", distance: 165, duration: "3.5 - 4.5 hrs" },
    { slug: "pratapgarh", fromCity: "Pratapgarh", toCity: "Vindhyachal", distance: 135, duration: "3 - 3.5 hrs" },
    { slug: "rae-bareli", fromCity: "Rae Bareli", toCity: "Vindhyachal", distance: 185, duration: "4 - 5 hrs" },
    { slug: "lucknow", fromCity: "Lucknow", toCity: "Vindhyachal", distance: 255, duration: "5 - 6 hrs" },
    { slug: "kanpur-nagar", fromCity: "Kanpur Nagar", toCity: "Vindhyachal", distance: 285, duration: "6 - 7 hrs" },
    { slug: "unnao", fromCity: "Unnao", toCity: "Vindhyachal", distance: 275, duration: "6 - 7 hrs" },
    { slug: "hardoi", fromCity: "Hardoi", toCity: "Vindhyachal", distance: 325, duration: "7 - 8 hrs" },
    { slug: "sitapur", fromCity: "Sitapur", toCity: "Vindhyachal", distance: 355, duration: "7.5 - 8.5 hrs" },
    { slug: "agra", fromCity: "Agra", toCity: "Vindhyachal", distance: 535, duration: "9 - 10 hrs" },
    { slug: "mathura", fromCity: "Mathura", toCity: "Vindhyachal", distance: 555, duration: "10 - 11 hrs" },
    { slug: "aligarh", fromCity: "Aligarh", toCity: "Vindhyachal", distance: 585, duration: "10 - 11 hrs" },
    { slug: "hathras", fromCity: "Hathras", toCity: "Vindhyachal", distance: 565, duration: "10 - 11 hrs" },
    { slug: "bareilly", fromCity: "Bareilly", toCity: "Vindhyachal", distance: 525, duration: "9 - 10 hrs" },
    { slug: "moradabad", fromCity: "Moradabad", toCity: "Vindhyachal", distance: 605, duration: "11 - 12 hrs" },
    { slug: "rampur", fromCity: "Rampur", toCity: "Vindhyachal", distance: 625, duration: "11 - 12 hrs" },
    { slug: "delhi", fromCity: "Delhi", toCity: "Vindhyachal", distance: 755, duration: "12 - 14 hrs" },
    { slug: "noida", fromCity: "Noida", toCity: "Vindhyachal", distance: 765, duration: "13 - 15 hrs" },
    { slug: "greater-noida", fromCity: "Greater Noida", toCity: "Vindhyachal", distance: 775, duration: "13 - 15 hrs" },
    { slug: "gurugram-gurgaon", fromCity: "Gurugram (Gurgaon)", toCity: "Vindhyachal", distance: 785, duration: "13 - 15 hrs" },
    { slug: "ghaziabad", fromCity: "Ghaziabad", toCity: "Vindhyachal", distance: 755, duration: "12 - 14 hrs" },
    { slug: "haridwar", fromCity: "Haridwar", toCity: "Vindhyachal", distance: 855, duration: "14 - 16 hrs" },
    { slug: "rishikesh", fromCity: "Rishikesh", toCity: "Vindhyachal", distance: 875, duration: "15 - 17 hrs" },
    { slug: "dehradun", fromCity: "Dehradun", toCity: "Vindhyachal", distance: 905, duration: "15 - 17 hrs" },

    // 4. Bihar (Extremely High Volume Pilgrim Routes)
    { slug: "patna", fromCity: "Patna", toCity: "Vindhyachal", distance: 225, duration: "4.5 - 5.5 hrs" },
    { slug: "gaya", fromCity: "Gaya", toCity: "Vindhyachal", distance: 245, duration: "5 - 6 hrs" },
    { slug: "buxar", fromCity: "Buxar", toCity: "Vindhyachal", distance: 155, duration: "3 - 4 hrs" },
    { slug: "arrah-ara", fromCity: "Arrah (Ara)", toCity: "Vindhyachal", distance: 185, duration: "4 - 5 hrs" },
    { slug: "sasaram", fromCity: "Sasaram", toCity: "Vindhyachal", distance: 105, duration: "2 - 2.5 hrs" },
    { slug: "dehri", fromCity: "Dehri", toCity: "Vindhyachal", distance: 125, duration: "2.5 - 3 hrs" },
    { slug: "kaimur-bhabua", fromCity: "Kaimur (Bhabua)", toCity: "Vindhyachal", distance: 85, duration: "1.5 - 2 hrs" },
    { slug: "siwan", fromCity: "Siwan", toCity: "Vindhyachal", distance: 225, duration: "5 - 6 hrs" },
    { slug: "gopalganj", fromCity: "Gopalganj", toCity: "Vindhyachal", distance: 245, duration: "5.5 - 6.5 hrs" },
    { slug: "chapra-saran", fromCity: "Chapra (Saran)", toCity: "Vindhyachal", distance: 255, duration: "5.5 - 6.5 hrs" },
    { slug: "hajipur", fromCity: "Hajipur", toCity: "Vindhyachal", distance: 235, duration: "5 - 6 hrs" },
    { slug: "muzaffarpur", fromCity: "Muzaffarpur", toCity: "Vindhyachal", distance: 305, duration: "6.5 - 7.5 hrs" },
    { slug: "darbhanga", fromCity: "Darbhanga", toCity: "Vindhyachal", distance: 355, duration: "7.5 - 8.5 hrs" },
    { slug: "motihari", fromCity: "Motihari", toCity: "Vindhyachal", distance: 325, duration: "7 - 8 hrs" },
    { slug: "bettiah", fromCity: "Bettiah", toCity: "Vindhyachal", distance: 345, duration: "7.5 - 8.5 hrs" },
    { slug: "begusarai", fromCity: "Begusarai", toCity: "Vindhyachal", distance: 335, duration: "7 - 8 hrs" },
    { slug: "bhagalpur", fromCity: "Bhagalpur", toCity: "Vindhyachal", distance: 405, duration: "8.5 - 9.5 hrs" },
    { slug: "purnia", fromCity: "Purnia", toCity: "Vindhyachal", distance: 455, duration: "9 - 10 hrs" },
    { slug: "katihar", fromCity: "Katihar", toCity: "Vindhyachal", distance: 465, duration: "9.5 - 10.5 hrs" },
    { slug: "madhubani", fromCity: "Madhubani", toCity: "Vindhyachal", distance: 385, duration: "8 - 9 hrs" },
    { slug: "sitamarhi", fromCity: "Sitamarhi", toCity: "Vindhyachal", distance: 365, duration: "7.5 - 8.5 hrs" },
    { slug: "jehanabad", fromCity: "Jehanabad", toCity: "Vindhyachal", distance: 215, duration: "4.5 - 5.5 hrs" },
    { slug: "nawada", fromCity: "Nawada", toCity: "Vindhyachal", distance: 255, duration: "5.5 - 6.5 hrs" },

    // 5. Jharkhand (High Volume Pilgrim & Industrial Routes)
    { slug: "ranchi", fromCity: "Ranchi", toCity: "Vindhyachal", distance: 385, duration: "8 - 9 hrs" },
    { slug: "dhanbad", fromCity: "Dhanbad", toCity: "Vindhyachal", distance: 265, duration: "5.5 - 6.5 hrs" },
    { slug: "bokaro", fromCity: "Bokaro", toCity: "Vindhyachal", distance: 325, duration: "7 - 8 hrs" },
    { slug: "hazaribagh", fromCity: "Hazaribagh", toCity: "Vindhyachal", distance: 305, duration: "6.5 - 7.5 hrs" },
    { slug: "deoghar", fromCity: "Deoghar", toCity: "Vindhyachal", distance: 355, duration: "7.5 - 8.5 hrs" },
    { slug: "dumka", fromCity: "Dumka", toCity: "Vindhyachal", distance: 425, duration: "9 - 10 hrs" },
    { slug: "giridih", fromCity: "Giridih", toCity: "Vindhyachal", distance: 335, duration: "7 - 8 hrs" },
    { slug: "jamshedpur", fromCity: "Jamshedpur", toCity: "Vindhyachal", distance: 455, duration: "9.5 - 10.5 hrs" },
    { slug: "godda", fromCity: "Godda", toCity: "Vindhyachal", distance: 385, duration: "8 - 9 hrs" },
    { slug: "sahibganj", fromCity: "Sahibganj", toCity: "Vindhyachal", distance: 415, duration: "8.5 - 9.5 hrs" },
    { slug: "pakur", fromCity: "Pakur", toCity: "Vindhyachal", distance: 435, duration: "9 - 10 hrs" },
    { slug: "ramgarh", fromCity: "Ramgarh", toCity: "Vindhyachal", distance: 365, duration: "7.5 - 8.5 hrs" },
    { slug: "chatra", fromCity: "Chatra", toCity: "Vindhyachal", distance: 345, duration: "7 - 8 hrs" },
    { slug: "koderma", fromCity: "Koderma", toCity: "Vindhyachal", distance: 285, duration: "6 - 7 hrs" },
    { slug: "phusro", fromCity: "Phusro", toCity: "Vindhyachal", distance: 295, duration: "6 - 7 hrs" },

    // 6. Madhya Pradesh & Chhattisgarh (Direct Highway Connectivity via NH-35/NH-135)
    { slug: "rewa", fromCity: "Rewa", toCity: "Vindhyachal", distance: 185, duration: "3.5 - 4.5 hrs" },
    { slug: "satna", fromCity: "Satna", toCity: "Vindhyachal", distance: 225, duration: "4.5 - 5.5 hrs" },
    { slug: "maihar", fromCity: "Maihar", toCity: "Vindhyachal", distance: 205, duration: "4 - 5 hrs" },
    { slug: "katni", fromCity: "Katni", toCity: "Vindhyachal", distance: 285, duration: "6 - 7 hrs" },
    { slug: "jabalpur", fromCity: "Jabalpur", toCity: "Vindhyachal", distance: 385, duration: "7.5 - 8.5 hrs" },
    { slug: "singrauli", fromCity: "Singrauli", toCity: "Vindhyachal", distance: 155, duration: "3.5 - 4.5 hrs" },
    { slug: "sidhi", fromCity: "Sidhi", toCity: "Vindhyachal", distance: 205, duration: "4 - 5 hrs" },
    { slug: "chitrakoot", fromCity: "Chitrakoot", toCity: "Vindhyachal", distance: 225, duration: "4.5 - 5.5 hrs" },
    { slug: "banda", fromCity: "Banda", toCity: "Vindhyachal", distance: 255, duration: "5 - 6 hrs" },
    { slug: "naraini", fromCity: "Naraini", toCity: "Vindhyachal", distance: 245, duration: "5 - 6 hrs" },
    { slug: "gwalior", fromCity: "Gwalior", toCity: "Vindhyachal", distance: 485, duration: "9 - 10 hrs" },
    { slug: "morena", fromCity: "Morena", toCity: "Vindhyachal", distance: 505, duration: "9.5 - 10.5 hrs" },
    { slug: "bhind", fromCity: "Bhind", toCity: "Vindhyachal", distance: 455, duration: "8.5 - 9.5 hrs" },
    { slug: "raipur", fromCity: "Raipur", toCity: "Vindhyachal", distance: 555, duration: "10 - 12 hrs" },
    { slug: "bilaspur-cg", fromCity: "Bilaspur (CG)", toCity: "Vindhyachal", distance: 605, duration: "11 - 13 hrs" },
    { slug: "ambikapur", fromCity: "Ambikapur", toCity: "Vindhyachal", distance: 355, duration: "7 - 8 hrs" },
];

export default function VindhyachalRoutesSection() {
    return (
        <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
                    Book Cab to Vindhyachal from 100+ Cities
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    Choose your pickup city and book a cab to Vindhyachal
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {routes.map((route) => (
                        <a
                            key={route.slug}
                            href={`/route/${route.slug}-to-vindhyachal-taxi`}
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