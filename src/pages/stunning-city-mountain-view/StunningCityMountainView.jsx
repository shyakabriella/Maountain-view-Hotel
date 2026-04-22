import stunningView1 from "@/assets/images/stunningviews1.JPG";
import stunningView2 from "@/assets/images/stunningviews2.JPG";
import stunningView3 from "@/assets/images/stunningviews3.JPG";
import stunningView4 from "@/assets/images/stunningviews4.JPG";
import stunningView5 from "@/assets/images/stunningviews5.JPG";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StunningCityMountainView = () => {
  const stunningImages = [
    { src: stunningView1, alt: "Stunning city and mountain view 1" },
    { src: stunningView2, alt: "Stunning city and mountain view 2" },
    { src: stunningView3, alt: "Stunning city and mountain view 3" },
    { src: stunningView4, alt: "Stunning city and mountain view 4" },
    { src: stunningView5, alt: "Stunning city and mountain view 5" },
  ];

  return (
    <div className="overflow-x-hidden bg-background">
      <section className="relative h-[58vh] min-h-[420px] flex items-end">
        <img
          src={stunningView1}
          alt="Stunning city and mountain view at Mountain View Hotel"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 container mx-auto px-6 pb-14 text-white text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className=" text-xs tracking-[0.18em] uppercase text-white/80 mb-4"
          >
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>{" "}
            <span className="mx-1">/</span> Stunning City &amp; Mountain View
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className=" text-5xl md:text-7xl leading-none"
          >
            Stunning City &amp; Mountain View
          </motion.h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className=" text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Signature Experience
              </p>
              <h2 className="mt-4  text-4xl leading-tight text-foreground md:text-5xl">
                Epic Views, Every Moment
              </h2>
              <p className="mt-6  text-base leading-relaxed text-foreground/80">
                Mountain View Hotel & Apartments is a 3-star property located in the serene neighborhood of Gisozi, Kigali. Combining hotel-style comfort with apartment living, we offer a relaxing environment with beautiful views of the Kigali skyline.

                Whether you're traveling for business or leisure, our property provides the perfect balance of privacy, convenience, and personalized service.Wake up to sweeping skyline views and serene mountain landscapes
                in one unforgettable setting. This space is designed for guests
                who want elegance, comfort, and picture-perfect scenery
                throughout their stay.
              </p>
              <p className="mt-4  text-base leading-relaxed text-foreground/80">
                Enjoy peaceful mornings, golden-hour sunsets, and a premium
                atmosphere ideal for both leisure and special occasions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={stunningView1}
                alt="Luxury room with city and mountain view"
                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
                width={1200}
                height={900}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className=" text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Gallery
            </p>
            <h2 className="mt-4  text-4xl leading-tight text-foreground md:text-5xl">
              Explore Our Stunning Views
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stunningImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="overflow-hidden rounded-lg shadow-lg group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[320px] object-cover hover:scale-110 transition-transform duration-500"
                  width={800}
                  height={600}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StunningCityMountainView;
