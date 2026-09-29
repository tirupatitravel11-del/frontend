const routes = [
    // 1. Prayagraj & Immediate Neighbors (0–100 km)
    { slug: "kaushambi", fromCity: "Kaushambi", toCity: "Prayagraj", distance: 35, duration: "1 - 3.5 hrs" },
    { slug: "manjhanpur", fromCity: "Manjhanpur", toCity: "Prayagraj", distance: 45, duration: "1 - 3.5 hrs" },
    { slug: "sirathu", fromCity: "Sirathu", toCity: "Prayagraj", distance: 50, duration: "1 - 3.5 hrs" },
    { slug: "chail", fromCity: "Chail", toCity: "Prayagraj", distance: 55, duration: "1 - 3.5 hrs" },
    { slug: "fatehpur", fromCity: "Fatehpur", toCity: "Prayagraj", distance: 85, duration: "1 - 3.5 hrs" },
    { slug: "bindki", fromCity: "Bindki", toCity: "Prayagraj", distance: 70, duration: "1 - 3.5 hrs" },
    { slug: "khaga", fromCity: "Khaga", toCity: "Prayagraj", distance: 90, duration: "1 - 3.5 hrs" },
    { slug: "pratapgarh", fromCity: "Pratapgarh", toCity: "Prayagraj", distance: 90, duration: "1 - 3.5 hrs" },
    { slug: "patti", fromCity: "Patti", toCity: "Prayagraj", distance: 75, duration: "1 - 3.5 hrs" },
    { slug: "raniganj", fromCity: "Raniganj", toCity: "Prayagraj", distance: 65, duration: "1 - 3.5 hrs" },
    { slug: "lalganj", fromCity: "Lalganj", toCity: "Prayagraj", distance: 80, duration: "1 - 3.5 hrs" },
    { slug: "rae-bareli", fromCity: "Rae Bareli", toCity: "Prayagraj", distance: 110, duration: "1 - 3.5 hrs" },
    { slug: "unchahar", fromCity: "Unchahar", toCity: "Prayagraj", distance: 95, duration: "1 - 3.5 hrs" },
    { slug: "salon", fromCity: "Salon", toCity: "Prayagraj", distance: 100, duration: "1 - 3.5 hrs" },
    { slug: "jaunpur", fromCity: "Jaunpur", toCity: "Prayagraj", distance: 90, duration: "1 - 3.5 hrs" },
    { slug: "machhlishahr", fromCity: "Machhlishahr", toCity: "Prayagraj", distance: 100, duration: "1 - 3.5 hrs" },
    { slug: "mariahu", fromCity: "Mariahu", toCity: "Prayagraj", distance: 110, duration: "1 - 3.5 hrs" },
    { slug: "kerakat", fromCity: "Kerakat", toCity: "Prayagraj", distance: 120, duration: "1 - 3.5 hrs" },
    { slug: "shahganj", fromCity: "Shahganj", toCity: "Prayagraj", distance: 130, duration: "1 - 3.5 hrs" },
    { slug: "mirzapur", fromCity: "Mirzapur", toCity: "Prayagraj", distance: 85, duration: "1 - 3.5 hrs" },
    { slug: "vindhyachal", fromCity: "Vindhyachal", toCity: "Prayagraj", distance: 85, duration: "1 - 3.5 hrs" },
    { slug: "chunar", fromCity: "Chunar", toCity: "Prayagraj", distance: 100, duration: "1 - 3.5 hrs" },
    { slug: "pt-deen-dayal-upadhyaya-nagar-mughalsarai", fromCity: "Pt. Deen Dayal Upadhyaya Nagar (Mughalsarai)", toCity: "Prayagraj", distance: 120, duration: "1 - 3.5 hrs" },
    { slug: "chitrakoot", fromCity: "Chitrakoot", toCity: "Prayagraj", distance: 130, duration: "1 - 3.5 hrs" },
    { slug: "karwi", fromCity: "Karwi", toCity: "Prayagraj", distance: 140, duration: "1 - 3.5 hrs" },
    { slug: "manikpur", fromCity: "Manikpur", toCity: "Prayagraj", distance: 150, duration: "1 - 3.5 hrs" },
    { slug: "banda", fromCity: "Banda", toCity: "Prayagraj", distance: 140, duration: "1 - 3.5 hrs" },
    { slug: "naraini", fromCity: "Naraini", toCity: "Prayagraj", distance: 120, duration: "1 - 3.5 hrs" },

    // 2. Eastern & Central UP (Varanasi, Gorakhpur, Azamgarh, Ayodhya, Lucknow Belt)
    { slug: "varanasi", fromCity: "Varanasi", toCity: "Prayagraj", distance: 120, duration: "2 - 6 hrs" },
    { slug: "ghazipur", fromCity: "Ghazipur", toCity: "Prayagraj", distance: 150, duration: "2 - 6 hrs" },
    { slug: "ballia", fromCity: "Ballia", toCity: "Prayagraj", distance: 210, duration: "2 - 6 hrs" },
    { slug: "mau", fromCity: "Mau", toCity: "Prayagraj", distance: 190, duration: "2 - 6 hrs" },
    { slug: "azamgarh", fromCity: "Azamgarh", toCity: "Prayagraj", distance: 170, duration: "2 - 6 hrs" },
    { slug: "deoria", fromCity: "Deoria", toCity: "Prayagraj", distance: 260, duration: "2 - 6 hrs" },
    { slug: "gorakhpur", fromCity: "Gorakhpur", toCity: "Prayagraj", distance: 280, duration: "2 - 6 hrs" },
    { slug: "basti", fromCity: "Basti", toCity: "Prayagraj", distance: 260, duration: "2 - 6 hrs" },
    { slug: "ayodhya", fromCity: "Ayodhya", toCity: "Prayagraj", distance: 165, duration: "2 - 6 hrs" },
    { slug: "sultanpur", fromCity: "Sultanpur", toCity: "Prayagraj", distance: 110, duration: "2 - 6 hrs" },
    { slug: "amethi", fromCity: "Amethi", toCity: "Prayagraj", distance: 90, duration: "2 - 6 hrs" },
    { slug: "gauriganj", fromCity: "Gauriganj", toCity: "Prayagraj", distance: 130, duration: "2 - 6 hrs" },
    { slug: "ambedkar-nagar", fromCity: "Ambedkar Nagar", toCity: "Prayagraj", distance: 190, duration: "2 - 6 hrs" },
    { slug: "barabanki", fromCity: "Barabanki", toCity: "Prayagraj", distance: 200, duration: "2 - 6 hrs" },
    { slug: "lucknow", fromCity: "Lucknow", toCity: "Prayagraj", distance: 200, duration: "2 - 6 hrs" },
    { slug: "sitapur", fromCity: "Sitapur", toCity: "Prayagraj", distance: 290, duration: "2 - 6 hrs" },
    { slug: "hardoi", fromCity: "Hardoi", toCity: "Prayagraj", distance: 300, duration: "2 - 6 hrs" },
    { slug: "kanpur-nagar", fromCity: "Kanpur Nagar", toCity: "Prayagraj", distance: 190, duration: "2 - 6 hrs" },
    { slug: "kanpur-dehat", fromCity: "Kanpur Dehat", toCity: "Prayagraj", distance: 210, duration: "2 - 6 hrs" },
    { slug: "unnao", fromCity: "Unnao", toCity: "Prayagraj", distance: 230, duration: "2 - 6 hrs" },

    // 3. Western & Northern UP (Agra, Bareilly, NCR, Meerut Divisions)
    { slug: "delhi", fromCity: "Delhi", toCity: "Prayagraj", distance: 650, duration: "5 - 14 hrs" },
    { slug: "noida", fromCity: "Noida", toCity: "Prayagraj", distance: 660, duration: "5 - 14 hrs" },
    { slug: "greater-noida", fromCity: "Greater Noida", toCity: "Prayagraj", distance: 670, duration: "5 - 14 hrs" },
    { slug: "gurugram-gurgaon", fromCity: "Gurugram (Gurgaon)", toCity: "Prayagraj", distance: 680, duration: "5 - 14 hrs" },
    { slug: "faridabad", fromCity: "Faridabad", toCity: "Prayagraj", distance: 670, duration: "5 - 14 hrs" },
    { slug: "ghaziabad", fromCity: "Ghaziabad", toCity: "Prayagraj", distance: 660, duration: "5 - 14 hrs" },
    { slug: "agra", fromCity: "Agra", toCity: "Prayagraj", distance: 420, duration: "5 - 14 hrs" },
    { slug: "mathura", fromCity: "Mathura", toCity: "Prayagraj", distance: 440, duration: "5 - 14 hrs" },
    { slug: "aligarh", fromCity: "Aligarh", toCity: "Prayagraj", distance: 380, duration: "5 - 14 hrs" },
    { slug: "hathras", fromCity: "Hathras", toCity: "Prayagraj", distance: 360, duration: "5 - 14 hrs" },
    { slug: "kasganj", fromCity: "Kasganj", toCity: "Prayagraj", distance: 340, duration: "5 - 14 hrs" },
    { slug: "farrukhabad", fromCity: "Farrukhabad", toCity: "Prayagraj", distance: 280, duration: "5 - 14 hrs" },
    { slug: "kannauj", fromCity: "Kannauj", toCity: "Prayagraj", distance: 260, duration: "5 - 14 hrs" },
    { slug: "mainpuri", fromCity: "Mainpuri", toCity: "Prayagraj", distance: 300, duration: "5 - 14 hrs" },
    { slug: "etawah", fromCity: "Etawah", toCity: "Prayagraj", distance: 320, duration: "5 - 14 hrs" },
    { slug: "auraiya", fromCity: "Auraiya", toCity: "Prayagraj", distance: 250, duration: "5 - 14 hrs" },
    { slug: "bareilly", fromCity: "Bareilly", toCity: "Prayagraj", distance: 350, duration: "5 - 14 hrs" },
    { slug: "budaun", fromCity: "Budaun", toCity: "Prayagraj", distance: 370, duration: "5 - 14 hrs" },
    { slug: "moradabad", fromCity: "Moradabad", toCity: "Prayagraj", distance: 400, duration: "5 - 14 hrs" },
    { slug: "rampur", fromCity: "Rampur", toCity: "Prayagraj", distance: 420, duration: "5 - 14 hrs" },
    { slug: "sambhal", fromCity: "Sambhal", toCity: "Prayagraj", distance: 380, duration: "5 - 14 hrs" },
    { slug: "amroha", fromCity: "Amroha", toCity: "Prayagraj", distance: 410, duration: "5 - 14 hrs" },
    { slug: "meerut", fromCity: "Meerut", toCity: "Prayagraj", distance: 550, duration: "5 - 14 hrs" },
    { slug: "hapur", fromCity: "Hapur", toCity: "Prayagraj", distance: 560, duration: "5 - 14 hrs" },
    { slug: "bulandshahr", fromCity: "Bulandshahr", toCity: "Prayagraj", distance: 540, duration: "5 - 14 hrs" },
    { slug: "muzaffarnagar", fromCity: "Muzaffarnagar", toCity: "Prayagraj", distance: 600, duration: "5 - 14 hrs" },
    { slug: "saharanpur", fromCity: "Saharanpur", toCity: "Prayagraj", distance: 650, duration: "5 - 14 hrs" },
    { slug: "roorkee", fromCity: "Roorkee", toCity: "Prayagraj", distance: 670, duration: "5 - 14 hrs" },
    { slug: "haridwar", fromCity: "Haridwar", toCity: "Prayagraj", distance: 690, duration: "5 - 14 hrs" },
    { slug: "dehradun", fromCity: "Dehradun", toCity: "Prayagraj", distance: 710, duration: "5 - 14 hrs" },

    // 4. Bundelkhand & Madhya Pradesh Border
    { slug: "jhansi", fromCity: "Jhansi", toCity: "Prayagraj", distance: 280, duration: "3.5 - 8 hrs" },
    { slug: "lalitpur", fromCity: "Lalitpur", toCity: "Prayagraj", distance: 320, duration: "3.5 - 8 hrs" },
    { slug: "mahoba", fromCity: "Mahoba", toCity: "Prayagraj", distance: 250, duration: "3.5 - 8 hrs" },
    { slug: "charkhari", fromCity: "Charkhari", toCity: "Prayagraj", distance: 230, duration: "3.5 - 8 hrs" },
    { slug: "hamirpur", fromCity: "Hamirpur", toCity: "Prayagraj", distance: 180, duration: "3.5 - 8 hrs" },
    { slug: "rath", fromCity: "Rath", toCity: "Prayagraj", distance: 200, duration: "3.5 - 8 hrs" },
    { slug: "satna", fromCity: "Satna", toCity: "Prayagraj", distance: 170, duration: "3.5 - 8 hrs" },
    { slug: "rewa", fromCity: "Rewa", toCity: "Prayagraj", distance: 210, duration: "3.5 - 8 hrs" },
    { slug: "maihar", fromCity: "Maihar", toCity: "Prayagraj", distance: 190, duration: "3.5 - 8 hrs" },
    { slug: "katni", fromCity: "Katni", toCity: "Prayagraj", distance: 250, duration: "3.5 - 8 hrs" },
    { slug: "jabalpur", fromCity: "Jabalpur", toCity: "Prayagraj", distance: 300, duration: "3.5 - 8 hrs" },
    { slug: "singrauli", fromCity: "Singrauli", toCity: "Prayagraj", distance: 280, duration: "3.5 - 8 hrs" },
    { slug: "sidhi", fromCity: "Sidhi", toCity: "Prayagraj", distance: 300, duration: "3.5 - 8 hrs" },
    { slug: "gwalior", fromCity: "Gwalior", toCity: "Prayagraj", distance: 380, duration: "3.5 - 8 hrs" },
    { slug: "morena", fromCity: "Morena", toCity: "Prayagraj", distance: 400, duration: "3.5 - 8 hrs" },
    { slug: "bhind", fromCity: "Bhind", toCity: "Prayagraj", distance: 390, duration: "3.5 - 8 hrs" },
    { slug: "shivpuri", fromCity: "Shivpuri", toCity: "Prayagraj", distance: 420, duration: "3.5 - 8 hrs" },

    // 5. Bihar (High Volume Cross-Border Routes)
    { slug: "patna", fromCity: "Patna", toCity: "Prayagraj", distance: 330, duration: "4 - 10 hrs" },
    { slug: "gaya", fromCity: "Gaya", toCity: "Prayagraj", distance: 380, duration: "4 - 10 hrs" },
    { slug: "buxar", fromCity: "Buxar", toCity: "Prayagraj", distance: 200, duration: "4 - 10 hrs" },
    { slug: "arrah-ara", fromCity: "Arrah (Ara)", toCity: "Prayagraj", distance: 250, duration: "4 - 10 hrs" },
    { slug: "sasaram", fromCity: "Sasaram", toCity: "Prayagraj", distance: 230, duration: "4 - 10 hrs" },
    { slug: "dehri", fromCity: "Dehri", toCity: "Prayagraj", distance: 240, duration: "4 - 10 hrs" },
    { slug: "kaimur-bhabua", fromCity: "Kaimur (Bhabua)", toCity: "Prayagraj", distance: 210, duration: "4 - 10 hrs" },
    { slug: "siwan", fromCity: "Siwan", toCity: "Prayagraj", distance: 280, duration: "4 - 10 hrs" },
    { slug: "gopalganj", fromCity: "Gopalganj", toCity: "Prayagraj", distance: 310, duration: "4 - 10 hrs" },
    { slug: "muzaffarpur", fromCity: "Muzaffarpur", toCity: "Prayagraj", distance: 400, duration: "4 - 10 hrs" },
    { slug: "darbhanga", fromCity: "Darbhanga", toCity: "Prayagraj", distance: 430, duration: "4 - 10 hrs" },
    { slug: "motihari", fromCity: "Motihari", toCity: "Prayagraj", distance: 410, duration: "4 - 10 hrs" },
    { slug: "bettiah", fromCity: "Bettiah", toCity: "Prayagraj", distance: 440, duration: "4 - 10 hrs" },
    { slug: "chapra-saran", fromCity: "Chapra (Saran)", toCity: "Prayagraj", distance: 300, duration: "4 - 10 hrs" },
    { slug: "hajipur", fromCity: "Hajipur", toCity: "Prayagraj", distance: 340, duration: "4 - 10 hrs" },
    { slug: "begusarai", fromCity: "Begusarai", toCity: "Prayagraj", distance: 360, duration: "4 - 10 hrs" },
    { slug: "bhagalpur", fromCity: "Bhagalpur", toCity: "Prayagraj", distance: 430, duration: "4 - 10 hrs" },
    { slug: "purnia", fromCity: "Purnia", toCity: "Prayagraj", distance: 500, duration: "4 - 10 hrs" },
    { slug: "katihar", fromCity: "Katihar", toCity: "Prayagraj", distance: 510, duration: "4 - 10 hrs" },
    { slug: "madhubani", fromCity: "Madhubani", toCity: "Prayagraj", distance: 460, duration: "4 - 10 hrs" },
    { slug: "sitamarhi", fromCity: "Sitamarhi", toCity: "Prayagraj", distance: 470, duration: "4 - 10 hrs" },
    { slug: "jehanabad", fromCity: "Jehanabad", toCity: "Prayagraj", distance: 350, duration: "4 - 10 hrs" },
    { slug: "nawada", fromCity: "Nawada", toCity: "Prayagraj", distance: 370, duration: "4 - 10 hrs" },

    // 6. Jharkhand (Industrial, Mining & Pilgrimage Routes)
    { slug: "ranchi", fromCity: "Ranchi", toCity: "Prayagraj", distance: 450, duration: "7 - 10 hrs" },
    { slug: "dhanbad", fromCity: "Dhanbad", toCity: "Prayagraj", distance: 380, duration: "7 - 10 hrs" },
    { slug: "bokaro", fromCity: "Bokaro", toCity: "Prayagraj", distance: 400, duration: "7 - 10 hrs" },
    { slug: "hazaribagh", fromCity: "Hazaribagh", toCity: "Prayagraj", distance: 420, duration: "7 - 10 hrs" },
    { slug: "deoghar", fromCity: "Deoghar", toCity: "Prayagraj", distance: 380, duration: "7 - 10 hrs" },
    { slug: "dumka", fromCity: "Dumka", toCity: "Prayagraj", distance: 430, duration: "7 - 10 hrs" },
    { slug: "giridih", fromCity: "Giridih", toCity: "Prayagraj", distance: 400, duration: "7 - 10 hrs" },
    { slug: "jamshedpur", fromCity: "Jamshedpur", toCity: "Prayagraj", distance: 480, duration: "7 - 10 hrs" },
    { slug: "godda", fromCity: "Godda", toCity: "Prayagraj", distance: 460, duration: "7 - 10 hrs" },
    { slug: "sahibganj", fromCity: "Sahibganj", toCity: "Prayagraj", distance: 470, duration: "7 - 10 hrs" },
    { slug: "pakur", fromCity: "Pakur", toCity: "Prayagraj", distance: 480, duration: "7 - 10 hrs" },
    { slug: "ramgarh", fromCity: "Ramgarh", toCity: "Prayagraj", distance: 410, duration: "7 - 10 hrs" },
    { slug: "chatra", fromCity: "Chatra", toCity: "Prayagraj", distance: 430, duration: "7 - 10 hrs" },
    { slug: "koderma", fromCity: "Koderma", toCity: "Prayagraj", distance: 390, duration: "7 - 10 hrs" },
    { slug: "phusro", fromCity: "Phusro", toCity: "Prayagraj", distance: 370, duration: "7 - 10 hrs" },
];

export default function PrayagrajRoutesSection() {
    return (
        <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
                    Book Cab to Prayagraj from 120+ Cities
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    Choose your pickup city and book a cab to Prayagraj
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {routes.map((route) => (
                        <a
                            key={route.slug}
                            href={`/route/${route.slug}-to-prayagraj-taxi`}
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