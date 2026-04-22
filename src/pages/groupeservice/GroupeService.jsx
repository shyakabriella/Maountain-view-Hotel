
import RestaurantSection from "../../components/RestaurantSection";
import heroBg from "@/assets/images/resto2.JPG";
import { Link } from "react-router-dom";

const Restaurant = () => {
  return (
    <div className="overflow-hidden bg-background">

      <section className="relative h-[98vh] min-h-[420px] flex items-end">
        <img
          src={heroBg}
          alt="MountainViewHotel restaurant"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 container mx-auto px-6 pb-14 text-white text-center">
          <p className="font-body text-xs tracking-[0.18em] uppercase text-white/80 mb-4">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>{" "}
            <span className="mx-1">/</span> Restaurant
          </p>
          <h1 className="font-display text-3xl md:text-5xl leading-none">Restaurant</h1>
        </div>
      </section>

      <RestaurantSection />
    </div>
  );
};

export default Restaurant;
