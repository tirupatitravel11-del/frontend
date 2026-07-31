// import CabFilters from "../../components/Cab/Cabhub/CabFilters";

// import axios from "axios";

// type PageProps = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

// // async function getData(slug: string) {
// //   try {
// //     console.log("Sending slug to API:", slug);

// //     const response = await axios.post(
// //       `${process.env.apiUrl}/api/get-page`,
// //       {
// //         cityName: slug,
// //       },
// //       {
// //         withCredentials: true,
// //       },
// //     );

// //     console.log("API RESPONSE:", response.data);

// //     return response.data.data;
// //   } catch (error) {
// //     console.error("GET PAGE API ERROR:", error);

// //     if (axios.isAxiosError(error)) {
// //       console.error("Status:", error.response?.status);
// //       console.error("Response:", error.response?.data);
// //     }

// //     return null;
// //   }
// // }

// export default async function Hotels({ params }: PageProps) {
//   // URL:
//   // /cabs/lucknow

//   const { slug } = await params;
//   // API call
//   const data = await getData(slug);
//   if (!data) {
//     return <p>Unable to load page data.</p>;
//   }

//   return (
//     <main className="bg-stone-50">
//       {/* Hero + Cab Filter */}
//       <section className="mx-auto max-w-7xl px-6 py-24">
//         <div className="grid items-center gap-12 lg:grid-cols-2">
//           {/* LEFT SIDE — TEXT */}
//           <div>
//             <p className="font-semibold uppercase tracking-[4px] text-gold">
//               500+ Routes · Verified Drivers
//             </p>

//             <h1 className="mt-4 max-w-xl text-5xl font-bold leading-tight text-stone-900 md:text-6xl">
//               Cabs You Can Trust.
//             </h1>

//             <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
//               One-way or round-trip — choose your route, pick your vehicle, and
//               go. Transparent fares, no hidden charges.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <button
//                 type="button"
//                 className="rounded-full bg-gold px-7 py-3.5 font-bold text-white shadow-md transition hover:bg-[#c88912]"
//               >
//                 View Hotels
//               </button>

//               <button
//                 type="button"
//                 className="rounded-full border-2 border-gold px-7 py-3.5 font-bold text-gold transition hover:bg-gold hover:text-white"
//               >
//                 Call to Book
//               </button>
//             </div>
//           </div>

//           {/* RIGHT SIDE — FORM */}
//           {/* <div className="w-full">
//             <CabFilters />
//           </div> */}
//         </div>
//       </section>
//     </main>
//   );
// }
