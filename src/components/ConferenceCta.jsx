// import React from "react";
// import { Link } from "react-router-dom";

// export default function ConferenceCta() {
//   return (
//     <section className="py-20 px-6 bg-hotel-light-gray">
//       <div className="container mx-auto max-w-2xl text-center">
//         <h2 className="text-3xl md:text-4xl mb-4">Plan Your Event With Us</h2>

//         <p className="text-sm text-muted-foreground mb-8">
//           Our team is ready to help you organize a seamless and memorable event.
//         </p>

//         <Link
//           to="https://direct-book.com/properties/mountainviewhotelandapartment/contact"
//           className="inline-block text-sm uppercase bg-primary text-white px-10 py-4 rounded-full hover:bg-primary/90"
//         >
//           Book Now
//         </Link>
//       </div>
//     </section>
//   );
// }



















import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = (import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8001/api").replace(/\/$/, "");

export default function ConferenceCta() {
  const [ctaData, setCtaData] = useState({
    title: "Plan Your Event With Us",
    description: "Our team is ready to help you organize a seamless and memorable event.",
    button_text: "Book Now",
    button_link: "https://direct-book.com/properties/mountainviewhotelandapartment/contact",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCtaData();
  }, []);

  const fetchCtaData = async () => {
    try {
      const response = await fetch(`${API_URL}/conference-cta`);
      const result = await response.json();
      if (result.success && result.data) {
        setCtaData({
          title: result.data.title || "Plan Your Event With Us",
          description: result.data.description || "",
          button_text: result.data.button_text || "Book Now",
          button_link: result.data.button_link || "https://direct-book.com/properties/mountainviewhotelandapartment/contact",
        });
      }
    } catch (error) {
      console.error("Error fetching CTA data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20 px-6 bg-hotel-light-gray">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="h-10 w-64 bg-gray-200 animate-pulse mx-auto mb-4" />
          <div className="h-12 w-48 bg-gray-200 animate-pulse mx-auto mb-8" />
          <div className="h-12 w-32 bg-gray-200 animate-pulse mx-auto rounded-full" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-hotel-light-gray">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl mb-4">{ctaData.title}</h2>
        <p className="text-sm text-muted-foreground mb-8">{ctaData.description}</p>
        <Link
          to={ctaData.button_link}
          className="inline-block text-sm uppercase bg-primary text-white px-10 py-4 rounded-full hover:bg-primary/90 transition"
        >
          {ctaData.button_text}
        </Link>
      </div>
    </section>
  );
}