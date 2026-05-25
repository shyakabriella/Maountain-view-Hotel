// import React from "react";
// import { Link } from "react-router-dom";

// const heroBg =
//   "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1600";

// export default function HeroConference() {
//   return (
//     <section className="relative h-[78vh] min-h-[350px] flex items-end -mt-[100px]">
      
//       <img
//         src={heroBg}
//         alt="Conference hall"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       <div className="absolute inset-0 bg-black/60" />

//       <div className="relative z-10 container mx-auto px-6 pb-14 text-white text-center">
        
//         <p className="text-xs tracking-[0.18em] uppercase text-white/80 mb-4">
//           <Link to="/" className="hover:text-primary">
//             Home
//           </Link>{" "}
//           / Conferences
//         </p>

//         <h1 className="text-2xl md:text-3xl">
//           Events & Conferences
//         </h1>

//         <p className="mt-4 text-[10px] text-white/80 max-w-xl mx-auto">
//           Elegant spaces designed for meetings, weddings, and unforgettable events.
//         </p>

//       </div>
//     </section>
//   );
// }












import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

export default function HeroConference() {
  const [heroData, setHeroData] = useState({
    title: "Events & Conferences",
    subtitle: "Home / Conferences",
    description: "Elegant spaces designed for meetings, weddings, and unforgettable events.",
    background_image: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHeroData();
  }, []);

  const fetchHeroData = async () => {
    try {
      const response = await fetch(`${API_URL}/conference-hero`);
      const result = await response.json();
      if (result.success && result.data) {
        setHeroData({
          title: result.data.title || "Events & Conferences",
          subtitle: result.data.subtitle || "Home / Conferences",
          description: result.data.description || "",
          background_image: getImageUrl(result.data.background_image),
        });
      }
    } catch (error) {
      console.error("Error fetching conference hero:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="relative h-[78vh] min-h-[350px] flex items-end -mt-[100px] bg-gray-200 animate-pulse" />
    );
  }

  return (
    <section className="relative h-[78vh] min-h-[350px] flex items-end -mt-[100px]">
      {heroData.background_image ? (
        <img
          src={heroData.background_image}
          alt="Conference hall"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900" />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-6 pb-14 text-white text-center">
        <p className="text-xs tracking-[0.18em] uppercase text-white/80 mb-4">
          <Link to="/" className="hover:text-primary">Home</Link> / Conferences
        </p>
        <h1 className="text-2xl md:text-3xl">{heroData.title}</h1>
        <p className="mt-4 text-[10px] text-white/80 max-w-xl mx-auto">
          {heroData.description}
        </p>
      </div>
    </section>
  );
}