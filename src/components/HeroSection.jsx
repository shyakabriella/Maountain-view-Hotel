import heroBg from "@/assets/images/entrance.JPG";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[600px] w-full overflow-hidden">
      <img
        src={heroBg}
        alt="Luxury resort pool at sunset"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 flex flex-col items-start justify-center h-full container mx-auto px-6">
        <p className="font-body text-sm tracking-[0.16em] uppercase text-white/90">
          Mountain View Hotel
        </p>
        <p className="mt-2 font-body text-sm tracking-[0.22em] uppercase text-white/85">
          More than a hotel... an experience
        </p>
        <h1 className="mt-5 font-display text-[52px] md:text-[64px] lg:text-[72px] leading-[1.05] tracking-tight text-white">
          Experience Epic Beauty
        </h1>
      </div>
      <button
        className="absolute right-16 top-1/2 -translate-y-1/2 z-10 w-20 h-20 rounded-full flex items-center justify-center transition-transform hover:scale-110"
        style={{ backgroundColor: "white" }}
      >
        <Play className="w-6 h-6 ml-1 text-primary fill-primary" />
      </button>
    </section>
  );
};

export default HeroSection;
