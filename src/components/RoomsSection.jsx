import { Star, ArrowRight } from "lucide-react";
import welcomeBg from "@/assets/images/pool3.JPG";
import room1 from "@/assets/images/IMG_4411.jpg";
import room2 from "@/assets/images/IMG_4378.jpg";
import room3 from "@/assets/images/photo_18.JPG";
import room4 from "@/assets/images/photo_23.JPG";
import room5 from "@/assets/images/photo_92.JPG";
import room6 from "@/assets/images/photo_89.JPG";
import { motion } from "framer-motion";

const rooms = [
  { name: "Deluxe Double Room", image: room2 },
  { name: "Deluxe Twin Room", image: room1 },
  { name: "Executive Suite", image: room2 },
  { name: "Executive Room", image: room4 },
  { name: "One Bedroom Apartment", image: room2 },
  { name: "Two Bedroom Apartment", image: room1 },
  { name: "Three Bedroom Apartment", image: room4 },
];

const RoomsSection = () => {
  return (
    <section id="rooms" className="py-15 bg-hotel-light-gray">

      {/* HEADER */}
      <div className="text-center mb-10 px-6">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">
          Our Accommodations
        </p>
        <h2 className="text-2xl md:text-3xl text-foreground">
          Find Your Perfect Stay
        </h2>
      </div>

      {/* FEATURED CARD */}
      <div className="flex justify-center px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-5xl h-[370px] rounded-3xl overflow-hidden group shadow-lg"
        >
          <img
            src={welcomeBg}
            alt="Welcome"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-8">
            <h3 className="text-2xl md:text-3xl text-white font-semibold">
              <span className="text-primary">MountainView</span>
            </h3>

            <p className="mt-3 text-white/80 max-w-md leading-relaxed text-sm">
              Experience comfort, elegance, and exceptional hospitality in every stay.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ROOMS GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 px-6">
        {rooms.slice(0, 6).map((room, i) => (
          <RoomCard key={i} room={room} index={i} />
        ))}
      </div>

      {/* LAST ROOM CENTERED */}
      <div className="flex justify-center mt-10 px-6">
        <div className="w-full sm:w-1/2 max-w-sm">
          <RoomCard room={rooms[6]} index={6} />
        </div>
      </div>

    </section>
  );
};

const RoomCard = ({ room, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
    >
      {/* IMAGE */}
      <div className="h-60 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover object-center hover:scale-110 transition duration-700"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 text-center">
        <div className="flex justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-primary text-primary" />
          ))}
        </div>

        <h3 className="text-base md:text-lg font-semibold text-foreground">
          {room.name}
        </h3>

        <a
          href="https://direct-book.com/properties/mountainviewhotelandapartment?locale=en"
          className="mt-4 inline-flex items-center gap-2 text-xs border border-foreground px-5 py-2 rounded-md hover:bg-foreground hover:text-white transition"
        >
          View Details <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
};

export default RoomsSection;