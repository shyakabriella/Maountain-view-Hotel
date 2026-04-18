import catRooms from "@/assets/images/photo_33.JPG";
import catPool from "@/assets/images/pool3.JPG";
import catRestaurant from "@/assets/images/resto1.JPG";
import room1 from "@/assets/room-1.jpg";
import { Link } from "react-router-dom";

const categories = [
  { label: "ROOMS", image: catRooms, link: "/rooms" },
  { label: "SWIMMING POOL", image: catPool, link: "/pool" },
  { label: "RESTAURANT", image: catRestaurant, link: "/restaurant" },
  { label: "Special Rooms", image: room1, link: "/rooms" },
];

const CategoriesSection = () => {
  return (
    <section className="py-0">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {categories.map((cat, i) => (
            <Link key={i} to={cat.link} className="relative h-64 overflow-hidden group cursor-pointer block">
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={512}
                height={512}
              />
              <div className="absolute inset-0 bg-black/40 flex items-end justify-center pb-8">
                <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "white" }}>
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
