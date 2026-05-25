// import React from "react";

// export default function ConferenceStats() {
//   return (
//     <section className="py-16 bg-[#f6f6f2]">
//       <div className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

//         <div>
//           <h2 className="text-3xl font-bold text-[#2E7D32]">200+</h2>
//           <p className="text-sm text-gray-600">Events Hosted</p>
//         </div>

//         <div>
//           <h2 className="text-3xl font-bold text-[#2E7D32]">5000+</h2>
//           <p className="text-sm text-gray-600">Guests Served</p>
//         </div>

//         <div>
//           <h2 className="text-3xl font-bold text-[#2E7D32]">3</h2>
//           <p className="text-sm text-gray-600">Event Spaces</p>
//         </div>

//         <div>
//           <h2 className="text-3xl font-bold text-[#2E7D32]">24/7</h2>
//           <p className="text-sm text-gray-600">Support Team</p>
//         </div>

//       </div>
//     </section>
//   );
// }















import { useState, useEffect } from "react";

const API_URL = (import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8001/api").replace(/\/$/, "");

export default function ConferenceStats() {
  const [stats, setStats] = useState([
    { label: "Events Hosted", value: "200+" },
    { label: "Guests Served", value: "5000+" },
    { label: "Event Spaces", value: "3" },
    { label: "Support Team", value: "24/7" },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch(`${API_URL}/conference-stats`);
      const result = await response.json();
      if (result.success && result.data && result.data.length > 0) {
        setStats(result.data.map(stat => ({
          label: stat.label,
          value: stat.value,
        })));
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-[#f6f6f2]">
        <div className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-20 bg-gray-200 animate-pulse rounded-lg" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-[#f6f6f2]">
      <div className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <h2 className="text-3xl font-bold text-[#2E7D32]">{stat.value}</h2>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}