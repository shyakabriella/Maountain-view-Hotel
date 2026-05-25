// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import heroBg1 from "@/assets/images/pool25.JPG";
// import heroBg2 from "@/assets/images/entrance.JPG";

// const images = [heroBg1, heroBg2];

// const HeroSection = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 3000); // every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="home" className="relative h-[550px] w-full overflow-hidden">
//       {/* Background Image with Slide/Fade Animation */}
//       <AnimatePresence>
//         <motion.img
//           key={currentImage}
//           src={images[currentImage]}
//           alt="Luxury resort pool at sunset"
//           className="absolute inset-0 w-full h-full object-cover"
//           width={1920}
//           height={1080}
//           initial={{ opacity: 0, scale: 1.1, y: 50 }}   // start slightly zoomed and shifted
//           animate={{ opacity: 1, scale: 1, y: 0 }}      // animate to normal
//           exit={{ opacity: 0, scale: 1.05, y: -50 }}    // exit with slight upward shift
//           transition={{ duration: 1 }}
//         />
//       </AnimatePresence>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50" />

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-start justify-center h-full container ml-10 px-6 mt-19">
        
//         {/* Small Tagline */}
//         <motion.p
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           className="text-xs tracking-[0.25em] uppercase text-white/80"
//         >
//           Welcome to Luxury & Comfort
//         </motion.p>

//         {/* Main Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.7 }}
//           className="mt-4 text-2xl md:text-4xl leading-[1.05] tracking-tight text-white"
//         >
//           Discover Unforgettable Stays
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.9 }}
//           className="mt-6 text-white/85 text-[12px] md:text-[14px] leading-relaxed w-[70%]"
//         >
//           From elegant accommodations and exceptional dining to seamless services and curated experiences,
//           every detail is thoughtfully designed to deliver comfort, style, and unforgettable moments.
//         </motion.p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

















// src/components/HeroSection.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { API_URL, getImageUrl } from "../config/api";

const HeroSection = () => {
  const [heroData, setHeroData] = useState({
    title: "Welcome to Luxury & Comfort",
    subtitle: "Discover Unforgettable Stays",
    description: "From elegant accommodations and exceptional dining to seamless services and curated experiences, every detail is thoughtfully designed to deliver comfort, style, and unforgettable moments.",
    images: []
  });
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    fetchHeroData();
  }, []);

  useEffect(() => {
    if (heroData.images && heroData.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % heroData.images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [heroData.images]);

  const fetchHeroData = async () => {
    try {
      const response = await fetch(`${API_URL}/home-hero-section`);
      const result = await response.json();
      if (result.success && result.data) {
        const images = result.data.images || [];
        setHeroData({
          title: result.data.title || "Welcome to Luxury & Comfort",
          subtitle: result.data.subtitle || "Discover Unforgettable Stays",
          description: result.data.description || "",
          images: images.map(img => getImageUrl(img))
        });
      }
    } catch (error) {
      console.error("Error fetching hero data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-[550px] w-full bg-gray-200 animate-pulse flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
      </div>
    );
  }

  const currentImageUrl = heroData.images[currentImage] || heroData.images[0];

  return (
    <section id="home" className="relative h-[550px] w-full overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={currentImage}
          src={currentImageUrl || "https://placehold.co/1920x1080?text=Hero+Image"}
          alt="Luxury resort"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.05, y: -50 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-start justify-center h-full container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs tracking-[0.25em] uppercase text-white/80"
        >
          {heroData.title}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-4 text-2xl md:text-4xl leading-[1.05] tracking-tight text-white"
        >
          {heroData.subtitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-6 text-white/85 text-[12px] md:text-[14px] leading-relaxed max-w-2xl"
        >
          {heroData.description}
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;