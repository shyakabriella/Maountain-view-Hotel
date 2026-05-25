// import React from "react";

// const hall =
//   "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200";
// const meeting =
//   "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200";
// const wedding =
//   "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200";

// export default function ConferenceSpace() {
//   return (
//     <section className="py-20 px-6 bg-hotel-light-gray">
//       <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10">

//         {/* Conference Hall */}
//         <div className="relative h-[350px] rounded-2xl overflow-hidden group">
//           <img
//             src={hall}
//             alt="Conference hall"
//             className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
//           />
//           <div className="absolute inset-0 bg-black/60" />
//           <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
//             <h3 className="text-xl font-semibold mb-2">Main Conference Hall</h3>
//             <p className="text-sm text-white/80">
//               Ideal for large events, seminars, and corporate gatherings.
//             </p>
//           </div>
//         </div>

//         {/* Meeting Room */}
//         <div className="relative h-[350px] rounded-2xl overflow-hidden group">
//           <img
//             src={meeting}
//             alt="Meeting room"
//             className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
//           />
//           <div className="absolute inset-0 bg-black/60" />
//           <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
//             <h3 className="text-xl font-semibold mb-2">Meeting Rooms</h3>
//             <p className="text-sm text-white/80">
//               Perfect for business meetings and private discussions.
//             </p>
//           </div>
//         </div>

//         {/* Wedding/Event */}
//         <div className="relative h-[350px] rounded-2xl overflow-hidden group md:col-span-2">
//           <img
//             src={wedding}
//             alt="Wedding event"
//             className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
//           />
//           <div className="absolute inset-0 bg-black/60" />
//           <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
//             <h3 className="text-xl font-semibold mb-2">
//               Weddings & Celebrations
//             </h3>
//             <p className="text-sm text-white/80">
//               Celebrate unforgettable moments in a beautiful and elegant setting.
//             </p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }



















import { useState, useEffect } from "react";

const API_URL = (import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8001/api").replace(/\/$/, "");
const APP_URL = API_URL.replace(/\/api$/, "");
const STORAGE_URL = (import.meta.env.VITE_STORAGE_URL || `${APP_URL}/storage`).replace(/\/$/, "");

const getImageUrl = (path) => {
  if (!path) return null;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path.startsWith("/storage/")) return `${APP_URL}${path}`;
  if (path.startsWith("storage/")) return `${APP_URL}/${path}`;
  return `${STORAGE_URL}/${path}`;
};

export default function ConferenceSpace() {
  const [spaces, setSpaces] = useState([
    { title: "Main Conference Hall", description: "Ideal for large events, seminars, and corporate gatherings.", image_url: null },
    { title: "Meeting Rooms", description: "Perfect for business meetings and private discussions.", image_url: null },
    { title: "Weddings & Celebrations", description: "Celebrate unforgettable moments in a beautiful and elegant setting.", image_url: null },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSpaces();
  }, []);

  const fetchSpaces = async () => {
    try {
      const response = await fetch(`${API_URL}/conference-event-spaces`);
      const result = await response.json();
      if (result.success && result.data && result.data.length > 0) {
        setSpaces(result.data.map(space => ({
          ...space,
          image_url: getImageUrl(space.image_url),
        })));
      }
    } catch (error) {
      console.error("Error fetching event spaces:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20 px-6 bg-hotel-light-gray">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-[350px] bg-gray-200 animate-pulse rounded-2xl" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-hotel-light-gray">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10">
        {spaces.map((space, index) => (
          <div
            key={space.id || index}
            className={`relative h-[350px] rounded-2xl overflow-hidden group ${
              index === 2 ? "md:col-span-2" : ""
            }`}
          >
            {space.image_url ? (
              <img
                src={space.image_url}
                alt={space.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800" />
            )}
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
              <h3 className="text-xl font-semibold mb-2">{space.title}</h3>
              <p className="text-sm text-white/80">{space.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}