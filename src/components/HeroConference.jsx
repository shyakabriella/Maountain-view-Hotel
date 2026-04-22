import React from "react";
import { Link } from "react-router-dom";

const heroBg =
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1600";

export default function HeroConference() {
  return (
    <section className="relative h-[78vh] min-h-[350px] flex items-end -mt-[100px]">
      
      <img
        src={heroBg}
        alt="Conference hall"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 container mx-auto px-6 pb-14 text-white text-center">
        
        <p className="text-xs tracking-[0.18em] uppercase text-white/80 mb-4">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>{" "}
          / Conferences
        </p>

        <h1 className="text-2xl md:text-3xl">
          Events & Conferences
        </h1>

        <p className="mt-4 text-[10px] text-white/80 max-w-xl mx-auto">
          Elegant spaces designed for meetings, weddings, and unforgettable events.
        </p>

      </div>
    </section>
  );
}