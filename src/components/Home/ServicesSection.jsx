import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";

const services = [
  { img: service1, title: "Beautiful Accommodation" },
  { img: service2, title: "Beautiful Accommodation" },
  { img: service3, title: "Beautiful Accommodation" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-heading text-2xl font-normal text-foreground mt-6 mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Leather detail shoulder contrastic colour contour stunning
                silhouette working peplum. Statement buttons cover-up tweaks
                patch.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
