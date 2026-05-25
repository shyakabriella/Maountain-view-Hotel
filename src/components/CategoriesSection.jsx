// import catRooms from "@/assets/images/photo_33.JPG";
// import catPool from "@/assets/images/pool3.JPG";
// import catRestaurant from "@/assets/images/resto1.JPG";
// import room1 from "@/assets/room-1.jpg";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const categories = [
//   { label: "ROOMS", image: catRooms, link: "/rooms", highlight: false },
//   { label: "SWIMMING POOL", image: catPool, link: "/pool", highlight: false },
//   { label: "RESTAURANT", image: catRestaurant, link: "/restaurant", highlight: false },
//   { label: "STUNNING CITY & MOUNTAIN VIEW", image: room1, link: "/stunning-city-mountain-view", highlight: false },
// ];

// const CategoriesSection = () => {
//   return (
//     <section className="py-0">
//       <div className="container mx-auto px-6 py-16">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
//           {categories.map((cat, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.15, duration: 0.6 }}
//               whileHover={{ scale: cat.highlight ? 1.08 : 1.05 }}
//               className={`relative rounded-sm h-64 overflow-hidden group cursor-pointer ${
//                 cat.highlight
//                   ? "ring-4 ring-[#2E7D32] ring-offset-4 ring-offset-white shadow-2xl shadow-[#2E7D32]/30"
//                   : ""
//               }`}
//             >
//               {cat.highlight && (
//                 <div className="absolute top-4 left-0 right-0 z-10 flex justify-center">
//                   <span className="bg-[#2E7D32] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
//                     ★ Featured
//                   </span>
//                 </div>
//               )}
//               <Link to={cat.link} className="block w-full h-full">
//                 <img
//                   src={cat.image}
//                   alt={cat.label}
//                   className={`w-full h-full object-cover transition-transform duration-500 ${
//                     cat.highlight ? "group-hover:scale-115" : "group-hover:scale-110"
//                   }`}
//                   loading="lazy"
//                   width={512}
//                   height={512}
//                 />
//                 <div className={`absolute inset-0 flex items-end justify-center pb-8 ${
//                   cat.highlight ? "bg-gradient-to-t from-[#2E7D32]/70 via-black/30 to-transparent" : "bg-black/40"
//                 }`}>
//                   <span 
//                     className={`font-body text-xs font-semibold tracking-[0.2em] uppercase ${
//                       cat.highlight ? "text-white text-[11px]" : "text-white"
//                     }`}
//                     style={{ color: "white" }}
//                   >
//                     {cat.label}
//                   </span>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CategoriesSection;

































// src/components/CategoriesSection.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { API_URL, getImageUrl } from "../config/api";

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_URL}/home-section1-gallery`);
      const result = await response.json();
      if (result.success && result.data) {
        setCategories(result.data.map(cat => ({
          ...cat,
          image_url: getImageUrl(cat.image_url)
        })));
      } else {
        setCategories([
          { id: 1, title: "ROOMS", image_url: null, link: "/rooms" },
          { id: 2, title: "SWIMMING POOL", image_url: null, link: "/pool" },
          { id: 3, title: "RESTAURANT", image_url: null, link: "/restaurant" },
          { id: 4, title: "STUNNING CITY & MOUNTAIN VIEW", image_url: null, link: "/stunning-city-mountain-view" },
        ]);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-64 bg-gray-200 animate-pulse rounded-sm" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-0">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id || i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-sm h-64 overflow-hidden group cursor-pointer"
            >
              <Link to={`/${cat.title.toLowerCase().replace(/\s+/g, '-')}`} className="block w-full h-full">
                <img
                  src={cat.image_url || "https://placehold.co/600x400?text=No+Image"}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end justify-center pb-8">
                  <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white">
                    {cat.title}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;