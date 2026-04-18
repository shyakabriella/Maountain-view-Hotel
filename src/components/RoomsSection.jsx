import { Star, ArrowRight } from "lucide-react";
import welcomeBg from "@/assets/images/pool3.JPG";
import room1 from "@/assets/images/photo_33.JPG";
import room2 from "@/assets/images/photo_34.JPG";
import room3 from "@/assets/images/photo_35.JPG";
import room4 from "@/assets/images/photo_36.JPG";

const rooms = [
  { name: "Suite Room", image: room1 },
  { name: "Family Room", image: room2 },
  { name: "Deluxe Room", image: room3 },
  { name: "Luxury Room", image: room4 },
  { name: "Superior Room", image: room1 },
];

const RoomsSection = () => {
  return (
    <section id="rooms" className="py-20 bg-hotel-light-gray">
      <div className="container mx-auto px-6 text-center mb-12">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
          MOUNTAINVIEWHOTEL ROOMS
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground">
          Hotel Master's Rooms
        </h2>
      </div>

      {/* First row */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Welcome card */}
        <div className="relative h-80 lg:h-auto overflow-hidden">
          <img
            src={welcomeBg}
            alt="Welcome to MountainViewHotel"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/80 flex flex-col justify-end p-8">
            <h3 className="font-display text-3xl text-white">
              Welcome to{" "}
              <span className="text-primary italic">MountainView</span> Hotel
            </h3>
            <p className="mt-2 text-sm text-white/80">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>

        {/* First 2 rooms */}
        {rooms.slice(0, 2).map((room, i) => (
          <RoomCard key={i} room={room} />
        ))}
      </div>

      {/* Second row */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {rooms.slice(2).map((room, i) => (
          <RoomCard key={i} room={room} />
        ))}
      </div>
    </section>
  );
};

const RoomCard = ({ room }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Image */}
      <div className="h-64 md:h-full overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center p-8 bg-background text-center">
        {/* Stars */}
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-3 h-3 fill-primary text-primary"
            />
          ))}
        </div>

        {/* Room name */}
        <p className="text-primary font-body text-2xl font-light">
          {room.name}
        </p>

        <h3 className="font-display text-2xl mt-2 text-foreground">
          {room.name}
        </h3>

        {/* Button */}
        <a
          href="https://direct-book.com/properties/mountainviewhotelandapartment?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2026-04-18&checkOutDate=2026-04-19&trackPage=yes"
          className="mt-4 border border-foreground px-6 py-2 font-body text-sm text-foreground hover:bg-foreground hover:text-background transition-all duration-300 flex items-center gap-2"
        >
          View Room Details <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default RoomsSection;