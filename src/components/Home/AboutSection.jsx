import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Top heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-foreground italic font-normal leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit tellus,
            luctus ullamcorper mattis, pulvinar dapibus.
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-heading text-3xl md:text-4xl text-primary italic font-normal leading-snug mb-6">
              Ullamcorper mattis,
              <br />
              pulvinar dapibus.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Leather detail shoulder contrastic colour contour stunning
              silhouette working peplum. Statement buttons cover-up tweaks
              patch.
            </p>
            <a
              href="#rooms"
              className="inline-block px-12 py-4 bg-primary text-primary-foreground font-body text-sm tracking-wider hover:bg-primary/90 transition-colors"
            >
              Learn More
            </a>
          </motion.div>

          {/* Right: overlapping images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <img
              src={about1}
              alt="Resort pool"
              loading="lazy"
              className="w-full md:w-[85%] h-[400px] object-cover"
            />
            <img
              src={about2}
              alt="Mountain lodge"
              loading="lazy"
              className="hidden md:block absolute -bottom-12 right-0 w-[55%] h-[250px] object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
