import { useState, useEffect } from "react";
import RoomsSection from "../../components/RoomsSection";

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

const Rooms = () => {
  const [heroData, setHeroData] = useState({
    title: "Stay With Us",
    subtitle: "Elegant & Comfortable Rooms",
    description: "Discover thoughtfully designed rooms that blend comfort, style, and modern convenience— offering the perfect space to relax, recharge, and enjoy every moment of your stay.",
    image_url: null
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHeroData();
  }, []);

  const fetchHeroData = async () => {
    try {
      const response = await fetch(`${API_URL}/room-hero-section`);
      const result = await response.json();
      console.log("Fetched room hero data:", result);
      
      if (result.success && result.data) {
        setHeroData({
          title: result.data.title || "Stay With Us",
          subtitle: result.data.subtitle || "Elegant & Comfortable Rooms",
          description: result.data.description || "",
          image_url: getImageUrl(result.data.image_url)
        });
      }
    } catch (err) {
      console.error("Error fetching room hero data:", err);
      setError("Failed to load hero section");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="overflow-x-hidden overflow-y-hidden bg-background">
        <div className="relative h-[98vh] min-h-[420px] flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden overflow-y-hidden bg-background">
      {/* CENTERED HERO */}
      <section className="relative h-[98vh] min-h-[420px] flex items-center">
        {/* Background Image */}
        {heroData.image_url ? (
          <img
            src={heroData.image_url}
            alt="MountainViewHotel rooms"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900" />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* LEFT SIDE CONTENT */}
        <div className="relative z-10 ml-20 mt-30 max-w-2xl text-white space-y-5">
          
          {/* Small Label / Subtitle */}
          {heroData.subtitle && (
            <p className="text-xs tracking-[0.3em] uppercase text-white/70">
              {heroData.subtitle}
            </p>
          )}

          {/* Main Title */}
          <h1 className="text-2xl md:text-4xl leading-[1.2]">
            {heroData.title}
          </h1>

          {/* Description */}
          {heroData.description && (
            <p className="text-[12px] md:text-[14px] text-white/85 leading-relaxed max-w-xl">
              {heroData.description}
            </p>
          )}
        </div>
      </section>

      <RoomsSection />
    </div>
  );
};

export default Rooms;