import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg1 from "@/assets/images/pool25.JPG";
import heroBg2 from "@/assets/images/entrance.JPG";

const images = [heroBg1, heroBg2];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-[550px] w-full overflow-hidden">
      {/* Background Image with Slide/Fade Animation */}
      <AnimatePresence>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt="Luxury resort pool at sunset"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          initial={{ opacity: 0, scale: 1.1, y: 50 }}   // start slightly zoomed and shifted
          animate={{ opacity: 1, scale: 1, y: 0 }}      // animate to normal
          exit={{ opacity: 0, scale: 1.05, y: -50 }}    // exit with slight upward shift
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full container ml-10 px-6 mt-19">
        
        {/* Small Tagline */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs tracking-[0.25em] uppercase text-white/80"
        >
          Welcome to Luxury & Comfort
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-4 text-2xl md:text-4xl leading-[1.05] tracking-tight text-white"
        >
          Discover Unforgettable Stays
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-6 text-white/85 text-[12px] md:text-[14px] leading-relaxed w-[70%]"
        >
          From elegant accommodations and exceptional dining to seamless services and curated experiences,
          every detail is thoughtfully designed to deliver comfort, style, and unforgettable moments.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
