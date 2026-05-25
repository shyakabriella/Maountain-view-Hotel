// import pool1 from "@/assets/images/pool1.JPG";
// import pool2 from "@/assets/images/pool2.JPG";
// import pool3 from "@/assets/images/pool3.JPG";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const PoolSection = () => {
//   return (
//     <section id="pool" className="py-20 bg-background">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left: Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
//               Relax & Rejuvenate
//             </p>
//             <h2 className="text-4xl md:text-5xl text-foreground mb-6">
//               Swimming Pool
//             </h2>
//             <p className="text-[12px] text-muted-foreground mb-6">
//               “Relax at our outdoor pool, surrounded by stunning mountain views. Take a refreshing swim, bask in the sun, or sip a cocktail by the water — the perfect retreat awaits.”
//             </p>
//             <ul className="space-y-3 mb-8">
//               <motion.li
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3 }}
//                 className="flex items-center gap-3 text-muted-foreground"
//               >
//                 <span className="text-primary text-xl">✓</span>
//                 Olympic-size pool with mountain views
//               </motion.li>
//               <motion.li
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.4 }}
//                 className="flex items-center gap-3 text-muted-foreground"
//               >
//                 <span className="text-primary text-xl">✓</span>
//                 Comfortable sun loungers and umbrellas
//               </motion.li>
//               <motion.li
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.5 }}
//                 className="flex items-center gap-3 text-muted-foreground"
//               >
//                 <span className="text-primary text-xl">✓</span>
//                 Poolside bar with refreshing drinks
//               </motion.li>
//               <motion.li
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.6 }}
//                 className="flex items-center gap-3 text-muted-foreground"
//               >
//                 <span className="text-primary text-xl">✓</span>
//                 Heated pool for year-round enjoyment
//               </motion.li>
//             </ul>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Link 
//                 to="/pool" 
//                 className="inline-flex rounded-md items-center gap-2 bg-primary text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
//               >
//                 Explore Pool
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* Right: Image Gallery */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="grid grid-cols-2 gap-4"
//           >
//             <div className="space-y-4">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//                 className="overflow-hidden rounded-lg shadow-lg"
//               >
//                 <img 
//                   src={pool1} 
//                   alt="Mountain View Pool" 
//                   className="w-full h-64 object-cover"
//                   loading="lazy"
//                 />
//               </motion.div>
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//                 className="overflow-hidden rounded-lg shadow-lg"
//               >
//                 <img 
//                   src={pool3} 
//                   alt="Pool Lounge Area" 
//                   className="w-full h-48 object-cover"
//                   loading="lazy"
//                 />
//               </motion.div>
//             </div>
//             <div className="space-y-4 pt-8">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//                 className="overflow-hidden rounded-lg shadow-lg"
//               >
//                 <img 
//                   src={pool2} 
//                   alt="Pool Deck" 
//                   className="w-full h-48 object-cover"
//                   loading="lazy"
//                 />
//               </motion.div>
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//                 className="overflow-hidden rounded-lg shadow-lg"
//               >
//                 <img 
//                   src={pool3} 
//                   alt="Pool Evening" 
//                   className="w-full h-64 object-cover"
//                   loading="lazy"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PoolSection;






















// src/components/PoolSection.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { API_URL, getImageUrl } from "../config/api";

const PoolSection = () => {
  const [sectionData, setSectionData] = useState({
    title: "Relax & Rejuvenate",
    subtitle: "Swimming Pool",
    description: "",
    bullet_points: [],
    button_text: "Explore Pool",
    button_link: "/pool",
    images: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}/home-section4`);
      const result = await response.json();
      if (result.success && result.data) {
        setSectionData({
          title: result.data.title || "Relax & Rejuvenate",
          subtitle: result.data.subtitle || "Swimming Pool",
          description: result.data.description || "",
          bullet_points: result.data.bullet_points || [],
          button_text: result.data.button_text || "Explore Pool",
          button_link: result.data.button_link || "/pool",
          images: (result.data.images || []).map(img => getImageUrl(img))
        });
      }
    } catch (error) {
      console.error("Error fetching pool data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="h-6 w-32 bg-gray-200 animate-pulse" />
              <div className="h-10 w-48 bg-gray-200 animate-pulse" />
              <div className="h-24 bg-gray-200 animate-pulse" />
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-6 w-full bg-gray-200 animate-pulse" />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-48 bg-gray-200 animate-pulse rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const images = sectionData.images || [];

  return (
    <section id="pool" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
              {sectionData.title}
            </p>
            <h2 className="text-4xl md:text-5xl text-foreground mb-6">
              {sectionData.subtitle}
            </h2>
            <p className="text-[12px] text-muted-foreground mb-6">
              {sectionData.description}
            </p>
            <ul className="space-y-3 mb-8">
              {sectionData.bullet_points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="text-primary text-xl">✓</span>
                  {point}
                </motion.li>
              ))}
            </ul>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={sectionData.button_link} 
                className="inline-flex rounded-md items-center gap-2 bg-primary text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
              >
                {sectionData.button_text}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {images.length >= 4 ? (
              <>
                <div className="space-y-4">
                  <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg shadow-lg">
                    <img src={images[0]} alt="Pool 1" className="w-full h-64 object-cover" loading="lazy" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg shadow-lg">
                    <img src={images[1]} alt="Pool 2" className="w-full h-48 object-cover" loading="lazy" />
                  </motion.div>
                </div>
                <div className="space-y-4 pt-8">
                  <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg shadow-lg">
                    <img src={images[2]} alt="Pool 3" className="w-full h-48 object-cover" loading="lazy" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg shadow-lg">
                    <img src={images[3]} alt="Pool 4" className="w-full h-64 object-cover" loading="lazy" />
                  </motion.div>
                </div>
              </>
            ) : (
              <div className="col-span-2 text-center py-12 text-gray-400">
                <p>No images available</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PoolSection;