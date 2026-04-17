import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const rooms = [
  { img: room1, name: "Ullamcorper mattis, pulvinar in the dapibus.", price: "$450/Night" },
  { img: room2, name: "Ullamcorper mattis, pulvinar in the dapibus.", price: "$450/Night" },
  { img: room3, name: "Ullamcorper mattis, pulvinar in the dapibus.", price: "$450/Night" },
  { img: gallery1, name: "Ullamcorper mattis, pulvinar in the dapibus.", price: "$450/Night" },
  { img: gallery3, name: "Ullamcorper mattis, pulvinar in the dapibus.", price: "$450/Night" },
];

const RoomsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rooms" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-foreground italic font-normal leading-relaxed">
            Luctus ullamcorper mattis,
            <br />
            pulvinar dapibus.
          </h2>
        </motion.div>

        <div 
          className="overflow-x-scroll pb-4"
          style={{
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none', /* IE and Edge */
          }}
        >
          <div className="flex gap-6 min-w-max">
            {rooms.map((room, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-[280px] flex-shrink-0 group cursor-pointer"
              >
                <div className="overflow-hidden">
                  <img
                    src={room.img}
                    alt={room.name}
                    loading="lazy"
                    className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-base font-normal text-foreground leading-snug flex-1">
                      {room.name}
                    </h3>
                    <span className="text-primary font-body text-sm font-bold whitespace-nowrap">
                      {room.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    Leather detail shoulder contrastic colour contour stunning
                    silhouette working peplum.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
