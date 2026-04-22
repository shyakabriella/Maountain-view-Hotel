import React from "react";

export default function ConferenceAmenities() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl mb-12">Conference Facilities</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          
          {[
            "High-Speed Wi-Fi",
            "Projectors & Screens",
            "Sound System",
            "Air Conditioning",
            "Catering Services",
            "Event Planning Support",
          ].map((item) => (
            <div
              key={item}
              className="p-6 border border-gray-300 rounded-xl 
              hover:border-green-600 hover:shadow-md 
              transition-all duration-300"
            >
              {item}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}