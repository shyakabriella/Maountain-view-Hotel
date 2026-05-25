// import { Utensils, Coffee, Car, Sparkles, BedDouble } from "lucide-react";
// import { motion } from "framer-motion";

// const services = [
//   { icon: Utensils, label: "Friendly Service" },
//   { icon: Coffee, label: "Get Breakfast" },
//   { icon: Car, label: "Transfer Services" },
//   { icon: Sparkles, label: "Suits" },
//   { icon: BedDouble, label: "Cozy Rooms" },
// ];

// const WelcomeSection = () => {
//   return (
//     <section className="py-5 bg-background">
//       <div className="container mx-auto px-6 text-center">
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className=" text-xs tracking-[0.3em] uppercase text-primary mb-3"
//         >
//         </motion.p>
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className=" text-2xl md:text-3xl text-foreground mb-8"
//         >
//           A New Vision of Luxury Hotel
//         </motion.h2>

//         <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
//           {services.map((s, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1, duration: 0.6 }}
//               whileHover={{ y: -5, scale: 1.05 }}
//               className={`flex flex-col rounded-sm items-center gap-4 py-8 px-4 border border-border transition-colors group ${
//                 i === 1 ? "" : ""
//               }`}
//             >
//               <s.icon className={`w-7 h-7 ${i === 1 ? "text-primary" : "text-primary group-hover:text-primary"}`} strokeWidth={1} />
//               <span className={` text-sm ${i === 1 ? "" : "text-foreground"}`}>
//                 {s.label}
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WelcomeSection;






















// src/components/WelcomeSection.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Utensils, Coffee, Car, Sparkles, BedDouble } from "lucide-react";
import { API_URL } from "../config/api";

const iconMap = {
  "Friendly Service": Utensils,
  "Get Breakfast": Coffee,
  "Transfer Services": Car,
  "Suits": Sparkles,
  "Cozy Rooms": BedDouble,
};

const defaultIcons = [Utensils, Coffee, Car, Sparkles, BedDouble];

const WelcomeSection = () => {
  const [sectionData, setSectionData] = useState({
    main_title: "A New Vision of Luxury Hotel",
    cards: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}/home-section2`);
      const result = await response.json();
      if (result.success && result.data) {
        setSectionData({
          main_title: result.data.main_title || "A New Vision of Luxury Hotel",
          cards: result.data.cards || []
        });
      }
    } catch (error) {
      console.error("Error fetching section 2 data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-5 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="h-8 w-48 bg-gray-200 animate-pulse mx-auto mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-32 bg-gray-200 animate-pulse rounded-sm" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-5 bg-background">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl text-foreground mb-8"
        >
          {sectionData.main_title}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {sectionData.cards.map((card, i) => {
            const Icon = iconMap[card.title] || defaultIcons[i % defaultIcons.length];
            return (
              <motion.div
                key={card.id || i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex flex-col rounded-sm items-center gap-4 py-8 px-4 border border-border transition-colors group"
              >
                <Icon className="w-7 h-7 text-primary" strokeWidth={1} />
                <span className="text-sm text-foreground">
                  {card.title}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;