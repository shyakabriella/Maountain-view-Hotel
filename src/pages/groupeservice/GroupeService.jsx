
// import RestaurantSection from "../../components/RestaurantSection";
// import heroBg from "@/assets/images/resto2.JPG";
// import { Link } from "react-router-dom";

// const Restaurant = () => {
//   return (
//     <div className="overflow-hidden bg-background">

//       <section className="relative h-[98vh] min-h-[420px] flex items-end">
//         <img
//           src={heroBg}
//           alt="MountainViewHotel restaurant"
//           className="absolute inset-0 h-full w-full object-cover"
//           width={1920}
//           height={1080}
//         />
//         <div className="absolute inset-0 bg-black/45" />
//         <div className="relative z-10 container mx-auto px-6 pb-14 text-white text-center">
//           <p className="font-body text-xs tracking-[0.18em] uppercase text-white/80 mb-4">
//             <Link to="/" className="hover:text-primary transition-colors">
//               Home
//             </Link>{" "}
//             <span className="mx-1">/</span> Restaurant
//           </p>
//           <h1 className="font-display text-3xl md:text-5xl leading-none">Restaurant</h1>
//         </div>
//       </section>

//       <RestaurantSection />
//     </div>
//   );
// };

// export default Restaurant;







import { useState, useEffect } from "react";
import RestaurantSection from "../../components/RestaurantSection";
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

const Restaurant = () => {
  const [heroData, setHeroData] = useState({
    title: "Restaurant",
    subtitle: "Home / Restaurant",
    background_image: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHeroData();
  }, []);

  const fetchHeroData = async () => {
    try {
      const response = await fetch(`${API_URL}/restaurant-hero`);
      const result = await response.json();
      if (result.success && result.data) {
        setHeroData({
          title: result.data.title || "Restaurant",
          subtitle: result.data.subtitle || "Home / Restaurant",
          background_image: getImageUrl(result.data.background_image),
        });
      }
    } catch (error) {
      console.error("Error fetching restaurant hero:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="overflow-hidden bg-background">
        <section className="relative h-[98vh] min-h-[420px] flex items-end bg-gray-200 animate-pulse" />
        <div className="py-10">
          <div className="container mx-auto px-6">
            <div className="h-96 bg-gray-100 animate-pulse rounded-2xl" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative h-[98vh] min-h-[420px] flex items-end">
        {heroData.background_image ? (
          <img
            src={heroData.background_image}
            alt="MountainViewHotel restaurant"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900" />
        )}
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 container mx-auto px-6 pb-14 text-white text-center">
          <p className="font-body text-xs tracking-[0.18em] uppercase text-white/80 mb-4">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>{" "}
            <span className="mx-1">/</span> {heroData.title}
          </p>
          <h1 className="font-display text-3xl md:text-5xl leading-none">{heroData.title}</h1>
        </div>
      </section>

      {/* Restaurant Menu Section - Uses the existing dynamic component */}
      <RestaurantSection />
    </div>
  );
};

export default Restaurant;