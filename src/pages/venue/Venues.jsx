import RoomsSection from "../../components/RoomsSection";
import heroBg from "@/assets/hero-bg.jpg";

const Rooms = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden bg-background">

      {/* CENTERED HERO */}
      <section className="relative h-[98vh] min-h-[420px] flex items-center">
        <img
          src={heroBg}
          alt="MountainViewHotel rooms"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* LEFT SIDE CONTENT */}
        <div className="relative z-10 ml-20 mt-30 max-w-2xl text-white space-y-5">
          
          {/* Small Label */}
          <p className="text-xs tracking-[0.3em] uppercase text-white/70">
            Stay With Us
          </p>

          {/* Main Title */}
          <h1 className="text-2xl md:text-4xl leading-[1.2]">
            Elegant & Comfortable Rooms
          </h1>

          {/* Description */}
          <p className="text-[12px] md:text-[14px] text-white/85 leading-relaxed max-w-xl">
            Discover thoughtfully designed rooms that blend comfort, style, and modern convenience—
            offering the perfect space to relax, recharge, and enjoy every moment of your stay.
          </p>

        </div>
      </section>

      <RoomsSection />
      
    </div>
  );
};

export default Rooms;