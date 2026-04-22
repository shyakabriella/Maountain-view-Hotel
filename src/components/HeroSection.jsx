import heroBg from "@/assets/images/pool25.JPG";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[950px] w-full overflow-hidden">
      <img
        src={heroBg}
        alt="Luxury resort pool at sunset"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-col items-start justify-center h-full container ml-10 px-6 mt-15">
        
        {/* Small Tagline */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm tracking-[0.25em] uppercase text-white/80"
        >
          Welcome to Luxury & Comfort
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-4 text-[52px] md:text-[64px] lg:text-[72px] leading-[1.05] tracking-tight text-white"
        >
          Discover Unforgettable Stays
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-6 text-white/85 text-base md:text-lg leading-relaxed w-[70%]"
        >
          From elegant accommodations and exceptional dining to seamless services and curated experiences,
          every detail is thoughtfully designed to deliver comfort, style, and unforgettable moments.
        </motion.p>

      </div>
    </section>
  );
};

export default HeroSection;