import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Nathan Smith",
    role: "GUESTS",
    text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    name: "Sarah Johnson",
    role: "GUESTS",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
  },
  {
    name: "Michael Brown",
    role: "GUESTS",
    text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  // 🔥 auto switch every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-6 bg-background"
    >
      <div className="container mx-auto px-6 max-w-3xl text-center">

        {/* Avatar / Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="relative w-20 h-20 rounded-full bg-muted flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-muted-foreground/20" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Quote className="w-4 h-4 text-primary-foreground" />
            </div>
          </div>
        </motion.div>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>

        {/* Testimonial Text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="font-display text-lg italic text-muted-foreground leading-relaxed mb-8"
          >
            {testimonials[active].text}
          </motion.p>
        </AnimatePresence>

        {/* Name + Role */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`person-${active}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="font-display text-xl text-foreground">
              {testimonials[active].name}
            </h4>

            <p className="font-body text-xs tracking-[0.2em] text-muted-foreground mt-1 uppercase">
              {testimonials[active].role}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === active ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;