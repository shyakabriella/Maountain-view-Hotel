// import parallaxBg from "@/assets/images/IMG_4378.jpg";
// import { motion } from "framer-motion";

// const ParallaxSection = () => {
//   return (
//     <section
//       className="relative h-[70vh] bg-fixed bg-center bg-cover flex items-center"
//       style={{ backgroundImage: `url(${parallaxBg})` }}
//     >
//       <div className="absolute inset-0 bg-black/30" />
//       <motion.div
//         initial={{ opacity: 0, x: -100 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.2 }}
//         className="relative z-10 container mx-auto px-6"
//       >
//         <h2 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight max-w-3xl" style={{ color: "white" }}>
//           We're Most Recommended Hotel
//         </h2>
//         <hr className="max-w-[43%] mt-2 border-t-3 border-primary" />
//       </motion.div>
//     </section>
//   );
// };

// export default ParallaxSection;

















// src/components/ParallaxSection.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { API_URL, getImageUrl } from "../config/api";

const ParallaxSection = () => {
  const [sectionData, setSectionData] = useState({
    title: "We're Most Recommended Hotel",
    background_image: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}/home-section6`);
      const result = await response.json();
      if (result.success && result.data) {
        setSectionData({
          title: result.data.title || "We're Most Recommended Hotel",
          background_image: getImageUrl(result.data.background_image)
        });
      }
    } catch (error) {
      console.error("Error fetching parallax data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="h-[70vh] bg-gray-200 animate-pulse" />;
  }

  return (
    <section
      className="relative h-[70vh] bg-fixed bg-center bg-cover flex items-center"
      style={{ backgroundImage: `url(${sectionData.background_image || "https://placehold.co/1920x800?text=Background"})` }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative z-10 container mx-auto px-6"
      >
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight max-w-3xl text-white">
          {sectionData.title}
        </h2>
        <hr className="max-w-[43%] mt-2 border-t-3 border-primary" />
      </motion.div>
    </section>
  );
};

export default ParallaxSection;