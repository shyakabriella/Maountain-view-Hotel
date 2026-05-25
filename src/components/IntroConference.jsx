// import React from "react";

// export default function IntroConference() {
//   return (
//     <section className="py-16 px-6">
//       <div className="container mx-auto max-w-3xl text-center">
//         <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">
//           Host With Us
//         </p>
//         <h2 className="text-2xl md:text-3xl mb-6">
//           Perfect Spaces for Every Occasion
//         </h2>
//         <p className="text-[12px] text-muted-foreground">
//           From corporate meetings to elegant weddings, our conference and event
//           spaces are equipped with modern facilities and tailored services to
//           ensure success.
//         </p>
//       </div>
//     </section>
//   );
// }











import { useState, useEffect } from "react";

const API_URL = (import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8001/api").replace(/\/$/, "");

export default function IntroConference() {
  const [welcomeData, setWelcomeData] = useState({
    title: "Host With Us",
    subtitle: "Perfect Spaces for Every Occasion",
    description: "From corporate meetings to elegant weddings, our conference and event spaces are equipped with modern facilities and tailored services to ensure success.",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWelcomeData();
  }, []);

  const fetchWelcomeData = async () => {
    try {
      const response = await fetch(`${API_URL}/conference-welcome`);
      const result = await response.json();
      if (result.success && result.data) {
        setWelcomeData({
          title: result.data.title || "Host With Us",
          subtitle: result.data.subtitle || "Perfect Spaces for Every Occasion",
          description: result.data.description || "",
        });
      }
    } catch (error) {
      console.error("Error fetching conference welcome:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="h-4 w-24 bg-gray-200 animate-pulse mx-auto mb-4" />
          <div className="h-8 w-48 bg-gray-200 animate-pulse mx-auto mb-6" />
          <div className="h-16 bg-gray-200 animate-pulse mx-auto" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">
          {welcomeData.subtitle}
        </p>
        <h2 className="text-2xl md:text-3xl mb-6">{welcomeData.title}</h2>
        <p className="text-[12px] text-muted-foreground">{welcomeData.description}</p>
      </div>
    </section>
  );
}