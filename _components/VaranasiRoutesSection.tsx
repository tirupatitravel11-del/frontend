const routes = [
    // 1. Varanasi & Immediate Neighbors (0–100 km)
    { slug: "chandauli", fromCity: "Chandauli", toCity: "Varanasi", distance: 40, duration: "0.5 - 2.5 hrs" },
    { slug: "mirzapur", fromCity: "Mirzapur", toCity: "Varanasi", distance: 60, duration: "0.5 - 2.5 hrs" },
    { slug: "jaunpur", fromCity: "Jaunpur", toCity: "Varanasi", distance: 60, duration: "0.5 - 2.5 hrs" },
    { slug: "ghazipur", fromCity: "Ghazipur", toCity: "Varanasi", distance: 70, duration: "0.5 - 2.5 hrs" },
    { slug: "bhadohi-sant-ravidas-nagar", fromCity: "Bhadohi (Sant Ravidas Nagar)", toCity: "Varanasi", distance: 45, duration: "0.5 - 2.5 hrs" },
    { slug: "gyanpur", fromCity: "Gyanpur", toCity: "Varanasi", distance: 50, duration: "0.5 - 2.5 hrs" },
    { slug: "pt-deen-dayal-upadhyaya-nagar-mughalsarai", fromCity: "Pt. Deen Dayal Upadhyaya Nagar (Mughalsarai)", toCity: "Varanasi", distance: 20, duration: "0.5 - 2.5 hrs" },
    { slug: "chunar", fromCity: "Chunar", toCity: "Varanasi", distance: 40, duration: "0.5 - 2.5 hrs" },
    { slug: "vindhyachal", fromCity: "Vindhyachal", toCity: "Varanasi", distance: 70, duration: "0.5 - 2.5 hrs" },
    { slug: "saidpur", fromCity: "Saidpur", toCity: "Varanasi", distance: 85, duration: "0.5 - 2.5 hrs" },
    { slug: "zamania", fromCity: "Zamania", toCity: "Varanasi", distance: 90, duration: "0.5 - 2.5 hrs" },
    { slug: "mohammadabad", fromCity: "Mohammadabad", toCity: "Varanasi", distance: 80, duration: "0.5 - 2.5 hrs" },
    { slug: "jakhania", fromCity: "Jakhania", toCity: "Varanasi", distance: 95, duration: "0.5 - 2.5 hrs" },
    { slug: "machhlishahr", fromCity: "Machhlishahr", toCity: "Varanasi", distance: 75, duration: "0.5 - 2.5 hrs" },
    { slug: "mariahu", fromCity: "Mariahu", toCity: "Varanasi", distance: 85, duration: "0.5 - 2.5 hrs" },
    { slug: "kerakat", fromCity: "Kerakat", toCity: "Varanasi", distance: 90, duration: "0.5 - 2.5 hrs" },
    { slug: "shahganj", fromCity: "Shahganj", toCity: "Varanasi", distance: 95, duration: "0.5 - 2.5 hrs" },
    { slug: "marihan", fromCity: "Marihan", toCity: "Varanasi", distance: 80, duration: "0.5 - 2.5 hrs" },
    { slug: "chakia", fromCity: "Chakia", toCity: "Varanasi", distance: 50, duration: "0.5 - 2.5 hrs" },
    { slug: "sakaldiha", fromCity: "Sakaldiha", toCity: "Varanasi", distance: 65, duration: "0.5 - 2.5 hrs" },
    { slug: "ahraura", fromCity: "Ahraura", toCity: "Varanasi", distance: 75, duration: "0.5 - 2.5 hrs" },
    { slug: "lalganj", fromCity: "Lalganj", toCity: "Varanasi", distance: 95, duration: "0.5 - 2.5 hrs" },
    { slug: "rasra", fromCity: "Rasra", toCity: "Varanasi", distance: 90, duration: "0.5 - 2.5 hrs" },
    { slug: "belthara-road", fromCity: "Belthara Road", toCity: "Varanasi", distance: 95, duration: "0.5 - 2.5 hrs" },
    { slug: "bansdih", fromCity: "Bansdih", toCity: "Varanasi", distance: 100, duration: "0.5 - 2.5 hrs" },
    { slug: "sikanderpur", fromCity: "Sikanderpur", toCity: "Varanasi", distance: 85, duration: "0.5 - 2.5 hrs" },
    { slug: "dildarnagar", fromCity: "Dildarnagar", toCity: "Varanasi", distance: 80, duration: "0.5 - 2.5 hrs" },

    // 2. Eastern & Central UP (Prayagraj, Gorakhpur, Azamgarh, Ballia Belt)
    { slug: "prayagraj-allahabad", fromCity: "Prayagraj (Allahabad)", toCity: "Varanasi", distance: 120, duration: "2.5 - 7 hrs" },
    { slug: "lucknow", fromCity: "Lucknow", toCity: "Varanasi", distance: 280, duration: "2.5 - 7 hrs" },
    { slug: "kanpur-nagar", fromCity: "Kanpur Nagar", toCity: "Varanasi", distance: 320, duration: "2.5 - 7 hrs" },
    { slug: "gorakhpur", fromCity: "Gorakhpur", toCity: "Varanasi", distance: 200, duration: "2.5 - 7 hrs" },
    { slug: "azamgarh", fromCity: "Azamgarh", toCity: "Varanasi", distance: 170, duration: "2.5 - 7 hrs" },
    { slug: "mau-mau-nath-bhanjan", fromCity: "Mau (Mau Nath Bhanjan)", toCity: "Varanasi", distance: 110, duration: "2.5 - 7 hrs" },
    { slug: "ballia", fromCity: "Ballia", toCity: "Varanasi", distance: 140, duration: "2.5 - 7 hrs" },
    { slug: "deoria", fromCity: "Deoria", toCity: "Varanasi", distance: 180, duration: "2.5 - 7 hrs" },
    { slug: "basti", fromCity: "Basti", toCity: "Varanasi", distance: 220, duration: "2.5 - 7 hrs" },
    { slug: "ayodhya-faizabad", fromCity: "Ayodhya (Faizabad)", toCity: "Varanasi", distance: 210, duration: "2.5 - 7 hrs" },
    { slug: "sultanpur", fromCity: "Sultanpur", toCity: "Varanasi", distance: 160, duration: "2.5 - 7 hrs" },
    { slug: "ambedkar-nagar-akbarpur-tanda", fromCity: "Ambedkar Nagar (Akbarpur/Tanda)", toCity: "Varanasi", distance: 190, duration: "2.5 - 7 hrs" },
    { slug: "pratapgarh", fromCity: "Pratapgarh", toCity: "Varanasi", distance: 150, duration: "2.5 - 7 hrs" },
    { slug: "raebareli", fromCity: "Raebareli", toCity: "Varanasi", distance: 230, duration: "2.5 - 7 hrs" },
    { slug: "unnao", fromCity: "Unnao", toCity: "Varanasi", distance: 290, duration: "2.5 - 7 hrs" },
    { slug: "sitapur", fromCity: "Sitapur", toCity: "Varanasi", distance: 320, duration: "2.5 - 7 hrs" },
    { slug: "hardoi", fromCity: "Hardoi", toCity: "Varanasi", distance: 340, duration: "2.5 - 7 hrs" },
    { slug: "farrukhabad", fromCity: "Farrukhabad", toCity: "Varanasi", distance: 380, duration: "2.5 - 7 hrs" },
    { slug: "mainpuri", fromCity: "Mainpuri", toCity: "Varanasi", distance: 400, duration: "2.5 - 7 hrs" },
    { slug: "etawah", fromCity: "Etawah", toCity: "Varanasi", distance: 420, duration: "2.5 - 7 hrs" },
    { slug: "kannauj", fromCity: "Kannauj", toCity: "Varanasi", distance: 390, duration: "2.5 - 7 hrs" },
    { slug: "barabanki", fromCity: "Barabanki", toCity: "Varanasi", distance: 290, duration: "2.5 - 7 hrs" },

    // 3. Western & Northern UP (Agra, Bareilly, NCR, Meerut Divisions)
    { slug: "delhi", fromCity: "Delhi", toCity: "Varanasi", distance: 800, duration: "7 - 15 hrs" },
    { slug: "noida", fromCity: "Noida", toCity: "Varanasi", distance: 780, duration: "7 - 15 hrs" },
    { slug: "greater-noida", fromCity: "Greater Noida", toCity: "Varanasi", distance: 790, duration: "7 - 15 hrs" },
    { slug: "gurugram-gurgaon", fromCity: "Gurugram (Gurgaon)", toCity: "Varanasi", distance: 820, duration: "7 - 15 hrs" },
    { slug: "faridabad", fromCity: "Faridabad", toCity: "Varanasi", distance: 810, duration: "7 - 15 hrs" },
    { slug: "ghaziabad", fromCity: "Ghaziabad", toCity: "Varanasi", distance: 790, duration: "7 - 15 hrs" },
    { slug: "agra", fromCity: "Agra", toCity: "Varanasi", distance: 450, duration: "7 - 15 hrs" },
    { slug: "mathura", fromCity: "Mathura", toCity: "Varanasi", distance: 500, duration: "7 - 15 hrs" },
    { slug: "aligarh", fromCity: "Aligarh", toCity: "Varanasi", distance: 550, duration: "7 - 15 hrs" },
    { slug: "hathras", fromCity: "Hathras", toCity: "Varanasi", distance: 530, duration: "7 - 15 hrs" },
    { slug: "bareilly", fromCity: "Bareilly", toCity: "Varanasi", distance: 580, duration: "7 - 15 hrs" },
    { slug: "budaun", fromCity: "Budaun", toCity: "Varanasi", distance: 600, duration: "7 - 15 hrs" },
    { slug: "moradabad", fromCity: "Moradabad", toCity: "Varanasi", distance: 620, duration: "7 - 15 hrs" },
    { slug: "rampur", fromCity: "Rampur", toCity: "Varanasi", distance: 640, duration: "7 - 15 hrs" },
    { slug: "sambhal", fromCity: "Sambhal", toCity: "Varanasi", distance: 630, duration: "7 - 15 hrs" },
    { slug: "amroha", fromCity: "Amroha", toCity: "Varanasi", distance: 650, duration: "7 - 15 hrs" },
    { slug: "meerut", fromCity: "Meerut", toCity: "Varanasi", distance: 750, duration: "7 - 15 hrs" },
    { slug: "hapur", fromCity: "Hapur", toCity: "Varanasi", distance: 760, duration: "7 - 15 hrs" },
    { slug: "bulandshahr", fromCity: "Bulandshahr", toCity: "Varanasi", distance: 740, duration: "7 - 15 hrs" },
    { slug: "muzaffarnagar", fromCity: "Muzaffarnagar", toCity: "Varanasi", distance: 800, duration: "7 - 15 hrs" },
    { slug: "saharanpur", fromCity: "Saharanpur", toCity: "Varanasi", distance: 850, duration: "7 - 15 hrs" },
    { slug: "roorkee", fromCity: "Roorkee", toCity: "Varanasi", distance: 870, duration: "7 - 15 hrs" },
    { slug: "haridwar", fromCity: "Haridwar", toCity: "Varanasi", distance: 890, duration: "7 - 15 hrs" },
    { slug: "dehradun", fromCity: "Dehradun", toCity: "Varanasi", distance: 920, duration: "7 - 15 hrs" },

    // 4. Bihar (High Volume Cross-Border Routes)
    { slug: "patna", fromCity: "Patna", toCity: "Varanasi", distance: 250, duration: "2 - 6 hrs" },
    { slug: "gaya", fromCity: "Gaya", toCity: "Varanasi", distance: 200, duration: "2 - 6 hrs" },
    { slug: "buxar", fromCity: "Buxar", toCity: "Varanasi", distance: 130, duration: "2 - 6 hrs" },
    { slug: "arrah-ara", fromCity: "Arrah (Ara)", toCity: "Varanasi", distance: 220, duration: "2 - 6 hrs" },
    { slug: "sasaram", fromCity: "Sasaram", toCity: "Varanasi", distance: 160, duration: "2 - 6 hrs" },
    { slug: "dehri", fromCity: "Dehri", toCity: "Varanasi", distance: 170, duration: "2 - 6 hrs" },
    { slug: "kaimur-bhabua", fromCity: "Kaimur (Bhabua)", toCity: "Varanasi", distance: 140, duration: "2 - 6 hrs" },
    { slug: "siwan", fromCity: "Siwan", toCity: "Varanasi", distance: 180, duration: "2 - 6 hrs" },
    { slug: "gopalganj", fromCity: "Gopalganj", toCity: "Varanasi", distance: 210, duration: "2 - 6 hrs" },
    { slug: "muzaffarpur", fromCity: "Muzaffarpur", toCity: "Varanasi", distance: 280, duration: "2 - 6 hrs" },
    { slug: "darbhanga", fromCity: "Darbhanga", toCity: "Varanasi", distance: 320, duration: "2 - 6 hrs" },
    { slug: "motihari", fromCity: "Motihari", toCity: "Varanasi", distance: 300, duration: "2 - 6 hrs" },
    { slug: "bettiah", fromCity: "Bettiah", toCity: "Varanasi", distance: 330, duration: "2 - 6 hrs" },
    { slug: "chapra-saran", fromCity: "Chapra (Saran)", toCity: "Varanasi", distance: 240, duration: "2 - 6 hrs" },
    { slug: "hajipur", fromCity: "Hajipur", toCity: "Varanasi", distance: 260, duration: "2 - 6 hrs" },
    { slug: "begusarai", fromCity: "Begusarai", toCity: "Varanasi", distance: 310, duration: "2 - 6 hrs" },
    { slug: "bhagalpur", fromCity: "Bhagalpur", toCity: "Varanasi", distance: 380, duration: "2 - 6 hrs" },
    { slug: "purnia", fromCity: "Purnia", toCity: "Varanasi", distance: 450, duration: "2 - 6 hrs" },
    { slug: "katihar", fromCity: "Katihar", toCity: "Varanasi", distance: 460, duration: "2 - 6 hrs" },
    { slug: "madhubani", fromCity: "Madhubani", toCity: "Varanasi", distance: 350, duration: "2 - 6 hrs" },
    { slug: "sitamarhi", fromCity: "Sitamarhi", toCity: "Varanasi", distance: 360, duration: "2 - 6 hrs" },
    { slug: "jehanabad", fromCity: "Jehanabad", toCity: "Varanasi", distance: 230, duration: "2 - 6 hrs" },
    { slug: "nawada", fromCity: "Nawada", toCity: "Varanasi", distance: 270, duration: "2 - 6 hrs" },

    // 5. Jharkhand (Industrial, Mining & Pilgrimage Routes)
    { slug: "ranchi", fromCity: "Ranchi", toCity: "Varanasi", distance: 350, duration: "3.5 - 8 hrs" },
    { slug: "dhanbad", fromCity: "Dhanbad", toCity: "Varanasi", distance: 280, duration: "3.5 - 8 hrs" },
    { slug: "bokaro", fromCity: "Bokaro", toCity: "Varanasi", distance: 300, duration: "3.5 - 8 hrs" },
    { slug: "hazaribagh", fromCity: "Hazaribagh", toCity: "Varanasi", distance: 320, duration: "3.5 - 8 hrs" },
    { slug: "deoghar", fromCity: "Deoghar", toCity: "Varanasi", distance: 340, duration: "3.5 - 8 hrs" },
    { slug: "dumka", fromCity: "Dumka", toCity: "Varanasi", distance: 380, duration: "3.5 - 8 hrs" },
    { slug: "giridih", fromCity: "Giridih", toCity: "Varanasi", distance: 330, duration: "3.5 - 8 hrs" },
    { slug: "jamshedpur", fromCity: "Jamshedpur", toCity: "Varanasi", distance: 400, duration: "3.5 - 8 hrs" },
    { slug: "godda", fromCity: "Godda", toCity: "Varanasi", distance: 420, duration: "3.5 - 8 hrs" },
    { slug: "sahibganj", fromCity: "Sahibganj", toCity: "Varanasi", distance: 430, duration: "3.5 - 8 hrs" },
    { slug: "pakur", fromCity: "Pakur", toCity: "Varanasi", distance: 440, duration: "3.5 - 8 hrs" },
    { slug: "ramgarh", fromCity: "Ramgarh", toCity: "Varanasi", distance: 360, duration: "3.5 - 8 hrs" },
    { slug: "chatra", fromCity: "Chatra", toCity: "Varanasi", distance: 370, duration: "3.5 - 8 hrs" },
    { slug: "koderma", fromCity: "Koderma", toCity: "Varanasi", distance: 310, duration: "3.5 - 8 hrs" },
    { slug: "phusro", fromCity: "Phusro", toCity: "Varanasi", distance: 290, duration: "3.5 - 8 hrs" },

    // 6. Madhya Pradesh & Bundelkhand
    { slug: "rewa", fromCity: "Rewa", toCity: "Varanasi", distance: 220, duration: "3.5 - 9 hrs" },
    { slug: "satna", fromCity: "Satna", toCity: "Varanasi", distance: 260, duration: "3.5 - 9 hrs" },
    { slug: "jabalpur", fromCity: "Jabalpur", toCity: "Varanasi", distance: 400, duration: "3.5 - 9 hrs" },
    { slug: "katni", fromCity: "Katni", toCity: "Varanasi", distance: 350, duration: "3.5 - 9 hrs" },
    { slug: "singrauli", fromCity: "Singrauli", toCity: "Varanasi", distance: 180, duration: "3.5 - 9 hrs" },
    { slug: "chitrakoot", fromCity: "Chitrakoot", toCity: "Varanasi", distance: 200, duration: "3.5 - 9 hrs" },
    { slug: "banda", fromCity: "Banda", toCity: "Varanasi", distance: 280, duration: "3.5 - 9 hrs" },
    { slug: "jhansi", fromCity: "Jhansi", toCity: "Varanasi", distance: 450, duration: "3.5 - 9 hrs" },
    { slug: "mahoba", fromCity: "Mahoba", toCity: "Varanasi", distance: 380, duration: "3.5 - 9 hrs" },
    { slug: "hamirpur", fromCity: "Hamirpur", toCity: "Varanasi", distance: 350, duration: "3.5 - 9 hrs" },
    { slug: "fatehpur", fromCity: "Fatehpur", toCity: "Varanasi", distance: 300, duration: "3.5 - 9 hrs" },
    { slug: "gwalior", fromCity: "Gwalior", toCity: "Varanasi", distance: 550, duration: "3.5 - 9 hrs" },
    { slug: "morena", fromCity: "Morena", toCity: "Varanasi", distance: 580, duration: "3.5 - 9 hrs" },
    { slug: "bhind", fromCity: "Bhind", toCity: "Varanasi", distance: 560, duration: "3.5 - 9 hrs" },
    { slug: "shivpuri", fromCity: "Shivpuri", toCity: "Varanasi", distance: 600, duration: "3.5 - 9 hrs" },

    // 7. Long Distance / Other States (Premium & Tourist Routes)
    { slug: "kolkata", fromCity: "Kolkata", toCity: "Varanasi", distance: 680, duration: "11 - 18 hrs" },
    { slug: "durgapur", fromCity: "Durgapur", toCity: "Varanasi", distance: 550, duration: "11 - 18 hrs" },
    { slug: "asansol", fromCity: "Asansol", toCity: "Varanasi", distance: 520, duration: "11 - 18 hrs" },
    { slug: "siliguri", fromCity: "Siliguri", toCity: "Varanasi", distance: 850, duration: "11 - 18 hrs" },
    { slug: "jaipur", fromCity: "Jaipur", toCity: "Varanasi", distance: 900, duration: "11 - 18 hrs" },
    { slug: "chandigarh", fromCity: "Chandigarh", toCity: "Varanasi", distance: 950, duration: "11 - 18 hrs" },
    { slug: "ludhiana", fromCity: "Ludhiana", toCity: "Varanasi", distance: 1000, duration: "11 - 18 hrs" },
    { slug: "amritsar", fromCity: "Amritsar", toCity: "Varanasi", distance: 1100, duration: "11 - 18 hrs" },
    { slug: "bhopal", fromCity: "Bhopal", toCity: "Varanasi", distance: 750, duration: "11 - 18 hrs" },
    { slug: "indore", fromCity: "Indore", toCity: "Varanasi", distance: 850, duration: "11 - 18 hrs" },
    { slug: "nagpur", fromCity: "Nagpur", toCity: "Varanasi", distance: 700, duration: "11 - 18 hrs" },
    { slug: "raipur", fromCity: "Raipur", toCity: "Varanasi", distance: 600, duration: "11 - 18 hrs" },
    { slug: "bilaspur-cg", fromCity: "Bilaspur (CG)", toCity: "Varanasi", distance: 650, duration: "11 - 18 hrs" },
];

export default function VaranasiRoutesSection() {
    return (
        <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
                    Book Cab to Varanasi from 130+ Cities
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    Choose your pickup city and book a cab to Varanasi
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {routes.map((route) => (
                        <a
                            key={route.slug}
                            href={`/route/${route.slug}-to-varanasi-taxi`}
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