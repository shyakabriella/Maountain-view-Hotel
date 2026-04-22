import React from "react";

export default function ConferenceStats() {
  return (
    <section className="py-16 bg-[#f6f6f2]">
      <div className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        <div>
          <h2 className="text-3xl font-bold text-[#2E7D32]">200+</h2>
          <p className="text-sm text-gray-600">Events Hosted</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#2E7D32]">5000+</h2>
          <p className="text-sm text-gray-600">Guests Served</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#2E7D32]">3</h2>
          <p className="text-sm text-gray-600">Event Spaces</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#2E7D32]">24/7</h2>
          <p className="text-sm text-gray-600">Support Team</p>
        </div>

      </div>
    </section>
  );
}