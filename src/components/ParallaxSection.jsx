import parallaxBg from "@/assets/images/IMG_4378.jpg";
import { motion } from "framer-motion";

const ParallaxSection = () => {
  return (
    <section
      className="relative h-[70vh] bg-fixed bg-center bg-cover flex items-center"
      style={{ backgroundImage: `url(${parallaxBg})` }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative z-10 container mx-auto px-6"
      >
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight max-w-3xl" style={{ color: "white" }}>
          We're Most Recommended Hotel
        </h2>
        <hr className="max-w-[43%] mt-2 border-t-3 border-primary" />
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
