import React from "react";
import { Link } from "react-router-dom";

export default function ConferenceCta() {
  return (
    <section className="py-20 px-6 bg-hotel-light-gray">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl mb-4">Plan Your Event With Us</h2>

        <p className="text-sm text-muted-foreground mb-8">
          Our team is ready to help you organize a seamless and memorable event.
        </p>

        <Link
          to="https://direct-book.com/properties/mountainviewhotelandapartment/contact"
          className="inline-block text-sm uppercase bg-primary text-white px-10 py-4 rounded-full hover:bg-primary/90"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
