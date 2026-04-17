import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";
import videoBg from "@/assets/video-bg.jpg";

const VideoSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-0">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden"
        >
          <img
            src={videoBg}
            alt="Hotel Preview"
            loading="lazy"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center gap-4">
            <button className="w-16 h-16 rounded-full border-2 border-primary-foreground/70 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors">
              <Play size={24} className="text-primary-foreground ml-1" />
            </button>
            <span className="font-heading text-3xl text-primary-foreground italic">
              Hotel Preview
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
