// import React from "react";

// export default function ConferenceAmenities() {
//   return (
//     <section className="py-20 px-6">
//       <div className="container mx-auto max-w-5xl text-center">
//         <h2 className="text-3xl md:text-4xl mb-12">Conference Facilities</h2>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          
//           {[
//             "High-Speed Wi-Fi",
//             "Projectors & Screens",
//             "Sound System",
//             "Air Conditioning",
//             "Catering Services",
//             "Event Planning Support",
//           ].map((item) => (
//             <div
//               key={item}
//               className="p-6 border border-gray-300 rounded-xl 
//               hover:border-green-600 hover:shadow-md 
//               transition-all duration-300"
//             >
//               {item}
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }





















import { useState, useEffect } from "react";

const API_URL = (import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8001/api").replace(/\/$/, "");

export default function ConferenceAmenities() {
  const [amenities, setAmenities] = useState([
    "High-Speed Wi-Fi", "Projectors & Screens", "Sound System",
    "Air Conditioning", "Catering Services", "Event Planning Support",
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAmenities();
  }, []);

  const fetchAmenities = async () => {
    try {
      const response = await fetch(`${API_URL}/conference-amenities`);
      const result = await response.json();
      if (result.success && result.data && result.data.length > 0) {
        setAmenities(result.data.map(a => a.title));
      }
    } catch (error) {
      console.error("Error fetching amenities:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="h-8 w-48 bg-gray-200 animate-pulse mx-auto mb-12" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-20 bg-gray-200 animate-pulse rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl mb-12">Conference Facilities</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          {amenities.map((item) => (
            <div
              key={item}
              className="p-6 border border-gray-300 rounded-xl hover:border-green-600 hover:shadow-md transition-all duration-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}