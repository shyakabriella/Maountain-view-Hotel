import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    title: "Nice Accommodation",
    text: "Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch.",
    author: "Omeka Lotus",
  },
  {
    title: "Delicious Food",
    text: "Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch.",
    author: "Omeka Lotus",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 text-muted-foreground hover:text-foreground transition-colors z-10 hidden md:block">
            <ChevronLeft size={32} strokeWidth={1} />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 text-muted-foreground hover:text-foreground transition-colors z-10 hidden md:block">
            <ChevronRight size={32} strokeWidth={1} />
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto"
          >
            {testimonials.map((t, i) => (
              <div key={i}>
                <h3 className="font-heading text-2xl md:text-3xl text-primary italic font-normal mb-6">
                  {t.title}
                </h3>
                <p className="text-foreground leading-relaxed mb-8 text-lg">
                  &ldquo;{t.text}
                </p>
                <p className="font-heading text-foreground font-bold">
                  - {t.author}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
