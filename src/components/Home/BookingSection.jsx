import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar } from "lucide-react";

const BookingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-heading text-3xl md:text-4xl text-primary italic font-normal leading-snug mb-6">
              Ullamcorper mattis,
              <br />
              pulvinar dapibus.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Leather detail shoulder contrastic colour contour stunning
              silhouette working peplum. Statement buttons cover-up tweaks
              patch.
            </p>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-heading text-3xl text-primary italic font-normal mb-8">
              Book A Room
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Check In"
                  className="w-full px-4 py-3.5 border border-border bg-transparent text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary"
                />
                <Calendar size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Check Out"
                  className="w-full px-4 py-3.5 border border-border bg-transparent text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary"
                />
                <Calendar size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
              <select className="w-full px-4 py-3.5 border border-border bg-transparent text-muted-foreground text-sm focus:outline-none focus:border-primary appearance-none">
                <option>Room</option>
                <option>Room One</option>
                <option>Room Two</option>
                <option>Room Three</option>
              </select>
              <select className="w-full px-4 py-3.5 border border-border bg-transparent text-muted-foreground text-sm focus:outline-none focus:border-primary appearance-none">
                <option>Guest</option>
                <option>Guest One</option>
                <option>Guest Two</option>
                <option>Guest Three</option>
              </select>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-body text-sm tracking-wider hover:bg-primary/90 transition-colors"
              >
                Check Availability
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
