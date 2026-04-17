import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="Luxury Hotel Room"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-[#391F14]/70 to-transparent" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-normal italic leading-[1.1]"
        >
          World Class
          <br />
          Accommodation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 text-primary-foreground/80 font-body text-base md:text-lg max-w-md leading-relaxed"
        >
          Discover a hotel that defines
          <br />
          a new dimension of luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10"
        >
          <a
            href="#about"
            className="inline-block px-12 py-4 bg-primary text-primary-foreground font-body text-sm tracking-wider hover:bg-primary/90 transition-colors"
          >
            View More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
