import RoomsSection from "../../components/RoomsSection";
import heroBg from "@/assets/hero-bg.jpg";

const Rooms = () => {
  return (
    <div className="overflow-x-hidden bg-background">

      <section className="relative h-[58vh] min-h-[420px] flex items-end">
        <img
          src={heroBg}
          alt="MountainViewHotel rooms"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 container mx-auto px-6 pb-14 text-white">
          <p className="font-body text-xs tracking-[0.24em] uppercase text-white/80 mb-3">
            MountainViewHotel Rooms
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-none">Rooms</h1>
        </div>
      </section>
      <RoomsSection />
      
    </div>
  );
};

export default Rooms;
