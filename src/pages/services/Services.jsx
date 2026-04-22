import heroBg from "@/assets/images/196C4897.JPG";
import pool from "@/assets/images/pool3.JPG";
import accomodation from "@/assets/images/IMG_4378.jpg";
import bar from "@/assets/images/bar3.JPG";
import Resto from "@/assets/images/IMG_4545.JPG";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Luxury Accommodation",
    image: accomodation,
    desc: "Choose from our range of elegantly furnished rooms and suites, each designed to provide maximum comfort with stunning views.",
  },
  {
    title: "Fine Dining Restaurant",
    image: Resto,
    desc: "Savour expertly crafted cuisine featuring both local Rwandan flavours and international dishes.",
  },
  {
    title: "Swimming Pool",
    image: pool,
    desc: "Relax in our outdoor pool surrounded by greenery — perfect for refreshing moments.",
  },
  {
    title: "Events & Conferences",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900",
    desc: "Host meetings, weddings, or celebrations in fully equipped elegant spaces.",
  },
  {
    title: "Bar & Lounge",
    image: bar,
    desc: "Enjoy premium drinks in a relaxing and stylish lounge environment.",
  },
  {
    title: "Airport Transfers",
    image: "https://images.unsplash.com/photo-1556122071-e404eaedb77f?w=900",
    desc: "Travel stress-free with our private and comfortable airport transfer services.",
  },
  {
    title: "Wellness & Leisure",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900",
    desc: "Relax with massages and wellness services designed to refresh your body and mind.",
  },
  {
    title: "Breakfast & Room Service",
    image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=900",
    desc: "Enjoy delicious breakfast or convenient in-room dining anytime.",
  },
  {
    title: "High-Speed Wi-Fi",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900",
    desc: "Stay connected with fast and reliable internet throughout your stay.",
  },
];

const Services = () => {
  return (
    <div className="overflow-x-hidden bg-background">

      {/* HERO */}
      <section className="relative h-[98vh] min-h-[420px] flex items-end">
        <img
          src={heroBg}
          alt="Mountain View Hotel services"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 container mx-auto px-6 pb-14 text-white text-center">
          <p className="text-xs tracking-[0.18em] uppercase text-white/80 mb-4">
            <Link to="/" className="hover:text-primary">Home</Link> / Services
          </p>
          <h1 className="text-3xl md:text-5xl">Services</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-10 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl mb-6">
            Every Detail, Thoughtfully Crafted
          </h2>
          <p className="text-sm text-muted-foreground">
            At Mountain View Hotel & Apartment, our services are designed to exceed expectations.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-hotel-light-gray py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service) => (
              <div
                key={service.title}
                className="relative h-[300px] rounded-2xl overflow-hidden group shadow-md"
              >
                {/* IMAGE */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition" />

                {/* CONTENT */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition">
                    {service.title}
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to Experience It?
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            Book your stay today and let us take care of everything.
          </p>
          <Link
            to="https://direct-book.com/properties/mountainviewhotelandapartment/contact"
            className="inline-block text-sm uppercase bg-primary text-white px-10 py-4 rounded-full hover:bg-primary/90"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;